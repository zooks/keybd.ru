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

        let resultText = text.replace(/"([^"]*)"/g, '«$1»')
        .replace(/--/g, '—')
        .replace(/- /g, '— ')
        .replace(/([0-9]+)-([0-9]+)/g, '$1–$2')
        .replace(/'/g, '’')
        .replace(/\.\.\./g, '…')
        .replace(/[ ]+/g, ' ')
        .replace(/\t/g, ' ')
        .replace(/^( )+/g, '')
        .replace(/\n[ ]+/g, '\n')
        .replace(/[​\u0301]/g, '')
        .replace(/([0-9]+) (г\.)/g, '$1 г.')
        .replace(/([0-9]+) (гг\.)/g, '$1 гг.')
        .replace(/([0-9]+) год/g, '$1 год')



        // resultText = replaceAll(resultText, '1\/2', ' ½');


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
                .replace(/N([0-9]+)/g, '№$1');
            case 'math':
                return resultText
                .replace(/\+-/g, '±')
                .replace(/\-([0-9]+)/g, '−$1')
                .replace(/([0-9]+) x ([0-9]+)/g, '$1 × $2')
                .replace(/([0-9]+)x([0-9]+)/g, '$1×$2')
                .replace(/(^|[^0-9]|−|\n)1\/4($|[^0-9]|\n)/g, '$1¼$2')
                .replace(/(^|[^0-9]|−|\n)1\/2($|[^0-9]|\n)/g, '$1½$2')
                .replace(/(^|[^0-9]|−|\n)3\/4($|[^0-9]|\n)/g, '$1¾$2')
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
        { key: 's', text: '№', value: 'number', title: 'N1 No.' },
        { key: 'n', text: '© ® •', value: 'symbols', title: '(c) (R) (TM) *' },
        { key: 'm', text: '±', value: 'math', title: '+- - 1/4 1/2 3/4' },
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