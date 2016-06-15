// copyright http://typing.su (sovtime.ru)

var langSymbols = {
    rus: 'абвгдеёжзийклмнопрстуфхцчшщъьыэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЬЫЭЮЯ"№;:?/.,',
    eng: 'f,dult`;pbqrkvyjghcnea[wxio]ms\'.zF<DULT~:PBQRKVYJGHCNEA{WXIO}MS\'>Z\@#$^&|/?'
};
var fromLang = '',
    toLang = '';

function convert(text, lang) {
    var resultText = '';
    switch (lang) {
        case 0:
            if (langSymbols.rus.indexOf(text.charAt(1)) === -1) {
                fromLang = langSymbols.eng;
                toLang = langSymbols.rus;
            } else {
                fromLang = langSymbols.rus;
                toLang = langSymbols.eng;
            }
            break;
        case 1:
            fromLang = langSymbols.eng;
            toLang = langSymbols.rus;
            break;
        case 2:
            fromLang = langSymbols.rus;
            toLang = langSymbols.eng;
            break;
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
    form.decoded.value = convert(form.coded.value, form.lang.selectedIndex);
}

function input(form, area, button) {
    area.addEventListener('input', function() {
        output(form);
    }, false);

    button.addEventListener('click', function() {
        output(form);
    }, false);
}

function foo() {
    var form = document.getElementById('convert-form');//forms[0];
    var area = form.coded;
    var button = document.getElementById('start-btn');

    input(form, area, button);
}

window.onload = foo;
