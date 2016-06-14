//copyright http://sovietera.net (ussr.km.ru) - пожалуйста, не крадите эту и другие страницы, а ставьте ссылку.

var RUS = "абвгдеёжзийклмнопрстуфхцчшщъьыэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЬЫЭЮЯ\"№;:?/.,",
    ENG = "f,dult`;pbqrkvyjghcnea[wxio]ms'.zF<DULT~:PBQRKVYJGHCNEA{WXIO}MS'>Z\@#$^&|/?";
var FROM = "",
    TO = "";

function convert(f) {
    s = f.coded.value;
    if (f.lang.selectedIndex === 0) {
        if (RUS.indexOf(s.charAt(1)) == -1) {
            FROM = ENG;
            TO = RUS;
        } else {
            FROM = RUS;
            TO = ENG;
        }
    } else if (f.lang.selectedIndex == 1) {
        FROM = ENG;
        TO = RUS;
    } else if (f.lang.selectedIndex == 2) {
        FROM = RUS;
        TO = ENG;
    }
    c = "";
    for (var i = 0; i < s.length; i++) {
        var j = FROM.indexOf(s.charAt(i));
        if (j < 0) {
            c += s.charAt(i);
        } else {
            c += TO.charAt(j);
        }
    }
    // return c;
    f.decoded.value = c;
    //document.write(f.decoded.value);
}
//- сделать нормальную обработку кавычек и двойного переключения раскладки
