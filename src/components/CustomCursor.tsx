import React, { useEffect, useState } from 'react';

interface CustomCursorProps {
  enabled: boolean;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ enabled }) => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const matchMediaPointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsPointerDevice(matchMediaPointer.matches);
    const handlePointerChange = (e: MediaQueryListEvent) => setIsPointerDevice(e.matches);
    matchMediaPointer.addEventListener('change', handlePointerChange);
    return () => matchMediaPointer.removeEventListener('change', handlePointerChange);
  }, []);

  useEffect(() => {
    if (!enabled || !isPointerDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest('a') ||
          target.closest('button') ||
          target.closest('[role="button"]') ||
          target.closest('input') ||
          target.closest('textarea'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [enabled, isPointerDevice]);

  useEffect(() => {
    if (!enabled || !isPointerDevice) return;
    let animId: number;
    const lerp = () => {
      setTrailing((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      animId = requestAnimationFrame(lerp);
    };
    animId = requestAnimationFrame(lerp);
    return () => cancelAnimationFrame(animId);
  }, [position, enabled, isPointerDevice]);

  if (!enabled || !isPointerDevice || !isVisible) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden" aria-hidden="true">
      <div
        className={`fixed top-0 left-0 rounded-full border border-accent-500/50 transition-[width,height,background-color] duration-200 ease-out ${
          isHovered
            ? 'w-10 h-10 bg-accent-500/15 border-accent-400 backdrop-blur-[1px]'
            : 'w-6 h-6 bg-transparent'
        }`}
        style={{
          transform: `translate3d(${trailing.x}px, ${trailing.y}px, 0) translate(-50%, -50%)`,
        }}
      />
      <div
        className={`fixed top-0 left-0 rounded-full bg-accent-500 transition-transform duration-75 ease-out ${
          isHovered ? 'scale-150 bg-accent-400' : 'scale-100'
        }`}
        style={{
          width: '5px',
          height: '5px',
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </div>
  );
};

