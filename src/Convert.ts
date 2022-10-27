export function convert (text: string, lang1: string, lang2: string) {

    const langSymbols = {
        ru: 'йцукенгшщзхъ\\фывапролджэячсмитьбю.ёЙЦУКЕНГШЩЗХЪ/ФЫВАПРОЛДЖЭЯЧСМИТЬБЮ,Ё!"№;%:?*()_+',
        en: 'qwertyuiop[]\\asdfghjkl;\'zxcvbnm,./`QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?~!@#$%^&*()_+',
        uk: 'йцукенгшщзхї\\фівапролджєячсмитьбю.\'ЙЦУКЕНГШЩЗХЇ/ФІВАПРОЛДЖЄЯЧСМИТЬБЮ,₴!"№;%:?*()_+',
        be: 'йцукенгшўзх\'\\фывапролджэячсмітьбю.ёЙЦУКЕНГШЎЗХ\'/ФЫВАПРОЛДЖЭЯЧСМІТЬБЮ,Ё!"№;%:?*()_+',
        uz: 'йцукенгшўзхъ\\фқвапролджэячсмитьбю.ёЙЦУКЕНГШЎЗХЪ/ФҚВАПРОЛДЖЭЯЧСМИТЬБЮ,Ё!"№;%:?*()ҒҲ',
        kk: 'йцукенгшщзхъ\\фывапролджэячсмитьбю№(ЙЦУКЕНГШЩЗХЪ/ФЫВАПРОЛДЖЭЯЧСМИТЬБЮ?)!ӘІҢҒ;:ҮҰҚӨҺ',
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