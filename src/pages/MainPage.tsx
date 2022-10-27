import React from 'react'
import {Helmet} from "react-helmet";
import {DocsHeader} from "../components/DocsHeader";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons';
import {LayoutForm} from "../components/LayoutForm";

export function MainPage() {

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
        <div>
            <Helmet>
                <title>Онлайн смена раскладки клавиатуры: с русской на английскую и обратно (16 языков)</title>
                <meta name="description" content="Перевод раскладки онлайн для текста набранного в неправильной раскладке: если вы забыли переключить раскладку клавиатуры." />
            </Helmet>
            <DocsHeader
                title="Исправление текста в неправильной раскладке"
                lead={
                    <>
                        { Object.keys(langs).map((lang, index) => <span key={lang} className={'flag flag-' + lang} title={langs[lang as keyof typeof langs]}></span>) }
                    </>
                }
            />
            <main>
                <Container>
                    <div className="intro">
                        <div className="sr-only">
                            <h6>Пример:</h6>
                        </div>
                        <p>
                            <strong>Ghbdtn! </strong><FontAwesomeIcon icon={faLongArrowAltRight} /><strong> Привет! 🇷🇺</strong>
                            <strong> Руддщ! </strong><FontAwesomeIcon icon={faLongArrowAltRight} /><strong> Hello! 🇺🇸</strong>
                        </p>
                    </div>
                    <br/>
                    <LayoutForm></LayoutForm>
                    <div className="features bg-light p-4 mb-5">
                        <div className="text-center">
                            <h4 className="sr-only">Особенности кодировщика</h4>
                            <Row>
                                <Col xs={6} sm={4}><i className="features-icon features-icon-shield"></i>
                                    <h5>Безопасно</h5>
                                    <p>Ваш текст не отправляется на сервер, поэтому исключена возможность его
                                        прочтения</p>
                                </Col>
                                <Col xs={6} sm={4}><i className="features-icon features-icon-flash"></i>
                                    <h5>Быстро</h5>
                                    <p>Мгновенное кодирование без расходования трафика</p>
                                </Col>
                                <Col xs="auto" sm={4}><i className="features-icon features-icon-star"></i>
                                    <h5>Легко</h5>
                                    <p>Не требуется устанавливать на компьютер дополнительные программы,<br/>
                                        просто добавьте страницу в закладки браузера</p>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="well panel-narrow">
                        <Row>
                            <Col md={12}>
                                <small>
                                    <p>Бывают ситуации когда вы долго
                                    печатали текст, но взглянув на монитор поняли, что забыли переключить раскладку
                                    клавиатуры, и текст оказался набран впустую. Или ваш собеседник отправил сообщение не
                                    посмотрев, и вы получили набор кракозябр вместо связного текста. Либо если у вас в
                                    системе не установлена нужная раскладка, но нужно переключиться на ваш родной язык.</p>
                                    <p>Во всех этих случаях вам поможет наш сайт. Просто начните печатать текст в поле ввода и
                                    он автоматически сконвертируется в нужный. Также можете скопировать текст через
                                    буфер обмена. Он также преобразуется автоматически.
                                    </p>
                                </small>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </main>
        </div>
    )
}