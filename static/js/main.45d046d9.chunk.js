(this.webpackJsonpsnake=this.webpackJsonpsnake||[]).push([[0],{22:function(e,t,r){},27:function(e,t,r){},28:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(8),a=r.n(c),o=(r(21),r(22),r(13)),i=r(7),u=r(32),s=r(33),l=r(31),f=r(3);var j=function(e){var t=e.show,r=e.count,n=e.handleStartClick;return Object(f.jsxs)(l.a,{show:t,dialogClassName:"modal-90w","aria-labelledby":"example-custom-modal-styling-title",children:[Object(f.jsx)(l.a.Header,{children:Object(f.jsxs)(l.a.Title,{id:"example-custom-modal-styling-title",children:["Your results: ",r," points"]})}),Object(f.jsx)(l.a.Body,{children:Object(f.jsx)(s.a,{variant:"success",onClick:n,children:"Try again"})})]})};r(27);var b=function(){var e={record:Number(localStorage.getItem("record"))||0,area:10},t=Object(n.useState)([[3,3],[3,4],[4,4]]),r=Object(i.a)(t,2),c=r[0],a=r[1],l=Object(n.useState)(Math.round(14*Math.random())),b=Object(i.a)(l,2),h=b[0],d=b[1],O=Object(n.useState)(Math.round(14*Math.random())),w=Object(i.a)(O,2),g=w[0],v=w[1],A=Object(n.useState)(e.area),m=Object(i.a)(A,2),p=(m[0],m[1],Object(n.useState)(!1)),x=Object(i.a)(p,2),S=x[0],k=x[1],R=Object(n.useState)(0),E=Object(i.a)(R,2),y=E[0],L=E[1],M=Object(n.useState)(450),C=Object(i.a)(M,2),N=C[0],D=C[1],I=Object(n.useState)(!1),U=Object(i.a)(I,2),F=U[0],J=U[1],T=Object(n.useState)(e.record),B=Object(i.a)(T,2),P=B[0],H=B[1],Y=Object(n.useRef)(""),q=[],z=[],G=Object(n.useRef)(NaN),K=Object(n.useRef)(!0),Q=function(){y>P&&(H(y),localStorage.setItem("record",y.toString()))};Object(n.useEffect)((function(){var e=c[c.length-1];if(e[0]===h&&e[1]===g)return L((function(e){return e+Math.round(1e3*c.length/N)})),a((function(e){var t=Object(o.a)(e),r=Object(o.a)(t[0]);return t.unshift(r),Object(o.a)(t)})),function e(){var t=!1,r=Math.round(14*Math.random()),n=Math.round(14*Math.random());c.forEach((function(c){if(c[0]===r&&c[1]===n)return t=!0,void e()})),t||(d(r),v(n))}(),void D((function(e){return Math.round(.96*e)}));c.slice(0,c.length-2).forEach((function(t){if(e[0]===t[0]&&e[1]===t[1])return k(!0),Q(),J(!0),console.log("ERRORR!!!!")}))}),[h,c,g]),Object(n.useEffect)((function(){var e=function(e){var t=e.key;if(K.current){if("ArrowDown"===t){if("ArrowUp"===Y.current)return;Y.current="ArrowDown"}if("ArrowUp"===t){if("ArrowDown"===Y.current)return;Y.current="ArrowUp"}if("ArrowRight"===t){if("ArrowLeft"===Y.current)return;Y.current="ArrowRight"}if("ArrowLeft"===t){if("ArrowRight"===Y.current)return;Y.current="ArrowLeft"}K.current=!1}};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[S]),Object(n.useEffect)((function(){if(!S){var e=function(e){a((function(t){var r=t.slice(1),n=JSON.parse(JSON.stringify(r[r.length-1]));switch(e){case"ArrowRight":n[0]+=1;break;case"ArrowLeft":n[0]-=1;break;case"ArrowDown":n[1]+=1;break;case"ArrowUp":n[1]-=1}return n[0]>14||n[1]>14||n[0]<0||n[1]<0?(k((function(){return!0})),Q(),J(!0),t):(K.current=!0,r.push(n),function(e){var t=!1,r=e[e.length-1];return e.slice(0,e.length-2).forEach((function(e){if(r[0]===e[0]&&r[1]===e[1])return k(!0),Q(),J(!0),t=!0})),t}(r)?t:r)}))};return G.current=window.setInterval((function(){switch(Y.current){case"ArrowDown":e("ArrowDown");break;case"ArrowUp":e("ArrowUp");break;case"ArrowRight":e("ArrowRight");break;case"ArrowLeft":e("ArrowLeft")}}),N),function(){clearInterval(G.current)}}clearInterval(G.current)}),[S,N]);for(var V=0;V<15;V++)q.push(V);for(var W=0;W<15;W++)z.push(q);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("h1",{children:["Record: ",P]}),Object(f.jsx)(s.a,{variant:"success",onClick:function(){H(0),localStorage.clear()},children:"Clear record"}),Object(f.jsxs)("div",{className:"wrapper",children:[Object(f.jsx)("ul",{children:z.map((function(e,t){return Object(f.jsx)("li",{children:e.map((function(e,r){if(t===g&&r===h)return Object(f.jsx)("div",{className:"cell target"},Object(u.a)());var n=!1;return c.forEach((function(e){e[0]===r&&e[1]===t&&(n=!0)})),Object(f.jsx)("div",{className:n?"cell isActive":"cell"},Object(u.a)())}))},Object(u.a)())}))}),Object(f.jsxs)("h1",{children:["Points: ",y]})]}),Object(f.jsx)(j,{show:F,count:y,handleStartClick:function(){k(!1),L(0),D(450),J(!1),a([[3,3],[3,4],[4,4]]),Y.current=""}})]})},h=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,34)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;r(e),n(e),c(e),a(e),o(e)}))};a.a.render(Object(f.jsx)(b,{}),document.getElementById("root")),h()}},[[28,1,2]]]);
//# sourceMappingURL=main.45d046d9.chunk.js.map