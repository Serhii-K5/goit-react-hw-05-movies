"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[663],{663:function(t,n,r){r.r(n),r.d(n,{default:function(){return p}});var e=r(689),a=r(439),i=r(908),u=r(791),c=r(538),o="Cast_castLict__zy401",s="Cast_castLi__gIBf5",f=r(184),p=function(){var t=function(t){var n=(0,u.useState)([]),r=(0,a.Z)(n,2),e=r[0],c=r[1];return(0,u.useEffect)((function(){i.Jh(t).then((function(t){return c(t)}))}),[t]),{credits:e}}((0,e.UO)().movieId),n=t.credits;return(0,f.jsx)("div",{children:(0,f.jsx)("ul",{className:o,children:n.map((function(t){return(0,f.jsx)("div",{className:s,children:(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:t.profile_path?"https://image.tmdb.org/t/p/w300/".concat(t.profile_path):c,alt:t.name,width:t.profile_path?150:50}),(0,f.jsx)("p",{children:t.name}),(0,f.jsxs)("p",{children:["Character: ",t.character]})]})},t.id)}))})})}},908:function(t,n,r){r.d(n,{Hg:function(){return o},Jh:function(){return p},_r:function(){return A},on:function(){return s},s_:function(){return f}});var e=r(861),a=r(757),i=r.n(a),u=r(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="881e4f4e42426200caf7188874b6c85d",o=function(){var t=(0,e.Z)(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/trending/movie/day?api_key=".concat(c));case 2:return n=t.sent,t.abrupt("return",n.data.results.map((function(t){return{id:t.id,title:t.title}})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,e.Z)(i().mark((function t(n){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie?api_key=".concat(c,"&query=").concat(n,"&language=en-US&page=1"));case 2:return r=t.sent,t.abrupt("return",r.data.results.map((function(t){return{id:t.id,title:t.title}})));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(i().mark((function t(n){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"?api_key=").concat(c,"&language=en-US"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(i().mark((function t(n){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return r=t.sent,t.abrupt("return",r.data.cast.map((function(t){return{name:t.name,character:t.character,profile_path:t.profile_path,id:t.id}})));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),A=function(){var t=(0,e.Z)(i().mark((function t(n){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return r=t.sent,t.abrupt("return",r.data.results.map((function(t){return{author:t.author,content:t.content,id:t.id}})));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},538:function(t){t.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=663.85684597.chunk.js.map