(this.webpackJsonpsnake=this.webpackJsonpsnake||[]).push([[0],{12:function(t,e,r){},13:function(t,e,r){},15:function(t,e,r){"use strict";r.r(e);var n=r(0),c=r.n(n),o=r(7),a=r.n(o),u=(r(12),r(5)),i=r(2),f=r(17),s=(r(13),r(1));var l=function(){var t=Object(n.useState)([[3,3],[3,4],[4,4]]),e=Object(i.a)(t,2),r=e[0],c=e[1],o=Object(n.useState)(1),a=Object(i.a)(o,2),l=a[0],w=a[1],j=Object(n.useState)(1),b=Object(i.a)(j,2),h=b[0],v=b[1],O=Object(n.useState)(!1),d=Object(i.a)(O,2),A=d[0],g=d[1],p=Object(n.useState)(0),I=Object(i.a)(p,2),L=I[0],R=I[1],S=Object(n.useState)(500),k=Object(i.a)(S,2),m=k[0],E=k[1],D=Object(n.useState)(null),U=Object(i.a)(D,2),x=U[0],y=U[1],M=Object(n.useState)(null),N=Object(i.a)(M,2),F=N[0],J=N[1],C=[],P=[],B=Object(n.useRef)(null);Object(n.useEffect)((function(){var t=r[r.length-1];if(t[0]===l&&t[1]===h)return R((function(t){return t+1})),c((function(t){var e=Object(u.a)(t),r=Object(u.a)(e[0]);return e.unshift(r),Object(u.a)(e)})),function t(){var e=!1,n=Math.round(14*Math.random()),c=Math.round(14*Math.random());r.forEach((function(r){if(r[0]===n&&r[1]===c)return e=!0,void t()})),e||(w(n),v(c))}(),void E((function(t){return Math.round(.93*t)}));r.slice(0,r.length-2).forEach((function(e){if(t[0]===e[0]&&t[1]===e[1])return g(!0),console.log("ERRORR!!!!")}))}),[l,r,h]),Object(n.useEffect)((function(){var t=function(t){c((function(e){var r=e.slice(1),n=JSON.parse(JSON.stringify(r[r.length-1]));switch(t){case"Right":n[0]+=1,J("ArrowRight");break;case"Left":n[0]-=1,J("ArrowLeft");break;case"Down":n[1]+=1,J("ArrowDown");break;case"Up":n[1]-=1,J("ArrowUp")}return n[0]>14||n[1]>14||n[0]<0||n[1]<0?(g((function(){return!0})),e):(r.push(n),function(t){var e=!1,r=t[t.length-1];return t.slice(0,t.length-2).forEach((function(t){if(r[0]===t[0]&&r[1]===t[1])return g(!0),e=!0})),e}(r)?e:r)}))},e=function(){clearInterval(B.current),B.current=setInterval((function(){t("Down")}),m)},r=function(){clearInterval(B.current),B.current=setInterval((function(){t("Up")}),m)},n=function(){clearInterval(B.current),B.current=setInterval((function(){t("Right")}),m)},o=function(){clearInterval(B.current),B.current=setInterval((function(){t("Left")}),m)};F&&!A&&("ArrowDown"===F&&e(),"ArrowUp"===F&&r(),"ArrowRight"===F&&n(),"ArrowLeft"===F&&o());var a=function c(a){var u=a.key;if(A)return window.removeEventListener("keydown",c);if("ArrowDown"===u){if("ArrowDown"===x||"ArrowUp"===F)return;clearInterval(B.current),y("ArrowDown"),t("Down"),e()}if("ArrowUp"===u){if("ArrowUp"===x||"ArrowDown"===F)return;clearInterval(B.current),y("ArrowUp"),t("Up"),r()}if("ArrowRight"===u){if("ArrowRight"===x||"ArrowLeft"===F)return;clearInterval(B.current),y("ArrowRight"),t("Right"),n()}if("ArrowLeft"===u){if("ArrowLeft"===x||"ArrowRight"===F)return;clearInterval(B.current),y("ArrowLeft"),t("Left"),o()}};return window.addEventListener("keydown",a),function(){clearInterval(B.current),window.removeEventListener("keydown",a)}}),[x,A,F,m]);for(var T=0;T<15;T++)C.push(T);for(var q=0;q<15;q++)P.push(C);return Object(s.jsxs)("div",{className:"wrapper",children:[Object(s.jsx)("ul",{children:P.map((function(t,e){return Object(s.jsx)("li",{children:t.map((function(t,n){if(e===h&&n===l)return Object(s.jsx)("div",{className:"cell target"},Object(f.a)());var c=!1;return r.forEach((function(t){t[0]===n&&t[1]===e&&(c=!0)})),Object(s.jsx)("div",{className:c?"cell isActive":"cell"},Object(f.a)())}))},Object(f.a)())}))}),Object(s.jsxs)("h1",{children:["Points: ",L]})]})},w=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,18)).then((function(e){var r=e.getCLS,n=e.getFID,c=e.getFCP,o=e.getLCP,a=e.getTTFB;r(t),n(t),c(t),o(t),a(t)}))};a.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(l,{})}),document.getElementById("root")),w()}},[[15,1,2]]]);
//# sourceMappingURL=main.a6c78d47.chunk.js.map