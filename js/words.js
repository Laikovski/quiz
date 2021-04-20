const deck = [
    ['brać', 'брать'],
    ['czesać', 'чесать'],
    ['drzeć', 'драть'],
    ['jechać', 'ехать'],
    ['kąpać się', 'купаться'],
    ['kaszleć', 'кашлять'],
    ['pisać', 'писать'],
    ['płakać', 'плакать'],
    ['rwać', 'рвать'],
    ['śmiać się', 'смеяться'],
    ['wrzeć', 'вариться'],
    ['żreć', 'жрать'],
    ['zwać', 'звать'],
    ['burza', 'буря'],
    ['chłód', 'холод'],
    ['chmura', 'туча'],
    ['ciepło', 'тепло'],
    ['deszcz', 'дождь'],
    ['gołoledź', 'гололед'],
    ['gorąco', 'жарко'],
    ['grad', 'град'],
    ['grzmot', 'гром'],
    ['lód', 'лед'],
    ['mgła', 'мгла'],
    ['mróz', 'мороз'],
    ['mżawka', 'мелкий дождик'],
    ['obłok', 'облако'],
    ['odwilż', 'оттепель'],
    ['opady', 'осадки'],
    ['przymrozek', 'заморозки'],
    ['słońce', 'солнце'],
    ['śnieg', 'снег'],
    ['tęcza', 'радуга'],
    ['ulewa', 'ливень'],
    ['upał', 'жара'],
    ['wiatr', 'ветер'],
    ['zimno', 'холодно'],
    ['bać się', 'бояться'],
    ['biegać', 'бегать'],
['boleć', 'болеть'],
['brać', 'брать'],
['być', 'быть'],
['całować', 'целовать'],
['chcieć', 'хотеть'],
['chodzić', 'ходить'],
['chronić', 'защищать'],
['cieszyć się', 'радоваться'],
['ćwiczyć', 'тренироваться'],
['czekać', 'ждать'],
['czuć', 'чувствовать'],
['czytać', 'читать'],
['dać', 'дать'],
['dokonać', 'доработать'],
['dostać', 'получить'],
['dotrzeć', 'добраться'],
['dowiedzieć się', 'узнать'],
['drażnić', 'раздражать'],
['działać', 'действовать'],
['dziękować', 'благодарить'],
['dzwonić', 'звонить'],
['arbować', 'красить'],
['gotować', 'готовить'],
['grać', 'играть'],
['interesować się', 'интересоваться'],
['irytować', 'раздражать'],
['jechać', 'ехать'],
['jeść', 'есть'],
['jeździć', 'ездить'],
['kierować', 'управлять'],
['kochać', 'любить'],
['kończyć', 'закончить'],
['korzystać', 'пользоваться'],
['kosztować', 'стоить'],
['kroić', 'резать'],
['kupić', 'купить'],
['kupować', 'покупать'],
['łapać', 'ловить'],
['leżeć', 'лежать'],
['liczyć', 'считать'],
['lubić', 'любить'],
['malować', 'рисовать'],
['martwić się', 'волноваться'],
['marzyć', 'мечтать'],
['mieć', 'иметь'],
['mieszkać', 'жить'],
['móc', 'мочь'],
['mówić', 'говорить'],
['musieć', 'быть вынужденным'],
['myśleć', 'думать'],
['napisać', 'написать'],
['nauczyć', 'научить'],
['nazywać się', 'называться'],
['nieść', 'нести'],
['nosić', 'носить'],
['nudzić się', 'скучать'],
['oddać', 'отдать'],
['oddzwonić', 'перезвонить'],
['odebrać', 'забрать'],
['odejść', 'отойти'],
['odnaleźć', 'найти'],
['odpoczywać', 'отдыхать'],
['odpowiedzieć', 'ответить'],
['okazać', 'предоставить'],
['opowiedzieć', 'рассказать'],
['organizować', 'организовать'],
['otworzyć', 'открыть'],
['ożenić się', 'жениться'],
['palić', 'курить'],
['pamiętać', 'помнить'],
['patrzeć', 'смотреть'],
['pić', 'пить'],
['pisać', 'писать'],
['płacić', 'платить'],
['planować', 'планировать'],
['pływać', 'плавать'],
['pobrać się', 'жениться'],
['podnieść', 'преподнести'],
['podobać się', 'нравиться'],
['podróżować', 'путешествовать'],
['pójść', 'пойти'],
['pokazać', 'показать'],
['polecać', 'рекомендовать'],
['położyć', 'положить'],
['pomóc', 'помочь'],
['pomyśleć', 'подумать'],
['poprosić', 'попросить'],
['potrzebować', 'потребовать'],
['powiedzieć', 'сказать'],
['powstrzymać', 'придержать'],
['powtarzać', 'повторять'],
['powtórzyć', 'повторить'],
['poznać', 'познать', 'узнать'],
['pozostać', 'остаться'],
['pozwolić', 'позволить'],
['pracować', 'работать'],
['proponować', 'предлагать'],
['prosić', 'просить'],
['przeczytać', 'прочитать'],
['przedstawić się', 'представиться'],
['przejść', 'прийти'],
['przekonać', 'убедить'],
['przepraszać', 'извиняться'],
['przyjąć', 'принять'],
['przyjmować', 'принимать'],
['przyjść', 'прийти'],
['przymierzyć', 'примерить'],
['przypomnieć', 'вспомнить'],
['pytać', 'спрашивать'],
['rezerwować', 'резервировать'],
['robić', 'делать'],
['rozbić', 'разбить'],
['rozmawiać', 'разговаривать'],
['rozumieć', 'понимать'],
['rzucić', 'бросить'],
['segregować', 'сортировать'],
['siedzieć', 'сидеть'],
['skończyć', 'закончить'],
['słuchać', 'слушать'],
['słychać', 'слышать', 'слышно'],
['słyszeć', 'слышать'],
['spać', 'спать'],
['śpiewać', 'петь'],
['spodziewać się', 'надеяться'],
['spojrzeć', 'посмотреть'],
['spotkać', 'встретить'],
['spotykać się', 'встретиться'],
['spóźnić się', 'опоздать'],
['sprawdzić', 'проверить'],
['spróbować', 'попробовать'],
['sprzątać', 'убирать'],
['sprzedawać', 'продавать'],
['stać', 'стать'],
['stosować', 'применять'],
['studiować', 'учиться'],
['szukać', 'искать'],
['tańczyć', 'танцевать'],
['telefonować', 'звонить'],
['tłumaczyć', 'переводить'],
['tyć', 'толстеть'],
['uciekać', 'убегать'],
['uczyć się', 'учиться'],
['uczynić', 'сделать'],
['uderzyć się', 'удариться'],
['ukraść', 'украсть'],
['ukryć', 'скрыть'],
['umawiać się', 'договариваться'],
['umrzeć', 'умереть'],
['upaść', 'упасть'],
['urodzić się', 'родиться'],
['usłyszeć', 'услышать'],
['uśmiechać się', 'улыбаться'],
['uwierzyć', 'поверить'],
['używać', 'принимать'],
['walczyć', 'драться'],
['wejść', 'войти'],
['widać', 'видно', 'можно увидеть'],
['widzieć', 'видеть'],
['wiedzieć', 'знать'],
['wierzyć', 'верить'],
['wisieć', 'висеть'],
['woleć', 'хотеть'],
['wracać', 'возвращаться'],
['wrócić', 'вернуться'],
['wyglądać', 'выглядеть'],
['wyjść', 'выйти'],
['wynająć', 'снять'],
['wyobrazić', 'представить'],
['wysłać', 'послать'],
['wziąć', 'взять'],
['zachować', 'сохранить'],
['zacząć', 'начать'],
['zależeć', 'зависеть'],
['zapomnieć', 'забыть'],
['zapraszać', 'приглашать'],
['zapytać', 'спросить'],
['zarabiać', 'зарабатывать'],
['zarejestrować', 'зарегистрировать'],
['żartować', 'шутить'],
['zaspać', 'проспать'],
['zastanawiać się', 'размышлять'],
['zatrzymać', 'задержать'],
['zbudować', 'построить'],
['zdążyć', 'успеть'],
['zdecydować', 'решить'],
['zdobyć', 'получить'],
['zepsuć się', 'испортиться'],
['zgubić', 'потерять'],
['złamać', 'сломать'],
['zmienić', 'изменить'],
['znać', 'знать'],
['znaleźć', 'найти'],
['zobaczyć', 'увидеть'],
['zostać', 'остаться'],
['zostawić', 'оставить'],
['zrobić', 'сделать'],
['zrozumieć', 'понять'],
['życzyć', 'желать'],
['agresywny', 'агрессивный'],
['aktualny', 'актуальный'],
['aktywny', 'активный'],
['ambitny', 'амбициозный'],
['apodyktyczny', 'авторитарный'],
['arogancki', 'высокомерный'],
['atrakcyjny', 'привлекательный'],
['biedny', 'бедный'],
['bogaty', 'богатый'],
['brudny', 'грязный'],
['brzydki', 'некрасивый'],
['cały', 'целый'],
['chłodny', 'холодный'],
['chory', 'больной'],
['chudy', 'худой'],
['ciekawy', 'интересный'],
['ciemny', 'темный'],
['ciepły', 'теплый'],
['cudny', 'прекрасный'],
['częsty', 'частый'],
['czysty', 'чистый'],
['daleki', 'дальний'],
['delikatny', 'нежный'],
['długi', 'длинный'],
['dobry', 'хороший'],
['dojrzały', 'спелый'],
['drogi', 'дорогой'],
['duszony', 'тушеный'],
['duży', 'большой'],
['dynamiczny', 'динамический'],
['efektywny', 'эффективный'],
['energiczny', 'энергичный'],
['fajny', 'классный'],
['gadatliwy', 'болтливый'],
['gibki', 'гибкий'],
['głęboki', 'глубокий'],
['głodny', 'голодный'],
['głupi', 'глупый'],
['godny', 'достойный'],
['godny zaufania', 'достойный доверия'],
['gorący', 'горячий'],
['gorzki', 'горький'],
['gotowy', 'готовый'],
['gruby', 'полный'],
['grzeczny', 'вежливый'],
['handlowy', 'торговый'],
['harmonijny', 'гармоничный'],
['hojny', 'щедрый'],
['idealny', 'идеальный'],
['impulsywny', 'импульсивный'],
['inny', 'другой'],
['inteligentny', 'умный'],
['intensywny', 'интенсивный'],
['interesujący', 'интересный'],
['jaskrawy', 'яркий'],
['jasny', 'ясный', 'светлый'],
['jednokolorowy', 'одноцветный'],
['kapryśny', 'капризный'],
['kolejny', 'очередной'],
['kolorowy', 'цветной'],
['konkretny', 'конкретный'],
['kreatywny', 'креативный'],
['krótki', 'короткий'],
['kulturalny', 'культурный'],
['kwaśny', 'кислый'],
['ładny', 'красивый'],
['łagodny', 'нежный'],
['lekki', 'легкий'],
['lękliwy', 'пугливый'],
['leniwy', 'ленивый'],
['lepszy', 'лучший'],
['mały', 'маленький'],
['martwy', 'мертвый'],
['męski', 'мужской'],
['miękki', 'мягкий'],
['miły', 'милый'],
['młody', 'молодой'],
['mocny', 'крепкий'],
['modny', 'модный'],
['najlepszy', 'лучший'],
['następny', 'следующий'],
['naturalny', 'натуральный'],
['nerwowy', 'нервный'],
['niecierpliwy', 'нетерпеливый'],
['niedrogi', 'недорогой'],
['nieoficjalny', 'неофициальный'],
['niesamowity', 'удивительный'],
['niezależny', 'независимый'],
['niezdecydowany', 'нерешительный'],
['niski', 'низкий'],
['normalny', 'нормальный'],
['nowy', 'новый'],
['obcy', 'чужой'],
['odpowiedzialny', 'ответственный'],
['odważny', 'отважный'],
['oficjalny', 'официальный'],
['okrągły', 'круглый'],
['okropny', 'ужасный'],
['optymistyczny', 'оптимистический'],
['oryginalny', 'оригинальный'],
['ostatni', 'последний'],
['ostry', 'острый'],
['otwarty', 'открытый'],
['owalny', 'овальный'],
['pewny', 'уверен'],
['pewny siebie', 'уверен в себе'],
['piękny', 'красивый'],
['podłużny', 'продолговатый'],
['popularny', 'популярный'],
['pracowity', 'трудолюбивый'],
['prawdziwy', 'истинный'],
['prosty', 'простой'],
['przyjacielski', 'дружелюбный'],
['przyjazny', 'доброжелательный'],
['przyjemny', 'приятный'],
['przystojny', 'красивый'],
['punktualny', 'пунктуальный'],
['pyszny', 'вкусный'],
['racjonalny', 'рациональный'],
['radosny', 'радостный'],
['regionalny', 'региональный'],
['romantyczny', 'романтический'],
['roztrzepany', 'легкомысленный'],
['rozwiedziony', 'разведенный'],
['samodzielny', 'самодостаточный', 'независимый'],
['samolubny', 'самолюбивый'],
['sfrustrowany', 'разочарованный'],
['silny', 'сильный'],
['skomplikowany', 'сложный', 'тяжелый'],
['skromny', 'скромный'],
['skryty', 'скрытный'],
['słodki', 'сладкий'],
['słony', 'соленый'],
['słuszny', 'прав', 'подходящий'],
['smaczny', 'вкусный'],
['smażony', 'жареный'],
['smutny', 'печальный'],
['specjalny', 'специальный'],
['spokojny', 'спокойный'],
['spontaniczny', 'спонтанный'],
['sprytny', 'умный'],
['stary', 'старый'],
['surowy', 'сырой'],
['suszony', 'сушеный'],
['sympatyczny', 'симпатичный'],
['systematyczny', 'систематический'],
['szczęśliwy', 'счастливый'],
['szczupły', 'щуплый'],
['szeroki', 'широкий'],
['szybki', 'быстрый'],
['średni', 'средний'],
['świetny', 'отличный'],
['świeży', 'свежий'],
['taktowny', 'тактичный'],
['tani', 'дешевый'],
['tłusty', 'толстый'],
['towarzyski', 'товарищеский'],
['tradycyjny', 'традиционный'],
['troskliwy', 'заботливый'],
['trudny', 'сложный'],
['twardy', 'твердый'],
['ufny', 'уверенный'],
['ulgowy', 'со скидкой', 'льготный'],
['ulubiony', 'любимый'],
['utalentowany', 'талантливый'],
['uważny', 'внимательный'],
['uwielbiany', 'обожаемый'],
['wartki', 'проворный'],
['wąski', 'узкий'],
['ważny', 'важный'],
['wędzony', 'копченый'],
['wesoły', 'веселый'],
['wolny', 'свободный'],
['wrażliwy', 'уязвимый'],
['wścibski', 'интересный'],
['wspaniały', 'замечательный'],
['wyrozumiały', 'снисходительный'],
['wyśmienity', 'шикарный'],
['wysoki', 'высокий'],
['wysportowany', 'спортивный'],
['zabawny', 'забавный'],
['zadowolony', 'довольный'],
['zajęty', 'занятой'],
['zamknięty', 'замкнутый'],
['zarozumiały', 'самоуверенный'],
['zaspany', 'сонный'],
['zdecydowany', 'решительный'],
['zdrowy', 'здоровый'],
['zdyscyplinowany', 'дисциплинированный'],
['zestresowany', 'в стрессе'],
['zimny', 'холодный'],
['zły', 'плохой'],
['zmęczony', 'уставший'],
['znakomity', 'замечательный'],
['znany', 'известный'],
['zorganizowany', 'организованный']



];

