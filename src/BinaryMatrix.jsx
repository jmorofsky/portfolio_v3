import { useEffect, useRef } from 'react';


export default function BinaryMatrix() {
    const canvasRef = useRef(null);
    const gridRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d', { alpha: false });

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const fontSize = 16;
            const cols = Math.floor((canvas.width / fontSize) + 2);
            const rows = Math.floor(canvas.height / fontSize);

            gridRef.current = {
                data: Array(rows).fill().map(() =>
                    Array(cols).fill().map(() => Math.random() > 0.5 ? 1 : 0)
                ),
                fontSize,
                cols,
                rows
            };
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const flipProbability = 0.02;

        function draw() {
            const { data, fontSize, rows, cols } = gridRef.current;

            ctx.fillStyle = '#0D0D0D';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.font = `${fontSize}px 'Inconsolata'`;

            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    if (Math.random() < flipProbability) {
                        data[row][col] = data[row][col] === 1 ? 0 : 1;
                    };

                    const brightness = Math.random() * (50 - 35) + 35;
                    ctx.fillStyle = `rgb(${brightness}, ${brightness}, ${brightness})`;

                    ctx.fillText(
                        data[row][col],
                        col * fontSize,
                        row * fontSize + fontSize
                    );
                };
            };

            animationRef.current = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return (
        <canvas ref={canvasRef} className='block w-full h-full' />
    );
};
