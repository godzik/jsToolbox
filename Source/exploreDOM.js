/*-------------------------------------------------------------------- 
explore DOM recursively
--------------------------------------------------------------------*/

(function () {
    'use strict';

    function exploreDom(parent) {
        for (var i = 0; i < parent.childNodes.length; i += 1) {
            console.log(parent.childNodes[i]);
            exploreDom(parent.childNodes[i]);
        }
    }

    exploreDom(document.body);

}());