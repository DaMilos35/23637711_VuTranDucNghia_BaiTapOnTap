import React, { useState } from 'react';
import axios from 'axios';
import './Bai2_Axios.css';

export default function Bai2_Axios() {
    const [msg, setMsg] = useState("Sẵn sàng xóa...");

    const handleDelete = () => {
        setMsg("Đang xóa...");
        axios.delete('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                setMsg(`✅ DELETE Thành công!\nResponse Status: ${res.status} (OK)\nĐã xóa Post ID 1`);
            })
            .catch(() => setMsg("❌ Lỗi Axios"));
    };

    return (
        <div className="box-api">
            <h3>3. Axios Lib (Delete)</h3>
            <button className="btn-axios" onClick={handleDelete}>Xóa Post ID 1</button>
            <pre className="result-text" style={{textAlign: 'left', background: '#f4f4f4', padding: '5px'}}>
                {msg}
            </pre>
        </div>
    );
}