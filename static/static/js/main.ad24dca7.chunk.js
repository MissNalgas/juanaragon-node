(this.webpackJsonpmain=this.webpackJsonpmain||[]).push([[0],[,function(e,t,s){e.exports={container:"Body_container__2UZIq",rightSide:"Body_rightSide__135Ej",textCard:"Body_textCard__3bwQ8",imageCont:"Body_imageCont__19jaO",appear:"Body_appear__3LQwY",image:"Body_image__19UJn",mobileImage:"Body_mobileImage__2zJz9"}},,,function(e,t,s){e.exports={landing:"Landing_landing__2YwRv",title:"Landing_title__1iqO5"}},function(e,t,s){e.exports={container:"Contact_container__3utcT",content:"Contact_content__2OFMR"}},,function(e,t,s){e.exports={topbar:"Topbar_topbar__12eVz"}},,,,,,function(e,t,s){},,function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),c=s(6),i=s.n(c),r=(s(13),s(7)),o=s.n(r),d=s(0);function l(e){return Object(d.jsx)("div",{className:o.a.topbar,children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"/curriculum",children:"Curriculum"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#contact",children:"Contact"})})]})})}var j=s(4),h=s.n(j);function b(e){return Object(d.jsxs)("div",{className:h.a.landing,children:[Object(d.jsx)("h1",{className:h.a.title,children:"Juan Aragon"}),Object(d.jsx)("p",{children:"Developer"})]})}var m=s(5),p=s.n(m);function u(e){return Object(d.jsx)("div",{id:"contact",className:p.a.container,children:Object(d.jsx)("h1",{className:p.a.content,children:Object(d.jsx)("a",{href:"mailto:me@juanaragon.co",children:"me@juanaragon.co"})})})}var x=s(8),O=s(1),g=s.n(O),f=s.p+"static/media/lnk.a7b3b4be.jpg",v=s.p+"static/media/passhidder.8a6ac61e.jpg",y=s.p+"static/media/chesting_table.95880721.jpg",_=s.p+"static/media/mssnapps.43e6492e.jpg",w=s.p+"static/media/pets.fd45f571.jpg",C=s.e(3).then(s.bind(null,16)),I=n.a.lazy((function(){return C})),k=function(e,t){var s=window.innerHeight/2;return Math.abs(e.getBoundingClientRect().y-s)<Math.abs(t.getBoundingClientRect().y-s)?e:t},N=[f,w,v,y,_,"https://mssnapplications.com/cats/cat1620165670025.jpg"];function B(){var e=Object(a.useState)(f),t=Object(x.a)(e,2),s=t[0],c=t[1];Object(a.useEffect)((function(){for(var e=[],t=0;t<N.length;t++)e[t]=new Image,e[t].src=N[t]}),[]),Object(a.useEffect)((function(){var e=document.getElementsByClassName("bodyCard"),t=function(t){for(var s=e[0],a=0;a<e.length;a++)s=k(s,e[a]);var n=s.attributes.mycontent.value;c(n)};return window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}}),[]);return Object(d.jsxs)("div",{className:g.a.container,children:[Object(d.jsxs)("div",{className:g.a.leftSide,children:[Object(d.jsxs)("div",{mycontent:"uno",className:g.a.textCard+" bodyCard",children:[Object(d.jsx)("img",{className:g.a.mobileImage,src:N[0],alt:"Lnk"}),Object(d.jsx)("h3",{children:"Lnk"}),Object(d.jsxs)("p",{children:["I'm a person that always uses multiple devices at the same time, so I needed a way to share urls between them. That's how ",Object(d.jsx)("i",{children:"Lnk"})," was born. The idea is simple, you paste the url in the app and it gets replicated to all the clients. If you click the notification the url opens automatically in a new tab."]}),Object(d.jsxs)("p",{children:["You can use this credentials to log in:",Object(d.jsx)("br",{}),Object(d.jsxs)("i",{children:[Object(d.jsx)("b",{children:"user: "}),"test@mssnapps.com"]}),Object(d.jsx)("br",{}),Object(d.jsxs)("i",{children:[Object(d.jsx)("b",{children:"password: "}),"ThisIsNotThePass"]}),Object(d.jsx)("br",{})]}),Object(d.jsx)("a",{href:"https://mssnapps.com/lnk",children:"live"})]}),Object(d.jsxs)("div",{mycontent:"dos",className:g.a.textCard+" bodyCard",children:[Object(d.jsx)("img",{className:g.a.mobileImage,src:N[1],alt:"pets"}),Object(d.jsx)("h3",{children:"Pets"}),Object(d.jsx)("p",{children:"In my Job we use VM's to work, so it's hard to share pictures of my pets with my coworkers. Not anymore."}),Object(d.jsx)("p",{children:"The gallery gets the pictures on scroll, and these are compressed so the app is designed to load fast on any device."}),Object(d.jsx)("a",{href:"https://mssnapps.com/pets",children:"live"})]}),Object(d.jsxs)("div",{mycontent:"tres",className:g.a.textCard+" bodyCard",children:[Object(d.jsx)("img",{className:g.a.mobileImage,src:N[2],alt:"passhidder"}),Object(d.jsx)("h3",{children:"PassHidder"}),Object(d.jsx)("p",{children:"I saw something like this somewhere on the web, so I turned it into an Angular module."}),Object(d.jsx)("a",{href:"https://www.npmjs.com/package/passhidder",children:"npm"})]}),Object(d.jsxs)("div",{mycontent:"cuatro",className:g.a.textCard+" bodyCard",children:[Object(d.jsx)("img",{className:g.a.mobileImage,src:N[3],alt:"chesting"}),Object(d.jsx)("h3",{children:"Chesting Table"}),Object(d.jsx)("p",{children:"I've always liked programming, and that's what I do in my free time. I made this mod as a joke, it basically is a chest that looks like crafting table, instead of having 27 slots, it has 10. I decided to take it even farther and made a furnace and a backpack."}),Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"Ps."})," I love the furnace idea because it cooks faster depending on how many items there are in the fuel slot."]}),Object(d.jsx)("p",{children:"1 slot = 1x speed, 3 slots = 3x speed."})]}),Object(d.jsxs)("div",{mycontent:"cinco",className:g.a.textCard+" bodyCard",children:[Object(d.jsx)("img",{className:g.a.mobileImage,src:N[4],alt:"mssnapps"}),Object(d.jsx)("h3",{children:"MssnApps"}),Object(d.jsx)("p",{children:"MssnApps is my web design agency. When I have the resources I plan to make it something unique."}),Object(d.jsx)("a",{href:"https://mssnapps.com/",children:"live"})]})]}),Object(d.jsx)("div",{className:g.a.rightSide,children:Object(d.jsx)(n.a.Suspense,{fallback:Object(d.jsx)("div",{children:"loading"}),children:Object(d.jsx)("div",{className:g.a.imageCont,children:function(e){switch(e){case"uno":return Object(d.jsx)(I,{src:N[0]});case"dos":return Object(d.jsx)(I,{src:N[1]});case"tres":return Object(d.jsx)(I,{src:N[2]});case"cuatro":return Object(d.jsx)(I,{src:N[3]});case"cinco":return Object(d.jsx)(I,{src:N[4]});case"seis":default:return Object(d.jsx)(I,{src:N[5]})}}(s)},s)})})]})}var L=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(l,{}),Object(d.jsx)(b,{}),Object(d.jsx)(B,{}),Object(d.jsx)(u,{})]})},T=function(e){e&&e instanceof Function&&s.e(4).then(s.bind(null,17)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),a(e),n(e),c(e),i(e)}))};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(L,{})}),document.getElementById("root")),T()}],[[15,1,2]]]);
//# sourceMappingURL=main.ad24dca7.chunk.js.map