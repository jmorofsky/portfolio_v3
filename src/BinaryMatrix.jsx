import { useEffect } from 'react';
import BitArray from './BitArray.json';


export default function BinaryMatrix() {
    const bits = BitArray.values;

    useEffect(() => {
        const bitElements = document.querySelectorAll('#bit');

        const flipInterval = setInterval(() => {
            for (const bit of bitElements) {
                const flip = Math.random() > 0.9 ? true : false;

                if (flip) {
                    bit.textContent == 1 ? bit.textContent = 0 : bit.textContent = 1;
                };
            };
        }, 100);

        return () => clearInterval(flipInterval);
    }, []);

    return (
        <div className='absolute inset-5 overflow-hidden wrap-anywhere opacity-20 text-neutral-500'>
            {bits.map((value, index) => (
                <span id='bit' key={index}>{value}</span>
            ))}
        </div>
    );
};
