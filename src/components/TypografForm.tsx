import {useState} from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Form from "react-bootstrap/Form";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopy} from '@fortawesome/free-solid-svg-icons';

export function TypografForm() {

    const [value, setValue] = useState('');
    const [valueDecoded, setValueDecoded] = useState('');
    const [valueRadioConvertTo, setValueRadioConvertTo] = useState('auto');

    function convertCase (text: string, convertTo: string) {
        /*
        function replaceAll(text: string, search: string, replacement: string) {
            let myRegExp = new Array;

            const searchSymbol = ['^', '\n'];

            searchSymbol.forEach((el) => {
                myRegExp.push( new RegExp( el + search, 'g') );
            });

            myRegExp.forEach((el, i) => {
                text = text.replace(myRegExp[i], searchSymbol[i] + replacement);
            });

            return text;
        }
        */

        let resultText = text
        .replace(/"([^"]*)"/g, '«$1»')
        // .replace(/«([^«»]+) »([^«»]+)«([^«»]+)»/g, '«$1 „$2“$3»')
        .replace(/ »([^«»]+)«/g, ' „$1“')
        .replace(/--/g, '—')
        .replace(/- /g, '— ')
        .replace(/([0-9]+)-([0-9]+)/g, '$1–$2')
        .replace(/'/g, '’')
        .replace(/\.\.\./g, '…')
        .replace(/([^0-9]),/g, '$1, ') // comma spaces
        .replace(/[ ]+/g, ' ')
        .replace(/\t/g, ' ')
        .replace(/^( )+/g, '')
        .replace(/\n[ ]+/g, '\n')
        .replace(/[​\u0301]/g, '')
        .replace(/ ,/g, ',') // comma spaces
        .replace(/([0-9]+) (г\.)/g, '$1 г.')
        .replace(/([0-9]+) (гг\.)/g, '$1 гг.')
        .replace(/([0-9]+) год/g, '$1 год')



        // resultText = replaceAll(resultText, '1\/2', ' ½');


        function powerSymbols(num: string) {
            const powerSymbolsArr = '⁰¹²³⁴⁵⁶⁷⁸⁹ⁿⁱ'.split('');
            let degree = '';

            num.split('').forEach(function (el) {

                switch (el) {
                    case 'n':
                        degree += powerSymbolsArr[10];
                        break;
                    case 'i':
                        degree += powerSymbolsArr[11];
                        break;
                    default:
                        degree += powerSymbolsArr[Number(el)];
                }
            });

            return degree;

        }

        switch (convertTo) {

            case 'auto':
                return resultText;
            case 'symbols':
                return resultText
                .replace(/\(C\)/gi, '©')
                .replace(/\(R\)/gi, '®')
                .replace(/\(TM\)/gi, '™')
                .replace(/\*/g, '•');
            case 'number':
                return resultText
                .replace(/No\./g, '№')
                .replace(/N([0-9]+)/g, '№$1')
                .replace(/\(numero\)/g, '№')
                .replace(/\(sect\)/g, '§')
                .replace(/\(para\)/g, '¶')
            case 'math':
                const fractions = '½⅓¼⅕⅙⅐⅛⅑⅒⅔⅖¾⅗⅜⅘⅚⅝⅞';
                const numbersRegExp = new RegExp(`([0-9${fractions}]+)–([0-9${fractions}]+)`, 'g');
                const numbersRegExpSpace = new RegExp(`([0-9${fractions}]+) — ([0-9${fractions}]+)`, 'g');


                return resultText
                .replace(/\+-/g, '±')
                .replace(/\+—/g, '±')
                .replace(/-([0-9]+)/g, '−$1')
                .replace(/([0-9]+) x ([0-9]+)/g, '$1 × $2')
                .replace(/([0-9]+)x([0-9]+)/g, '$1×$2')
                .replace(/([0-9]+) \* ([0-9]+)/g, '$1 × $2')
                .replace(/([0-9]+)\*([0-9]+)/g, '$1×$2')
                .replace(/(^|[^0-9]|−|\n)1\/2($|[^0-9]|\n)/g, '$1½$2') // ½
                .replace(/(^|[^0-9]|−|\n)1\/3($|[^0-9]|\n)/g, '$1⅓$2') // ⅓
                .replace(/(^|[^0-9]|−|\n)1\/4($|[^0-9]|\n)/g, '$1¼$2') // ¼
                .replace(/(^|[^0-9]|−|\n)1\/5($|[^0-9]|\n)/g, '$1⅕$2') // ⅕
                .replace(/(^|[^0-9]|−|\n)1\/6($|[^0-9]|\n)/g, '$1⅙$2') // ⅙
                .replace(/(^|[^0-9]|−|\n)1\/7($|[^0-9]|\n)/g, '$1⅐$2') // ⅐
                .replace(/(^|[^0-9]|−|\n)1\/8($|[^0-9]|\n)/g, '$1⅛$2') // ⅛
                .replace(/(^|[^0-9]|−|\n)1\/9($|[^0-9]|\n)/g, '$1⅑$2') // ⅑
                .replace(/(^|[^0-9]|−|\n)1\/10($|[^0-9]|\n)/g, '$1⅒$2') // ⅒
                
                .replace(/(^|[^0-9]|−|\n)2\/3($|[^0-9]|\n)/g, '$1⅔$2') // ⅔
                .replace(/(^|[^0-9]|−|\n)2\/5($|[^0-9]|\n)/g, '$1⅖$2') // ⅖
                
                .replace(/(^|[^0-9]|−|\n)3\/4($|[^0-9]|\n)/g, '$1¾$2') // ¾
                .replace(/(^|[^0-9]|−|\n)3\/5($|[^0-9]|\n)/g, '$1⅗$2') // ⅗
                .replace(/(^|[^0-9]|−|\n)3\/8($|[^0-9]|\n)/g, '$1⅜$2') // ⅜

                .replace(/(^|[^0-9]|−|\n)4\/5($|[^0-9]|\n)/g, '$1⅘$2') // ⅘
                
                .replace(/(^|[^0-9]|−|\n)5\/6($|[^0-9]|\n)/g, '$1⅚$2') // ⅚
                .replace(/(^|[^0-9]|−|\n)5\/8($|[^0-9]|\n)/g, '$1⅝$2') // ⅝

                .replace(/(^|[^0-9]|−|\n)7\/8($|[^0-9]|\n)/g, '$1⅞$2') // ⅞


                .replace(numbersRegExp, '$1−$2')
                .replace(numbersRegExpSpace, '$1 − $2')

                .replace(/([0-9]+)\/([0-9]+)/g, '$1 ÷ $2')
                .replace(/f\(([^()]+)\)/g, 'ƒ($1)')
                // abbr
                .replace(/\(deg\)/g, '°')
                .replace(/PI/g, 'π')
                .replace(/\(sum\)/g, 'Σ')
                .replace(/\(infin\)/g, '∞')
                .replace(/PI/g, 'π')

                // power

                .replace(/([0-9,.]+)\^([0-9ni]+)/g, function (match, capture1, capture2) {
                    return capture1 + powerSymbols(capture2);
                })


                .replace(/!=/g, '≠')
                .replace(/<=/g, '≤')
                .replace(/(^|[^=])>=/g, '$1≥')
                .replace(/<=>/g, '⇔')
                .replace(/<</g, '≪')
                .replace(/>>/g, '≫')
                .replace(/~=/g, '≅')



            case 'curr':
                return resultText
                .replace(/([0-9]+) руб\./g, '$1 ₽')
                .replace(/([0-9]+) р\./g, '$1 ₽')
                .replace(/([0-9]+) грн\./g, '$1 ₴')
                .replace(/([0-9]+) тнг\./g, '$1 ₸')
                .replace(/([0-9]+) дрм\./g, '$1 ֏')
                .replace(/([0-9]+) ман\./g, '$1 ₼')
                .replace(/([0-9]+) EUR/g, '$1 €')
                .replace(/([0-9]+) USD/g, '$1 $')


            default:
                return text;
        }
    }

    function decode(value: string, valueRadioConvertTo: string) {
        setValueDecoded(convertCase(value, valueRadioConvertTo));
    }

    const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value);
        decode(event.target.value, valueRadioConvertTo);
    }

    function handleCheck(event: React.FormEvent<HTMLInputElement>) {
        setValueRadioConvertTo(event.currentTarget.value);
        decode(value, event.currentTarget.value);
    }

    function clearForms() {
        setValue('');
        setValueDecoded('');
    }

    const radioOptions = [
        { key: 'a', text: 'Авто', value: 'auto', title: '" \' -- - ' },
        { key: 's', text: '№', value: 'number', title: 'N1 No. (numero) (sect) (para)' },
        { key: 'n', text: '© ® •', value: 'symbols', title: '(c) (R) (TM) *' },
        { key: 'm', text: '±', value: 'math', title: '+- - 1/4 1/2 3/4 2^2 f(x) 25 (deg)C' },
        { key: 'c', text: '₽', value: 'curr', title: 'р. руб. грн. USD EUR' },
      ]

    return (
        <Form className="mb-5" id="convert-form">
            <Row>
                <Col sm={6}>
                    <fieldset className="mb-3">
                        <label className="form-label" htmlFor="coded">Исходный текст</label>
                        <textarea
                            id="coded"
                            onChange={changeHandler}
                            value={value}
                            className="form-control"
                            cols={50}
                            rows={12}
                            autoComplete="off" autoCorrect="off" autoCapitalize="off"
                            spellCheck="false"
                            placeholder="Вставьте сюда текст для типографики"
                        />
                    </fieldset>
                </Col>
                <Col sm={6}>
                    <fieldset className="mb-3">
                        <label className="form-label" htmlFor="decoded">Результат</label>
                        <textarea
                            id="decoded"
                            onChange={changeHandler}
                            value={valueDecoded}
                            className="form-control"
                            cols={50}
                            rows={12}
                            readOnly
                        />
                    </fieldset>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <fieldset className="mb-3">
                        <ButtonGroup className="mb-2">
                            {radioOptions.map((item, index) => (
                                <ToggleButton
                                    key={item.key}
                                    id={`radio-${item.key}`}
                                    title={item.title}
                                    type="radio"
                                    variant="light"
                                    name="radio"
                                    value={item.value}
                                    checked={valueRadioConvertTo === item.value}
                                    onChange={handleCheck}
                                >
                                    {item.text}
                                </ToggleButton>
                            ))}
                        </ButtonGroup>
                        {/* {radioOptions.map((item, index) =>
                            <Form.Check
                                key={item.key}
                                value={item.value}
                                onChange={handleCheck}
                                checked={valueRadioConvertTo === item.value}
                                label={item.text}
                                name="textCase"
                                inline
                                type="radio"
                                id={`inline-radio-${item.key}`}
                            />
                        )} */}
                    </fieldset>
                </Col>
                <Col md={6}>
                    <fieldset className="mb-3">
                        <Button
                            onClick={() => {navigator.clipboard.writeText(valueDecoded)}}
                            variant="light"
                            type="button"
                            className="me-2"
                            >
                            <FontAwesomeIcon icon={faCopy} title="copy" /> Копировать
                        </Button>
                        <Button variant="light" onClick={clearForms}>
                            Очистить
                        </Button>
                    </fieldset>
                </Col>
            </Row>
        </Form>
    )
}