let counter = 1;
let counterWrong = 0;

window.onload = function stWords() {
    let blockWiev = document.querySelector('.block-display');
        blockWiev.style.display = 'block';
    
    let word = '';
    let answers = [];
    let firstAnwer = '';
    let question = '';
    let variabls = document.querySelectorAll('.word');

    var fact = facts[Math.floor(Math.random()*facts.length)];
    document.getElementById('facts').innerHTML = fact;

    document.getElementById('num-answer').innerHTML = counter;

    function randomWord() {
        word = Math.floor(Math.random() * deck.length);
        question = deck[word][0];
        document.querySelector('.out-1').innerHTML = question;
        firstAnwer = deck[word][1];
        answers.push(firstAnwer);
    }
    randomWord();
    function anothers() {

        for (let i = 0; i < 3; i++) {
            let randoms = Math.floor(Math.random() * deck.length);
            if (randoms !== word) {
                answers.push(deck[randoms][1]);
            }
            else if (randoms == word) {
                i--
            }
        }
    }
    anothers()

    function shuffle(answers) {
        let j, temp;
        for (var i = answers.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = answers[j];
            answers[j] = answers[i];
            answers[i] = temp;
        }
        return answers;
    }
    shuffle(answers);

    for (let i = 0; i < variabls.length; i++) {
        variabls[i].innerHTML = answers[i];
        variabls[i].classList.remove('green');
        variabls[i].classList.remove('red');


        variabls[i].onclick = function worked() {
            if (variabls[i].innerHTML == deck[word][1]) {
                variabls[i].classList.add('green')
                counter++;
                
                setTimeout(stWords, 1000);
            }
            else {
                variabls[i].classList.add('red')
                counterWrong++
                document.getElementById('num-error').innerHTML = counterWrong;
                console.log(counterWrong);
            }

        };

    }

}

//выводим факты для теста
import { facts } from './facts.js'

