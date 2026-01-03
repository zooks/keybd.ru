import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindows} from '@fortawesome/free-brands-svg-icons';

interface KeyProps {
    symbol: string;
    className?: string;
    onClick?: () => void;
}

export function Key({ symbol, className, onClick }: KeyProps) {
    
    const lines = symbol.split('\n');

    return(
        <button
            className={`keyboardKey ${className} ` + ( symbol === 'Win' ? 'keyboardKey_symbol' : '' )}
            onClick={onClick}
            type="button"
        >
            <span>{symbol === 'Win' ? <FontAwesomeIcon icon={faWindows} title="Win" /> : symbol}</span>
        </button>
    );
}