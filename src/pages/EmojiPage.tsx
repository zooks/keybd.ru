import React from 'react'
import {Helmet} from "react-helmet";
import {DocsHeader} from "../components/DocsHeader";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindows} from '@fortawesome/free-brands-svg-icons';
import {faCircleExclamation} from '@fortawesome/free-solid-svg-icons';



export function EmojiPage() {

    const emojiGroups = [
        {
            title: 'Смайлы и люди',
            content: '😀 😬 😁 😂 😃 😄 😅 😆 😇 😉 😊 🙂 🙃 ☺️ 😋 😌 😍 😘 😗 😙 😚 😜 😝 😛 🤑 🤓 😎 🤗 😏 😶 😐 😑 😒 🙄 🤔 😳 😞 😟 😠 😡 😔 😕 🙁 ☹️ 😣 😖 😫 😩 😤 😮 😱 😨 😰 😯 😦 😧 😢 😥 😪 😓 😭 😵 😲 🤐 😷 🤒 🤕 😴 💤 💩 😈 👿 👹 👺 💀 👻 👽 🤖 😺 😸 😹 😻 😼 😽 🙀 😿 😾 🙌 👏 👋 👍 👊 ✊ ✌️ 👌 ✋ 💪 🙏 ☝️ 👆 👇 👈 👉 🖕 🤘 🖖 ✍️ 💅 👄 👅 👂 👃 👁 👀 👤 🗣 👶 👦 👧 👨 👩 👱 👴 👵 👲 👳 👮 👷 💂 🕵 🎅 👼 👸 👰 🚶 🏃 💃 👯 👫 👬 👭 🙇 💁 🙅 🙆 🙋 🙎 🙍 💇 💆 💑 👩‍❤️‍👩 👨‍❤️‍👨 💏 👩‍❤️‍💋‍👩 👨‍❤️‍💋‍👨 👪 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👚 👕 👖 👔 👗 👙 👘 💄 💋 👣 👠 👡 👢 👞 👟 👒 🎩 ⛑ 🎓 👑 🎒 👝 👛 👜 💼 👓 🕶 💍 🌂',
        },
        {
            title: 'Природа и животные',
            content: '🐶 🐱 🐭 🐹 🐰 🐻 🐼 🐨 🐯 🦁 🐮 🐷 🐽 🐸 🐙 🐵 🙈 🙉 🙊 🐒 🐔 🐧 🐦 🐤 🐣 🐥 🐺 🐗 🐴 🦄 🐝 🐛 🐌 🐞 🐜 🕷 🦂 🦀 🐍 🐢 🐠 🐟 🐡 🐬 🐳 🐋 🐊 🐆 🐅 🐃 🐂 🐄 🐪 🐫 🐘 🐐 🐏 🐑 🐎 🐖 🐀 🐁 🐓 🦃 🕊 🐕 🐩 🐈 🐇 🐿 🐾 🐉 🐲 🌵 🎄 🌲 🌳 🌴 🌱 🌿 ☘ 🍀 🎍 🎋 🍃 🍂 🍁 🌾 🌺 🌻 🌹 🌷 🌼 🌸 💐 🍄 🌰 🎃 🐚 🕸 🌎 🌍 🌏 🌕 🌖 🌗 🌘 🌑 🌒 🌓 🌔 🌚 🌝 🌛 🌜 🌞 🌙 ⭐️ 🌟 💫 ✨ ☄ ☀️ 🌤 ⛅️ 🌥 🌦 ☁️ 🌧 ⛈ 🌩 ⚡️ 🔥 💥 ❄️ 🌨 🔥 💥 ❄️ 🌨 ☃️ ⛄️ 🌬 💨 🌪 🌫 ☂️ ☔️ 💧 💦 🌊',
        },
        {
            title: 'Еда и напитки',
            content: '🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🍈 🍒 🍑 🍍 🍅 🍆 🌶 🌽 🍠 🍯 🍞 🧀 🍗 🍖 🍤 🍳 🍔 🍟 🌭 🍕 🍝 🌮 🌯 🍜 🍲 🍥 🍣 🍱 🍛 🍙 🍚 🍘 🍢 🍡 🍧 🍨 🍦 🍰 🎂 🍮 🍬 🍭 🍫 🍿 🍩 🍪 🍺 🍻 🍷 🍸 🍹 🍾 🍶 🍵 ☕️ 🍼 🍴 🍽',
        },
        {
            title: 'Спорт',
            content: '⚽️ 🏀 🏈 ⚾️ 🎾 🏐 🏉 🎱 ⛳️ 🏌 🏓 🏸 🏒 🏑 🏏 🎿 ⛷ 🏂 ⛸ 🏹 🎣 🚣 🏊 🏄 🛀 ⛹ 🏋 🚴 🚵 🏇 🕴 🏆 🎽 🏅 🎖 🎗 🏵 🎫 🎟 🎭 🎨 🎪 🎤 🎧 🎼 🎹 🎷 🎺 🎸 🎻 🎬 🎮 👾 🎯 🎲 🎰 🎳',
        },
        {
            title: 'Путешествия',
            content: '🚗 🚕 🚙 🚌 🚎 🏎 🚓 🚑 🚒 🚐 🚚 🚛 🚜 🏍 🚲 🚨 🚔 🚍 🚘 🚖 🚡 🚠 🚟 🚃 🚋 🚝 🚄 🚅 🚈 🚞 🚂 🚆 🚇 🚊 🚉 🚁 🛩 ✈️ 🛫 🛬 ⛵️ 🛥 🚤 ⛴ 🛳 🚀 🛰 💺 ⚓️ 🚧 ⛽️ 🚏 🚦 🚥 🏁 🚢 🎡 🎢 🎠 🏗 🌁 🗼 🏭 ⛲️ 🎑 ⛰ 🏔 🗻 🌋 🗾 🏕 ⛺️ 🏞 🛣 🛤 🌅 🌄 🏜 🏖 🏝 🌇 🌆 🏙 🌃 🌉 🌌 🌠 🎇 🎆 🌈 🏘 🏰 🏯 🏟 🗽 🏠 🏡 🏚 🏢 🏬 🏣 🏤 🏥 🏦 🏨 🏪 🏫 🏩 💒 🏛 ⛪️ 🕌 🕍 🕋 ⛩',
        },
        {
            title: 'Значки',
            content: '⌚️ 📱 📲 💻 ⌨ 🖥 🖨 🖱 🖲 🕹 🗜 💽 💾 💿 📀 📼 📷 📸 📹 🎥 📽 🎞 📞 ☎️ 📟 📠 📺 📻 🎙 🎚 🎛 ⏱ ⏲ ⏰ 🕰 ⏳ ⌛️ 📡 🔋 🔌 💡 🔦 🕯 🗑 🛢 💸 💵 💴 💶 💷 💰 💳 💎 ⚖ 🔧 🔨 ⚒ 🛠 ⛏ 🔩 ⚙ ⛓ 🔫 💣 🔪 🗡 ⚔ 🛡 🚬 ☠ ⚰ ⚱ 🏺 🔮 📿 💈 ⚗ 🔭 🔬 🕳 💊 💉 🌡 🏷 🔖 🚽 🚿 🛁 🔑 🗝 🛋 🛌 🛏 🚪 🛎 🖼 🗺 ⛱ 🗿 🛍 🎈 🎏 🎀 🎁 🎊 🎉 🎎 🎐 🎌 🏮 ✉️ 📩 📨 📧 💌 📮 📪 📫 📬 📭 📦 📯 📥 📤 📜 📃 📑 📊 📈 📉 📄 📅 📆 🗓 📇 🗃 🗳 🗄 📋 🗒 📁 📂 🗂 🗞 📰 📓 📕 📗 📘 📙 📔 📒 📚 📖 🔗 📎 🖇 ✂️ 📐 📏 📌 📍 🚩 🏳 🏴 🔐 🔒 🔓 🔏 🖊 🖊 🖋 ✒️ 📝 ✏️ 🖍 🖌 🔍 🔎',
        },
        {
            title: 'Символы',
            content: '❤️ 💛 💙 💜 💔 ❣️ 💕 💞 💓 💗 💖 💘 💝 💟 ☮ ✝️ ☪ 🕉 ☸ ✡️ 🔯 🕎 ☯️ ☦ 🛐 ⛎ ♈️ ♉️ ♊️ ♋️ ♌️ ♍️ ♎️ ♏️ ♐️ ♑️ ♒️ ♓️ 🆔 ⚛ 🈳 🈹 ☢ ☣ 📴 📳 🈶 🈚️ 🈸 🈺 🈷️ ✴️ 🆚 🉑 💮 🉐 ㊙️ ㊗️ 🈴 🈵 🈲 🅰️ 🅱️ 🆎 🆑 🅾️ 🆘 ⛔️ 📛 🚫 ❌ ⭕️ 💢 ♨️ 🚷 🚯 🚳 🚱 🔞 📵 ❗️ ❕ ❓ ❔ ‼️ ⁉️ 💯 🔅 🔆 🔱 ⚜ 〽️ ⚠️ 🚸 🔰 ♻️ 🈯️ 💹 ❇️ ✳️ ❎ ✅ 💠 🌀 ➿ 🌐 Ⓜ️ 🏧 🈂️ 🛂 🛃 🛄 🛅 ♿️ 🚭 🚾 🅿️ 🚰 🚹 🚺 🚼 🚻 🚮 🎦 📶 🈁 🆖 🆗 🆙 🆒 🆕 🆓 0️⃣ 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 🔢 ▶️ ⏸ ⏯ ⏹ ⏺ ⏭ ⏮ ⏩ ⏪ 🔀 🔁 🔂 ◀️ 🔼 🔽 ⏫ ⏬ ➡️ ⬅️ ⬆️ ⬇️ ↗️ ↘️ ↙️ ↖️ ↕️ ↔️ 🔄 ↪️ ↩️ ⤴️ ⤵️ #️⃣ *️⃣ ℹ️ 🔤 🔡 🔠 🔣 🎵 🎶 〰️ ➰ ✔️ 🔃 ➕ ➖ ➗ ✖️ 💲 💱 ©️ ®️ ™️ 🔚 🔙 🔛 🔝 🔜 ☑️ 🔘 ⚪️ ⚫️ 🔴 🔵 🔸 🔹 🔶 🔷 🔺 ▪️ ▫️ ⬛️ ⬜️ 🔻 ◼️ ◻️ ◾️ ◽️ 🔲 🔳 🔈 🔉 🔊 🔇 📣 📢 🔔 🔕 🃏 🀄️ ♠️ ♣️ ♥️ ♦️ 🎴 👁‍🗨 💭 🗯 💬 🕐 🕑 🕒 🕓 🕔 🕕 🕖 🕗 🕘 🕙 🕚 🕛 🕜 🕝 🕞 🕟 🕠 🕡 🕢 🕣 🕤 🕥 🕦 🕧',
        },
        {
            title: 'Флаги',
            content: '🇦🇫 🇦🇽 🇦🇱 🇩🇿 🇦🇸 🇦🇩 🇦🇴 🇦🇮 🇦🇶 🇦🇬 🇦🇷 🇦🇲 🇦🇼 🇦🇺 🇦🇹 🇦🇿 🇧🇸 🇧🇭 🇧🇩 🇧🇧 🇧🇾 🇧🇪 🇧🇿 🇧🇯 🇧🇲 🇧🇹 🇧🇴 🇧🇶 🇧🇦 🇧🇼 🇧🇷 🇮🇴 🇻🇬 🇧🇳 🇧🇬 🇧🇫 🇧🇮 🇨🇻 🇰🇭 🇨🇲 🇨🇦 🇮🇨 🇰🇾 🇨🇫 🇹🇩 🇨🇱 🇨🇳 🇨🇽 🇨🇨 🇨🇴 🇰🇲 🇨🇬 🇨🇩 🇨🇰 🇨🇷 🇭🇷 🇨🇺 🇨🇼 🇨🇾 🇨🇿 🇩🇰 🇩🇯 🇩🇲 🇩🇴 🇪🇨 🇪🇬 🇸🇻 🇬🇶 🇪🇷 🇪🇪 🇪🇹 🇪🇺 🇫🇰 🇫🇴 🇫🇯 🇫🇮 🇫🇷 🇬🇫 🇵🇫 🇹🇫 🇬🇦 🇬🇲 🇬🇪 🇩🇪 🇬🇭 🇬🇮 🇬🇷 🇬🇱 🇬🇩 🇬🇵 🇬🇺 🇬🇹 🇬🇬 🇬🇳 🇬🇼 🇬🇾 🇭🇹 🇭🇳 🇭🇰 🇭🇺 🇮🇸 🇮🇳 🇮🇩 🇮🇷 🇮🇶 🇮🇪 🇮🇲 🇮🇱 🇮🇹 🇨🇮 🇯🇲 🇯🇵 🇯🇪 🇯🇴 🇰🇿 🇰🇪 🇰🇮 🇽🇰 🇰🇼 🇰🇬 🇱🇦 🇱🇻 🇱🇧 🇱🇸 🇱🇷 🇱🇾 🇱🇮 🇱🇹 🇱🇺 🇲🇴 🇲🇰 🇲🇬 🇲🇼 🇲🇾 🇲🇻 🇲🇱 🇲🇹 🇲🇭 🇲🇶 🇲🇷 🇲🇺 🇾🇹 🇲🇽 🇫🇲 🇲🇩 🇲🇨 🇲🇳 🇲🇪 🇲🇸 🇲🇦 🇲🇿 🇲🇲 🇳🇦 🇳🇷 🇳🇵 🇳🇱 🇳🇨 🇳🇿 🇳🇮 🇳🇪 🇳🇬 🇳🇺 🇳🇫 🇲🇵 🇰🇵 🇳🇴 🇴🇲 🇵🇰 🇵🇼 🇵🇸 🇵🇦 🇵🇬 🇵🇾 🇵🇪 🇵🇭 🇵🇳 🇵🇱 🇵🇹 🇵🇷 🇶🇦 🇷🇪 🇷🇴 🇷🇺 🇷🇼 🇧🇱 🇸🇭 🇰🇳 🇱🇨 🇵🇲 🇻🇨 🇼🇸 🇸🇲 🇸🇹 🇸🇦 🇸🇳 🇷🇸 🇸🇨 🇸🇱 🇸🇬 🇸🇽 🇸🇰 🇸🇮 🇸🇧 🇸🇴 🇿🇦 🇬🇸 🇰🇷 🇸🇸 🇪🇸 🇱🇰 🇸🇩 🇸🇷 🇸🇿 🇸🇪 🇨🇭 🇸🇾 🇹🇼 🇹🇯 🇹🇿 🇹🇭 🇹🇱 🇹🇬 🇹🇰 🇹🇴 🇹🇹 🇹🇳 🇹🇷 🇹🇲 🇹🇨 🇹🇻 🇺🇬 🇺🇦 🇦🇪 🇬🇧 🇺🇸 🇻🇮 🇺🇾 🇺🇿 🇻🇺 🇻🇦 🇻🇪 🇻🇳 🇼🇫 🇪🇭 🇾🇪 🇿🇲 🇿🇼',
        },
    ]
    return (
        <>
            <Helmet>
                <title>Онлайн эмоджи для набора с компьютера</title>
                <meta name="description" content="Набрать смайлы эмодзи на компьютере. Коды не нужны!" />
            </Helmet>
            <DocsHeader title="Эмоджи/эмодзи (Emoji)" lead="Emoji — это цветные пиктограммы, которые используются в тексте для выражения эмоций." />
            <main>
                <Container>
                    <Alert key="info" variant="info">

                        <p>
                            Скопируйте <kbd>Ctrl + C</kbd> понравившиеся эмоджи<span
                            className="emoji"> 😊 </span> и вставьте <kbd>Ctrl + V</kbd> в поле ниже. Затем скопируйте
                            всё поле.
                        </p>
                        <p>
                            На <strong>Windows 10</strong> нажмите
                            {' '}<kbd>
                                <FontAwesomeIcon icon={faWindows} title="Win" />
                                 + ;
                            </kbd>{' '}
                            или 
                            <kbd>
                                <FontAwesomeIcon icon={faWindows} title="Win" />
                                 + .
                            </kbd>{' '}
                            — появится панель с эмоджи.
                        </p>
                    </Alert>

                    <Form className="mb-1" id="convert-form">
                        <Row>
                            <Col sm={12}>
                                <fieldset className="mb-3">
                                    <Form.Control as="textarea" name="coded" cols={50} rows={3} />
                                </fieldset>
                            </Col>
                        </Row>
                    </Form>

                    <div className="emoji">
                        <Tabs
                            defaultActiveKey="tab0"
                            id="tab-example"
                            // className="mb-3"
                        >
                            {emojiGroups.map((group, index) =>
                                <Tab as="section" eventKey={'tab' + index} title={group.title}>
                                    <p>
                                        {group.content.split(' ').map((value) => (
                                          <span key={value}>{value}</span>
                                        ))}

                                    </p>
                                </Tab>
                            )}

                        </Tabs>
                    </div>
                    <Alert key="warning" variant="warning">
                        <FontAwesomeIcon icon={faCircleExclamation} />
                          Внешний вид emoji может отличаться в зависимости от вашего устройства и приложения.
                    </Alert>
                    <br/><br/>
                </Container>
            </main>
        </>
    )
}