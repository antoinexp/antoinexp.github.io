(this["webpackJsonpcovid-simulator"]=this["webpackJsonpcovid-simulator"]||[]).push([[0],{50:function(e,t,a){},51:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),s=a.n(c),i=a(13),r=a.n(i),j=(a(50),a(17)),o=(a(51),a(11)),l=a(90),d=a(94),u=a(40),b=a(3),O=a(37),f=a.n(O),x=function(e){var t=Object(c.useRef)(null),a=e.config,s=Object(b.a)(e,["config"]),i=Object(c.useState)(),r=Object(o.a)(i,2),l=r[0],d=r[1];return Object(c.useEffect)((function(){l&&l.update({duration:500,lazy:!0})}),[a]),Object(c.useEffect)((function(){var e=t.current;d(new f.a(e,a))}),[]),Object(n.jsx)("canvas",Object(j.a)({ref:t},s))},h=a(93),m=a(61),p=a(92),g=a(102),v=Object(l.a)((function(e){return{root:{width:300},margin:{height:e.spacing(3)},control:{padding:e.spacing(2)}}})),y=[{value:.1,label:"0.1"},{value:1,label:"1.0"},{value:2,label:"2.0"},{value:3,label:"3.0"}];function w(e){return"R0=".concat(e)}var k=function(e){v();var t=e.setR0;Object(b.a)(e,["setR0"]);return Object(n.jsx)(u.a,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(p.a,{id:"discrete-slider-always",gutterBottom:!0,children:"R0"}),Object(n.jsx)(g.a,{min:.1,max:3,defaultValue:3,getAriaValueText:w,"aria-labelledby":"discrete-slider-always",step:.1,marks:y,onChange:function(e,a){t(a)},valueLabelDisplay:"on"})]})})},R=function(){return new Worker(a.p+"static/js/GameWorker.b7829cd9.worker.js")};var S=function(e,t){var a=this;a.animationFrameId=0,a.start=function(){var n=0,c=Date.now(),s=c;return function i(){var r=Date.now(),j=r-s;j>=1e3/e&&(n++,t&&t({elapsed:r-c,frameId:n}),s=r-j%(1e3/e)),a.animationFrameId=window.requestAnimationFrame(i)}(),a},a.stop=function(){console.log(a.animationFrameId),window.cancelAnimationFrame(a.animationFrameId)}};function F(e,t){return{type:"line",data:{datasets:[{label:"Filled",data:[],fill:!0,pointRadius:[]}]},options:{legend:{display:!1},title:{display:!0,text:e},scales:{xAxes:[{display:!0,type:"time"}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:t}}]}}}}var I=F("Infected","cases");I.options.scales.yAxes[0].ticks={callback:function(e,t,a){return e>=1e6?e/1e6+"M":e>=1e3?e/1e3+"K":e},min:0},I.data.datasets[0].lineTension=0;var A=F("GDP","%");A.options.scales.yAxes[0].ticks={min:-20,max:0};var D=F("R0","ratio");D.options.scales.yAxes[0].ticks={min:0,max:4};var B={infected_cfg:I,gdp_cfg:A,r0_cfg:D},C=a(95),M=a(100),_=a(31),E=a.n(_),G=a(32),P=a.n(G),T=a(19),L=Object(l.a)({root:{maxWidth:400,flexGrow:1}}),W=function(e){var t=Object(c.useState)(0),a=Object(o.a)(t,2),i=a[0],r=a[1],l=Object(c.useState)(0),b=Object(o.a)(l,2),O=b[0],f=b[1],p=Object(c.useState)(3),g=Object(o.a)(p,2),v=g[0],y=g[1],w=Object(c.useState)(),F=Object(o.a)(w,2),I=F[0],A=F[1],D=Object(c.useState)(0),_=Object(o.a)(D,2),G=_[0],W=_[1];function z(e,t,a){var n=Object(j.a)({},e);n.data.datasets[0].data.push(a),n.data.datasets[0].pointRadius.push(2);var c=n.data.datasets[0].pointRadius.length;c>=3&&(n.data.datasets[0].pointRadius[c-2]=0),t(n)}var N=Object(c.useState)(B.infected_cfg),J=Object(o.a)(N,2),V=J[0],q=J[1],K=Object(c.useState)(B.gdp_cfg),H=Object(o.a)(K,2),Q=H[0],U=H[1],X=Object(c.useState)(B.r0_cfg),Y=Object(o.a)(X,2),Z=Y[0],$=Y[1];Object(c.useEffect)((function(){var e=new R;return A(e),e.onmessage=function(e){var t=e.data.t,a=e.data.I,n=e.data.GDP,c=e.data.R0;r(Math.floor(e.data.D)),W(100*e.data.progress),f(n),z(V,q,{t:t,y:a}),z(Q,U,{t:t,y:100*n}),z(Z,$,{t:t,y:c})},new S(1,(function(t){e.postMessage("getdata")})).start().stop}),[]),Object(c.useEffect)((function(){I&&I.postMessage({R0:v,msg:"setR0"})}),[v]);L();var ee=Object(T.a)(),te=s.a.useState(0),ae=Object(o.a)(te,2),ne=ae[0],ce=ae[1];return Object(n.jsx)(h.a,{maxWidth:"sm",children:Object(n.jsxs)(d.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"stretch",spacing:3,children:[Object(n.jsx)(d.a,{item:!0,xs:12,children:Object(n.jsx)(u.a,{children:Object(n.jsxs)(d.a,{container:!0,justify:"center",spacing:2,alignItems:"stretch",children:[Object(n.jsx)(d.a,{item:!0,children:Object(n.jsxs)(u.a,{children:["GDP: ",Math.round(100*O,2),"%"]})}),Object(n.jsx)(d.a,{item:!0,children:Object(n.jsxs)(u.a,{children:["Death Toll: ",i]})})]})})}),Object(n.jsx)(d.a,{item:!0,children:Object(n.jsx)(u.a,{children:Object(n.jsx)(m.a,{variant:"determinate",value:G})})}),Object(n.jsx)(d.a,{item:!0,children:Object(n.jsxs)(u.a,{children:[Object(n.jsx)(C.a,{variant:"dots",steps:6,position:"static",activeStep:ne,nextButton:Object(n.jsxs)(M.a,{size:"small",onClick:function(){ce((function(e){return e+1}))},disabled:5===ne,children:["Next","rtl"===ee.direction?Object(n.jsx)(E.a,{}):Object(n.jsx)(P.a,{})]}),backButton:Object(n.jsxs)(M.a,{size:"small",onClick:function(){ce((function(e){return e-1}))},disabled:0===ne,children:["rtl"===ee.direction?Object(n.jsx)(P.a,{}):Object(n.jsx)(E.a,{}),"Back"]})}),Object(n.jsx)(x,{config:V,width:100,height:50})]})}),Object(n.jsx)(d.a,{item:!0,children:Object(n.jsx)(u.a,{children:Object(n.jsx)(x,{config:Q,width:100,height:50})})}),Object(n.jsx)(d.a,{item:!0,children:Object(n.jsx)(u.a,{children:Object(n.jsx)(x,{config:Z,width:100,height:30})})}),Object(n.jsx)(d.a,{item:!0,children:Object(n.jsx)(k,{setR0:y})})]})})};a(98),a(99),a(97),a(96),a(101);var z=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)("header",{className:"App-header",children:Object(n.jsx)(W,{})})})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,103)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(z,{})}),document.getElementById("root")),N()}},[[59,1,2]]]);
//# sourceMappingURL=main.fff282ee.chunk.js.map