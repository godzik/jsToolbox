/*-------------------------------------------------------------------- 
Функция createList(listData, listContainer, itemContainer), возвращает узел списка, без использования innerHTML.
Второй и третий аргументы не обязательные. Значения по умолчанию для них - ul и li. listData - массив.
listData Может содержать как элементы (текст), так и массивы элементов. Глубина вложенности массивов любая.
--------------------------------------------------------------------*/

(function () {
    'use strict';

    function isArray(object) {
        return Object.prototype.toString.call(object) === '[object Array]';
    }

    function createList(listData, listContainer, itemContainer) {
        listContainer = listContainer || 'ul';
        itemContainer = itemContainer || 'li';
        var listParent = document.createElement(listContainer);
        var listChildren;
        var i;

        for (i = 0; i < listData.length; i += 1) {
            listChildren = document.createElement(itemContainer);

            if (isArray(listData[i])) {
                listParent.appendChild(createList(listData[i], listContainer, itemContainer));
            } else {
                listChildren.innerText = listData[i];
                listParent.appendChild(listChildren);
            }

        }
        return document.body.appendChild(listParent);
    }
    createList(['мясо', ['яблоки', 'бананы']], 'div', 'span');
    
}());

// prototype

(function () {

    'use strict';

    function isArray(object) {
        return Object.prototype.toString.call(object) === '[object Array]';
    }

    var arr = ['мясо', ['яблоки', 'бананы']];

    function CreateList(listData, listContainer, itemContainer) {
        this.listContainer = listContainer || 'ul';
        this.itemContainer = itemContainer || 'li';
        this.listData = this.create(listData);
    }

    CreateList.prototype.create = function (items) {
        var listParent = document.createElement(this.listContainer);
        var listChildren;
        var i;

        for (i = 0; i < items.length; i += 1) {
            listChildren = document.createElement(this.itemContainer);

            if (isArray(items[i])) {
                listParent.appendChild(this.create(items[i], this.listContainer, this.itemContainer));
            } else {
                listChildren.innerText = items[i];
                listParent.appendChild(listChildren);
            }

        }
        return document.body.appendChild(listParent);
    };

    var list = new CreateList(arr);

}());