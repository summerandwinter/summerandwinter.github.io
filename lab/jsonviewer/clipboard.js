Ext.ns("Ext.ux"),Ext.ux.Clipboard={set:function(e){if(window.clipboardData)window.clipboardData.setData("Text",String(e));else{if(!window.netscape)return alert("Your browser does not support this feature");try{netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect"),Components.classes["@mozilla.org/widget/clipboardhelper;1"].getService(Components.interfaces.nsIClipboardHelper).copyString(e)}catch(e){return alert(e+'\n\nPlease type: "about:config" in your address bar.\nThen filter by "signed".\nChange the value of "signed.applets.codebase_principal_support" to true.\nYou should then be able to use this feature.')}}},get:function(){if(window.clipboardData)return window.clipboardData.getData("Text");if(!window.netscape)return alert("Your browser does not support this feature");try{netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");var e=Components.classes["@mozilla.org/widget/clipboard;1"].getService(Components.interfaces.nsIClipboard);if(!e)return!1;var t=Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable);if(!t)return!1;t.addDataFlavor("text/unicode"),e.getData(t,e.kGlobalClipboard);var r={},a={};try{t.getTransferData("text/unicode",r,a)}catch(e){return}var n="";return r&&(r=r.value.QueryInterface(Components.interfaces.nsISupportsString)),r&&(n=r.data.substring(0,a.value/2)),n}catch(e){return alert(e+'\n\nPlease type: "about:config" in your address bar.\nThen filter by "signed".\nChange the value of "signed.applets.codebase_principal_support" to true.\nYou should then be able to use this feature.')}}};