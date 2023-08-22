"use strict";(self.webpackChunktechnology=self.webpackChunktechnology||[]).push([[50],{7663:function(e,t,n){n.d(t,{S:function(){return b}});var r=n(5984),i=n(6727),s=n(5705),a=n(8096),o=n(4994),c=n(7133),u=n(765),h=n(4989),l=n(1419),d=n(7071),x=n(9891),p=n(6151),f=n(4465),m=n(3420),Z="\u0434\u0456\u043b\u044c\u043d\u0438\u0446\u044f \u0437 \u0427\u041f\u0423",g="\u0448\u0442\u0430\u043c\u043f\u0443\u0432\u0430\u043b\u044c\u043d\u0430 \u0434\u0456\u043b\u044c\u043d\u0438\u0446\u044f",v=n(184),S=i.Ry().shape({name:i.Z_().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c"),number:i.Z_().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c"),weight:i.Rx().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c").min(.001,"\u0412\u0430\u0433\u0430 \u0434\u0435\u0442\u0430\u043b\u0456 \u043f\u043e\u0432\u0438\u043d\u043d\u0430 \u0431\u0443\u0442\u0438 \u043d\u0435 \u043c\u0435\u043d\u0448\u0435 0.001 \u043a\u0433"),quantity:i.Rx().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c").min(1,"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0434\u0435\u0442\u0430\u043b\u0435\u0439 \u0437 \u043b\u0438\u0441\u0442\u0430 \u043f\u043e\u0432\u0438\u043d\u043d\u043e \u0431\u0443\u0442\u0438 \u043d\u0435 \u043c\u0435\u043d\u0448\u0435 1 \u0448\u0442."),workshop:i.Z_().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c"),thickness:i.Z_().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c"),sheet:i.Z_().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c")}),w={name:"",number:"",weight:"",quantity:"",workshop:"",thickness:"",sheet:""},b=function(e){var t=e.onSubmit,n=e.onClose,i=e.productForUpdate,b=void 0===i?null:i;b?(w.name=b.name,w.number=b.number,w.weight=b.weight,w.quantity=b.quantity,w.workshop=b.workshop,w.thickness=b.material.thickness,w.sheet=b.material.sheet):(w.name="",w.number="",w.weight="",w.quantity="",w.workshop="",w.thickness="",w.sheet="");var k=(0,f.a)(),j=(0,m.rZ)(k,"sizeSheet"),y=(0,m.rZ)(k,"thicknessSheet"),z=(0,s.TA)({initialValues:w,validationSchema:S,onSubmit:function(e,r){var i=r.resetForm;t(e),n(),i()}});return(0,v.jsxs)(a.Z,{variant:"standard",component:"form",onSubmit:z.handleSubmit,sx:{display:"flex",gap:"12px",flexDirection:"column",width:"100%",padding:"8px"},children:[(0,v.jsx)(o.Z,{id:"name",type:"text",name:"name",label:"\u041d\u0430\u0439\u043c\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0439\u043c\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f",size:"small",value:z.values.name,onChange:z.handleChange,onBlur:z.handleBlur,error:z.touched.name&&Boolean(z.errors.name),helperText:z.touched.name&&z.errors.name}),(0,v.jsx)(o.Z,{id:"number",type:"text",name:"number",label:"\u0414\u0435\u0446\u0438\u043c\u0430\u043b\u044c\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0435\u0446\u0438\u043c\u0430\u043b\u044c\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440",size:"small",value:z.values.number,onChange:z.handleChange,onBlur:z.handleBlur,error:z.touched.number&&Boolean(z.errors.number),helperText:z.touched.number&&z.errors.number}),(0,v.jsx)(o.Z,{id:"weight",type:"number",name:"weight",inputProps:{min:"0.001",step:"0.001"},label:"\u0412\u0430\u0433\u0430 \u0434\u0435\u0442\u0430\u043b\u0456, \u043a\u0433.",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0432\u0430\u0433\u0443 \u0434\u0435\u0442\u0430\u043b\u0456",size:"small",value:z.values.weight,onChange:z.handleChange,onBlur:z.handleBlur,error:z.touched.weight&&Boolean(z.errors.weight),helperText:z.touched.weight&&z.errors.weight}),(0,v.jsx)(o.Z,{id:"quantity",type:"number",name:"quantity",inputProps:{min:"1",step:"1"},label:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0434\u0435\u0442\u0430\u043b\u0435\u0439 \u0437 \u043b\u0438\u0441\u0442\u0430, \u0448\u0442.",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0434\u0435\u0442\u0430\u043b\u0435\u0439 \u0437 \u043b\u0438\u0441\u0442\u0430",size:"small",value:z.values.quantity,onChange:z.handleChange,onBlur:z.handleBlur,error:z.touched.quantity&&Boolean(z.errors.quantity),helperText:z.touched.quantity&&z.errors.quantity}),(0,v.jsx)(c.Z,{id:"radio-workshop",children:"\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0432\u0438\u0440\u043e\u0431\u043d\u0438\u0447\u0443 \u0434\u0456\u043b\u044c\u043d\u0438\u0446\u044e:"}),(0,v.jsxs)(u.Z,{name:"workshop","aria-labelledby":"radio-workshop",value:z.values.workshop,onChange:z.handleChange,onBlur:z.handleBlur,sx:{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center"},children:[(0,v.jsx)(h.Z,{value:Z,control:(0,v.jsx)(l.Z,{size:"small"}),label:"\u0427\u041f\u0423"}),(0,v.jsx)(h.Z,{value:g,control:(0,v.jsx)(l.Z,{size:"small"}),label:"\u0428\u0442\u0430\u043c\u043f\u043e\u0432\u043a\u0430"})]}),z.touched.workshop&&Boolean(z.errors.workshop)&&(0,v.jsx)(d.Z,{sx:{margin:"4px 14px 0 14px",color:"#d32f2f"},children:z.touched.workshop&&z.errors.workshop}),(0,v.jsx)(o.Z,{select:!0,name:"thickness",size:"small",value:z.values.thickness,label:"\u0422\u043e\u0432\u0449\u0438\u043d\u0430 \u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b\u0443",onChange:z.handleChange,onBlur:z.handleBlur,error:z.touched.thickness&&Boolean(z.errors.thickness),helperText:z.touched.thickness&&z.errors.thickness,children:y.map((function(e){return(0,v.jsxs)(x.Z,{value:e,children:[e," \u043c\u043c."]},(0,r.x0)())}))}),(0,v.jsx)(o.Z,{select:!0,name:"sheet",size:"small",value:z.values.sheet,label:"\u0420\u043e\u0437\u043c\u0456\u0440 \u043b\u0438\u0441\u0442\u0430 \u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b\u0443",onChange:z.handleChange,onBlur:z.handleBlur,error:z.touched.sheet&&Boolean(z.errors.sheet),helperText:z.touched.sheet&&z.errors.sheet,children:j.map((function(e){return(0,v.jsx)(x.Z,{value:e,children:e},(0,r.x0)())}))}),(0,v.jsx)(p.Z,{type:"submit",variant:"contained",size:"large",sx:{width:"300px",margin:"0 auto"},children:b?(0,v.jsx)("span",{children:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u0434\u0430\u043d\u0456"}):(0,v.jsx)("span",{children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0434\u0435\u0442\u0430\u043b\u044c "})})]})}},2331:function(e,t,n){n.d(t,{q:function(){return c}});var r=n(7004),i=n(8870),s=n(3400),a=n(9823),o=n(184),c=function(e){var t=e.open,n=e.children,c=e.onClose;return(0,o.jsx)(r.Z,{open:t,children:(0,o.jsxs)(i.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:{xs:"100%",md:"500px"},maxWidth:"500px",bgcolor:"#fff",borderRadius:2,boxShadow:"0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),  0px 2px 1px rgba(0, 0, 0, 0.2)",p:4},children:[(0,o.jsx)(s.Z,{"aria-label":"close",size:"medium",onClick:function(){return c()},sx:{position:"absolute",top:3,right:3},children:(0,o.jsx)(a.Z,{fontSize:"medium",sx:{color:"#1976d2"}})}),n]})})}},8463:function(e,t,n){n.d(t,{c:function(){return a}});var r=n(7004),i=n(8870),s=n(184),a=function(e){var t=e.open,n=e.onClose,a=e.children;return(0,s.jsx)(r.Z,{open:t,onClose:n,disableRestoreFocus:!0,children:(0,s.jsx)(i.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",maxWidth:"460px",bgcolor:"#fff",borderRadius:2,boxShadow:"0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),  0px 2px 1px rgba(0, 0, 0, 0.2)",p:4},children:a})})}},7044:function(e,t,n){n.d(t,{p:function(){return s}});var r=n(9164),i=n(184),s=function(e){var t=e.children;return(0,i.jsx)(r.Z,{maxWidth:"xl",sx:{display:"flex",gap:2,height:"100vh"},children:t})}},4465:function(e,t,n){n.d(t,{a:function(){return i}});var r=[{id:"1",sizeSheet:"2500x1250 \u041e\u0446.",thicknessSheet:"0.8",weightSheet:20.8},{id:"2",sizeSheet:"2500x1250 \u041e\u0446.",thicknessSheet:"1.0",weightSheet:26},{id:"3",sizeSheet:"2500x1250 \u041e\u0446.",thicknessSheet:"1.2",weightSheet:31.2},{id:"4",sizeSheet:"2500x1250 \u041e\u0446.",thicknessSheet:"1.5",weightSheet:39},{id:"5",sizeSheet:"2500x1250 \u041e\u0446.",thicknessSheet:"2.0",weightSheet:52},{id:"6",sizeSheet:"2500x1250 \u041e\u0446.",thicknessSheet:"2.5",weightSheet:65},{id:"7",sizeSheet:"2500x1250 \u041e\u0446.",thicknessSheet:"3.0",weightSheet:78},{id:"8",sizeSheet:"2500x1250 \u0421\u04423.",thicknessSheet:"0.8",weightSheet:20.8},{id:"9",sizeSheet:"2500x1250 \u0421\u04423.",thicknessSheet:"1.0",weightSheet:26},{id:"10",sizeSheet:"2500x1250 \u0421\u04423.",thicknessSheet:"1.2",weightSheet:31.2},{id:"11",sizeSheet:"2500x1250 \u0421\u04423.",thicknessSheet:"1.5",weightSheet:39},{id:"12",sizeSheet:"2500x1250 \u0421\u04423.",thicknessSheet:"2.0",weightSheet:52},{id:"13",sizeSheet:"2500x1250 \u0421\u04423.",thicknessSheet:"2.5",weightSheet:65},{id:"14",sizeSheet:"2500x1250 \u0421\u04423.",thicknessSheet:"3.0",weightSheet:78},{id:"15",sizeSheet:"2500x1250 AISI 430",thicknessSheet:"0.8",weightSheet:20},{id:"16",sizeSheet:"2500x1250 AISI 430",thicknessSheet:"1.0",weightSheet:25},{id:"17",sizeSheet:"2500x1250 AISI 430",thicknessSheet:"1.2",weightSheet:30},{id:"18",sizeSheet:"2500x1250 AISI 430",thicknessSheet:"1.5",weightSheet:37.5},{id:"19",sizeSheet:"2500x1250 AISI 430",thicknessSheet:"2.0",weightSheet:50},{id:"20",sizeSheet:"2500x1250 AISI 430",thicknessSheet:"2.5",weightSheet:62.5},{id:"21",sizeSheet:"2500x1250 AISI 430",thicknessSheet:"3.0",weightSheet:75},{id:"22",sizeSheet:"2500x1250 AISI 304",thicknessSheet:"0.8",weightSheet:20},{id:"23",sizeSheet:"2500x1250 AISI 304",thicknessSheet:"1.0",weightSheet:25},{id:"24",sizeSheet:"2500x1250 AISI 304",thicknessSheet:"1.2",weightSheet:30},{id:"25",sizeSheet:"2500x1250 AISI 304",thicknessSheet:"1.5",weightSheet:37.5},{id:"26",sizeSheet:"2500x1250 AISI 304",thicknessSheet:"2.0",weightSheet:50},{id:"27",sizeSheet:"2500x1250 AISI 304",thicknessSheet:"2.5",weightSheet:62.5},{id:"28",sizeSheet:"2500x1250 AISI 304",thicknessSheet:"3.0",weightSheet:75}],i=function(){return r}},6050:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var r=n(1413),i=n(3433),s=n(4165),a=n(5861),o=n(9439),c=n(2791),u=n(7689),h=n(5206),l=n(8870),d=n(6151),x=n(890),p=n(3239),f=n(3372),m=n(2002),Z=n(7178),g=n(3420),v=n(7044),S=n(7663),w=n(4994),b=n(184),k=function(e){var t=e.value,n=e.onChange;return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(w.Z,{id:"filled-search",label:"\u041f\u043e\u0448\u0443\u043a \u0434\u0435\u0442\u0430\u043b\u0456",type:"search",variant:"outlined",name:"filter",sx:{width:"300px"},value:t,onChange:n})})},j=n(1087),y=n(4852),z=n(3400),C=n(2419),I=function(e){var t=e.product,n=e.index,r=e.onSelectProduct,i=e.location,s=t._id,a=t.name,o=t.number;return(0,b.jsxs)(y.ZP,{sx:{justifyContent:"space-between",borderBottom:"1px solid",gap:8},children:[(0,b.jsxs)(l.Z,{to:"/products/".concat(s),state:{from:i},component:j.rU,sx:{display:"flex",alignItems:"center",textDecoration:"none",color:"inherit",maxWidth:"260px",flexGrow:"1"},children:[(0,b.jsxs)(x.Z,{variant:"body1",mr:1,children:[n+1,"."]}),(0,b.jsxs)(l.Z,{children:[(0,b.jsx)(x.Z,{variant:"body2",sx:{overflowWrap:"break-word"},children:a}),(0,b.jsx)(x.Z,{variant:"body2",sx:{overflowWrap:"break-word"},children:o})]})]}),(0,b.jsx)(z.Z,{"aria-label":"add to order list",size:"medium",onClick:function(){r(s)},children:(0,b.jsx)(C.Z,{fontSize:"medium",sx:{color:"#1976d2"}})})]})},q=n(493),A=function(e){var t=e.products,n=e.onDeleteProduct,r=e.onOpenModalOnUpdate,i=e.onSelectProduct,s=e.location;return(0,b.jsx)(q.Z,{sx:{width:"100%",maxWidth:360,position:"relative",overflow:"auto",maxHeight:"75vh","& ul":{padding:0}},children:t.map((function(e,t){return(0,b.jsx)(I,{index:t,product:e,onDeleteProduct:n,onOpenModalOnUpdate:r,onSelectProduct:i,location:s},e._id)}))})},B=n(9281),P=n(5527),D=n(9836),T=n(6890),W=n(5855),_=n(8745),F=n(3382),O=n(383),R=n(3614),U=function(e){var t=e.products,n=e.onDeleteProductFromOrder;return(0,b.jsx)(B.Z,{component:P.Z,children:(0,b.jsxs)(D.Z,{sx:{minWidth:650},size:"small",children:[(0,b.jsx)(T.Z,{children:(0,b.jsxs)(W.Z,{sx:{position:"sticky",top:0,zIndex:1,background:"#fff"},children:[(0,b.jsx)(_.Z,{align:"center",children:"\u2116 \u043f.\u043f."}),(0,b.jsx)(_.Z,{align:"center",children:"\u041d\u0430\u0439\u043c\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f"}),(0,b.jsx)(_.Z,{align:"center",children:"\u041a\u0456\u043b.(\u0448\u0442.)"}),(0,b.jsx)(_.Z,{align:"center",children:"\u041c\u0430\u0442\u0435\u0440\u0456\u0430\u043b"}),(0,b.jsx)(_.Z,{align:"center",children:"\u0412\u0430\u0433\u0430(\u043a\u0433.)"}),(0,b.jsx)(_.Z,{align:"center",children:"\u041d\u043e\u0440\u043c\u0430(\u043a\u0433.)"}),(0,b.jsx)(_.Z,{align:"center",children:"Ho\u0440\u043c\u0430(\u0432 \u0447\u0430\u0441\u0442. \u043b\u0438\u0441\u0442\u0430) "}),(0,b.jsx)(_.Z,{align:"center",children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"})]})}),(0,b.jsx)(F.Z,{children:t.map((function(e,t){var r=e._id,i=e.name,s=e.number,a=e.reserved,o=e.weight,c=e.quantity,u=e.material,h=u.sheet,d=u.thickness;return(0,b.jsxs)(W.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,b.jsx)(_.Z,{align:"center",children:t+1}),(0,b.jsx)(_.Z,{align:"left",children:(0,b.jsxs)(l.Z,{children:[(0,b.jsx)(x.Z,{variant:"body2",sx:{overflowWrap:"break-word"},children:i}),(0,b.jsx)(x.Z,{variant:"body2",sx:{overflowWrap:"break-word"},children:s})]})}),(0,b.jsx)(_.Z,{align:"center",children:a}),(0,b.jsxs)(_.Z,{align:"center",children:[e.material.thickness,"x",e.material.sheet]}),(0,b.jsx)(_.Z,{align:"center",children:o}),(0,b.jsx)(_.Z,{align:"center",children:(0,R.s)(c,h,d)}),(0,b.jsx)(_.Z,{align:"center",children:(1/e.quantity).toFixed(5)}),(0,b.jsx)(_.Z,{align:"center",children:(0,b.jsx)(z.Z,{"aria-label":"delete",size:"medium",sx:{color:"#1976d2"},onClick:function(){return n(r)},children:(0,b.jsx)(O.Z,{fontSize:"medium"})})})]},r)}))})]})})},L=n(2331),H=n(8096),N=function(e){var t=e.onSubmit,n=e.onClose,r=e.product;return(0,b.jsxs)(H.Z,{id:"quantityProduct",variant:"standard",component:"form",onSubmit:function(e){e.preventDefault();var i=e.currentTarget,s=i.elements.reserved.value;t(s,r),n(),i.reset()},sx:{display:"flex",gap:"12px",flexDirection:"column",width:"100%"},children:[(0,b.jsx)(x.Z,{variant:"h6",component:"p",align:"center",sx:{mb:2},children:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0434\u0435\u0442\u0430\u043b\u0435\u0439"}),(0,b.jsx)(w.Z,{autoFocus:!0,type:"number",name:"reserved",variant:"outlined",label:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0434\u0435\u0442\u0430\u043b\u0435\u0439, \u0448\u0442.",inputProps:{min:"1"},defaultValue:"1"}),(0,b.jsx)(d.Z,{type:"submit",variant:"contained",size:"large",children:"OK"})]})},V=n(8463),E=n(4717),G=function(){var e=(0,c.useState)([]),t=(0,o.Z)(e,2),n=t[0],w=t[1],j=(0,c.useState)(""),y=(0,o.Z)(j,2),z=y[0],C=y[1],I=(0,c.useState)(!1),q=(0,o.Z)(I,2),B=q[0],P=q[1],D=(0,c.useState)((function(){var e=localStorage.getItem("selectedProducts");return null!==e&&""!==e?JSON.parse(e):[]})),T=(0,o.Z)(D,2),W=T[0],_=T[1],F=(0,c.useState)(null),O=(0,o.Z)(F,2),R=O[0],H=O[1],G=(0,c.useState)(!1),J=(0,o.Z)(G,2),M=J[0],X=J[1],K=(0,c.useState)(!1),Q=(0,o.Z)(K,2),Y=Q[0],$=Q[1],ee=(0,u.TH)(),te=(0,u.s0)(),ne=(0,E.a)().user,re=function(){X(!1)},ie=function(){$(!1)};(0,c.useEffect)((function(){function e(){return(e=(0,a.Z)((0,s.Z)().mark((function e(){var t,n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,P(!0),e.next=4,m.C5();case 4:t=e.sent,n=t.data,w(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),h.Am.error("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u0421\u043f\u0440\u043e\u0431\u0443\u0439 \u0437\u043d\u043e\u0432\u0443...");case 12:return e.prev=12,P(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,c.useEffect)((function(){localStorage.setItem("selectedProducts",JSON.stringify(W))}),[W]);var se=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(t){var n,r,a,o,c,u,l,d,x,p;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,r=t.number,a=t.weight,o=t.quantity,c=t.workshop,u=t.thickness,l=t.sheet,d={name:n,number:r,weight:a,quantity:o,workshop:c,material:{thickness:u,sheet:l}},e.prev=2,e.next=5,m.s2(d);case 5:x=e.sent,p=x.data,w((function(e){return[p.product].concat((0,i.Z)(e))})),h.Am.success("\u0414\u0435\u0442\u0430\u043b\u044c  ".concat(n,"-").concat(r," \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0434\u043e\u0434\u0430\u043d\u0430 \u0434\u043e \u0441\u043f\u0438\u0441\u043a\u0443")),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),409===e.t0.response.status?h.Am.error("\u0414\u0435\u0442\u0430\u043b\u044c \u0437 \u0434\u0435\u0446\u0438\u043c\u0430\u043b\u044c\u043d\u0438\u043c \u043d\u043e\u043c\u0435\u0440\u043e\u043c  ".concat(r," \u0432\u0436\u0435 \u0454 \u0432 \u0441\u043f\u0438\u0441\u043a\u0443")):h.Am.error("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u0421\u043f\u0440\u043e\u0431\u0443\u0439 \u0437\u043d\u043e\u0432\u0443...");case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=z.toLowerCase();return n.filter((function(t){var n;return t.name.toLowerCase().includes(e)||(null===(n=t.number)||void 0===n?void 0:n.toLowerCase().startsWith(e))}))}(),oe=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(t){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={user:ne.name,products:t.map((function(e){return{name:e.name,number:e.number,weight:e.weight,quantity:e.quantity,material:e.material,reserved:e.reserved}})),materials:(0,g.ei)(t)},e.prev=1,e.next=4,Z.X6(n);case 4:localStorage.removeItem("selectedProducts"),h.Am.success("\u0414\u0435\u0442\u0430\u043b\u0456 \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0434\u043e\u0434\u0430\u043d\u0456 \u0432 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u043d\u0430 \u0440\u043e\u0437\u0440\u0430\u0445\u0443\u043d\u043e\u043a \u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b\u0443."),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),h.Am.error("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u0421\u043f\u0440\u043e\u0431\u0443\u0439 \u0437\u043d\u043e\u0432\u0443...");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(v.p,{children:[(0,b.jsxs)(l.Z,{sx:{width:"380px",borderRadius:4,display:"flex",flexDirection:"column",alignItems:"center",gap:"12px",mt:10,mb:6,p:1,pt:3,backgroundColor:"#f5f5f5",boxShadow:"0 0 8px 0 rgba(0,0,0,.3)"},children:[(0,b.jsx)(d.Z,{variant:"contained",size:"large",startIcon:(0,b.jsx)(f.Z,{}),onClick:function(){X(!0)},sx:{width:"300px"},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u0438 \u0434\u0435\u0442\u0430\u043b\u044c"}),(0,b.jsx)(k,{value:z,onChange:function(e){var t=e.currentTarget.value;C(t)}}),(0,b.jsx)(x.Z,{variant:"h5",sx:{fontWeight:700},children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u0442\u0430\u043b\u0435\u0439"}),(0,b.jsxs)(l.Z,{children:[n.length>0&&(0,b.jsxs)(x.Z,{variant:"body1",align:"center",children:["\u0412\u0441\u044c\u043e\u0433\u043e \u0432 \u0431\u0430\u0437\u0456 - ",n.length," \u0434\u0435\u0442."]}),z&&(0,b.jsxs)(x.Z,{variant:"body1",align:"center",children:["\u0417\u043d\u0430\u0439\u0434\u0435\u043d\u043e \u0437\u0431\u0456\u0433\u0456\u0432 - ",ae.length]})]}),B&&(0,b.jsx)(p.Z,{size:80,sx:{mt:"auto",mb:"auto"}}),n&&(0,b.jsx)(A,{products:ae,onSelectProduct:function(e){var t=n.find((function(t){return t._id===e})),r=t._id,i=t.name,s=t.number;W.some((function(e){return e._id===r}))?h.Am.warn("\u0414\u0435\u0442\u0430\u043b\u044c ".concat(i,"- ").concat(s," \u0432\u0436\u0435 \u0454 \u0432 \u0441\u043f\u0438\u0441\u043a\u0443 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f ")):(H(t),$(!0))},location:ee})]}),(0,b.jsxs)(l.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"},borderRadius:4,flexDirection:"column",alignItems:"center",gap:"12px",mt:10,mb:6,p:1,backgroundColor:"#f5f5f5",boxShadow:"0 0 8px 0 rgba(0,0,0,.3)"},children:[(0,b.jsx)(U,{products:W,onDeleteProductFromOrder:function(e){_((function(t){return t.filter((function(t){return t._id!==e}))}))}}),(0,b.jsx)(d.Z,{variant:"contained",size:"large",disabled:W.length<=0,onClick:function(){oe(W),te("/orders")},children:"\u0421\u0444\u043e\u0440\u043c\u0443\u0432\u0430\u0442\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"})]})]}),(0,b.jsx)(L.q,{open:M,onClose:re,children:(0,b.jsx)(S.S,{onSubmit:se,onClose:re})}),(0,b.jsx)(V.c,{open:Y,onClose:ie,children:(0,b.jsx)(N,{onClose:ie,onSubmit:function(e,t){var n=(0,r.Z)((0,r.Z)({},t),{},{reserved:e});_((function(e){return[].concat((0,i.Z)(e),[n])})),H(null)},product:R})})]})}},7178:function(e,t,n){n.d(t,{H:function(){return o},X6:function(){return c},cV:function(){return u},zN:function(){return a}});var r=n(4165),i=n(5861),s=n(1243);s.Z.defaults.baseURL="https://technology-backend.onrender.com/api";var a=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/orders");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/orders/".concat(t));case 2:return n=e.sent,i=n.data,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.post("/orders",t);case 2:return n=e.sent,i=n.data,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.delete("/orders/".concat(t));case 2:return n=e.sent,i=n.data,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},2002:function(e,t,n){n.d(t,{C5:function(){return a},Tu:function(){return o},ZD:function(){return h},Zc:function(){return u},s2:function(){return c}});var r=n(4165),i=n(5861),s=n(1243);s.Z.defaults.baseURL="https://technology-backend.onrender.com/api";var a=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/products");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/products/".concat(t));case 2:return n=e.sent,i=n.data,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.post("/products",t);case 2:return n=e.sent,i=n.data,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.delete("/products/".concat(t));case 2:return n=e.sent,i=n.data,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t,n){var i,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.put("/products/".concat(t),n);case 2:return i=e.sent,a=i.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},838:function(e,t,n){function r(e){return new Date(e).toLocaleDateString("uk-UA")}n.d(t,{p:function(){return r}})},2654:function(e,t,n){function r(e){return new Date(e).toLocaleTimeString("uk-UA",{hours:!1})}n.d(t,{m:function(){return r}})},3614:function(e,t,n){n.d(t,{s:function(){return i}});var r=(0,n(4465).a)();function i(e,t,n){var i=r.find((function(e){return e.sizeSheet===t&&e.thicknessSheet===n}));return 0!==e?(i.weightSheet/e).toFixed(3):1/0}},3420:function(e,t,n){n.d(t,{p6:function(){return a.p},mr:function(){return o.m},ei:function(){return i},rZ:function(){return s}});var r=n(1413);function i(e){return function(e){return e.map((function(e){return e.material})).reduce((function(e,t){return e.some((function(e){return e.thickness===t.thickness&&e.sheet===t.sheet}))||e.push((0,r.Z)({},t)),e}),[])}(e).map((function(t){var n=e.reduce((function(e,n){return t.thickness===n.material.thickness&&t.sheet===n.material.sheet&&(e+=1/n.quantity*n.reserved),e}),0);return(0,r.Z)((0,r.Z)({},t),{},{amount:n.toFixed(3)})}))}n(3614);function s(e,t){return e.map((function(e){return e[t]})).filter((function(e,t,n){return n.indexOf(e)===t}))}n(8055),n(4412);var a=n(838),o=n(2654)}}]);
//# sourceMappingURL=50.e91c5510.chunk.js.map