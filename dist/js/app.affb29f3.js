(function(e){function t(t){for(var o,i,r=t[0],l=t[1],u=t[2],f=0,d=[];f<r.length;f++)i=r[f],c[i]&&d.push(c[i][0]),c[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);s&&s(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var l=n[r];0!==c[l]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},c={app:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var s=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0da4":function(e,t,n){e.exports={main:"index_main_3Rgm5","top-blank":"index_top-blank_2EoXh","bottom-blank":"index_bottom-blank_1uV8P",content:"index_content_3EMpy",page:"index_page_jNyqk"}},"10cb":function(e,t,n){"use strict";var o=n("3474"),c=n.n(o);t["default"]=c.a},3474:function(e,t,n){e.exports={background:"Background_background_2neQ9",container:"Background_container_13h1v","container-active":"Background_container-active_hILMv"}},3524:function(e,t,n){"use strict";var o=n("9073"),c=n.n(o);t["default"]=c.a},"39b5":function(e,t,n){"use strict";var o=n("f137"),c=n.n(o);t["default"]=c.a},7250:function(e,t,n){"use strict";var o=n("8709"),c=n.n(o);t["default"]=c.a},"769c":function(e,t,n){"use strict";var o=n("0da4"),c=n.n(o);t["default"]=c.a},8709:function(e,t,n){e.exports={container:"Flow_container_24LjE",component:"Flow_component_2mqrW"}},"8d8d":function(e,t,n){"use strict";var o=n("bc78"),c=n.n(o);t["default"]=c.a},9073:function(e,t,n){e.exports={container:"Flow_container_1CXHA","container-active":"Flow_container-active_1CVBC"}},bc78:function(e,t,n){e.exports={editor:"App_editor_1vuCM",left:"App_left_11On2",main:"App_main_2xcRE",right:"App_right_3MxHp"}},c548:function(e,t,n){e.exports={rendering:"index_rendering_3g39k"}},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$style.editor},[n("div",{class:e.$style.left},[n("Left")],1),n("div",{class:e.$style.main},[n("Main")],1),n("div",{class:e.$style.right})])},a=[],i=n("d225"),r=n("308d"),l=n("6bb5"),u=n("4e2b"),s=n("9ab4"),f=n("60a3"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Button",{on:{click:e.handleDoubleClick}},[e._v("文字组件")])],1)},p=[],b=(n("1951"),n("450d"),n("eedf")),v=n.n(b),O=n("b0b4"),h=n("4bb5"),_=n("8dee"),y=n.n(_);function j(e,t,n){return{id:y.a.generate(),components:[],positionType:e,type:t,version:"v1",styles:{height:n}}}function m(e,t){return{sticks:t||["tl","tm","tr","mr","br","bm","bl","ml"],type:e,id:y.a.generate()}}var g=function(e){function t(){return Object(i["a"])(this,t),Object(r["a"])(this,Object(l["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),Object(O["a"])(t,[{key:"handleDoubleClick",value:function(){var e=j("static","flow","190px"),t=m("text");this.doubleClick({section:e,component:t})}}]),t}(f["c"]);s["a"]([Object(h["a"])("flow/doubleClick")],g.prototype,"doubleClick",void 0),g=s["a"]([Object(f["a"])({components:{Button:v.a}})],g);var k=g,E=k,x=n("2877"),C=Object(x["a"])(E,d,p,!1,null,null,null),N=C.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$style.main},[n("div",{class:e.$style["top-blank"]}),n("div",{class:e.$style.content},[n("Background"),n("div",{class:e.$style.page},[n("Rendering"),n("Interaction")],1)],1),n("div",{class:e.$style["bottom-blank"]})])},I=[],$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$style.background},e._l(e.dataSource,function(t,o){var c;return n("div",{key:t.id,class:(c={},c[e.$style.container]=!0,c[e.$style["container-active"]]=e.backgroundHighlightIndex===o,c),style:e.getStyle(t.styles),on:{mouseenter:function(t){return e.handleMouseEnter(o)},mouseleave:e.handleMouseLeave}},[e._v("\n    "+e._s(t.id)+"\n  ")])}),0)},H=[],S=n("2fe1"),T=function(e){function t(){return Object(i["a"])(this,t),Object(r["a"])(this,Object(l["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),Object(O["a"])(t,[{key:"dataSource",get:function(){return this.flow.dataSource}},{key:"sectionIndex",get:function(){return this.flow.index}},{key:"backgroundHighlightIndex",get:function(){return this.flow.backgroundHighlightIndex}}]),t}(f["c"]);s["a"]([Object(h["b"])("flow")],T.prototype,"flow",void 0),s["a"]([Object(h["a"])("flow/moveOnSection")],T.prototype,"moveOnSection",void 0),s["a"]([Object(h["a"])("flow/moveOutSection")],T.prototype,"moveOutSection",void 0),T=s["a"]([f["a"]],T);var G=T,A=function(e){function t(){return Object(i["a"])(this,t),Object(r["a"])(this,Object(l["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),Object(O["a"])(t,[{key:"getStyle",value:function(e){var t=e.height;return{height:t}}},{key:"handleMouseEnter",value:function(e){this.moveOnSection(e)}},{key:"handleMouseLeave",value:function(){this.moveOutSection()}}]),t}(Object(S["c"])(G));A=s["a"]([f["a"]],A);var M=A,B=M,D=n("10cb");function R(e){this["$style"]=D["default"].locals||D["default"]}var L=Object(x["a"])(B,$,H,!1,R,null,null),X=L.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$style.rendering},[n("Flow")],1)},P=[],K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.dataSource,function(t){return n("div",{key:t.id,class:e.$style.container,style:t.styles},[e._v("\n    "+e._s(t.id)+"\n    "),e._l(t.components,function(t){return n("div",{key:t.id,class:e.$style.component,style:t.styles},[n("ComponentX",{attrs:{type:t.type}})],1)})],2)}),0)},U=[],q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.type?n("RichText"):e._e()},J=[],V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("请输入文字内容")])},Q=[],W=function(e){function t(){return Object(i["a"])(this,t),Object(r["a"])(this,Object(l["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),t}(f["c"]);W=s["a"]([f["a"]],W);var z=W,Y=z,Z=Object(x["a"])(Y,V,Q,!1,null,null,null),ee=Z.exports,te=function(e){function t(){return Object(i["a"])(this,t),Object(r["a"])(this,Object(l["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),t}(f["c"]);s["a"]([Object(f["b"])({type:String})],te.prototype,"type",void 0),te=s["a"]([Object(f["a"])({components:{RichText:ee}})],te);var ne=te,oe=ne,ce=Object(x["a"])(oe,q,J,!1,null,null,null),ae=ce.exports,ie=function(e){function t(){return Object(i["a"])(this,t),Object(r["a"])(this,Object(l["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),t}(Object(S["c"])(G));ie=s["a"]([Object(f["a"])({components:{ComponentX:ae}})],ie);var re=ie,le=re,ue=n("7250");function se(e){this["$style"]=ue["default"].locals||ue["default"]}var fe=Object(x["a"])(le,K,U,!1,se,null,null),de=fe.exports,pe=function(e){function t(){return Object(i["a"])(this,t),Object(r["a"])(this,Object(l["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),t}(f["c"]);pe=s["a"]([Object(f["a"])({components:{Flow:de}})],pe);var be=pe,ve=be,Oe=n("d948");function he(e){this["$style"]=Oe["default"].locals||Oe["default"]}var _e=Object(x["a"])(ve,F,P,!1,he,null,null),ye=_e.exports,je=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$style.interaction},[n("Flow")],1)},me=[],ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.dataSource,function(t,o){var c;return n("div",{key:t.id,class:(c={},c[e.$style.container]=!0,c[e.$style["container-active"]]=e.sectionIndex===o,c),style:t.styles,on:{click:function(n){return e.handleClick(t,o)},mouseenter:function(t){return e.handleMouseEnter(o)},mouseleave:e.handleMouseLeave}})}),0)},ke=[],Ee=function(e){function t(){return Object(i["a"])(this,t),Object(r["a"])(this,Object(l["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),Object(O["a"])(t,[{key:"handleClick",value:function(e,t){this.selectComponent({section:e,index:t})}},{key:"handleMouseEnter",value:function(e){this.moveOnSection(e)}},{key:"handleMouseLeave",value:function(){this.moveOutSection()}}]),t}(Object(S["c"])(G));s["a"]([Object(h["a"])("flow/selectComponent")],Ee.prototype,"selectComponent",void 0),Ee=s["a"]([f["a"]],Ee);var xe=Ee,Ce=xe,Ne=n("3524");function we(e){this["$style"]=Ne["default"].locals||Ne["default"]}var Ie=Object(x["a"])(Ce,ge,ke,!1,we,null,null),$e=Ie.exports,He=function(e){function t(){return Object(i["a"])(this,t),Object(r["a"])(this,Object(l["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),t}(f["c"]);He=s["a"]([Object(f["a"])({components:{Flow:$e}})],He);var Se=He,Te=Se,Ge=n("39b5");function Ae(e){this["$style"]=Ge["default"].locals||Ge["default"]}var Me=Object(x["a"])(Te,je,me,!1,Ae,null,null),Be=Me.exports,De=function(e){function t(){return Object(i["a"])(this,t),Object(r["a"])(this,Object(l["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),t}(f["c"]);De=s["a"]([Object(f["a"])({components:{Background:X,Rendering:ye,Interaction:Be}})],De);var Re=De,Le=Re,Xe=n("769c");function Fe(e){this["$style"]=Xe["default"].locals||Xe["default"]}var Pe=Object(x["a"])(Le,w,I,!1,Fe,null,null),Ke=Pe.exports,Ue=function(e){function t(){return Object(i["a"])(this,t),Object(r["a"])(this,Object(l["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),t}(f["c"]);Ue=s["a"]([Object(f["a"])({components:{Left:N,Main:Ke}})],Ue);var qe=Ue,Je=qe,Ve=n("8d8d");function Qe(e){this["$style"]=Ve["default"].locals||Ve["default"]}var We=Object(x["a"])(Je,c,a,!1,Qe,null,null),ze=We.exports,Ye=n("8c4f");o["a"].use(Ye["a"]);var Ze,et=new Ye["a"]({routes:[]}),tt=n("2f62"),nt={dataSource:[],index:-1,section:null,backgroundHighlightIndex:-1},ot=nt,ct="INSERT_TO_BOTTOM",at="CHANGE_INDEX",it="CHANGE_SECTION",rt="CHANGE_BACKGROUND_HIGHLIGHT_INDEX",lt={INSERT_TO_BOTTOM:ct,CHANGE_INDEX:at,CHANGE_SECTION:it,CHANGE_BACKGROUND_HIGHLIGHT_INDEX:rt},ut={doubleClick:function(e,t){e.commit(lt.INSERT_TO_BOTTOM,t)},selectComponent:function(e,t){e.commit(lt.CHANGE_INDEX,t.index),e.commit(lt.CHANGE_SECTION,t.section)},moveOnSection:function(e,t){e.commit(lt.CHANGE_BACKGROUND_HIGHLIGHT_INDEX,t)},moveOutSection:function(e){e.commit(lt.CHANGE_BACKGROUND_HIGHLIGHT_INDEX,-1)}},st=n("bd86"),ft=(Ze={},Object(st["a"])(Ze,lt.INSERT_TO_BOTTOM,function(e,t){var n=t.section,o=t.component;n.components.push(o);var c=e.dataSource.push(n);e.index=c-1}),Object(st["a"])(Ze,lt.CHANGE_INDEX,function(e,t){e.index=t}),Object(st["a"])(Ze,lt.CHANGE_SECTION,function(e,t){e.section=t}),Object(st["a"])(Ze,lt.CHANGE_BACKGROUND_HIGHLIGHT_INDEX,function(e,t){e.backgroundHighlightIndex=t}),Ze),dt={namespaced:!0,state:ot,actions:ut,mutations:ft};o["a"].use(tt["a"]);var pt=new tt["a"].Store({modules:{flow:dt}}),bt=n("9483");Object(bt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("f5df");o["a"].config.productionTip=!1,new o["a"]({router:et,store:pt,render:function(e){return e(ze)}}).$mount("#app")},d948:function(e,t,n){"use strict";var o=n("c548"),c=n.n(o);t["default"]=c.a},f137:function(e,t,n){e.exports={interaction:"index_interaction_2ETkK"}}});
//# sourceMappingURL=app.affb29f3.js.map