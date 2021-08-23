/*
1. Почему код дает именно такие результаты?

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
d = b++; alert(d);           // 1
c = (2+ ++a); alert(c);      // 5
d = (2+ b++); alert(d);      // 4
alert(a);                    // 3
alert(b);                    // 3

2. Чему будет равен x?
    var a = 2;
    var x = 1 + (a *= 2);

3. Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения.
    Затем написать скрипт, который работает по следующему принципу:
        если a и b положительные, вывести их разность;
        если а и b отрицательные, вывести их произведение;
        если а и b разных знаков, вывести их сумму;
        Ноль можно считать положительным числом.

4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
5. Реализовать четыре основные арифметические операции в виде функций с двумя параметрами.
    Обязательно использовать оператор return.

6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
    где arg1, arg2 — значения аргументов,
    operation — строка с названием операции.
    В зависимости от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 5)
    и вернуть полученное значение (применить switch).

7. * Сравнить null и 0. Объяснить результат.
8. * С помощью рекурсии организовать функцию возведения числа в степень.
    Формат: function power(val, pow), где val — заданное число, pow –— степень.

 */

{
    console.log('---- Task 1 ----');
    let a = 1, b = 1, c, d;
    c = ++a;
    console.log(c, ': Здесь будет 2 так как ++a от 1 - инкрементирует значение а, в C мы присваиваем это значение.');
    d = b++;
    console.log(d, ': Постфиксная форма инкрементирует после присвоения. Поэтому тут D присваивается b.');
    c = (2 + ++a);
    console.log(c, ': Тут A у нас уже имеет значение 2, то есть выполняется 2 + 2 +1 = 5');
    d = (2 + b++);
    console.log(d, ': Тут B у нас уже имеет значение 2, то есть выполняется 2 + 2 = 4 (постфикс)');
}

{
    console.log('---- Task 2 ----');
    let a = 2;
    let x = 1 + (a *= 2); // 1 + (2 * 2) = 5
    console.log('Результат вычисления равен: ', x);
}

{
    console.log('---- Task 3 ----');
    let result;
    let a = 11;
    let b = -11;
    if
    (a >= 0 && b >= 0) {
        result = a - b
    } else if
    (a < 0 && b < 0) {
        result = a * b
    } else {
        result = a + b
    }
    console.log(result);
}

{
    console.log('---- Task 4 ----');

    let func = function (input = 0) {
        switch (input) {
            case 0:
                return '0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15';
            case 1:
                return '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15';
            case 2:
                return '2,3,4,5,6,7,8,9,10,11,12,13,14,15';
            case 3:
                return '3,4,5,6,7,8,9,10,11,12,13,14,15';
            case 4:
                return '4,5,6,7,8,9,10,11,12,13,14,15';
            case 5:
                return '5,6,7,8,9,10,11,12,13,14,15';
            case 6:
                return '6,7,8,9,10,11,12,13,14,15';
            case 7:
                return '7,8,9,10,11,12,13,14,15';
            case 8:
                return '8,9,10,11,12,13,14,15';
            case 9:
                return '9,10,11,12,13,14,15';
            case 10:
                return '10,11,12,13,14,15';
            case 11:
                return '11,12,13,14,15';
            case 12:
                return '12,13,14,15';
            case 13:
                return '13,14,15';
            case 14:
                return '14,15';
            case 15:
                return '15';
            default:
                return 'Число за пределами интервала.'
        }
    }

    let a = 1;
    console.log(func(a))
}

console.log('---- Task 5 ----');

function v_add(val1 = 0, val2 = 0) {
    return val1 + val2
}

function v_sub(val1 = 0, val2 = 0) {
    return val1 - val2
}

function v_div(val1 = 0, val2 = 0) {
    return val1 / val2
}

function v_mul(val1 = 0, val2 = 0) {
    return val1 * val2
}

{
    console.log('---- Task 6 ----');
    let mathOperation = function (arg1 = 0, arg2 = 0, operation = '+') {
        switch (operation) {
            case '+':
                return v_add(arg1, arg2);
            case '-':
                return v_sub(arg1, arg2);
            case '/':
                if (arg2 === 0)
                    return NaN
                else return v_div(arg1, arg2);
            case '*':
                return v_mul(arg1, arg2);
            default:
                return NaN
        }
    }

    console.log(mathOperation(10, 2, '+'));
    console.log(mathOperation(10, 2, '-'));
    console.log(mathOperation(10, 2, '*'));
    console.log(mathOperation(10, 2, '/'));
    console.log(mathOperation(10, 0, '/'));

}


{
    console.log('---- Task 5, 6 (alternative) ----');
    // Сделаем сразу одну общую функцию, и не будем плодить код.
    let func = function (op1 = 0, op2 = 0, operation = '+') {
        switch (operation) {
            case '+':
                return op1 + op2;
            case '-':
                return op1 - op2;
            case '/': {
                if (op2 === 0) return NaN
                else return op1 / op2
            }

            case '*':
                return op1 * op2;
            default:
                return NaN;
        }
    }
    // И сразу пройдемся по всем сценариям.
    console.log(func(10, 2, '+'));
    console.log(func(10, 2, '-'));
    console.log(func(10, 2, '*'));
    console.log(func(10, 2, '/'));
    console.log(func(10, 0, '/'));
}

{
    console.log('---- Task 7 ----');
    let x = 0;
    let y = null;
    // Сравним:
    console.log(x == y);
    console.log(x === y);
    console.log('0 и NULL это принципиально разные значения. NULL - обозначает отсуствие значения, а 0 - это значение.');
}

{
    console.log('---- Task 8 ----');
    let power = function (val = 1, pow = 1, numb = 1) {
        return pow > 1 ? power(val, pow - 1, val * numb) : numb
    }

    console.log(power(2, 2))
}