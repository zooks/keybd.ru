import {useState} from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Form from "react-bootstrap/Form";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopy} from '@fortawesome/free-solid-svg-icons';

export function TextCaseForm() {

    const [value, setValue] = useState('');
    const [valueDecoded, setValueDecoded] = useState('');
    const [valueRadioConvertTo, setValueRadioConvertTo] = useState('auto');

    function convertCase (text: string, convertTo: string) {

        switch (convertTo) {
            case 'auto':
                const resultText = text.split('').map(function(char) {
                    return char === char.toUpperCase()
                        ? char.toLowerCase()
                        : char.toUpperCase()
                }).join('');

                return resultText;
            case 'toUpper':
                return text.toUpperCase();
            case 'toLower':
                return text.toLowerCase();
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
        { key: 'a', text: 'Авто', value: 'auto' },
        { key: 'u', text: 'В заглавные', value: 'toUpper' },
        { key: 'l', text: 'В строчные', value: 'toLower' },
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
                            placeholder="Вставьте сюда текст в неправильной раскладке"
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
                            >
                            <FontAwesomeIcon icon={faCopy} title="copy" /> Копировать
                        </Button>{' '}
                        <Button variant="light" onClick={clearForms}>
                            Очистить
                        </Button>{' '}
                    </fieldset>
                </Col>
            </Row>
        </Form>
    )
}