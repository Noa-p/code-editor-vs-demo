/** @preserve Powered by h */(()=>{var e,t,r,n={67788:(e,t,r)=>{"use strict";const n=React;var o=r.n(n);const a=ReactDOM;var i=r.n(a),l=r(37673),c=r(4631),u=r.n(c),s=(r(54086),r(96876),r(74678),r(81699),r(32095),r(58977),r(14568),r(65379),r(55292),r(99942),r(59372),r(71707),r(82222),r(20017),r(64020),r(83366),r(82801),r(4328),r(42981),r(90023),function(){var e=(0,n.useRef)(null),t=(0,n.useRef)(null),r=null;return(0,n.useEffect)((function(){if(e&&e.current){r=u()(e.current,{value:"function myScript() {\n  return 100;\n}\n",mode:{name:"javascript",typescript:!0},lineNumbers:!0,tabSize:2,extraKeys:{"Alt-F":"findPersistent"},hintOptions:{completeSingle:!1},styleActiveLine:!0,styleSelectedText:!0,highlightSelectionMatches:{showToken:/\w/,annotateScrollbar:!0},autoCloseBrackets:!0,matchBrackets:!0,lineSeparator:null,indentUnit:2,smartIndent:!0,indentWithTabs:!1,electricChars:!0,specialChars:/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/,direction:"ltr",rtlMoveVisually:!0,keyMap:"default",lineWrapping:!1,firstLineNumber:1,fixedGutter:!0,scrollbarStyle:"native",coverGutterNextToScrollbar:!1,inputStyle:"textarea",readOnly:!1,screenReaderLabel:"cm_editor",showCursorWhenSelecting:!1,lineWiseCopyCut:!0,pasteLinesPerSelection:!1,selectionsMayTouch:!0,undoDepth:200,historyEventDelay:1250})}}),[]),(0,n.useEffect)((function(){if(r){var e=function(e){},t=function(e,t){t.keyCode,t.text[0],!e.state.completionActive&&/[a-zA-Z0-9]+/.test(t.text[0])&&(e.showHint(),u().commands.autocomplete(e,void 0,{completeSingle:!1}))};return r.on("change",e),r.on("inputRead",t),function(){r&&r.off("change",e),r&&r.off("inputRead",t)}}}),[]),(0,n.useEffect)((function(){t&&t.current&&l.editor.create(t.current,{value:'console.log("Hello, world")',language:"javascript",acceptSuggestionOnCommitCharacter:!0,acceptSuggestionOnEnter:"on",accessibilityHelpUrl:"https://go.microsoft.com/fwlink/?linkid=852450",accessibilitySupport:"auto",ariaContainerElement:document.body,autoClosingBrackets:"languageDefined",autoClosingDelete:"auto",autoClosingOvertype:"auto",autoClosingQuotes:"languageDefined",autoDetectHighContrast:!0,autoIndent:"advanced",autoSurround:"languageDefined",automaticLayout:!1,bracketPairColorization:{enabled:!1},dragAndDrop:!0,folding:!0,fontSize:14,formatOnPaste:!1,readOnly:!1,selectOnLineNumbers:!0,theme:"vs-dark",wordWrap:"bounded"})}),[]),o().createElement("div",{id:"container"},o().createElement("div",{className:"codemirror-container"},o().createElement("h1",null,"CodeMirror"),o().createElement("div",{ref:e,className:"editor"})),o().createElement("div",{className:"monaco-container"},o().createElement("h1",null,"Monaco Editor"),o().createElement("div",{ref:t,className:"editor"})))}),d=document.getElementById("root");i().render(o().createElement(s,null),d)},90023:()=>{}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return n[e].call(r.exports,r,r.exports,a),r.exports}a.m=n,a.amdO={},e=[],a.O=(t,r,n,o)=>{if(!r){var i=1/0;for(s=0;s<e.length;s++){for(var[r,n,o]=e[s],l=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(a.O).every((e=>a.O[e](r[c])))?r.splice(c--,1):(l=!1,o<i&&(i=o));if(l){e.splice(s--,1);var u=n();void 0!==u&&(t=u)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,n,o]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>"js/"+e+"."+a.h().slice(0,8)+".js",a.h=()=>"15d0693742b48dd429fb",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="temp:",a.l=(e,n,o,i)=>{if(t[e])t[e].push(n);else{var l,c;if(void 0!==o)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var d=u[s];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==r+o){l=d;break}}l||(c=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.setAttribute("data-webpack",r+o),l.src=e),t[e]=[n];var f=(r,n)=>{l.onerror=l.onload=null,clearTimeout(p);var o=t[e];if(delete t[e],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(n))),r)return r(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),c&&document.head.appendChild(l)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e+"../"})(),(()=>{var e={2143:0};a.f.j=(t,r)=>{var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var i=a.p+a.u(t),l=new Error;a.l(i,(r=>{if(a.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,n[1](l)}}),"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[i,l,c]=r,u=0;if(i.some((t=>0!==e[t]))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(c)var s=c(a)}for(t&&t(r);u<i.length;u++)o=i[u],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(s)},r=self.webpackChunktemp=self.webpackChunktemp||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var i=a.O(void 0,[6329],(()=>a(67788)));i=a.O(i)})();