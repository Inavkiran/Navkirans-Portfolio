(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{30:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(9),a=c(3),i=c(1),s=c(0),l=Object(i.createContext)(),r=function(e){var t=e.children,c=Object(i.useState)("light"),n=Object(a.a)(c,2),r=n[0],o=n[1];Object(i.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(s.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://www.inavkiran.com",j="NS",b={name:"Navkiran Singh",role:"Full Stack Developer",social:{linkedin:"https://www.linkedin.com/in/inavkiran/",github:"https://github.com/Inavkiran",twitter:"https://twitter.com/inavkiran",calendly:"https://calendly.com/inavkiran"}},h=[{name:"Project 1",description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",stack:["SASS","TypeScript","React"],sourceCode:"https://github.com",livePreview:"https://github.com"},{name:"Project 2",description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",stack:["SASS","TypeScript","React"],sourceCode:"https://github.com",livePreview:"https://github.com"},{name:"Project 3",description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",stack:["SASS","TypeScript","React"],sourceCode:"https://github.com",livePreview:"https://github.com"}],u=["HTML","CSS","JavaScript","React","Node jS","Express","Mongo DB"],d="navkiran054@gmail.com",m=c(16),O=c.n(m),x=c(14),p=c.n(x),f=c(18),k=c.n(f),v=c(17),N=c.n(v),g=(c(30),function(){var e=Object(i.useContext)(l),t=Object(a.a)(e,1)[0],c=t.themeName,n=t.toggleTheme,r=Object(i.useState)(!1),o=Object(a.a)(r,2),j=o[0],b=o[1],m=function(){return b(!j)};return Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[h.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#projects",onClick:m,className:"link link--nav",children:"Projects"})}):null,u.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:m,className:"link link--nav",children:"Skills"})}):null,d?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:m,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:n,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===c?Object(s.jsx)(p.a,{}):Object(s.jsx)(O.a,{})}),Object(s.jsx)("button",{type:"button",onClick:m,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(s.jsx)(N.a,{}):Object(s.jsx)(k.a,{})})]})}),_=(c(34),function(){var e=o,t=j;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:e?Object(s.jsx)("a",{href:e,className:"link",children:t}):t}),Object(s.jsx)(g,{})]})}),w=c(11),S=c.n(w),C=c(19),y=c.n(C),P=c(21),E=c.n(P),A=c(20),q=c.n(A),R=(c(35),function(){var e=b.name,t=b.role,c=b.description,n=b.resume,a=b.social;return Object(s.jsxs)("div",{className:"about center",children:[e&&Object(s.jsxs)("h1",{children:["Hi, I am ",Object(s.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(s.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(s.jsx)("p",{className:"about__desc",children:c&&c}),Object(s.jsxs)("div",{className:"about__contact center",children:[n&&Object(s.jsx)("a",{href:n,children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),a&&Object(s.jsxs)(s.Fragment,{children:[a.github&&Object(s.jsx)("a",{href:a.github,"aria-label":"github",className:"link link--icon",children:Object(s.jsx)(S.a,{})}),a.linkedin&&Object(s.jsx)("a",{href:a.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(s.jsx)(y.a,{})})," ",a.twitter&&Object(s.jsx)("a",{href:a.twitter,"aria-label":"twitter",className:"link link--icon",children:Object(s.jsx)(q.a,{})}),a.calendly&&Object(s.jsx)("a",{href:a.calendly,"aria-label":"calendly",className:"link link--icon",children:Object(s.jsx)(E.a,{})})]})]})]})}),T=c(7),I=c.n(T),L=c(22),J=c.n(L),M=(c(37),function(e){var t=e.project;return Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(s.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(s.jsx)("li",{className:"project__stack-item",children:e},I()())}))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(s.jsx)(S.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(s.jsx)(J.a,{})})]})}),V=(c(38),function(){return h.length?Object(s.jsxs)("section",{id:"projects",className:"section projects",children:[Object(s.jsx)("h2",{className:"section__title",children:"Projects"}),Object(s.jsx)("div",{className:"projects__grid",children:h.map((function(e){return Object(s.jsx)(M,{project:e},I()())}))})]}):null}),B=(c(39),function(){return u.length?Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills"}),Object(s.jsx)("ul",{className:"skills__list",children:u.map((function(e){return Object(s.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},I()())}))})]}):null}),D=c(23),F=c.n(D),H=(c(40),function(){var e=Object(i.useState)(!1),t=Object(a.a)(e,2),c=t[0],n=t[1];return Object(i.useEffect)((function(){var e=function(){return window.pageYOffset>500?n(!0):n(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),c?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top",children:Object(s.jsx)(F.a,{fontSize:"large"})})}):null}),z=(c(41),function(){return d?Object(s.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact"}),Object(s.jsx)("a",{href:"mailto:".concat(d),children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),Y=(c(42),function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("a",{href:"https://www.inavkiran.com",className:"link footer__link",children:"Created by Navkiran Singh and Raj Shekhar"})})}),G=(c(43),function(){var e=Object(i.useContext)(l),t=Object(a.a)(e,1)[0].themeName;return Object(s.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(s.jsx)(_,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(R,{}),Object(s.jsx)(V,{}),Object(s.jsx)(B,{}),Object(s.jsx)(z,{})]}),Object(s.jsx)(H,{}),Object(s.jsx)(Y,{})]})});c(44);Object(n.render)(Object(s.jsx)(r,{children:Object(s.jsx)(G,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.2e29a2b2.chunk.js.map