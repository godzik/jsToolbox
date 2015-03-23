/*-------------------------------------------------------------------- 
contains(where, what). Если все элементы массива what содержатся в массиве where,
функция должна возвращать true. Пустой массив является подмножеством любого массива.
Порядок вхождения элементов в массив не имеет значения.
--------------------------------------------------------------------*/

(function () {
    'use strict';

    function contains(where, what) {
        for (var i = 0; i < what.length; i += 1) {
            if (where.indexOf(what[i]) === -1) {
                return false;
            }
        }
        return true;
    }
    contains([1, 2, 3], [3, 2]);

}());