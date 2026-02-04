import React, { useState } from 'react';
import './Bai2_Async.css';

export default function Bai2_Async() {
    const [status, setStatus] = useState("Sẵn sàng tạo...");

    const handleCreate = async () => {
        setStatus("Đang gửi dữ liệu...");
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({ title: 'Bài tập ôn tập', userId: 1 }),
                headers: { 'Content-type': 'application/json' },
            });
            const data = await res.json();
            setStatus(`✅ POST Thành công!\nĐã tạo ID mới: ${data.id}\nStatus: 201 Created`);
        } catch (err) {
            setStatus("❌ Lỗi Async");
        }
    };

    return (
        <div className="box-api">
            <h3>2. Async / Await (Post)</h3>
            <button className="btn-async" onClick={handleCreate}>Tạo Post Mới</button>
            <pre className="result-text" style={{textAlign: 'left', background: '#f4f4f4', padding: '5px'}}>
                {status}
            </pre>
        </div>
    );
}