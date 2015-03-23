/*-------------------------------------------------------------------- 
Функция execFunctions(arrOfFunctions), получает аргументом массив функций arrOfFunctions, и возвращает массив,
где каждый элемент это результат вызова функции стоящей на индексе, что и элемент.
--------------------------------------------------------------------*/

(function () {
    'use strict';

    function return10() {
        return 10;
    }
    function returnUser() {
        return {
            name: "Evgen"
        };
    }
    function empty() {}

    function execFunctions(arrOfFunctions) {
        var arr = [];
        for (var i = 0; i < arrOfFunctions.length; i += 1) {
            arr.push(arrOfFunctions[i]());
        }
        return arr;
    }
    execFunctions([return10, returnUser, empty]);

}());

// with map

(function () {
    'use strict';

    function return10() {
        return 10;
    }
    function returnUser() {
        return {
            name: "Evgen"
        };
    }
    function empty() {}

    function execFunctions(arrOfFunctions) {
        var arr = [];
        for (var i = 0; i < arrOfFunctions.length; i += 1) {
            arr.push(arrOfFunctions[i]());
        }
        var result = arr.map(function (arr) {
            return arr;
        });
        return result;
    }
    execFunctions([return10, returnUser, empty]);
    
}());