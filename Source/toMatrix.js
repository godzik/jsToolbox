/*-------------------------------------------------------------------- 
Функцию toMatrix(data, rowSize), принимает аргументом массив и число, возвращает новый массив.
Число показывает количество элементов в подмассивах, элементы подмассивов беруться из массива data.
Оригинальный массив не должен быть изменен.
--------------------------------------------------------------------*/

(function () {
    'use strict';

    function toMatrix(data, rowSize) {
        var matrix = [];
        for (var i = 0; i < data.length; i += rowSize) {
            matrix.push(data.slice(i, i + rowSize));
        }
        return matrix;
    }
    toMatrix([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
    
}());