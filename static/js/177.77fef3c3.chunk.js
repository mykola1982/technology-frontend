"use strict";(self.webpackChunktechnology=self.webpackChunktechnology||[]).push([[177],{7663:function(e,t,n){n.d(t,{S:function(){return k}});var r=n(5984),s=n(6727),i=n(5705),a=n(8096),o=n(4994),h=n(7133),c=n(765),u=n(4989),l=n(4479),d=n(7071),x=n(9891),p=n(6151),f=n(4465),m=n(3420),S="\u0434\u0456\u043b\u044c\u043d\u0438\u0446\u044f \u0437 \u0427\u041f\u0423",Z="\u0448\u0442\u0430\u043c\u043f\u0443\u0432\u0430\u043b\u044c\u043d\u0430 \u0434\u0456\u043b\u044c\u043d\u0438\u0446\u044f",v=n(184),g=s.Ry().shape({name:s.Z_().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c"),number:s.Z_().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c"),weight:s.Rx().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c").min(.001,"\u0412\u0430\u0433\u0430 \u0434\u0435\u0442\u0430\u043b\u0456 \u043f\u043e\u0432\u0438\u043d\u043d\u0430 \u0431\u0443\u0442\u0438 \u043d\u0435 \u043c\u0435\u043d\u0448\u0435 0.001 \u043a\u0433"),quantity:s.Rx().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c").min(1,"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0434\u0435\u0442\u0430\u043b\u0435\u0439 \u0437 \u043b\u0438\u0441\u0442\u0430 \u043f\u043e\u0432\u0438\u043d\u043d\u043e \u0431\u0443\u0442\u0438 \u043d\u0435 \u043c\u0435\u043d\u0448\u0435 1 \u0448\u0442."),workshop:s.Z_().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c"),thickness:s.Z_().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c"),sheet:s.Z_().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c")}),w={name:"",number:"",weight:"",quantity:"",workshop:"",thickness:"",sheet:""},k=function(e){var t=e.onSubmit,n=e.onClose,s=e.productForUpdate,k=void 0===s?null:s;k?(w.name=k.name,w.number=k.number,w.weight=k.weight,w.quantity=k.quantity,w.workshop=k.workshop,w.thickness=k.material.thickness,w.sheet=k.material.sheet):(w.name="",w.number="",w.weight="",w.quantity="",w.workshop="",w.thickness="",w.sheet="");var b=(0,f.a)(),j=(0,m.rZ)(b,"sizeSheet"),y=(0,m.rZ)(b,"thicknessSheet"),z=(0,i.TA)({initialValues:w,validationSchema:g,onSubmit:function(e,r){var s=r.resetForm;t(e),n(),s()}});return(0,v.jsxs)(a.Z,{variant:"standard",component:"form",onSubmit:z.handleSubmit,sx:{display:"flex",gap:"12px",flexDirection:"column",width:"100%",padding:"8px"},children:[(0,v.jsx)(o.Z,{id:"name",type:"text",name:"name",label:"\u041d\u0430\u0439\u043c\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0439\u043c\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f",size:"small",value:z.values.name,onChange:z.handleChange,onBlur:z.handleBlur,error:z.touched.name&&Boolean(z.errors.name),helperText:z.touched.name&&z.errors.name}),(0,v.jsx)(o.Z,{id:"number",type:"text",name:"number",label:"\u0414\u0435\u0446\u0438\u043c\u0430\u043b\u044c\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0435\u0446\u0438\u043c\u0430\u043b\u044c\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440",size:"small",value:z.values.number,onChange:z.handleChange,onBlur:z.handleBlur,error:z.touched.number&&Boolean(z.errors.number),helperText:z.touched.number&&z.errors.number}),(0,v.jsx)(o.Z,{id:"weight",type:"number",name:"weight",inputProps:{min:"0.001",step:"0.001"},label:"\u0412\u0430\u0433\u0430 \u0434\u0435\u0442\u0430\u043b\u0456, \u043a\u0433.",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0432\u0430\u0433\u0443 \u0434\u0435\u0442\u0430\u043b\u0456",size:"small",value:z.values.weight,onChange:z.handleChange,onBlur:z.handleBlur,error:z.touched.weight&&Boolean(z.errors.weight),helperText:z.touched.weight&&z.errors.weight}),(0,v.jsx)(o.Z,{id:"quantity",type:"number",name:"quantity",inputProps:{min:"1",step:"1"},label:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0434\u0435\u0442\u0430\u043b\u0435\u0439 \u0437 \u043b\u0438\u0441\u0442\u0430, \u0448\u0442.",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0434\u0435\u0442\u0430\u043b\u0435\u0439 \u0437 \u043b\u0438\u0441\u0442\u0430",size:"small",value:z.values.quantity,onChange:z.handleChange,onBlur:z.handleBlur,error:z.touched.quantity&&Boolean(z.errors.quantity),helperText:z.touched.quantity&&z.errors.quantity}),(0,v.jsx)(h.Z,{id:"radio-workshop",children:"\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0432\u0438\u0440\u043e\u0431\u043d\u0438\u0447\u0443 \u0434\u0456\u043b\u044c\u043d\u0438\u0446\u044e:"}),(0,v.jsxs)(c.Z,{name:"workshop","aria-labelledby":"radio-workshop",value:z.values.workshop,onChange:z.handleChange,onBlur:z.handleBlur,sx:{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center"},children:[(0,v.jsx)(u.Z,{value:S,control:(0,v.jsx)(l.Z,{size:"small"}),label:"\u0427\u041f\u0423"}),(0,v.jsx)(u.Z,{value:Z,control:(0,v.jsx)(l.Z,{size:"small"}),label:"\u0428\u0442\u0430\u043c\u043f\u043e\u0432\u043a\u0430"})]}),z.touched.workshop&&Boolean(z.errors.workshop)&&(0,v.jsx)(d.Z,{sx:{margin:"4px 14px 0 14px",color:"#d32f2f"},children:z.touched.workshop&&z.errors.workshop}),(0,v.jsx)(o.Z,{select:!0,name:"thickness",size:"small",value:z.values.thickness,label:"\u0422\u043e\u0432\u0449\u0438\u043d\u0430 \u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b\u0443",onChange:z.handleChange,onBlur:z.handleBlur,error:z.touched.thickness&&Boolean(z.errors.thickness),helperText:z.touched.thickness&&z.errors.thickness,children:y.map((function(e){return(0,v.jsxs)(x.Z,{value:e,children:[e," \u043c\u043c."]},(0,r.x0)())}))}),(0,v.jsx)(o.Z,{select:!0,name:"sheet",size:"small",value:z.values.sheet,label:"\u0420\u043e\u0437\u043c\u0456\u0440 \u043b\u0438\u0441\u0442\u0430 \u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b\u0443",onChange:z.handleChange,onBlur:z.handleBlur,error:z.touched.sheet&&Boolean(z.errors.sheet),helperText:z.touched.sheet&&z.errors.sheet,children:j.map((function(e){return(0,v.jsx)(x.Z,{value:e,children:e},(0,r.x0)())}))}),(0,v.jsx)(p.Z,{type:"submit",variant:"contained",size:"large",sx:{width:"300px",margin:"0 auto"},children:k?(0,v.jsx)("span",{children:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u0434\u0430\u043d\u0456"}):(0,v.jsx)("span",{children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0434\u0435\u0442\u0430\u043b\u044c "})})]})}},7234:function(e,t,n){n.d(t,{y:function(){return h}});var r=n(2791),s=n(890),i=n(4554),a=n(6151),o=n(184),h=function(e){var t=e.onDelete,n=e.onClose,h=(0,r.useRef)();return(0,r.useEffect)((function(){h.current.focus({focusVisible:!0})}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.Z,{variant:"h6",component:"p",align:"center",sx:{mb:2},children:"\u0412\u0438 \u0431\u0430\u0436\u0430\u0454\u0442\u0435 \u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0434\u0430\u043d\u0443 \u0434\u0435\u0442\u0430\u043b\u044c"}),(0,o.jsxs)(i.Z,{sx:{display:"flex",justifyContent:"space-evenly"},children:[(0,o.jsx)(a.Z,{variant:"contained",size:"small",onClick:function(){return t()},children:"\u0422\u0430\u043a"}),(0,o.jsx)(a.Z,{ref:h,variant:"contained",size:"small",onClick:function(){return n()},children:"Hi"})]})]})}},2331:function(e,t,n){n.d(t,{q:function(){return h}});var r=n(7004),s=n(4554),i=n(3400),a=n(9823),o=n(184),h=function(e){var t=e.open,n=e.children,h=e.onClose;return(0,o.jsx)(r.Z,{open:t,children:(0,o.jsxs)(s.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:{xs:"100%",md:"500px"},maxWidth:"500px",bgcolor:"#fff",borderRadius:2,boxShadow:"0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),  0px 2px 1px rgba(0, 0, 0, 0.2)",p:4},children:[(0,o.jsx)(i.Z,{"aria-label":"close",size:"medium",onClick:function(){return h()},sx:{position:"absolute",top:3,right:3},children:(0,o.jsx)(a.Z,{fontSize:"medium",sx:{color:"#1976d2"}})}),n]})})}},8463:function(e,t,n){n.d(t,{c:function(){return a}});var r=n(7004),s=n(4554),i=n(184),a=function(e){var t=e.open,n=e.onClose,a=e.children;return(0,i.jsx)(r.Z,{open:t,onClose:n,disableRestoreFocus:!0,children:(0,i.jsx)(s.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",maxWidth:"460px",bgcolor:"#fff",borderRadius:2,boxShadow:"0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),  0px 2px 1px rgba(0, 0, 0, 0.2)",p:4},children:a})})}},4465:function(e,t,n){n.d(t,{a:function(){return s}});var r=[{id:"1",sizeSheet:"2500x1250 \u041e\u0446.",thicknessSheet:"0.8",weightSheet:20.8},{id:"2",sizeSheet:"2500x1250 \u041e\u0446.",thicknessSheet:"1.0",weightSheet:26},{id:"3",sizeSheet:"2500x1250 \u041e\u0446.",thicknessSheet:"1.2",weightSheet:31.2},{id:"4",sizeSheet:"2500x1250 \u041e\u0446.",thicknessSheet:"1.5",weightSheet:39},{id:"5",sizeSheet:"2500x1250 \u041e\u0446.",thicknessSheet:"2.0",weightSheet:52},{id:"6",sizeSheet:"2500x1250 \u041e\u0446.",thicknessSheet:"2.5",weightSheet:65},{id:"7",sizeSheet:"2500x1250 \u041e\u0446.",thicknessSheet:"3.0",weightSheet:78},{id:"8",sizeSheet:"2500x1250 \u0421\u04423.",thicknessSheet:"0.8",weightSheet:20.8},{id:"9",sizeSheet:"2500x1250 \u0421\u04423.",thicknessSheet:"1.0",weightSheet:26},{id:"10",sizeSheet:"2500x1250 \u0421\u04423.",thicknessSheet:"1.2",weightSheet:31.2},{id:"11",sizeSheet:"2500x1250 \u0421\u04423.",thicknessSheet:"1.5",weightSheet:39},{id:"12",sizeSheet:"2500x1250 \u0421\u04423.",thicknessSheet:"2.0",weightSheet:52},{id:"13",sizeSheet:"2500x1250 \u0421\u04423.",thicknessSheet:"2.5",weightSheet:65},{id:"14",sizeSheet:"2500x1250 \u0421\u04423.",thicknessSheet:"3.0",weightSheet:78},{id:"15",sizeSheet:"2500x1250 AISI 430",thicknessSheet:"0.8",weightSheet:20},{id:"16",sizeSheet:"2500x1250 AISI 430",thicknessSheet:"1.0",weightSheet:25},{id:"17",sizeSheet:"2500x1250 AISI 430",thicknessSheet:"1.2",weightSheet:30},{id:"18",sizeSheet:"2500x1250 AISI 430",thicknessSheet:"1.5",weightSheet:37.5},{id:"19",sizeSheet:"2500x1250 AISI 430",thicknessSheet:"2.0",weightSheet:50},{id:"20",sizeSheet:"2500x1250 AISI 430",thicknessSheet:"2.5",weightSheet:62.5},{id:"21",sizeSheet:"2500x1250 AISI 430",thicknessSheet:"3.0",weightSheet:75},{id:"22",sizeSheet:"2500x1250 AISI 304",thicknessSheet:"0.8",weightSheet:20},{id:"23",sizeSheet:"2500x1250 AISI 304",thicknessSheet:"1.0",weightSheet:25},{id:"24",sizeSheet:"2500x1250 AISI 304",thicknessSheet:"1.2",weightSheet:30},{id:"25",sizeSheet:"2500x1250 AISI 304",thicknessSheet:"1.5",weightSheet:37.5},{id:"26",sizeSheet:"2500x1250 AISI 304",thicknessSheet:"2.0",weightSheet:50},{id:"27",sizeSheet:"2500x1250 AISI 304",thicknessSheet:"2.5",weightSheet:62.5},{id:"28",sizeSheet:"2500x1250 AISI 304",thicknessSheet:"3.0",weightSheet:75}],s=function(){return r}},177:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var r=n(4165),s=n(5861),i=n(9439),a=n(2791),o=n(7689),h=n(1087),c=n(5206),u=n(9164),l=n(4554),d=n(6151),x=n(890),p=n(383),f=n(1286),m=n(7394),S=n(2002),Z=n(7663),v=n(2331),g=n(8463),w=n(3614),k=n(184),b=function(e){var t=e.detailsProduct;return(0,k.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"column",gap:1,mb:2},children:[(0,k.jsxs)(x.Z,{variant:"h5",component:"p",align:"center",sx:{fontWeight:700},children:[t.name," ",t.number]}),(0,k.jsxs)(x.Z,{variant:"body1",sx:{fontWeight:700},children:["\u041d\u0430\u0439\u043c\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f:"," ",(0,k.jsx)(x.Z,{component:"span",children:t.name})]}),(0,k.jsxs)(x.Z,{variant:"body1",sx:{fontWeight:700},children:["\u0414\u0435\u0446\u0438\u043c\u0430\u043b\u044c\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440:"," ",(0,k.jsx)(x.Z,{component:"span",children:t.number})]}),(0,k.jsxs)(x.Z,{variant:"body1",sx:{fontWeight:700},children:["\u041c\u0430\u0442\u0435\u0440\u0456\u0430\u043b:"," ",(0,k.jsxs)(x.Z,{component:"span",children:[t.material.thickness,"\u0445",t.material.sheet]})]}),(0,k.jsxs)(x.Z,{variant:"body1",sx:{fontWeight:700},children:["\u0412\u0430\u0433\u0430 \u0434\u0435\u0442\u0430\u043b\u0456:"," ",(0,k.jsxs)(x.Z,{component:"span",children:[t.weight," \u043a\u0433."]})]}),(0,k.jsxs)(x.Z,{variant:"body1",sx:{fontWeight:700},children:["\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0434\u0435\u0442\u0430\u043b\u0435\u0439 \u0437 \u043b\u0438\u0441\u0442\u0430:"," ",(0,k.jsxs)(x.Z,{component:"span",children:[t.quantity," \u0448\u0442.(",t.material.sheet,")"]})]}),(0,k.jsxs)(x.Z,{variant:"body1",sx:{fontWeight:700},children:["\u041d\u043e\u0440\u043c\u0430 \u0432\u0438\u0442\u0440\u0430\u0442\u0438:"," ",(0,k.jsxs)(x.Z,{component:"span",children:[(0,w.s)(t.quantity,t.material.sheet,t.material.thickness)," ","\u043a\u0433."]})]}),(0,k.jsxs)(x.Z,{variant:"body1",sx:{fontWeight:700},children:["\u0414\u0456\u043b\u044c\u043d\u0438\u0446\u044f:"," ",(0,k.jsx)(x.Z,{component:"span",children:t.workshop})]})]})},j=function(){return(0,k.jsx)(l.Z,{sx:{borderRadius:4,mt:10,mb:2,p:2,pt:11,backgroundColor:"#f5f5f5",boxShadow:"0 0 8px 0 rgba(0,0,0,.3)",flexGrow:1},children:(0,k.jsx)(x.Z,{variant:"h4",align:"center",sx:{fontWeight:700},children:"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0456\u0447\u043d\u0438\u0439 \u043f\u0440\u043e\u0446\u0435\u0441"})})},y=n(7234),z=function(){var e,t,n=(0,o.TH)(),w=(0,o.s0)(),z=(0,o.UO)().productId,C=(0,a.useState)(null),I=(0,i.Z)(C,2),q=I[0],A=I[1],B=(0,a.useState)(!1),W=(0,i.Z)(B,2),R=W[0],T=W[1],F=(0,a.useState)(!1),D=(0,i.Z)(F,2),U=D[0],_=D[1],L=function(){T(!1)},H=function(){_(!1)};(0,a.useEffect)((function(){function e(){return(e=(0,s.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.Tu(z);case 3:t=e.sent,A(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),c.Am.error("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u0421\u043f\u0440\u043e\u0431\u0443\u0439 \u0437\u043d\u043e\u0432\u0443...");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[z]);var M=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.Zc(t);case 3:A(null),c.Am.success("\u0414\u0435\u0442\u0430\u043b\u044c \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u0430 i\u0437 \u0441\u043f\u0438\u0441\u043a\u0443"),w("/products"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),c.Am.error("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u0421\u043f\u0440\u043e\u0431\u0443\u0439 \u0437\u043d\u043e\u0432\u0443...");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(z);case 2:H();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t){var n,s,i,a,o,h,u,l,d,x;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,s=t.number,i=t.weight,a=t.quantity,o=t.workshop,h=t.thickness,u=t.sheet,l={name:n,number:s,weight:i,quantity:a,workshop:o,material:{thickness:h,sheet:u}},e.prev=2,e.next=5,S.ZD(z,l);case 5:d=e.sent,x=d.data,c.Am.success("\u0414\u0430\u043d\u0456 \u043f\u0440\u043e \u0434\u0435\u0442\u0430\u043b\u044c \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u0456"),A(x),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),409===e.t0.response.status?c.Am.error("\u0414\u0435\u0442\u0430\u043b\u044c \u0437 \u0434\u0435\u0446\u0438\u043c\u0430\u043b\u044c\u043d\u0438\u043c \u043d\u043e\u043c\u0435\u0440\u043e\u043c  ".concat(s," \u0432\u0436\u0435 \u0454 \u0432 \u0441\u043f\u0438\u0441\u043a\u0443")):c.Am.error("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u0421\u043f\u0440\u043e\u0431\u0443\u0439 \u0437\u043d\u043e\u0432\u0443...");case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),E=null!==(e=null===(t=n.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(u.Z,{maxWidth:"xl",sx:{display:"flex",height:"100vh",gap:2},children:[(0,k.jsxs)(l.Z,{sx:{width:"600px",borderRadius:4,mt:10,mb:2,p:2,backgroundColor:"#f5f5f5",boxShadow:"0 0 8px 0 rgba(0,0,0,.3)"},children:[(0,k.jsx)(d.Z,{component:h.rU,to:E,variant:"contained",size:"small",startIcon:(0,k.jsx)(m.Z,{}),sx:{mb:4},children:"\u041d\u0430\u0437\u0430\u0434"}),(0,k.jsx)(x.Z,{variant:"h4",align:"center",sx:{fontWeight:700},children:"\u0422\u0435\u0445\u043d\u0456\u0447\u043d\u0438\u0439 \u043e\u043f\u0438\u0441 \u0434\u0435\u0442\u0430\u043b\u0456"}),q?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(b,{detailsProduct:q}),(0,k.jsxs)(l.Z,{sx:{display:"flex",justifyContent:"space-evenly",mt:4},children:[(0,k.jsx)(d.Z,{variant:"contained",size:"large",onClick:function(){_(!0)},startIcon:(0,k.jsx)(p.Z,{}),sx:{width:"150px"},children:"B\u0438\u0434\u0430\u043b\u0438\u0442\u0438"}),(0,k.jsx)(d.Z,{variant:"contained",size:"large",onClick:function(){T(!0)},startIcon:(0,k.jsx)(f.Z,{}),sx:{width:"150px"},children:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"})]})]}):(0,k.jsx)(x.Z,{variant:"h5",component:"p",sx:{fontWeight:700},children:"\u0414\u0430\u043d\u0456 \u043f\u0440\u043e \u0434\u0435\u0442\u0430\u043b\u044c \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e..."})]}),(0,k.jsx)(j,{})]}),(0,k.jsx)(v.q,{open:R,onClose:L,children:(0,k.jsx)(Z.S,{onSubmit:V,onClose:L,productForUpdate:q})}),(0,k.jsx)(g.c,{open:U,onClose:H,children:(0,k.jsx)(y.y,{onDelete:P,onClose:H})})]})}},2002:function(e,t,n){n.d(t,{C5:function(){return a},Tu:function(){return o},ZD:function(){return u},Zc:function(){return c},s2:function(){return h}});var r=n(4165),s=n(5861),i=n(1243);i.Z.defaults.baseURL="https://technology-backend.onrender.com/api";var a=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/products");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t){var n,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/products/".concat(t));case 2:return n=e.sent,s=n.data,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t){var n,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.post("/products",t);case 2:return n=e.sent,s=n.data,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t){var n,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.delete("/products/".concat(t));case 2:return n=e.sent,s=n.data,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t,n){var s,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.put("/products/".concat(t),n);case 2:return s=e.sent,a=s.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},3614:function(e,t,n){n.d(t,{s:function(){return s}});var r=(0,n(4465).a)();function s(e,t,n){var s=r.find((function(e){return e.sizeSheet===t&&e.thicknessSheet===n}));return 0!==e?(s.weightSheet/e).toFixed(3):1/0}},3420:function(e,t,n){n.d(t,{ei:function(){return s},rZ:function(){return i}});var r=n(1413);function s(e){return function(e){return e.map((function(e){return e.material})).reduce((function(e,t){return e.some((function(e){return e.thickness===t.thickness&&e.sheet===t.sheet}))||e.push((0,r.Z)({},t)),e}),[])}(e).map((function(t){var n=e.reduce((function(e,n){return t.thickness===n.material.thickness&&t.sheet===n.material.sheet&&(e+=1/n.quantity*n.reserved),e}),0);return(0,r.Z)((0,r.Z)({},t),{},{amount:n.toFixed(3)})}))}n(3614);function i(e,t){return e.map((function(e){return e[t]})).filter((function(e,t,n){return n.indexOf(e)===t}))}n(8055),n(4412)},7394:function(e,t,n){var r=n(4836);t.Z=void 0;var s=r(n(5649)),i=n(184),a=(0,s.default)((0,i.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.Z=a},9823:function(e,t,n){var r=n(4836);t.Z=void 0;var s=r(n(5649)),i=n(184),a=(0,s.default)((0,i.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.Z=a},1286:function(e,t,n){var r=n(4836);t.Z=void 0;var s=r(n(5649)),i=n(184),a=(0,s.default)((0,i.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.Z=a},5984:function(e,t,n){n.d(t,{x0:function(){return r}});var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=177.77fef3c3.chunk.js.map