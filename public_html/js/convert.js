// copyright http://typing.su (sovtime.ru)

var langSymbols = {
    ru: 'йцукенгшщзхъ\\фывапролджэячсмитьбю.ёЙЦУКЕНГШЩЗХЪ/ФЫВАПРОЛДЖЭЯЧСМИТЬБЮ,Ё!"№;%:?*()_+',
    en: 'qwertyuiop[]\\asdfghjkl;\'zxcvbnm,./`QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?~!@#$%^&*()_+',
    uk: 'йцукенгшщзхї\\фівапролджєячсмитьбю.\'ЙЦУКЕНГШЩЗХЇ/ФІВАПРОЛДЖЄЯЧСМИТЬБЮ,₴!"№;%:?*()_+',
    be: 'йцукенгшўзх\'\\фывапролджэячсмітьбю.ёЙЦУКЕНГШЎЗХ\'/ФЫВАПРОЛДЖЭЯЧСМІТЬБЮ,Ё!"№;%:?*()_+',
    uz: 'йцукенгшўзхъ\\фқвапролджэячсмитьбю.ёЙЦУКЕНГШЎЗХЪ/ФҚВАПРОЛДЖЭЯЧСМИТЬБЮ,Ё!"№;%:?*()ҒҲ',
    kk: 'йцукенгшщзхъ\\фывапролджэячсмитьбю№(ЙЦУКЕНГШЩЗХЪ/ФЫВАПРОЛДЖЭЯЧСМИТЬБЮ?)!ӘІҢҒ;:ҮҰҚӨҺ',
    // ka: 'ქწერტყუიოპ[]~ასდფგჰჯკლ;\'ზხცვბნმ,./„ ჭ ღთ     {}| შ    ჟ ₾:"ძ ჩ  N <>?“!@#$%^&*()_+',
    az: 'qüertyuiopöğ\\asdfghjklıəzxcvbnmçş.`QÜERTYUİOPÖĞ/ASDFGHJKLIƏZXCVBNMÇŞ,~!"№;%:?*()_+',
    lt: 'qwertyuiop[]\\asdfghjkl;\'zxcvbnm,./`QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?~ĄČĘĖĮŠŲŪ()_Ž',
    mo: 'qwertyuiopăîâasdfghjklșțzxcvbnm,./„QWERTYUIOPĂÎÂASDFGHJKLȘȚZXCVBNM;:?”!@#$%^&*()_+',
    lv: 'qwertyuiop[]\\asdfghjkl;\'zxcvbnm,./`QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?~!@#$%^&*()_+',//en
    ky: 'йцукенгшщзхъ\\фывапролджэячсмитьбю.ёЙЦУКЕНГШЩЗХЪ/ФЫВАПРОЛДЖЭЯЧСМИТЬБЮ,Ё!"№;%:?*()_+',
    tg: 'йқукенгшҳзхъ\\фҷвапролджэячсмитӣбю.ёЙҚУКЕНГШҲЗХЪ/ФҶВАПРОЛДЖЭЯЧСМИТӢБЮ,Ё!"№;%:?*()ҒӮ',
    hy: 'քոեռտըւիօպխծշասդֆգհյկլ;՛զղցվբնմ,․/՝ՔՈԵՌՏԸՒԻՕՊԽԾՇԱՍԴՖԳՀՅԿԼ։"ԶՂՑՎԲՆՄ<>՞՜ԷԹՓՁՋՒևՐՉՃ—Ժ',
    tk: 'äwertyuiopňöşasdfghjkl;\'züçýbnm,./žÄWERTYUIOPŇÖŞASDFGHJKL:"ZÜÇÝBNM<>?Ž!@#$%№&*()_+',
    et: 'qwertyuiopüõ\'asdfghjklöäzxcvbnm,.-ˇQWERTYUIOPÜÕ*ASDFGHJKLÖÄZXCVBNM;:_~!"#¤%&/()=?`'
};
var fromLang = '',
    toLang = '';

function convert(text, lang1, lang2) {
    var resultText = '';

    if (lang1 === 'auto') {
        if (langSymbols[lang2].indexOf(text.charAt(1)) === -1) {
            fromLang = langSymbols.en;
            toLang = langSymbols[lang2];
            // console.log('en', lang2);
        } else {
            fromLang = langSymbols[lang2];
            toLang = langSymbols.en;
            // console.log(lang2, 'en');
        }
        
    } else {
      fromLang = langSymbols[lang1];
      toLang = langSymbols[lang2];
    }

    for (var i = 0; i < text.length; i++) {
        var j = fromLang.indexOf(text.charAt(i));
        if (j < 0) {
            resultText += text.charAt(i);
        } else {
            resultText += toLang.charAt(j);
        }
    }
    return resultText;
}

function output(form) {
    form.decoded.value = convert(form.coded.value, form.lang1.value, form.lang2.value);
}
function clear(form) {
    form.decoded.value = '';
    form.coded.value = '';
}

function input(form, area, buttonStart, buttonClear, select1, select2) {
    area.addEventListener('input', function() {
        output(form);
    }, false);

    buttonStart.addEventListener('click', function() {
        output(form);
    }, false);

    buttonClear.addEventListener('click', function() {
        clear(form);
    }, false);

    select1.addEventListener('change', function() {
        output(form);
    }, false);

    select2.addEventListener('change', function() {
        output(form);
    }, false);
}

function onLoad() {
    var form = document.getElementById('convert-form'),
    area = form.coded,
    button1 = document.getElementById('start-btn'),
    button2 = document.getElementById('clear-btn'),
    select1 = document.getElementById('lang1'),
    select2 = document.getElementById('lang2');
    
    input(form, area, button1, button2, select1, select2);
}

window.onload = function() {
  onLoad();
};
