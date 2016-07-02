/*-------------------------------------------------------------------- 
Функция getName(path), возвращает название папки или файла из строки пути.
Разделители сегментов путей - юниксовые ("/").
--------------------------------------------------------------------*/

(function () {
    'use strict';

    function getName(path) {
        'use strict';
        var str = path.split('/');
        str = str.filter(Boolean);
        return str[str.length - 1];
    }
    getName('/users/dmitry/Dropbox');

}());