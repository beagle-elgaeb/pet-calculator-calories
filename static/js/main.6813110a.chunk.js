(this.webpackJsonpcalories=this.webpackJsonpcalories||[]).push([[0],{201:function(e,n,t){"use strict";t.r(n);t(90),t(91);var i=t(0),r=t(36),a=t.n(r),c=t(9),o=t(89),d=t(2),s=t(3),l=t(42),b=["\u044f\u043d\u0432\u0430\u0440\u044f","\u0444\u0435\u0432\u0440\u0430\u043b\u044f","\u043c\u0430\u0440\u0442\u0430","\u0430\u043f\u0440\u0435\u043b\u044f","\u043c\u0430\u044f","\u0438\u044e\u043d\u044f","\u0438\u044e\u043b\u044f","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u043e\u043a\u0442\u044f\u0431\u0440\u044f","\u043d\u043e\u044f\u0431\u0440\u044f","\u0434\u0435\u043a\u0430\u0431\u0440\u044f"];function j(e){return b[e.getMonth()]}var p,x,u,h,g,f=Object(l.b)({name:"todoItem",initialState:[],reducers:{loadState:function(e,n){return n.payload},addMeal:function(e,n){var t=n.payload,i=new Date(Date.now());e.unshift({id:Date.now(),protein:t.protein,fat:t.fat,carb:t.carb,weight:t.weight,calories:t.calories,date:"".concat(i.getDate().toString().padStart(2,"0")," ").concat(j(i))})}}}),O=f.actions,m=O.loadState,v=O.addMeal,w=f.reducer,y="#f3c700",S="#ffffff",V="#fcfbff",k="#d9cfff",z="#3f23a6",C=t(20),B=Object(C.a)(p||(p=Object(d.a)(["\n  width: 100%;\n  box-sizing: border-box;\n  padding: 20px 0;\n"]))),q=function(e){var n=e.fullness,t=e.isValid;return Object(C.a)(x||(x=Object(d.a)(["\n  position: absolute;\n  top: ",";\n  ",";\n  ",";\n  font-size: ",";\n  line-height: ",";\n  margin: 0;\n  ",";\n"])),n?"-6px":"6px",n?"background: ".concat(V,";"):"",n?t?"":"border-top: 1px solid ".concat(y,";"):"",n?"10px":"20px",n?"12px":"22px",n?"padding: 0 10px;":"")},F=function(e){var n=e.isValid;return Object(C.a)(u||(u=Object(d.a)(["\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: ",";\n  border: ",";\n  border-radius: 5px;\n  outline: none;\n  font-size: 18px;\n  line-height: 20px;\n  color: ",";\n  padding: 0 10px;\n\n  ::placeholder {\n    font-size: 14px;\n    line-height: 16px;\n    font-weight: 300;\n    color: ",";\n  }\n\n  :focus {\n    border: 1px solid ",";\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n"])),V,n?"none":"1px solid ".concat(y),z,k,k)},P=Object(C.a)(h||(h=Object(d.a)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  row-gap: 10px;\n"]))),D=t(1);var E,I,M,J,K,T=function(){return Object(D.jsx)(N,{})},N=s.a.footer(g||(g=Object(d.a)(["\n  ",";\n"])),B),L=t.p+"static/media/logo.d2ce8e49.png";var A=function(){return Object(D.jsxs)(G,{children:[Object(D.jsx)(R,{}),Object(D.jsxs)(Q,{children:[Object(D.jsx)(H,{children:"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u0438\u0441\u0442\u0438\u0447\u043d\u044b\u0439"}),Object(D.jsx)(H,{children:"\u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440"}),Object(D.jsx)(H,{children:" \u043a\u0430\u043b\u043e\u0440\u0438\u0439"})]}),Object(D.jsx)(U,{})]})},G=s.a.header(E||(E=Object(d.a)(["\n  ",";\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  border-bottom: 1px solid ",";\n"])),B,y),H=s.a.h1(I||(I=Object(d.a)(["\n  font-size: 20px;\n  line-height: 22px;\n  font-weight: 400;\n  color: ",";\n  text-shadow: 0 1px 1px ",";\n  margin: 0;\n"])),y,z),Q=s.a.div(M||(M=Object(d.a)([""]))),R=s.a.div(J||(J=Object(d.a)(["\n  height: 22px;\n  width: 22px;\n  background: url(",");\n  background-size: cover;\n"])),L),U=s.a.div(K||(K=Object(d.a)(["\n  height: 19px;\n  width: 22px;\n  background: linear-gradient(\n    180deg,\n    "," 0,\n    "," 3px,\n    "," 3px,\n    "," 8px,\n    "," 8px,\n    "," 11px,\n    "," 11px,\n    "," 16px,\n    "," 16px,\n    "," 19px,\n    "," 19px\n  );\n"])),z,z,S,S,z,z,S,S,z,z,S),W=t(22),X=t(7),Y=t(88);var Z,$,_,ee,ne,te,ie,re,ae,ce,oe=t(43),de=oe.a().nullable().max(100,"?").positive("?").required("?"),se=oe.b({protein:de,fat:de,carb:de,weight:oe.a().max(1e3,"?").positive("?").required("?")});var le=function(){var e=Object(c.b)(),n=Object(i.useState)(0),t=Object(X.a)(n,2),r=t[0],a=t[1],o=Object(Y.a)({initialValues:{protein:null,fat:null,carb:null,weight:100},validationSchema:se,onSubmit:function(n,t){var i=t.resetForm;e(v(Object(W.a)(Object(W.a)({},n),{},{calories:r}))),i()}}),d=o.values,s=d.protein,l=d.fat,b=d.carb,j=d.weight,p=function(e){return o.touched[e]?o.errors[e]:void 0};function x(e){("-"===e.key||Number(e.currentTarget.value)>99.99||"0"===e.currentTarget.value&&/^[0]/.test(e.key))&&e.preventDefault()}return Object(i.useEffect)((function(){a(function(e){var n=0;if(Object.values(e).includes(null))return n;var t=e.weight/100,i=4*e.protein+9*e.fat+4*e.carb;return Math.round(i*t)}(o.values))}),[o.values]),Object(D.jsxs)(be,{onSubmit:o.handleSubmit,children:[Object(D.jsx)(je,{children:"\u0411\u0416\u0423 \u043d\u0430 100 \u0433\u0440\u0430\u043c\u043c:"}),Object(D.jsxs)(pe,{children:[Object(D.jsxs)(xe,{children:[Object(D.jsx)(he,{placeholder:"\u0435\u043b\u043a\u0438",name:"protein",type:"number",min:"0",max:"100",step:"0.01",onKeyPress:x,isValid:!p("protein"),value:null!==s&&void 0!==s?s:"",onChange:o.handleChange,onBlur:o.handleBlur}),Object(D.jsx)(ue,{fullness:!!s,isValid:!p("protein"),children:s?"\u0411\u0435\u043b\u043a\u0438":"\u0411"}),Object(D.jsx)(ge,{isValid:!p("protein"),children:p("protein")})]}),Object(D.jsxs)(xe,{children:[Object(D.jsx)(he,{placeholder:"\u0438\u0440\u044b",name:"fat",type:"number",min:"0",max:"100",step:"0.01",onKeyPress:x,isValid:!p("fat"),value:null!==l&&void 0!==l?l:"",onChange:o.handleChange,onBlur:o.handleBlur}),Object(D.jsx)(ue,{fullness:!!l,isValid:!p("fat"),children:l?"\u0416\u0438\u0440\u044b":"\u0416"}),Object(D.jsx)(ge,{isValid:!p("fat"),children:p("fat")})]}),Object(D.jsxs)(xe,{children:[Object(D.jsx)(he,{placeholder:"\u0433\u043b\u0435\u0432\u043e\u0434\u044b",name:"carb",type:"number",min:"0",max:"100",step:"0.01",onKeyPress:x,isValid:!p("carb"),value:null!==b&&void 0!==b?b:"",onChange:o.handleChange,onBlur:o.handleBlur}),Object(D.jsx)(ue,{fullness:!!b,isValid:!p("carb"),children:b?"\u0423\u0433\u043b\u0435\u0432\u043e\u0434\u044b":"\u0423"}),Object(D.jsx)(ge,{isValid:!p("carb"),children:p("carb")})]})]}),Object(D.jsx)(je,{children:"\u0412\u0435\u0441 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430:"}),Object(D.jsxs)(xe,{children:[Object(D.jsx)(Oe,Object(W.a)({placeholder:"\u0440\u0430\u043c\u043c",type:"number",min:"0",max:"1000",step:"0.01",onKeyPress:x,isValid:!p("weight")},o.getFieldProps("weight"))),Object(D.jsx)(fe,{fullness:!!j,isValid:!p("weight"),children:j?"\u0413\u0440\u0430\u043c\u043c\u044b":"\u0413"}),Object(D.jsx)(ge,{isValid:!p("weight"),children:p("weight")})]}),Object(D.jsx)(me,{type:"submit",disabled:!o.isValid,children:" \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c ".concat(0===r?"\u043d\u0435\u043c\u043d\u043e\u0433\u043e":r," \u043a\u0438\u043b\u043e\u043a\u0430\u043b\u043e\u0440\u0438\u0439")})]})},be=s.a.form(Z||(Z=Object(d.a)(["\n  width: 100%;\n"]))),je=s.a.h2($||($=Object(d.a)(["\n  font-size: 12px;\n  line-height: 14px;\n  font-weight: 300;\n  text-align: start;\n  margin: 0 0 15px;\n"]))),pe=s.a.div(_||(_=Object(d.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n"]))),xe=s.a.div(ee||(ee=Object(d.a)(["\n  height: 36px;\n  width: 100%;\n  position: relative;\n  margin: 0 0 10px;\n"]))),ue=s.a.p(ne||(ne=Object(d.a)(["\n  ","\n\n  ",";\n"])),q,(function(e){return e.fullness?"left: 5px;":"right: 80%;"})),he=s.a.input(te||(te=Object(d.a)(["\n  ",";\n\n  padding-left: 21%;\n"])),F),ge=s.a.div(ie||(ie=Object(d.a)(["\n  position: absolute;\n  bottom: -6px;\n  right: 10px;\n  background: ",";\n  border-bottom: ",";\n  font-size: 12px;\n  line-height: 14px;\n  color: ",";\n  padding: 0 10px;\n"])),V,(function(e){return e.isValid?"none":"1px solid ".concat(y)}),y),fe=s.a.p(re||(re=Object(d.a)(["\n  ","\n\n  ",";\n"])),q,(function(e){return e.fullness?"left: 10px;":"right: 94%;"})),Oe=s.a.input(ae||(ae=Object(d.a)(["\n  ",";\n\n  padding-left: 6.2%;\n"])),F),me=s.a.button(ce||(ce=Object(d.a)(["\n  height: 36px;\n  width: 100%;\n  position: relative;\n  box-sizing: border-box;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 5px;\n  outline: none;\n  font-size: 18px;\n  line-height: 20px;\n  color: ",";\n  cursor: pointer;\n  margin: 10px 0;\n\n  :hover {\n    box-shadow: 0 0 5px 1px ",";\n  }\n"])),V,k,(function(e){var n=e.disabled;return"".concat(n?k:z)}),k),ve=t(8),we=t(38);var ye=function(e){var n=e.date,t={},i=Object(c.c)((function(e){return e.meals})).filter((function(e){return e.date===n})),r=0,a=0,o=0,d=0,s=0;return i.forEach((function(e){r+=e.calories,a+=e.protein,o+=e.fat,d+=e.carb,s+=e.weight})),t=Object(W.a)(Object(W.a)({},t),{},Object(we.a)({},n,i)),Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(Se,{children:t[n].map((function(e,n){return Object(D.jsxs)(Ve,{children:[Object(D.jsx)(ke,{children:e.calories}),Object(D.jsx)(ke,{children:e.protein*e.weight/100}),Object(D.jsx)(ke,{children:e.fat*e.weight/100}),Object(D.jsx)(ke,{children:e.carb*e.weight/100}),Object(D.jsx)(ke,{children:e.weight})]},n)}))}),Object(D.jsxs)(ze,{children:[Object(D.jsx)(Ce,{children:r}),Object(D.jsx)(Ce,{children:a}),Object(D.jsx)(Ce,{children:o}),Object(D.jsx)(Ce,{children:d}),Object(D.jsx)(Ce,{children:s})]})]})},Se=Object(ve.a)("div",{target:"ejidmar4"})({name:"ti75j2",styles:"margin:0"}),Ve=Object(ve.a)("div",{target:"ejidmar3"})(P," justify-items:start;padding:0 10px 6px 10px;:last-child{padding:0 10px;}"),ke=Object(ve.a)("div",{target:"ejidmar2"})("width:100%;border-right:1px solid ",k,";margin:0;:last-child{border-right:none;}"),ze=Object(ve.a)("div",{target:"ejidmar1"})(P," justify-items:center;padding:10px;"),Ce=Object(ve.a)("div",{target:"ejidmar0"})("width:100%;border-right:1px solid ",k,";font-size:18px;line-height:20px;font-weight:500;color:","#9E8100",";margin:0;:last-child{border-right:none;}");var Be,qe=function(){var e=Object(c.c)((function(e){return e.meals})),n=Array.from(new Set(e.map((function(e){return e.date}))));return Object(D.jsx)(Fe,{children:n.map((function(e,n){return Object(D.jsxs)(Pe,{children:[Object(D.jsx)(De,{children:e}),Object(D.jsxs)(Ee,{children:[Object(D.jsx)(Ie,{children:"\u043a"}),Object(D.jsx)(Ie,{children:"\u0431"}),Object(D.jsx)(Ie,{children:"\u0436"}),Object(D.jsx)(Ie,{children:"\u0443"}),Object(D.jsx)(Ie,{children:"\u0432\u0435\u0441"})]}),Object(D.jsx)(ye,{date:e})]},n)}))})},Fe=Object(ve.a)("div",{target:"e1u3uqfb4"})({name:"xdx4gc",styles:"margin:40px 0"}),Pe=Object(ve.a)("div",{target:"e1u3uqfb3"})("position:relative;border:1px solid ",k,";border-radius:5px;margin:20px 0;padding:20px 10px;"),De=Object(ve.a)("h3",{target:"e1u3uqfb2"})("position:absolute;top:-12px;left:10px;background:",S,";font-size:20px;line-height:22px;font-weight:400;color:",y,";text-shadow:0 1px 1px ",z,";margin:0;padding:0 10px;"),Ee=Object(ve.a)("div",{target:"e1u3uqfb1"})(P," justify-items:center;padding:10px;"),Ie=Object(ve.a)("div",{target:"e1u3uqfb0"})("width:100%;border-right:1px solid ",k,";font-weight:600;margin:0;:last-child{border-right:none;}");var Me,Je=function(){return Object(D.jsxs)(Ke,{children:[Object(D.jsx)(le,{}),Object(D.jsx)(qe,{})]})},Ke=s.a.main(Be||(Be=Object(d.a)(["\n  ",";\n  border-top: 1px solid ",";\n"])),B,k);var Te=function(){var e=Object(c.c)((function(e){return e})),n=Object(c.b)(),t="mealState";return Object(i.useEffect)((function(){var e=localStorage.getItem(t);if(e)try{n(m(JSON.parse(e).meals))}catch(i){}}),[]),Object(i.useEffect)((function(){localStorage.setItem(t,JSON.stringify(e))}),[e]),Object(D.jsxs)(Ne,{children:[Object(D.jsx)(A,{}),Object(D.jsx)(Je,{}),Object(D.jsx)(T,{})]})},Ne=s.a.div(Me||(Me=Object(d.a)(["\n  ",";\n\n  max-width: 500px;\n  min-width: 320px;\n  text-align: center;\n  color: ",";\n  margin: 0 auto;\n  padding: 0 10px 20px;\n"])),B,z),Le=t(87),Ae=t.n(Le),Ge=Object(l.a)({reducer:{meals:w},middleware:function(e){return e().concat(Ae.a)}}),He=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,202)).then((function(n){var t=n.getCLS,i=n.getFID,r=n.getFCP,a=n.getLCP,c=n.getTTFB;t(e),i(e),r(e),a(e),c(e)}))};a.a.render(Object(D.jsx)(i.StrictMode,{children:Object(D.jsx)(o.a,{basename:"/pet-clculator-calories",children:Object(D.jsx)(c.a,{store:Ge,children:Object(D.jsx)(Te,{})})})}),document.getElementById("root")),He()}},[[201,1,2]]]);
//# sourceMappingURL=main.6813110a.chunk.js.map