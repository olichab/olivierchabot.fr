(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[4],{608:function(e,t){},695:function(e,t,a){},699:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(556),l=a(555),s=a(557),o=a(595),i=a.n(o),m=a(696),u=a(198),p=a.n(u),f=a(51);function E(){Object(f.l)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]),null}function h(e){var t=e.images;return r.a.createElement(l.a,{className:"justify-content-center"},r.a.createElement(E,null),t.map((function(e){return r.a.createElement(s.a,{xs:"9",xl:"6",className:"p-1",key:p()()},r.a.createElement(m.a,{width:"100%",height:"320px",image:e.src,pitch:0,yaw:e.yaw,hfov:70,showControls:!1,disableKeyboardCtrl:!0,mouseZoom:!1,autoLoad:!0,autoRotate:2}))})))}h.defaultProps={images:[]};var d=a(697),b=a(32),g=a(630),j=a(698);function N(e){var t=e.images,a=Object(n.useState)(0),c=Object(b.a)(a,2),l=c[0],s=c[1],o=Object(n.useState)(!1),i=Object(b.a)(o,2),m=i[0],u=i[1],p=Object(n.useCallback)((function(e,t){var a=t.index;s(a),u(!0)}),[]),f=t.map((function(e){return{src:e.src,width:e.width,height:e.height}}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null),r.a.createElement(g.a,{photos:f,onClick:p}),r.a.createElement(j.b,null,m?r.a.createElement(j.a,{onClose:function(){s(0),u(!1)}},r.a.createElement(j.c,{currentIndex:l,views:f.map((function(e){return Object(d.a)({},e,{srcset:e.srcSet,caption:e.title})}))})):null))}N.defaultProps={images:[]};var w=a(61),v=a(62);function x(e){var t=e.currentId,a=v.a.filter((function(e){return e.id===Number(t+1)})),n=v.a.filter((function(e){return e.id===Number(t-1)}));return r.a.createElement("div",null,r.a.createElement(l.a,{className:"justify-content-center mt-5"},r.a.createElement(s.a,{xs:"auto"},a[0]&&r.a.createElement(w.Link,{to:"".concat(a[0].path),className:"link-switch-project hvr-sweep-to-left",smooth:"true"},"Projet",r.a.createElement("br",null),"pr\xe9c\xe9dent"),n[0]&&r.a.createElement(w.Link,{to:"".concat(n[0].path),className:"link-switch-project hvr-sweep-to-right",smooth:"true"},"Projet",r.a.createElement("br",null),"suivant"))))}x.defaultProps={currentId:0};a(695);function k(e){var t=e.projectDetails,a=t.id,n=t.title,o=t.year,m=t.category,u=t.website,p=t.tags,f=t.description,E=t.type,d=t.images;return r.a.createElement(c.a,{className:"details-projet-container"},r.a.createElement(l.a,null,r.a.createElement(s.a,{xs:"auto"},r.a.createElement("h1",{className:"title-details-projet"},n))),r.a.createElement(l.a,{className:"text-details-projet justify-content-center"},r.a.createElement(s.a,{xs:"12",lg:"7",className:"pb-4"},i()(f)),r.a.createElement(s.a,{xs:"12",lg:"4",className:"offset-lg-1"},r.a.createElement(s.a,{xs:"12",className:"p-0"},r.a.createElement("p",null,"Ann\xe9e : ",o)),r.a.createElement(s.a,{xs:"12",className:"p-0"},r.a.createElement("p",null,"Cat\xe9gorie : ",m)),r.a.createElement(s.a,{xs:"12",className:"p-0"},r.a.createElement("a",{href:u.url,className:"link-unstyled"},u.name)),r.a.createElement(l.a,{className:"align-items-center mt-4"},p.length&&p.map((function(e){return r.a.createElement(s.a,{xs:"auto",className:"p-2",key:e},r.a.createElement("p",{className:"label-stack"},e))}))))),"pano"===E?r.a.createElement(h,{images:d}):r.a.createElement(N,{images:d}),r.a.createElement(x,{currentId:a}))}a.d(t,"default",(function(){return k})),k.defaultProps={projectDetails:[]}}}]);
//# sourceMappingURL=4.b042ee23.chunk.js.map