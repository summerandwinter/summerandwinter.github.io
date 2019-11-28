angular.module("starter.services",[]).factory("$localstorage",["$window","$rootScope",function(e,n){return{set:function(t,o){e.localStorage[t+"_"+n.openid]=o},get:function(t,o){return e.localStorage[t+"_"+n.openid]||o},setObject:function(t,o){e.localStorage[t+"_"+n.openid]=JSON.stringify(o)},getObject:function(t){return void 0===e.localStorage[t+"_"+n.openid]?new Array:JSON.parse(e.localStorage[t+"_"+n.openid])},del:function(t){return e.localStorage.removeItem(t+"_"+n.openid)}}}]).factory("$cookie",function(){return{get:function(t){var o,e=new RegExp("(^| )"+t+"=([^;]*)(;|$)");return(o=document.cookie.match(e))?unescape(o[2]):null}}}).factory("Path",["$http","apiUrl","$rootScope",function(e,n,i){return{getList:function(t,o){e.post(n+"/path/getList",{openid:i.openid,page:t}).success(function(t){o(t)})},getOwnList:function(t,o){e.post(n+"/path/getOwnList",{openid:i.openid,page:t}).success(function(t){o(t)})},del:function(t,o){e.post(n+"/path/del",{openid:i.openid,id:t}).success(function(t){o(t)})}}}]).factory("Reward",["$http","apiUrl","$rootScope",function(e,n,i){return{getList:function(t,o){e.post(n+"/reward/getList",{openid:i.openid,page:t}).success(function(t){o(t)})}}}]).factory("Withdraw",["$http","apiUrl","$rootScope",function(e,n,i){return{getList:function(t,o){e.post(n+"/withdraw/getList",{openid:i.openid,page:t}).success(function(t){o(t)})},add:function(o){e.post(n+"/withdraw/add",{openid:i.openid}).success(function(t){o(t)})}}}]).factory("Wxuser",["$http","apiUrl","$rootScope",function(t,e,n){return{getOne:function(o){t.post(e+"/wxuser/getOne",{openid:n.openid}).success(function(t){o(t)})}}}]);