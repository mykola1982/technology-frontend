"use strict";(self.webpackChunktechnology=self.webpackChunktechnology||[]).push([[234],{2127:function(e,t,n){n.d(t,{S:function(){return c}});var r=n(5984),i=n(4465),s=n(184),h="\u0414\u0456\u043b\u044c\u043d\u0438\u0446\u044f \u0437 \u0427\u041f\u0423",a="\u0428\u0442\u0430\u043c\u043f\u043e\u0432\u043e\u0447\u043d\u0430 \u0434\u0456\u043b\u044c\u043d\u0438\u0446\u044f",c=function(e){var t=e.onSubmit,n=e.onClose,c=e.productForUpdate,u=(0,r.x0)(),o=(0,r.x0)(),l=(0,r.x0)(),d=(0,r.x0)(),p=(0,i.a)(),x=p.map((function(e){return e.sizeSheet})).filter((function(e,t,n){return n.indexOf(e)===t})),f=p.map((function(e){return e.thicknessSheet})).filter((function(e,t,n){return n.indexOf(e)===t}));console.log("productForUpdate \u0432  \u0444\u043e\u0440\u043c\u0456",c);var S={};c&&(S.name=c.name,S.number=c.number,S.weight=c.weight,S.quantity=c.quantity,S.workshop=c.workshop,S.thickness=c.material.thickness,S.sheet=c.material.sheet);return(0,s.jsxs)("form",{style:{display:" inline-grid"},onSubmit:function(e){e.preventDefault();var r=e.currentTarget,i=r.elements.name.value,s=r.elements.number.value,h=r.elements.weight.value,a=r.elements.quantity.value,c=r.elements.workshop.value,u=r.elements.thickness.value,o=r.elements.sheet.value;t({name:i,number:s,weight:h,quantity:a,workshop:c,thickness:u,sheet:o}),n(),r.reset()},children:[(0,s.jsx)("label",{htmlFor:u,children:"\u041d\u0430\u0439\u043c\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f"}),(0,s.jsx)("input",{type:"text",name:"name",id:u,defaultValue:S.name}),(0,s.jsx)("label",{htmlFor:o,children:"\u0414\u0435\u0446\u0438\u043c\u0430\u043b\u044c\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440"}),(0,s.jsx)("input",{type:"text",name:"number",id:o,defaultValue:S.number}),(0,s.jsx)("label",{htmlFor:d,children:"\u0412\u0430\u0433\u0430 \u0434\u0435\u0442\u0430\u043b\u0456, \u043a\u0433."}),(0,s.jsx)("input",{type:"number",name:"weight",min:"0",step:"0.001",id:d,defaultValue:S.weight}),(0,s.jsx)("label",{htmlFor:l,children:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0434\u0435\u0442\u0430\u043b\u0435\u0439 \u0437 \u043b\u0438\u0441\u0442\u0430, \u0448\u0442."}),(0,s.jsx)("input",{type:"number",name:"quantity",min:"1",id:l,defaultValue:S.quantity}),(0,s.jsx)("p",{children:"\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0432\u0438\u0440\u043e\u0431\u043d\u0438\u0447\u0443 \u0434\u0456\u043b\u044c\u043d\u0438\u0446\u044e"}),(0,s.jsxs)("label",{children:["\u0427\u041f\u0423",(0,s.jsx)("input",{type:"radio",name:"workshop",value:h,defaultChecked:S.workshop===h})]}),(0,s.jsxs)("label",{children:["\u0428\u0442\u0430\u043c\u043f\u043e\u0432\u043a\u0430",(0,s.jsx)("input",{type:"radio",name:"workshop",value:a,defaultChecked:S.workshop===a})]}),(0,s.jsxs)("label",{children:["\u0422\u043e\u0432\u0449\u0438\u043d\u0430 \u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b\u0443:",(0,s.jsx)("select",{name:"thickness",defaultValue:S.thickness,children:f.map((function(e){return(0,s.jsxs)("option",{value:e,children:[e," \u043c\u043c."]},(0,r.x0)())}))})]}),(0,s.jsxs)("label",{children:["\u0420\u043e\u0437\u043c\u0456\u0440 \u043b\u0438\u0441\u0442\u0430 \u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b\u0443:",(0,s.jsx)("select",{name:"sheet",defaultValue:S.sheet,children:x.map((function(e){return(0,s.jsx)("option",{value:e,children:e},(0,r.x0)())}))})]}),(0,s.jsx)("button",{type:"submit",children:c?(0,s.jsx)("span",{children:"\u0413\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u0434\u0430\u043d\u0456 \u043f\u0440\u043e \u0434\u0435\u0442\u0430\u043b\u044c"}):(0,s.jsx)("span",{children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0434\u0435\u0442\u0430\u043b\u044c \u0434\u043e \u0441\u043f\u0438\u0441\u043a\u0443"})})]})}},7796:function(e,t,n){n.d(t,{u:function(){return x}});var r,i,s=n(4164),h=n(3400),a=n(9823),c=n(168),u=n(225),o=u.Z.div(r||(r=(0,c.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n"]))),l=u.Z.div(i||(i=(0,c.Z)(["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  max-height: 450px;\n  height: 100%;\n\n  max-width: 450px;\n  width: 100%;\n  background-color: #fff;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),\n    0px 2px 1px rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  border: 2px solid #fff;\n"]))),d=n(184),p=document.querySelector("#modal-root"),x=function(e){var t=e.children,n=e.onClose;return(0,s.createPortal)((0,d.jsx)(o,{children:(0,d.jsxs)(l,{children:[t,(0,d.jsx)(h.Z,{"aria-label":"close",size:"medium",onClick:n,sx:{position:"absolute",top:3,right:3},children:(0,d.jsx)(a.Z,{fontSize:"medium",sx:{color:"#1976d2"}})})]})}),p)}},4465:function(e,t,n){n.d(t,{a:function(){return i}});var r=[{id:"1",sizeSheet:"2500x1250 \u041e\u0446.",thicknessSheet:"0.8",weightSheet:20.8},{id:"2",sizeSheet:"2500x1250 \u041e\u0446.",thicknessSheet:"1.0",weightSheet:26},{id:"3",sizeSheet:"2500x1250 \u041e\u0446.",thicknessSheet:"1.2",weightSheet:31.2},{id:"4",sizeSheet:"2500x1250 \u041e\u0446.",thicknessSheet:"1.5",weightSheet:39},{id:"5",sizeSheet:"2500x1250 \u041e\u0446.",thicknessSheet:"2.0",weightSheet:52},{id:"6",sizeSheet:"2500x1250 \u041e\u0446.",thicknessSheet:"2.5",weightSheet:65},{id:"7",sizeSheet:"2500x1250 \u041e\u0446.",thicknessSheet:"3.0",weightSheet:78},{id:"8",sizeSheet:"2500x1250 \u0421\u04423.",thicknessSheet:"0.8",weightSheet:20.8},{id:"9",sizeSheet:"2500x1250 \u0421\u04423.",thicknessSheet:"1.0",weightSheet:26},{id:"10",sizeSheet:"2500x1250 \u0421\u04423.",thicknessSheet:"1.2",weightSheet:31.2},{id:"11",sizeSheet:"2500x1250 \u0421\u04423.",thicknessSheet:"1.5",weightSheet:39},{id:"12",sizeSheet:"2500x1250 \u0421\u04423.",thicknessSheet:"2.0",weightSheet:52},{id:"13",sizeSheet:"2500x1250 \u0421\u04423.",thicknessSheet:"2.5",weightSheet:65},{id:"14",sizeSheet:"2500x1250 \u0421\u04423.",thicknessSheet:"3.0",weightSheet:78},{id:"15",sizeSheet:"2500x1250 AISI 430",thicknessSheet:"0.8",weightSheet:20},{id:"16",sizeSheet:"2500x1250 AISI 430",thicknessSheet:"1.0",weightSheet:25},{id:"17",sizeSheet:"2500x1250 AISI 430",thicknessSheet:"1.2",weightSheet:30},{id:"18",sizeSheet:"2500x1250 AISI 430",thicknessSheet:"1.5",weightSheet:37.5},{id:"19",sizeSheet:"2500x1250 AISI 430",thicknessSheet:"2.0",weightSheet:50},{id:"20",sizeSheet:"2500x1250 AISI 430",thicknessSheet:"2.5",weightSheet:62.5},{id:"21",sizeSheet:"2500x1250 AISI 430",thicknessSheet:"3.0",weightSheet:75},{id:"22",sizeSheet:"2500x1250 AISI 304",thicknessSheet:"0.8",weightSheet:20},{id:"23",sizeSheet:"2500x1250 AISI 304",thicknessSheet:"1.0",weightSheet:25},{id:"24",sizeSheet:"2500x1250 AISI 304",thicknessSheet:"1.2",weightSheet:30},{id:"25",sizeSheet:"2500x1250 AISI 304",thicknessSheet:"1.5",weightSheet:37.5},{id:"26",sizeSheet:"2500x1250 AISI 304",thicknessSheet:"2.0",weightSheet:50},{id:"27",sizeSheet:"2500x1250 AISI 304",thicknessSheet:"2.5",weightSheet:62.5},{id:"28",sizeSheet:"2500x1250 AISI 304",thicknessSheet:"3.0",weightSheet:75}],i=function(){return r}},2234:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(3433),i=n(4165),s=n(5861),h=n(9439),a=n(9891),c=n(7689),u=n(1087),o=n(2791),l=n(5206),d=n(1614),p=n(4554),x=n(6151),f=n(2002),S=n(2127),m=n(7796),k=n(184),w=function(){var e,t,n=(0,c.TH)(),w=(0,c.UO)().productId,v=(0,o.useState)(null),g=(0,h.Z)(v,2),b=g[0],j=g[1],Z=(0,o.useState)(!1),y=(0,h.Z)(Z,2),z=y[0],I=y[1],A=function(){I(!1)};(0,o.useEffect)((function(){function e(){return(e=(0,s.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.Tu(w);case 3:t=e.sent,j(t.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[w,b]);var C=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.Zc(t);case 3:j(null),l.Am.success("\u0414\u0435\u0442\u0430\u043b\u044c \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u0430 i\u0437 \u0441\u043f\u0438\u0441\u043a\u0443"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l.Am.error("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u0421\u043f\u0440\u043e\u0431\u0443\u0439 \u0437\u043d\u043e\u0432\u0443...");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t){var n,s,h,a,c,u,o,l,d;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,s=t.number,h=t.weight,a=t.quantity,c=t.workshop,u=t.thickness,o=t.sheet,l={name:n,number:s,weight:h,quantity:a,workshop:c,material:{thickness:u,sheet:o}},e.prev=2,e.next=5,f.ZD(w,l);case 5:d=e.sent,j.apply(void 0,(0,r.Z)(d)),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(2);case 11:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),F=null!==(e=null===(t=n.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(d.Z,{maxWidth:"xl",sx:{display:"flex",height:"100vh"},children:(0,k.jsxs)(p.Z,{sx:{borderRadius:4,mt:10,mb:2,p:2,flexGrow:1,backgroundColor:"#f5f5f5",boxShadow:"0 0 8px 0 rgba(0,0,0,.3)"},children:[(0,k.jsx)(x.Z,{component:u.rU,to:F,variant:"contained",sazi:"large",children:"\u041d\u0430\u0437\u0430\u0434"}),b?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)("div",{children:["\u0422\u0443\u0442 \u0431\u0443\u0434\u0435 \u0434\u0435\u043b\u044c\u043d\u0438\u0439 \u043e\u043f\u0438\u0441 \u043f\u0440\u043e \u0434\u0435\u0442\u0430\u043b\u044c",(0,k.jsxs)("h2",{children:["\u041e\u043f\u0438\u0441 \u0434\u0435\u0442\u0430\u043b\u0456 - ",b.name," ",b.number]}),(0,k.jsxs)("p",{children:["\u041d\u0430\u0439\u043c\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f - ",b.name]}),(0,k.jsxs)("p",{children:["\u0414\u0435\u0446\u0438\u043c\u0430\u043b\u044c\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440 - ",b.number]}),(0,k.jsxs)("p",{children:["\u0414\u0456\u043b\u044c\u043d\u0438\u0446\u044f \u0432\u0438\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u043d\u044f -",b.workshop]}),(0,k.jsxs)("p",{children:["\u041c\u0430\u0442\u0435\u0440\u0456\u0430\u043b -",b.material.sheet," "]}),(0,k.jsxs)("p",{children:["\u041d\u043e\u0440\u043c\u0430 \u0432\u0438\u0442\u0440\u0430\u0442\u0438-"," ",(0,a.s)(b.quantity,b.material.sheet,b.material.thickness)]}),(0,k.jsxs)("p",{children:["\u0422\u043e\u0432\u0449\u0438\u043d\u0430 \u043c\u0435\u0442\u0430\u043b\u0443-",b.material.thickness," \u043c\u043c."]}),(0,k.jsxs)("p",{children:["\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0434\u0435\u0442\u0430\u043b\u0435\u0439 \u043b\u0438\u0441\u0442\u0430-",b.quantity," \u0448\u0442."]}),(0,k.jsxs)("p",{children:[" \u0412\u0430\u0433\u0430 \u0434\u0435\u0442\u0430\u043b\u0456-",b.weight,"\u043a\u0433."]})]}),(0,k.jsx)(x.Z,{component:u.rU,variant:"contained",sazi:"large",onClick:function(){return C(w)},children:"B\u0438\u0434\u0430\u043b\u0438\u0442\u0438"}),(0,k.jsx)(x.Z,{component:u.rU,variant:"contained",sazi:"large",onClick:function(){I(!0)},children:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"})]}):(0,k.jsx)("p",{children:"\u0414\u0430\u043d\u0456 \u043f\u0440\u043e \u0434\u0435\u0442\u0430\u043b\u044c \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u0456..."})]})}),z&&(0,k.jsx)(m.u,{onClose:A,children:(0,k.jsx)(S.S,{onSubmit:q,onClose:A,productForUpdate:b})})]})}},2002:function(e,t,n){n.d(t,{N$:function(){return h},Tu:function(){return a},ZD:function(){return o},Zc:function(){return u},s2:function(){return c}});var r=n(4165),i=n(5861),s=n(1243);s.Z.defaults.baseURL="https://technology-backend.onrender.com/api";var h=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/products");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/products/".concat(t));case 2:return n=e.sent,i=n.data,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.post("/products",t);case 2:return n=e.sent,i=n.data,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.delete("/products/".concat(t));case 2:return n=e.sent,i=n.data,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t,n){var i,h;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.put("/products/".concat(t),n);case 2:return i=e.sent,h=i.data,e.abrupt("return",h);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},9891:function(e,t,n){n.d(t,{s:function(){return i}});var r=(0,n(4465).a)();function i(e,t,n){return(r.find((function(e){return e.sizeSheet===t&&e.thicknessSheet===n})).weightSheet/e).toFixed(3)}}}]);
//# sourceMappingURL=234.7f7602e2.chunk.js.map