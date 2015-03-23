/*-------------------------------------------------------------------- 
Функция pick(obj, keys), принимает аргументами объект и массив строк (названия ключей). Возвращает новый объект,
куда вошли все ключи, указанные в массиве keys, и соответствующие значения из объекта obj.
Если в объекте obj, нет ключа, указанного в массиве keys, в результирующем объекте этот ключ не должен присутствовать.
--------------------------------------------------------------------*/

(function () {
    'use strict';

    var user = {
        name: 'Sergey',
        age: 30,
        email: 'sergey@gmail.com',
        friends: ['Sveta', 'Artem']
    };

    function pick(obj, keys) {
        var newObj = {};
        for (var i = 0; i < keys.length; i++) {

            if (keys.length === 0) {
                return newObj;
            } else if (obj[keys[i]] !== undefined) {
                newObj[keys[i]] = obj[keys[i]];
            }
            
        }

        return newObj;
    }
    pick(user, ['name', 'friends', 'second-name']);
    
}());