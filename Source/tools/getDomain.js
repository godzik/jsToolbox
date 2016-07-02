(function () {
    'use strict';

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
    getDomain();

}());