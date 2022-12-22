import { useState } from "react";
import { SimpleSelect } from "react-selectize";
import "react-selectize/themes/index.css";

const SearchForm = ({ locationSubmit }) => {
    
    const today = new Date().toISOString().slice(0, 10);
    function formatDate(date) {
        return [
            padTo2Digits(date.getDate()),
            padTo2Digits(date.getMonth() + 1),
            date.getFullYear(),
        ].join('.');
    }
    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }

    const [type, setType] = useState('text')
    const focusDate = () => {
        setType(type => type = "date")
    }
    const [date, setDate] = useState(today)
    const [location, setLocation] = useState("Москва")
    const [countOfDays, setCountOfDays] = useState(1)

    const onHandleSubmit = (event) => {
        event.preventDefault();
        locationSubmit(location, date, countOfDays)
    };
    return (
        <form className="search_form" onSubmit={onHandleSubmit}>
            <p>Локация</p>
            <SimpleSelect placeholder={location} onValueChange={value => setLocation(value.label)} >
                <option >Москва</option>
                <option >Санкт-Петербург</option>
                <option >Абаза</option>
                <option >Абакан</option>
                <option >Абдулино</option>
                <option >Абинск</option>
                <option >Агидель</option>
                <option >Агрыз</option>
                <option >Адыгейск</option>
                <option >Азнакаево</option>
                <option >Азов</option>
                <option >Ак-Довурак</option>
                <option >Аксай</option>
                <option >Алагир</option>
                <option >Алапаевск</option>
                <option >Алатырь</option>
                <option >Алдан</option>
                <option >Алейск</option>
                <option>Александров</option>
                <option >Александровск</option>
                <option >Александровск-Сахалинский</option>
                <option >Алексеевка</option>
                <option >Алексин</option>
                <option >Алзамай</option>
                <option v>Алупка</option>
                <option v>Алушта</option>
                <option >Альметьевск</option>
                <option >Амурск</option>
                <option >Анадырь</option>
                <option >Анапа</option>
                <option>Ангарск</option>
                <option >Андреаполь</option>
                <option >Анжеро-Судженск</option>
                <option >Анива</option>
                <option >Апатиты</option>
                <option >Апрелевка</option>
                <option >Апшеронск</option>
                <option >Арамиль</option>
                <option >Аргун</option>
                <option >Ардатов</option>
                <option >Ардон</option>
                <option >Арзамас</option>
                <option >Аркадак</option>
                <option>Армавир</option>
                <option >Армянск</option>
                <option >Арсеньев</option>
                <option >Арск</option>
                <option >Артём</option>
                <option >Артёмовск</option>
                <option >Артёмовский</option>
                <option>Архангельск</option>
                <option >Асбест</option>
                <option >Асино</option>
                <option>Астрахань</option>
                <option >Аткарск</option>
                <option>Ахтубинск</option>
                <option >Ачинск</option>
                <option >Аша</option>
                <option >Бабаево</option>
                <option >Бабушкин</option>
                <option >Бавлы</option>
                <option >Багратионовск</option>
                <option >Байкальск</option>
                <option >Баймак</option>
                <option >Бакал</option>
                <option >Баксан</option>
                <option >Балабаново</option>
                <option >Балаково</option>
                <option >Балахна</option>
                <option >Балашиха</option>
                <option >Балашов</option>
                <option >Балей</option>
                <option >Балтийск</option>
                <option >Барабинск</option>
                <optio>Барнаул</optio>
                <option >Барыш</option>
                <option >Батайск</option>
                <option >Бахчисарай</option>
                <option >Бежецк</option>
                <option >Белая Калитва</option>
                <option >Белая Холуница</option>
                <option>Белгород</option>
                <option >Белебей</option>
                <option >Белёв</option>
                <option >Белинский</option>
                <option >Белово</option>
                <optio>Белогорск (Амурская область)</optio>
                <option >Белогорск (Крым)</option>
                <option >Белозерск</option>
                <option >Белокуриха</option>
                <option >Беломорск</option>
                <option>Белорецк</option>
                <option >Белореченск</option>
                <option >Белоусово</option>
                <option >Белоярский</option>
                <option >Белый</option>
                <option >Бердск</option>
                <option >Березники</option>
                <option >Березовский (Кемеровская область)</option>
                <option >Березовский (Свердловская область)</option>
                <option >Беслан</option>
                <optio>Бийск</optio>
                <option >Бикин</option>
                <option >Билибино</option>
                <option>Биробиджан</option>
                <option >Бирск</option>
                <option >Бирюсинск</option>
                <option >Бирюч</option>
                <optio>Благовещенск (Амурская область)</optio>
                <option>Благовещенск (Башкортостан)</option>
                <option >Благодарный</option>
                <option >Бобров</option>
                <option >Богданович</option>
                <option >Богородицк</option>
                <option >Богородск</option>
                <option >Боготол</option>
                <option >Богучар</option>
                <option >Бодайбо</option>
                <option >Бокситогорск</option>
                <option >Болгар</option>
                <option >Бологое</option>
                <option >Болотное</option>
                <option >Болохово</option>
                <option >Болхов</option>
                <option >Большой Камень</option>
                <option >Бор</option>
                <option >Борзя</option>
                <option>Борисоглебск</option>
                <option >Боровичи</option>
                <option >Боровск</option>
                <option >Бородино</option>
                <option>Братск</option>
                <option >Бронницы</option>
                <option>Брянск</option>
                <option >Бугульма</option>
                <option >Бугуруслан</option>
                <option >Будённовск</option>
                <option >Бузулук</option>
                <option >Буинск</option>
                <option >Буй</option>
                <option >Буйнакск</option>
                <option >Бутурлиновка</option>
                <option >Валдай</option>
                <option >Валуйки</option>
                <option >Велиж</option>
                <option >Великие Луки</option>
                <option >Великий Новгород</option>
                <option >Великий Устюг</option>
                <option >Вельск</option>
                <option >Венёв</option>
                <option >Верещагино</option>
                <option >Верея</option>
                <option >Верхнеуральск</option>
                <option >Верхний Тагил</option>
                <option >Верхний Уфалей</option>
                <option >Верхняя Пышма</option>
                <option >Верхняя Салда</option>
                <option >Верхняя Тура</option>
                <option >Верхотурье</option>
                <option >Верхоянск</option>
                <option >Весьегонск</option>
                <option >Ветлуга</option>
                <option >Видное</option>
                <option >Вилюйск</option>
                <option>Вилючинск</option>
                <option >Вихоревка</option>
                <option >Вичуга</option>
                <option >Владивосток</option>
                <option >Владикавказ</option>
                <option>Владимир</option>
                <option>Волгоград</option>
                <option >Волгодонск</option>
                <option >Волгореченск</option>
                <option >Волжск</option>
                <option>Волжский</option>
                <option>Вологда</option>
                <option >Володарск</option>
                <option >Волоколамск</option>
                <option >Волосово</option>
                <option >Волхов</option>
                <option >Волчанск</option>
                <option >Вольск</option>
                <option>Воркута</option>
                <option>Воронеж</option>
                <option >Ворсма</option>
                <option >Воскресенск</option>
                <option >Воткинск</option>
                <option >Всеволожск</option>
                <option >Вуктыл</option>
                <option >Выборг</option>
                <option >Выкса</option>
                <option >Вырица</option>
                <option >Высоковск</option>
                <option >Высоцк</option>
                <option >Вытегра</option>
                <option >Вышний Волочёк</option>
                <option >Вяземский</option>
                <option >Вязники</option>
                <option >Вязьма</option>
                <option >Вятские Поляны</option>
                <option >Гаврилов Посад</option>
                <option >Гаврилов-Ям</option>
                <option >Гагарин</option>
                <option >Гаджиево</option>
                <option >Гай</option>
                <option >Галич</option>
                <option >Гатчина</option>
                <option >Гвардейск</option>
                <option >Гдов</option>
                <option >Геленджик</option>
                <option >Георгиевск</option>
                <option >Глазов</option>
                <option >Голицыно</option>
                <option >Горбатов</option>
                <optio>Горно-Алтайск</optio>
                <option >Горнозаводск</option>
                <option >Горняк</option>
                <option >Городец</option>
                <option >Городище</option>
                <option >Городовиковск</option>
                <option >Гороховец</option>
                <option >Горячий Ключ</option>
                <option >Грайворон</option>
                <option >Гремячинск</option>
                <option >Грозный</option>
                <option >Грязи</option>
                <option >Грязовец</option>
                <option >Губаха</option>
                <option>Губкин</option>
                <option >Губкинский</option>
                <option >Гудермес</option>
                <option >Гуково</option>
                <option >Гулькевичи</option>
                <option >Гурьевск (Калининградская область)</option>
                <option >Гурьевск (Кемеровская область)</option>
                <option >Гусев</option>
                <option >Гусиноозёрск</option>
                <option>Гусь-Хрустальный</option>
                <option >Давлеканово</option>
                <option >Дагестанские Огни</option>
                <option >Далматово</option>
                <option >Дальнегорск</option>
                <option >Дальнереченск</option>
                <option >Данилов</option>
                <option >Данков</option>
                <option >Дегтярск</option>
                <option >Дедовск</option>
                <option >Демидов</option>
                <option>Дербент</option>
                <option >Десногорск</option>
                <option >Джанкой</option>
                <option >Дзержинск</option>
                <option >Дзержинский</option>
                <option >Дивногорск</option>
                <option >Дигора</option>
                <option >Димитровград</option>
                <option >Дмитриев</option>
                <option >Дмитров</option>
                <option >Дмитровск</option>
                <option >Дно</option>
                <option >Добрянка</option>
                <option >Долгопрудный</option>
                <option >Долинск</option>
                <option >Домодедово</option>
                <option >Донецк</option>
                <option >Донской</option>
                <option >Дорогобуж</option>
                <option >Дрезна</option>
                <option >Дубна</option>
                <option >Дубовка</option>
                <option >Дудинка</option>
                <option >Духовщина</option>
                <option >Дюртюли</option>
                <option >Дятьково</option>
                <option >Евпатория</option>
                <option >Егорьевск</option>
                <option>Ейск</option>
                <option >Екатеринбург</option>
                <option >Елабуга</option>
                <option >Елец</option>
                <option>Елизово</option>
                <option >Ельня</option>
                <option >Еманжелинск</option>
                <option >Емва</option>
                <option >Енисейск</option>
                <option >Ермолино</option>
                <option >Ершов</option>
                <option >Ессентуки</option>
                <option >Ефремов</option>
                <option >Железноводск</option>
                <option >Железногорск (Красноярский край)</option>
                <option >Железногорск (Курская область)</option>
                <option >Железногорск-Илимский</option>
                <option >Железнодорожный (Балашиха)</option>
                <option >Жердевка</option>
                <option >Жигулёвск</option>
                <option >Жиздра</option>
                <option >Жирновск</option>
                <option >Жуков</option>
                <option >Жуковка</option>
                <option >Жуковский</option>
                <option >Завитинск</option>
                <option >Заводоуковск</option>
                <option >Заволжск</option>
                <option >Заволжье</option>
                <option >Задонск</option>
                <option >Заинск</option>
                <option >Закаменск</option>
                <option >Заозёрный</option>
                <option >Заозёрск</option>
                <option >Западная Двина</option>
                <option >Заполярный</option>
                <option >Зарайск</option>
                <option >Заречный (Пензенская область)</option>
                <option >Заречный (Свердловская область)</option>
                <optio>Заринск</optio>
                <option >Звенигово</option>
                <option >Звенигород</option>
                <option >Зверево</option>
                <option >Зеленогорск</option>
                <option >Зеленоградск</option>
                <option >Зеленодольск</option>
                <option >Зеленокумск</option>
                <option >Зерноград</option>
                <option >Зея</option>
                <option >Зима</option>
                <option >Златоуст</option>
                <option >Злынка</option>
                <option >Змеиногорск</option>
                <option>Знаменск</option>
                <option >Зубцов</option>
                <option >Зуевка</option>
                <option >Ивангород</option>
                <option>Иваново</option>
                <option >Ивантеевка</option>
                <option >Ивдель</option>
                <option >Игарка</option>
                <option >Ижевск</option>
                <option >Избербаш</option>
                <option >Изобильный</option>
                <option >Иланский</option>
                <option >Инза</option>
                <option >Инкерман</option>
                <option >Иннополис</option>
                <option >Инсар</option>
                <option >Инта</option>
                <option >Ипатово</option>
                <option >Ирбит</option>
                <option>Иркутск</option>
                <option >Исилькуль</option>
                <option >Искитим</option>
                <option >Истра</option>
                <option >Ишим</option>
                <option >Ишимбай</option>
                <option >Йошкар-Ола</option>
                <option >Кадников</option>
                <option >Казань</option>
                <option >Калач</option>
                <option>Калач-на-Дону</option>
                <option >Калачинск</option>
                <option>Калининград</option>
                <option >Калининец</option>
                <option >Калининск</option>
                <option >Калтан</option>
                <option>Калуга</option>
                <option >Калязин</option>
                <option >Камбарка</option>
                <option >Каменка</option>
                <option >Каменногорск</option>
                <option >Каменск-Уральский</option>
                <option >Каменск-Шахтинский</option>
                <option >Камень-на-Оби</option>
                <option >Камешково</option>
                <option >Камызяк</option>
                <option>Камышин</option>
                <option >Камышлов</option>
                <option >Канаш</option>
                <option >Кандалакша</option>
                <option >Канск</option>
                <option >Карабаново</option>
                <option >Карабаш</option>
                <option >Карабулак</option>
                <option >Карасук</option>
                <option >Карачаевск</option>
                <option >Карачев</option>
                <option >Каргат</option>
                <option >Каргополь</option>
                <option >Карпинск</option>
                <option >Карталы</option>
                <option >Касимов</option>
                <option >Касли</option>
                <option >Каспийск</option>
                <option >Катав-Ивановск</option>
                <option >Катайск</option>
                <option >Качканар</option>
                <option >Кашин</option>
                <option >Кашира</option>
                <option >Кедровый</option>
                <option>Кемерово</option>
                <option >Кемь</option>
                <option >Керчь</option>
                <option >Кизел</option>
                <option >Кизилюрт</option>
                <option >Кизляр</option>
                <option >Кимовск</option>
                <option >Кимры</option>
                <option >Кингисепп</option>
                <option >Кинель</option>
                <option>Кинешма</option>
                <option >Киреевск</option>
                <option >Киренск</option>
                <option>Киржач</option>
                <option >Кириллов</option>
                <option >Кириши</option>
                <option >Киров (Калужская область)</option>
                <option>Киров (Кировская область)</option>
                <option >Кировград</option>
                <option>Кирово-Чепецк</option>
                <option >Кировск (Ленинградская область)</option>
                <option >Кировск (Мурманская область)</option>
                <option >Кирс</option>
                <option >Кирсанов</option>
                <option>Киселёвск</option>
                <option >Кисловодск</option>
                <option >Климовск (Москва)</option>
                <option >Клин</option>
                <option>Клинцы</option>
                <option >Княгинино</option>
                <option >Ковдор</option>
                <option>Ковров</option>
                <option >Ковылкино</option>
                <option >Когалым</option>
                <option >Кодинск</option>
                <option >Козельск</option>
                <option >Козловка</option>
                <option >Козьмодемьянск</option>
                <option >Кола</option>
                <option >Кологрив</option>
                <option >Коломна</option>
                <option >Колпашево</option>
                <option >Кольчугино</option>
                <option >Коммунар</option>
                <option >Комсомольск</option>
                <option >Комсомольск-на-Амуре</option>
                <option >Конаково</option>
                <option>Кондопога</option>
                <option >Кондрово</option>
                <option >Константиновск</option>
                <option >Копейск</option>
                <option >Кораблино</option>
                <option >Кореновск</option>
                <option >Коркино</option>
                <option >Королёв</option>
                <option >Короча</option>
                <option >Корсаков</option>
                <option >Коряжма</option>
                <option >Костерёво</option>
                <option >Костомукша</option>
                <option>Кострома</option>
                <option >Котельники</option>
                <option >Котельниково</option>
                <option >Котельнич</option>
                <option>Котлас</option>
                <option >Котово</option>
                <option >Котовск</option>
                <option >Кохма</option>
                <option >Красавино</option>
                <option >Красково</option>
                <option >Красноармейск (Московская область)</option>
                <option >Красноармейск (Саратовская область)</option>
                <option >Красновишерск</option>
                <option >Красногорск</option>
                <option>Краснодар</option>
                <option >Краснозаводск</option>
                <option >Краснознаменск (Калининградская область)</option>
                <option >Краснознаменск (Московская область)</option>
                <option>Краснокаменск</option>
                <option >Краснокамск</option>
                <option >Красноперекопск</option>
                <option >Краснослободск (Волгоградская область)</option>
                <option >Краснослободск (Мордовия)</option>
                <option >Краснотурьинск</option>
                <option >Красноуральск</option>
                <option >Красноуфимск</option>
                <option >Красноярск</option>
                <option >Красный Кут</option>
                <option >Красный Сулин</option>
                <option >Красный Холм</option>
                <option >Кремёнки</option>
                <option>Кропоткин</option>
                <option >Крымск</option>
                <option >Кстово</option>
                <option >Кубинка</option>
                <option >Кувандык</option>
                <option >Кувшиново</option>
                <option >Кудымкар</option>
                <option >Кузнецк</option>
                <option >Куйбышев</option>
                <option >Кулебаки</option>
                <option >Кумертау</option>
                <option >Кунгур</option>
                <option >Купино</option>
                <option >Курган</option>
                <option >Курганинск</option>
                <option >Курильск</option>
                <option >Курлово</option>
                <option >Куровское</option>
                <option >Курск</option>
                <option >Куртамыш</option>
                <option >Курчатов</option>
                <option >Куса</option>
                <option >Кушва</option>
                <option >Кызыл</option>
                <option >Кыштым</option>
                <option >Кяхта</option>
                <option >Лабинск</option>
                <option >Лабытнанги</option>
                <option >Лагань</option>
                <option >Ладушкин</option>
                <option >Лаишево</option>
                <option >Лакинск</option>
                <option >Лангепас</option>
                <option >Лахденпохья</option>
                <option >Лебедянь</option>
                <option >Лениногорск</option>
                <option >Ленинск</option>
                <option>Ленинск-Кузнецкий</option>
                <option >Ленск</option>
                <option >Лермонтов</option>
                <option >Лесной</option>
                <option >Лесозаводск</option>
                <option >Лесосибирск</option>
                <option >Ливны</option>
                <option >Ликино-Дулёво</option>
                <option >Липецк</option>
                <option >Липки</option>
                <option>Лиски</option>
                <option >Лихославль</option>
                <option >Лобня</option>
                <option >Лодейное Поле</option>
                <option >Лосино-Петровский</option>
                <option >Луга</option>
                <option >Луза</option>
                <option >Лукоянов</option>
                <option >Луховицы</option>
                <option >Лысково</option>
                <option >Лысьва</option>
                <option >Лыткарино</option>
                <option >Льгов</option>
                <option >Любань</option>
                <option >Люберцы</option>
                <option >Любим</option>
                <option >Людиново</option>
                <option >Лянтор</option>
                <option >Магадан</option>
                <option >Магас</option>
                <option >Магнитогорск</option>
                <optio>Майкоп</optio>
                <option >Майский</option>
                <option >Макаров</option>
                <option >Макарьев</option>
                <option >Макушино</option>
                <option >Малая Вишера</option>
                <option >Малгобек</option>
                <option >Малмыж</option>
                <option >Малоархангельск</option>
                <option >Малоярославец</option>
                <option >Мамадыш</option>
                <option >Мамоново</option>
                <option >Мантурово</option>
                <option >Мариинск</option>
                <option >Мариинский Посад</option>
                <option >Маркс</option>
                <option>Махачкала</option>
                <option >Мглин</option>
                <option >Мегион</option>
                <option >Медвежьегорск</option>
                <option >Медногорск</option>
                <option >Медынь</option>
                <option >Межгорье</option>
                <option>Междуреченск</option>
                <option >Мезень</option>
                <option >Меленки</option>
                <option >Мелеуз</option>
                <option >Менделеевск</option>
                <option >Мензелинск</option>
                <option >Мещовск</option>
                <option >Миасс</option>
                <option >Микунь</option>
                <option >Миллерово</option>
                <option >Минеральные Воды</option>
                <option >Минусинск</option>
                <option >Миньяр</option>
                <option >Мирный</option>
                <option >Мирный (Архангельская область)</option>
                <option >Михайлов</option>
                <option >Михайловка</option>
                <option >Михайловск (Свердловская область)</option>
                <option >Михайловск (Ставропольский край)</option>
                <option >Мичуринск</option>
                <option >Могоча</option>
                <option >Можайск</option>
                <option >Можга</option>
                <option >Моздок</option>
                <option >Мончегорск</option>
                <option >Морозовск</option>
                <option >Моршанск</option>
                <option >Мосальск</option>
                <option >Муравленко</option>
                <option >Мураши</option>
                <option >Мурманск</option>
                <option>Муром</option>
                <option >Мценск</option>
                <option >Мыски</option>
                <option >Мытищи</option>
                <option >Мышкин</option>
                <option >Набережные Челны</option>
                <option >Навашино</option>
                <option >Наволоки</option>
                <option >Надым</option>
                <option >Назарово</option>
                <option>Назрань</option>
                <option >Называевск</option>
                <option>Нальчик</option>
                <option >Нариманов</option>
                <option >Наро-Фоминск</option>
                <option >Нарткала</option>
                <option >Нарьян-Мар</option>
                <option >Нахабино</option>
                <option >Находка</option>
                <option >Невель</option>
                <option >Невельск</option>
                <option >Невинномысск</option>
                <option >Невьянск</option>
                <option >Нелидово</option>
                <option >Неман</option>
                <option >Нерехта</option>
                <option >Нерчинск</option>
                <option >Нерюнгри</option>
                <option >Нестеров</option>
                <option >Нефтегорск</option>
                <option>Нефтекамск</option>
                <option >Нефтекумск</option>
                <option >Нефтеюганск</option>
                <option >Нея</option>
                <option >Нижневартовск</option>
                <option >Нижнекамск</option>
                <option >Нижнеудинск</option>
                <option >Нижние Серги</option>
                <option >Нижний Ломов</option>
                <option >Нижний Новгород</option>
                <option >Нижний Тагил</option>
                <option >Нижняя Салда</option>
                <option >Нижняя Тура</option>
                <option >Николаевск</option>
                <option >Николаевск-на-Амуре</option>
                <option >Никольск (Вологодская область)</option>
                <option >Никольск (Пензенская область)</option>
                <option >Никольское</option>
                <option >Новая Ладога</option>
                <option >Новая Ляля</option>
                <option >Новоалександровск</option>
                <optio>Новоалтайск</optio>
                <option >Новоаннинский</option>
                <option >Нововоронеж</option>
                <option >Новодвинск</option>
                <option >Новозыбков</option>
                <option >Новокубанск</option>
                <option>Новокузнецк</option>
                <option >Новокуйбышевск</option>
                <option >Новомичуринск</option>
                <option >Новомосковск</option>
                <option >Новопавловск</option>
                <option >Новоржев</option>
                <option>Новороссийск</option>
                <option >Новосибирск</option>
                <option >Новосиль</option>
                <option >Новосокольники</option>
                <option >Новотроицк</option>
                <option >Новоузенск</option>
                <option >Новоульяновск</option>
                <option >Новоуральск</option>
                <option >Новохопёрск</option>
                <option >Новочебоксарск</option>
                <option >Новочеркасск</option>
                <option >Новошахтинск</option>
                <option>Новый Оскол</option>
                <option >Новый Уренгой</option>
                <option >Ногинск</option>
                <option >Нолинск</option>
                <option >Норильск</option>
                <option >Ноябрьск</option>
                <option >Нурлат</option>
                <option >Нытва</option>
                <option >Нюрба</option>
                <option >Нягань</option>
                <option >Нязепетровск</option>
                <option >Няндома</option>
                <option >Облучье</option>
                <option>Обнинск</option>
                <option >Обоянь</option>
                <option >Обь</option>
                <option >Одинцово</option>
                <option >Ожерелье</option>
                <option >Озёрск</option>
                <option >Озерск (Калининградская область)</option>
                <option >Озёры</option>
                <option >Октябрьск</option>
                <option>Октябрьский</option>
                <option >Окуловка</option>
                <option >Олёкминск</option>
                <option >Оленегорск</option>
                <option >Олонец</option>
                <option >Омск</option>
                <option >Омутнинск</option>
                <option >Онега</option>
                <option >Опочка</option>
                <option >Орёл</option>
                <option >Оренбург</option>
                <option >Орехово-Зуево</option>
                <option >Орлов</option>
                <option >Орск</option>
                <option >Оса</option>
                <option >Осинники</option>
                <option >Осташков</option>
                <option >Остров</option>
                <option >Островной</option>
                <option >Острогожск</option>
                <option >Отрадное</option>
                <option >Отрадный</option>
                <option >Оха</option>
                <option >Оханск</option>
                <option >Очёр</option>
                <option >Павлово</option>
                <option>Павловск</option>
                <option >Павловский Посад</option>
                <option >Палласовка</option>
                <option >Партизанск</option>
                <option >Певек</option>
                <option >Пенза</option>
                <option >Первомайск</option>
                <option >Первоуральск</option>
                <option >Перевоз</option>
                <option >Пересвет</option>
                <option >Переславль-Залесский</option>
                <option >Пермь</option>
                <option >Пестово</option>
                <option >Петров Вал</option>
                <option >Петровск</option>
                <option >Петровск-Забайкальский</option>
                <option>Петрозаводск</option>
                <option>Петропавловск-Камчатский</option>
                <option >Петухово</option>
                <option >Петушки</option>
                <option>Печора</option>
                <option >Печоры</option>
                <option >Пикалёво</option>
                <option >Пионерский</option>
                <option >Питкяранта</option>
                <option >Плавск</option>
                <option >Пласт</option>
                <option >Плёс</option>
                <option >Поворино</option>
                <option >Подольск</option>
                <option >Подпорожье</option>
                <option >Покачи</option>
                <option >Покров</option>
                <option >Покровск</option>
                <option >Полевской</option>
                <option >Полесск</option>
                <option >Полысаево</option>
                <option >Полярные Зори</option>
                <option >Полярный</option>
                <option >Поронайск</option>
                <option >Порхов</option>
                <option >Поселок им. Морозова</option>
                <option >Похвистнево</option>
                <option >Почеп</option>
                <option >Починок</option>
                <option >Пошехонье</option>
                <option >Правдинск</option>
                <option >Приволжск</option>
                <option >Приморск (Калининградская область)</option>
                <option >Приморск (Ленинградская область)</option>
                <option >Приморско-Ахтарск</option>
                <option >Приозерск</option>
                <option>Прокопьевск</option>
                <option >Пролетарск</option>
                <option >Протвино</option>
                <option>Прохладный</option>
                <option >Псков</option>
                <option >Пугачёв</option>
                <option >Пудож</option>
                <option >Пустошка</option>
                <option >Пучеж</option>
                <option >Пушкино</option>
                <option >Пущино</option>
                <option >Пыталово</option>
                <option >Пыть-Ях</option>
                <option >Пятигорск</option>
                <option >Радужный (Владимирская область)</option>
                <option >Радужный (Ханты-Мансийский АО - Югра)</option>
                <option >Райчихинск</option>
                <option >Раменское</option>
                <option >Рассказово</option>
                <option >Ревда</option>
                <option >Реж</option>
                <option >Реутов</option>
                <option >Ржев</option>
                <option >Родники</option>
                <option >Рославль</option>
                <option>Россошь</option>
                <option >Ростов</option>
                <option >Ростов-на-Дону</option>
                <option >Рошаль</option>
                <option >Ртищево</option>
                <optio>Рубцовск</optio>
                <option >Рудня</option>
                <option >Руза</option>
                <option >Рузаевка</option>
                <option >Рыбинск</option>
                <option >Рыбное</option>
                <option >Рыльск</option>
                <option >Ряжск</option>
                <option >Рязань</option>
                <option >Саки</option>
                <option>Салават</option>
                <option >Салаир</option>
                <option >Салехард</option>
                <option >Сальск</option>
                <option >Самара</option>
                <option >Саранск</option>
                <option >Сарапул</option>
                <option >Саратов</option>
                <option >Саров</option>
                <option >Сасово</option>
                <option >Сатка</option>
                <option >Сафоново</option>
                <option >Саяногорск</option>
                <option >Саянск</option>
                <option >Светлогорск</option>
                <option >Светлоград</option>
                <option >Светлый</option>
                <option >Светогорск</option>
                <option >Свирск</option>
                <option>Свободный</option>
                <option >Себеж</option>
                <option >Севастополь</option>
                <option >Северо-Курильск</option>
                <option>Северобайкальск</option>
                <option>Северодвинск</option>
                <option >Североморск</option>
                <option >Североуральск</option>
                <option >Северск</option>
                <option >Севск</option>
                <option >Сегежа</option>
                <option >Сельцо</option>
                <option >Семёнов</option>
                <option >Семикаракорск</option>
                <option >Семилуки</option>
                <option >Сенгилей</option>
                <option >Серафимович</option>
                <option >Сергач</option>
                <option >Сергиев Посад</option>
                <option >Сердобск</option>
                <option >Серов</option>
                <option >Серпухов</option>
                <option >Сертолово</option>
                <option >Сибай</option>
                <option >Сиверский</option>
                <option >Сим</option>
                <option >Симферополь</option>
                <option >Сковородино</option>
                <option >Скопин</option>
                <option >Славгород</option>
                <option >Славск</option>
                <option >Славянск-на-Кубани</option>
                <option >Сланцы</option>
                <option >Слободской</option>
                <option >Слюдянка</option>
                <option >Смоленск</option>
                <option >Снежинск</option>
                <option >Снежногорск</option>
                <option >Собинка</option>
                <option>Советск (Калининградская область)</option>
                <option >Советск (Кировская область)</option>
                <option >Советск (Тульская область)</option>
                <option >Советская Гавань</option>
                <option >Советский</option>
                <option>Сокол</option>
                <option >Солигалич</option>
                <option >Соликамск</option>
                <option >Солнечногорск</option>
                <option >Соль-Илецк</option>
                <option >Сольвычегодск</option>
                <option >Сольцы</option>
                <option >Сорочинск</option>
                <option >Сорск</option>
                <option >Сортавала</option>
                <option >Сосенский</option>
                <option >Сосновка</option>
                <option >Сосновоборск</option>
                <option >Сосновый Бор</option>
                <option >Сосногорск</option>
                <option>Сочи</option>
                <option >Спас-Деменск</option>
                <option >Спас-Клепики</option>
                <option >Спасск</option>
                <option >Спасск-Дальний</option>
                <option >Спасск-Рязанский</option>
                <option >Среднеколымск</option>
                <option >Среднеуральск</option>
                <option >Сретенск</option>
                <option >Ставрополь</option>
                <option >Старая Купавна</option>
                <option >Старая Русса</option>
                <option >Старица</option>
                <option >Стародуб</option>
                <option >Старый Крым</option>
                <option>Старый Оскол</option>
                <option>Стерлитамак</option>
                <option >Стрежевой</option>
                <option >Строитель</option>
                <option >Струнино</option>
                <option >Ступино</option>
                <option >Суворов</option>
                <option >Судак</option>
                <option >Суджа</option>
                <option >Судогда</option>
                <option >Суздаль</option>
                <option >Суоярви</option>
                <option >Сураж</option>
                <option >Сургут</option>
                <option >Суровикино</option>
                <option >Сурск</option>
                <option >Сусуман</option>
                <option >Сухиничи</option>
                <option >Сухой Лог</option>
                <option >Сызрань</option>
                <option>Сыктывкар</option>
                <option >Сысерть</option>
                <option >Сычёвка</option>
                <option >Сясьстрой</option>
                <option >Тавда</option>
                <option >Таганрог</option>
                <option >Тайга</option>
                <option >Тайшет</option>
                <option >Талдом</option>
                <option >Талица</option>
                <option >Тамбов</option>
                <option >Тара</option>
                <option >Тарко-Сале</option>
                <option >Таруса</option>
                <option >Татарск</option>
                <option >Таштагол</option>
                <option >Тверь</option>
                <option >Теберда</option>
                <option >Тейково</option>
                <option >Темников</option>
                <option >Темрюк</option>
                <option >Терек</option>
                <option >Тетюши</option>
                <option >Тимашевск</option>
                <option >Тихвин</option>
                <option>Тихорецк</option>
                <option >Тобольск</option>
                <option >Тогучин</option>
                <option >Тольятти</option>
                <option >Томари</option>
                <option >Томилино</option>
                <option >Томмот</option>
                <option >Томск</option>
                <option >Топки</option>
                <option >Торжок</option>
                <option >Торопец</option>
                <option >Тосно</option>
                <option >Тотьма</option>
                <option >Трёхгорный</option>
                <option >Троицк</option>
                <option >Троицк (Москва)</option>
                <option >Трубчевск</option>
                <option>Туапсе</option>
                <option >Туймазы</option>
                <option >Тула</option>
                <option >Тулун</option>
                <option >Туран</option>
                <option >Туринск</option>
                <option >Тутаев</option>
                <option >Тында</option>
                <option >Тырныауз</option>
                <option >Тюкалинск</option>
                <option >Тюмень</option>
                <option >Уварово</option>
                <option >Углегорск</option>
                <option >Углич</option>
                <option >Удачный</option>
                <option >Удомля</option>
                <option >Ужур</option>
                <option >Узловая</option>
                <option>Улан-Удэ</option>
                <option >Ульяновск</option>
                <option >Унеча</option>
                <option >Урай</option>
                <option >Урень</option>
                <option >Уржум</option>
                <option >Урус-Мартан</option>
                <option >Урюпинск</option>
                <option >Усинск</option>
                <option >Усмань</option>
                <option >Усолье</option>
                <option >Усолье-Сибирское</option>
                <option >Уссурийск</option>
                <option >Усть-Джегута</option>
                <option>Усть-Илимск</option>
                <option >Усть-Катав</option>
                <option >Усть-Кут</option>
                <option >Усть-Лабинск</option>
                <option >Устюжна</option>
                <option>Уфа</option>
                <option>Ухта</option>
                <option >Учалы</option>
                <option >Уяр</option>
                <option >Фатеж</option>
                <option >Феодосия</option>
                <option >Фокино (Брянская область)</option>
                <option >Фокино (Приморский край)</option>
                <option >Фролово</option>
                <option >Фрязино</option>
                <option >Фурманов</option>
                <option >Хабаровск</option>
                <option >Хадыженск</option>
                <option >Ханты-Мансийск</option>
                <option >Харабали</option>
                <option >Харовск</option>
                <option>Хасавюрт</option>
                <option >Хвалынск</option>
                <option >Хилок</option>
                <option >Химки</option>
                <option >Холм</option>
                <option >Холмск</option>
                <option >Хотьково</option>
                <option >Цивильск</option>
                <option >Цимлянск</option>
                <option >Циолковский</option>
                <option >Чадан</option>
                <option >Чайковский</option>
                <option >Чапаевск</option>
                <option >Чаплыгин</option>
                <option >Чебаркуль</option>
                <option >Чебоксары</option>
                <option >Чегем</option>
                <option >Чекалин</option>
                <option >Челябинск</option>
                <option >Чердынь</option>
                <option >Черемхово</option>
                <option >Черепаново</option>
                <option>Череповец</option>
                <option>Черкесск</option>
                <option >Чёрмоз</option>
                <option >Черноголовка</option>
                <option >Черногорск</option>
                <option >Чернушка</option>
                <option >Черняховск</option>
                <option >Чехов</option>
                <option >Чистополь</option>
                <option>Чита</option>
                <option >Чкаловск</option>
                <option >Чудово</option>
                <option >Чулым</option>
                <option >Чусовой</option>
                <option >Чухлома</option>
                <option >Шагонар</option>
                <option >Шадринск</option>
                <option >Шали</option>
                <option >Шарыпово</option>
                <option >Шарья</option>
                <option >Шатура</option>
                <option >Шахтёрск</option>
                <option >Шахты</option>
                <option >Шахунья</option>
                <option >Шацк</option>
                <option>Шебекино</option>
                <option >Шелехов</option>
                <option >Шенкурск</option>
                <option >Шилка</option>
                <option >Шимановск</option>
                <option >Шиханы</option>
                <option >Шлиссельбург</option>
                <option >Шумерля</option>
                <option >Шумиха</option>
                <option>Шуя</option>
                <option >Щёкино</option>
                <option >Щелкино</option>
                <option >Щёлково</option>
                <option >Щербинка (Москва)</option>
                <option >Щигры</option>
                <option >Щучье</option>
                <option >Электрогорск</option>
                <option >Электросталь</option>
                <option >Электроугли</option>
                <option>Элиста</option>
                <option >Энгельс</option>
                <option >Эртиль</option>
                <option >Юбилейный (Москва)</option>
                <option >Югорск</option>
                <option >Южа</option>
                <option >Южно-Сахалинск</option>
                <option >Южно-Сухокумск</option>
                <option >Южноуральск</option>
                <option>Юрга</option>
                <option >Юрьев-Польский</option>
                <option >Юрьевец</option>
                <option >Юрюзань</option>
                <option >Юхнов</option>
                <option >Ядрин</option>
                <option >Якутск</option>
                <option >Ялта</option>
                <option >Ялуторовск</option>
                <option >Янаул</option>
                <option >Яранск</option>
                <option >Яровое</option>
                <option >Ярославль</option>
                <option >Ярцево</option>
                <option >Ясногорск</option>
                <option >Ясный</option>
                <option >Яхрома</option>
            </SimpleSelect>
            <p>Дата заселения</p>
            <input type={type} placeholder={formatDate(new Date())} name="trip-start" min={today} max="2023-01-01"
                onFocus={focusDate} onChange={ (e) => setDate(e.target.value) } />
            <p>Количество дней</p>
            <input name="trip-durations" type="number" placeholder="1" min="1" max="90" onChange={(e) => setCountOfDays(e.target.value) } />
            <button type="submit">Найти</button>
        </form>
    )
};
export default SearchForm;