import {useState} from 'react'
import {langSymbols} from '../ConvertLangSymbols';
import {Key} from './Key';
import '../styles/keyboard.scss';


type Props = {
    lang: keyof typeof langSymbols;
};

export function LayoutKeyboard({ lang }: Props) {

    // const allSymbols = langSymbols['ru_typewriter_old'].split('');
    const allSymbols = langSymbols[lang].split('');

    const rowBreaks = [
        { range: [34, 47], startBtns: [], endBtns: ['Backspace'] },
        { range: [0, 13], startBtns: ['Tab'], endBtns: [] },
        { range: [13, 24], startBtns: ['Caps'], endBtns: ['Enter'] },
        { range: [24, 34], startBtns: ['Shift'], endBtns: ['Shift'] },
        { range: [0, 0], startBtns: ['Ctrl', 'Win', 'Alt'], endBtns: ['Alt', 'Win', 'Ctrl'], centerBtn: ' ' },
    ];

    const rowBreaks_retro = [
        { range: [34, 47], startBtns: [], endBtns: ['→'] },
        { range: [0, 13], startBtns: ['Табуляторъ'], endBtns: [] },
        { range: [13, 24], startBtns: ['Замокъ\n верхняго\n регистра'], endBtns: [''] },
        { range: [24, 34], startBtns: ['Верхній\n регистръ'], endBtns: ['Верхній\n регистръ'] },
        { range: [0, 0], startBtns: [' '], endBtns: [' '], centerBtn: ' ' },
    ];

    const handleKeyClick = (symbol: string) => {
        const textarea = document.getElementById('coded') as HTMLTextAreaElement | null;
        if (!textarea) return;

        textarea.value += symbol;
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
    };

    return (
        <div className={`keyboard mb-5`}>
            {/* vintage  */}
            {rowBreaks.map((row, index) =>
                <div key={index} className={`keyboardRow`}>

                    {row.startBtns.map((item, index) =>
                        <Key key={`key-start-${index}`} symbol={item} className={`keyboardKey_auto keyboardKey_smaller`}></Key>
                    )}

                    {/* Main symbols */}

                    {allSymbols.slice(row.range[0], row.range[1]).map((item, index) =>
                        <Key
                            key={`key-main-${index}`}
                            symbol={item}
                            className={'text-uppercase ' + ( (item === allSymbols[12]) ? 'keyboardKey_auto keyboardKey_smaller' : '' )}
                            onClick={() => handleKeyClick(item)}
                        />
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