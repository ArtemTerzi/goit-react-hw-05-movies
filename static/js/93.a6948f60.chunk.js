"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[93],{93:function(t,r,n){n.r(r),n.d(r,{default:function(){return v}});var e,a=n(439),u=n(159),c=n(540),i=n(791),s=n(689),o=n(168),p=n(934).Z.p(e||(e=(0,o.Z)(["\n  font-size: 18px;\n  margin-left: 20px;\n  font-weight: 700;\n"]))),f=n(184),v=function(){var t=(0,i.useState)([]),r=(0,a.Z)(t,2),n=r[0],e=r[1],o=(0,s.UO)().id;return(0,i.useEffect)((function(){(0,u.y)(o).then(e)}),[o]),(0,f.jsx)("div",{children:n.map((function(t){var r=t.name,n=t.id,e=t.profile_path,a=t.character;return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:(0,c.g)(e),alt:r,width:80}),(0,f.jsx)(p,{children:r}),(0,f.jsxs)(p,{children:["Character: ",a]})]},n)}))})}},159:function(t,r,n){n.d(r,{Bt:function(){return f},LI:function(){return v},Y5:function(){return o},_k:function(){return s},y:function(){return p}});var e=n(861),a=n(687),u=n.n(a),c=n(243),i="c706b9e49acca8149f8445498f846084";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var t=(0,e.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/movie/day?",{params:{api_key:i}});case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,e.Z)(u().mark((function t(r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(r),{params:{api_key:i}});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(u().mark((function t(r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(r,"/credits"),{params:{api_key:i}});case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(u().mark((function t(r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(r,"/reviews"),{params:{api_key:i}});case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(u().mark((function t(r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie",{params:{api_key:i,query:r}});case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},540:function(t,r,n){n.d(r,{g:function(){return e}});var e=function(t){if(t)return"https://image.tmdb.org/t/p/w500".concat(t)}}}]);
//# sourceMappingURL=93.a6948f60.chunk.js.map