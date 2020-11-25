(this["webpackJsonpcovid-simulator"]=this["webpackJsonpcovid-simulator"]||[]).push([[0],{50:function(e,t,a){},51:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a(0),i=a.n(n),s=a(13),r=a.n(s),j=(a(50),a(17)),l=(a(51),a(11)),o=a(90),d=a(94),b=a(40),u=a(3),O=a(37),f=a.n(O),x=function(e){var t=Object(n.useRef)(null),a=e.config,i=Object(u.a)(e,["config"]),s=Object(n.useState)(),r=Object(l.a)(s,2),o=r[0],d=r[1];return Object(n.useEffect)((function(){o&&o.update({duration:500,lazy:!0})}),[a]),Object(n.useEffect)((function(){var e=t.current;d(new f.a(e,a))}),[]),Object(c.jsx)("canvas",Object(j.a)({ref:t},i))},h=a(93),m=a(61),g=a(92),p=a(102),v=Object(o.a)((function(e){return{root:{width:300},margin:{height:e.spacing(3)},control:{padding:e.spacing(2)}}})),y=[{value:.1,label:"0.1"},{value:1,label:"1.0"},{value:2,label:"2.0"},{value:3,label:"3.0"}];function w(e){return"R0=".concat(e)}var k=function(e){v();var t=e.setR0;Object(u.a)(e,["setR0"]);return Object(c.jsx)(b.a,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)(g.a,{id:"discrete-slider-always",gutterBottom:!0,children:"R0"}),Object(c.jsx)(p.a,{min:.1,max:3,defaultValue:3,getAriaValueText:w,"aria-labelledby":"discrete-slider-always",step:.1,marks:y,onChange:function(e,a){t(a)},valueLabelDisplay:"on"})]})})},S=function(){return new Worker(a.p+"static/js/GameWorker.b7829cd9.worker.js")};var F=function(e,t){var a=this;a.animationFrameId=0,a.start=function(){var c=0,n=Date.now(),i=n;return function s(){var r=Date.now(),j=r-i;j>=1e3/e&&(c++,t&&t({elapsed:r-n,frameId:c}),i=r-j%(1e3/e)),a.animationFrameId=window.requestAnimationFrame(s)}(),a},a.stop=function(){console.log(a.animationFrameId),window.cancelAnimationFrame(a.animationFrameId)}};function I(e,t){return{type:"line",data:{datasets:[{label:"Filled",data:[],fill:!0}]},options:{legend:{display:!1},title:{display:!0,text:e},scales:{xAxes:[{display:!0,type:"time"}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:t}}]}}}}var A=I("Infected","cases");A.options.scales.yAxes[0].ticks={callback:function(e,t,a){return e>=1e6?e/1e6+"M":e>=1e3?e/1e3+"K":e},min:0},A.data.datasets[0].lineTension=0;var R=I("GDP","%");R.options.scales.yAxes[0].ticks={min:-20,max:0};var D=I("R0","ratio");D.options.scales.yAxes[0].ticks={min:0,max:4};var B={infected_cfg:A,gdp_cfg:R,r0_cfg:D},C=a(95),M=a(100),_=a(31),E=a.n(_),G=a(32),P=a.n(G),T=a(19),L=Object(o.a)({root:{maxWidth:400,flexGrow:1}}),W=function(e){var t=Object(n.useState)(0),a=Object(l.a)(t,2),s=a[0],r=a[1],o=Object(n.useState)(0),u=Object(l.a)(o,2),O=u[0],f=u[1],g=Object(n.useState)(3),p=Object(l.a)(g,2),v=p[0],y=p[1],w=Object(n.useState)(),I=Object(l.a)(w,2),A=I[0],R=I[1],D=Object(n.useState)(0),_=Object(l.a)(D,2),G=_[0],W=_[1];function z(e,t,a){var c=Object(j.a)({},e);c.data.datasets[0].data.push(a),t(c)}var N=Object(n.useState)(B.infected_cfg),J=Object(l.a)(N,2),V=J[0],q=J[1],K=Object(n.useState)(B.gdp_cfg),H=Object(l.a)(K,2),Q=H[0],U=H[1],X=Object(n.useState)(B.r0_cfg),Y=Object(l.a)(X,2),Z=Y[0],$=Y[1];Object(n.useEffect)((function(){var e=new S;return R(e),e.onmessage=function(e){var t=e.data.t,a=e.data.I,c=e.data.GDP,n=e.data.R0;r(Math.floor(e.data.D)),W(100*e.data.progress),f(c),z(V,q,{t:t,y:a}),z(Q,U,{t:t,y:100*c}),z(Z,$,{t:t,y:n})},new F(1,(function(t){e.postMessage("getdata")})).start().stop}),[]),Object(n.useEffect)((function(){A&&A.postMessage({R0:v,msg:"setR0"})}),[v]);L();var ee=Object(T.a)(),te=i.a.useState(0),ae=Object(l.a)(te,2),ce=ae[0],ne=ae[1];return Object(c.jsx)(h.a,{maxWidth:"sm",children:Object(c.jsxs)(d.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"stretch",spacing:3,children:[Object(c.jsx)(d.a,{item:!0,xs:12,children:Object(c.jsx)(b.a,{children:Object(c.jsxs)(d.a,{container:!0,justify:"center",spacing:2,alignItems:"stretch",children:[Object(c.jsx)(d.a,{item:!0,children:Object(c.jsxs)(b.a,{children:["GDP: ",Math.round(100*O,2),"%"]})}),Object(c.jsx)(d.a,{item:!0,children:Object(c.jsxs)(b.a,{children:["Death Toll: ",s]})})]})})}),Object(c.jsx)(d.a,{item:!0,children:Object(c.jsx)(b.a,{children:Object(c.jsx)(m.a,{variant:"determinate",value:G})})}),Object(c.jsx)(d.a,{item:!0,children:Object(c.jsxs)(b.a,{children:[Object(c.jsx)(C.a,{variant:"dots",steps:6,position:"static",activeStep:ce,nextButton:Object(c.jsxs)(M.a,{size:"small",onClick:function(){ne((function(e){return e+1}))},disabled:5===ce,children:["Next","rtl"===ee.direction?Object(c.jsx)(E.a,{}):Object(c.jsx)(P.a,{})]}),backButton:Object(c.jsxs)(M.a,{size:"small",onClick:function(){ne((function(e){return e-1}))},disabled:0===ce,children:["rtl"===ee.direction?Object(c.jsx)(P.a,{}):Object(c.jsx)(E.a,{}),"Back"]})}),Object(c.jsx)(x,{config:V,width:100,height:50})]})}),Object(c.jsx)(d.a,{item:!0,children:Object(c.jsx)(b.a,{children:Object(c.jsx)(x,{config:Q,width:100,height:50})})}),Object(c.jsx)(d.a,{item:!0,children:Object(c.jsx)(b.a,{children:Object(c.jsx)(x,{config:Z,width:100,height:30})})}),Object(c.jsx)(d.a,{item:!0,children:Object(c.jsx)(k,{setR0:y})})]})})};a(98),a(99),a(97),a(96),a(101);var z=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)("header",{className:"App-header",children:Object(c.jsx)(W,{})})})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,103)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),i(e),s(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(z,{})}),document.getElementById("root")),N()}},[[59,1,2]]]);
//# sourceMappingURL=main.bf0f3cec.chunk.js.map