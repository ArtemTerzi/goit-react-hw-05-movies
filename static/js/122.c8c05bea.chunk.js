"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[122],{122:function(r,t,n){n.r(t),n.d(t,{default:function(){return i}});var e=n(439),a=n(159),u=n(791),c=n(689),s=n(184),i=function(){var r=(0,u.useState)([]),t=(0,e.Z)(r,2),n=t[0],i=t[1],o=(0,c.UO)().id;return(0,u.useEffect)((function(){(0,a.Bt)(o).then((function(r){0===r.length&&i(null),r.length>0&&i(r)}))}),[o]),(0,s.jsxs)(s.Fragment,{children:[!n&&(0,s.jsx)("p",{children:"We don't have any rewiews for this movie "}),n&&(0,s.jsx)("ul",{children:n.map((function(r){var t=r.author,n=r.content,e=r.id;return(0,s.jsxs)("li",{children:[(0,s.jsxs)("h4",{children:["Author: ",t]}),(0,s.jsx)("p",{children:n})]},e)}))})]})}},159:function(r,t,n){n.d(t,{Bt:function(){return f},LI:function(){return h},Y5:function(){return o},_k:function(){return i},y:function(){return p}});var e=n(861),a=n(687),u=n.n(a),c=n(243),s="c706b9e49acca8149f8445498f846084";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var r=(0,e.Z)(u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("trending/movie/day?",{params:{api_key:s}});case 2:return t=r.sent,r.abrupt("return",t.data.results);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,e.Z)(u().mark((function r(t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("movie/".concat(t),{params:{api_key:s}});case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,e.Z)(u().mark((function r(t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("movie/".concat(t,"/credits"),{params:{api_key:s}});case 2:return n=r.sent,r.abrupt("return",n.data.cast);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(u().mark((function r(t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("movie/".concat(t,"/reviews"),{params:{api_key:s}});case 2:return n=r.sent,r.abrupt("return",n.data.results);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),h=function(){var r=(0,e.Z)(u().mark((function r(t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/search/movie",{params:{api_key:s,query:t}});case 2:return n=r.sent,r.abrupt("return",n.data.results);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=122.c8c05bea.chunk.js.map