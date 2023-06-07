"use strict";(self.webpackChunktechnology=self.webpackChunktechnology||[]).push([[608],{2127:function(e,t,n){n.d(t,{S:function(){return c}});var r=n(5984),i=n(4465),s=n(184),a="\u0434\u0456\u043b\u044c\u043d\u0438\u0446\u044f \u0437 \u0427\u041f\u0423",h="\u0448\u0442\u0430\u043c\u043f\u0443\u0432\u0430\u043b\u044c\u043d\u0430 \u0434\u0456\u043b\u044c\u043d\u0438\u0446\u044f",c=function(e){var t=e.onSubmit,n=e.onClose,c=e.productForUpdate,o=(0,r.x0)(),u=(0,r.x0)(),l=(0,r.x0)(),d=(0,r.x0)(),x=(0,i.a)(),p=x.map((function(e){return e.sizeSheet})).filter((function(e,t,n){return n.indexOf(e)===t})),f=x.map((function(e){return e.thicknessSheet})).filter((function(e,t,n){return n.indexOf(e)===t})),S={};c&&(S.name=c.name,S.number=c.number,S.weight=c.weight,S.quantity=c.quantity,S.workshop=c.workshop,S.thickness=c.material.thickness,S.sheet=c.material.sheet);return(0,s.jsxs)("form",{style:{display:" inline-grid"},onSubmit:function(e){e.preventDefault();var r=e.currentTarget,i=r.elements.name.value,s=r.elements.number.value,a=r.elements.weight.value,h=r.elements.quantity.value,c=r.elements.workshop.value,o=r.elements.thickness.value,u=r.elements.sheet.value;t({name:i,number:s,weight:a,quantity:h,workshop:c,thickness:o,sheet:u}),n(),r.reset()},children:[(0,s.jsx)("label",{htmlFor:o,children:"\u041d\u0430\u0439\u043c\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f"}),(0,s.jsx)("input",{type:"text",name:"name",id:o,defaultValue:S.name}),(0,s.jsx)("label",{htmlFor:u,children:"\u0414\u0435\u0446\u0438\u043c\u0430\u043b\u044c\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440"}),(0,s.jsx)("input",{type:"text",name:"number",id:u,defaultValue:S.number}),(0,s.jsx)("label",{htmlFor:d,children:"\u0412\u0430\u0433\u0430 \u0434\u0435\u0442\u0430\u043b\u0456, \u043a\u0433."}),(0,s.jsx)("input",{type:"number",name:"weight",min:"0",step:"0.001",id:d,defaultValue:S.weight}),(0,s.jsx)("label",{htmlFor:l,children:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0434\u0435\u0442\u0430\u043b\u0435\u0439 \u0437 \u043b\u0438\u0441\u0442\u0430, \u0448\u0442."}),(0,s.jsx)("input",{type:"number",name:"quantity",min:"1",id:l,defaultValue:S.quantity}),(0,s.jsx)("p",{children:"\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0432\u0438\u0440\u043e\u0431\u043d\u0438\u0447\u0443 \u0434\u0456\u043b\u044c\u043d\u0438\u0446\u044e"}),(0,s.jsxs)("label",{children:["\u0427\u041f\u0423",(0,s.jsx)("input",{type:"radio",name:"workshop",value:a,defaultChecked:S.workshop===a})]}),(0,s.jsxs)("label",{children:["\u0428\u0442\u0430\u043c\u043f\u043e\u0432\u043a\u0430",(0,s.jsx)("input",{type:"radio",name:"workshop",value:h,defaultChecked:S.workshop===h})]}),(0,s.jsxs)("label",{children:["\u0422\u043e\u0432\u0449\u0438\u043d\u0430 \u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b\u0443:",(0,s.jsx)("select",{name:"thickness",defaultValue:S.thickness,children:f.map((function(e){return(0,s.jsxs)("option",{value:e,children:[e," \u043c\u043c."]},(0,r.x0)())}))})]}),(0,s.jsxs)("label",{children:["\u0420\u043e\u0437\u043c\u0456\u0440 \u043b\u0438\u0441\u0442\u0430 \u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b\u0443:",(0,s.jsx)("select",{name:"sheet",defaultValue:S.sheet,children:p.map((function(e){return(0,s.jsx)("option",{value:e,children:e},(0,r.x0)())}))})]}),(0,s.jsx)("button",{type:"submit",children:c?(0,s.jsx)("span",{children:"\u0413\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u0434\u0430\u043d\u0456 \u043f\u0440\u043e \u0434\u0435\u0442\u0430\u043b\u044c"}):(0,s.jsx)("span",{children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0434\u0435\u0442\u0430\u043b\u044c \u0434\u043e \u0441\u043f\u0438\u0441\u043a\u0443"})})]})}},7796:function(e,t,n){n.d(t,{u:function(){return p}});var r,i,s=n(4164),a=n(3400),h=n(9823),c=n(168),o=n(225),u=o.Z.div(r||(r=(0,c.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n"]))),l=o.Z.div(i||(i=(0,c.Z)(["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  max-height: 450px;\n  height: 100%;\n\n  max-width: 450px;\n  width: 100%;\n  background-color: #fff;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),\n    0px 2px 1px rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  border: 2px solid #fff;\n"]))),d=n(184),x=document.querySelector("#modal-root"),p=function(e){var t=e.children,n=e.onClose;return(0,s.createPortal)((0,d.jsx)(u,{children:(0,d.jsxs)(l,{children:[t,(0,d.jsx)(a.Z,{"aria-label":"close",size:"medium",onClick:n,sx:{position:"absolute",top:3,right:3},children:(0,d.jsx)(h.Z,{fontSize:"medium",sx:{color:"#1976d2"}})})]})}),x)}},4465:function(e,t,n){n.d(t,{a:function(){return i}});var r=[{id:"1",sizeSheet:"2500x1250 \u041e\u0446.",thicknessSheet:"0.8",weightSheet:20.8},{id:"2",sizeSheet:"2500x1250 \u041e\u0446.",thicknessSheet:"1.0",weightSheet:26},{id:"3",sizeSheet:"2500x1250 \u041e\u0446.",thicknessSheet:"1.2",weightSheet:31.2},{id:"4",sizeSheet:"2500x1250 \u041e\u0446.",thicknessSheet:"1.5",weightSheet:39},{id:"5",sizeSheet:"2500x1250 \u041e\u0446.",thicknessSheet:"2.0",weightSheet:52},{id:"6",sizeSheet:"2500x1250 \u041e\u0446.",thicknessSheet:"2.5",weightSheet:65},{id:"7",sizeSheet:"2500x1250 \u041e\u0446.",thicknessSheet:"3.0",weightSheet:78},{id:"8",sizeSheet:"2500x1250 \u0421\u04423.",thicknessSheet:"0.8",weightSheet:20.8},{id:"9",sizeSheet:"2500x1250 \u0421\u04423.",thicknessSheet:"1.0",weightSheet:26},{id:"10",sizeSheet:"2500x1250 \u0421\u04423.",thicknessSheet:"1.2",weightSheet:31.2},{id:"11",sizeSheet:"2500x1250 \u0421\u04423.",thicknessSheet:"1.5",weightSheet:39},{id:"12",sizeSheet:"2500x1250 \u0421\u04423.",thicknessSheet:"2.0",weightSheet:52},{id:"13",sizeSheet:"2500x1250 \u0421\u04423.",thicknessSheet:"2.5",weightSheet:65},{id:"14",sizeSheet:"2500x1250 \u0421\u04423.",thicknessSheet:"3.0",weightSheet:78},{id:"15",sizeSheet:"2500x1250 AISI 430",thicknessSheet:"0.8",weightSheet:20},{id:"16",sizeSheet:"2500x1250 AISI 430",thicknessSheet:"1.0",weightSheet:25},{id:"17",sizeSheet:"2500x1250 AISI 430",thicknessSheet:"1.2",weightSheet:30},{id:"18",sizeSheet:"2500x1250 AISI 430",thicknessSheet:"1.5",weightSheet:37.5},{id:"19",sizeSheet:"2500x1250 AISI 430",thicknessSheet:"2.0",weightSheet:50},{id:"20",sizeSheet:"2500x1250 AISI 430",thicknessSheet:"2.5",weightSheet:62.5},{id:"21",sizeSheet:"2500x1250 AISI 430",thicknessSheet:"3.0",weightSheet:75},{id:"22",sizeSheet:"2500x1250 AISI 304",thicknessSheet:"0.8",weightSheet:20},{id:"23",sizeSheet:"2500x1250 AISI 304",thicknessSheet:"1.0",weightSheet:25},{id:"24",sizeSheet:"2500x1250 AISI 304",thicknessSheet:"1.2",weightSheet:30},{id:"25",sizeSheet:"2500x1250 AISI 304",thicknessSheet:"1.5",weightSheet:37.5},{id:"26",sizeSheet:"2500x1250 AISI 304",thicknessSheet:"2.0",weightSheet:50},{id:"27",sizeSheet:"2500x1250 AISI 304",thicknessSheet:"2.5",weightSheet:62.5},{id:"28",sizeSheet:"2500x1250 AISI 304",thicknessSheet:"3.0",weightSheet:75}],i=function(){return r}},608:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(4165),i=n(5861),s=n(9439),a=n(7689),h=n(1087),c=n(2791),o=n(5206),u=n(1614),l=n(4554),d=n(6151),x=n(890),p=n(383),f=n(1286),S=n(7394),m=n(2002),v=n(2127),g=n(7796),w=n(9891),k=n(184),Z=function(e){var t=e.detailsProduct;return(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"column",gap:1,mb:2},children:[(0,k.jsxs)(x.Z,{variant:"h5",component:"p",sx:{fontWeight:700},children:[t.name," ",t.number]}),(0,k.jsxs)(x.Z,{variant:"body1",sx:{fontWeight:700},children:["\u041d\u0430\u0439\u043c\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f:"," ",(0,k.jsx)(x.Z,{component:"span",children:t.name})]}),(0,k.jsxs)(x.Z,{variant:"body1",sx:{fontWeight:700},children:["\u0414\u0435\u0446\u0438\u043c\u0430\u043b\u044c\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440:"," ",(0,k.jsx)(x.Z,{component:"span",children:t.number})]}),(0,k.jsxs)(x.Z,{variant:"body1",sx:{fontWeight:700},children:["\u041c\u0430\u0442\u0435\u0440\u0456\u0430\u043b:"," ",(0,k.jsxs)(x.Z,{component:"span",children:[t.material.thickness,"\u0445",t.material.sheet]})]}),(0,k.jsxs)(x.Z,{variant:"body1",sx:{fontWeight:700},children:["\u0412\u0430\u0433\u0430 \u0434\u0435\u0442\u0430\u043b\u0456:"," ",(0,k.jsxs)(x.Z,{component:"span",children:[t.weight," \u043a\u0433."]})]}),(0,k.jsxs)(x.Z,{variant:"body1",sx:{fontWeight:700},children:["\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0434\u0435\u0442\u0430\u043b\u0435\u0439 \u043b\u0438\u0441\u0442\u0430:"," ",(0,k.jsxs)(x.Z,{component:"span",children:[t.quantity," \u0448\u0442.(",t.material.sheet,")"]})]}),(0,k.jsxs)(x.Z,{variant:"body1",sx:{fontWeight:700},children:["\u041d\u043e\u0440\u043c\u0430 \u0432\u0438\u0442\u0440\u0430\u0442\u0438:"," ",(0,k.jsxs)(x.Z,{component:"span",children:[(0,w.s)(t.quantity,t.material.sheet,t.material.thickness)," ","\u043a\u0433."]})]}),(0,k.jsxs)(x.Z,{variant:"body1",sx:{fontWeight:700},children:["\u0414\u0456\u043b\u044c\u043d\u0438\u0446\u044f:"," ",(0,k.jsx)(x.Z,{component:"span",children:t.workshop})]})]})})},b=function(){var e,t,n=(0,a.TH)(),w=(0,a.UO)().productId,b=(0,c.useState)(null),j=(0,s.Z)(b,2),y=j[0],z=j[1],I=(0,c.useState)(!1),A=(0,s.Z)(I,2),C=A[0],q=A[1],W=function(){q(!1)};(0,c.useEffect)((function(){function e(){return(e=(0,i.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.Tu(w);case 3:t=e.sent,z(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o.Am.error("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u0421\u043f\u0440\u043e\u0431\u0443\u0439 \u0437\u043d\u043e\u0432\u0443...");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[w]);var F=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.Zc(t);case 3:z(null),o.Am.success("\u0414\u0435\u0442\u0430\u043b\u044c \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u0430 i\u0437 \u0441\u043f\u0438\u0441\u043a\u0443"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o.Am.error("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u0421\u043f\u0440\u043e\u0431\u0443\u0439 \u0437\u043d\u043e\u0432\u0443...");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n,i,s,a,h,c,u,l,d,x;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,i=t.number,s=t.weight,a=t.quantity,h=t.workshop,c=t.thickness,u=t.sheet,l={name:n,number:i,weight:s,quantity:a,workshop:h,material:{thickness:c,sheet:u}},e.prev=2,e.next=5,m.ZD(w,l);case 5:d=e.sent,x=d.data,o.Am.success("\u0414\u0435\u0442\u0430\u043b\u044c \u043f\u0440\u043e \u0434\u0435\u0442\u0430\u043b\u044c \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u0456"),console.log("\u0442\u043e \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u0456 \u0447\u0438 \u043d\u0456"),console.log("data",x),z(x),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0),o.Am.error("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u0421\u043f\u0440\u043e\u0431\u0443\u0439 \u0437\u043d\u043e\u0432\u0443... \u043d\u0430 \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u0456"),console.log("\u0449\u043e \u0437\u0430 \u043f\u043e\u043c\u0438\u043b\u043a\u0430");case 18:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}(),L=null!==(e=null===(t=n.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(u.Z,{maxWidth:"xl",sx:{display:"flex",height:"100vh"},children:(0,k.jsxs)(l.Z,{sx:{borderRadius:4,mt:10,mb:2,p:2,flexGrow:1,backgroundColor:"#f5f5f5",boxShadow:"0 0 8px 0 rgba(0,0,0,.3)"},children:[(0,k.jsx)(d.Z,{component:h.rU,to:L,variant:"contained",sazi:"large",startIcon:(0,k.jsx)(S.Z,{}),sx:{mb:1},children:"\u041d\u0430\u0437\u0430\u0434"}),(0,k.jsx)(x.Z,{variant:"h4",sx:{fontWeight:700},children:"\u0422\u0435\u0445\u043d\u0456\u0447\u043d\u0438\u0439 \u043e\u043f\u0438\u0441 \u0434\u0435\u0442\u0430\u043b\u0456"}),y?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(Z,{detailsProduct:y}),(0,k.jsx)(d.Z,{variant:"contained",sazi:"large",onClick:function(){return F(w)},startIcon:(0,k.jsx)(p.Z,{}),sx:{width:"150px",mr:2},children:"B\u0438\u0434\u0430\u043b\u0438\u0442\u0438"}),(0,k.jsx)(d.Z,{variant:"contained",sazi:"large",onClick:function(){q(!0)},startIcon:(0,k.jsx)(f.Z,{}),sx:{width:"150px"},children:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"})]}):(0,k.jsx)(x.Z,{variant:"h5",component:"p",sx:{fontWeight:700},children:"\u0414\u0430\u043d\u0456 \u043f\u0440\u043e \u0434\u0435\u0442\u0430\u043b\u044c \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e..."})]})}),C&&(0,k.jsx)(g.u,{onClose:W,children:(0,k.jsx)(v.S,{onSubmit:V,onClose:W,productForUpdate:y})})]})}},2002:function(e,t,n){n.d(t,{N$:function(){return a},Tu:function(){return h},ZD:function(){return u},Zc:function(){return o},s2:function(){return c}});var r=n(4165),i=n(5861),s=n(1243);s.Z.defaults.baseURL="https://technology-backend.onrender.com/api";var a=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/products");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/products/".concat(t));case 2:return n=e.sent,i=n.data,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.post("/products",t);case 2:return n=e.sent,i=n.data,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.delete("/products/".concat(t));case 2:return n=e.sent,i=n.data,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t,n){var i,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.put("/products/".concat(t),n);case 2:return i=e.sent,a=i.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},9891:function(e,t,n){n.d(t,{s:function(){return i}});var r=(0,n(4465).a)();function i(e,t,n){return(r.find((function(e){return e.sizeSheet===t&&e.thicknessSheet===n})).weightSheet/e).toFixed(3)}},7394:function(e,t,n){var r=n(4836);t.Z=void 0;var i=r(n(5649)),s=n(184),a=(0,i.default)((0,s.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.Z=a},1286:function(e,t,n){var r=n(4836);t.Z=void 0;var i=r(n(5649)),s=n(184),a=(0,i.default)((0,s.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.Z=a}}]);
//# sourceMappingURL=608.8ed3f0f1.chunk.js.map