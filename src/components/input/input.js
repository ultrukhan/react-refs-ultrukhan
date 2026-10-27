import React, { useState, useRef, useEffect } from 'react';

import './input.css';

const OPERATORS = {
    '67': 'Kyivstar',
    '68': 'Kyivstar',
    '96': 'Kyivstar',
    '97': 'Kyivstar',
    '98': 'Kyivstar',
    '50': 'Vodafone',
    '66': 'Vodafone',
    '95': 'Vodafone',
    '99': 'Vodafone',
    '63': 'Lifecell',
    '73': 'Lifecell',
    '93': 'Lifecell',
    '91': '3mob',
    '92': 'People.net',
    '89': 'intertelecom',
    '94': 'intertelecom'
};

export default function Input() {
    const [operator, setOperator] = useState('');
    const [phone, setPhone] = useState('');
    const operatorRef = useRef(null);
    const phoneRef = useRef(null);

    useEffect(() => {
        if (operatorRef.current) {
            operatorRef.current.focus();
        }
    }, []);

    const handleOperatorInput = (e) => {
        const digits = e.target.value.replace(/\D/g, '');
        e.target.value = digits;
        setOperator(digits);
        if (digits.length === 2 && phoneRef.current) {
            phoneRef.current.focus();
        }
    };

    const handlePhoneInput = (e) => {
        const digits = e.target.value.replace(/\D/g, '');
        e.target.value = digits;
        setPhone(digits);
    };

    const operatorName = operator.length === 2 ? (OPERATORS[operator] || 'Unknown') : '';
    const isComplete = operator.length === 2 && phone.length === 7;

    return <div>
        <span className="operator-name" data-testid="operator-name">{operatorName}</span>
        <span>+38 0</span>
        <input
            ref={operatorRef}
            className="operator-input"
            type="text"
            data-testid="operator-input"
            onInput={handleOperatorInput}
            />
        <span className="check-icon" data-testid="check-icon"> {isComplete ? '✔️' : '-'} </span>
        <input
            ref={phoneRef}
            className="phone-input"
            type="text"
            data-testid="phone-input"
            onInput={handlePhoneInput}
             />
    </div>;
}
