_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/a9y":function(e,t,n){"use strict";var a=n("lwsE"),r=n("W8MJ"),l=n("7W2i"),i=n("a1gu"),o=n("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=o(e);if(t){var r=o(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return i(this,n)}}var u=n("TqRt");t.__esModule=!0,t.default=void 0;var s=u(n("q1tI")),d=u(n("8Kt/")),m={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function f(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var g=function(e){l(n,e);var t=c(n);function n(){return a(this,n),t.apply(this,arguments)}return r(n,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||m[e]||"An unexpected error has occurred";return s.default.createElement("div",{style:p.error},s.default.createElement(d.default,null,s.default.createElement("title",null,e,": ",t)),s.default.createElement("div",null,s.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?s.default.createElement("h1",{style:p.h1},e):null,s.default.createElement("div",{style:p.desc},s.default.createElement("h2",{style:p.h2},t,"."))))}}]),n}(s.default.Component);t.default=g,g.displayName="ErrorPage",g.getInitialProps=f,g.origGetInitialProps=f;var p={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"1VCc":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n("3slx")}])},"20a2":function(e,t,n){e.exports=n("nOHt")},"3slx":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return A})),n.d(t,"default",(function(){return P}));var a=n("q1tI"),r=n.n(a),l=n("20a2"),i=n("g4pe"),o=n.n(i),c=n("eomm"),u=n.n(c),s=n("vUxr"),d=n("qtBi"),m=n.n(d),f=n("wG+1"),g=r.a.createElement;function p(e){var t=e.content;return g("div",{className:"max-w-2xl mx-auto"},g("div",{className:m.a.markdown},g(f.RichText,{render:t})))}var h=n("03Ju"),v=n("YFqc"),x=n.n(v),y=r.a.createElement;function b(){return y("h2",{className:"text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8"},y(x.a,{href:"/"},y("a",{className:"hover:underline"},"Blog")),".")}var _=n("i2FJ"),E=n("65Hy"),w=n("zK7a"),N=r.a.createElement;function k(e){var t=e.children;return N("h1",{className:"text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left"},t)}var R=r.a.createElement;function S(e){var t=e.title,n=e.coverImage,a=e.date,l=e.author;return R(r.a.Fragment,null,R(k,null,t[0].text),R("div",{className:"hidden md:block md:mb-12"},l&&R(_.a,{name:l.name,picture:l.picture})),R("div",{className:"mb-8 md:mb-16 sm:mx-0"},R(w.a,{title:f.RichText.asText(t),url:n.url})),R("div",{className:"max-w-2xl mx-auto"},R("div",{className:"block md:hidden mb-6"},l&&R(_.a,{name:l.name,picture:l.picture})),R("div",{className:"mb-6 text-lg"},R(E.a,{dateString:a}))))}var C=r.a.createElement;function I(){return C("hr",{className:"border-accent-2 mt-28 mb-24"})}var F=n("CafY"),T=n("YSmr"),q=r.a.createElement,A=!0;function P(e){var t,n=e.post,a=e.morePosts,i=e.preview,c=Object(l.useRouter)();return c.isFallback||null!==n&&void 0!==n&&null!==(t=n._meta)&&void 0!==t&&t.uid?q(F.a,{preview:i},q(s.a,null,q(b,null),c.isFallback?q(k,null,"Loading\u2026"):q(r.a.Fragment,null,q("article",null,q(o.a,null,q("title",null,n.title[0].text," | ",T.a),q("meta",{property:"og:image",content:n.coverimage.url})),q(S,{title:n.title,coverImage:n.coverimage,date:n.date,author:n.author}),q(p,{content:n.content})),q(I,null),a&&a.length>0&&q(h.a,{posts:a})))):q(u.a,{statusCode:404})}},eomm:function(e,t,n){e.exports=n("/a9y")},qtBi:function(e,t,n){e.exports={markdown:"markdown-styles_markdown__1x9gM"}}},[["1VCc",0,2,1,3]]]);