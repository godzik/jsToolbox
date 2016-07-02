/*-------------------------------------------------------------------- 
Функция queryStringToObject(queryString) распознает следующие типы данных: числа, строки, булевы и возвращает объект.
Некоторые символы query string могут быть закодированы.
--------------------------------------------------------------------*/

(function () {
    'use strict';

    function queryStringToObject(queryString) {
        var splitedQueryString = decodeURIComponent(queryString).split(/[=&]/);
        var myObj = {};
        var keys = [];
        var data = [];

        for (var i = 0; i < splitedQueryString.length; i++) {

            if (i % 2 != 0) {
                data.push(splitedQueryString[i]);
            } else {
                keys.push(splitedQueryString[i]);
            }
            for (var j = 0; j < data.length; j++) {
                myObj[keys[j]] = data[j];
            }

        }
        return myObj;
    }
    queryStringToObject("user=true&age=29&name=Evgen&phrase=mama%20mila%20ramu");

}());