// ==UserScript==
// @name         Auto-redirect to the admin view on sd.suse.com
// @namespace    https://digitalflow.de
// @version      0.1
// @description  The admin view is much more powerful to work on tickets
// @author       Thomas Schmidt
// @run-at       document-start
// @match        https://sd.suse.com/servicedesk/*
// @grant        none
// @downloadURL  https://github.com/digitaltom/home/raw/master/userscripts/jira-sd-redirect-to-admin-interface.user.js
// @updateURL    https://github.com/digitaltom/home/raw/master/userscripts/jira-sd-redirect-to-admin-interface.user.js
// ==/UserScript==


var ticket = location.href.split('/')[location.href.split('/').length - 1 ];
var target = "https://sd.suse.com/browse/" + ticket;

var log = "Redirecting to the jira-sd admin view at " + target;
console.log(log);

location.replace(target);

