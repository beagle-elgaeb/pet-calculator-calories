(this.webpackJsonpcalories=this.webpackJsonpcalories||[]).push([[0],{201:function(e,n,t){"use strict";t.r(n);t(90),t(91);var i=t(0),r=t(37),a=t.n(r),c=t(9),o=t(89),s=t(2),d=t(5),l=t(43),b=["\u044f\u043d\u0432\u0430\u0440\u044f","\u0444\u0435\u0432\u0440\u0430\u043b\u044f","\u043c\u0430\u0440\u0442\u0430","\u0430\u043f\u0440\u0435\u043b\u044f","\u043c\u0430\u044f","\u0438\u044e\u043d\u044f","\u0438\u044e\u043b\u044f","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u043e\u043a\u0442\u044f\u0431\u0440\u044f","\u043d\u043e\u044f\u0431\u0440\u044f","\u0434\u0435\u043a\u0430\u0431\u0440\u044f"];function j(e){return b[e.getMonth()]}var u,p,h,x,g,f=Object(l.b)({name:"todoItem",initialState:[],reducers:{loadState:function(e,n){return n.payload},addMeal:function(e,n){var t=n.payload,i=new Date(Date.now());e.unshift({id:Date.now(),protein:t.protein,fat:t.fat,carb:t.carb,weight:t.weight,calories:t.calories,date:"".concat(i.getDate().toString().padStart(2,"0")," ").concat(j(i))})}}}),O=f.actions,m=O.loadState,v=O.addMeal,w=f.reducer,y="#f3c700",S="#fcfbff",V="#d9cfff",k="#3f23a6",z=t(20),q=Object(z.a)(u||(u=Object(s.a)(["\n  width: 100%;\n  box-sizing: border-box;\n  padding: 20px 0;\n"]))),C=function(e){var n=e.fullness,t=e.isValid;return Object(z.a)(p||(p=Object(s.a)(["\n  position: absolute;\n  top: ",";\n  ",";\n  ",";\n  font-size: ",";\n  line-height: ",";\n  margin: 0;\n  ",";\n"])),n?"-6px":"6px",n?"background: ".concat(S,";"):"",n?t?"":"border-top: 1px solid ".concat(y,";"):"",n?"10px":"20px",n?"12px":"22px",n?"padding: 0 10px;":"")},B=function(e){var n=e.isValid;return Object(z.a)(h||(h=Object(s.a)(["\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: ",";\n  border: ",";\n  border-radius: 5px;\n  outline: none;\n  font-size: 18px;\n  line-height: 20px;\n  color: ",";\n  padding: 0 10px;\n\n  ::placeholder {\n    font-size: 14px;\n    line-height: 16px;\n    font-weight: 300;\n    color: ",";\n  }\n\n  :focus {\n    border: 1px solid ",";\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n"])),S,n?"none":"1px solid ".concat(y),k,V,V)},F=Object(z.a)(x||(x=Object(s.a)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  row-gap: 10px;\n"]))),P=t(1);var D,E,I=function(){return Object(P.jsx)(M,{})},M=d.a.footer(g||(g=Object(s.a)(["\n  ",";\n"])),q);var J=function(){return Object(P.jsx)(K,{children:Object(P.jsx)(T,{children:"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u0438\u0441\u0442\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u043a\u0430\u043b\u043e\u0440\u0438\u0439"})})},K=d.a.header(D||(D=Object(s.a)(["\n  ",";\n"])),q),T=d.a.h1(E||(E=Object(s.a)(["\n  font-size: 20px;\n  line-height: 22px;\n  font-weight: 400;\n  color: ",";\n  text-shadow: 0 1px 1px ",";\n  margin: 0;\n"])),y,k),N=t(22),L=t(7),A=t(88);var G,H,Q,R,U,W,X,Y,Z,$,_=t(24),ee=_.b({protein:_.a().max(100,"?").positive("?").required("?"),fat:_.a().max(100,"?").positive("?").required("?"),carb:_.a().max(100,"?").positive("?").required("?"),weight:_.a().max(1e3,"?").positive("?").required("?")});var ne=function(){var e=Object(c.b)(),n=Object(i.useState)(0),t=Object(L.a)(n,2),r=t[0],a=t[1],o=Object(A.a)({initialValues:{protein:null,fat:null,carb:null,weight:100},validationSchema:ee,onSubmit:function(n,t){var i=t.resetForm;e(v(Object(N.a)(Object(N.a)({},n),{},{calories:r}))),i()}}),s=o.values,d=s.protein,l=s.fat,b=s.carb,j=s.weight,u=function(e){return o.touched[e]?o.errors[e]:void 0};function p(e){("-"===e.key||Number(e.currentTarget.value)>99.99||"0"===e.currentTarget.value&&/^[0]/.test(e.key))&&e.preventDefault()}return Object(i.useEffect)((function(){a(function(e){var n=0;if(Object.values(e).includes(null))return n;var t=e.weight/100,i=4*e.protein+9*e.fat+4*e.carb;return Math.round(i*t)}(o.values))}),[o.values]),Object(P.jsxs)(te,{onSubmit:o.handleSubmit,children:[Object(P.jsx)(ie,{children:"\u0411\u0416\u0423 \u043d\u0430 100 \u0433\u0440\u0430\u043c\u043c:"}),Object(P.jsxs)(re,{children:[Object(P.jsxs)(ae,{children:[Object(P.jsx)(oe,{placeholder:"\u0435\u043b\u043a\u0438",name:"protein",type:"number",min:"0",max:"100",step:"0.01",onKeyPress:p,isValid:!u("protein"),value:null!==d&&void 0!==d?d:"",onChange:o.handleChange,onBlur:o.handleBlur}),Object(P.jsx)(ce,{fullness:!!d,isValid:!u("protein"),children:d?"\u0411\u0435\u043b\u043a\u0438":"\u0411"}),Object(P.jsx)(se,{isValid:!u("protein"),children:u("protein")})]}),Object(P.jsxs)(ae,{children:[Object(P.jsx)(oe,{placeholder:"\u0438\u0440\u044b",name:"fat",type:"number",min:"0",max:"100",step:"0.01",onKeyPress:p,isValid:!u("fat"),value:null!==l&&void 0!==l?l:"",onChange:o.handleChange,onBlur:o.handleBlur}),Object(P.jsx)(ce,{fullness:!!l,isValid:!u("fat"),children:l?"\u0416\u0438\u0440\u044b":"\u0416"}),Object(P.jsx)(se,{isValid:!u("fat"),children:u("fat")})]}),Object(P.jsxs)(ae,{children:[Object(P.jsx)(oe,{placeholder:"\u0433\u043b\u0435\u0432\u043e\u0434\u044b",name:"carb",type:"number",min:"0",max:"100",step:"0.01",onKeyPress:p,isValid:!u("carb"),value:null!==b&&void 0!==b?b:"",onChange:o.handleChange,onBlur:o.handleBlur}),Object(P.jsx)(ce,{fullness:!!b,isValid:!u("carb"),children:b?"\u0423\u0433\u043b\u0435\u0432\u043e\u0434\u044b":"\u0423"}),Object(P.jsx)(se,{isValid:!u("carb"),children:u("carb")})]})]}),Object(P.jsx)(ie,{children:"\u0412\u0435\u0441 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430:"}),Object(P.jsxs)(ae,{children:[Object(P.jsx)(le,Object(N.a)({placeholder:"\u0440\u0430\u043c\u043c",type:"number",min:"0",max:"1000",step:"0.01",onKeyPress:p,isValid:!u("weight")},o.getFieldProps("weight"))),Object(P.jsx)(de,{fullness:!!j,isValid:!u("weight"),children:j?"\u0413\u0440\u0430\u043c\u043c\u044b":"\u0413"}),Object(P.jsx)(se,{isValid:!u("weight"),children:u("weight")})]}),Object(P.jsx)(be,{type:"submit",disabled:!o.isValid,children:" \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c ".concat(0===r?"\u043d\u0435\u043c\u043d\u043e\u0433\u043e":r," \u043a\u0438\u043b\u043e\u043a\u0430\u043b\u043e\u0440\u0438\u0439")})]})},te=d.a.form(G||(G=Object(s.a)(["\n  width: 100%;\n"]))),ie=d.a.h2(H||(H=Object(s.a)(["\n  font-size: 12px;\n  line-height: 14px;\n  font-weight: 300;\n  text-align: start;\n  margin: 0 0 15px;\n"]))),re=d.a.div(Q||(Q=Object(s.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n"]))),ae=d.a.div(R||(R=Object(s.a)(["\n  height: 36px;\n  width: 100%;\n  position: relative;\n  margin: 0 0 10px;\n"]))),ce=d.a.p(U||(U=Object(s.a)(["\n  ","\n\n  ",";\n"])),C,(function(e){return e.fullness?"left: 5px;":"right: 80%;"})),oe=d.a.input(W||(W=Object(s.a)(["\n  ",";\n\n  padding-left: 21%;\n"])),B),se=d.a.div(X||(X=Object(s.a)(["\n  position: absolute;\n  bottom: -6px;\n  right: 10px;\n  background: ",";\n  border-bottom: ",";\n  font-size: 12px;\n  line-height: 14px;\n  color: ",";\n  padding: 0 10px;\n"])),S,(function(e){return e.isValid?"none":"1px solid ".concat(y)}),y),de=d.a.p(Y||(Y=Object(s.a)(["\n  ","\n\n  ",";\n"])),C,(function(e){return e.fullness?"left: 10px;":"right: 94%;"})),le=d.a.input(Z||(Z=Object(s.a)(["\n  ",";\n\n  padding-left: 6.2%;\n"])),B),be=d.a.button($||($=Object(s.a)(["\n  height: 36px;\n  width: 100%;\n  position: relative;\n  box-sizing: border-box;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 5px;\n  outline: none;\n  font-size: 18px;\n  line-height: 20px;\n  color: ",";\n  cursor: pointer;\n  margin: 10px 0;\n\n  :hover {\n    box-shadow: 0 0 5px 1px ",";\n  }\n"])),S,V,(function(e){var n=e.disabled;return"".concat(n?V:k)}),V),je=t(8),ue=t(39);var pe=function(e){var n=e.date,t={},i=Object(c.c)((function(e){return e.meals})).filter((function(e){return e.date===n})),r=0,a=0,o=0,s=0,d=0;return i.forEach((function(e){r+=e.calories,a+=e.protein,o+=e.fat,s+=e.carb,d+=e.weight})),t=Object(N.a)(Object(N.a)({},t),{},Object(ue.a)({},n,i)),Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(he,{children:t[n].map((function(e,n){return Object(P.jsxs)(xe,{children:[Object(P.jsx)(ge,{children:e.calories}),Object(P.jsx)(ge,{children:e.protein*e.weight/100}),Object(P.jsx)(ge,{children:e.fat*e.weight/100}),Object(P.jsx)(ge,{children:e.carb*e.weight/100}),Object(P.jsx)(ge,{children:e.weight})]},n)}))}),Object(P.jsxs)(fe,{children:[Object(P.jsx)(Oe,{children:r}),Object(P.jsx)(Oe,{children:a}),Object(P.jsx)(Oe,{children:o}),Object(P.jsx)(Oe,{children:s}),Object(P.jsx)(Oe,{children:d})]})]})},he=Object(je.a)("div",{target:"ejidmar4"})({name:"ti75j2",styles:"margin:0"}),xe=Object(je.a)("div",{target:"ejidmar3"})(F," justify-items:start;padding:0 10px 6px 10px;:last-child{padding:0 10px;}"),ge=Object(je.a)("div",{target:"ejidmar2"})("width:100%;border-right:1px solid ",V,";margin:0;:last-child{border-right:none;}"),fe=Object(je.a)("div",{target:"ejidmar1"})(F," justify-items:center;padding:10px;"),Oe=Object(je.a)("div",{target:"ejidmar0"})("width:100%;border-right:1px solid ",V,";font-size:18px;line-height:20px;font-weight:500;color:","#9E8100",";margin:0;:last-child{border-right:none;}");var me,ve=function(){var e=Object(c.c)((function(e){return e.meals})),n=Array.from(new Set(e.map((function(e){return e.date}))));return Object(P.jsx)(we,{children:n.map((function(e,n){return Object(P.jsxs)(ye,{children:[Object(P.jsx)(Se,{children:e}),Object(P.jsxs)(Ve,{children:[Object(P.jsx)(ke,{children:"\u043a"}),Object(P.jsx)(ke,{children:"\u0431"}),Object(P.jsx)(ke,{children:"\u0436"}),Object(P.jsx)(ke,{children:"\u0443"}),Object(P.jsx)(ke,{children:"\u0432\u0435\u0441"})]}),Object(P.jsx)(pe,{date:e})]},n)}))})},we=Object(je.a)("div",{target:"e1u3uqfb4"})({name:"xdx4gc",styles:"margin:40px 0"}),ye=Object(je.a)("div",{target:"e1u3uqfb3"})("position:relative;border:1px solid ",V,";border-radius:5px;margin:20px 0;padding:20px 10px;"),Se=Object(je.a)("h3",{target:"e1u3uqfb2"})("position:absolute;top:-12px;left:10px;background:","#ffffff",";font-size:20px;line-height:22px;font-weight:400;color:",y,";text-shadow:0 1px 1px ",k,";margin:0;padding:0 10px;"),Ve=Object(je.a)("div",{target:"e1u3uqfb1"})(F," justify-items:center;padding:10px;"),ke=Object(je.a)("div",{target:"e1u3uqfb0"})("width:100%;border-right:1px solid ",V,";font-weight:600;margin:0;:last-child{border-right:none;}");var ze,qe=function(){return Object(P.jsxs)(Ce,{children:[Object(P.jsx)(ne,{}),Object(P.jsx)(ve,{})]})},Ce=d.a.main(me||(me=Object(s.a)(["\n  ",";\n"])),q);var Be=function(){var e=Object(c.c)((function(e){return e})),n=Object(c.b)(),t="mealState";return Object(i.useEffect)((function(){var e=localStorage.getItem(t);if(e)try{n(m(JSON.parse(e).meals))}catch(i){}}),[]),Object(i.useEffect)((function(){localStorage.setItem(t,JSON.stringify(e))}),[e]),Object(P.jsxs)(Fe,{children:[Object(P.jsx)(J,{}),Object(P.jsx)(qe,{}),Object(P.jsx)(I,{})]})},Fe=d.a.div(ze||(ze=Object(s.a)(["\n  ",";\n\n  max-width: 500px;\n  min-width: 320px;\n  text-align: center;\n  color: ",";\n  margin: 0 auto;\n  padding: 20px 10px;\n"])),q,k),Pe=t(87),De=t.n(Pe),Ee=Object(l.a)({reducer:{meals:w},middleware:function(e){return e().concat(De.a)}}),Ie=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,202)).then((function(n){var t=n.getCLS,i=n.getFID,r=n.getFCP,a=n.getLCP,c=n.getTTFB;t(e),i(e),r(e),a(e),c(e)}))};a.a.render(Object(P.jsx)(i.StrictMode,{children:Object(P.jsx)(o.a,{basename:"/pet-clculator-calories",children:Object(P.jsx)(c.a,{store:Ee,children:Object(P.jsx)(Be,{})})})}),document.getElementById("root")),Ie()}},[[201,1,2]]]);
//# sourceMappingURL=main.f0ed9674.chunk.js.map