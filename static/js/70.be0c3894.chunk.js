"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[70],{355:function(n,e,t){function r(){return fetch("https://api.themoviedb.org/3/trending/all/day?api_key=ebb8165ea943e33fa7a8dadcac1ff998").then((function(n){return n.ok?n.json():Promise.reject(new Error("for this query trending nothing was found "))}))}function o(n){return fetch("https://api.themoviedb.org/3/search/movie?api_key=ebb8165ea943e33fa7a8dadcac1ff998&language=en-USpage=1&query=".concat(n,"&include_adult=false")).then((function(n){return n.ok?n.json():Promise.reject(new Error("for this query  nothing was found "))}))}function i(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=ebb8165ea943e33fa7a8dadcac1ff998")).then((function(n){return n.ok?n.json():Promise.reject(new Error("for this query  nothing was found "))}))}function a(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=ebb8165ea943e33fa7a8dadcac1ff998&language=en-US")).then((function(n){return n.ok?n.json():Promise.reject(new Error("for this query  nothing was found "))}))}function c(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=ebb8165ea943e33fa7a8dadcac1ff998")).then((function(n){return n.ok?n.json():Promise.reject(new Error("for this query  nothing was found "))}))}t.d(e,{Df:function(){return r},Eb:function(){return a},Jh:function(){return c},XT:function(){return o},md:function(){return i}})},70:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var r,o,i,a,c,u,s,f,d=t(439),l=t(689),h=t(791),p=t(87),g=t(355),b=t(596),m=t(741),x=t(168),y=t(444),w=y.ZP.h1(r||(r=(0,x.Z)(["\n    padding: 4px;\n    margin-left: 35px;\n    font-size: 20px;\n    color: #182351;\n"]))),k=(0,y.ZP)(p.OL)(o||(o=(0,x.Z)(["\n   \n    text-decoration: none;\n    color: rgb(0, 0, 0);\n    font-weight: 500;\n"]))),j=y.ZP.form(i||(i=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  margin: 15px auto;\n  max-width: 600px;\n  background-color: #d4d5d8;\n  border-radius: 3px;\n  overflow: hidden;"]))),v=y.ZP.button(a||(a=(0,x.Z)(["\n  display: inline-block;\n  width: 80px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  \n  &:hover {\n  opacity: 1;\n}"]))),Z=y.ZP.input(c||(c=(0,x.Z)(["\n    display: inline-block;\n    width: 100%;\n    font: inherit;\n    font-size: 20px;\n    background-color: #d4d5d8;\n    border: none;\n    outline: none;\n    padding: 20px;\n    \n  \n\n&::placeholder {\n  font: inherit;\n  font-size: 18px;\n}"]))),P=y.ZP.li(u||(u=(0,x.Z)(["\n   flex-basis: calc((100% - 60px) / 4);\n"]))),_=y.ZP.img(s||(s=(0,x.Z)(["\n margin-bottom: 10px;\n    transition: background 250ms cubic-bezier(0.075, 0.82, 0.165, 1) 0s, box-shadow 250ms cubic-bezier(0.075, 0.82, 0.165, 1) 0s;\n    border-radius: 5px;\n \n"]))),S=y.ZP.ul(f||(f=(0,x.Z)(["   \n    display: flex;\n    flex-wrap: wrap;\n    -webkit-box-pack: center;\n    justify-content: center;\n    gap: 20px;\n"]))),q=(t(542),t(184)),z=function(){var n,e=(0,l.TH)(),t=(0,h.useState)(!1),r=(0,d.Z)(t,2),o=r[0],i=r[1],a=(0,h.useState)([]),c=(0,d.Z)(a,2),u=c[0],s=c[1],f=(0,p.lr)(),x=(0,d.Z)(f,2),y=x[0],z=x[1],E=null!==(n=y.get("filterQuery"))&&void 0!==n?n:"";(0,h.useEffect)((function(){""!==E&&(i(!0),(0,g.XT)(E).then((function(n){var e=n.results;e.length<0?b.Am.error("Sorry! We couldn't find yuor request, please try again"):s(e)})).catch((function(n){(0,b.Am)("Something went wrong! Please retry!")})).finally(i(!1)))}),[E]);return(0,q.jsxs)("main",{children:[(0,q.jsxs)(j,{onSubmit:function(n){n.preventDefault();var e=n.currentTarget;z({filterQuery:e.elements.filterQuery.value.trim()}),e.reset()},children:[(0,q.jsx)(Z,{type:"text",name:"filterQuery"}),(0,q.jsx)(v,{type:"submit",children:"search"})]}),(0,q.jsx)(S,{children:u.map((function(n){var t=n.title,r=n.id,o=n.poster_path,i=n.original_title;return(0,q.jsx)(P,{children:(0,q.jsxs)(k,{to:"/movies/".concat(r),state:{from:e},children:[(0,q.jsx)(_,{src:o?"https://image.tmdb.org/t/p/w500/".concat(o):"https://image.tmdb.org/t/p/w500/",alt:i}),(0,q.jsx)(w,{children:t})]})},r)}))}),(0,q.jsx)(h.Suspense,{fallback:(0,q.jsx)(m.a,{}),children:(0,q.jsx)(l.j3,{})}),o&&(0,q.jsx)(m.a,{})]})}}}]);
//# sourceMappingURL=70.be0c3894.chunk.js.map