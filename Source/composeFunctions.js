/*-------------------------------------------------------------------- 
Функция compose, принимает аргументами любое количество функций, и возвращает функцию,
которая при вызове вызовет все функции, которые compose получила аргументом.
--------------------------------------------------------------------*/

(function () {
    'use strict';

    function log1() {
        console.log(111);
    }
    function log2() {
        console.log(222);
    }
    function log3() {
        console.log(333);
    }
    function compose() {
        var args = Array.prototype.slice.call(arguments);
        return function () {
            for (var i = 0; i < args.length; i++) {
                console.log(args[i]());
            }
        };
    }
    var logAll = compose(log1, log2, log3);
    logAll();
    
}());