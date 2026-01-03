import {useState, useEffect} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {convert} from "../Convert";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopy, faBolt} from '@fortawesome/free-solid-svg-icons';

type Props = {
    keyboardLang: string;
    setKeyboardLang: (v: string) => void;
};

export function LayoutForm({ keyboardLang, setKeyboardLang }: Props) {

    const [value, setValue] = useState('');
    const [valueDecoded, setValueDecoded] = useState('');
    const [valueSelectEnc, setValueSelectEnc] = useState('auto');
    // const [valueSelectDec, setValueSelectDec] = useState('ru');

    function decode(value: string) {
        setValueDecoded(convert(value, valueSelectEnc, keyboardLang));
    }

    const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value);
        decode(event.target.value);
    }

    const changeHandler2 = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValueDecoded(event.target.value);
    }

    function handleSelect(event: React.FormEvent<HTMLSelectElement>) {
        setValueSelectEnc(event.currentTarget.value);
    }

    function handleClick() {
        decode(value);
    }

    function clearForms() {
        setValue('');
        setValueDecoded('');
    }

    const langs = {
        'ru': '🇷🇺  Русский',
        'ru_typewriter': '🇷🇺  Русский (машинопись)',
        'ru_typewriter_old': '🇷🇺  Русский (дореволюционный)',
        'en': '🇺🇸  English (Английский)',
        'uk': '🇺🇦  Українська (Украинский)',
        'be': '🇧🇾  Беларуская (Белорусский)',
        'uz': '🇺🇿  Ўзбекча (Узбекский)',
        'kk': '🇰🇿  Қазақша (Казахский)',
        'az': '🇦🇿  Azərbaycanca (Азербайджанский)',
        'lt': '🇱🇹  Lietuvių (Литовский)',
        'mo': '🇲🇩  Moldovenească (Молдавский)',
        'lv': '🇱🇻  Latviešu (Латышский)',
        'ky': '🇰🇬  Кыргызча (Киргизский)',
        'tg': '🇹🇯  Тоҷикӣ (Таджикский)',
        'hy': '🇦🇲  Հայերեն (Армянский)',
        'tk': '🇹🇲  Türkmen (Туркменский)',
        'et': '🇪🇪  Eesti (Эстонский)'
    }

    useEffect(() => {
        if (value) {
            decode(value);
        }
    }, [keyboardLang]);

    return (
        <Form className="mb-3" id="convert-form">
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
                        <label className="form-label" htmlFor="decoded">Восстановленный текст</label>
                        <textarea
                            id="decoded"
                            onChange={changeHandler2}
                            value={valueDecoded}
                            className="form-control"
                            cols={50}
                            rows={12}
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
                            className="form-select"
                            aria-label="Исходный язык"
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
                            value={keyboardLang}
                            onChange={(e) => setKeyboardLang(e.target.value)}
                            className="form-select"
                            aria-label="В какую раскладку сконвертировать"
                            >
                            { Object.keys(langs).map((lang) =>
                                <option key={lang} value={lang}>{langs[lang as keyof typeof langs]}</option>
                            ) }
                        </select>
                    </fieldset>
                    <fieldset className="fieldset_wide">
                        <div className="mb-3">
                            <Button
                                onClick={handleClick}
                                variant="info"
                                type="button"
                                className="me-2"
                                >
                                <FontAwesomeIcon icon={faBolt} title="start" /> Старт!</Button>
                        </div>
                        <div className="mb-3">
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
                        </div>
                    </fieldset>
                </Col>
            </Row>
        </Form>
    )
}