(this["webpackJsonppoke-game"]=this["webpackJsonppoke-game"]||[]).push([[0],{93:function(e,t,c){},98:function(e,t,c){"use strict";c.r(t);var a=c(4),n=c(0),r=c(11),i=c.n(r),o=c(17),s=c(39),j=c(67),l=c(19),b=(c(93),function(e){return function(t){t({type:"GET_INFO",payload:e})}}),d=c(18),u=c(13),O=c(140),m=c(143),h=c(74),f=c(145),p=c(146),g=c(147),x=c(148),v=c(149),y=c(150),k=c(151),N=Object(O.a)({button:{background:"black",color:"white",margin:10,marginLeft:0,"&:hover":{background:"white",color:"black"}}}),S=function(){var e=N(),t=Object(o.c)((function(e){return e.records})),c=Object.keys(t).map((function(e){return{name:e,time:t[e].time,score:t[e].score}})).sort((function(e,t){return t.score-e.score}));return Object(a.jsxs)("div",{children:[Object(a.jsx)(d.b,{to:"/game",children:Object(a.jsx)(m.a,{variant:"contained",color:"primary",className:e.button,children:"Restart"})}),Object(a.jsx)(d.b,{to:"/",children:Object(a.jsx)(m.a,{variant:"contained",className:e.button,color:"primary",children:"reset game"})}),Object(a.jsx)(h.a,{variant:"h3",children:"Game Score"}),Object(a.jsx)(f.a,{component:p.a,children:Object(a.jsxs)(g.a,{size:"small","aria-label":"a dense table",children:[Object(a.jsx)(x.a,{children:Object(a.jsxs)(v.a,{children:[Object(a.jsx)(y.a,{children:"Name"}),Object(a.jsx)(y.a,{children:"Time"}),Object(a.jsx)(y.a,{children:"Score"})]})}),Object(a.jsx)(k.a,{children:c.map((function(e){return Object(a.jsxs)(v.a,{children:[Object(a.jsx)(y.a,{component:"th",scope:"row",children:e.name}),Object(a.jsx)(y.a,{component:"th",scope:"row",children:e.time}),Object(a.jsx)(y.a,{component:"th",scope:"row",children:e.score})]},e.name)}))})]})})]})},w=c.p+"static/media/aa.c16240f3.png",E=c.p+"static/media/nirvana.fb4f99fb.png",C=c.p+"static/media/kish.a839ca22.png",G=c.p+"static/media/tfk.a0b6f1c9.png",I=c.p+"static/media/am.c1caf580.png",R=c.p+"static/media/tdg.31e7ba33.png",T=c.p+"static/media/gd.a5a3bd8f.png",D=c.p+"static/media/lp.f3278b45.png",J=c(43),M=c(23),P=c(152),_=c.p+"static/media/fon.df6f7535.png",B=Object(O.a)({img:{height:"30%",width:"auto"},logo:{height:"60%",width:"auto"},container:{margin:0,width:"100%",padding:20}}),H=function(e){var t=e.item,c=e.onClick,r=e.id,i=e.value,o=e.done,s=B(),j=Object(n.useState)(!1),l=Object(M.a)(j,2),b=l[0],d=l[1];Object(n.useEffect)((function(){return u()}),[i,o]);var u=function(){var e=i.map((function(e){return e.id})).indexOf(r),c=o.indexOf(t);d(-1!==e||-1!==c)};return Object(a.jsx)(P.a,{item:!0,xs:3,className:s.container,onClick:function(){b||c(t,r)},children:Object(a.jsx)("div",{className:b?"flip-container active":"flip-container",children:Object(a.jsxs)("div",{className:"flipper",children:[Object(a.jsx)(p.a,{className:"front",children:Object(a.jsx)("img",{className:s.logo,src:_})}),Object(a.jsx)(p.a,{className:"back",children:Object(a.jsx)("img",{className:s.img,src:t})})]})})})},A=c(45),F=c(161),L=c(157),W=c(155),q=c(156),z=c(154),V=function(e){var t=e.open,c=e.errors,r=e.time,i=e.restart,s=Object(o.b)(),j=Object(o.c)((function(e){return e})),b=r/1e3,u=100-.25*(b+5*c)<0?0:100-.25*(b+5*c),O=Object(l.a)(Object(l.a)({},j.records),{},Object(A.a)({},j.lastPlayer,{score:Math.round(u),time:b}));return Object(n.useEffect)((function(){s(function(e){return function(t){t({type:"CHANGE_RECORDS",payload:e})}}(O))}),[]),Object(n.useEffect)((function(){return localStorage.setItem("game",JSON.stringify(Object(l.a)(Object(l.a)({},j),{},{records:O})))}),[]),Object(a.jsxs)(F.a,{open:t,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(a.jsx)(z.a,{id:"alert-dialog-title",children:"You made it!"}),Object(a.jsx)(W.a,{children:Object(a.jsxs)(q.a,{id:"alert-dialog-description",children:[Object(a.jsxs)("div",{children:["errors: ",c]}),Object(a.jsxs)("div",{children:["time: ",b," s"]}),Object(a.jsxs)("div",{children:["score: ",Math.round(u)]})]})}),Object(a.jsxs)(L.a,{children:[Object(a.jsx)(d.b,{to:"/game",children:Object(a.jsx)(m.a,{color:"primary",onClick:i,children:"Restart Game"})}),Object(a.jsx)(d.b,{to:"/",children:Object(a.jsx)(m.a,{color:"primary",children:"Reset Game"})}),Object(a.jsx)(d.b,{to:"/records",children:Object(a.jsx)(m.a,{color:"primary",children:"Results"})})]})]})},Y=function(e){var t=e.array,c=Object(n.useState)([]),r=Object(M.a)(c,2),i=r[0],o=r[1],s=Object(n.useState)(Object(J.a)(t)),j=Object(M.a)(s,2),l=j[0],b=j[1],d=Object(n.useState)(0),u=Object(M.a)(d,2),O=u[0],m=u[1],h=Object(n.useState)(!1),f=Object(M.a)(h,2),p=f[0],g=f[1],x=Object(n.useState)(0),v=Object(M.a)(x,2),y=v[0],k=v[1];Object(n.useEffect)((function(){l.length===t.length/2&&(k((new Date).getTime()-y),g(!0))}),[l]),Object(n.useEffect)((function(){return N()}),[]),Object(n.useEffect)((function(){2===i.length&&(i[0].id!==i[1].id&&i[0].value===i[1].value?b([].concat(Object(J.a)(l),[i[0].value])):m(O+1),setTimeout((function(){return o([])}),800))}),[i]);var N=function(){setTimeout((function(){b([]);var e=(new Date).getTime();k(e),o([])}),5e3)},S=function(e,t){i.length<2&&o([].concat(Object(J.a)(i),[{id:t,value:e}]))};return Object(a.jsxs)("div",{children:[Object(a.jsx)(P.a,{container:!0,spacing:3,justify:"center",children:t.map((function(e,t){return Object(a.jsx)(H,{id:t,item:e,done:l,onClick:S,value:i},t)}))}),p&&Object(a.jsx)(V,{open:p,errors:O,time:y,restart:function(){b(Object(J.a)(t)),g(!1),m(0),k(0),N()}})]})},K=Object(O.a)({button:{background:"black",color:"white",marginBottom:10,"&:hover":{background:"white",color:"black"}}}),Q=function(){var e=[w,E,C,G,I,R,T,D],t=K();return Object(a.jsxs)("div",{children:[Object(a.jsx)(d.b,{to:"/",children:Object(a.jsx)(m.a,{variant:"contained",color:"primary",className:t.button,children:"reset game"})}),Object(a.jsx)(Y,{array:function(e){for(var t=e,c=t.length-1;c>0;c--){var a=Math.floor(Math.random()*(c+1)),n=[t[a],t[c]];t[c]=n[0],t[a]=n[1]}return t}(e.concat(e))})]})},U=c(158),X=c(159),Z=c.p+"static/media/logo.df6f7535.png",$=Object(O.a)({root:{width:"100%",minHeight:"85vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},button:{background:"black",color:"white",margin:25,"&:hover":{background:"white",color:"black"}},logo:{maxWidth:"90%"}}),ee=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e})),c=Object(n.useState)([]),r=Object(M.a)(c,2),i=r[0],s=r[1],j=t.lastPlayer||"",u=Object(n.useState)(""),O=Object(M.a)(u,2),h=O[0],f=O[1],p=function(){-1===i.indexOf(h)&&i.push(h);var c=Object(l.a)(Object(l.a)({},t),{},{players:i,lastPlayer:h});localStorage.setItem("game",JSON.stringify(c)),e(b(c))};Object(n.useEffect)((function(){t.players&&s(t.players)}),[]);var g=$();return Object(a.jsxs)("div",{className:g.root,children:[Object(a.jsx)("img",{src:Z,className:g.logo}),Object(a.jsx)("br",{}),Object(a.jsx)(X.a,{value:j,onChange:function(e,t){f(t)},inputValue:h||"",onInputChange:function(e,t){f(t)},freeSolo:!0,id:"free-solo-demo",options:i.map((function(e){return e})),style:{width:"300px"},renderInput:function(e){return Object(a.jsx)(U.a,Object(l.a)(Object(l.a)({},e),{},{label:"Who are you?",margin:"normal",variant:"outlined"}))}}),h?Object(a.jsx)(d.b,{to:"/game",children:Object(a.jsx)(m.a,{variant:"contained",color:"primary",className:g.button,onClick:p,children:"start"})}):Object(a.jsx)(m.a,{variant:"contained",disabled:!0,className:g.button,children:"start"})]})};var te=function(){var e=Object(o.c)((function(e){return e}));return console.log("LOOOG",Boolean(e.records)),Object(a.jsx)(d.a,{children:Object(a.jsxs)(u.d,{children:[Object(a.jsx)(u.b,{path:"/",exact:!0,component:ee}),e.lastPlayer&&Object(a.jsx)(u.b,{path:"/game",component:Q}),Boolean(e.records)&&Object(a.jsx)(u.b,{path:"/records",component:S}),Object(a.jsx)(u.a,{to:"/"})]})})};var ce=function(){var e=Object(o.b)(),t=JSON.parse(localStorage.getItem("game"))||{};return e(b(t)),Object(a.jsx)(te,{})},ae=Object(s.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_INFO":return t.payload;case"CHANGE_RECORDS":return Object(l.a)(Object(l.a)({},e),{},{records:t.payload});default:return e}}),{},Object(s.a)(j.a));i.a.render(Object(a.jsx)(o.a,{store:ae,children:Object(a.jsx)(ce,{})}),document.querySelector("#root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.21f86a1d.chunk.js.map