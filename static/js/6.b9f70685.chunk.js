(this["webpackJsonpnew-post"]=this["webpackJsonpnew-post"]||[]).push([[6],{322:function(e,t,a){e.exports={users:"Users_users__2Fi6s",activPage:"Users_activPage__46KS-",activNameSet:"Users_activNameSet__2wZ_N"}},368:function(e,t,a){e.exports=a.p+"static/media/abstract-user-flat-3.b2040b0b.png"},373:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(322),l=a.n(s),u=a(368),o=a.n(u),c=a(52),i=function(e){var t=e.users,a=e.FollowInquiry,n=e.UnFollowInquiry;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement("div",{className:l.a.users},r.a.createElement(c.b,{to:"/Profile/"+e.id,className:l.a.activNameSet},e.photos.large?r.a.createElement("img",{src:e.photos.large,alt:"logo"}):r.a.createElement("img",{src:o.a,alt:""}),r.a.createElement("br",null)," ",r.a.createElement("strong",null,e.name)),r.a.createElement("br",null),r.a.createElement("strong",null,e.id),r.a.createElement("br",null),e.followed?r.a.createElement("button",{onClick:function(){n(e.id)}},"UNFollow"):r.a.createElement("button",{onClick:function(){a(e.id)}},"Follow"))})))},m=a(49),g=a(100),p=a(70),f=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),a=[],n=1;n<=t;n++)a.push(n);return r.a.createElement("div",null,a.map((function(t){return r.a.createElement("button",{className:e.currentPage===t&&l.a.activPage,onClick:function(){e.setCurrentPage(t)}},t," ")})))};t.default=Object(m.b)((function(e){return{users:e.usersData.users,isLoader:e.usersData.isLoader,totalUsersCount:e.usersData.totalUsersCount,pageSize:e.usersData.pageSize,currentPage:e.usersData.currentPage}}),{TakeDataUsers:g.b,FollowInquiry:g.a,UnFollowInquiry:g.c})((function(e){Object(n.useEffect)((function(){e.TakeDataUsers(e.currentPage,e.pageSize)}),[]);return r.a.createElement(r.a.Fragment,null,e.isLoader?r.a.createElement(p.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{setCurrentPage:function(t){e.TakeDataUsers(t,e.pageSize)},totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage}),r.a.createElement(i,e)))}))}}]);
//# sourceMappingURL=6.b9f70685.chunk.js.map