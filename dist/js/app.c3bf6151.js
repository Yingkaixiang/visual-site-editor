(function(t){function e(e){for(var o,r,a=e[0],l=e[1],u=e[2],d=0,f=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&f.push(c[r][0]),c[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);s&&s(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var l=n[a];0!==c[l]&&(o=!1)}o&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},c={app:0},i=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/visual-site-editor/dist/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var s=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"09e3":function(t,e,n){t.exports={editor:"App_editor_1vuCM",left:"App_left_11On2",main:"App_main_2xcRE",right:"App_right_3MxHp"}},"10cb":function(t,e,n){"use strict";var o=n("b6e6"),c=n.n(o);e["default"]=c.a},3524:function(t,e,n){"use strict";var o=n("cb79"),c=n.n(o);e["default"]=c.a},"39b5":function(t,e,n){"use strict";var o=n("9570"),c=n.n(o);e["default"]=c.a},"3b05":function(t,e,n){"use strict";var o=n("4b20"),c=n.n(o);e["default"]=c.a},"47d1":function(t,e,n){t.exports={main:"index_main_3Rgm5","top-blank":"index_top-blank_2EoXh","bottom-blank":"index_bottom-blank_1uV8P",content:"index_content_3EMpy",page:"index_page_jNyqk"}},"49f8":function(t,e,n){t.exports={container:"Flow_container_24LjE",component:"Flow_component_2mqrW"}},"4b20":function(t,e,n){t.exports={operator:"index_operator_3k-iY",bar:"index_bar_34oK1",btn:"index_btn_1KiFQ","btn-top":"index_btn-top_2Syi4","btn-bottom":"index_btn-bottom_3Q2Fa",handler:"index_handler_ndUEe","handler-btn":"index_handler-btn_2v_tR","handler-top":"index_handler-top_2hjzY","handler-bottom":"index_handler-bottom_2J5a1"}},7250:function(t,e,n){"use strict";var o=n("49f8"),c=n.n(o);e["default"]=c.a},"769c":function(t,e,n){"use strict";var o=n("47d1"),c=n.n(o);e["default"]=c.a},"8d8d":function(t,e,n){"use strict";var o=n("09e3"),c=n.n(o);e["default"]=c.a},9570:function(t,e,n){t.exports={interaction:"index_interaction_2ETkK"}},b6e6:function(t,e,n){t.exports={background:"Background_background_2neQ9",container:"Background_container_13h1v","container-active":"Background_container-active_hILMv"}},cb79:function(t,e,n){t.exports={container:"Flow_container_1CXHA","container-active":"Flow_container-active_1CVBC"}},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o,c=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.editor,on:{mousemove:t.onHandlerMouseMove,mouseup:t.onHandlerMouseUp}},[n("div",{class:t.$style.left},[n("Left")],1),n("div",{class:t.$style.main,attrs:{id:"main"}},[n("Main")],1),n("div",{class:t.$style.right},[n("Right")],1)])},r=[],a=n("d225"),l=n("308d"),u=n("6bb5"),s=n("4e2b"),d=n("9ab4"),f=n("2fe1"),O=n("60a3"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Button",{on:{click:t.handleDoubleClick}},[t._v("文字组件")])],1)},p=[],_=(n("1951"),n("450d"),n("eedf")),v=n.n(_),h=n("b0b4"),y=n("4bb5"),E=n("8dee"),m=n.n(E);function j(t,e,n){return{id:m.a.generate(),components:[],positionType:t,type:e,version:"v1",styles:{height:n}}}function S(t,e){return{sticks:e||["tl","tm","tr","mr","br","bm","bl","ml"],type:t,id:m.a.generate()}}var T=function(t){function e(){return Object(a["a"])(this,e),Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),Object(h["a"])(e,[{key:"scrollToBottom",value:function(){this.$nextTick(function(){o||(o=document.querySelector("#main")),o.scrollHeight>o.clientHeight&&(o.scrollTop=o.scrollHeight-o.clientHeight)})}}]),e}(O["c"]);T=d["a"]([O["a"]],T);var C=T,g=function(t){function e(){return Object(a["a"])(this,e),Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),Object(h["a"])(e,[{key:"handleDoubleClick",value:function(){var t=j("static","flow",190),e=S("text");this.doubleClick({section:t,component:e}),this.scrollToBottom()}}]),e}(Object(f["c"])(C));d["a"]([Object(y["a"])("flow/doubleClick")],g.prototype,"doubleClick",void 0),g=d["a"]([Object(O["a"])({components:{Button:v.a}})],g);var N=g,k=N,A=n("2877"),H=Object(A["a"])(k,b,p,!1,null,null,null),w=H.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.main},[n("div",{class:t.$style["top-blank"]}),n("div",{class:t.$style.content},[n("Background"),n("div",{class:t.$style.page},[n("Rendering"),n("Interaction"),n("Operator")],1)],1),n("div",{class:t.$style["bottom-blank"]})])},R=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.background},t._l(t.dataSource,function(e,o){var c;return n("div",{key:e.id,class:(c={},c[t.$style.container]=!0,c[t.$style["container-active"]]=t.backgroundHighlightIndex===o,c),style:t.getStyle(e.styles),on:{mouseenter:function(e){return t.onMouseEnter(o)},mouseleave:t.onMouseLeave,click:function(n){return t.onBackgroundClick(e,o)}}},[t._v("\n    "+t._s(e.id)+"\n  ")])}),0)},G=[],D=function(t){function e(){return Object(a["a"])(this,e),Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),Object(h["a"])(e,[{key:"dataSource",get:function(){return this.flow.dataSource}},{key:"sectionIndex",get:function(){return this.flow.index}},{key:"backgroundHighlightIndex",get:function(){return this.flow.backgroundHighlightIndex}}]),e}(O["c"]);d["a"]([Object(y["b"])("flow")],D.prototype,"flow",void 0),d["a"]([Object(y["a"])("flow/moveOnSection")],D.prototype,"moveOnSection",void 0),d["a"]([Object(y["a"])("flow/moveOutSection")],D.prototype,"moveOutSection",void 0),D=d["a"]([O["a"]],D);var $=D,B=(n("6762"),n("456d"),n("ac6a"),["width","height","top","left","bottom","right","fontSize"]);function M(t,e){return"".concat(t).concat(e)}function P(t){var e={};return t&&Object.keys(t).forEach(function(n){B.includes(n)&&(e[n]=M(t[n],"px"))}),e}var F=function(t){function e(){return Object(a["a"])(this,e),Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),Object(h["a"])(e,[{key:"getStyle",value:function(t){var e=t.height;return{height:M(e,"px")}}},{key:"onMouseEnter",value:function(t){this.moveOnSection(t)}},{key:"onMouseLeave",value:function(){this.moveOutSection()}},{key:"onBackgroundClick",value:function(t,e){this.selectSection({section:t,index:e})}}]),e}(Object(f["c"])($));d["a"]([Object(y["a"])("flow/selectSection")],F.prototype,"selectSection",void 0),F=d["a"]([O["a"]],F);var U=F,L=U,W=n("10cb");function K(t){this["$style"]=W["default"].locals||W["default"]}var V=Object(A["a"])(L,x,G,!1,K,null,null),Y=V.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.rendering},[n("Flow")],1)},J=[],q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.dataSource,function(e){return n("div",{key:e.id,class:t.$style.container,style:t.convertInlineStyle(e.styles)},[t._v("\n    "+t._s(e.id)+"\n    "),t._l(e.components,function(e){return n("div",{key:e.id,class:t.$style.component,style:e.styles},[n("ComponentX",{attrs:{type:e.type}})],1)})],2)}),0)},Q=[],z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.type?n("RichText"):t._e()},Z=[],tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("请输入文字内容")])},et=[],nt=function(t){function e(){return Object(a["a"])(this,e),Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),e}(O["c"]);nt=d["a"]([O["a"]],nt);var ot=nt,ct=ot,it=Object(A["a"])(ct,tt,et,!1,null,null,null),rt=it.exports,at=function(t){function e(){return Object(a["a"])(this,e),Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),e}(O["c"]);d["a"]([Object(O["b"])({type:String})],at.prototype,"type",void 0),at=d["a"]([Object(O["a"])({components:{RichText:rt}})],at);var lt=at,ut=lt,st=Object(A["a"])(ut,z,Z,!1,null,null,null),dt=st.exports,ft=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.convertInlineStyle=P,t}return Object(s["a"])(e,t),e}(Object(f["c"])($));ft=d["a"]([Object(O["a"])({components:{ComponentX:dt}})],ft);var Ot=ft,bt=Ot,pt=n("7250");function _t(t){this["$style"]=pt["default"].locals||pt["default"]}var vt=Object(A["a"])(bt,q,Q,!1,_t,null,null),ht=vt.exports,yt=function(t){function e(){return Object(a["a"])(this,e),Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),e}(O["c"]);yt=d["a"]([Object(O["a"])({components:{Flow:ht}})],yt);var Et=yt,mt=Et,jt=n("d948");function St(t){this["$style"]=jt["default"].locals||jt["default"]}var Tt=Object(A["a"])(mt,X,J,!1,St,null,null),Ct=Tt.exports,gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.interaction},[n("Flow")],1)},Nt=[],kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.dataSource,function(e,o){var c;return n("div",{key:e.id,class:(c={},c[t.$style.container]=!0,c[t.$style["container-active"]]=t.sectionIndex===o,c),style:t.convertInlineStyle(e.styles),on:{click:function(n){return t.handleClick(e,o)},mouseenter:function(e){return t.handleMouseEnter(o)},mouseleave:t.handleMouseLeave}})}),0)},At=[],Ht=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.convertInlineStyle=P,t}return Object(s["a"])(e,t),Object(h["a"])(e,[{key:"handleClick",value:function(t,e){this.selectSection({section:t,index:e})}},{key:"handleMouseEnter",value:function(t){this.moveOnSection(t)}},{key:"handleMouseLeave",value:function(){this.moveOutSection()}}]),e}(Object(f["c"])($));d["a"]([Object(y["a"])("flow/selectSection")],Ht.prototype,"selectSection",void 0),Ht=d["a"]([O["a"]],Ht);var wt=Ht,It=wt,Rt=n("3524");function xt(t){this["$style"]=Rt["default"].locals||Rt["default"]}var Gt=Object(A["a"])(It,kt,At,!1,xt,null,null),Dt=Gt.exports,$t=function(t){function e(){return Object(a["a"])(this,e),Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),e}(O["c"]);$t=d["a"]([Object(O["a"])({components:{Flow:Dt}})],$t);var Bt=$t,Mt=Bt,Pt=n("39b5");function Ft(t){this["$style"]=Pt["default"].locals||Pt["default"]}var Ut,Lt=Object(A["a"])(Mt,gt,Nt,!1,Ft,null,null),Wt=Lt.exports,Kt=function(){var t,e,n,o,c=this,i=c.$createElement,r=c._self._c||i;return c.isShow?r("div",{class:c.$style.operator,style:c.operatorTop},[r("div",{class:c.$style.bar},[r("Tooltip",{attrs:{content:"上插空白区域",placement:"right"}},[r("div",{class:(t={},t[c.$style.btn]=!0,t[c.$style["btn-top"]]=!0,t),on:{click:function(t){return c.onAddBtnClick("top")}}},[r("i",{staticClass:"el-icon-plus"})])]),0!==c.sectionIndex?r("Tooltip",{attrs:{content:"上移",placement:"right"}},[r("div",{class:c.$style.btn,on:{click:function(t){return c.onMoveBtnClick("forward")}}},[r("i",{staticClass:"el-icon-top"})])]):c._e(),c.sectionIndex!==c.length-1?r("Tooltip",{attrs:{content:"下移",placement:"right"}},[r("div",{class:c.$style.btn,on:{click:function(t){return c.onMoveBtnClick("backward")}}},[r("i",{staticClass:"el-icon-bottom"})])]):c._e(),r("div",{class:c.$style.btn},[r("i",{staticClass:"el-icon-setting"})]),r("Tooltip",{attrs:{content:"删除",placement:"right"}},[r("div",{class:c.$style.btn,on:{click:c.onRemoveBtnClick}},[r("i",{staticClass:"el-icon-delete"})])]),r("Tooltip",{attrs:{content:"下插空白区域",placement:"right"}},[r("div",{class:(e={},e[c.$style.btn]=!0,e[c.$style["btn-bottom"]]=!0,e),on:{click:function(t){return c.onAddBtnClick("bottom")}}},[r("i",{staticClass:"el-icon-plus"})])])],1),r("div",{class:c.$style.handler,style:c.operatorHeight},[r("div",{class:(n={},n[c.$style["handler-btn"]]=!0,n[c.$style["handler-top"]]=!0,n),on:{mousedown:function(t){return c.onHandlerMouseDown(t,"top",c.height)},dblclick:c.onHandlerDoubleClick}}),r("div",{class:(o={},o[c.$style["handler-btn"]]=!0,o[c.$style["handler-bottom"]]=!0,o),on:{mousedown:function(t){return c.onHandlerMouseDown(t,"bottom",c.height)},dblclick:c.onHandlerDoubleClick}})])]):c._e()},Vt=[],Yt=(n("0c67"),n("299c")),Xt=n.n(Yt),Jt=0,qt="bottom",Qt=!1,zt=0,Zt=0,te=function(t){function e(){return Object(a["a"])(this,e),Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),Object(h["a"])(e,[{key:"onHandlerMouseDown",value:function(t,e,n){Jt=n,qt=e,Qt=!0,zt=t.pageY,Ut||(Ut=document.querySelector("#main")),Zt=Ut.scrollTop}},{key:"onHandlerMouseUp",value:function(){Jt=0,qt="bottom",Qt=!1,zt=0}},{key:"onHandlerMouseMove",value:function(t){if(Qt){var e=t.pageY-zt,n="top"===qt?Jt-e:Jt+e;this.moveHandler(n),"top"===qt&&Ut&&(t.preventDefault(),Ut.scrollTop=Zt-e)}}}]),e}(O["c"]);d["a"]([Object(y["a"])("flow/moveHandler")],te.prototype,"moveHandler",void 0),te=d["a"]([O["a"]],te);var ee=te,ne=function(t){function e(){return Object(a["a"])(this,e),Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),Object(h["a"])(e,[{key:"onHandlerDoubleClick",value:function(){this.doubleClickHandler()}},{key:"onAddBtnClick",value:function(t){var e=j("static","flow",190);"top"===t?this.addNewSectionInFrontCurrent(e):"bottom"===t&&this.addNewSectionAtBackCurrent(e)}},{key:"onMoveBtnClick",value:function(t){"forward"===t?this.moveSectionForward():"backward"===t&&this.moveSectionBackward()}},{key:"onRemoveBtnClick",value:function(){this.removeSection()}},{key:"height",get:function(){return this.flow.operatorStyle.height}},{key:"operatorTop",get:function(){return P({top:this.flow.operatorStyle.top})}},{key:"operatorHeight",get:function(){return P({height:this.height})}},{key:"isShow",get:function(){return Boolean(this.flow.operatorStyle)}},{key:"sectionIndex",get:function(){return this.flow.index}},{key:"length",get:function(){return this.flow.dataSource.length}}]),e}(Object(f["c"])(ee));d["a"]([Object(y["b"])("flow")],ne.prototype,"flow",void 0),d["a"]([Object(y["a"])("flow/doubleClickHandler")],ne.prototype,"doubleClickHandler",void 0),d["a"]([Object(y["a"])("flow/addNewSectionInFrontCurrent")],ne.prototype,"addNewSectionInFrontCurrent",void 0),d["a"]([Object(y["a"])("flow/addNewSectionAtBackCurrent")],ne.prototype,"addNewSectionAtBackCurrent",void 0),d["a"]([Object(y["a"])("flow/moveSectionForward")],ne.prototype,"moveSectionForward",void 0),d["a"]([Object(y["a"])("flow/moveSectionBackward")],ne.prototype,"moveSectionBackward",void 0),d["a"]([Object(y["a"])("flow/removeSection")],ne.prototype,"removeSection",void 0),ne=d["a"]([Object(O["a"])({components:{Tooltip:Xt.a}})],ne);var oe=ne,ce=oe,ie=n("3b05");function re(t){this["$style"]=ie["default"].locals||ie["default"]}var ae=Object(A["a"])(ce,Kt,Vt,!1,re,null,null),le=ae.exports,ue=function(t){function e(){return Object(a["a"])(this,e),Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),e}(O["c"]);ue=d["a"]([Object(O["a"])({components:{Background:Y,Rendering:Ct,Interaction:Wt,Operator:le}})],ue);var se=ue,de=se,fe=n("769c");function Oe(t){this["$style"]=fe["default"].locals||fe["default"]}var be=Object(A["a"])(de,I,R,!1,Oe,null,null),pe=be.exports,_e=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showConf?n("div",[t._v("区域背景")]):t._e()},ve=[],he=function(t){function e(){return Object(a["a"])(this,e),Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),Object(h["a"])(e,[{key:"showConf",get:function(){return Boolean(this.flow.section)}}]),e}(O["c"]);d["a"]([Object(y["b"])("flow")],he.prototype,"flow",void 0),he=d["a"]([O["a"]],he);var ye=he,Ee=ye,me=Object(A["a"])(Ee,_e,ve,!1,null,null,null),je=me.exports,Se=function(t){function e(){return Object(a["a"])(this,e),Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),e}(Object(f["c"])(ee));Se=d["a"]([Object(O["a"])({components:{Left:w,Main:pe,Right:je}})],Se);var Te=Se,Ce=Te,ge=n("8d8d");function Ne(t){this["$style"]=ge["default"].locals||ge["default"]}var ke=Object(A["a"])(Ce,i,r,!1,Ne,null,null),Ae=ke.exports,He=n("8c4f");c["default"].use(He["a"]);var we,Ie,Re=new He["a"]({routes:[]}),xe=n("2f62"),Ge={dataSource:[],index:-1,section:null,backgroundHighlightIndex:-1,operatorStyle:null},De=Ge,$e="INSERT_TO_BOTTOM",Be="CHANGE_INDEX",Me="CHANGE_SECTION",Pe="CHANGE_SECTION_HEIGHT",Fe="AUTO_ADJUST_SECTION_HEIGHT",Ue="ADD_NEW_SECTION_IN_FRONT_CURRENT",Le="ADD_NEW_SECTION_AT_CURRENT_BACK",We="MOVE_SECTION_FORWARD",Ke="MOVE_SECTION_BACKWARD",Ve="CHANGE_BACKGROUND_HIGHLIGHT_INDEX",Ye="REMOVE_SECTION",Xe="CHANGE_OPERATOR_STYLE",Je="CHANGE_OPERATOR_HEIGHT",qe={INSERT_TO_BOTTOM:$e,CHANGE_INDEX:Be,CHANGE_SECTION:Me,CHANGE_SECTION_HEIGHT:Pe,CHANGE_BACKGROUND_HIGHLIGHT_INDEX:Ve,CHANGE_OPERATOR_STYLE:Xe,CHANGE_OPERATOR_HEIGHT:Je,AUTO_ADJUST_SECTION_HEIGHT:Fe,ADD_NEW_SECTION_IN_FRONT_CURRENT:Ue,ADD_NEW_SECTION_AT_BACK_CURRENT:Le,MOVE_SECTION_FORWARD:We,MOVE_SECTION_BACKWARD:Ke,REMOVE_SECTION:Ye},Qe={doubleClick:function(t,e){t.commit(qe.INSERT_TO_BOTTOM,e),t.commit(qe.CHANGE_SECTION,e.section),t.commit(qe.CHANGE_OPERATOR_STYLE)},selectSection:function(t,e){t.commit(qe.CHANGE_INDEX,e.index),t.commit(qe.CHANGE_SECTION,e.section),t.commit(qe.CHANGE_OPERATOR_STYLE)},moveOnSection:function(t,e){t.commit(qe.CHANGE_BACKGROUND_HIGHLIGHT_INDEX,e)},moveOutSection:function(t){t.commit(qe.CHANGE_BACKGROUND_HIGHLIGHT_INDEX,-1)},moveHandler:function(t,e){t.commit(qe.CHANGE_SECTION_HEIGHT,e),t.commit(qe.CHANGE_OPERATOR_HEIGHT,e)},doubleClickHandler:function(t){t.commit(qe.AUTO_ADJUST_SECTION_HEIGHT)},addNewSectionInFrontCurrent:function(t,e){t.commit(qe.ADD_NEW_SECTION_IN_FRONT_CURRENT,e),t.commit(qe.CHANGE_OPERATOR_STYLE)},addNewSectionAtBackCurrent:function(t,e){t.commit(qe.ADD_NEW_SECTION_AT_BACK_CURRENT,e),t.commit(qe.CHANGE_OPERATOR_STYLE)},moveSectionForward:function(t){t.commit(qe.MOVE_SECTION_FORWARD),t.commit(qe.CHANGE_OPERATOR_STYLE)},moveSectionBackward:function(t){t.commit(qe.MOVE_SECTION_BACKWARD),t.commit(qe.CHANGE_OPERATOR_STYLE)},removeSection:function(t){t.commit(qe.REMOVE_SECTION),t.commit(qe.CHANGE_OPERATOR_STYLE)}},ze=(n("8e6e"),n("bd86")),Ze=(we={},Object(ze["a"])(we,qe.CHANGE_OPERATOR_STYLE,function(t){var e=t.index,n=t.dataSource,o=t.section;if(n.length>0){for(var c=0,i=0;i<e;i+=1)c+=n[i].styles.height;var r=o?o.styles.height:0;t.operatorStyle={top:c,height:r}}else t.operatorStyle=null}),Object(ze["a"])(we,qe.CHANGE_OPERATOR_HEIGHT,function(t,e){t.operatorStyle.height=e}),we),tn=(Ie={},Object(ze["a"])(Ie,qe.INSERT_TO_BOTTOM,function(t,e){var n=e.section,o=e.component;n.components.push(o);var c=t.dataSource.push(n);t.index=c-1}),Object(ze["a"])(Ie,qe.CHANGE_INDEX,function(t,e){t.index=e}),Object(ze["a"])(Ie,qe.CHANGE_SECTION,function(t,e){t.section=e}),Object(ze["a"])(Ie,qe.CHANGE_SECTION_HEIGHT,function(t,e){t.section.styles.height=e}),Object(ze["a"])(Ie,qe.CHANGE_BACKGROUND_HIGHLIGHT_INDEX,function(t,e){t.backgroundHighlightIndex=e}),Object(ze["a"])(Ie,qe.AUTO_ADJUST_SECTION_HEIGHT,function(t,e){console.log("自动调整高度")}),Object(ze["a"])(Ie,qe.ADD_NEW_SECTION_IN_FRONT_CURRENT,function(t,e){var n=t.index;t.dataSource.splice(n,0,e),t.section=e}),Object(ze["a"])(Ie,qe.ADD_NEW_SECTION_AT_BACK_CURRENT,function(t,e){var n=t.index;t.dataSource.splice(n+1,0,e),t.index=n+1,t.section=e}),Object(ze["a"])(Ie,qe.MOVE_SECTION_FORWARD,function(t,e){var n=t.index,o=t.dataSource.splice(n,1);t.dataSource.splice(n-1,0,o[0]),t.index=n-1,t.section=o[0]}),Object(ze["a"])(Ie,qe.MOVE_SECTION_BACKWARD,function(t,e){var n=t.index,o=t.dataSource.splice(n,1);t.dataSource.splice(n+1,0,o[0]),t.index=n+1,t.section=o[0]}),Object(ze["a"])(Ie,qe.REMOVE_SECTION,function(t){var e=t.index,n=t.dataSource,o=n.length;t.dataSource.splice(e,1),1===o?(t.operatorStyle=null,t.section=null,t.index=-1):e===o-1?(t.section=n[e-1],t.index=e-1):t.section=t.dataSource[e]}),Ie);function en(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function nn(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?en(n,!0).forEach(function(e){Object(ze["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):en(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var on=nn({},Ze,{},tn),cn={namespaced:!0,state:De,actions:Qe,mutations:on};c["default"].use(xe["a"]);var rn=new xe["a"].Store({modules:{flow:cn}}),an=n("9483");Object(an["a"])("".concat("/visual-site-editor/dist/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("f5df");c["default"].config.productionTip=!1,new c["default"]({router:Re,store:rn,render:function(t){return t(Ae)}}).$mount("#app")},d948:function(t,e,n){"use strict";var o=n("dc87"),c=n.n(o);e["default"]=c.a},dc87:function(t,e,n){t.exports={rendering:"index_rendering_3g39k"}}});
//# sourceMappingURL=app.c3bf6151.js.map