"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[379],{159:function(r,t,n){n.d(t,{Bt:function(){return p},LI:function(){return v},Y5:function(){return o},_k:function(){return i},y:function(){return f}});var e=n(861),a=n(687),u=n.n(a),c=n(243),s="c706b9e49acca8149f8445498f846084";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var r=(0,e.Z)(u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("trending/movie/day?",{params:{api_key:s}});case 2:return t=r.sent,r.abrupt("return",t.data.results);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,e.Z)(u().mark((function r(t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("movie/".concat(t),{params:{api_key:s}});case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(u().mark((function r(t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("movie/".concat(t,"/credits"),{params:{api_key:s}});case 2:return n=r.sent,r.abrupt("return",n.data.cast);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,e.Z)(u().mark((function r(t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("movie/".concat(t,"/reviews"),{params:{api_key:s}});case 2:return n=r.sent,r.abrupt("return",n.data.results);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),v=function(){var r=(0,e.Z)(u().mark((function r(t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/search/movie",{params:{api_key:s,query:t}});case 2:return n=r.sent,r.abrupt("return",n.data.results);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},379:function(r,t,n){n.r(t),n.d(t,{default:function(){return d}});var e,a=n(439),u=n(159),c=n(791),s=n(689),i=n(87),o=n(168),f=n(934).Z.li(e||(e=(0,o.Z)(["\n  font-size: 20px;\n  margin-bottom: 8px;\n"]))),p=n(184),v=function(){var r=(0,c.useState)([]),t=(0,a.Z)(r,2),n=t[0],e=t[1],o=(0,s.TH)();return(0,c.useEffect)((function(){(0,u._k)().then((function(r){return e(r)}))}),[]),(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("ul",{children:n.map((function(r){var t=r.id,n=r.title;return(0,p.jsx)(f,{children:(0,p.jsx)(i.rU,{to:"movies/".concat(t),state:{from:o},children:n})},t)}))})})},d=function(){return(0,p.jsxs)("main",{children:[(0,p.jsx)("h2",{children:"Trending Today"}),(0,p.jsx)(v,{})]})}}}]);
//# sourceMappingURL=379.4c54dee8.chunk.js.map