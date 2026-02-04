import React, { useState } from 'react';
import './Bai2_Fetch.css';

export default function Bai2_Fetch() {
    const [data, setData] = useState("Chưa có dữ liệu");

    const handleFetch = () => {
        setData("Đang tải...");
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(res => res.json())
            .then(json => {
                setData(`✅ GET Thành công:\nTên: ${json.name}\nEmail: ${json.email}`);
            })
            .catch(() => setData("❌ Lỗi Fetch"));
    };

    return (
        <div className="box-api">
            <h3>1. Fetch API (Get)</h3>
            <button className="btn-fetch" onClick={handleFetch}>Lấy dữ liệu User</button>
            <pre className="result-text" style={{textAlign: 'left', background: '#f4f4f4', padding: '5px'}}>
                {data}
            </pre>
        </div>
    );
}