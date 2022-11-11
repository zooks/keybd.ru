import {langSymbols} from './ConvertLangSymbols';

export function convert (text: string, lang1: string, lang2: string) {

    let fromLang = '',
        toLang = '';

    let resultText = '';

    if (lang1 === 'auto') {
        if (langSymbols[lang2 as keyof typeof langSymbols].indexOf(text.charAt(1)) === -1) {
            fromLang = langSymbols.en;
            toLang = langSymbols[lang2 as keyof typeof langSymbols];
            // console.log('en', lang2);
        } else {
            fromLang = langSymbols[lang2 as keyof typeof langSymbols];
            toLang = langSymbols.en;
            // console.log(lang2, 'en');
        }
        
    } else {
      fromLang = langSymbols[lang1 as keyof typeof langSymbols];
      toLang = langSymbols[lang2 as keyof typeof langSymbols];
    }

    for (let i = 0; i < text.length; i++) {
        let j = fromLang.indexOf(text.charAt(i));
        if (j < 0) {
            resultText += text.charAt(i);
        } else {
            resultText += toLang.charAt(j);
        }
    }
    return resultText;
};