import React, { useState } from 'react';

export default function RectangleAreaCalculator() {
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [area, setArea] = useState(null);

    const handleCalculate = () => {
        const l = parseFloat(length);
        const w = parseFloat(width);

        if (isNaN(l) || isNaN(w)) {
            alert('Vui lòng nhập số hợp lệ!');
            return;
        }

        setArea(l * w);
    };

    return (
        <div>
            <h2>Tính diện tích hình chữ nhật</h2>

            <label>
                Chiều dài:
                <input
                    type="number"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                />
            </label>
            <br />

            <label>
                Chiều rộng:
                <input
                    type="number"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                />
            </label>
            <br />

            <button onClick={handleCalculate}>Tính</button>

            {area !== null && (
                <p>Diện tích: {area}</p>
            )}

            <div
                style={{
                    height: `${length}px`,
                    width: `${width}px`,
                    backgroundColor: 'lightblue',
                    marginTop: '20px',
                    border: '1px solid #000'
                }}
            >
                {/* HCN minh hoạ */}
            </div>
        </div>
    );
}
