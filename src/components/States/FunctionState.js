import React, { useState, useEffect } from 'react';
import './StudentTable.css';

function FunctionState() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/students')
            .then(response => response.json())
            .then(data => setStudents(data));
    }, []);

    return (
        <div>
            <h1>Students List (Function Component)</h1>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Email</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id} style={{ borderBottom: '1px solid #ddd' }}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.name}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.email}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default FunctionState; 