// ==UserScript==
// @name         Auto-redirect to the admin view on sd.suse.com
// @namespace    https://digitalflow.de
// @version      0.1
// @description  The admin view is much more powerful to work on tickets
// @author       Thomas Schmidt
// @run-at       document-start
// @match        https://sd.suse.com.com/servicedesk/*
// @grant        none
// @downloadURL  https://github.com/digitaltom/home/raw/master/userscripts/jira-sd-redirect-to-admin-interface.user.js
// @updateURL    https://github.com/digitaltom/home/raw/master/userscripts/jira-sd-redirect-to-admin-interface.user.js
// ==/UserScript==

(function() {
    'use strict';

    var ticket = location.href.split('/')[location.href.split('/').length - 1 ];
    var target = "https://sd.suse.com/browse/" + ticket;

    document.write("<br><h2>Redirecting to the admin view...</h2><br><p>" + target + "</p>");

    window.location.replace(target);
})();

