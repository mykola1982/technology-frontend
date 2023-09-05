"use strict";(self.webpackChunktechnology=self.webpackChunktechnology||[]).push([[177],{9561:function(e,t,n){n.d(t,{o:function(){return k}});var r=n(5984),i=n(6727),s=n(5705),a=n(8096),o=n(4994),h=n(7133),u=n(765),c=n(4989),l=n(1419),d=n(7071),p=n(9891),x=n(6151),f=n(4465),m=n(3420),S="\u0434\u0456\u043b\u044c\u043d\u0438\u0446\u044f \u0437 \u0427\u041f\u0423",v="\u0448\u0442\u0430\u043c\u043f\u0443\u0432\u0430\u043b\u044c\u043d\u0430 \u0434\u0456\u043b\u044c\u043d\u0438\u0446\u044f",Z=n(184),g=i.Ry().shape({name:i.Z_().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c"),number:i.Z_().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c"),weight:i.Rx().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c").min(.001,"\u0412\u0430\u0433\u0430 \u0434\u0435\u0442\u0430\u043b\u0456 \u043f\u043e\u0432\u0438\u043d\u043d\u0430 \u0431\u0443\u0442\u0438 \u043d\u0435 \u043c\u0435\u043d\u0448\u0435 0.001 \u043a\u0433"),quantity:i.Rx().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c").min(1,"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0434\u0435\u0442\u0430\u043b\u0435\u0439 \u0437 \u043b\u0438\u0441\u0442\u0430 \u043f\u043e\u0432\u0438\u043d\u043d\u043e \u0431\u0443\u0442\u0438 \u043d\u0435 \u043c\u0435\u043d\u0448\u0435 1 \u0448\u0442."),workshop:i.Z_().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c"),thickness:i.Z_().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c"),sheet:i.Z_().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c")});console.log(g);var w={name:"",number:"",weight:"",quantity:"",workshop:"",thickness:"",sheet:""},k=function(e){var t=e.onSubmit,n=e.onClose,i=e.productForUpdate,k=void 0===i?null:i;k?(w.name=k.name,w.number=k.number,w.weight=k.weight,w.quantity=k.quantity,w.workshop=k.workshop,w.thickness=k.material.thickness,w.sheet=k.material.sheet):(w.name="",w.number="",w.weight="",w.quantity="",w.workshop="",w.thickness="",w.sheet="");var b=(0,f.a)(),j=(0,m.rZ)(b,"sizeSheet"),y=(0,m.rZ)(b,"thicknessSheet"),z=(0,s.TA)({initialValues:w,validationSchema:g,onSubmit:function(e,r){var i=r.resetForm;t(e),n(),i()}});return(0,Z.jsxs)(a.Z,{variant:"standard",component:"form",onSubmit:z.handleSubmit,sx:{display:"flex",gap:"12px",flexDirection:"column",width:"100%",padding:"8px"},children:[(0,Z.jsx)(o.Z,{id:"name",type:"text",name:"name",label:"\u041d\u0430\u0439\u043c\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0439\u043c\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f",size:"small",value:z.values.name,onChange:z.handleChange,onBlur:z.handleBlur,error:z.touched.name&&Boolean(z.errors.name),helperText:z.touched.name&&z.errors.name}),(0,Z.jsx)(o.Z,{id:"number",type:"text",name:"number",label:"\u0414\u0435\u0446\u0438\u043c\u0430\u043b\u044c\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0435\u0446\u0438\u043c\u0430\u043b\u044c\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440",size:"small",value:z.values.number,onChange:z.handleChange,onBlur:z.handleBlur,error:z.touched.number&&Boolean(z.errors.number),helperText:z.touched.number&&z.errors.number}),(0,Z.jsx)(o.Z,{id:"weight",type:"number",name:"weight",inputProps:{min:"0.001",step:"0.001"},label:"\u0412\u0430\u0433\u0430 \u0434\u0435\u0442\u0430\u043b\u0456, \u043a\u0433.",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0432\u0430\u0433\u0443 \u0434\u0435\u0442\u0430\u043b\u0456",size:"small",value:z.values.weight,onChange:z.handleChange,onBlur:z.handleBlur,error:z.touched.weight&&Boolean(z.errors.weight),helperText:z.touched.weight&&z.errors.weight}),(0,Z.jsx)(o.Z,{id:"quantity",type:"number",name:"quantity",inputProps:{min:"1",step:"1"},label:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0434\u0435\u0442\u0430\u043b\u0435\u0439 \u0437 \u043b\u0438\u0441\u0442\u0430, \u0448\u0442.",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0434\u0435\u0442\u0430\u043b\u0435\u0439 \u0437 \u043b\u0438\u0441\u0442\u0430",size:"small",value:z.values.quantity,onChange:z.handleChange,onBlur:z.handleBlur,error:z.touched.quantity&&Boolean(z.errors.quantity),helperText:z.touched.quantity&&z.errors.quantity}),(0,Z.jsx)(h.Z,{id:"radio-workshop",children:"\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0432\u0438\u0440\u043e\u0431\u043d\u0438\u0447\u0443 \u0434\u0456\u043b\u044c\u043d\u0438\u0446\u044e:"}),(0,Z.jsxs)(u.Z,{name:"workshop","aria-labelledby":"radio-workshop",value:z.values.workshop,onChange:z.handleChange,onBlur:z.handleBlur,sx:{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center"},children:[(0,Z.jsx)(c.Z,{value:S,control:(0,Z.jsx)(l.Z,{size:"small"}),label:"\u0427\u041f\u0423"}),(0,Z.jsx)(c.Z,{value:v,control:(0,Z.jsx)(l.Z,{size:"small"}),label:"\u0428\u0442\u0430\u043c\u043f\u043e\u0432\u043a\u0430"})]}),z.touched.workshop&&Boolean(z.errors.workshop)&&(0,Z.jsx)(d.Z,{sx:{margin:"4px 14px 0 14px",color:"#d32f2f"},children:z.touched.workshop&&z.errors.workshop}),(0,Z.jsx)(o.Z,{select:!0,name:"thickness",size:"small",value:z.values.thickness,label:"\u0422\u043e\u0432\u0449\u0438\u043d\u0430 \u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b\u0443",onChange:z.handleChange,onBlur:z.handleBlur,error:z.touched.thickness&&Boolean(z.errors.thickness),helperText:z.touched.thickness&&z.errors.thickness,children:y.map((function(e){return(0,Z.jsxs)(p.Z,{value:e,children:[e," \u043c\u043c."]},(0,r.x0)())}))}),(0,Z.jsx)(o.Z,{select:!0,name:"sheet",size:"small",value:z.values.sheet,label:"\u0420\u043e\u0437\u043c\u0456\u0440 \u043b\u0438\u0441\u0442\u0430 \u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b\u0443",onChange:z.handleChange,onBlur:z.handleBlur,error:z.touched.sheet&&Boolean(z.errors.sheet),helperText:z.touched.sheet&&z.errors.sheet,children:j.map((function(e){return(0,Z.jsx)(p.Z,{value:e,children:e},(0,r.x0)())}))}),(0,Z.jsx)(x.Z,{type:"submit",variant:"contained",size:"large",sx:{width:"300px",margin:"0 auto"},children:k?(0,Z.jsx)("span",{children:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u0434\u0430\u043d\u0456"}):(0,Z.jsx)("span",{children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0434\u0435\u0442\u0430\u043b\u044c "})})]})}},7234:function(e,t,n){n.d(t,{y:function(){return h}});var r=n(2791),i=n(890),s=n(8870),a=n(6151),o=n(184),h=function(e){var t=e.onDelete,n=e.onClose,h=e.title,u=(0,r.useRef)();return(0,r.useEffect)((function(){u.current.focus({focusVisible:!0})}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.Z,{variant:"h6",component:"p",align:"center",sx:{mb:2},children:h}),(0,o.jsxs)(s.Z,{sx:{display:"flex",justifyContent:"space-evenly"},children:[(0,o.jsx)(a.Z,{variant:"contained",size:"small",onClick:function(){return t()},children:"\u0422\u0430\u043a"}),(0,o.jsx)(a.Z,{ref:u,variant:"contained",size:"small",onClick:function(){return n()},children:"Hi"})]})]})}},2331:function(e,t,n){n.d(t,{q:function(){return h}});var r=n(7004),i=n(8870),s=n(3400),a=n(9823),o=n(184),h=function(e){var t=e.open,n=e.children,h=e.onClose;return(0,o.jsx)(r.Z,{open:t,children:(0,o.jsxs)(i.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:{xs:"100%",md:"500px"},maxWidth:"500px",bgcolor:"#fff",borderRadius:2,boxShadow:"0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),  0px 2px 1px rgba(0, 0, 0, 0.2)",p:4},children:[(0,o.jsx)(s.Z,{"aria-label":"close",size:"medium",onClick:function(){return h()},sx:{position:"absolute",top:3,right:3},children:(0,o.jsx)(a.Z,{fontSize:"medium",sx:{color:"#1976d2"}})}),n]})})}},8463:function(e,t,n){n.d(t,{c:function(){return a}});var r=n(7004),i=n(8870),s=n(184),a=function(e){var t=e.open,n=e.onClose,a=e.children;return(0,s.jsx)(r.Z,{open:t,onClose:n,disableRestoreFocus:!0,children:(0,s.jsx)(i.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",maxWidth:"460px",bgcolor:"#fff",borderRadius:2,boxShadow:"0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),  0px 2px 1px rgba(0, 0, 0, 0.2)",p:4},children:a})})}},7044:function(e,t,n){n.d(t,{p:function(){return s}});var r=n(9164),i=n(184),s=function(e){var t=e.children;return(0,i.jsx)(r.Z,{maxWidth:"xl",sx:{display:"flex",gap:2,height:"100vh"},children:t})}},4465:function(e,t,n){n.d(t,{a:function(){return i}});var r=[{id:"1",sizeSheet:"2500x1250 \u041e\u0446.",thicknessSheet:"0.8",weightSheet:20.8},{id:"2",sizeSheet:"2500x1250 \u041e\u0446.",thicknessSheet:"1.0",weightSheet:26},{id:"3",sizeSheet:"2500x1250 \u041e\u0446.",thicknessSheet:"1.2",weightSheet:31.2},{id:"4",sizeSheet:"2500x1250 \u041e\u0446.",thicknessSheet:"1.5",weightSheet:39},{id:"5",sizeSheet:"2500x1250 \u041e\u0446.",thicknessSheet:"2.0",weightSheet:52},{id:"6",sizeSheet:"2500x1250 \u041e\u0446.",thicknessSheet:"2.5",weightSheet:65},{id:"7",sizeSheet:"2500x1250 \u041e\u0446.",thicknessSheet:"3.0",weightSheet:78},{id:"8",sizeSheet:"2500x1250 \u0421\u04423.",thicknessSheet:"0.8",weightSheet:20.8},{id:"9",sizeSheet:"2500x1250 \u0421\u04423.",thicknessSheet:"1.0",weightSheet:26},{id:"10",sizeSheet:"2500x1250 \u0421\u04423.",thicknessSheet:"1.2",weightSheet:31.2},{id:"11",sizeSheet:"2500x1250 \u0421\u04423.",thicknessSheet:"1.5",weightSheet:39},{id:"12",sizeSheet:"2500x1250 \u0421\u04423.",thicknessSheet:"2.0",weightSheet:52},{id:"13",sizeSheet:"2500x1250 \u0421\u04423.",thicknessSheet:"2.5",weightSheet:65},{id:"14",sizeSheet:"2500x1250 \u0421\u04423.",thicknessSheet:"3.0",weightSheet:78},{id:"15",sizeSheet:"2500x1250 AISI 430",thicknessSheet:"0.8",weightSheet:20},{id:"16",sizeSheet:"2500x1250 AISI 430",thicknessSheet:"1.0",weightSheet:25},{id:"17",sizeSheet:"2500x1250 AISI 430",thicknessSheet:"1.2",weightSheet:30},{id:"18",sizeSheet:"2500x1250 AISI 430",thicknessSheet:"1.5",weightSheet:37.5},{id:"19",sizeSheet:"2500x1250 AISI 430",thicknessSheet:"2.0",weightSheet:50},{id:"20",sizeSheet:"2500x1250 AISI 430",thicknessSheet:"2.5",weightSheet:62.5},{id:"21",sizeSheet:"2500x1250 AISI 430",thicknessSheet:"3.0",weightSheet:75},{id:"22",sizeSheet:"2500x1250 AISI 304",thicknessSheet:"0.8",weightSheet:20},{id:"23",sizeSheet:"2500x1250 AISI 304",thicknessSheet:"1.0",weightSheet:25},{id:"24",sizeSheet:"2500x1250 AISI 304",thicknessSheet:"1.2",weightSheet:30},{id:"25",sizeSheet:"2500x1250 AISI 304",thicknessSheet:"1.5",weightSheet:37.5},{id:"26",sizeSheet:"2500x1250 AISI 304",thicknessSheet:"2.0",weightSheet:50},{id:"27",sizeSheet:"2500x1250 AISI 304",thicknessSheet:"2.5",weightSheet:62.5},{id:"28",sizeSheet:"2500x1250 AISI 304",thicknessSheet:"3.0",weightSheet:75}],i=function(){return r}},177:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var r=n(4165),i=n(5861),s=n(9439),a=n(2791),o=n(7689),h=n(1087),u=n(5206),c=n(8870),l=n(6151),d=n(890),p=n(383),x=n(1286),f=n(7394),m=n(2002),S=n(7044),v=n(9561),Z=n(2331),g=n(8463),w=n(3614),k=n(184),b=function(e){var t=e.detailsProduct;return(0,k.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"column",gap:1,mb:2},children:[(0,k.jsxs)(d.Z,{variant:"h5",component:"p",align:"center",sx:{fontWeight:700},children:[t.name," ",t.number]}),(0,k.jsxs)(d.Z,{variant:"body1",sx:{fontWeight:700},children:["\u041d\u0430\u0439\u043c\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f:"," ",(0,k.jsx)(d.Z,{component:"span",children:t.name})]}),(0,k.jsxs)(d.Z,{variant:"body1",sx:{fontWeight:700},children:["\u0414\u0435\u0446\u0438\u043c\u0430\u043b\u044c\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440:"," ",(0,k.jsx)(d.Z,{component:"span",children:t.number})]}),(0,k.jsxs)(d.Z,{variant:"body1",sx:{fontWeight:700},children:["\u041c\u0430\u0442\u0435\u0440\u0456\u0430\u043b:"," ",(0,k.jsxs)(d.Z,{component:"span",children:[t.material.thickness,"\u0445",t.material.sheet]})]}),(0,k.jsxs)(d.Z,{variant:"body1",sx:{fontWeight:700},children:["\u0412\u0430\u0433\u0430 \u0434\u0435\u0442\u0430\u043b\u0456:"," ",(0,k.jsxs)(d.Z,{component:"span",children:[t.weight," \u043a\u0433."]})]}),(0,k.jsxs)(d.Z,{variant:"body1",sx:{fontWeight:700},children:["\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0434\u0435\u0442\u0430\u043b\u0435\u0439 \u0437 \u043b\u0438\u0441\u0442\u0430:"," ",(0,k.jsxs)(d.Z,{component:"span",children:[t.quantity," \u0448\u0442.(",t.material.sheet,")"]})]}),(0,k.jsxs)(d.Z,{variant:"body1",sx:{fontWeight:700},children:["\u041d\u043e\u0440\u043c\u0430 \u0432\u0438\u0442\u0440\u0430\u0442\u0438:"," ",(0,k.jsxs)(d.Z,{component:"span",children:[(0,w.s)(t.quantity,t.material.sheet,t.material.thickness)," ","\u043a\u0433."]})]}),(0,k.jsxs)(d.Z,{variant:"body1",sx:{fontWeight:700},children:["\u0414\u0456\u043b\u044c\u043d\u0438\u0446\u044f:"," ",(0,k.jsx)(d.Z,{component:"span",children:t.workshop})]})]})},j=function(){return(0,k.jsx)(c.Z,{sx:{borderRadius:4,mt:10,mb:6,p:2,pt:11,backgroundColor:"#f5f5f5",boxShadow:"0 0 8px 0 rgba(0,0,0,.3)",flexGrow:1},children:(0,k.jsx)(d.Z,{variant:"h4",align:"center",sx:{fontWeight:700},children:"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0456\u0447\u043d\u0438\u0439 \u043f\u0440\u043e\u0446\u0435\u0441"})})},y=n(7234),z=n(2881),C=function(){var e,t,n=(0,o.TH)(),w=(0,o.s0)(),C=(0,o.UO)().productId,I=(0,a.useState)(null),q=(0,s.Z)(I,2),A=q[0],B=q[1],W=(0,a.useState)(!1),R=(0,s.Z)(W,2),T=R[0],D=R[1],F=(0,a.useState)(!1),U=(0,s.Z)(F,2),L=U[0],_=U[1],H=(0,a.useState)(!1),M=(0,s.Z)(H,2),P=M[0],V=M[1],E=function(){_(!1)},O=function(){V(!1)};(0,a.useEffect)((function(){function e(){return(e=(0,i.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,D(!0),e.next=4,m.Tu(C);case 4:t=e.sent,B(t.data),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),u.Am.error("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u0421\u043f\u0440\u043e\u0431\u0443\u0439 \u0437\u043d\u043e\u0432\u0443..."),D(!1);case 12:return e.prev=12,D(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[C]);var G=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.Zc(t);case 3:D(!0),B(null),u.Am.success("\u0414\u0435\u0442\u0430\u043b\u044c \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u0430 i\u0437 \u0441\u043f\u0438\u0441\u043a\u0443"),w("/products"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),u.Am.error("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u0421\u043f\u0440\u043e\u0431\u0443\u0439 \u0437\u043d\u043e\u0432\u0443..."),D(!1);case 13:return e.prev=13,D(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(C);case 2:O();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n,i,s,a,o,h,c,l,d,p;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,i=t.number,s=t.weight,a=t.quantity,o=t.workshop,h=t.thickness,c=t.sheet,l={name:n,number:i,weight:s,quantity:a,workshop:o,material:{thickness:h,sheet:c}},e.prev=2,D(!0),e.next=6,m.ZD(C,l);case 6:d=e.sent,p=d.data,u.Am.success("\u0414\u0430\u043d\u0456 \u043f\u0440\u043e \u0434\u0435\u0442\u0430\u043b\u044c \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u0456"),B(p),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),409===e.t0.response.status?u.Am.error("\u0414\u0435\u0442\u0430\u043b\u044c \u0437 \u0434\u0435\u0446\u0438\u043c\u0430\u043b\u044c\u043d\u0438\u043c \u043d\u043e\u043c\u0435\u0440\u043e\u043c  ".concat(i," \u0432\u0436\u0435 \u0454 \u0432 \u0441\u043f\u0438\u0441\u043a\u0443")):u.Am.error("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u0421\u043f\u0440\u043e\u0431\u0443\u0439 \u0437\u043d\u043e\u0432\u0443..."),D(!1);case 16:return e.prev=16,D(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[2,12,16,19]])})));return function(t){return e.apply(this,arguments)}}(),K=null!==(e=null===(t=n.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,k.jsxs)(k.Fragment,{children:[T&&(0,k.jsx)(z.a,{}),(0,k.jsxs)(S.p,{children:[(0,k.jsxs)(c.Z,{sx:{width:"600px",borderRadius:4,mt:10,mb:6,p:2,backgroundColor:"#f5f5f5",boxShadow:"0 0 8px 0 rgba(0,0,0,.3)",overflowX:"auto"},children:[(0,k.jsx)(l.Z,{component:h.rU,to:K,variant:"contained",size:"small",startIcon:(0,k.jsx)(f.Z,{}),sx:{mb:4},children:"\u041d\u0430\u0437\u0430\u0434"}),(0,k.jsx)(d.Z,{variant:"h4",align:"center",sx:{fontWeight:700},children:"\u0422\u0435\u0445\u043d\u0456\u0447\u043d\u0438\u0439 \u043e\u043f\u0438\u0441 \u0434\u0435\u0442\u0430\u043b\u0456"}),A?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(b,{detailsProduct:A}),(0,k.jsxs)(c.Z,{sx:{display:"flex",justifyContent:"space-evenly",mt:4},children:[(0,k.jsx)(l.Z,{variant:"contained",size:"large",onClick:function(){V(!0)},startIcon:(0,k.jsx)(p.Z,{}),sx:{width:"150px"},children:"B\u0438\u0434\u0430\u043b\u0438\u0442\u0438"}),(0,k.jsx)(l.Z,{variant:"contained",size:"large",onClick:function(){_(!0)},startIcon:(0,k.jsx)(x.Z,{}),sx:{width:"150px"},children:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"})]})]}):(0,k.jsx)(d.Z,{variant:"h5",component:"p",sx:{fontWeight:700},children:"\u0414\u0430\u043d\u0456 \u043f\u0440\u043e \u0434\u0435\u0442\u0430\u043b\u044c \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e..."})]}),(0,k.jsx)(j,{})]}),(0,k.jsx)(Z.q,{open:L,onClose:E,children:(0,k.jsx)(v.o,{onSubmit:J,onClose:E,productForUpdate:A})}),(0,k.jsx)(g.c,{open:P,onClose:O,children:(0,k.jsx)(y.y,{title:"\u0411\u0430\u0436\u0430\u0454\u0442\u0435 \u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0434\u0430\u043d\u0443 \u0434\u0435\u0442\u0430\u043b\u044c?",onDelete:X,onClose:O})})]})}},2002:function(e,t,n){n.d(t,{C5:function(){return a},Tu:function(){return o},ZD:function(){return c},Zc:function(){return u},s2:function(){return h}});var r=n(4165),i=n(5861),s=n(1243);s.Z.defaults.baseURL="https://technology-backend.onrender.com/api";var a=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/products");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/products/".concat(t));case 2:return n=e.sent,i=n.data,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.post("/products",t);case 2:return n=e.sent,i=n.data,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.delete("/products/".concat(t));case 2:return n=e.sent,i=n.data,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t,n){var i,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.put("/products/".concat(t),n);case 2:return i=e.sent,a=i.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},838:function(e,t,n){function r(e){return new Date(e).toLocaleDateString("uk-UA")}n.d(t,{p:function(){return r}})},2654:function(e,t,n){function r(e){return new Date(e).toLocaleTimeString("uk-UA",{hours:!1})}n.d(t,{m:function(){return r}})},3614:function(e,t,n){n.d(t,{s:function(){return i}});var r=(0,n(4465).a)();function i(e,t,n){var i=r.find((function(e){return e.sizeSheet===t&&e.thicknessSheet===n}));return 0!==e?(i.weightSheet/e).toFixed(3):1/0}},3420:function(e,t,n){n.d(t,{p6:function(){return a.p},mr:function(){return o.m},ei:function(){return i},rZ:function(){return s}});var r=n(1413);function i(e){return function(e){return e.map((function(e){return e.material})).reduce((function(e,t){return e.some((function(e){return e.thickness===t.thickness&&e.sheet===t.sheet}))||e.push((0,r.Z)({},t)),e}),[])}(e).map((function(t){var n=e.reduce((function(e,n){return t.thickness===n.material.thickness&&t.sheet===n.material.sheet&&(e+=1/n.quantity*n.reserved),e}),0);return(0,r.Z)((0,r.Z)({},t),{},{amount:n.toFixed(3)})}))}n(3614);function s(e,t){return e.map((function(e){return e[t]})).filter((function(e,t,n){return n.indexOf(e)===t}))}n(8055),n(4412);var a=n(838),o=n(2654)},7394:function(e,t,n){var r=n(4836);t.Z=void 0;var i=r(n(5649)),s=n(184),a=(0,i.default)((0,s.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.Z=a},9823:function(e,t,n){var r=n(4836);t.Z=void 0;var i=r(n(5649)),s=n(184),a=(0,i.default)((0,s.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.Z=a},1286:function(e,t,n){var r=n(4836);t.Z=void 0;var i=r(n(5649)),s=n(184),a=(0,i.default)((0,s.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.Z=a},5984:function(e,t,n){n.d(t,{x0:function(){return r}});var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=177.4f85e0af.chunk.js.map