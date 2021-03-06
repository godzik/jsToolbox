/*-------------------------------------------------------------------- 
Типовой код для запроса XMLHttpRequest
--------------------------------------------------------------------*/

(function () {
    'use strict';

var xhr = new XMLHttpRequest();
    xhr.open('GET', '/my/url', true);
    xhr.onreadystatechange = function() {
        if (this.readyState != 4) return;
        // по окончании запроса доступны:
        // status, statusText
        // responseText, responseXML (при content-type: text/xml)
        if (this.status != 200) {
        // обработать ошибку
        return;
        }
        // получить результат из this.responseText или this.responseXML
    }
    xhr.send('');

}());