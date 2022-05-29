const personGenerator = {

    surNameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Софья",
            "id_2": "Оксана",
            "id_3": "Екатерина",
            "id_4": "Татьяна",
            "id_5": "Лилия",
            "id_6": "Наталья",
            "id_7": "Надежда",
            "id_8": "Ольга",
            "id_9": "Валентина",
            "id_10": "Эвелина"
        }
    }`,

    patrNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Андреевич",
            "id_2": "Анатольевич",
            "id_3": "Сергеевич",
            "id_4": "Дмитриевич",
            "id_5": "Николаевич",
            "id_6": "Петрович",
            "id_7": "Алексеевич",
            "id_8": "Александрович",
            "id_9": "Васильевич",
            "id_10": "Владимирович"
        }
    }`,


    patrNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Юрьевна",
            "id_2": "Алексеевна",
            "id_3": "Владимировна",
            "id_4": "Дмитриевна",
            "id_5": "Федоровна",
            "id_6": "Святославовна",
            "id_7": "Сергеевна",
            "id_8": "Александровна",
            "id_9": "Васильевна",
            "id_10": "Николаевна"
        }
    }`,

    profMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Бармен",
            "id_2": "Сварщик",
            "id_3": "Строитель",
            "id_4": "Водитель",
            "id_5": "Врач",
            "id_6": "Программист",
            "id_7": "Искусствовед",
            "id_8": "Геодезист",
            "id_9": "Инженер",
            "id_10": "Филолог"
        }
    }`,


    profFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Актриса",
            "id_2": "Библиотекарь",
            "id_3": "Секретарша",
            "id_4": "Медсестра",
            "id_5": "Кондуктор",
            "id_6": "Бухгалтер",
            "id_7": "Парикмахер",
            "id_8": "Медсестра",
            "id_9": "Воспитатель",
            "id_10": "Космитолог"
        }
    }`,

    GENDER_MALE: 'мужчина',
    GENDER_FEMALE: 'женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function() {
        let gender = this.randomIntNumber();
        return gender ? this.GENDER_MALE : this.GENDER_FEMALE;   
    },

    randomFirstName: function() {
        if (this.person.gender === 'мужчина') {
            return this.randomValue(this.firstNameMaleJson);
        }
        else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

     randomSurName: function() {
        return this.randomValue(this.surNameJson);
    },

    randomPatrName: function() {
        if (this.person.gender === 'мужчина') {
            return this.randomValue(this.patrNameMaleJson);
        }
        else {
            return this.randomValue(this.patrNameFemaleJson);
        }
    },

    randomProf: function() {
        if (this.person.gender === 'мужчина') {
            return this.randomValue(this.profMaleJson);
        }
        else {
            return this.randomValue(this.profFemaleJson);
        }
    },

    randomBirthDay: function() {
        const arrayMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        let month = this.randomIntNumber(11, 0);
        month = arrayMonth[month];
        let day;
        switch (month) {
            case 2: day = this.randomIntNumber(28, 1);
            break;
            case 4 || 6 || 9 || 11: day = this.randomIntNumber(30, 1);
            break;
            default: day = this.randomIntNumber(31, 1);
            break;
        }
        let year = this.randomIntNumber(1975, 1999);
        return day + ' ' + month + ' ' + year + ' года';    
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurName();
        if (this.person.gender === 'женщина') {
            this.person.surName = this.person.surName + 'а';
        }
        this.person.patrName = this.randomPatrName();
        this.person.prof = this.randomProf();
        this.person.birthday = this.randomBirthDay();
        return this.person;
    }
};