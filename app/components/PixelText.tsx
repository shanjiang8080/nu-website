"use client"
import React, { useRef, useEffect } from 'react';

interface PixelTextProps {
  text: string;
}

export default function PixelText({ text }: PixelTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const fontImg = new Image();
    fontImg.src = '/pixel-font-3x4.png'; // Your font grid asset in /public
    
    fontImg.onload = () => {
      const charWidth = 3;  // Width of one character in your PNG
      const charHeight = 4; // Height of one character in your PNG
      
      // Disable browser smoothing for crisp pixels
      ctx.imageSmoothingEnabled = false;
      
      canvas.width = text.length * (charWidth + 1);
      canvas.height = charHeight;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Simple ASCII mapping assuming sheet starts at Space (32)
      for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i) - 1;
        const fontIndex = charCode - 32; // Offset depending on your image layout
        
        const sx = fontIndex * charWidth;
        const sy = 0;
        
        // Draw the character
        ctx.drawImage(fontImg, sx, sy, charWidth, charHeight, i * (charWidth + 1), 0, charWidth, charHeight);
      }
    };
  }, [text]);

  return (
    <canvas 
      ref={canvasRef} 
      aria-label={text}
      className="[image-rendering:pixelated]"
      style={{
        width: `calc(((${text.length} * 4) - 1) * var(--spacing-pixel-unit))`,
        height: `calc(4 * var(--spacing-pixel-unit))`,
        position: "relative",
        top: "calc(-1 *var(--spacing-pixel-unit))",
        left: "var(--spacing-pixel-unit)"
      }}
    />
  );
}