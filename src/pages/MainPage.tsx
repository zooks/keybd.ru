import React from 'react'
import {Helmet} from "react-helmet";
import {DocsHeader} from "../components/DocsHeader";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons';
import {LayoutForm} from "../components/LayoutForm";
import {Features} from '../components/Features';
import { LayoutKeyboard } from '../components/LayoutKeyboard';

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

    const featuresList = [
        {title: 'Безопасно', iconName: 'shield', desc: 'Ваш текст не отправляется на сервер, поэтому исключена возможность его прочтения'},
        {title: 'Быстро', iconName: 'flash', desc: 'Мгновенное кодирование без расходования трафика'},
        {title: 'Легко', iconName: 'star', desc: 'Не требуется устанавливать на компьютер дополнительные программы, просто добавьте страницу в закладки браузера'},
    ]

    const seoData = {
        title: 'Онлайн переключение раскладки клавиатуры: с русского на английский (16 языков)',
        description: 'Перевод раскладки онлайн для текста набранного в неправильной раскладке: если вы забыли переключить раскладку клавиатуры.',
        site_name: 'Typing.su'
    }

    return (
        <div>
            <Helmet>
                <title>{seoData.title}</title>
                <link rel="canonical" href="https://typing.su/" />
                <meta name="description" content={seoData.description} />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={seoData.title} />
                <meta property="og:description" content={seoData.description} />
                <meta property="og:url" content="https://typing.su/" />
                <meta property="og:site_name" content={seoData.site_name} />
            </Helmet>

            <DocsHeader
                title="Перевод раскладки клавиатуры онлайн"
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
                            <span className="font-bold">Пример:</span>
                        </div>
                        <p>
                            <span className="font-bold">Ghbdtn! </span><FontAwesomeIcon icon={faLongArrowAltRight} /><span className="font-bold"> Привет! 🇷🇺</span>
                            <span className="font-bold"> Руддщ! </span><FontAwesomeIcon icon={faLongArrowAltRight} /><span className="font-bold"> Hello! 🇺🇸</span>
                        </p>
                    </div>
                    <br/>

                    <LayoutForm></LayoutForm>

                    <h2 className="sr-only">Русская клавиатура онлайн</h2>
                    <LayoutKeyboard></LayoutKeyboard>

                    <Features list={featuresList}></Features>

                    <div className="well panel-narrow">
                        <Row>
                            <Col md={12}>
                                <div className="small">
                                    <p>Бывают ситуации когда вы долго
                                    печатали текст, но взглянув на монитор поняли, что забыли <strong>переключить раскладку
                                    клавиатуры</strong>, и текст оказался набран впустую. Или ваш собеседник отправил сообщение не
                                    посмотрев, и вы получили набор кракозябр вместо связного текста. Либо если у вас в
                                    системе не установлена нужная раскладка, но нужно переключиться на ваш родной язык.</p>
                                    <p>Во всех этих случаях вам поможет наш сайт. Просто начните печатать текст в поле ввода и
                                    он автоматически сконвертируется в нужный. Также можете скопировать текст через
                                    буфер обмена. Он также преобразуется автоматически.
                                    </p>
                                    <p><strong>Поддерживаемые языки (раскладки):</strong> Русский, Английский, Украинский, Белорусский, Узбекский, Казахский, Азербайджанский, Литовский, Молдавский, Латышский, Киргизский, Таджикский, Армянский, Туркменский, Эстонский. Список будет пополняться.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>

                </Container>

            </main>
        </div>
    )
}