"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[278],{355:function(n,e,r){function t(){return fetch("https://api.themoviedb.org/3/trending/all/day?api_key=ebb8165ea943e33fa7a8dadcac1ff998").then((function(n){return n.ok?n.json():Promise.reject(new Error("for this query trending nothing was found "))}))}function o(n){return fetch("http://api.themoviedb.org/3/search/movie?api_key=ebb8165ea943e33fa7a8dadcac1ff998&include_adult=false&language=en-US&page=1&query=".concat(n)).then((function(n){return n.ok?n.json():Promise.reject(new Error("for this query  nothing was found "))}))}function a(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=ebb8165ea943e33fa7a8dadcac1ff998")).then((function(n){return n.ok?n.json():Promise.reject(new Error("for this query  nothing was found "))}))}function i(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=ebb8165ea943e33fa7a8dadcac1ff998&language=en-US")).then((function(n){return n.ok?n.json():Promise.reject(new Error("for this query  nothing was found "))}))}function c(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=ebb8165ea943e33fa7a8dadcac1ff998")).then((function(n){return n.ok?n.json():Promise.reject(new Error("for this query  nothing was found "))}))}r.d(e,{Df:function(){return t},Eb:function(){return i},Jh:function(){return c},XT:function(){return o},md:function(){return a}})},418:function(n,e,r){r.d(e,{Ee:function(){return f},aV:function(){return p},ck:function(){return s},kI:function(){return h}});var t,o,a,i,c=r(168),u=r(444),f=u.ZP.img(t||(t=(0,c.Z)(["\n  width: 200px;\n  border-radius: 10px;\n  height: 200px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),p=u.ZP.ul(o||(o=(0,c.Z)(["\n    display: flex;\n    flex-flow: row wrap;\n    margin: 15px;\n    padding: 20px;\n    border-radius: 2px;\n    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),s=u.ZP.li(a||(a=(0,c.Z)(["\n    \n    margin: 15px;\n    padding: 20px;\n    border-radius: 2px;\n    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),h=u.ZP.p(i||(i=(0,c.Z)(["\n    padding: 4px;   \n    font-size:15px;\n    color: #182351;\n"])))},278:function(n,e,r){r.r(e);var t=r(439),o=r(791),a=r(689),i=r(355),c=r(741),u=r(596),f=(r(542),r(418)),p=r(184);e.default=function(){var n=(0,o.useState)([]),e=(0,t.Z)(n,2),r=e[0],s=e[1],h=(0,a.UO)().movieId,d=(0,o.useState)(!1),x=(0,t.Z)(d,2),g=x[0],m=x[1];return(0,o.useEffect)((function(){m(!0),(0,i.Eb)(h).then((function(n){var e=n.cast;s(e)})).catch((function(n){u.Am.error("Something went wrong! Please retry!")})).finally(m(!1))}),[h]),(0,p.jsxs)(p.Fragment,{children:[r&&(0,p.jsx)(f.aV,{children:r.map((function(n){var e=n.profile_path,r=n.id,t=n.original_title,o=n.name,a=n.character;return(0,p.jsxs)(f.ck,{children:[(0,p.jsx)(f.Ee,{src:e?"https://image.tmdb.org/t/p/w500/".concat(e):"https://image.tmdb.org/t/p/w500/",alt:t}),(0,p.jsx)(f.kI,{children:o}),(0,p.jsxs)(f.kI,{children:["character: ",a]})]},r)}))}),g&&(0,p.jsx)(c.a,{})]})}}}]);
//# sourceMappingURL=278.1fa7817c.chunk.js.map