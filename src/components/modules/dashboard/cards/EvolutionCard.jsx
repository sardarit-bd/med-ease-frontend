"use client";
import { useEffect, useRef } from "react";

export default function EvolutionCard() {
    const canvasRef = useRef(null);

    // Draw the curved line dynamically for a subtle aesthetic
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const w = canvas.width;
        const h = canvas.height;

        // Clear canvas
        ctx.clearRect(0, 0, w, h);

        // Create gradient line
        const gradient = ctx.createLinearGradient(0, 0, w, 0);
        gradient.addColorStop(0, "#3074B5");
        gradient.addColorStop(1, "#61D0BF");

        ctx.beginPath();
        ctx.moveTo(10, 100);
        ctx.bezierCurveTo(60, 40, 120, 160, 170, 80);
        ctx.bezierCurveTo(220, 0, 280, 120, 330, 90);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3;
        ctx.lineCap = "round";
        ctx.stroke();

        // Draw central vertical bar (March)
        const barX = 170;
        const barHeight = 60;
        const barY = 100 - barHeight;
        const barRadius = 6;

        ctx.fillStyle = "#3074B5";
        ctx.beginPath();
        ctx.moveTo(barX - 8, 100);
        ctx.lineTo(barX - 8, barY + barRadius);
        ctx.quadraticCurveTo(barX - 8, barY, barX, barY);
        ctx.quadraticCurveTo(barX + 8, barY, barX + 8, barY + barRadius);
        ctx.lineTo(barX + 8, 100);
        ctx.closePath();
        ctx.fill();

        // Rounded top circle
        ctx.beginPath();
        ctx.arc(barX, barY - 1, 6, 0, Math.PI * 2);
        ctx.fillStyle = "#61D0BF";
        ctx.fill();
    }, []);

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-5">
            <h3 className="font-semibold text-gray-800 text-base md:text-lg mb-3">
                Évolution de l’activité
            </h3>

            {/* Canvas chart */}
            <div className="w-full flex justify-center">
                <canvas
                    ref={canvasRef}
                    width={350}
                    height={120}
                    className="w-full max-w-[350px] h-[120px]"
                />
            </div>

            {/* Month labels */}
            <div className="flex justify-between text-xs md:text-sm text-gray-500 mt-2 px-1">
                {["Janvier", "Février", "Mar", "Avril", "Mai", "Juin"].map((m) => (
                    <span key={m}>{m}</span>
                ))}
            </div>
        </div>
    );
}
