/*-------------------------------------------------------------------- 
Функция createObject(arrOfKeys, arrOfData), принимает аргументами два массива, и возвращает объект,
в котором названия ключей это строки из массива arrOfKeys, а значения - элементы из массива arrOfData.
В ключ, стоящий на первом месте массива arrOfKeys должно быть записано значение,
стоящее на первом месте arrOfData. Если данных меньше, чем ключей, заполняй значения ключей как undefined.
--------------------------------------------------------------------*/

(function () {
    'use strict';

    function createObject(arrOfKeys, arrOfData) {
        var i;
        var myObj = {};

        for (i = 0; i < arrOfKeys.length; i++) {
            myObj[arrOfKeys[i]] = arrOfData[i];
        }
        return myObj;

    }
    //createObject(['foo'], ['bar']);
    createObject(['foo', 'extra'], ['bar']);

}());

// with reduce

(function () {
    'use strict';

    function createObject(arrOfKeys, arrOfData) {
        return arrOfKeys.reduce(function (result, key, keyIndex) {
            result[key] = arrOfData[keyIndex];
            return result;
        }, {});
    }
    createObject(['foo', 'extra'], ['bar']);

}());