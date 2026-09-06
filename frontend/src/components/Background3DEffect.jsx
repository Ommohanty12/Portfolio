import React, { useEffect, useRef } from 'react';

const Background3DEffect = () => {
    const canvasRef = useRef(null);
    const requestRef = useRef(null);

    const mousePos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
    const scrollPos = useRef({ y: 0, targetY: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize, { passive: true });

        // Touch & low-power detection
        const isTouch = ('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            window.matchMedia('(hover: none) and (pointer: coarse)').matches;

        // Particle count scaled for performance
        const particleCount = isTouch ? 25 : 55;
        const particles = [];
        const perspective = 600;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: (Math.random() - 0.5) * width * 1.8,
                y: (Math.random() - 0.5) * height * 2.2,
                z: Math.random() * 800 - 400,
                baseX: (Math.random() - 0.5) * width * 1.8,
                baseY: (Math.random() - 0.5) * height * 2.2,
                baseZ: Math.random() * 800 - 400,
                size: Math.random() * 2 + 1.2,
                color: Math.random() > 0.4 ? '#FF3B00' : '#FF5C26',
                speedX: (Math.random() - 0.5) * 0.4,
                speedY: (Math.random() - 0.5) * 0.4,
                speedZ: (Math.random() - 0.5) * 0.6,
            });
        }

        const handleMouseMove = (e) => {
            mousePos.current.targetX = (e.clientX - width / 2) * 0.08;
            mousePos.current.targetY = (e.clientY - height / 2) * 0.08;
        };

        const handleScroll = () => {
            scrollPos.current.targetY = window.scrollY * 0.35;
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('scroll', handleScroll, { passive: true });

        let rotX = 0;
        let rotY = 0;

        const render = () => {
            // Lerp mouse & scroll for buttery smooth 3D camera response
            mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.05;
            mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.05;
            scrollPos.current.y += (scrollPos.current.targetY - scrollPos.current.y) * 0.08;

            rotY = (mousePos.current.x * Math.PI) / 180;
            rotX = ((mousePos.current.y + scrollPos.current.y * 0.1) * Math.PI) / 180;

            ctx.clearRect(0, 0, width, height);

            const cosX = Math.cos(rotX * 0.3);
            const sinX = Math.sin(rotX * 0.3);
            const cosY = Math.cos(rotY * 0.3);
            const sinY = Math.sin(rotY * 0.3);

            const projected = [];

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // Continuous micro 3D drift
                p.x += p.speedX;
                p.y += p.speedY;
                p.z += p.speedZ;

                // Wrap boundary
                if (p.z < -400) p.z = 400;
                if (p.z > 400) p.z = -400;

                const currY = p.y - scrollPos.current.y * 0.2;

                // 3D Matrix Rotation (Y axis then X axis)
                let x1 = p.x * cosY - p.z * sinY;
                let z1 = p.z * cosY + p.x * sinY;

                let y1 = currY * cosX - z1 * sinX;
                let z2 = z1 * cosX + currY * sinX;

                const depthZ = z2 + 700;
                if (depthZ <= 10) continue;

                const scale = perspective / depthZ;
                const screenX = width / 2 + x1 * scale;
                const screenY = height / 2 + y1 * scale;
                const radius = p.size * scale;

                if (screenX >= -50 && screenX <= width + 50 && screenY >= -50 && screenY <= height + 50) {
                    projected.push({ x: screenX, y: screenY, z: depthZ, color: p.color, radius });

                    // Draw Node Particle
                    ctx.beginPath();
                    ctx.arc(screenX, screenY, Math.max(0.5, radius), 0, Math.PI * 2);
                    ctx.fillStyle = p.color;
                    ctx.globalAlpha = Math.min(0.85, (1000 - depthZ) / 800);
                    ctx.fill();
                }
            }

            // Draw 3D Proximity Mesh Wireframe Connections
            ctx.lineWidth = 0.6;
            for (let i = 0; i < projected.length; i++) {
                for (let j = i + 1; j < projected.length; j++) {
                    const p1 = projected[i];
                    const p2 = projected[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distSq = dx * dx + dy * dy;

                    if (distSq < 16000) {
                        const alpha = (1 - distSq / 16000) * 0.25;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = '#FF3B00';
                        ctx.globalAlpha = alpha;
                        ctx.stroke();
                    }
                }
            }

            ctx.globalAlpha = 1;

            if (!document.hidden) {
                requestRef.current = requestAnimationFrame(render);
            }
        };

        const handleVisibilityChange = () => {
            if (document.hidden) {
                if (requestRef.current) cancelAnimationFrame(requestRef.current);
            } else {
                requestRef.current = requestAnimationFrame(render);
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        requestRef.current = requestAnimationFrame(render);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 opacity-40 mix-blend-screen w-full h-full"
            style={{ willChange: 'transform' }}
        />
    );
};

export default Background3DEffect;
