import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
    const cursorDotRef = useRef(null);
    const cursorRingRef = useRef(null);

    const [isHovered, setIsHovered] = useState(false);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    const mousePos = useRef({ x: -100, y: -100 });
    const ringPos = useRef({ x: -100, y: -100 });
    const requestRef = useRef(null);

    useEffect(() => {
        // Detect touch / coarse pointer devices
        const checkTouch = () => {
            const hasTouch = ('ontouchstart' in window) ||
                (navigator.maxTouchPoints > 0) ||
                window.matchMedia('(hover: none) and (pointer: coarse)').matches;
            setIsTouchDevice(hasTouch);
            return hasTouch;
        };

        if (checkTouch()) {
            document.documentElement.classList.remove('custom-cursor-active');
            return;
        }

        document.documentElement.classList.add('custom-cursor-active');

        const onMouseMove = (e) => {
            mousePos.current.x = e.clientX;
            mousePos.current.y = e.clientY;
            if (!isVisible) setIsVisible(true);
        };

        const onMouseDown = () => setIsMouseDown(true);
        const onMouseUp = () => setIsMouseDown(false);
        const onMouseLeave = () => setIsVisible(false);
        const onMouseEnter = () => setIsVisible(true);

        // Hover detection on interactive elements using event delegation
        const onMouseOver = (e) => {
            const target = e.target;
            if (!target) return;

            const isInteractive = target.closest('a, button, input, textarea, select, [role="button"], .interactive, .sticker-tag, .sticker-tag-red, .glass-card, .paper-card, [data-cursor="pointer"]');
            if (isInteractive) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', onMouseMove, { passive: true });
        window.addEventListener('mousedown', onMouseDown, { passive: true });
        window.addEventListener('mouseup', onMouseUp, { passive: true });
        window.addEventListener('mouseover', onMouseOver, { passive: true });
        document.addEventListener('mouseleave', onMouseLeave, { passive: true });
        document.addEventListener('mouseenter', onMouseEnter, { passive: true });

        // Smooth Lerp Animation Loop using requestAnimationFrame
        const animate = () => {
            // Linear Interpolation (lerp factor 0.18 for fluid ring tracking)
            const lerpFactor = 0.18;
            ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerpFactor;
            ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerpFactor;

            if (cursorDotRef.current) {
                cursorDotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0px) translate(-50%, -50%)`;
            }

            if (cursorRingRef.current) {
                const scale = isMouseDown ? 0.75 : isHovered ? 1.8 : 1;
                cursorRingRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0px) translate(-50%, -50%) scale(${scale})`;
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('mouseover', onMouseOver);
            document.removeEventListener('mouseleave', onMouseLeave);
            document.removeEventListener('mouseenter', onMouseEnter);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
            document.documentElement.classList.remove('custom-cursor-active');
        };
    }, [isVisible, isMouseDown, isHovered]);

    if (isTouchDevice || !isVisible) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden">
            {/* Center Precision Dot */}
            <div
                ref={cursorDotRef}
                className={`fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-primary pointer-events-none transition-opacity duration-200 ${
                    isHovered ? 'opacity-90 scale-125' : 'opacity-100'
                }`}
                style={{
                    willChange: 'transform',
                    boxShadow: '0 0 10px rgba(255, 59, 0, 0.8)',
                }}
            />

            {/* Smooth Trailing Glow Ring */}
            <div
                ref={cursorRingRef}
                className={`fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-primary/70 pointer-events-none transition-colors duration-300 ${
                    isHovered
                        ? 'bg-primary/20 border-primary shadow-[0_0_25px_rgba(255,59,0,0.6)] backdrop-blur-[1px]'
                        : 'bg-transparent shadow-[0_0_12px_rgba(255,59,0,0.3)]'
                }`}
                style={{
                    willChange: 'transform',
                    mixBlendMode: 'screen',
                }}
            />
        </div>
    );
};

export default CustomCursor;
