(this.webpackJsonp01_react=this.webpackJsonp01_react||[]).push([[0],{29:function(e,t,n){"use strict";n.r(t);var c,o,r=n(0),a=n.n(r),i=n(18),s=n.n(i),b=n(17),j=n(9),d=n(8),u={Space:!1,ArrowLeft:!1,ArrowRight:!1},O=n(11),f=n(5),h=n(10),m=n(1),l=h.a.div({width:377,height:458}),g=Object(f.keyframes)(c||(c=Object(O.a)(["\n  from { background-position-x: 0 }\n  to { background-position-x: -3770px }\n"]))),x=h.a.div((function(e){var t=e.motion,n=e.isFlip;return{height:"100%",backgroundImage:"url(".concat("/learn-game","/image/character/").concat(t,".png)"),transform:n?"rotateY(180deg)":void 0,animation:"".concat(g," 0.5s infinite steps(10)")}})),k=function(e){var t=e.keyboard,n=Object(r.useState)("idle"),c=Object(j.a)(n,2),o=c[0],a=c[1],i=Object(r.useState)(!1),s=Object(j.a)(i,2),b=s[0],d=s[1];return Object(r.useEffect)((function(){t.ArrowLeft!==t.ArrowRight?(t.ArrowLeft&&d(!0),t.ArrowRight&&d(!1),a("run")):t.Space?a("attack"):a("idle")}),[t]),Object(m.jsx)(l,{children:Object(m.jsx)(x,{motion:o,isFlip:b})})},p=Object(r.memo)(k),v=n(19),w=n.n(v),y=function(){return Object(m.jsx)(f.Global,{styles:Object(f.css)(o||(o=Object(O.a)(["\n        ","\n\n        *, *::after, *::before {\n          box-sizing: border-box;\n          -moz-osx-font-smoothing: grayscale;\n          -webkit-font-smoothing: antialiased;\n          font-smoothing: antialiased;\n        }\n      "])),w.a)})},A=Object(r.memo)(y),S=h.a.div({height:"100vh"}),E=function(e){var t=e.children;return Object(m.jsx)(S,{children:t})},L=Object(r.memo)(E),F=function(){var e=Object(r.useState)(u),t=Object(j.a)(e,2),n=t[0],c=t[1],o=Object(r.useCallback)((function(e){c((function(t){return Object(b.a)(Object(b.a)({},t),e)}))}),[]);return Object(r.useEffect)((function(){var e;e=o,window.addEventListener("keydown",(function(t){var n=t.code;Object.keys(u).includes(n)&&e(Object(d.a)({},n,!0))})),window.addEventListener("keyup",(function(t){var n=t.code;Object.keys(u).includes(n)&&e(Object(d.a)({},n,!1))}))}),[o]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(A,{}),Object(m.jsx)(L,{children:Object(m.jsx)(p,{keyboard:n})})]})},R=Object(r.memo)(F);s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(R,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.30f39724.chunk.js.map