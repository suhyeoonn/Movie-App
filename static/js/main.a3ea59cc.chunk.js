(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{12:function(e,t,n){e.exports=n(25)},17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(4),s=n.n(i),o=(n(17),n(2)),c=n.n(o),l=n(5),u=n(6),m=n(7),p=n(10),v=n(8),d=n(11),g=(n(19),n(20),n(1)),f=n.n(g),h=n(9),y=n.n(h);function E(e){var t=e.title,n=e.poster,r=e.genres,i=e.synopsis,s=e.year;return a.a.createElement("div",{className:"movie"},a.a.createElement(b,{poster:n,alt:t}),a.a.createElement("div",{className:"data"},a.a.createElement("h1",null,t),a.a.createElement("div",null,s),a.a.createElement("div",{className:"genres"},r.map((function(e,t){return a.a.createElement(w,{genre:e,key:t})}))),a.a.createElement("div",null,a.a.createElement(y.a,{text:i,maxLine:"3",ellipsis:"...",trimRight:!0,basedOn:"letters"}))))}function b(e){var t=e.poster,n=e.alt;return a.a.createElement("img",{src:t,alt:n,title:n,className:"poster"})}function w(e){var t=e.genre;return a.a.createElement("span",null,t)}E.PropsType={title:f.a.string.isRequired,poster:f.a.string.isRequired,genres:f.a.array.isRequired,synopsis:f.a.string.isRequired,year:f.a.number.isRequired},b.PropsType={poster:f.a.string.isRequired,alt:f.a.string},w.PropsType={gener:f.a.string.isRequired};var _=E,k=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(n=Object(p.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(i)))).state={},n._getMovies=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._callApi();case 2:t=e.sent,console.log(t),n.setState({movies:t});case 5:case"end":return e.stop()}}),e)}))),n._callApi=function(){return fetch("https://yts.lt/api/v2/list_movies.json?sort_by=rating").then((function(e){return e.json()})).then((function(e){return e.data.movies})).catch((function(e){return console.log(e)}))},n._renderMovies=function(){return n.state.movies.map((function(e){return a.a.createElement(_,{title:e.title_english,poster:e.medium_cover_image,key:e.id,genres:e.genres,synopsis:e.synopsis,year:e.year})}))},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this._getMovies()}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},this.state.movies?this._renderMovies():"Loading")}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[12,1,2]]]);
//# sourceMappingURL=main.a3ea59cc.chunk.js.map