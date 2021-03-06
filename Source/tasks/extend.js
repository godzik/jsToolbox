/*-------------------------------------------------------------------- 
Функция extend(obj1, obj2), копирует свойства из объекта obj2 в объект obj1. Функция должна возвращает obj1.
Значения одинаковых ключей перетирают оригинальные.
--------------------------------------------------------------------*/

(function () {
    'use strict';

    var obj1 = {
        foo: 'bar',
        baz: 1
    };
    var obj2 = {
        foo: true,
        zoop: 0
    };

    function extend(a, b) {
        for (var key in obj2) {
            obj1[key] = obj2[key];
        }
        return obj1;
    }
    extend(obj1, obj2);

}());