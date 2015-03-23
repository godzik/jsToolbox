/*-------------------------------------------------------------------- 
Вывести последовательность.
--------------------------------------------------------------------*/

(function () {
    'use strict';

    function getFobinacci(num2it) {
        function fibonacci(n) {
            if (n < 2) {
                if (n === 0) {
                    return 0;
                }
                return 1;
            } else {
                return fibonacci(n - 2) + fibonacci(n - 1);
            }
        }
        for (n = 0; n <= num2et; n++) {
            console.log(fibonacci(n));
        }
    }
    getFobinacci(10);

}());