/*
1.  Написать функцию, преобразующую число в объект.
    Передавая на вход число от 0 до 999, мы должны получить на выходе объект,
    в котором в соответствующих свойствах описаны единицы, десятки и сотни.
    Например, для числа 245 мы должны получить следующий объект:
        {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
    Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

2. Продолжить работу с интернет-магазином:
    2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
    2.2. Реализуйте такие объекты.
    2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.

3.* Подумать над глобальными сущностями.
    К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, но и для каталога.
    Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта,
    но в разных местах давал возможность вызывать разные методы.

 */


{
    console.log('---- Task 1 ----');

    function digit_to_obj(src = 0) {
        let keys = ['единицы', 'десятки', 'сотни'];
        let obj = {}
        // Проверим что число в заданном диапазоне.
        if (0 > src || src > 999) {
            console.log('Число за пределами границ. Нужно чтобы число было в диапазоне от 0 до 999');
            return obj;
        } else {
            src = (src + '') || '0';
            let div = src.split('');
            for (let i = keys.length, ln = div.length; i--;) {
                obj[keys[i]] = (+div[ln - 1 - i]) || 0;
            }
        }
        return obj;
    }

    // Тестируем.
    console.log(digit_to_obj(155))
    console.log(digit_to_obj(1011))
    console.log(digit_to_obj(-1))
    console.log(digit_to_obj(0))
    console.log(digit_to_obj(999))

}

{
    console.log('---- Task 2 ----');
    const basket = {
        sum: 0, //Общая сумма
        dsum: 0, //Общая сумма со скидкой.
        goods: {}, // Массив товаров
        sumBasket: function () {
            let sum = 0;
            let dsum = 0;
            for (var key in this.goods) {
                const elem = this.goods[key]; // получить товар по ключу
                sum += elem.count * elem.price;
                dsum += elem.count * (elem.price - elem.discount)
            }
            this.sum = sum;
            this.dsum = dsum
            return sum, dsum;
        }
    };

    const Пряники = {
        price: 320,
        count: 2,
        discount: 10
    };

    const Печеньки = {
        price: 840,
        count: 1,
        discount: 10
    };

    const Вареники = {
        price: 550,
        count: 3,
        discount: 10
    };

    basket.goods = { Пряники, Печеньки, Вареники };
    basket.sumBasket();
    console.log(basket.sum, basket.dsum);
};

{
    console.log('---- Task 3 ----');
    console.log('Для отказа от дублирования кода - можно разместить объект Ware в сценарии, и обращаться' +
        'к нему из различных скриптов. Модификация объекта в скрипте - позволит использовать сущности ' +
        'в любых других местах.')
}