"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[102],{4162:function(n,e,t){t.d(e,{a:function(){return b}});var r,o,i,a,c,s=t(168),u=t(6444),p=u.ZP.div(r||(r=(0,s.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  background-color: rgba(24, 22, 21, 0.9);\n"]))),d=u.ZP.div(o||(o=(0,s.Z)(["\n  position: fixed;\n  top: 50%;\n  right: 50%;\n  transform: translate(50%, -50%);\n"]))),f=u.ZP.div(i||(i=(0,s.Z)(["\n  position: relative;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 200px;\n  height: 200px;\n"]))),l=u.ZP.div(a||(a=(0,s.Z)(["\n  position: absolute;\n  border-radius: 50%;\n  border-style: solid;\n  animation: rotate 3s linear infinite;\n\n  @keyframes rotate {\n    to {\n      transform: rotate(1turn);\n    }\n  }\n\n  :nth-child(1) {\n    width: 100%;\n    height: 100%;\n    color: rgb(255, 136, 0);\n    border-color: currentColor transparent;\n    border-width: 2px 2px 0px 0px;\n    --deg: -45deg;\n    animation-direction: normal;\n  }\n\n  :nth-child(2) {\n    width: 70%;\n    height: 70%;\n    color: rgb(245, 211, 21);\n\n    border-color: currentColor transparent;\n    border-width: 2px 0px 0px 2px;\n    --deg: -135deg;\n    animation-direction: reverse;\n  }\n"]))),x=u.ZP.div(c||(c=(0,s.Z)(["\n  position: absolute;\n  width: 50%;\n  height: 1px;\n  top: 50%;\n  left: 50%;\n  background-color: transparent;\n  transform: rotate(var(--deg));\n  transform-origin: left;\n\n  ::before {\n    content: '';\n\n    position: absolute;\n    top: -5px;\n    right: -5px;\n    width: 10px;\n    height: 10px;\n\n    background-color: currentColor;\n    border-radius: 50%;\n    box-shadow: 0 0 20px, 0 0 40px, 0 0 60px, 0 0 80px, 0 0 100px,\n      0 0 0 5px rgba(255, 255, 0, 0.1);\n  }\n"]))),h=t(184),b=function(){return(0,h.jsx)(p,{children:(0,h.jsx)(d,{children:(0,h.jsxs)(f,{children:[(0,h.jsx)(l,{children:(0,h.jsx)(x,{})}),(0,h.jsx)(l,{children:(0,h.jsx)(x,{})})]})})})}},5920:function(n,e,t){t.d(e,{e:function(){return v}});var r,o,i,a,c,s=t(7689),u=t(168),p=t(1087),d=t(6444),f=d.ZP.ul(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  row-gap: 20px;\n  column-gap: 8px;\n"]))),l=d.ZP.li(o||(o=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  flex-basis: calc((100% - 32px) / 5);\n"]))),x=(0,d.ZP)(p.OL)(i||(i=(0,u.Z)(["\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover:not(.active),\n  &:focus-visible:not(.active) {\n    transform: scale(1.1);\n    color: #ec9706;\n  }\n"]))),h=d.ZP.img(a||(a=(0,u.Z)(["\n  height: 365px;\n  object-fit: cover;\n"]))),b=d.ZP.div(c||(c=(0,u.Z)(["\n  padding: 12px 4px;\n"]))),m=t(3693),g=t(184),v=function(n){var e=n.items,t=(0,s.TH)();return(0,g.jsx)(f,{children:e.map((function(n){var e=n.id,r=n.poster_path,o=n.title;return(0,g.jsx)(l,{children:(0,g.jsxs)(x,{to:"/movies/".concat(e),state:{from:t},children:[(0,g.jsx)(h,{src:r?"https://image.tmdb.org/t/p/w500".concat(r):m,alt:o}),(0,g.jsx)(b,{children:(0,g.jsx)("p",{children:o})})]})},e)}))})}},5430:function(n,e,t){t.d(e,{P:function(){return o}});var r=t(184),o=function(n){var e=n.message;return(0,r.jsx)("p",{children:e})}},8102:function(n,e,t){t.r(e),t.d(e,{default:function(){return W}});var r,o,i,a,c,s,u,p=t(9439),d=t(2791),f=t(1087),l=t(9014),x=t(9126),h=t(3243),b=t(5920),m=t(5430),g=t(4162),v=t(168),w=t(6444),Z=w.ZP.section(r||(r=(0,v.Z)(["\n  padding-top: 36px;\n  padding-bottom: 36px;\n\n  text-align: center;\n"]))),j=w.ZP.div(o||(o=(0,v.Z)(["\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 1280px;\n"]))),y=w.ZP.form(i||(i=(0,v.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  margin: 0 auto;\n  margin-bottom: 36px;\n  width: 510px;\n\n  border-radius: 15px;\n"]))),k=w.ZP.div(a||(a=(0,v.Z)(["\n  position: relative;\n"]))),P=w.ZP.label(c||(c=(0,v.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 16px;\n  transform: translateY(-50%);\n\n  padding: 0 4px;\n\n  font-size: 16px;\n\n  color: #fefefe;\n\n  pointer-events: none;\n\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  Input:focus ~ &,\n  Input:not(:placeholder-shown) ~ & {\n    transform: translateY(-34px) scale(0.8);\n\n    color: #ec9706;\n    background-color: #212121;\n  }\n\n  Input:not(:focus) ~ & {\n    color: #fefefe;\n  }\n"]))),z=w.ZP.input(s||(s=(0,v.Z)(["\n  width: 100%;\n  height: 50px;\n  padding: 8px 16px;\n  padding-right: 42px;\n\n  font-size: 16px;\n  letter-spacing: 1.4px;\n\n  color: #ec9706;\n  background-color: transparent;\n\n  border: 1px solid #fefefe;\n  border-radius: 10px;\n  outline: none;\n\n  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:focus {\n    border-color: #ec9706;\n    box-shadow: 0px 8px 12px -4px rgba(236, 151, 6, 0.32);\n  }\n\n  &:not(:focus) {\n    color: #fefefe;\n  }\n"]))),_=w.ZP.button(u||(u=(0,v.Z)(["\n  position: absolute;\n  top: 50%;\n  right: 16px;\n  transform: translateY(-50%);\n  padding: 0;\n\n  color: #fefefe;\n  background-color: transparent;\n\n  border: none;\n\n  cursor: pointer;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    color: #ec9706;\n  }\n"]))),C=t(184),S="idle",E="pending",I="rejected",q="resolved",W=function(){var n=(0,d.useState)(""),e=(0,p.Z)(n,2),t=e[0],r=e[1],o=(0,d.useState)([]),i=(0,p.Z)(o,2),a=i[0],c=i[1],s=(0,d.useState)(null),u=(0,p.Z)(s,2),v=u[0],w=u[1],W=(0,d.useState)(S),O=(0,p.Z)(W,2),Y=O[0],D=O[1],L=(0,f.lr)(),N=(0,p.Z)(L,2),T=N[0],H=N[1],M=T.get("query");(0,d.useEffect)((function(){M&&(D(E),(0,h.Ph)(M).then((function(n){var e=n.results;if(!e.length)return w("No result containing ".concat(M," were found.")),void D(I);c(e),D(q)})).catch((function(n){w(n),D(I)})))}),[M]);return(0,C.jsxs)("main",{children:[(0,C.jsx)(l.x7,{position:"top-center",reverseOrder:!1}),(0,C.jsx)(Z,{children:(0,C.jsxs)(j,{children:[(0,C.jsxs)(y,{onSubmit:function(n){n.preventDefault();var e=t.trim().toLowerCase();e?(H({query:e}),r("")):l.ZP.error("Search box cannot be empty. Please enter the word.",{icon:(0,C.jsx)(x.rXI,{size:36,fill:"#ec9706"}),style:{borderRadius:"10px",background:"#333",color:"#fefefe"}})},children:[(0,C.jsxs)(k,{children:[(0,C.jsx)(z,{type:"text",name:"query",value:t,autoComplete:"off",placeholder:" ",onChange:function(n){var e=n.currentTarget.value;r(e)}}),(0,C.jsx)(P,{children:"Search movies"})]}),(0,C.jsx)(_,{type:"submit",children:(0,C.jsx)(x.dVI,{size:24})})]}),Y===E&&(0,C.jsx)(g.a,{}),Y===I&&(0,C.jsx)(m.P,{message:v}),Y===q&&(0,C.jsx)(b.e,{items:a})]})})]})}},3243:function(n,e,t){t.d(e,{Df:function(){return s},M1:function(){return f},Pg:function(){return p},Ph:function(){return b},tx:function(){return x}});var r=t(5861),o=t(7757),i=t.n(o),a="https://api.themoviedb.org/3",c="bfcd7a06a5bb09fb5aafe756d2f60f73";function s(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"/trending/movie/day?api_key=").concat(c));case 2:if(!(e=n.sent).ok){n.next=7;break}return n.next=6,e.json();case 6:case 9:return n.abrupt("return",n.sent);case 7:return n.next=9,Promise.reject(new Error("Oops, something went wrong... We can't load trending movies :("));case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"/movie/").concat(e,"?api_key=").concat(c));case 2:if(!(t=n.sent).ok){n.next=7;break}return n.next=6,t.json();case 6:case 9:return n.abrupt("return",n.sent);case 7:return n.next=9,Promise.reject(new Error("We are sorry, but we did not find any information about movie :("));case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"/movie/").concat(e,"/credits?api_key=").concat(c));case 2:if(!(t=n.sent).ok){n.next=7;break}return n.next=6,t.json();case 6:case 9:return n.abrupt("return",n.sent);case 7:return n.next=9,Promise.reject(new Error("We are sorry, but we did not find any information about cast :("));case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"/movie/").concat(e,"/reviews?api_key=").concat(c));case 2:if(!(t=n.sent).ok){n.next=7;break}return n.next=6,t.json();case 6:case 9:return n.abrupt("return",n.sent);case 7:return n.next=9,Promise.reject(new Error("We do not have any reviews for this movie :("));case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"/search/movie?api_key=").concat(c,"&query=").concat(e));case 2:if(!(t=n.sent).ok){n.next=7;break}return n.next=6,t.json();case 6:case 9:return n.abrupt("return",n.sent);case 7:return n.next=9,Promise.reject(new Error("No results containing ".concat(e," were found.")));case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},3693:function(n,e,t){n.exports=t.p+"static/media/default-movie.71253f31d01ef6cdd4cc.jpg"}}]);
//# sourceMappingURL=102.32ce1111.chunk.js.map