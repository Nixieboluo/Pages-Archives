(function(t){function e(e){for(var r,s,a=e[0],l=e[1],c=e[2],d=0,h=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&h.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],r=!0,a=1;a<o.length;a++){var l=o[a];0!==n[l]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=o[0]))}return t}var r={},n={app:0},i=[];function s(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=r,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(o,r,function(e){return t[e]}.bind(null,r));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=l;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"w-auto",attrs:{id:"app"}},[o("Editor")],1)},i=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"h-screen"},[o("div",{staticClass:"fixed flex flex-row w-full pt-2 pb-1 pl-2 space-x-2 overflow-x-scroll overflow-y-hidden v-scroll overflow-fix"},[o("div",{staticClass:"flex flex-row space-x-1"},[o("button",{staticClass:"btn btn-toggle",on:{click:function(e){t.toolbarToggle.File=!t.toolbarToggle.File}}},[t._v(" File ")]),o("Toolbar_File",{directives:[{name:"show",rawName:"v-show",value:t.toolbarToggle.File,expression:"toolbarToggle.File"}],attrs:{editor:t.editor}})],1),o("div",{staticClass:"flex flex-row space-x-1"},[o("button",{staticClass:"btn btn-toggle",on:{click:function(e){t.toolbarToggle.Basic=!t.toolbarToggle.Basic}}},[t._v(" Basic ")]),o("Toolbar_Basic",{directives:[{name:"show",rawName:"v-show",value:t.toolbarToggle.Basic,expression:"toolbarToggle.Basic"}],attrs:{editor:t.editor}})],1),o("div",{staticClass:"flex flex-row space-x-1"},[o("button",{staticClass:"btn btn-toggle",on:{click:function(e){t.toolbarToggle.Action=!t.toolbarToggle.Action}}},[t._v(" Action ")]),o("Toolbar_Action",{directives:[{name:"show",rawName:"v-show",value:t.toolbarToggle.Action,expression:"toolbarToggle.Action"}],attrs:{editor:t.editor}})],1),o("div",{staticClass:"flex flex-row space-x-1"},[o("button",{staticClass:"btn btn-toggle",on:{click:function(e){t.toolbarToggle.Selection=!t.toolbarToggle.Selection}}},[t._v(" Selection ")]),o("Toolbar_Selection",{directives:[{name:"show",rawName:"v-show",value:t.toolbarToggle.Selection,expression:"toolbarToggle.Selection"}],attrs:{editor:t.editor}})],1),o("div",{staticClass:"flex flex-row space-x-1"},[o("button",{staticClass:"btn btn-toggle",on:{click:function(e){t.toolbarToggle.View=!t.toolbarToggle.View}}},[t._v(" View ")]),o("Toolbar_View",{directives:[{name:"show",rawName:"v-show",value:t.toolbarToggle.View,expression:"toolbarToggle.View"}],attrs:{editor:t.editor}})],1)]),o("div",{staticClass:"fixed w-full",staticStyle:{height:"calc(100vh - 3.5rem)",top:"3.5rem"},attrs:{id:"editor"}})])},a=[],l=(o("4160"),o("a15b"),o("d3b7"),o("159b"),o("33f9")),c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex flex-row space-x-1"},[o("div",{staticClass:"flex flex-row btn-group"},[o("button",{on:{click:t.comment}},[o("svg",{staticClass:"m-auto feather feather-plus",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("line",{attrs:{x1:"12",y1:"5",x2:"12",y2:"19"}}),o("line",{attrs:{x1:"5",y1:"12",x2:"19",y2:"12"}})])]),o("button",{on:{click:t.uncomment}},[o("svg",{staticClass:"m-auto feather feather-minus",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("line",{attrs:{x1:"5",y1:"12",x2:"19",y2:"12"}})])])]),o("div",{staticClass:"flex flex-row btn-group"},[o("button",{on:{click:t.trim}},[t._v(" Trim ")]),o("button",{on:{click:function(e){return t.trim("selected")}}},[t._v(" Trim Selected ")])])])},u=[],d=(o("ac1f"),o("5319"),o("498a"),{name:"Toolbar_Action",props:["editor"],created:function(){window.trim=this.trim},methods:{comment:function(){this.editor.trigger("comment","editor.action.addCommentLine","comment"),this.editor.focus()},uncomment:function(){var t=new l["Range"](this.editor.getSelection().startLineNumber,1,this.editor.getSelection().endLineNumber,this.editor.getModel().getLineMaxColumn(this.editor.getSelection().endLineNumber)),e=this.editor.getModel().getValueInRange(t);e=e.replace(/^(\/\/ ?)+/gm,""),this.editor.executeEdits("trim",[{range:t,text:e}]),this.editor.focus()},trim:function(t){var e=new l["Range"](1,1,this.editor.getModel().getLineCount(),this.editor.getModel().getLineMaxColumn(this.editor.getModel().getLineCount())),o=this.editor.getValue();"selected"==t&&(e=new l["Range"](this.editor.getSelection().startLineNumber,1,this.editor.getSelection().endLineNumber,this.editor.getModel().getLineMaxColumn(this.editor.getSelection().endLineNumber)),o=this.editor.getModel().getValueInRange(e)),o=o.replace(/^[^/]{2}.*$/gm,""),o=o.replace(/^(\r|\n|\r\n)*/gm,""),this.editor.executeEdits("trim",[{range:e,text:o}]),this.editor.focus(),this.editor.setPosition(new l["Position"](e.startLineNumber,1))}}}),h=d,g=o("2877"),f=Object(g["a"])(h,c,u,!1,null,null,null),p=f.exports,w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex flex-row space-x-1"},[o("div",{staticClass:"flex flex-row btn-group"},[o("button",[o("svg",{staticClass:"m-auto feather feather-circle",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("circle",{attrs:{cx:"12",cy:"12",r:"10"}})])]),o("button",{on:{click:t.focus}},[o("svg",{staticClass:"m-auto feather feather-square",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("rect",{attrs:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}})])])]),o("div",{staticClass:"flex flex-row btn-group"},[o("button",{on:{click:t.copy}},[o("svg",{staticClass:"m-auto feather feather-copy",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("rect",{attrs:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}}),o("path",{attrs:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"}})])]),o("button",{on:{click:t.cut}},[o("svg",{staticClass:"m-auto feather feather-scissors",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("circle",{attrs:{cx:"6",cy:"6",r:"3"}}),o("circle",{attrs:{cx:"6",cy:"18",r:"3"}}),o("line",{attrs:{x1:"20",y1:"4",x2:"8.12",y2:"15.88"}}),o("line",{attrs:{x1:"14.47",y1:"14.48",x2:"20",y2:"20"}}),o("line",{attrs:{x1:"8.12",y1:"8.12",x2:"12",y2:"12"}})])])]),o("div",{staticClass:"flex flex-row btn-group"},[o("button",{on:{click:t.undo}},[o("svg",{staticClass:"m-auto feather feather-rotate-ccw",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("polyline",{attrs:{points:"1 4 1 10 7 10"}}),o("path",{attrs:{d:"M3.51 15a9 9 0 1 0 2.13-9.36L1 10"}})])]),o("button",{on:{click:t.redo}},[o("svg",{staticClass:"m-auto feather feather-rotate-cw",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("polyline",{attrs:{points:"23 4 23 10 17 10"}}),o("path",{attrs:{d:"M20.49 15a9 9 0 1 1-2.12-9.36L23 10"}})])])])])},m=[],v={name:"Toolbar_Basic",props:["editor"],methods:{focus:function(){this.editor.focus()},copy:function(){this.editor.trigger("copy","editor.action.clipboardCopyAction","copy"),this.editor.focus()},cut:function(){this.editor.trigger("cut","editor.action.clipboardCutAction","cut"),this.editor.focus()},undo:function(){this.editor.trigger("undo","undo","undo"),this.editor.focus()},redo:function(){this.editor.trigger("redo","redo","redo"),this.editor.focus()}}},x=v,b=Object(g["a"])(x,w,m,!1,null,null,null),y=b.exports,k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex flex-row space-x-1"},[o("div",{staticClass:"flex flex-row btn-group"},[o("button",[t._v("Dummy1")]),o("button",[t._v("Dummy2")]),o("button",[t._v("Dummy3")]),o("button",[t._v("Dummy4")]),o("button",[t._v("Dummy5")]),o("button",[t._v("Dummy6")])])])}],S={name:"Toolbar_File",props:["editor"]},E=S,_=Object(g["a"])(E,k,C,!1,null,null,null),T=_.exports,J=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex flex-row space-x-1"},[o("div",{staticClass:"flex flex-row btn-group"},[o("button",{on:{click:t.selTopDown}},[o("svg",{staticClass:"m-auto feather feather-arrow-down",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("line",{attrs:{x1:"12",y1:"5",x2:"12",y2:"19"}}),o("polyline",{attrs:{points:"19 12 12 19 5 12"}})])]),o("button",{on:{click:t.selTopUp}},[o("svg",{staticClass:"m-auto feather feather-arrow-up",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("line",{attrs:{x1:"12",y1:"19",x2:"12",y2:"5"}}),o("polyline",{attrs:{points:"5 12 12 5 19 12"}})])])]),o("div",{staticClass:"flex flex-row btn-group"},[o("button",{on:{click:t.selBottomDown}},[o("svg",{staticClass:"m-auto feather feather-arrow-down",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("line",{attrs:{x1:"12",y1:"5",x2:"12",y2:"19"}}),o("polyline",{attrs:{points:"19 12 12 19 5 12"}})])]),o("button",{on:{click:t.selBottomUp}},[o("svg",{staticClass:"m-auto feather feather-arrow-up",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("line",{attrs:{x1:"12",y1:"19",x2:"12",y2:"5"}}),o("polyline",{attrs:{points:"5 12 12 5 19 12"}})])])])])},B=[],j={name:"Toolbar_Selection",props:["editor"],methods:{selTopDown:function(){var t=this.editor.getSelection();this.editor.setSelection(new l["Range"](t.startLineNumber+1,1,t.endLineNumber,this.editor.getModel().getLineMaxColumn(t.endLineNumber)))},selTopUp:function(){var t=this.editor.getSelection();this.editor.setSelection(new l["Range"](t.startLineNumber-1,1,t.endLineNumber,this.editor.getModel().getLineMaxColumn(t.endLineNumber)))},selBottomDown:function(){var t=this.editor.getSelection();this.editor.setSelection(new l["Range"](t.startLineNumber,1,t.endLineNumber+1,this.editor.getModel().getLineMaxColumn(t.endLineNumber+1)))},selBottomUp:function(){var t=this.editor.getSelection();this.editor.setSelection(new l["Range"](t.startLineNumber,1,t.endLineNumber-1,this.editor.getModel().getLineMaxColumn(t.endLineNumber-1)))}}},M=j,L=Object(g["a"])(M,J,B,!1,null,null,null),N=L.exports,O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex flex-row space-x-1"},[o("div",{staticClass:"flex flex-row btn-group"},[o("button",{on:{click:t.zoomIn}},[o("svg",{staticClass:"m-auto feather feather-zoom-in",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("circle",{attrs:{cx:"11",cy:"11",r:"8"}}),o("line",{attrs:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}}),o("line",{attrs:{x1:"11",y1:"8",x2:"11",y2:"14"}}),o("line",{attrs:{x1:"8",y1:"11",x2:"14",y2:"11"}})])]),o("button",{on:{click:t.zoomOut}},[o("svg",{staticClass:"m-auto feather feather-zoom-out",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("circle",{attrs:{cx:"11",cy:"11",r:"8"}}),o("line",{attrs:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}}),o("line",{attrs:{x1:"8",y1:"11",x2:"14",y2:"11"}})])]),o("button",{on:{click:t.zoomReset}},[o("svg",{staticClass:"m-auto feather feather-zoom-out",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("circle",{attrs:{cx:"11",cy:"11",r:"8"}}),o("line",{attrs:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}})])])])])},R=[],z={name:"Toolbar_View",props:["editor"],methods:{zoomIn:function(){this.editor.trigger("zoomIn","editor.action.fontZoomIn","zoomIn"),this.editor.focus()},zoomOut:function(){this.editor.trigger("zoomOut","editor.action.fontZoomOut","zoomOut"),this.editor.focus()},zoomReset:function(){this.editor.trigger("zoomReset","editor.action.fontZoomReset","zoomReset"),this.editor.focus()}}},P=z,V=Object(g["a"])(P,O,R,!1,null,null,null),A=V.exports,D={name:"Editor",data:function(){return{editor:void 0,toolbarToggle:{Action:!1,Basic:!1,File:!1,Selection:!1,View:!1}}},created:function(){var t=this;fetch("./config.json").then((function(t){return t.json()})).then((function(e){l["editor"].defineTheme("onedark",e.theme),l["editor"].setTheme("onedark"),l["languages"].setMonarchTokensProvider("plaintext",e.tokensProvider),l["languages"].setLanguageConfiguration("plaintext",e.languageConfiguration);var o=l["editor"].create(document.getElementById("editor"),e.editorOptions);e.customActions.forEach((function(t){t.run=Function(t.run),o.addAction(t)})),o.setValue(t.getVal()),t.editor=o}))},methods:{getVal:function(){return['2020-08-14 00:00:00,Destroy,skyeyed,G,0,"(-1717, 68, 910)",破坏,grass',"2020-08-14 00:00:54,Event,Soya Jeo,put,0,9,64,Hay Bale","2020-08-14 00:00:54,Event,Soya Jeo,put,0,10,64,Hay Bale","2020-08-14 00:00:54,Event,Soya Jeo,put,0,11,29,Hay Bale","2020-08-14 00:00:54,Event,Soya Jeo,put,0,13,44,Sand","2020-08-14 00:00:54,Event,Soya Jeo,put,0,14,64,Sand","2020-08-14 00:00:54,Event,Soya Jeo,put,0,17,3,Soul Sand","2020-08-14 00:00:54,Event,Soya Jeo,put,0,18,53,Spider Eye","2020-08-14 00:00:54,Event,Soya Jeo,put,0,19,18,Phantom Membrane","2020-08-14 00:00:54,Event,Soya Jeo,put,0,21,64,Glowstone","2020-08-14 00:00:54,Event,Soya Jeo,put,0,22,64,Glowstone","2020-08-14 00:00:54,Event,Soya Jeo,put,0,23,8,Glowstone","2020-08-14 00:00:54,Event,Soya Jeo,put,0,24,2,Charcoal","2020-08-14 00:00:54,Event,Soya Jeo,put,0,27,2,Fermented Spider Eye","2020-08-14 00:00:54,Event,Soya Jeo,put,0,28,64,Brown Mushroom","2020-08-14 00:00:54,Event,Soya Jeo,put,0,29,44,Brown Mushroom","2020-08-14 00:00:54,Event,Soya Jeo,put,0,30,2,Raw Salmon","2020-08-14 00:00:54,Event,Soya Jeo,put,0,31,3,Prismarine Shard","2020-08-14 00:00:54,Event,Soya Jeo,put,0,32,2,Prismarine Crystals","2020-08-14 00:00:54,Event,Soya Jeo,put,0,35,8,Flint","2020-08-14 00:00:54,Event,Soya Jeo,put,0,36,47,Sugar","2020-08-14 00:00:54,Event,Soya Jeo,put,0,37,64,Magma Cream","2020-08-14 00:00:54,Event,Soya Jeo,put,0,38,64,Magma Cream","2020-08-14 00:00:54,Event,Soya Jeo,put,0,39,1,Blaze Powder","2020-08-14 00:00:54,Event,Soya Jeo,put,0,40,64,Gunpowder","2020-08-14 00:00:54,Event,Soya Jeo,put,0,41,64,Gunpowder","2020-08-14 00:00:54,Event,Soya Jeo,put,0,42,34,Redstone","2020-08-14 00:00:54,Event,Soya Jeo,put,0,43,64,Nether Wart","2020-08-14 00:00:54,Event,Soya Jeo,put,0,44,14,Blaze Rod","2020-08-14 00:00:54,Event,Soya Jeo,put,0,45,40,Pufferfish","2020-08-14 00:00:54,Event,Soya Jeo,put,0,46,64,Magma Cream","2020-08-14 00:00:54,Event,Soya Jeo,put,0,47,55,Magma Cream","2020-08-14 00:00:54,Event,Soya Jeo,put,0,48,5,Ghast Tear","2020-08-14 00:00:54,Event,Soya Jeo,put,0,50,38,Glowstone Dust","2020-08-14 00:00:54,Event,Soya Jeo,put,0,51,64,Redstone","2020-08-14 00:00:54,Event,Soya Jeo,put,0,52,64,Nether Wart","2020-08-14 00:00:54,Event,Soya Jeo,put,0,53,64,Blaze Rod",'2020-08-14 00:00:54,Chest,Soya Jeo,G,0,"(-615, 73, -10)",打开,箱子','2020-08-14 00:00:54,Chest,Soya Jeo,G,0,"(-615, 73, -11)",打开,箱子',""].join("\n")}},components:{Toolbar_Action:p,Toolbar_Basic:y,Toolbar_File:T,Toolbar_Selection:N,Toolbar_View:A}},F=D,G=Object(g["a"])(F,s,a,!1,null,null,null),$=G.exports,I={name:"App",components:{Editor:$}},H=I,U=Object(g["a"])(H,n,i,!1,null,null,null),Z=U.exports;o("def6");r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(Z)}}).$mount("#app")},def6:function(t,e,o){}});