"use strict";(self.webpackChunktechnology=self.webpackChunktechnology||[]).push([[949],{7234:function(n,e,t){t.d(e,{y:function(){return c}});var r=t(2791),a=t(890),o=t(8870),i=t(6151),s=t(184),c=function(n){var e=n.onDelete,t=n.onClose,c=n.title,d=(0,r.useRef)();return(0,r.useEffect)((function(){d.current.focus({focusVisible:!0})}),[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.Z,{variant:"h6",component:"p",align:"center",sx:{mb:2},children:c}),(0,s.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"space-evenly"},children:[(0,s.jsx)(i.Z,{variant:"contained",size:"small",onClick:function(){return e()},children:"\u0422\u0430\u043a"}),(0,s.jsx)(i.Z,{ref:d,variant:"contained",size:"small",onClick:function(){return t()},children:"Hi"})]})]})}},8463:function(n,e,t){t.d(e,{c:function(){return i}});var r=t(7004),a=t(8870),o=t(184),i=function(n){var e=n.open,t=n.onClose,i=n.children;return(0,o.jsx)(r.Z,{open:e,onClose:t,disableRestoreFocus:!0,children:(0,o.jsx)(a.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",maxWidth:"460px",bgcolor:"#fff",borderRadius:2,boxShadow:"0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),  0px 2px 1px rgba(0, 0, 0, 0.2)",p:4},children:i})})}},7044:function(n,e,t){t.d(e,{p:function(){return o}});var r=t(9164),a=t(184),o=function(n){var e=n.children;return(0,a.jsx)(r.Z,{maxWidth:"xl",sx:{display:"flex",gap:2,height:"100vh"},children:e})}},2949:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var r=t(3433),a=t(4165),o=t(5861),i=t(9439),s=t(2791),c=t(5206),d=t(8870),l=t(1243);l.Z.defaults.baseURL="https://technology-backend.onrender.com/api";var u=function(){var n=(0,o.Z)((0,a.Z)().mark((function n(){var e,t;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.Z.get("/users");case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,o.Z)((0,a.Z)().mark((function n(e){var t,r;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.Z.post("/users",e);case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,o.Z)((0,a.Z)().mark((function n(e){var t,r;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.Z.delete("/users/".concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=t(7044),x=t(6727),v=t(5705),g=t(8096),Z=t(4994),m=t(7133),b=t(765),j=t(4989),w=t(1419),I=t(9709),y=t(7750),S=t(4717),L=t(184),k=x.Ry().shape({name:x.Z_().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c"),password:x.Z_().min(8,"\u041f\u0430\u0440\u043e\u043b\u044c \u043f\u043e\u0432\u0438\u043d\u0435\u043d \u043c\u0430\u0442\u0438 \u043d\u0435 \u043c\u0435\u043d\u0448\u0435 8 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432").required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c"),role:x.Z_().oneOf(["ADMIN","USER"]).required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c")}),C={name:"",password:"",role:"USER"},P=function(n){var e=n.addUser,t=(0,S.a)(),r=t.isLoading,i="ADMIN"===t.user.role,c=function(){var n=(0,o.Z)((0,a.Z)().mark((function n(t,r){var o;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=r.resetForm,n.prev=1,n.next=4,e(t);case 4:n.next=8;break;case 6:n.prev=6,n.t0=n.catch(1);case 8:o();case 9:case"end":return n.stop()}}),n,null,[[1,6]])})));return function(e,t){return n.apply(this,arguments)}}(),d=(0,v.TA)({initialValues:C,validationSchema:k,onSubmit:c}),l=(0,s.useCallback)((function(n){n.target.closest("#addUserForm")||d.setTouched({})}),[d]);return(0,s.useEffect)((function(){return document.addEventListener("click",l),function(){document.removeEventListener("click",l)}}),[l]),(0,L.jsxs)(g.Z,{id:"addUserForm",variant:"standard",component:"form",onSubmit:d.handleSubmit,sx:{display:"flex",gap:"12px",flexDirection:"column",width:"300px",overflowX:"auto",p:1},children:[(0,L.jsx)(Z.Z,{id:"name",type:"text",name:"name",label:"\u041b\u043e\u0433\u0456\u043d",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043c'\u044f \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430",value:d.values.name,onChange:d.handleChange,onBlur:d.handleBlur,error:d.touched.name&&Boolean(d.errors.name),helperText:d.touched.name&&d.errors.name}),(0,L.jsx)(Z.Z,{id:"password",type:"text",name:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c",value:d.values.password,onChange:d.handleChange,onBlur:d.handleBlur,error:d.touched.password&&Boolean(d.errors.password),helperText:d.touched.password&&d.errors.password}),(0,L.jsx)(m.Z,{id:"radio-buttons-group-label",children:"\u041f\u0440\u0430\u0432\u0430:"}),(0,L.jsxs)(b.Z,{"aria-labelledby":"radio-buttons-group-label",value:d.values.role,onChange:d.handleChange,name:"role",children:[(0,L.jsx)(j.Z,{value:"ADMIN",control:(0,L.jsx)(w.Z,{}),label:"\u0410\u0434\u043c\u0456\u043d\u0456\u0441\u0442\u0440\u0430\u0442\u043e\u0440"}),(0,L.jsx)(j.Z,{value:"USER",control:(0,L.jsx)(w.Z,{}),label:"\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447"})]}),(0,L.jsx)(I.Z,{type:"submit",variant:"contained",size:"large",startIcon:(0,L.jsx)(y.Z,{}),loading:r,loadingPosition:"center",disabled:!i,children:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430"})]})},E=t(9281),R=t(5527),A=t(9836),M=t(6890),z=t(5855),B=t(8745),U=t(3382),D=t(3400),F=t(383),W=function(n){var e=n.users,t=n.openModal,r=(0,S.a)().user;return(0,L.jsx)(E.Z,{component:R.Z,children:(0,L.jsxs)(A.Z,{children:[(0,L.jsx)(M.Z,{children:(0,L.jsxs)(z.Z,{children:[(0,L.jsx)(B.Z,{align:"center",children:"\u2116 \u043f.\u043f."}),(0,L.jsx)(B.Z,{align:"center",children:"\u0406\u043c'\u044f"}),(0,L.jsx)(B.Z,{align:"center",children:"\u041f\u0440\u0430\u0432\u0430"}),(0,L.jsx)(B.Z,{align:"center",children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"})]})}),(0,L.jsx)(U.Z,{children:null===e||void 0===e?void 0:e.map((function(n,e){var a=n._id,o=n.name,i="ADMIN"===n.role;return(0,L.jsxs)(z.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,L.jsx)(B.Z,{align:"center",children:e+1}),(0,L.jsxs)(B.Z,{align:"center",children:[" ",o]}),(0,L.jsx)(B.Z,{align:"center",children:i?"\u0410\u0434\u043c\u0456\u043d\u0456\u0441\u0442\u0440\u0430\u0442\u043e\u0440":"\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447"}),(0,L.jsx)(B.Z,{align:"center",children:(0,L.jsx)(D.Z,{sx:{color:"#1976d2"},"aria-label":"delete",size:"medium",disabled:i||"USER"===r.role,onClick:function(){return t(a)},children:(0,L.jsx)(F.Z,{fontSize:"medium"})})})]},a)}))})]})})},N=t(8463),_=t(7234),H=t(2881),T=function(){var n=(0,s.useState)([]),e=(0,i.Z)(n,2),t=e[0],l=e[1],x=(0,s.useState)(!1),v=(0,i.Z)(x,2),g=v[0],Z=v[1],m=(0,s.useState)(!1),b=(0,i.Z)(m,2),j=b[0],w=b[1],I=(0,s.useState)(null),y=(0,i.Z)(I,2),S=y[0],k=y[1];(0,s.useEffect)((function(){function n(){return(n=(0,o.Z)((0,a.Z)().mark((function n(){var e,t;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,Z(!0),n.next=4,u();case 4:e=n.sent,t=e.data,l(t),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),c.Am.error("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u0421\u043f\u0440\u043e\u0431\u0443\u0439 \u0437\u043d\u043e\u0432\u0443..."),Z(!1);case 13:return n.prev=13,Z(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,9,13,16]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]);var C=function(){w(!1)},E=function(){var n=(0,o.Z)((0,a.Z)().mark((function n(e){var t,o,i;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e,n.prev=1,Z(!0),n.next=5,p(t);case 5:o=n.sent,i=o.data,l((function(n){return[].concat((0,r.Z)(n),[i.user])})),c.Am.success(" \u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430  ".concat(e.name," \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0434\u043e\u0434\u0430\u043d\u0430 \u0434\u043e \u0441\u043f\u0438\u0441\u043a\u0443")),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),409===n.t0.response.status?c.Am.error("\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u0437 \u0456\u043c\u0435\u043d\u0435\u043c ".concat(e.name," \u0432\u0436\u0435 \u0454 \u0432 \u0441\u043f\u0438\u0441\u043a\u0443")):(c.Am.error("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u0421\u043f\u0440\u043e\u0431\u0443\u0439 \u0437\u043d\u043e\u0432\u0443..."),Z(!1));case 14:return n.prev=14,Z(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[1,11,14,17]])})));return function(e){return n.apply(this,arguments)}}(),R=function(){var n=(0,o.Z)((0,a.Z)().mark((function n(e){return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,Z(!0),n.next=4,f(e);case 4:l((function(n){return n.filter((function(n){return n._id!==e}))})),c.Am.success("\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u0438\u0439"),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),c.Am.error("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u0421\u043f\u0440\u043e\u0431\u0443\u0439 \u0437\u043d\u043e\u0432\u0443..."),Z(!1);case 12:return n.prev=12,Z(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,8,12,15]])})));return function(e){return n.apply(this,arguments)}}(),A=function(){var n=(0,o.Z)((0,a.Z)().mark((function n(){return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,R(S);case 2:k(null),C();case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,L.jsxs)(L.Fragment,{children:[g&&(0,L.jsx)(H.a,{}),(0,L.jsxs)(h.p,{children:[(0,L.jsx)(d.Z,{sx:{width:"380px",justifyContent:"center",borderRadius:4,display:"flex",mt:10,mb:6,p:1,pt:3,backgroundColor:"#f5f5f5",boxShadow:"0 0 8px 0 rgba(0,0,0,.3)"},children:(0,L.jsx)(P,{addUser:E})}),(0,L.jsx)(d.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"},borderRadius:4,flexDirection:"column",alignItems:"center",gap:"12px",mt:10,mb:6,p:1,backgroundColor:"#f5f5f5",boxShadow:"0 0 8px 0 rgba(0,0,0,.3)"},children:(0,L.jsx)(W,{users:t,openModal:function(n){w(!0),k(n)}})})]}),(0,L.jsx)(N.c,{open:j,onClose:C,children:(0,L.jsx)(_.y,{title:"\u0412\u0438 \u0431\u0430\u0436\u0430\u0454\u0442\u0435 \u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430",onDelete:A,onClose:C})})]})}},7750:function(n,e,t){var r=t(4836);e.Z=void 0;var a=r(t(5649)),o=t(184),i=(0,a.default)((0,o.jsx)("path",{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"PersonAdd");e.Z=i},9709:function(n,e,t){t.d(e,{Z:function(){return j}});var r=t(4942),a=t(3366),o=t(7462),i=t(2791),s=t(4036),c=t(7384),d=t(4419),l=t(6934),u=t(1402),p=t(6151),f=t(3239),h=t(1217);function x(n){return(0,h.Z)("MuiLoadingButton",n)}var v=(0,t(5878).Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),g=t(184),Z=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],m=(0,l.ZP)(p.Z,{shouldForwardProp:function(n){return function(n){return"ownerState"!==n&&"theme"!==n&&"sx"!==n&&"as"!==n&&"classes"!==n}(n)||"classes"===n},name:"MuiLoadingButton",slot:"Root",overridesResolver:function(n,e){return[e.root,e.startIconLoadingStart&&(0,r.Z)({},"& .".concat(v.startIconLoadingStart),e.startIconLoadingStart),e.endIconLoadingEnd&&(0,r.Z)({},"& .".concat(v.endIconLoadingEnd),e.endIconLoadingEnd)]}})((function(n){var e=n.ownerState,t=n.theme;return(0,o.Z)((0,r.Z)({},"& .".concat(v.startIconLoadingStart,", & .").concat(v.endIconLoadingEnd),{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0}),"center"===e.loadingPosition&&(0,r.Z)({transition:t.transitions.create(["background-color","box-shadow","border-color"],{duration:t.transitions.duration.short})},"&.".concat(v.loading),{color:"transparent"}),"start"===e.loadingPosition&&e.fullWidth&&(0,r.Z)({},"& .".concat(v.startIconLoadingStart,", & .").concat(v.endIconLoadingEnd),{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginRight:-8}),"end"===e.loadingPosition&&e.fullWidth&&(0,r.Z)({},"& .".concat(v.startIconLoadingStart,", & .").concat(v.endIconLoadingEnd),{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginLeft:-8}))})),b=(0,l.ZP)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:function(n,e){var t=n.ownerState;return[e.loadingIndicator,e["loadingIndicator".concat((0,s.Z)(t.loadingPosition))]]}})((function(n){var e=n.theme,t=n.ownerState;return(0,o.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===t.loadingPosition&&("outlined"===t.variant||"contained"===t.variant)&&{left:"small"===t.size?10:14},"start"===t.loadingPosition&&"text"===t.variant&&{left:6},"center"===t.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:(e.vars||e).palette.action.disabled},"end"===t.loadingPosition&&("outlined"===t.variant||"contained"===t.variant)&&{right:"small"===t.size?10:14},"end"===t.loadingPosition&&"text"===t.variant&&{right:6},"start"===t.loadingPosition&&t.fullWidth&&{position:"relative",left:-10},"end"===t.loadingPosition&&t.fullWidth&&{position:"relative",right:-10})})),j=i.forwardRef((function(n,e){var t=(0,u.Z)({props:n,name:"MuiLoadingButton"}),r=t.children,i=t.disabled,l=void 0!==i&&i,p=t.id,h=t.loading,v=void 0!==h&&h,j=t.loadingIndicator,w=t.loadingPosition,I=void 0===w?"center":w,y=t.variant,S=void 0===y?"text":y,L=(0,a.Z)(t,Z),k=(0,c.Z)(p),C=null!=j?j:(0,g.jsx)(f.Z,{"aria-labelledby":k,color:"inherit",size:16}),P=(0,o.Z)({},t,{disabled:l,loading:v,loadingIndicator:C,loadingPosition:I,variant:S}),E=function(n){var e=n.loading,t=n.loadingPosition,r=n.classes,a={root:["root",e&&"loading"],startIcon:[e&&"startIconLoading".concat((0,s.Z)(t))],endIcon:[e&&"endIconLoading".concat((0,s.Z)(t))],loadingIndicator:["loadingIndicator",e&&"loadingIndicator".concat((0,s.Z)(t))]},i=(0,d.Z)(a,x,r);return(0,o.Z)({},r,i)}(P),R=v?(0,g.jsx)(b,{className:E.loadingIndicator,ownerState:P,children:C}):null;return(0,g.jsxs)(m,(0,o.Z)({disabled:l||v,id:k,ref:e},L,{variant:S,classes:E,ownerState:P,children:["end"===P.loadingPosition?r:R,"end"===P.loadingPosition?R:r]}))}))}}]);
//# sourceMappingURL=949.d0850088.chunk.js.map