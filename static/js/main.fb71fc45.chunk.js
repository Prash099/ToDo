(this.webpackJsonptodofe=this.webpackJsonptodofe||[]).push([[0],{12:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(5),c=n.n(l),u=n(6),o=n(3);var i=function(){return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h1",null,"ToDo")))};var m=function(){var e=(new Date).getFullYear();return r.a.createElement("div",null,r.a.createElement("footer",null,r.a.createElement("h4",null,"\xa9 Prashanth R ",e)))};var f=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),l=n[0],c=n[1];return r.a.createElement("div",{className:"note"},r.a.createElement("form",{className:"form"},r.a.createElement("input",{onChange:function(e){c(e.target.value),e.preventDefault()},type:"text",placeholder:"What's going on",value:l}),r.a.createElement("button",{onClick:function(t){e.onAdd(l),c(""),t.preventDefault()},type:"submit"},"ADD")))};var d=function(e){return r.a.createElement("div",{onClick:function(){e.onChecked(e.id)}},r.a.createElement("li",null,e.text))};var E=function(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),l=n[0],c=n[1];function E(e){c((function(t){return t.filter((function(t,n){return n!==e}))}))}return r.a.createElement("div",null,r.a.createElement(i,null),r.a.createElement(f,{onAdd:function(e){c((function(t){return[].concat(Object(u.a)(t),[e])}))}}),r.a.createElement("div",null,r.a.createElement("ul",null,l.map((function(e,t){return r.a.createElement(d,{key:t,id:t,text:e,onChecked:E})})))),r.a.createElement(m,null))};c.a.render(r.a.createElement(E,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(12)}},[[7,1,2]]]);
//# sourceMappingURL=main.fb71fc45.chunk.js.map