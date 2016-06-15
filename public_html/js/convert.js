//copyright http://sovietera.net (ussr.km.ru) - пожалуйста, не крадите эту и другие страницы, а ставьте ссылку.

var rus = "абвгдеёжзийклмнопрстуфхцчшщъьыэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЬЫЭЮЯ\"№;:?/.,",
    eng = "f,dult`;pbqrkvyjghcnea[wxio]ms'.zF<DULT~:PBQRKVYJGHCNEA{WXIO}MS'>Z\@#$^&|/?";
var fromLang = "",
    toLang = "";

function convert(text, lang) {
    var resultText = "";
    switch (lang) {
        case 0:
            if (rus.indexOf(text.charAt(1)) === -1) {
                fromLang = eng;
                toLang = rus;
            } else {
                fromLang = rus;
                toLang = eng;
            }
            break;
        case 1:
            fromLang = eng;
            toLang = rus;
            break;
        case 2:
            fromLang = rus;
            toLang = eng;
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

    //document.write(f.decoded.value);
}

function output(form) {
    form.decoded.value = convert(form.coded.value, form.lang.selectedIndex);
}

function input(form) {
    area = form.coded;
    button = document.getElementById('start-btn');

    area.addEventListener('input', function() {
        output(form);
    }, false);
    button.addEventListener("click", output(form), false);
}

//- сделать нормальную обработку кавычек и двойного переключения раскладки

function foo() {
    var form = document.forms[0];
    var button = document.getElementById('start-btn');

    input(form);
}

window.onload = foo;
