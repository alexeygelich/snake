(this.webpackJsonpsnake=this.webpackJsonpsnake||[]).push([[0],{12:function(e,t,r){},13:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),a=r(7),u=r.n(a),i=(r(12),r(5)),o=r(2),f=r(17),s=(r(13),r(1));var b=function(){var e=Object(n.useState)([[3,3],[3,4],[4,4]]),t=Object(o.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)(1),u=Object(o.a)(a,2),b=u[0],j=u[1],h=Object(n.useState)(1),w=Object(o.a)(h,2),l=w[0],O=w[1],d=Object(n.useState)(!1),v=Object(o.a)(d,2),g=v[0],p=v[1],A=Object(n.useState)(0),k=Object(o.a)(A,2),R=k[0],E=k[1],m=Object(n.useState)(300),L=Object(o.a)(m,2),S=L[0],x=L[1],D=Object(n.useRef)(""),N=[],M=[],U=Object(n.useRef)(NaN);Object(n.useEffect)((function(){var e=r[r.length-1];if(e[0]===b&&e[1]===l)return E((function(e){return e+1})),c((function(e){var t=Object(i.a)(e),r=Object(i.a)(t[0]);return t.unshift(r),Object(i.a)(t)})),function e(){var t=!1,n=Math.round(14*Math.random()),c=Math.round(14*Math.random());r.forEach((function(r){if(r[0]===n&&r[1]===c)return t=!0,void e()})),t||(j(n),O(c))}(),void x((function(e){return Math.round(.96*e)}));r.slice(0,r.length-2).forEach((function(t){if(e[0]===t[0]&&e[1]===t[1])return p(!0),console.log("ERRORR!!!!")}))}),[b,r,l]),Object(n.useEffect)((function(){var e=function(e){var t=e.key;if("ArrowDown"===t){if("ArrowUp"===D.current)return;D.current="ArrowDown"}if("ArrowUp"===t){if("ArrowDown"===D.current)return;D.current="ArrowUp"}if("ArrowRight"===t){if("ArrowLeft"===D.current)return;D.current="ArrowRight"}if("ArrowLeft"===t){if("ArrowRight"===D.current)return;D.current="ArrowLeft"}};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[g]),Object(n.useEffect)((function(){if(!g){var e=function(e){c((function(t){var r=t.slice(1),n=JSON.parse(JSON.stringify(r[r.length-1]));switch(e){case"Right":n[0]+=1;break;case"Left":n[0]-=1;break;case"Down":n[1]+=1;break;case"Up":n[1]-=1}return n[0]>14||n[1]>14||n[0]<0||n[1]<0?(p((function(){return!0})),t):(r.push(n),function(e){var t=!1,r=e[e.length-1];return e.slice(0,e.length-2).forEach((function(e){if(r[0]===e[0]&&r[1]===e[1])return p(!0),t=!0})),t}(r)?t:r)}))};return U.current=window.setInterval((function(){switch(D.current){case"ArrowDown":e("Down");break;case"ArrowUp":e("Up");break;case"ArrowRight":e("Right");break;case"ArrowLeft":e("Left")}}),S),function(){clearInterval(U.current)}}clearInterval(U.current)}),[g,S]);for(var y=0;y<15;y++)N.push(y);for(var I=0;I<15;I++)M.push(N);return Object(s.jsxs)("div",{className:"wrapper",children:[Object(s.jsx)("ul",{children:M.map((function(e,t){return Object(s.jsx)("li",{children:e.map((function(e,n){if(t===l&&n===b)return Object(s.jsx)("div",{className:"cell target"},Object(f.a)());var c=!1;return r.forEach((function(e){e[0]===n&&e[1]===t&&(c=!0)})),Object(s.jsx)("div",{className:c?"cell isActive":"cell"},Object(f.a)())}))},Object(f.a)())}))}),Object(s.jsxs)("h1",{children:["Points: ",R]})]})},j=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,18)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,u=t.getTTFB;r(e),n(e),c(e),a(e),u(e)}))};u.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("root")),j()}},[[15,1,2]]]);
//# sourceMappingURL=main.45aba6a7.chunk.js.map