import {useState} from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {convert} from "../Convert";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopy, faBolt} from '@fortawesome/free-solid-svg-icons';

export function LayoutForm() {

    const [value, setValue] = useState('');
    const [valueDecoded, setValueDecoded] = useState('');
    const [valueSelectEnc, setValueSelectEnc] = useState('auto');
    const [valueSelectDec, setValueSelectDec] = useState('ru');

    const changeHandler = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value);
        setValueDecoded(convert(event.target.value, valueSelectEnc, valueSelectDec));
    }

    function handleSelect(event: React.FormEvent<HTMLSelectElement>) {
        setValueSelectEnc(event.currentTarget.value);
     }

    function clearForms() {
        setValue('');
        setValueDecoded('');
    }

    const langs = {
        'ru': 'Русский',
        'en': 'English (Английский)',
        'uk': 'Українська (Украинский)',
        'be': 'Беларуская (Белорусский)',
        'uz': 'Ўзбекча (Узбекский)',
        'kk': 'Қазақша (Казахский)',
        'az': 'Azərbaycanca (Азербайджанский)',
        'lt': 'Lietuvių (Литовский)',
        'mo': 'Moldovenească (Молдавский)',
        'lv': 'Latviešu (Латышский)',
        'ky': 'Кыргызча (Киргизский)',
        'tg': 'Тоҷикӣ (Таджикский)',
        'hy': 'Հայերեն (Армянский)',
        'tk': 'Türkmen (Туркменский)',
        'et': 'Eesti (Эстонский)'
    }
 
    return (
        <Form className="mb-5" id="convert-form">
            <Row>
                <Col sm={6}>
                    <fieldset className="mb-3">
                        <label className="form-label" htmlFor="coded">Исходный текст</label>
                        <textarea
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
                        <label className="form-label" htmlFor="decoded">Восстановленный текст</label>
                        <textarea
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
                        <select
                            value={valueSelectEnc}
                            onChange={handleSelect}
                            className="form-select
                            mb-3"
                            aria-label="Исходный
                            язык"
                            >
                            <option className="lang-sm lang-lbl-full" value="auto">Авто
                            </option>
                            { Object.keys(langs).map((lang) => 
                                <option key={lang} value={lang}>{langs[lang as keyof typeof langs]}</option>
                            ) }
                        </select>
                    </fieldset>
                </Col>
                <Col md={6}>
                    <fieldset className="mb-3">
                        <select
                            value={valueSelectDec}
                            onChange={(event) => setValueSelectDec(event.target.value)}
                            className="form-select mb-3"
                            aria-label="В какую раскладку сконвертировать"
                            >
                            { Object.keys(langs).map((lang) => 
                                <option key={lang} value={lang}>{langs[lang as keyof typeof langs]}</option>
                            ) }
                        </select>
                    </fieldset>
                    <fieldset className="mb-3">
                        <Button
                            variant="info"
                            type="button"
                            >
                            <FontAwesomeIcon icon={faBolt} title="start" /> Старт!</Button>{' '}
                        <Button
                            onClick={() => {navigator.clipboard.writeText(valueDecoded)}}
                            variant="light"
                            type="button"
                            data-clipboard-target="#decoded"
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