_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{AwZY:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n("gjpc")}])},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var c,a=o(n("q1tI")),s=n("elyg"),i=n("nOHt"),f=new Map,u=window.IntersectionObserver,l={};var p=function(e,t){var n=c||(u?c=new u((function(e){e.forEach((function(e){if(f.has(e.target)){var t=f.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(c.unobserve(e.target),f.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),f.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}f.delete(e)}):function(){}};function d(e,t,n,r){(0,s.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),l[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=a.default.useState(),o=r(n,2),c=o[0],f=o[1],h=(0,i.useRouter)(),j=h&&h.pathname||"/",v=a.default.useMemo((function(){var t=(0,s.resolveHref)(j,e.href,!0),n=r(t,2),o=n[0],c=n[1];return{href:o,as:e.as?(0,s.resolveHref)(j,e.as):c||o}}),[j,e.href,e.as]),w=v.href,_=v.as;a.default.useEffect((function(){if(t&&u&&c&&c.tagName&&(0,s.isLocalURL)(w)&&!l[w+"%"+_])return p(c,(function(){d(h,w,_)}))}),[t,c,w,_,h]);var b=e.children,g=e.replace,y=e.shallow,E=e.scroll;"string"===typeof b&&(b=a.default.createElement("a",null,b));var O=a.Children.only(b),x={ref:function(e){e&&f(e),O&&"object"===typeof O&&O.ref&&("function"===typeof O.ref?O.ref(e):"object"===typeof O.ref&&(O.ref.current=e))},onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,c,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:c}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,w,_,g,y,E)}};return t&&(x.onMouseEnter=function(e){(0,s.isLocalURL)(w)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),d(h,w,_,{priority:!0}))}),(e.passHref||"a"===O.type&&!("href"in O.props))&&(x.href=(0,s.addBasePath)((0,s.addLocale)(_,h&&h.locale,h&&h.defaultLocale))),a.default.cloneElement(O,x)};t.default=h},gjpc:function(e,t,n){"use strict";n.r(t);var r=n("oVfn"),o=n.n(r),c=n("YFqc"),a=n.n(c),s=n("nKUr"),i=function(){return Object(s.jsxs)("div",{className:o.a.projSelect,children:[Object(s.jsx)("h1",{children:"Our projects"}),Object(s.jsxs)("div",{className:o.a.projSelList,children:[Object(s.jsx)(a.a,{href:"/projects/flagship",children:Object(s.jsx)("a",{children:"Flagship Projects"})}),Object(s.jsx)(a.a,{href:"/projects/eklavya",children:Object(s.jsx)("a",{children:"Eklavya Projects"})})]})]})};t.default=function(){return Object(s.jsx)(i,{})}},oVfn:function(e,t,n){e.exports={projSelect:"ProjectSelection_projSelect__332sE",projSelList:"ProjectSelection_projSelList__1uk92"}}},[["AwZY",0,1,5]]]);