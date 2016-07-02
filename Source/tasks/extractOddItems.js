/*-------------------------------------------------------------------- 
extractOddItems(arr), возвращает новый массив, в котором содержатся только те элементы,
которые обладали нечетным индексом в массиве, переданном в качестве аргумента.
--------------------------------------------------------------------*/

(function () {
    'use strict';

    function extractOddItems(arr) {
        var i;
        for (i = 0; i < arr.length; i++) {
            if ((arr[i] % 2) === 0) {
                alert(arr[i]);
            }
        }
    }
    extractOddItems([1, 2, 3, 4, 5]);

}());

// OR

(function () {
    'use strict';

    function extractOddItems(arr) {
        var i;
        for (i = 1; i < arr.length; i = i + 2) {
            console.log(arr[i]);
        }
    }
    extractOddItems([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]);

}());

// with filter

(function () {
    'use strict';

    function extractOddItems(element) {
        if ((element % 2) === 0) {
            return element;
        }
    }
    var filtered = [1, 2, 3, 4, 5].filter(extractOddItems);
    return filtered;

}());