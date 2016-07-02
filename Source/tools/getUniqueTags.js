/*-------------------------------------------------------------------- 
Функция getUniqueTags, возвращает массив названий тегов, присутствующих на странице.
В массиве каждого типа тег должен присутствовать в единственном экземпляре.
--------------------------------------------------------------------*/

(function () {
    'use strict';

    var elementsCollection = document.getElementsByTagName('*');
    var elementsArray;
    var tagsArray = [];
    var tagsCollection;
    var uniqueArray;
    var i;

    function toArray(obj) {
        return Array.prototype.slice.call(obj);
    }
    function getTagNames(arr) {
        for (var i = 0; i < arr.length; i++) {
            tagsArray.push(arr[i].tagName);
        }
        return tagsArray;
    }
    function getUnique(arr) {
        return arr.filter(function (item, i, arr) {
            return arr.indexOf(item) === i;
        });
    }
    function getUniqueTags() {
        elementsArray = toArray(elementsCollection);
        getTagNames(elementsArray);
        uniqueArray = getUnique(tagsArray);
        return uniqueArray;
    }
    getUniqueTags();

}());

// with map

(function () {
    'use strict';

    var elementsCollection = document.getElementsByTagName('*');
    var elementsArray;
    var tagsCollection;
    var uniqueArray;
    var i;

    function toArray(obj) {
        return Array.prototype.slice.call(obj);
    }    
    function getTagNames(arr) {
        return arr.map(function (elem) {
            return elem.tagName;
        });
    }
    function getUnique(arr) {
        return arr.filter(function (item, i, arr) {
            return arr.indexOf(item) === i;
        });
    }
    function getUniqueTags() {
        elementsArray = toArray(elementsCollection);
        tagsCollection = getTagNames(elementsArray);
        uniqueArray = getUnique(tagsCollection);
        return uniqueArray;
    }
    getUniqueTags();

}());