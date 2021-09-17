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
        let keys = 'единицы десятки сотни'.split(' ');
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
    // Будем хранить все в объекте "Товар".
    // при желании данный объект можно расширить как угодно в дальнейшем.
    function Ware(ware_name = 'Name', price = 1, quantity = 1, discount = 0) {
        this.ware_name = ware_name;
        this.price = price;
        this.quantity = quantity;
        this.discount = discount;

        this.finalPrice = function () {
            if (this.discount !== 0) {
                return this.price - this.price * this.discount / 100;
            } else {
                return this.price;
            }
        };

        this.showOrder = function () {
            return `${this.ware_name} (количество: ${this.quantity})`;
        };
    }

    let order = []
    order.push(new Ware('Пряники', 100, 2, 12));
    order.push(new Ware('Вареники', 124, 3, 0));
    order.push(new Ware('Пельмешки', 99.1, 2, 15));

    // Функция подсчета корзины - для пример в двух вариантах расчета.
    function getCart(order = []) {
        let totPrice = 0;
        let disPrice = 0;
        for (let el in order) {
            totPrice = totPrice + order[el]['price'] * order[el]['quantity'];
            disPrice = disPrice + order[el]['price'] * order[el]['quantity'] - order[el]['discount'] * order[el]['quantity'];
        }
        console.log('Заказ: ');
        console.log('Всего наименований: ', order.length);
        console.log('Сумма без скидки: ', totPrice);
        console.log('Сумма со скидкой: ', disPrice);
    }

    getCart(order);
}

{
    console.log('---- Task 3 ----');
    console.log('Для отказа от дублирования кода - можно разместить объект Ware в сценарии, и обращаться' +
        'к нему из различных скриптов. Модификация объекта в скрипте - позволит использовать сущности ' +
        'в любых других местах.')
}