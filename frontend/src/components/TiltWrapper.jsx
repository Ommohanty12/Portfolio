import React, { useRef, useState, useEffect } from 'react';

const TiltWrapper = ({ children, className = '', maxTilt = 8, scale = 1.02 }) => {
    const cardRef = useRef(null);
    const [transformStyle, setTransformStyle] = useState('');
    const [isHovered, setIsHovered] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        const checkTouch = () => {
            return ('ontouchstart' in window) ||
                (navigator.maxTouchPoints > 0) ||
                window.matchMedia('(hover: none) and (pointer: coarse)').matches;
        };
        setIsTouchDevice(checkTouch());
    }, []);

    const handleMouseMove = (e) => {
        if (isTouchDevice || !cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        const rotateX = (-mouseY / (rect.height / 2)) * maxTilt;
        const rotateY = (mouseX / (rect.width / 2)) * maxTilt;

        setTransformStyle(
            `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`
        );
    };

    const handleMouseEnter = () => {
        if (!isTouchDevice) setIsHovered(true);
    };

    const handleMouseLeave = () => {
        if (!isTouchDevice) {
            setIsHovered(false);
            setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
        }
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`transition-transform duration-300 ease-out ${className}`}
            style={{
                transform: transformStyle || 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                transformStyle: 'preserve-3d',
                willChange: isHovered ? 'transform' : 'auto',
            }}
        >
            {children}
        </div>
    );
};

export default TiltWrapper;
