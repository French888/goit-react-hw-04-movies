(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[1],{59:function(t,e,c){"use strict";c.r(e),c.d(e,"default",(function(){return h}));var i=c(51),n=c(0),a=c(52),r=c.p+"static/media/person.deb5d3ee.png",s=c(1);function h(t){var e=t.movieId,c=Object(n.useState)(null),h=Object(i.a)(c,2),o=h[0],u=h[1];return Object(n.useEffect)((function(){Object(a.a)(e).then((function(t){u(t.cast)}))}),[e]),o&&Object(s.jsx)("ul",{children:o.map((function(t){return Object(s.jsxs)("li",{children:[t.profile_path?Object(s.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(t.profile_path),alt:t.name,width:"100",height:"150"}):Object(s.jsx)("img",{src:r,alt:"not found",width:"100",height:"150"}),Object(s.jsx)("h3",{children:t.name}),Object(s.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})}}}]);
//# sourceMappingURL=cast-view.e451918d.chunk.js.map