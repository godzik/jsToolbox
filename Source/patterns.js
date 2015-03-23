// Module

var UniqueTags = function (node) {
    'use strict';

    var elementsCollection = document.getElementsByTagName(node);
    var elementsArray;
    var tagsCollection;
    var uniqueArray;
    var i;

    return {

        toArray: function (obj) {
            return Array.prototype.slice.call(obj);
        },
        getTagNames: function (arr) {
            return arr.map(function (elem) {
                return elem.tagName;
            });
        },
        getUnique: function (arr) {
            return arr.filter(function (item, i, arr) {
                return arr.indexOf(item) === i;
            });
        },
        getUniqueTags: function () {
            elementsArray = this.toArray(elementsCollection);
            tagsCollection = this.getTagNames(elementsArray);
            uniqueArray = this.getUnique(tagsCollection);
            return uniqueArray;
        }

    };

};
var unique = new UniqueTags('*');
unique.getUniqueTags();

// Module с сокрытием вспомогательных функций

var UniqueTags = function (node) {
    'use strict';

    var elementsCollection = document.getElementsByTagName(node);
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

    return {

        getUniqueTags: function () {
            elementsArray = toArray(elementsCollection);
            tagsCollection = getTagNames(elementsArray);
            uniqueArray = getUnique(tagsCollection);
            return uniqueArray;
        }

    };

};

var unique = new UniqueTags('*');
unique.getUniqueTags();

// Revealing Module

var unique = function (node) {
    'use strict';

    var elementsCollection = document.getElementsByTagName(node);
    var elementsArray;
    var tagsCollection;
    var uniqueArray;
    var i;

    var toArray = function (obj) {
        return Array.prototype.slice.call(obj);
    },
    getTagNames = function (arr) {
        return arr.map(function (elem) {
            return elem.tagName;
        });
    },
    getUnique = function (arr) {
        return arr.filter(function (item, i, arr) {
            return arr.indexOf(item) === i;
        });
    },
    getUniqueTags = function () {
        elementsArray = toArray(elementsCollection);
        tagsCollection = getTagNames(elementsArray);
        uniqueArray = getUnique(tagsCollection);
        return uniqueArray;
    };

    return {

        uniqueTags: getUniqueTags

    };

}('*');
unique.uniqueTags();

// Prototype

(function () {

    'use strict';
    var UniqueTags = function (node) {
        this.elementCollection = document.getElementsByTagName(node);
        var elementsArray;
        var tagsCollection;
        var uniqueArray;
    };

    UniqueTags.prototype = {
        toArray: function (obj) {
            return Array.prototype.slice.call(obj);
        },
        getTagNames: function (arr) {
            return arr.map(function (elem) {
                return elem.tagName;
            });
        },
        getUnique: function (arr) {
            return arr.filter(function (item, i, arr) {
                return arr.indexOf(item) === i;
            });
        },
        getUniqueTags: function () {
            elementsArray = this.toArray(this.elementCollection);
            tagsCollection = this.getTagNames(elementsArray);
            uniqueArray = this.getUnique(tagsCollection);
            return uniqueArray;
        }
    };
    var unique = new UniqueTags('*');
    unique.getUniqueTags();

}());