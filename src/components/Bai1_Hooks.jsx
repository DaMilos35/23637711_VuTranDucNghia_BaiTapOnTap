import React, { useState, useEffect, useReducer, useRef, useMemo, useCallback } from 'react';
import './Bai1_Hooks.css';

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'TANG': return { count: state.count + 1 };
        case 'GIAM': return { count: state.count - 1 };
        default: return state;
    }
};

export default function Bai1_Hooks() {
    // --- useState  ---
    const [count, setCount] = useState(0);

    // --- useReducer ---
    const [stateReducer, dispatch] = useReducer(counterReducer, { count: 0 });
    
    // --- useRef ---
    const inputRef = useRef(null);

    // useEffect
    useEffect(() => {
        document.title = `Số lần bấm: ${count}`;
    }, [count]);

    // useMemo
    const squared = useMemo(() => count * count, [count]);

    // useCallback
    const runCallback = useCallback(() => {
        alert("Đã chạy Callback!");
    }, []);

    return (
        <div className="hooks-container">
            <div className="grid-hooks">
                
                {/* Câu 1: useState */}
                <div className="card-hook">
                    <h4>1. useState</h4>
                    <p>Số đếm: <b style={{color: 'red', fontSize: '20px'}}>{count}</b></p>
                    <button className="btn-action" onClick={() => setCount(count + 1)}>
                        Bấm Tăng (+)
                    </button>
                </div>

                {/* Câu 2: useEffect */}
                <div className="card-hook">
                    <h4>2. useEffect</h4>
                    <p><i>(Nhìn tiêu đề Tab web)</i></p>
                    <p>Title đang là: "Số lần bấm..."</p>
                </div>

                {/* Câu 3: useReducer */}
                <div className="card-hook">
                    <h4>3. useReducer</h4>
                    <p>Count: <b>{stateReducer.count}</b></p>
                    <button className="btn-action" onClick={() => dispatch({type: 'GIAM'})}>-</button>
                    <button className="btn-action" onClick={() => dispatch({type: 'TANG'})}>+</button>
                </div>

                {/* Câu 4: useRef */}
                <div className="card-hook">
                    <h4>4. useRef</h4>
                    <input 
                        ref={inputRef} 
                        placeholder="Nhập tên..." 
                        style={{padding: '5px', width: '100%', marginBottom: '5px'}} 
                    />
                    <button 
                        className="btn-action" 
                        onClick={() => {
                            inputRef.current.focus(); 
                        }}
                    >
                        Focus Input
                    </button>
                </div>

                {/* Câu 5: useMemo */}
                <div className="card-hook">
                    <h4>5. useMemo</h4>
                    <p>{count} bình phương = <b>{squared}</b></p>
                </div>

                {/* Câu 6: useCallback */}
                <div className="card-hook">
                    <h4>6. useCallback</h4>
                    <button className="btn-action" onClick={runCallback}>Chạy thử</button>
                </div>
            </div>
        </div>
    );
}