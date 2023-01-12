"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[344],{5920:function(n,t,e){e.d(t,{e:function(){return b}});var r,c,a,o,i,s=e(7689),u=e(168),f=e(1087),p=e(6444),h=p.ZP.ul(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  row-gap: 20px;\n  column-gap: 8px;\n"]))),d=p.ZP.li(c||(c=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  flex-basis: calc((100% - 32px) / 5);\n"]))),x=(0,p.ZP)(f.OL)(a||(a=(0,u.Z)(["\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover:not(.active),\n  &:focus-visible:not(.active) {\n    transform: scale(1.1);\n    color: #ec9706;\n  }\n"]))),l=p.ZP.img(o||(o=(0,u.Z)(["\n  height: 365px;\n  object-fit: cover;\n"]))),v=p.ZP.div(i||(i=(0,u.Z)(["\n  padding: 12px 4px;\n"]))),m=e(3693),w=e(184),b=function(n){var t=n.items,e=(0,s.TH)();return(0,w.jsx)(h,{children:t.map((function(n){var t=n.id,r=n.poster_path,c=n.title;return(0,w.jsx)(d,{children:(0,w.jsxs)(x,{to:"/movies/".concat(t),state:{from:e},children:[(0,w.jsx)(l,{src:r?"https://image.tmdb.org/t/p/w500".concat(r):m,alt:c}),(0,w.jsx)(v,{children:(0,w.jsx)("p",{children:c})})]})},t)}))})}},5344:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r,c,a,o=e(9439),i=e(2791),s=e(3243),u=e(5920),f=e(168),p=e(6444),h=p.ZP.section(r||(r=(0,f.Z)(["\n  padding-top: 36px;\n  padding-bottom: 36px;\n\n  text-align: center;\n"]))),d=p.ZP.div(c||(c=(0,f.Z)(["\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 1280px;\n"]))),x=p.ZP.h1(a||(a=(0,f.Z)(["\n  margin-bottom: 32px;\n\n  font-size: 56px;\n"]))),l=e(184),v=function(){var n=(0,i.useState)([]),t=(0,o.Z)(n,2),e=t[0],r=t[1];return(0,i.useEffect)((function(){(0,s.Df)().then((function(n){var t=n.results;return r(t)}))}),[]),(0,l.jsx)("main",{children:(0,l.jsx)(h,{children:(0,l.jsxs)(d,{children:[(0,l.jsx)(x,{children:"Trending today"}),(0,l.jsx)(u.e,{items:e})]})})})}},3243:function(n,t,e){e.d(t,{Df:function(){return s},M1:function(){return h},Pg:function(){return f},Ph:function(){return v},tx:function(){return x}});var r=e(5861),c=e(7757),a=e.n(c),o="https://api.themoviedb.org/3",i="bfcd7a06a5bb09fb5aafe756d2f60f73";function s(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/trending/movie/day?api_key=").concat(i));case 2:if((t=n.sent).ok){n.next=5;break}throw new Error(t.status);case 5:return n.next=7,t.json();case 7:return n.abrupt("return",n.sent);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(t,"?api_key=").concat(i));case 2:if((e=n.sent).ok){n.next=5;break}throw new Error(e.status);case 5:return n.next=7,e.json();case 7:return n.abrupt("return",n.sent);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(i));case 2:if((e=n.sent).ok){n.next=5;break}throw new Error(e.status);case 5:return n.next=7,e.json();case 7:return n.abrupt("return",n.sent);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(i));case 2:if((e=n.sent).ok){n.next=5;break}throw new Error(e.status);case 5:return n.next=7,e.json();case 7:return n.abrupt("return",n.sent);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/search/movie?api_key=").concat(i,"&query=").concat(t));case 2:if((e=n.sent).ok){n.next=5;break}throw new Error(e.status);case 5:return n.next=7,e.json();case 7:return n.abrupt("return",n.sent);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},3693:function(n,t,e){n.exports=e.p+"static/media/default-movie.71253f31d01ef6cdd4cc.jpg"},5861:function(n,t,e){function r(n,t,e,r,c,a,o){try{var i=n[a](o),s=i.value}catch(u){return void e(u)}i.done?t(s):Promise.resolve(s).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,a){var o=n.apply(t,e);function i(n){r(o,c,a,i,s,"next",n)}function s(n){r(o,c,a,i,s,"throw",n)}i(void 0)}))}}e.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=344.b932e374.chunk.js.map