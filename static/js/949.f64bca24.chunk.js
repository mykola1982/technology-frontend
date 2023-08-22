"use strict";(self.webpackChunktechnology=self.webpackChunktechnology||[]).push([[949],{7234:function(n,t,e){e.d(t,{y:function(){return c}});var r=e(2791),a=e(890),o=e(8870),i=e(6151),s=e(184),c=function(n){var t=n.onDelete,e=n.onClose,c=n.title,d=(0,r.useRef)();return(0,r.useEffect)((function(){d.current.focus({focusVisible:!0})}),[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.Z,{variant:"h6",component:"p",align:"center",sx:{mb:2},children:c}),(0,s.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"space-evenly"},children:[(0,s.jsx)(i.Z,{variant:"contained",size:"small",onClick:function(){return t()},children:"\u0422\u0430\u043a"}),(0,s.jsx)(i.Z,{ref:d,variant:"contained",size:"small",onClick:function(){return e()},children:"Hi"})]})]})}},8463:function(n,t,e){e.d(t,{c:function(){return i}});var r=e(7004),a=e(8870),o=e(184),i=function(n){var t=n.open,e=n.onClose,i=n.children;return(0,o.jsx)(r.Z,{open:t,onClose:e,disableRestoreFocus:!0,children:(0,o.jsx)(a.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",maxWidth:"460px",bgcolor:"#fff",borderRadius:2,boxShadow:"0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),  0px 2px 1px rgba(0, 0, 0, 0.2)",p:4},children:i})})}},7044:function(n,t,e){e.d(t,{p:function(){return o}});var r=e(9164),a=e(184),o=function(n){var t=n.children;return(0,a.jsx)(r.Z,{maxWidth:"xl",sx:{display:"flex",gap:2,height:"100vh"},children:t})}},2949:function(n,t,e){e.r(t),e.d(t,{default:function(){return T}});var r=e(3433),a=e(4165),o=e(5861),i=e(9439),s=e(2791),c=e(5206),d=e(8870),l=e(1243);l.Z.defaults.baseURL="https://technology-backend.onrender.com/api";var u=function(){var n=(0,o.Z)((0,a.Z)().mark((function n(){var t,e;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.Z.get("/users");case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,o.Z)((0,a.Z)().mark((function n(t){var e,r;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.Z.post("/users",t);case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,o.Z)((0,a.Z)().mark((function n(t){var e,r;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.Z.delete("/users/".concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=e(7044),x=e(6727),g=e(5705),v=e(8096),Z=e(4994),m=e(7133),b=e(765),j=e(4989),w=e(1419),I=e(9709),y=e(7750),S=e(4717),k=e(184),L=x.Ry().shape({name:x.Z_().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c"),password:x.Z_().min(8,"\u041f\u0430\u0440\u043e\u043b\u044c \u043f\u043e\u0432\u0438\u043d\u0435\u043d \u043c\u0430\u0442\u0438 \u043d\u0435 \u043c\u0435\u043d\u0448\u0435 8 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432").required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c"),role:x.Z_().oneOf(["ADMIN","USER"]).required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c")}),C={name:"",password:"",role:"USER"},P=function(n){var t=n.addUser,e=(0,S.a)(),r=e.isLoading,i="ADMIN"===e.user.role,c=function(){var n=(0,o.Z)((0,a.Z)().mark((function n(e,r){var o;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=r.resetForm,n.prev=1,n.next=4,t(e);case 4:n.next=8;break;case 6:n.prev=6,n.t0=n.catch(1);case 8:o();case 9:case"end":return n.stop()}}),n,null,[[1,6]])})));return function(t,e){return n.apply(this,arguments)}}(),d=(0,g.TA)({initialValues:C,validationSchema:L,onSubmit:c}),l=(0,s.useCallback)((function(n){n.target.closest("#addUserForm")||d.setTouched({})}),[d]);return(0,s.useEffect)((function(){return document.addEventListener("click",l),function(){document.removeEventListener("click",l)}}),[l]),(0,k.jsxs)(v.Z,{id:"addUserForm",variant:"standard",component:"form",onSubmit:d.handleSubmit,sx:{display:"flex",gap:"12px",flexDirection:"column",width:"300px",overflowX:"auto",p:1},children:[(0,k.jsx)(Z.Z,{id:"name",type:"text",name:"name",label:"\u041b\u043e\u0433\u0456\u043d",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043c'\u044f \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430",value:d.values.name,onChange:d.handleChange,onBlur:d.handleBlur,error:d.touched.name&&Boolean(d.errors.name),helperText:d.touched.name&&d.errors.name}),(0,k.jsx)(Z.Z,{id:"password",type:"text",name:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c",value:d.values.password,onChange:d.handleChange,onBlur:d.handleBlur,error:d.touched.password&&Boolean(d.errors.password),helperText:d.touched.password&&d.errors.password}),(0,k.jsx)(m.Z,{id:"radio-buttons-group-label",children:"\u041f\u0440\u0430\u0432\u0430:"}),(0,k.jsxs)(b.Z,{"aria-labelledby":"radio-buttons-group-label",value:d.values.role,onChange:d.handleChange,name:"role",children:[(0,k.jsx)(j.Z,{value:"ADMIN",control:(0,k.jsx)(w.Z,{}),label:"\u0410\u0434\u043c\u0456\u043d\u0456\u0441\u0442\u0440\u0430\u0442\u043e\u0440"}),(0,k.jsx)(j.Z,{value:"USER",control:(0,k.jsx)(w.Z,{}),label:"\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447"})]}),(0,k.jsx)(I.Z,{type:"submit",variant:"contained",size:"large",startIcon:(0,k.jsx)(y.Z,{}),loading:r,loadingPosition:"center",disabled:!i,children:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430"})]})},E=e(9281),R=e(5527),z=e(9836),A=e(6890),M=e(5855),B=e(8745),U=e(3382),D=e(3400),F=e(383),W=function(n){var t=n.users,e=n.openModal,r=(0,S.a)().user;return(0,k.jsx)(E.Z,{component:R.Z,children:(0,k.jsxs)(z.Z,{children:[(0,k.jsx)(A.Z,{children:(0,k.jsxs)(M.Z,{sx:{position:"sticky",top:0,zIndex:1,background:"#fff"},children:[(0,k.jsx)(B.Z,{align:"center",children:"\u2116 \u043f.\u043f."}),(0,k.jsx)(B.Z,{align:"center",children:"\u0406\u043c'\u044f"}),(0,k.jsx)(B.Z,{align:"center",children:"\u041f\u0440\u0430\u0432\u0430"}),(0,k.jsx)(B.Z,{align:"center",children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"})]})}),(0,k.jsx)(U.Z,{children:null===t||void 0===t?void 0:t.map((function(n,t){var a=n._id,o=n.name,i="ADMIN"===n.role;return(0,k.jsxs)(M.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,k.jsx)(B.Z,{align:"center",children:t+1}),(0,k.jsxs)(B.Z,{align:"center",children:[" ",o]}),(0,k.jsx)(B.Z,{align:"center",children:i?"\u0410\u0434\u043c\u0456\u043d\u0456\u0441\u0442\u0440\u0430\u0442\u043e\u0440":"\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447"}),(0,k.jsx)(B.Z,{align:"center",children:(0,k.jsx)(D.Z,{sx:{color:"#1976d2"},"aria-label":"delete",size:"medium",disabled:i||"USER"===r.role,onClick:function(){return e(a)},children:(0,k.jsx)(F.Z,{fontSize:"medium"})})})]},a)}))})]})})},N=e(8463),_=e(7234),H=e(2881),T=function(){var n=(0,s.useState)([]),t=(0,i.Z)(n,2),e=t[0],l=t[1],x=(0,s.useState)(!1),g=(0,i.Z)(x,2),v=g[0],Z=g[1],m=(0,s.useState)(!1),b=(0,i.Z)(m,2),j=b[0],w=b[1],I=(0,s.useState)(null),y=(0,i.Z)(I,2),S=y[0],L=y[1];(0,s.useEffect)((function(){function n(){return(n=(0,o.Z)((0,a.Z)().mark((function n(){var t,e;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,Z(!0),n.next=4,u();case 4:t=n.sent,e=t.data,l(e),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),c.Am.error("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u0421\u043f\u0440\u043e\u0431\u0443\u0439 \u0437\u043d\u043e\u0432\u0443..."),Z(!1);case 13:return n.prev=13,Z(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,9,13,16]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]);var C=function(){w(!1)},E=function(){var n=(0,o.Z)((0,a.Z)().mark((function n(t){var e,o,i;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t,n.prev=1,Z(!0),n.next=5,p(e);case 5:o=n.sent,i=o.data,l((function(n){return[].concat((0,r.Z)(n),[i.user])})),c.Am.success(" \u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430  ".concat(t.name," \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0434\u043e\u0434\u0430\u043d\u0430 \u0434\u043e \u0441\u043f\u0438\u0441\u043a\u0443")),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),409===n.t0.response.status?c.Am.error("\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u0437 \u0456\u043c\u0435\u043d\u0435\u043c ".concat(t.name," \u0432\u0436\u0435 \u0454 \u0432 \u0441\u043f\u0438\u0441\u043a\u0443")):(c.Am.error("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u0421\u043f\u0440\u043e\u0431\u0443\u0439 \u0437\u043d\u043e\u0432\u0443..."),Z(!1));case 14:return n.prev=14,Z(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[1,11,14,17]])})));return function(t){return n.apply(this,arguments)}}(),R=function(){var n=(0,o.Z)((0,a.Z)().mark((function n(t){return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,Z(!0),n.next=4,f(t);case 4:l((function(n){return n.filter((function(n){return n._id!==t}))})),c.Am.success("\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u0438\u0439"),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),c.Am.error("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u0421\u043f\u0440\u043e\u0431\u0443\u0439 \u0437\u043d\u043e\u0432\u0443..."),Z(!1);case 12:return n.prev=12,Z(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,8,12,15]])})));return function(t){return n.apply(this,arguments)}}(),z=function(){var n=(0,o.Z)((0,a.Z)().mark((function n(){return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,R(S);case 2:L(null),C();case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,k.jsxs)(k.Fragment,{children:[v&&(0,k.jsx)(H.a,{}),(0,k.jsxs)(h.p,{children:[(0,k.jsx)(d.Z,{sx:{width:"380px",justifyContent:"center",borderRadius:4,display:"flex",mt:10,mb:6,p:1,pt:3,backgroundColor:"#f5f5f5",boxShadow:"0 0 8px 0 rgba(0,0,0,.3)"},children:(0,k.jsx)(P,{addUser:E})}),(0,k.jsx)(d.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"},borderRadius:4,flexDirection:"column",alignItems:"center",gap:"12px",mt:10,mb:6,p:1,backgroundColor:"#f5f5f5",boxShadow:"0 0 8px 0 rgba(0,0,0,.3)"},children:(0,k.jsx)(W,{users:e,openModal:function(n){w(!0),L(n)}})})]}),(0,k.jsx)(N.c,{open:j,onClose:C,children:(0,k.jsx)(_.y,{title:"\u0411\u0430\u0436\u0430\u0454\u0442\u0435 \u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430?",onDelete:z,onClose:C})})]})}},7750:function(n,t,e){var r=e(4836);t.Z=void 0;var a=r(e(5649)),o=e(184),i=(0,a.default)((0,o.jsx)("path",{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"PersonAdd");t.Z=i},9709:function(n,t,e){e.d(t,{Z:function(){return j}});var r=e(4942),a=e(3366),o=e(7462),i=e(2791),s=e(4036),c=e(7384),d=e(4419),l=e(6934),u=e(1402),p=e(6151),f=e(3239),h=e(1217);function x(n){return(0,h.Z)("MuiLoadingButton",n)}var g=(0,e(5878).Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),v=e(184),Z=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],m=(0,l.ZP)(p.Z,{shouldForwardProp:function(n){return function(n){return"ownerState"!==n&&"theme"!==n&&"sx"!==n&&"as"!==n&&"classes"!==n}(n)||"classes"===n},name:"MuiLoadingButton",slot:"Root",overridesResolver:function(n,t){return[t.root,t.startIconLoadingStart&&(0,r.Z)({},"& .".concat(g.startIconLoadingStart),t.startIconLoadingStart),t.endIconLoadingEnd&&(0,r.Z)({},"& .".concat(g.endIconLoadingEnd),t.endIconLoadingEnd)]}})((function(n){var t=n.ownerState,e=n.theme;return(0,o.Z)((0,r.Z)({},"& .".concat(g.startIconLoadingStart,", & .").concat(g.endIconLoadingEnd),{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0}),"center"===t.loadingPosition&&(0,r.Z)({transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short})},"&.".concat(g.loading),{color:"transparent"}),"start"===t.loadingPosition&&t.fullWidth&&(0,r.Z)({},"& .".concat(g.startIconLoadingStart,", & .").concat(g.endIconLoadingEnd),{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0,marginRight:-8}),"end"===t.loadingPosition&&t.fullWidth&&(0,r.Z)({},"& .".concat(g.startIconLoadingStart,", & .").concat(g.endIconLoadingEnd),{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0,marginLeft:-8}))})),b=(0,l.ZP)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:function(n,t){var e=n.ownerState;return[t.loadingIndicator,t["loadingIndicator".concat((0,s.Z)(e.loadingPosition))]]}})((function(n){var t=n.theme,e=n.ownerState;return(0,o.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===e.loadingPosition&&("outlined"===e.variant||"contained"===e.variant)&&{left:"small"===e.size?10:14},"start"===e.loadingPosition&&"text"===e.variant&&{left:6},"center"===e.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:(t.vars||t).palette.action.disabled},"end"===e.loadingPosition&&("outlined"===e.variant||"contained"===e.variant)&&{right:"small"===e.size?10:14},"end"===e.loadingPosition&&"text"===e.variant&&{right:6},"start"===e.loadingPosition&&e.fullWidth&&{position:"relative",left:-10},"end"===e.loadingPosition&&e.fullWidth&&{position:"relative",right:-10})})),j=i.forwardRef((function(n,t){var e=(0,u.Z)({props:n,name:"MuiLoadingButton"}),r=e.children,i=e.disabled,l=void 0!==i&&i,p=e.id,h=e.loading,g=void 0!==h&&h,j=e.loadingIndicator,w=e.loadingPosition,I=void 0===w?"center":w,y=e.variant,S=void 0===y?"text":y,k=(0,a.Z)(e,Z),L=(0,c.Z)(p),C=null!=j?j:(0,v.jsx)(f.Z,{"aria-labelledby":L,color:"inherit",size:16}),P=(0,o.Z)({},e,{disabled:l,loading:g,loadingIndicator:C,loadingPosition:I,variant:S}),E=function(n){var t=n.loading,e=n.loadingPosition,r=n.classes,a={root:["root",t&&"loading"],startIcon:[t&&"startIconLoading".concat((0,s.Z)(e))],endIcon:[t&&"endIconLoading".concat((0,s.Z)(e))],loadingIndicator:["loadingIndicator",t&&"loadingIndicator".concat((0,s.Z)(e))]},i=(0,d.Z)(a,x,r);return(0,o.Z)({},r,i)}(P),R=g?(0,v.jsx)(b,{className:E.loadingIndicator,ownerState:P,children:C}):null;return(0,v.jsxs)(m,(0,o.Z)({disabled:l||g,id:L,ref:t},k,{variant:S,classes:E,ownerState:P,children:["end"===P.loadingPosition?r:R,"end"===P.loadingPosition?R:r]}))}))}}]);
//# sourceMappingURL=949.f64bca24.chunk.js.map