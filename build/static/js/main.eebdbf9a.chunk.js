(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{17:function(e,t,a){e.exports=a(44)},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),s=a.n(r),l=a(1),o=a.n(l),i=a(4),u=a(3),m=a(5),d=a.n(m),f=a(6),p=a.n(f),h=function(e){var t=e.classrooms,a=e.setCurrent,n=e.currentClassroom;return c.a.createElement("div",{className:"columns is-multiline"},t.map((function(e){var t="box";return""!==n&&(t=n===e.classCode?"box has-background-success":"box has-background-white-ter"),c.a.createElement("a",{className:"column is-one-third is-one-fifth-desktop",onClick:function(){return a(e.classCode)}},c.a.createElement("div",{className:t},c.a.createElement("p",{className:"has-text-weight-bold is-size-5"},e.classInfo.teacher),c.a.createElement("p",null,e.classInfo.school)))})))},v=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),r=a[0],s=a[1],l=Object(n.useState)(""),m=Object(u.a)(l,2),f=m[0],p=m[1],h=function(){var t=Object(i.a)(o.a.mark((function t(){var a,n,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r&&f){t.next=2;break}return t.abrupt("return");case 2:return a=e.numTeams,n=e.classCode,c=e.fetcher,t.next=5,d()({method:"POST",url:"/teams/add",data:{teamName:r,mentorName:f,teamId:"".concat(n).concat(a),classCode:n}});case 5:p(""),s(""),c();case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return c.a.createElement("div",{className:"box is-flex-shrink"},c.a.createElement("div",{class:"field"},c.a.createElement("label",{className:"label"},"Team Name"),c.a.createElement("div",{className:"control"},c.a.createElement("input",{class:"input",type:"text",value:r,onChange:function(e){return s(e.target.value)},placeholder:"The Fabulous Scratchers"}))),c.a.createElement("div",{class:"field"},c.a.createElement("label",{className:"label"},"Mentor Name"),c.a.createElement("div",{className:"control"},c.a.createElement("input",{class:"input",type:"text",value:f,onChange:function(e){return p(e.target.value)},placeholder:"Jimmy A. Scratchyhands"}))),c.a.createElement("div",null,c.a.createElement("div",{className:"field is-grouped"},c.a.createElement("div",{className:"control"},c.a.createElement("button",{onClick:h,className:"button is-link"},"Submit")),c.a.createElement("div",{className:"control"},c.a.createElement("button",{onClick:function(){p(""),s(""),e.close()},className:"button is-link is-light"},"Cancel")))))},b=(a(42),["\ud83d\ude03","\ud83e\udd73","\ud83d\udd25","\u2728","\ud83d\ude0a","\ud83e\udd29","\ud83e\udd1f","\ud83d\udc85","\ud83d\udc9b","\ud83d\ude02","\ud83d\ude0f","\ud83d\ude0e","\ud83e\udd20","\ud83d\ude24"]),E=function(){return c.a.createElement("div",{className:"column box is-64x64 is-narrow mx-3"},c.a.createElement("span",{role:"img",className:"emoji"},b[Math.floor(Math.random()*b.length)]))},N=function(e){var t=p.a.times(e.number,(function(){return c.a.createElement(E,null)}));return console.log(t),c.a.createElement("div",null,c.a.createElement("div",{className:"columns"},t.map((function(e){return e})),c.a.createElement("div",null)))},x=function(e){var t=e.classCode,a=e.getClassInfo,r=e.authenticated,s=Object(n.useState)([]),l=Object(u.a)(s,2),m=l[0],f=l[1],h=Object(n.useState)(!1),b=Object(u.a)(h,2),E=b[0],x=b[1];function k(){return w.apply(this,arguments)}function w(){return(w=Object(i.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()("teams/".concat(t));case 2:a=e.sent,p.a.isEqual(a.data,m)||f(a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}if(Object(n.useEffect)((function(){x(!1),k()}),[t,m]),!t)return"";var C=a(t),O=function(){var e=Object(i.a)(o.a.mark((function e(t,a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()({url:"/teams/update/".concat(t),method:"POST",data:{teamId:t,amount:a}});case 2:k();case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),g=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()({url:"/teams/delete",method:"POST",data:{teamId:t}});case 2:k();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement("h3",{className:"is-size-3 pb-4"},"Teams for ",C.teacher,"'s class"),m&&m.map((function(e){return c.a.createElement("div",{className:"box"},c.a.createElement("div",{className:"ml-0 columns is-flex-direction-row is-justify-content-space-between"},c.a.createElement("p",{className:"has-text-weight-bold is-size-5"},e.teamName),r&&c.a.createElement("button",{onClick:function(){return g(e.teamId)},className:"button is-danger"},"x")),c.a.createElement("p",null,"Mentor: ",e.mentor),c.a.createElement("div",{className:"mt-5"},c.a.createElement(N,{number:e.stickers})),c.a.createElement("div",null,r&&c.a.createElement("div",{className:"button my-4 mr-2",onClick:function(){return O(e.teamId,1)}},c.a.createElement("p",null,"Add a sticker")),r&&c.a.createElement("div",{className:"button my-4",onClick:function(){return O(e.teamId,-1)}},c.a.createElement("p",null,"Remove a sticker"))))})),r&&!E&&c.a.createElement("button",{onClick:function(){return x(!0)},className:"button is-success my-4"},"Add Team"),E&&c.a.createElement(v,{close:function(){return x(!1)},fetcher:function(){return f([])},numTeams:(m.length+1).toString(),classCode:t}))};a(43);var k=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(!1),l=Object(u.a)(s,2),m=l[0],f=l[1],v=Object(n.useState)(""),b=Object(u.a)(v,2),E=b[0],N=b[1];function k(){return(k=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()("/classrooms");case 2:t=e.sent,p.a.isEqual(t.data,a)||r(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(){k.apply(this,arguments)}()}),[a]);var w=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m){e.next=7;break}return e.next=3,d()("/admin");case 3:e.sent.data.auth&&f(!0),e.next=8;break;case 7:f(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement("div",{className:"section hero"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"columns is-align-content-center is-flex-direction-row is-justify-content-space-between"},c.a.createElement("h1",{className:"title is-size-1"},"Code Haven Sticker Sheet"),c.a.createElement("p",{onClick:function(){return w()},className:"button"},m?"Log Out":"Admin")),c.a.createElement(h,{className:"pt-4",setCurrent:N,classrooms:a,currentClassroom:E}))),c.a.createElement("div",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement(x,{authenticated:m,classCode:E,getClassInfo:function(e){var t=a.find((function(t){return t.classCode===e}));if(t)return t.classInfo}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.eebdbf9a.chunk.js.map