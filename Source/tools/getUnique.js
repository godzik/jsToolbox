/*-------------------------------------------------------------------- 
Функция getUnique(arr), принимает аргументом массив или массивоподобный объект, и возвращает массив таких элементов,
которые входят в массив аргумента, и встречаются только раз в массиве результата.
Аргумент не должен изменяться. Порядок элементов результирующего массива должен совпадать с порядком,
в котором они встречаются в оригинальной структуре.
--------------------------------------------------------------------*/

(function () {
    'use strict';

    function getUnique(list) {
        var unique;
        if (list !== '[object Array]') {
            list = Array.prototype.slice.call(list);
        }
        if (list.length === 0) {
            return [];
        } else {
            unique = list.filter(function (item, i, list) {
                return list.indexOf(item) === i;
            });
        }
        return unique;
    }
    var uniqueArray = getUnique([3, 2, 1, 2, 3]);

}());