import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindows} from '@fortawesome/free-brands-svg-icons';

interface KeyProps {
    symbol: string,
    className?: string
}

export function Key({symbol, className}: KeyProps) {
    return(
        <div className={`keyboardKey ${className} ` + ( symbol === 'Win' ? 'keyboardKey_symbol' : '' )}>
            <span>{symbol === 'Win' ? <FontAwesomeIcon icon={faWindows} title="Win" /> : symbol}</span>
        </div>
    );
}