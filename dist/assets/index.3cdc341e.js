import{c as V,a as J}from"./3024-night.55e4f359.js";import{_ as R,d as S,k as L,y as X,A as Y,r as F,o as q,c as z,a as w,b as B,w as O,t as K,e as I}from"./index.3351d015.js";(function(g,f){(function(a){a(V.exports)})(function(a){var u="CodeMirror-lint-markers",c="CodeMirror-lint-line-";function m(t,e,o){var n=document.createElement("div");n.className="CodeMirror-lint-tooltip cm-s-"+t.options.theme,n.appendChild(o.cloneNode(!0)),t.state.lint.options.selfContain?t.getWrapperElement().appendChild(n):document.body.appendChild(n);function i(r){if(!n.parentNode)return a.off(document,"mousemove",i);n.style.top=Math.max(0,r.clientY-n.offsetHeight-5)+"px",n.style.left=r.clientX+5+"px"}return a.on(document,"mousemove",i),i(e),n.style.opacity!=null&&(n.style.opacity=1),n}function p(t){t.parentNode&&t.parentNode.removeChild(t)}function _(t){!t.parentNode||(t.style.opacity==null&&p(t),t.style.opacity=0,setTimeout(function(){p(t)},600))}function d(t,e,o,n){var i=m(t,e,o);function r(){a.off(n,"mouseout",r),i&&(_(i),i=null)}var s=setInterval(function(){if(i)for(var l=n;;l=l.parentNode){if(l&&l.nodeType==11&&(l=l.host),l==document.body)return;if(!l){r();break}}if(!i)return clearInterval(s)},400);a.on(n,"mouseout",r)}function k(t,e,o){this.marked=[],e instanceof Function&&(e={getAnnotations:e}),(!e||e===!0)&&(e={}),this.options={},this.linterOptions=e.options||{};for(var n in x)this.options[n]=x[n];for(var n in e)x.hasOwnProperty(n)?e[n]!=null&&(this.options[n]=e[n]):e.options||(this.linterOptions[n]=e[n]);this.timeout=null,this.hasGutter=o,this.onMouseOver=function(i){W(t,i)},this.waitingFor=0}var x={highlightLines:!1,tooltips:!0,delay:500,lintOnChange:!0,getAnnotations:null,async:!1,selfContain:null,formatAnnotation:null,onUpdateLinting:null};function M(t){var e=t.state.lint;e.hasGutter&&t.clearGutter(u),e.options.highlightLines&&j(t);for(var o=0;o<e.marked.length;++o)e.marked[o].clear();e.marked.length=0}function j(t){t.eachLine(function(e){var o=e.wrapClass&&/\bCodeMirror-lint-line-\w+\b/.exec(e.wrapClass);o&&t.removeLineClass(e,"wrap",o[0])})}function G(t,e,o,n,i){var r=document.createElement("div"),s=r;return r.className="CodeMirror-lint-marker CodeMirror-lint-marker-"+o,n&&(s=r.appendChild(document.createElement("div")),s.className="CodeMirror-lint-marker CodeMirror-lint-marker-multiple"),i!=!1&&a.on(s,"mouseover",function(l){d(t,l,e,s)}),r}function H(t,e){return t=="error"?t:e}function P(t){for(var e=[],o=0;o<t.length;++o){var n=t[o],i=n.from.line;(e[i]||(e[i]=[])).push(n)}return e}function D(t){var e=t.severity;e||(e="error");var o=document.createElement("div");return o.className="CodeMirror-lint-message CodeMirror-lint-message-"+e,typeof t.messageHTML!="undefined"?o.innerHTML=t.messageHTML:o.appendChild(document.createTextNode(t.message)),o}function U(t,e){var o=t.state.lint,n=++o.waitingFor;function i(){n=-1,t.off("change",i)}t.on("change",i),e(t.getValue(),function(r,s){t.off("change",i),o.waitingFor==n&&(s&&r instanceof a&&(r=s),t.operation(function(){N(t,r)}))},o.linterOptions,t)}function E(t){var e=t.state.lint;if(!!e){var o=e.options,n=o.getAnnotations||t.getHelper(a.Pos(0,0),"lint");if(!!n)if(o.async||n.async)U(t,n);else{var i=n(t.getValue(),e.linterOptions,t);if(!i)return;i.then?i.then(function(r){t.operation(function(){N(t,r)})}):t.operation(function(){N(t,i)})}}}function N(t,e){var o=t.state.lint;if(!!o){var n=o.options;M(t);for(var i=P(e),r=0;r<i.length;++r){var s=i[r];if(!!s){var l=[];s=s.filter(function(A){return l.indexOf(A.message)>-1?!1:l.push(A.message)});for(var h=null,y=o.hasGutter&&document.createDocumentFragment(),T=0;T<s.length;++T){var v=s[T],C=v.severity;C||(C="error"),h=H(h,C),n.formatAnnotation&&(v=n.formatAnnotation(v)),o.hasGutter&&y.appendChild(D(v)),v.to&&o.marked.push(t.markText(v.from,v.to,{className:"CodeMirror-lint-mark CodeMirror-lint-mark-"+C,__annotation:v}))}o.hasGutter&&t.setGutterMarker(r,u,G(t,y,h,i[r].length>1,n.tooltips)),n.highlightLines&&t.addLineClass(r,"wrap",c+h)}}n.onUpdateLinting&&n.onUpdateLinting(e,i,t)}}function b(t){var e=t.state.lint;!e||(clearTimeout(e.timeout),e.timeout=setTimeout(function(){E(t)},e.options.delay))}function $(t,e,o){for(var n=o.target||o.srcElement,i=document.createDocumentFragment(),r=0;r<e.length;r++){var s=e[r];i.appendChild(D(s))}d(t,o,i,n)}function W(t,e){var o=e.target||e.srcElement;if(!!/\bCodeMirror-lint-mark-/.test(o.className)){for(var n=o.getBoundingClientRect(),i=(n.left+n.right)/2,r=(n.top+n.bottom)/2,s=t.findMarksAt(t.coordsChar({left:i,top:r},"client")),l=[],h=0;h<s.length;++h){var y=s[h].__annotation;y&&l.push(y)}l.length&&$(t,l,e)}}a.defineOption("lint",!1,function(t,e,o){if(o&&o!=a.Init&&(M(t),t.state.lint.options.lintOnChange!==!1&&t.off("change",b),a.off(t.getWrapperElement(),"mouseover",t.state.lint.onMouseOver),clearTimeout(t.state.lint.timeout),delete t.state.lint),e){for(var n=t.getOption("gutters"),i=!1,r=0;r<n.length;++r)n[r]==u&&(i=!0);var s=t.state.lint=new k(t,e,i);s.options.lintOnChange&&t.on("change",b),s.options.tooltips!=!1&&s.options.tooltips!="gutter"&&a.on(t.getWrapperElement(),"mouseover",s.onMouseOver),E(t)}}),a.defineExtension("performLint",function(){E(this)})})})();(function(g,f){(function(a){a(V.exports)})(function(a){a.registerHelper("lint","json",function(u){var c=[];if(!window.jsonlint)return window.console&&window.console.error("Error: window.jsonlint not defined, CodeMirror JSON linting cannot run."),c;var m=window.jsonlint.parser||window.jsonlint;m.parseError=function(p,_){var d=_.loc;c.push({from:a.Pos(d.first_line-1,d.first_column),to:a.Pos(d.last_line-1,d.last_column),message:p})};try{m.parse(u)}catch{}return c})})})();const Q=S({setup(){let g=L(null),f=L(""),a=L(null),u=!1;const c={value:f.value,lineNumbers:!0,mode:"application/json",theme:"3024-night"};X(()=>{a=J(g.value,c),m()});function m(){a.on("changes",(d,k)=>{u=!0,f.value=a.getValue(),setTimeout(()=>{u=!1},50)})}Y(f,(d,k)=>{u||_()});function p(){f.value=JSON.stringify({code:200,msg:"\u8BF7\u6C42\u6210\u529F",data:{list:[{id:1,name:"\u5F20\u4E09"},{id:2,name:"\u674E\u56DB"}]}},null,2)}function _(){a.getDoc().setValue(f.value)}return{dom:g,codeData:f,setData:p}}}),Z={class:"layout-container"},tt={class:"layout-container-table"},et={ref:"dom"},nt={style:{"text-align":"left"}},ot=I(" v-model\u7ED3\u679C "),it=I("\u521D\u59CB\u8D4B\u503C");function rt(g,f,a,u,c,m){const p=F("el-button"),_=F("el-card");return q(),z("div",Z,[w("div",tt,[w("div",et,null,512),B(_,{class:"box-card"},{header:O(()=>[w("p",nt,[ot,B(p,{style:{float:"right",padding:"3px 0"},type:"text",onClick:g.setData},{default:O(()=>[it]),_:1},8,["onClick"])])]),default:O(()=>[w("pre",null,K(g.codeData),1)]),_:1})])])}var lt=R(Q,[["render",rt],["__scopeId","data-v-54d34a78"]]);export{lt as default};
