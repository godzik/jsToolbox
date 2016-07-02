/*-------------------------------------------------------------------- 
Функция getExternalLinks, возвращает массив ссылок, ведущих на внешние ресурсы (то есть не на тот домен,
где запускается скрипт)
--------------------------------------------------------------------*/

(function () {

    'use strict';

    var linksCollection = document.getElementsByTagName('a');
    var linksCollectionArr = Array.prototype.slice.call(linksCollection);
    var url = window.location.href.split("/")[2];

    function getExternalLinks() {
        var extLinks = linksCollectionArr.filter(function (item) {
            return item.host !== url;
        });
        return extLinks;
    }
    getExternalLinks();

}());

// without subdomain

(function () {
    'use strict';

    var linksCollection = document.getElementsByTagName('a');
    var linksCollectionArr = Array.prototype.slice.call(linksCollection);
    var baseUrl = window.location.href;
    var i;
    var extLinks;
    var currentHref;

    function getDomain(url) {
        // IF THERE, REMOVE WHITE SPACE FROM BOTH ENDS
        url = url.replace(new RegExp(/^\s+/), ""); // START
        url = url.replace(new RegExp(/\s+$/), ""); // END 
        // IF FOUND, CONVERT BACK SLASHES TO FORWARD SLASHES
        url = url.replace(new RegExp(/\\/g), "/");
        // IF THERE, REMOVES 'http://', 'https://' or 'ftp://' FROM THE START
        url = url.replace(new RegExp(/^http\:\/\/|^https\:\/\/|^ftp\:\/\//i), "");
        // IF THERE, REMOVES 'www.' FROM THE START OF THE STRING
        url = url.replace(new RegExp(/^www\./i), "");
        // REMOVE COMPLETE STRING FROM FIRST FORWARD SLASH ON
        url = url.replace(new RegExp(/\/(.*)/), "");
        return (url);
    }

    baseUrl = getDomain(baseUrl);

    function isSubDomain(url) {
        // IF THERE, REMOVE WHITE SPACE FROM BOTH ENDS
        url = url.replace(new RegExp(/^\s+/), ""); // START
        url = url.replace(new RegExp(/\s+$/), ""); // END 
        // IF FOUND, CONVERT BACK SLASHES TO FORWARD SLASHES
        url = url.replace(new RegExp(/\\/g), "/");
        // IF THERE, REMOVES 'http://', 'https://' or 'ftp://' FROM THE START
        url = url.replace(new RegExp(/^http\:\/\/|^https\:\/\/|^ftp\:\/\//i), "");
        // IF THERE, REMOVES 'www.' FROM THE START OF THE STRING
        url = url.replace(new RegExp(/^www\./i), "");
        // REMOVE COMPLETE STRING FROM FIRST FORWARD SLASH ON
        url = url.replace(new RegExp(/\/(.*)/), "");
        // REMOVES '.??.??' OR '.???.??' FROM END - e.g. '.CO.UK', '.COM.AU'
        if (url.match(new RegExp(/\.[a-z]{2,3}\.[a-z]{2}$/i))) {
            url = url.replace(new RegExp(/\.[a-z]{2,3}\.[a-z]{2}$/i), "");
            // REMOVES '.??' or '.???' or '.????' FROM END - e.g. '.US', '.COM', '.INFO'
        } else if (url.match(new RegExp(/\.[a-z]{2,4}$/i))) {
            url = url.replace(new RegExp(/\.[a-z]{2,4}$/i), "");
        }
        // CHECK TO SEE IF THERE IS A DOT '.' LEFT IN THE STRING
        var subDomain = (url.match(new RegExp(/\./g))) ? true : false;
        return (subDomain);
    }

    function getExternalLinks() {
        extLinks = linksCollectionArr.filter(function (item) {
            return item.host !== baseUrl;
        });
        for (var i = 0; i < extLinks.length; i += 1) {
            currentHref = extLinks[i].href;
            if (isSubDomain(currentHref) === true) {
                extLinks.splice(extLinks[i], 1);
            }
        }
        return extLinks;
    }
    getExternalLinks();

}());