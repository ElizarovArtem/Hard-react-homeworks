(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,function(e,a,t){e.exports={App:"App_App__1AJ9S",links:"App_links__16N8_",sss:"App_sss__3LcbD",menu:"App_menu__1W-qK",active:"App_active__1UPST"}},,,function(e,a,t){e.exports={message:"Message_message__O_1-j",avatar:"Message_avatar__f3A8r",messageArea:"Message_messageArea__3UJmi",time:"Message_time__3ynpY",messageItems:"Message_messageItems__1NUWh"}},function(e,a,t){e.exports={someClass:"Greeting_someClass__35-sY",error:"Greeting_error__1XfhH",good:"Greeting_good__2UZvJ",badMessage:"Greeting_badMessage__1ZdOX",number:"Greeting_number__2Lj7j"}},,,,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__uP_V2",errorInput:"SuperInputText_errorInput__2Inet",error:"SuperInputText_error__3SwET"}},function(e,a,t){e.exports={doubleClick:"HW6_doubleClick__UtE1K",message:"HW6_message__2wuH_",superSpan:"HW6_superSpan__25LDb"}},,,,,function(e,a,t){e.exports={default:"SuperButton_default__3zdA5",red:"SuperButton_red__3sxAx"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__1S81V",spanClassName:"SuperCheckbox_spanClassName__3mcri"}},function(e,a,t){e.exports={spanStyle:"SuperEditableSpan_spanStyle__2B1ft",divForSpan:"SuperEditableSpan_divForSpan__3ng1_"}},,,,,function(e,a,t){e.exports={blue:"HW4_blue__22_Tq",column:"HW4_column__1sbqO"}},,function(e,a,t){e.exports=t(39)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),c=t.n(l),s=(t(33),t(5)),o=t.n(s),u=t(7);var i=function(){return r.a.createElement("div",{className:o.a.sss},r.a.createElement("div",{className:o.a.links},r.a.createElement("div",null,r.a.createElement(u.b,{activeClassName:o.a.active,to:"/junior"},"JUNIOR")),r.a.createElement("div",null,r.a.createElement(u.b,{activeClassName:o.a.active,to:"/juniorPlus"},"JUNIOR-PLUS")),r.a.createElement("div",null,r.a.createElement(u.b,{activeClassName:o.a.active,to:"/pre-junior"},"PRE-JUNIOR"))))},m=t(1),p=t(8),d=t.n(p);var E=function(e){return r.a.createElement("div",{className:d.a.message},r.a.createElement("div",{className:d.a.avatar},r.a.createElement("img",{src:e.avatar})),r.a.createElement("div",{className:d.a.messageArea},r.a.createElement("div",{className:d.a.messageItems},r.a.createElement("span",null,e.name),r.a.createElement("p",null,e.message)),r.a.createElement("div",{className:d.a.time},r.a.createElement("span",null,e.time))))},f="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",_="Artem",v="npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",h="22:00";var b=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",r.a.createElement(E,{avatar:f,name:_,message:v,time:h}),r.a.createElement("hr",null),r.a.createElement("hr",null))},g=t(2);var C=function(e){return r.a.createElement("div",null,e.affair.name,", \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u0435 ",e.affair.priority,r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var k=function(e){var a=e.data.map((function(a){return r.a.createElement(C,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},N=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var S=function(){var e=Object(n.useState)(N),a=Object(g.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),s=Object(g.a)(c,2),o=s[0],u=s[1],i=function(e,a){return"all"===a?e:"low"===a?e.filter((function(e){return"low"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):"high"===a?e.filter((function(e){return"high"===e.priority})):e}(t,o);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(k,{data:i,setFilter:u,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},j=t(27),O=t(9),x=t.n(O),y=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,s=a.length>1?x.a.good:x.a.error;return r.a.createElement("div",{className:x.a.someClass},r.a.createElement("input",{value:a,onChange:t,className:s}),r.a.createElement("span",{className:x.a.badMessage},l),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",{className:x.a.number},c))},w=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(g.a)(l,2),s=c[0],o=c[1],u=Object(n.useState)(""),i=Object(g.a)(u,2),m=i[0],p=i[1],d=a.length;return r.a.createElement(y,{name:s,setNameCallback:function(e){o(e.currentTarget.value)},addUser:function(){s.length>1?(t(s),o(""),p(""),alert("Hello  ".concat(s,"!"))):p("Too short name")},error:m,totalUsers:d})},A=t(41);var I=function(){var e=Object(n.useState)([]),a=Object(g.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(w,{users:t,addUserCallback:function(e){var a=[{_id:Object(A.a)(),name:e}].concat(Object(j.a)(t));l(a)}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},T=t(6),U=t(13),F=t.n(U),P=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,s=e.className,o=e.spanClassName,u=Object(T.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(F.a.error," ").concat(o||""),m="".concat(s," ").concat(c?F.a.errorInput:F.a.superInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:m},u)),c&&r.a.createElement("span",{className:i},c))},M=t(26),J=t.n(M),W=t(19),H=t.n(W),B=function(e){var a=e.red,t=e.className,n=Object(T.a)(e,["red","className"]),l="".concat(a?H.a.red:H.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},L=t(20),D=t.n(L),G=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(T.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(D.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked),a&&a(e)},className:s},c)),l&&r.a.createElement("span",{className:D.a.spanClassName},l))};var K=function(){var e=Object(n.useState)(""),a=Object(g.a)(e,2),t=a[0],l=a[1],c=t?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):(alert(t),l(""))},o=Object(n.useState)(!1),u=Object(g.a)(o,2),i=u[0],m=u[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:J.a.column},r.a.createElement(P,{value:t,onChangeText:l,onEnter:s,error:c}),r.a.createElement(B,{red:!0,onClick:s},"delete "),r.a.createElement(G,{checked:i,onChangeChecked:m},"some text "),r.a.createElement(G,{checked:i,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},R=t(21),q=t.n(R),z=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(T.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(n.useState)(!1),o=Object(g.a)(s,2),u=o[0],i=o[1],m=l||{},p=m.children,d=m.onDoubleClick,E=m.className,f=Object(T.a)(m,["children","onDoubleClick","className"]),_="".concat(q.a.spanStyle," ").concat(E);return r.a.createElement(r.a.Fragment,null,u?r.a.createElement(P,Object.assign({autoFocus:!0,onBlur:function(e){i(!1),a&&a(e)},onEnter:function(){i(!1),t&&t()}},c)):r.a.createElement("div",{className:q.a.divForSpan},r.a.createElement("span",Object.assign({onDoubleClick:function(e){i(!0),d&&d(e)},className:_},f),p||c.value)))};function X(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function Y(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}X("test",{x:"A",y:1});Y("test",{x:"",y:0});var Z=t(14),V=t.n(Z);var $=function(){var e=Object(n.useState)(""),a=Object(g.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!1),s=Object(g.a)(c,2),o=s[0],u=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",{className:o?V.a.message:V.a.doubleClick},"DoubleClick for changes"),r.a.createElement("div",{className:V.a.superSpan,onMouseEnter:function(){return u(!0)},onMouseLeave:function(){return u(!1)}},r.a.createElement(z,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(B,{onClick:function(){X("editable-span-value",t)}},"save"),r.a.createElement(B,{onClick:function(){l(Y("editable-span-value",t))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Q=function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(S,null),r.a.createElement(I,null),r.a.createElement(K,null),r.a.createElement($,null))};var ee=function(){return r.a.createElement("div",{style:{backgroundColor:"purple"}},r.a.createElement("div",{style:{marginLeft:"800px",fontSize:"10em"}},"404"),r.a.createElement("div",{style:{marginLeft:"400px",fontSize:"10em",color:"red"}},"Page not found!"),r.a.createElement("div",{style:{marginLeft:"500px",fontSize:"10em",color:"green"}},"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},ae="/pre-junior",te="/junior",ne="/juniorPlus";var re=function(){return r.a.createElement("div",null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",exact:!0,render:function(){return r.a.createElement(m.a,{to:ae})}}),r.a.createElement(m.b,{path:ae,render:function(){return r.a.createElement(Q,null)}}),"// add routes",r.a.createElement(m.b,{exact:!0,path:te}),r.a.createElement(m.b,{exact:!0,path:ne}),r.a.createElement(m.b,{render:function(){return r.a.createElement(ee,null)}})))};var le=function(){return r.a.createElement("div",{className:o.a.h5},r.a.createElement(u.a,null,r.a.createElement(i,null),r.a.createElement(re,null)))};var ce=function(){return r.a.createElement("div",{className:o.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(le,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[28,1,2]]]);
//# sourceMappingURL=main.02204ed8.chunk.js.map