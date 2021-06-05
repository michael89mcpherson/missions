(this.webpackJsonpmissions=this.webpackJsonpmissions||[]).push([[0],{21:function(e,n,t){"use strict";var c=t(0),i=t(1),s=t(16),l=t(3),a=t(12),r=Object({NODE_ENV:"production",PUBLIC_URL:"/missions",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GA_TRACKING_ID:"UA-68649021-1"}),o=r.NODE_ENV,j=r.REACT_APP_GA_TRACKING_ID;"production"===o&&a.a.initialize(j);var b=function(){var e=Object(l.f)().pathname;return Object(i.useEffect)((function(){"production"===o&&(a.a.set({page:e}),a.a.pageview(e))}),[e]),null},u=t(5),d=t(22),h=[{index:!0,label:"I Fly Missions",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Stats",path:"/stats"},{label:"Contact",path:"/contact"}],m=Object(i.lazy)((function(){return t.e(5).then(t.t.bind(null,172,7))})),O=function(){var e=Object(i.useState)(!1),n=Object(d.a)(e,2),t=n[0],s=n[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:t?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return s(!t)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return s(!t)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(m,{right:!0,isOpen:t,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:h.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,onClick:function(){return s(!t)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},x=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:h.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(u.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:h.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(O,{})]})},p=t(25),f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(u.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("/missions","/images/me.jpg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"I Fly Missions"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:iflymissions@gmail.com",children:"iflymissions@gmail.com"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsx)("p",{children:"Hi, I'm Adrienne, an engineer with more than a decade of experience in aerospace. I have an FAA part 107 commercial drone license and now offer my expertise to you."}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(u.b,{to:"/about",className:"button",children:"About Me"}):Object(c.jsx)(u.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(p.a,{}),Object(c.jsxs)("p",{className:"copyright",children:["\xa9 I Fly Missions ",Object(c.jsx)(u.b,{to:"/",children:"iflymissions.com"}),"."]})]})]})},g=function(){var e=Object(l.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},y=function(e){return Object(c.jsxs)(s.b,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(g,{}),Object(c.jsxs)(s.a,{titleTemplate:"%s | I Fly Missions",defaultTitle:"I Fly Missions",children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(x,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};y.defaultProps={children:null,fullPage:!1,title:null,description:"I Fly Missions business website."};n.a=y},25:function(e,n,t){"use strict";var c=t(0),i=(t(1),t(29)),s=t(30),l=t(31),a=t(32),r=t(33),o=t(34),j=t(35),b=t(36),u=[{link:"https://github.com/iflymissions",label:"Github",icon:s.faGithub},{link:"https://facebook.com/",label:"Facebook",icon:l.faFacebookF},{link:"https://www.instagram.com/iflymissions/",label:"Instagram",icon:a.faInstagram},{link:"https://www.linkedin.com/in/adrienne-m-15241016",label:"LinkedIn",icon:r.faLinkedinIn},{link:"https://angel.co/",label:"Angel List",icon:o.faAngellist},{link:"https://twitter.com/meyers_adrienne",label:"Twitter",icon:j.faTwitter},{link:"mailto:iflymissions@gmail.com",label:"Email",icon:b.faEnvelope}];n.a=function(){return Object(c.jsx)("ul",{className:"icons",children:u.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(i.a,{icon:e.icon})})},e.label)}))})}},49:function(e,n,t){},50:function(e,n,t){"use strict";t.r(n);var c=t(0),i=t(1),s=t.n(i),l=t(15),a=t(5),r=t(3),o=t(21),j=(t(49),Object(i.lazy)((function(){return Promise.all([t.e(2),t.e(8)]).then(t.bind(null,169))}))),b=Object(i.lazy)((function(){return t.e(9).then(t.bind(null,176))})),u=Object(i.lazy)((function(){return t.e(10).then(t.bind(null,170))})),d=Object(i.lazy)((function(){return t.e(11).then(t.bind(null,171))})),h=Object(i.lazy)((function(){return t.e(7).then(t.bind(null,175))})),m=Object(i.lazy)((function(){return t.e(6).then(t.bind(null,173))})),O=Object(i.lazy)((function(){return Promise.all([t.e(4),t.e(12)]).then(t.bind(null,174))})),x=function(){return Object(c.jsx)(a.a,{basename:"/missions",children:Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(o.a,{}),children:Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",component:u}),Object(c.jsx)(r.a,{path:"/about",component:j}),Object(c.jsx)(r.a,{path:"/projects",component:h}),Object(c.jsx)(r.a,{path:"/stats",component:O}),Object(c.jsx)(r.a,{path:"/contact",component:b}),Object(c.jsx)(r.a,{path:"/resume",component:m}),Object(c.jsx)(r.a,{component:d,status:404})]})})})},p=function(){return Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(x,{})})},f=document.getElementById("root");f.hasChildNodes()?Object(l.hydrate)(Object(c.jsx)(p,{}),f):Object(l.render)(Object(c.jsx)(p,{}),f)}},[[50,1,3]]]);
//# sourceMappingURL=main.619f43a9.chunk.js.map