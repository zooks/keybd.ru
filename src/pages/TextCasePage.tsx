import React from 'react'
import {Helmet} from "react-helmet";
import {DocsHeader} from "../components/DocsHeader";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons';
import {TextCaseForm} from "../components/TextCaseForm";
import {Features} from '../components/Features';

export function TextCasePage() {

    const featuresList = [
        {title: 'Безопасно', iconName: 'shield', desc: 'Ваш текст не отправляется на сервер, поэтому исключена возможность его прочтения'},
        {title: 'Быстро', iconName: 'flash', desc: 'Мгновенное кодирование без расходования трафика'},
        {title: 'Легко', iconName: 'star', desc: 'Не требуется устанавливать на компьютер дополнительные программы, просто добавьте страницу в закладки браузера'},
    ]

    const seoData = {
        title: 'Онлайн смена регистра текста: с прописных на строчные и со строчных на прописные буквы',
        description: 'Перевод регистра строки онлайн для текста набранного капсом: если вы случайно нажали Caps Lock на клавиатуре.',
        site_name: 'Typing.su'
    }

    return (
        <div>
            <Helmet>
                <title>{seoData.title}</title>
                <link rel="canonical" href="https://typing.su/text-case" />
                <meta name="description" content={seoData.description} />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={seoData.title} />
                <meta property="og:description" content={seoData.description} />
                <meta property="og:url" content="https://typing.su/text-case" />
                <meta property="og:site_name" content={seoData.site_name} />
            </Helmet>

            <DocsHeader
                title="Перевод строчных в заглавные онлайн"
                lead={
                    <>
                        и заглавных букв в строчные
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
                            <span className="font-bold">пРИВЕТ! </span><FontAwesomeIcon icon={faLongArrowAltRight} /><span className="font-bold"> Привет!</span>
                        </p>
                    </div>
                    <br/>

                    <TextCaseForm></TextCaseForm>

                    <Features list={featuresList}></Features>

                    <div className="well panel-narrow">
                        <Row>
                            <Col md={12}>
                                <small>
                                    <p>Онлайн <strong>перевод строчных букв в заглавные (прописные)</strong>. А также перевод заглавных в строчные. Будет полезно если <strong>не работает Caps Lock на клавиатуре</strong>, либо вы забыли переключить его, а большой объем текста уже набран.
                                        Это спасёт вас от перепечатывания всего текста.
                                    </p>
                                    <p>Просто начните печатать текст в поле ввода и он автоматически сконвертируется в нужный. Также можете скопировать текст через буфер обмена. Он также преобразуется автоматически.</p>
                                </small>
                            </Col>
                        </Row>
                    </div>

                </Container>

            </main>
        </div>
    )
}