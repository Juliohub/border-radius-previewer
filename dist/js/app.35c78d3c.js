(function(e){function r(r){for(var n,i,s=r[0],c=r[1],d=r[2],l=0,p=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(r);while(p.length)p.shift()();return a.push.apply(a,d||[]),t()}function t(){for(var e,r=0;r<a.length;r++){for(var t=a[r],n=!0,s=1;s<t.length;s++){var c=t[s];0!==o[c]&&(n=!1)}n&&(a.splice(r--,1),e=i(i.s=t[0]))}return e}var n={},o={app:0},a=[];function i(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=n,i.d=function(e,r,t){i.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,r){if(1&r&&(e=i(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)i.d(t,n,function(r){return e[r]}.bind(null,n));return t},i.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(r,"a",r),r},i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=r,s=s.slice();for(var d=0;d<s.length;d++)r(s[d]);var u=c;a.push([0,"chunk-vendors"]),t()})({0:function(e,r,t){e.exports=t("56d7")},"034f":function(e,r,t){"use strict";var n=t("85ec"),o=t.n(n);o.a},"0e5b":function(e,r,t){},3412:function(e,r,t){"use strict";var n=t("0e5b"),o=t.n(n);o.a},"4f97":function(e,r,t){"use strict";var n=t("58b0"),o=t.n(n);o.a},"56d7":function(e,r,t){"use strict";t.r(r);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{id:"app"}},[t("h1",[e._v("Border Radius Previewer")]),t("Content",{attrs:{border:e.border}}),t("ClipBoard",{attrs:{border:e.border}})],1)},a=[],i=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("section",{staticClass:"section"},[t("div",{staticClass:"center"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.border.a,expression:"border.a"}],staticClass:"a",attrs:{type:"range",min:"0",max:"100"},domProps:{value:e.border.a},on:{__r:function(r){return e.$set(e.border,"a",r.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.border.b,expression:"border.b"}],staticClass:"b",attrs:{type:"range",min:"0",max:"100"},domProps:{value:e.border.b},on:{__r:function(r){return e.$set(e.border,"b",r.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.border.c,expression:"border.c"}],staticClass:"c",attrs:{type:"range",min:"0",max:"100"},domProps:{value:e.border.c},on:{__r:function(r){return e.$set(e.border,"c",r.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.border.d,expression:"border.d"}],staticClass:"d",attrs:{type:"range",min:"0",max:"100"},domProps:{value:e.border.d},on:{__r:function(r){return e.$set(e.border,"d",r.target.value)}}}),t("div",{staticClass:"content",style:{borderRadius:e.border.a+"% "+(100-e.border.a)+"% "+(100-e.border.d)+"% "+e.border.d+"% /\n       "+e.border.b+"% "+e.border.c+"% "+(100-e.border.c)+"% "+(100-e.border.b)+"%"}})])])},s=[],c={name:"Content",props:{border:Object}},d=c,u=(t("4f97"),t("2877")),l=Object(u["a"])(d,i,s,!1,null,"65b00a6a",null),p=l.exports,b=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"clipboard"},[t("span",[e._v("border-radius:")]),t("div",{staticClass:"clip"},[e._v(" "+e._s(e.border.a+"% "+(100-e.border.a)+"% "+(100-e.border.d)+"% "+e.border.d+"% / "+e.border.b+"% "+e.border.c+"% "+(100-e.border.c)+"% "+(100-e.border.b)+"%")+" ")]),t("button",{on:{click:e.copyText}},[e._v("Copiar")]),t("transition",{attrs:{name:"textCopy"}},[e.textCopied?t("div",{staticClass:"mensagemCopy"},[e._v("Texto Copiado com Sucesso!")]):e._e()])],1)},f=[],v={name:"ClipBoard",props:{border:Object},data:function(){return{textCopied:!1}},methods:{copyText:function(){var e=this;this.$copyText(document.querySelector(".clip").innerText).then((function(){e.textCopied=!0,setTimeout((function(){e.textCopied=!1}),2e3)}))}}},m=v,y=(t("3412"),Object(u["a"])(m,b,f,!1,null,"6af28765",null)),x=y.exports,_={name:"App",components:{Content:p,ClipBoard:x},data:function(){return{border:{a:0,b:100,c:0,d:100}}}},h=_,C=(t("034f"),Object(u["a"])(h,o,a,!1,null,null,null)),g=C.exports,w=t("4eb5"),O=t.n(w);n["a"].use(O.a),n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(g)}}).$mount("#app")},"58b0":function(e,r,t){},"85ec":function(e,r,t){}});
//# sourceMappingURL=app.35c78d3c.js.map