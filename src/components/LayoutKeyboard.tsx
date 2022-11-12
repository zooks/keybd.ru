import {useState} from 'react'
import {langSymbols} from '../ConvertLangSymbols';
import {Key} from './Key';
import '../styles/keyboard.scss';


export function LayoutKeyboard() {

    const allSymbols = langSymbols['ru'].split('');
    const rowBreaks = [
        { range: [69, 82], startBtns: [], endBtns: ['Backspace'] },
        { range: [0, 13], startBtns: ['Tab'], endBtns: [] },
        { range: [13, 24], startBtns: ['Caps'], endBtns: ['Enter'] },
        { range: [24, 34], startBtns: ['Shift'], endBtns: ['Shift'] },
        { range: [0, 0], startBtns: ['Ctrl', 'Win', 'Alt'], endBtns: ['Alt', 'Win', 'Ctrl'], centerBtn: ' ' },
    ];

    return (
        <div className={`keyboard mb-5`}>
            {rowBreaks.map((row, index) =>
                <div key={index} className={`keyboardRow`}>

                    {row.startBtns.map((item, index) =>
                        <Key key={`key-start-${index}`} symbol={item} className={`keyboardKey_auto keyboardKey_smaller`}></Key>
                    )}

                    {/* Main symbols */}

                    {allSymbols.slice(row.range[0], row.range[1]).map((item, index) =>
                        <Key key={`key-main-${index}`} symbol={item} className={'text-uppercase ' + ( (item === allSymbols[12]) ? 'keyboardKey_auto keyboardKey_smaller' : '' )}></Key>
                    )}

                    {row.centerBtn && <Key symbol={row.centerBtn} className={`keyboardKey_wide`}></Key>}

                    {row.endBtns.map((item, index) =>
                        <Key key={`key-end-${index}`} symbol={item} className={`keyboardKey_auto keyboardKey_smaller`}></Key>
                    )}

                </div>
            )}
        </div>
    );
}