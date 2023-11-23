import React from 'react'
import {Helmet} from "react-helmet";
import {DocsHeader} from "../components/DocsHeader";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons';
import {TypografForm} from "../components/TypografForm";
import {Features} from '../components/Features';

export function TypografPage() {

    const featuresList = [
        {title: 'Безопасно', iconName: 'shield', desc: 'Ваш текст не отправляется на сервер, поэтому исключена возможность его прочтения'},
        {title: 'Быстро', iconName: 'flash', desc: 'Мгновенное кодирование больших объемов текста'},
        {title: 'Легко', iconName: 'star', desc: 'Добавьте страницу в закладки браузера или сохраните как приложение на рабочий стол вашего устройства'},
    ]

    const seoData = {
        title: 'Онлайн типограф: расстановка тире и замена кавычек на кавычки-ёлочки',
        description: 'Автоматическая замена дефисов на тире, кавычек на кавычки-ёлочки, удаление двойных пробелов и ударений, дроби, знак копирайта, номер и валюты.',
        site_name: 'Keybd.ru'
    }

    return (
        <div>
            <Helmet>
                <title>{seoData.title}</title>
                <link rel="canonical" href="https://keybd.ru/text-case" />
                <meta name="description" content={seoData.description} />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={seoData.title} />
                <meta property="og:description" content={seoData.description} />
                <meta property="og:url" content="https://keybd.ru/text-case" />
                <meta property="og:site_name" content={seoData.site_name} />
                <meta property="og:image" content="/logo512.png"></meta>
                <meta property="og:image:type" content="image/png" />
            </Helmet>

            <DocsHeader
                title="Типограф"
                lead={
                    <>
                        красивые кавычки, тире и многое другое
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
                            <span className="font-bold">"Привет, как дела?", - спросил друг. </span><FontAwesomeIcon icon={faLongArrowAltRight} /><span className="font-bold"> «Привет, как дела?», — спросил друг.</span>
                        </p>
                    </div>
                    <br/>

                    <TypografForm></TypografForm>

                    <Features list={featuresList}></Features>

                    <div className="well panel-narrow">
                        <Row>
                            <Col md={12}>
                                <small>
                                    <p>Онлайн <strong>типограф</strong>. Очень полезен для быстрого форматирования текстов для публикации. Здесь вы можете <strong>сделать кавычки-ёлочки</strong>, <strong>заменить дефисы на тире</strong>, <strong>напечатать знак номера, параграф, копирайт и кружочек в списке</strong>. Автоматически удаляются лишние пробелы и отступы. Также доступны математические символы <strong>плюс минус</strong>, <strong>знак градуса</strong>, <strong>дроби</strong> и <strong>знак рубля, евро, гривны, тенге</strong> и других валют.
                                    </p>
                                    <p>Просто начните печатать текст в поле ввода и он сконвертируется автоматически. Также можете скопировать текст через буфер обмена и «оттипографить» автоматически.</p>
                                </small>
                            </Col>
                        </Row>
                    </div>

                </Container>

            </main>
        </div>
    )
}