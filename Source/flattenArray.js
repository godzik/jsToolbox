/*-------------------------------------------------------------------- 
Функция flatten(arr), принимает аргументом массив. Элементами массива могут быть как простые типы данных (числа, строки),
так и массивы. Функция должна вернуть массив, состоящий из всех элементов вложенных массивов.
Глубина вложенности массивов может быть любая.
--------------------------------------------------------------------*/

(function () {
    'use strict';

    function flatten(array) {
        var result = [];
        var isArray;
        array.forEach(function (item) {
            isArray = Array.isArray(item) ? flatten(item) : [item];
            Array.prototype.push.apply(
            result, isArray);
        });
        return result;
    }
    flatten([1, 2, 3, [1, 2, 3]]);
    
}());

// with concat

(function () {
    'use strict';

    var utils = {
        isArray: function (obj) {
            return Object.prototype.toString.call(obj) === '[object Array]';
        }
    };

    function flatten(array) {
        while (array.some(utils.isArray)) {
            array = Array.prototype.concat.apply([], array);
        }
        return array;
    }
    flatten([1, 2, 3, [1, 2, 3]]);
    
}());