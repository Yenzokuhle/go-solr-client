(self.webpackChunkgo_solr_client=self.webpackChunkgo_solr_client||[]).push([[691],{3204:function(e){"use strict";const t=/[\p{Lu}]/u,n=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,o=/([\p{Alpha}\p{N}_]|$)/u,a=/[_.\- ]+/,i=new RegExp("^"+a.source),s=new RegExp(a.source+o.source,"gu"),l=new RegExp("\\d+"+o.source,"gu"),c=(e,o)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(o={pascalCase:!1,preserveConsecutiveUppercase:!1,...o},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const a=!1===o.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(o.locale),c=!1===o.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(o.locale);if(1===e.length)return o.pascalCase?c(e):a(e);return e!==a(e)&&(e=((e,r,o)=>{let a=!1,i=!1,s=!1;for(let l=0;l<e.length;l++){const c=e[l];a&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),a=!1,s=i,i=!0,l++):i&&s&&n.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),s=i,i=!1,a=!0):(a=r(c)===c&&o(c)!==c,s=i,i=o(c)===c&&r(c)!==c)}return e})(e,a,c)),e=e.replace(i,""),e=o.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,a):a(e),o.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,l.lastIndex=0,e.replace(s,((e,n)=>t(n))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,n){"use strict";n.d(t,{L:function(){return m},M:function(){return k},P:function(){return w},S:function(){return F},_:function(){return s},a:function(){return i},b:function(){return u},g:function(){return d},h:function(){return l}});var r=n(7294),o=(n(3204),n(5697)),a=n.n(o);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||(o[n]=e[n]);return o}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,n){const r={};let o="gatsby-image-wrapper";return"fixed"===n?(r.width=e,r.height=t):"constrained"===n&&(o="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:o,"data-gatsby-image-wrapper":"",style:r}}function u(e,t,n,r,o){return void 0===o&&(o={}),i({},n,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},o,{opacity:t?1:0})})}function d(e,t,n,r,o,a,s,l){const c={};a&&(c.backgroundColor=a,"fixed"===n?(c.width=r,c.height=o,c.backgroundColor=a,c.position="relative"):("constrained"===n||"fullWidth"===n)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);const u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const p=["children"],f=function(e){let{layout:t,width:n,height:o}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:o/n*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:n,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${o}'%20width='${n}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,n=s(e,p);return r.createElement(r.Fragment,null,r.createElement(f,i({},n)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],g=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:n,loading:o,alt:a="",shouldLoad:l}=e,c=s(e,h);return r.createElement("img",i({},c,{decoding:"async",loading:o,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?n:void 0,"data-srcset":l?void 0:n,alt:a}))},v=function(e){let{fallback:t,sources:n=[],shouldLoad:o=!0}=e,a=s(e,g);const l=a.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,i({},a,t,{sizes:l,shouldLoad:o}));return n.length?r.createElement("picture",null,n.map((e=>{let{media:t,srcSet:n,type:a}=e;return r.createElement("source",{key:`${t}-${a}-${n}`,type:a,media:t,srcSet:o?n:void 0,"data-srcset":o?void 0:n,sizes:l})})),c):c};var b;y.propTypes={src:o.string.isRequired,alt:o.string.isRequired,sizes:o.string,srcSet:o.string,shouldLoad:o.bool},v.displayName="Picture",v.propTypes={alt:o.string.isRequired,shouldLoad:o.bool,fallback:o.exact({src:o.string.isRequired,srcSet:o.string,sizes:o.string}),sources:o.arrayOf(o.oneOfType([o.exact({media:o.string.isRequired,type:o.string,sizes:o.string,srcSet:o.string.isRequired}),o.exact({media:o.string,type:o.string.isRequired,sizes:o.string,srcSet:o.string.isRequired})]))};const x=["fallback"],w=function(e){let{fallback:t}=e,n=s(e,x);return t?r.createElement(v,i({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},n))};w.displayName="Placeholder",w.propTypes={fallback:o.string,sources:null==(b=v.propTypes)?void 0:b.sources,alt:function(e,t,n){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${n}\`. Validation failed.`):null}};const k=function(e){return r.createElement(r.Fragment,null,r.createElement(v,i({},e)),r.createElement("noscript",null,r.createElement(v,i({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=v.propTypes;const E=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],C=e=>e.replace(/\n/g,""),A=function(e,t,n){for(var r=arguments.length,o=new Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];return e.alt||""===e.alt?a().string.apply(a(),[e,t,n].concat(o)):new Error(`The "alt" prop is required in ${n}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},P={image:a().object.isRequired,alt:A},O=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],R=new Set;let $,N;const I=function(e){let{as:t="div",image:o,style:a,backgroundColor:u,className:d,class:p,onStartLoad:f,onLoad:m,onError:h}=e,g=s(e,O);const{width:y,height:v,layout:b}=o,x=c(y,v,b),{style:w,className:k}=x,E=s(x,T),S=(0,r.useRef)(),C=(0,r.useMemo)((()=>JSON.stringify(o.images)),[o.images]);p&&(d=p);const A=function(e,t,n){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${n/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(b,y,v);return(0,r.useEffect)((()=>{$||($=n.e(731).then(n.bind(n,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:n}=e;return N=t,{renderImageToString:t,swapPlaceholderImage:n}})));const e=S.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==f||f({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==f||f({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void R.add(C);if(N&&R.has(C))return;let t,r;return $.then((e=>{let{renderImageToString:n,swapPlaceholderImage:s}=e;S.current&&(S.current.innerHTML=n(i({isLoading:!0,isLoaded:R.has(C),image:o},g)),R.has(C)||(t=requestAnimationFrame((()=>{S.current&&(r=s(S.current,C,R,a,f,m,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[o]),(0,r.useLayoutEffect)((()=>{R.has(C)&&N&&(S.current.innerHTML=N(i({isLoading:R.has(C),isLoaded:R.has(C),image:o},g)),null==f||f({wasCached:!0}),null==m||m({wasCached:!0}))}),[o]),(0,r.createElement)(t,i({},E,{style:i({},w,a,{backgroundColor:u}),className:`${k}${d?` ${d}`:""}`,ref:S,dangerouslySetInnerHTML:{__html:A},suppressHydrationWarning:!0}))},j=(0,r.memo)((function(e){return e.image?(0,r.createElement)(I,e):null}));j.propTypes=P,j.displayName="GatsbyImage";const _=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function z(e){return function(t){let{src:n,__imageData:o,__error:a}=t,l=s(t,_);return a&&console.warn(a),o?r.createElement(e,i({image:o},l)):(console.warn("Image not loaded",n),null)}}const L=z((function(e){let{as:t="div",className:n,class:o,style:a,image:l,loading:p="lazy",imgClassName:f,imgStyle:h,backgroundColor:g,objectFit:y,objectPosition:v}=e,b=s(e,E);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;o&&(n=o),h=i({objectFit:y,objectPosition:v,backgroundColor:g},h);const{width:x,height:A,layout:P,images:O,placeholder:T,backgroundColor:R}=l,$=c(x,A,P),{style:N,className:I}=$,j=s($,S),_={fallback:void 0,sources:[]};return O.fallback&&(_.fallback=i({},O.fallback,{srcSet:O.fallback.srcSet?C(O.fallback.srcSet):void 0})),O.sources&&(_.sources=O.sources.map((e=>i({},e,{srcSet:C(e.srcSet)})))),r.createElement(t,i({},j,{style:i({},N,a,{backgroundColor:g}),className:`${I}${n?` ${n}`:""}`}),r.createElement(m,{layout:P,width:x,height:A},r.createElement(w,i({},d(T,!1,P,x,A,R,y,v))),r.createElement(k,i({"data-gatsby-image-ssr":"",className:f},b,u("eager"===p,!1,_,p,h)))))})),M=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?a().number.apply(a(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},B=new Set(["fixed","fullWidth","constrained"]),D={src:a().string.isRequired,alt:A,width:M,height:M,sizes:a().string,layout:e=>{if(void 0!==e.layout&&!B.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};L.displayName="StaticImage",L.propTypes=D;const F=z(j);F.displayName="StaticImage",F.propTypes=D},853:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return Ms},IndexPage:function(){return _s},MainContainer:function(){return zs},default:function(){return Ls}});var r=n(7294),o=n.t(r,2);var a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};Object.create;function i(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"==typeof SuppressedError&&SuppressedError;var s=n(6774),l=n.n(s),c="-ms-",u="-moz-",d="-webkit-",p="comm",f="rule",m="decl",h="@import",g="@keyframes",y="@layer",v=Math.abs,b=String.fromCharCode,x=Object.assign;function w(e){return e.trim()}function k(e,t){return(e=t.exec(e))?e[0]:e}function E(e,t,n){return e.replace(t,n)}function S(e,t){return e.indexOf(t)}function C(e,t){return 0|e.charCodeAt(t)}function A(e,t,n){return e.slice(t,n)}function P(e){return e.length}function O(e){return e.length}function T(e,t){return t.push(e),e}function R(e,t){return e.filter((function(e){return!k(e,t)}))}var $=1,N=1,I=0,j=0,_=0,z="";function L(e,t,n,r,o,a,i,s){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:$,column:N,length:i,return:"",siblings:s}}function M(e,t){return x(L("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function B(e){for(;e.root;)e=M(e.root,{children:[e]});T(e,e.siblings)}function D(){return _=j>0?C(z,--j):0,N--,10===_&&(N=1,$--),_}function F(){return _=j<I?C(z,j++):0,N++,10===_&&(N=1,$++),_}function W(){return C(z,j)}function K(){return j}function G(e,t){return A(z,e,t)}function H(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function q(e){return $=N=1,I=P(z=e),j=0,[]}function U(e){return z="",e}function Y(e){return w(G(j-1,Z(91===e?e+2:40===e?e+1:e)))}function V(e){for(;(_=W())&&_<33;)F();return H(e)>2||H(_)>3?"":" "}function X(e,t){for(;--t&&F()&&!(_<48||_>102||_>57&&_<65||_>70&&_<97););return G(e,K()+(t<6&&32==W()&&32==F()))}function Z(e){for(;F();)switch(_){case e:return j;case 34:case 39:34!==e&&39!==e&&Z(_);break;case 40:41===e&&Z(e);break;case 92:F()}return j}function J(e,t){for(;F()&&e+_!==57&&(e+_!==84||47!==W()););return"/*"+G(t,j-1)+"*"+b(47===e?e:F())}function Q(e){for(;!H(W());)F();return G(e,j)}function ee(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function te(e,t,n,r){switch(e.type){case y:if(e.children.length)break;case h:case m:return e.return=e.return||e.value;case p:return"";case g:return e.return=e.value+"{"+ee(e.children,r)+"}";case f:if(!P(e.value=e.props.join(",")))return""}return P(n=ee(e.children,r))?e.return=e.value+"{"+n+"}":""}function ne(e,t,n){switch(function(e,t){return 45^C(e,0)?(((t<<2^C(e,0))<<2^C(e,1))<<2^C(e,2))<<2^C(e,3):0}(e,t)){case 5103:return d+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return d+e+e;case 4789:return u+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return d+e+u+e+c+e+e;case 5936:switch(C(e,t+11)){case 114:return d+e+c+E(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return d+e+c+E(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return d+e+c+E(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return d+e+c+e+e;case 6165:return d+e+c+"flex-"+e+e;case 5187:return d+e+E(e,/(\w+).+(:[^]+)/,d+"box-$1$2"+c+"flex-$1$2")+e;case 5443:return d+e+c+"flex-item-"+E(e,/flex-|-self/g,"")+(k(e,/flex-|baseline/)?"":c+"grid-row-"+E(e,/flex-|-self/g,""))+e;case 4675:return d+e+c+"flex-line-pack"+E(e,/align-content|flex-|-self/g,"")+e;case 5548:return d+e+c+E(e,"shrink","negative")+e;case 5292:return d+e+c+E(e,"basis","preferred-size")+e;case 6060:return d+"box-"+E(e,"-grow","")+d+e+c+E(e,"grow","positive")+e;case 4554:return d+E(e,/([^-])(transform)/g,"$1"+d+"$2")+e;case 6187:return E(E(E(e,/(zoom-|grab)/,d+"$1"),/(image-set)/,d+"$1"),e,"")+e;case 5495:case 3959:return E(e,/(image-set\([^]*)/,d+"$1$`$1");case 4968:return E(E(e,/(.+:)(flex-)?(.*)/,d+"box-pack:$3"+c+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+d+e+e;case 4200:if(!k(e,/flex-|baseline/))return c+"grid-column-align"+A(e,t)+e;break;case 2592:case 3360:return c+E(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,k(e.props,/grid-\w+-end/)}))?~S(e+(n=n[t].value),"span")?e:c+E(e,"-start","")+e+c+"grid-row-span:"+(~S(n,"span")?k(n,/\d+/):+k(n,/\d+/)-+k(e,/\d+/))+";":c+E(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return k(e.props,/grid-\w+-start/)}))?e:c+E(E(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return E(e,/(.+)-inline(.+)/,d+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(P(e)-1-t>6)switch(C(e,t+1)){case 109:if(45!==C(e,t+4))break;case 102:return E(e,/(.+:)(.+)-([^]+)/,"$1"+d+"$2-$3$1"+u+(108==C(e,t+3)?"$3":"$2-$3"))+e;case 115:return~S(e,"stretch")?ne(E(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return E(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,o,a,i,s){return c+n+":"+r+s+(o?c+n+"-span:"+(a?i:+i-+r)+s:"")+e}));case 4949:if(121===C(e,t+6))return E(e,":",":"+d)+e;break;case 6444:switch(C(e,45===C(e,14)?18:11)){case 120:return E(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+d+(45===C(e,14)?"inline-":"")+"box$3$1"+d+"$2$3$1"+c+"$2box$3")+e;case 100:return E(e,":",":"+c)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return E(e,"scroll-","scroll-snap-")+e}return e}function re(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case m:return void(e.return=ne(e.value,e.length,n));case g:return ee([M(e,{value:E(e.value,"@","@"+d)})],r);case f:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(k(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":B(M(e,{props:[E(t,/:(read-\w+)/,":"+u+"$1")]})),B(M(e,{props:[t]})),x(e,{props:R(n,r)});break;case"::placeholder":B(M(e,{props:[E(t,/:(plac\w+)/,":"+d+"input-$1")]})),B(M(e,{props:[E(t,/:(plac\w+)/,":"+u+"$1")]})),B(M(e,{props:[E(t,/:(plac\w+)/,c+"input-$1")]})),B(M(e,{props:[t]})),x(e,{props:R(n,r)})}return""}))}}function oe(e){return U(ae("",null,null,null,[""],e=q(e),0,[0],e))}function ae(e,t,n,r,o,a,i,s,l){for(var c=0,u=0,d=i,p=0,f=0,m=0,h=1,g=1,y=1,v=0,x="",w=o,k=a,A=r,O=x;g;)switch(m=v,v=F()){case 40:if(108!=m&&58==C(O,d-1)){-1!=S(O+=E(Y(v),"&","&\f"),"&\f")&&(y=-1);break}case 34:case 39:case 91:O+=Y(v);break;case 9:case 10:case 13:case 32:O+=V(m);break;case 92:O+=X(K()-1,7);continue;case 47:switch(W()){case 42:case 47:T(se(J(F(),K()),t,n,l),l);break;default:O+="/"}break;case 123*h:s[c++]=P(O)*y;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:-1==y&&(O=E(O,/\f/g,"")),f>0&&P(O)-d&&T(f>32?le(O+";",r,n,d-1,l):le(E(O," ","")+";",r,n,d-2,l),l);break;case 59:O+=";";default:if(T(A=ie(O,t,n,c,u,o,s,x,w=[],k=[],d,a),a),123===v)if(0===u)ae(O,t,A,A,w,a,d,s,k);else switch(99===p&&110===C(O,3)?100:p){case 100:case 108:case 109:case 115:ae(e,A,A,r&&T(ie(e,A,A,0,0,o,s,x,o,w=[],d,k),k),o,k,d,s,r?w:k);break;default:ae(O,A,A,A,[""],k,0,s,k)}}c=u=f=0,h=y=1,x=O="",d=i;break;case 58:d=1+P(O),f=m;default:if(h<1)if(123==v)--h;else if(125==v&&0==h++&&125==D())continue;switch(O+=b(v),v*h){case 38:y=u>0?1:(O+="\f",-1);break;case 44:s[c++]=(P(O)-1)*y,y=1;break;case 64:45===W()&&(O+=Y(F())),p=W(),u=d=P(x=O+=Q(K())),v++;break;case 45:45===m&&2==P(O)&&(h=0)}}return a}function ie(e,t,n,r,o,a,i,s,l,c,u,d){for(var p=o-1,m=0===o?a:[""],h=O(m),g=0,y=0,b=0;g<r;++g)for(var x=0,k=A(e,p+1,p=v(y=i[g])),S=e;x<h;++x)(S=w(y>0?m[x]+" "+k:E(k,/&\f/g,m[x])))&&(l[b++]=S);return L(e,t,n,0===o?f:s,l,c,u,d)}function se(e,t,n,r){return L(e,t,n,p,b(_),A(e,2,-2),0,r)}function le(e,t,n,r,o){return L(e,t,n,m,A(e,0,r),A(e,r+1,-1),r,o)}var ce={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ue="undefined"!=typeof process&&void 0!=={}&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",de="active",pe="data-styled-version",fe="6.0.9",me="/*!sc*/\n",he="undefined"!=typeof window&&"HTMLElement"in window,ge=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={}&&void 0!=={}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={}.REACT_APP_SC_DISABLE_SPEEDY&&{}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={}&&void 0!=={}.SC_DISABLE_SPEEDY&&""!=={}.SC_DISABLE_SPEEDY&&("false"!=={}.SC_DISABLE_SPEEDY&&{}.SC_DISABLE_SPEEDY)),ye=(new Set,Object.freeze([])),ve=Object.freeze({});function be(e,t,n){return void 0===n&&(n=ve),e.theme!==n.theme&&e.theme||t||n.theme}var xe=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),we=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ke=/(^-|-$)/g;function Ee(e){return e.replace(we,"-").replace(ke,"")}var Se=/(a)(d)/gi,Ce=52,Ae=function(e){return String.fromCharCode(e+(e>25?39:97))};function Pe(e){var t,n="";for(t=Math.abs(e);t>Ce;t=t/Ce|0)n=Ae(t%Ce)+n;return(Ae(t%Ce)+n).replace(Se,"$1-$2")}var Oe,Te=5381,Re=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},$e=function(e){return Re(Te,e)};function Ne(e){return Pe($e(e)>>>0)}function Ie(e){return"string"==typeof e&&!0}var je="function"==typeof Symbol&&Symbol.for,_e=je?Symbol.for("react.memo"):60115,ze=je?Symbol.for("react.forward_ref"):60112,Le={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Me={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Be={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},De=((Oe={})[ze]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Oe[_e]=Be,Oe);function Fe(e){return("type"in(t=e)&&t.type.$$typeof)===_e?Be:"$$typeof"in e?De[e.$$typeof]:Le;var t}var We=Object.defineProperty,Ke=Object.getOwnPropertyNames,Ge=Object.getOwnPropertySymbols,He=Object.getOwnPropertyDescriptor,qe=Object.getPrototypeOf,Ue=Object.prototype;function Ye(e,t,n){if("string"!=typeof t){if(Ue){var r=qe(t);r&&r!==Ue&&Ye(e,r,n)}var o=Ke(t);Ge&&(o=o.concat(Ge(t)));for(var a=Fe(e),i=Fe(t),s=0;s<o.length;++s){var l=o[s];if(!(l in Me||n&&n[l]||i&&l in i||a&&l in a)){var c=He(t,l);try{We(e,l,c)}catch(e){}}}}return e}function Ve(e){return"function"==typeof e}function Xe(e){return"object"==typeof e&&"styledComponentId"in e}function Ze(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Je(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Qe(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function et(e,t,n){if(void 0===n&&(n=!1),!n&&!Qe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=et(e[r],t[r]);else if(Qe(t))for(var r in t)e[r]=et(e[r],t[r]);return e}function tt(e,t){Object.defineProperty(e,"toString",{value:t})}function nt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var rt=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw nt(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var a=r;a<o;a++)this.groupSizes[a]=0}for(var i=this.indexOfGroup(e+1),s=(a=0,t.length);a<s;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,a=r;a<o;a++)t+="".concat(this.tag.getRule(a)).concat(me);return t},e}(),ot=new Map,at=new Map,it=1,st=function(e){if(ot.has(e))return ot.get(e);for(;at.has(it);)it++;var t=it++;return ot.set(e,t),at.set(t,e),t},lt=function(e,t){ot.set(e,t),at.set(t,e)},ct="style[".concat(ue,"][").concat(pe,'="').concat(fe,'"]'),ut=new RegExp("^".concat(ue,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),dt=function(e,t,n){for(var r,o=n.split(","),a=0,i=o.length;a<i;a++)(r=o[a])&&e.registerName(t,r)},pt=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(me),o=[],a=0,i=r.length;a<i;a++){var s=r[a].trim();if(s){var l=s.match(ut);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(lt(u,c),dt(e,u,l[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(s)}}};function ft(){return n.nc}var mt=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(ue,"]")));return t[t.length-1]}(n),a=void 0!==o?o.nextSibling:null;r.setAttribute(ue,de),r.setAttribute(pe,fe);var i=ft();return i&&r.setAttribute("nonce",i),n.insertBefore(r,a),r},ht=function(){function e(e){this.element=mt(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw nt(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),gt=function(){function e(e){this.element=mt(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),yt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),vt=he,bt={isServer:!he,useCSSOMInjection:!ge},xt=function(){function e(e,t,n){void 0===e&&(e=ve),void 0===t&&(t={});var r=this;this.options=a(a({},bt),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&he&&vt&&(vt=!1,function(e){for(var t=document.querySelectorAll(ct),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(ue)!==de&&(pt(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this)),tt(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return at.get(e)}(n);if(void 0===o)return"continue";var a=e.names.get(o),i=t.getGroup(n);if(void 0===a||0===i.length)return"continue";var s="".concat(ue,".g").concat(n,'[id="').concat(o,'"]'),l="";void 0!==a&&a.forEach((function(e){e.length>0&&(l+="".concat(e,","))})),r+="".concat(i).concat(s,'{content:"').concat(l,'"}').concat(me)},a=0;a<n;a++)o(a);return r}(r)}))}return e.registerId=function(e){return st(e)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(a(a({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new yt(n):t?new ht(n):new gt(n)}(this.options),new rt(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(st(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(st(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(st(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),wt=/&/g,kt=/^\s*\/\/.*$/gm;function Et(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Et(e.children,t)),e}))}function St(e){var t,n,r,o=void 0===e?ve:e,a=o.options,i=void 0===a?ve:a,s=o.plugins,l=void 0===s?ye:s,c=function(e,r,o){return o===n||o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},u=l.slice();u.push((function(e){e.type===f&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(wt,n).replace(r,c))})),i.prefix&&u.push(re),u.push(te);var d=function(e,o,a,s){void 0===o&&(o=""),void 0===a&&(a=""),void 0===s&&(s="&"),t=s,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(kt,""),c=oe(a||o?"".concat(a," ").concat(o," { ").concat(l," }"):l);i.namespace&&(c=Et(c,i.namespace));var d,p,f,m=[];return ee(c,(d=u.concat((f=function(e){return m.push(e)},function(e){e.root||(e=e.return)&&f(e)})),p=O(d),function(e,t,n,r){for(var o="",a=0;a<p;a++)o+=d[a](e,t,n,r)||"";return o})),m};return d.hash=l.length?l.reduce((function(e,t){return t.name||nt(15),Re(e,t.name)}),Te).toString():"",d}var Ct=new xt,At=St(),Pt=r.createContext({shouldForwardProp:void 0,styleSheet:Ct,stylis:At}),Ot=(Pt.Consumer,r.createContext(void 0));function Tt(){return(0,r.useContext)(Pt)}function Rt(e){var t=(0,r.useState)(e.stylisPlugins),n=t[0],o=t[1],a=Tt().styleSheet,i=(0,r.useMemo)((function(){var t=a;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,a]),s=(0,r.useMemo)((function(){return St({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})}),[e.enableVendorPrefixes,e.namespace,n]);(0,r.useEffect)((function(){l()(n,e.stylisPlugins)||o(e.stylisPlugins)}),[e.stylisPlugins]);var c=(0,r.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:s}}),[e.shouldForwardProp,i,s]);return r.createElement(Pt.Provider,{value:c},r.createElement(Ot.Provider,{value:s},e.children))}var $t=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=At);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,tt(this,(function(){throw nt(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=At),this.name+e.hash},e}(),Nt=function(e){return e>="A"&&e<="Z"};function It(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Nt(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var jt=function(e){return null==e||!1===e||""===e},_t=function(e){var t,n,r=[];for(var o in e){var a=e[o];e.hasOwnProperty(o)&&!jt(a)&&(Array.isArray(a)&&a.isCss||Ve(a)?r.push("".concat(It(o),":"),a,";"):Qe(a)?r.push.apply(r,i(i(["".concat(o," {")],_t(a),!1),["}"],!1)):r.push("".concat(It(o),": ").concat((t=o,null==(n=a)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in ce||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function zt(e,t,n,r){return jt(e)?[]:Xe(e)?[".".concat(e.styledComponentId)]:Ve(e)?!Ve(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:zt(e(t),t,n,r):e instanceof $t?n?(e.inject(n,r),[e.getName(r)]):[e]:Qe(e)?_t(e):Array.isArray(e)?Array.prototype.concat.apply(ye,e.map((function(e){return zt(e,t,n,r)}))):[e.toString()];var o}function Lt(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ve(n)&&!Xe(n))return!1}return!0}var Mt=$e(fe),Bt=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Lt(e),this.componentId=t,this.baseHash=Re(Mt,t),this.baseStyle=n,xt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Ze(r,this.staticRulesId);else{var o=Je(zt(this.rules,e,t,n)),a=Pe(Re(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,a)){var i=n(o,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,i)}r=Ze(r,a),this.staticRulesId=a}else{for(var s=Re(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var d=Je(zt(u,e,t,n));s=Re(s,d+c),l+=d}}if(l){var p=Pe(s>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,n(l,".".concat(p),void 0,this.componentId)),r=Ze(r,p)}}return r},e}(),Dt=r.createContext(void 0);Dt.Consumer;var Ft={};new Set;function Wt(e,t,n){var o=Xe(e),i=e,s=!Ie(e),l=t.attrs,c=void 0===l?ye:l,u=t.componentId,d=void 0===u?function(e,t){var n="string"!=typeof e?"sc":Ee(e);Ft[n]=(Ft[n]||0)+1;var r="".concat(n,"-").concat(Ne(fe+n+Ft[n]));return t?"".concat(t,"-").concat(r):r}(t.displayName,t.parentComponentId):u,p=t.displayName,f=(void 0===p&&function(e){Ie(e)?"styled.".concat(e):"Styled(".concat(function(e){return e.displayName||e.name||"Component"}(e),")")}(e),t.displayName&&t.componentId?"".concat(Ee(t.displayName),"-").concat(t.componentId):t.componentId||d),m=o&&i.attrs?i.attrs.concat(c).filter(Boolean):c,h=t.shouldForwardProp;if(o&&i.shouldForwardProp){var g=i.shouldForwardProp;if(t.shouldForwardProp){var y=t.shouldForwardProp;h=function(e,t){return g(e,t)&&y(e,t)}}else h=g}var v=new Bt(n,f,o?i.componentStyle:void 0);var b=r.forwardRef((function(e,t){return function(e,t,n){var o=e.attrs,i=e.componentStyle,s=e.defaultProps,l=e.foldedComponentIds,c=e.styledComponentId,u=e.target,d=r.useContext(Dt),p=Tt(),f=e.shouldForwardProp||p.shouldForwardProp,m=function(e,t,n){for(var r,o=a(a({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var s=Ve(r=e[i])?r(o):r;for(var l in s)o[l]="className"===l?Ze(o[l],s[l]):"style"===l?a(a({},o[l]),s[l]):s[l]}return t.className&&(o.className=Ze(o.className,t.className)),o}(o,t,be(t,d,s)||ve),h=m.as||u,g={};for(var y in m)void 0===m[y]||"$"===y[0]||"as"===y||"theme"===y||("forwardedAs"===y?g.as=m.forwardedAs:f&&!f(y,h)||(g[y]=m[y]));var v=function(e,t){var n=Tt();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,m),b=Ze(l,c);return v&&(b+=" "+v),m.className&&(b+=" "+m.className),g[Ie(h)&&!xe.has(h)?"class":"className"]=b,g.ref=n,(0,r.createElement)(h,g)}(b,e,t)}));return b.attrs=m,b.componentStyle=v,b.shouldForwardProp=h,b.foldedComponentIds=o?Ze(i.foldedComponentIds,i.styledComponentId):"",b.styledComponentId=f,b.target=o?i.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)et(e,o[r],!0);return e}({},i.defaultProps,e):e}}),tt(b,(function(){return".".concat(b.styledComponentId)})),s&&Ye(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function Kt(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Gt=function(e){return Object.assign(e,{isCss:!0})};function Ht(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ve(e)||Qe(e))return Gt(zt(Kt(ye,i([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?zt(r):Gt(zt(Kt(r,t)))}function qt(e,t,n){if(void 0===n&&(n=ve),!t)throw nt(1,t);var r=function(r){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,Ht.apply(void 0,i([r],o,!1)))};return r.attrs=function(r){return qt(e,t,a(a({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return qt(e,t,a(a({},n),r))},r}var Ut=function(e){return qt(Wt,e)},Yt=Ut;xe.forEach((function(e){Yt[e]=Ut(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Lt(e),xt.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var o=r(Je(zt(this.rules,t,n,r)),""),a=this.componentId+e;n.insertRules(a,a,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&xt.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=ft(),r=Je([n&&'nonce="'.concat(n,'"'),"".concat(ue,'="true"'),"".concat(pe,'="').concat(fe,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw nt(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw nt(2);var n=((t={})[ue]="",t[pe]=fe,t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=ft();return o&&(n.nonce=o),[r.createElement("style",a({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new xt({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw nt(2);return r.createElement(Rt,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw nt(3)}})(),"__sc-".concat(ue,"__");function Vt(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function Xt(){return Xt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xt.apply(this,arguments)}function Zt(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Zt(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var Jt=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=Zt(e))&&(r&&(r+=" "),r+=t);return r};function Qt(e,t){"function"==typeof e?e(t):e&&(e.current=t)}function en(...e){return r.useMemo((()=>e.every((e=>null==e))?null:t=>{e.forEach((e=>{Qt(e,t)}))}),e)}function tn(e,t=[]){if(void 0===e)return{};const n={};return Object.keys(e).filter((n=>n.match(/^on[A-Z]/)&&"function"==typeof e[n]&&!t.includes(n))).forEach((t=>{n[t]=e[t]})),n}function nn(e){if(void 0===e)return{};const t={};return Object.keys(e).filter((t=>!(t.match(/^on[A-Z]/)&&"function"==typeof e[t]))).forEach((n=>{t[n]=e[n]})),t}const rn=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function on(e){var t;const{elementType:n,externalSlotProps:r,ownerState:o,skipResolvingSlotProps:a=!1}=e,i=Vt(e,rn),s=a?{}:function(e,t,n){return"function"==typeof e?e(t,n):e}(r,o),{props:l,internalRef:c}=function(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:o,className:a}=e;if(!t){const e=Jt(null==o?void 0:o.className,null==r?void 0:r.className,a,null==n?void 0:n.className),t=Xt({},null==n?void 0:n.style,null==o?void 0:o.style,null==r?void 0:r.style),i=Xt({},n,o,r);return e.length>0&&(i.className=e),Object.keys(t).length>0&&(i.style=t),{props:i,internalRef:void 0}}const i=tn(Xt({},o,r)),s=nn(r),l=nn(o),c=t(i),u=Jt(null==c?void 0:c.className,null==n?void 0:n.className,a,null==o?void 0:o.className,null==r?void 0:r.className),d=Xt({},null==c?void 0:c.style,null==n?void 0:n.style,null==o?void 0:o.style,null==r?void 0:r.style),p=Xt({},c,n,l,s);return u.length>0&&(p.className=u),Object.keys(d).length>0&&(p.style=d),{props:p,internalRef:c.ref}}(Xt({},i,{externalSlotProps:s})),u=function(e,t,n){return void 0===e||"string"==typeof e?t:Xt({},t,{ownerState:Xt({},t.ownerState,n)})}(n,Xt({},l,{ref:en(c,null==s?void 0:s.ref,null==(t=e.additionalProps)?void 0:t.ref)}),o);return u}function an(e){return e&&e.ownerDocument||document}var sn="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;var ln=function(e){const t=r.useRef(e);return sn((()=>{t.current=e})),r.useCallback(((...e)=>(0,t.current)(...e)),[])};function cn(...e){return e.reduce(((e,t)=>null==t?e:function(...n){e.apply(this,n),t.apply(this,n)}),(()=>{}))}function un(e){return an(e).defaultView||window}function dn(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function pn(e){return parseInt(un(e).getComputedStyle(e).paddingRight,10)||0}function fn(e,t,n,r,o){const a=[t,n,...r];[].forEach.call(e.children,(e=>{const t=-1===a.indexOf(e),n=!function(e){const t=-1!==["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName),n="INPUT"===e.tagName&&"hidden"===e.getAttribute("type");return t||n}(e);t&&n&&dn(e,o)}))}function mn(e,t){let n=-1;return e.some(((e,r)=>!!t(e)&&(n=r,!0))),n}function hn(e,t){const n=[],r=e.container;if(!t.disableScrollLock){if(function(e){const t=an(e);return t.body===e?un(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(r)){const e=function(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}(an(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${pn(r)+e}px`;const t=an(r).querySelectorAll(".mui-fixed");[].forEach.call(t,(t=>{n.push({value:t.style.paddingRight,property:"padding-right",el:t}),t.style.paddingRight=`${pn(t)+e}px`}))}let e;if(r.parentNode instanceof DocumentFragment)e=an(r).body;else{const t=r.parentElement,n=un(r);e="HTML"===(null==t?void 0:t.nodeName)&&"scroll"===n.getComputedStyle(t).overflowY?t:r}n.push({value:e.style.overflow,property:"overflow",el:e},{value:e.style.overflowX,property:"overflow-x",el:e},{value:e.style.overflowY,property:"overflow-y",el:e}),e.style.overflow="hidden"}return()=>{n.forEach((({value:e,el:t,property:n})=>{e?t.style.setProperty(n,e):t.style.removeProperty(n)}))}}const gn=new class{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(e,t){let n=this.modals.indexOf(e);if(-1!==n)return n;n=this.modals.length,this.modals.push(e),e.modalRef&&dn(e.modalRef,!1);const r=function(e){const t=[];return[].forEach.call(e.children,(e=>{"true"===e.getAttribute("aria-hidden")&&t.push(e)})),t}(t);fn(t,e.mount,e.modalRef,r,!0);const o=mn(this.containers,(e=>e.container===t));return-1!==o?(this.containers[o].modals.push(e),n):(this.containers.push({modals:[e],container:t,restore:null,hiddenSiblings:r}),n)}mount(e,t){const n=mn(this.containers,(t=>-1!==t.modals.indexOf(e))),r=this.containers[n];r.restore||(r.restore=hn(r,t))}remove(e,t=!0){const n=this.modals.indexOf(e);if(-1===n)return n;const r=mn(this.containers,(t=>-1!==t.modals.indexOf(e))),o=this.containers[r];if(o.modals.splice(o.modals.indexOf(e),1),this.modals.splice(n,1),0===o.modals.length)o.restore&&o.restore(),e.modalRef&&dn(e.modalRef,t),fn(o.container,e.mount,e.modalRef,o.hiddenSiblings,!1),this.containers.splice(r,1);else{const e=o.modals[o.modals.length-1];e.modalRef&&dn(e.modalRef,!1)}return n}isTopModal(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}};function yn(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:o=!1,manager:a=gn,closeAfterTransition:i=!1,onTransitionEnter:s,onTransitionExited:l,children:c,onClose:u,open:d,rootRef:p}=e,f=r.useRef({}),m=r.useRef(null),h=r.useRef(null),g=en(h,p),[y,v]=r.useState(!d),b=function(e){return!!e&&e.props.hasOwnProperty("in")}(c);let x=!0;"false"!==e["aria-hidden"]&&!1!==e["aria-hidden"]||(x=!1);const w=()=>(f.current.modalRef=h.current,f.current.mount=m.current,f.current),k=()=>{a.mount(w(),{disableScrollLock:o}),h.current&&(h.current.scrollTop=0)},E=ln((()=>{const e=function(e){return"function"==typeof e?e():e}(t)||an(m.current).body;a.add(w(),e),h.current&&k()})),S=r.useCallback((()=>a.isTopModal(w())),[a]),C=ln((e=>{m.current=e,e&&(d&&S()?k():h.current&&dn(h.current,x))})),A=r.useCallback((()=>{a.remove(w(),x)}),[x,a]);r.useEffect((()=>()=>{A()}),[A]),r.useEffect((()=>{d?E():b&&i||A()}),[d,A,b,i,E]);const P=e=>t=>{var r;null==(r=e.onKeyDown)||r.call(e,t),"Escape"===t.key&&S()&&(n||(t.stopPropagation(),u&&u(t,"escapeKeyDown")))},O=e=>t=>{var n;null==(n=e.onClick)||n.call(e,t),t.target===t.currentTarget&&u&&u(t,"backdropClick")};return{getRootProps:(t={})=>{const n=tn(e);delete n.onTransitionEnter,delete n.onTransitionExited;const r=Xt({},n,t);return Xt({role:"presentation"},r,{onKeyDown:P(r),ref:g})},getBackdropProps:(e={})=>Xt({"aria-hidden":!0},e,{onClick:O(e),open:d}),getTransitionProps:()=>({onEnter:cn((()=>{v(!1),s&&s()}),null==c?void 0:c.props.onEnter),onExited:cn((()=>{v(!0),l&&l(),i&&A()}),null==c?void 0:c.props.onExited)}),rootRef:g,portalRef:C,isTopModal:S,exited:y,hasTransition:b}}function vn(e,t,n=void 0){const r={};return Object.keys(e).forEach((o=>{r[o]=e[o].reduce(((e,r)=>{if(r){const o=t(r);""!==o&&e.push(o),n&&n[r]&&e.push(n[r])}return e}),[]).join(" ")})),r}var bn=n(5893);const xn=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function wn(e){const t=[],n=[];return Array.from(e.querySelectorAll(xn)).forEach(((e,r)=>{const o=function(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?"true"===e.contentEditable||("AUDIO"===e.nodeName||"VIDEO"===e.nodeName||"DETAILS"===e.nodeName)&&null===e.getAttribute("tabindex")?0:e.tabIndex:t}(e);-1!==o&&function(e){return!(e.disabled||"INPUT"===e.tagName&&"hidden"===e.type||function(e){if("INPUT"!==e.tagName||"radio"!==e.type)return!1;if(!e.name)return!1;const t=t=>e.ownerDocument.querySelector(`input[type="radio"]${t}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}(e))}(e)&&(0===o?t.push(e):n.push({documentOrder:r,tabIndex:o,node:e}))})),n.sort(((e,t)=>e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex)).map((e=>e.node)).concat(t)}function kn(){return!0}function En(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:o=!1,disableRestoreFocus:a=!1,getTabbable:i=wn,isEnabled:s=kn,open:l}=e,c=r.useRef(!1),u=r.useRef(null),d=r.useRef(null),p=r.useRef(null),f=r.useRef(null),m=r.useRef(!1),h=r.useRef(null),g=en(t.ref,h),y=r.useRef(null);r.useEffect((()=>{l&&h.current&&(m.current=!n)}),[n,l]),r.useEffect((()=>{if(!l||!h.current)return;const e=an(h.current);return h.current.contains(e.activeElement)||(h.current.hasAttribute("tabIndex")||h.current.setAttribute("tabIndex","-1"),m.current&&h.current.focus()),()=>{a||(p.current&&p.current.focus&&(c.current=!0,p.current.focus()),p.current=null)}}),[l]),r.useEffect((()=>{if(!l||!h.current)return;const e=an(h.current),t=t=>{y.current=t,!o&&s()&&"Tab"===t.key&&e.activeElement===h.current&&t.shiftKey&&(c.current=!0,d.current&&d.current.focus())},n=()=>{const t=h.current;if(null===t)return;if(!e.hasFocus()||!s()||c.current)return void(c.current=!1);if(t.contains(e.activeElement))return;if(o&&e.activeElement!==u.current&&e.activeElement!==d.current)return;if(e.activeElement!==f.current)f.current=null;else if(null!==f.current)return;if(!m.current)return;let n=[];if(e.activeElement!==u.current&&e.activeElement!==d.current||(n=i(h.current)),n.length>0){var r,a;const e=Boolean((null==(r=y.current)?void 0:r.shiftKey)&&"Tab"===(null==(a=y.current)?void 0:a.key)),t=n[0],o=n[n.length-1];"string"!=typeof t&&"string"!=typeof o&&(e?o.focus():t.focus())}else t.focus()};e.addEventListener("focusin",n),e.addEventListener("keydown",t,!0);const r=setInterval((()=>{e.activeElement&&"BODY"===e.activeElement.tagName&&n()}),50);return()=>{clearInterval(r),e.removeEventListener("focusin",n),e.removeEventListener("keydown",t,!0)}}),[n,o,a,s,l,i]);const v=e=>{null===p.current&&(p.current=e.relatedTarget),m.current=!0};return(0,bn.jsxs)(r.Fragment,{children:[(0,bn.jsx)("div",{tabIndex:l?0:-1,onFocus:v,ref:u,"data-testid":"sentinelStart"}),r.cloneElement(t,{ref:g,onFocus:e=>{null===p.current&&(p.current=e.relatedTarget),m.current=!0,f.current=e.target;const n=t.props.onFocus;n&&n(e)}}),(0,bn.jsx)("div",{tabIndex:l?0:-1,onFocus:v,ref:d,"data-testid":"sentinelEnd"})]})}var Sn=n(3935);const Cn=r.forwardRef((function(e,t){const{children:n,container:o,disablePortal:a=!1}=e,[i,s]=r.useState(null),l=en(r.isValidElement(n)?n.ref:null,t);if(sn((()=>{a||s(function(e){return"function"==typeof e?e():e}(o)||document.body)}),[o,a]),sn((()=>{if(i&&!a)return Qt(t,i),()=>{Qt(t,null)}}),[t,i,a]),a){if(r.isValidElement(n)){const e={ref:l};return r.cloneElement(n,e)}return(0,bn.jsx)(r.Fragment,{children:n})}return(0,bn.jsx)(r.Fragment,{children:i?Sn.createPortal(n,i):i})}));function An(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var Pn=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,On=An((function(e){return Pn.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}));var Tn=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(r){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),Rn=Math.abs,$n=String.fromCharCode,Nn=Object.assign;function In(e){return e.trim()}function jn(e,t,n){return e.replace(t,n)}function _n(e,t){return e.indexOf(t)}function zn(e,t){return 0|e.charCodeAt(t)}function Ln(e,t,n){return e.slice(t,n)}function Mn(e){return e.length}function Bn(e){return e.length}function Dn(e,t){return t.push(e),e}var Fn=1,Wn=1,Kn=0,Gn=0,Hn=0,qn="";function Un(e,t,n,r,o,a,i){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:Fn,column:Wn,length:i,return:""}}function Yn(e,t){return Nn(Un("",null,null,"",null,null,0),e,{length:-e.length},t)}function Vn(){return Hn=Gn<Kn?zn(qn,Gn++):0,Wn++,10===Hn&&(Wn=1,Fn++),Hn}function Xn(){return zn(qn,Gn)}function Zn(){return Gn}function Jn(e,t){return Ln(qn,e,t)}function Qn(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function er(e){return Fn=Wn=1,Kn=Mn(qn=e),Gn=0,[]}function tr(e){return qn="",e}function nr(e){return In(Jn(Gn-1,ar(91===e?e+2:40===e?e+1:e)))}function rr(e){for(;(Hn=Xn())&&Hn<33;)Vn();return Qn(e)>2||Qn(Hn)>3?"":" "}function or(e,t){for(;--t&&Vn()&&!(Hn<48||Hn>102||Hn>57&&Hn<65||Hn>70&&Hn<97););return Jn(e,Zn()+(t<6&&32==Xn()&&32==Vn()))}function ar(e){for(;Vn();)switch(Hn){case e:return Gn;case 34:case 39:34!==e&&39!==e&&ar(Hn);break;case 40:41===e&&ar(e);break;case 92:Vn()}return Gn}function ir(e,t){for(;Vn()&&e+Hn!==57&&(e+Hn!==84||47!==Xn()););return"/*"+Jn(t,Gn-1)+"*"+$n(47===e?e:Vn())}function sr(e){for(;!Qn(Xn());)Vn();return Jn(e,Gn)}var lr="-ms-",cr="-moz-",ur="-webkit-",dr="comm",pr="rule",fr="decl",mr="@keyframes";function hr(e,t){for(var n="",r=Bn(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function gr(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case fr:return e.return=e.return||e.value;case dr:return"";case mr:return e.return=e.value+"{"+hr(e.children,r)+"}";case pr:e.value=e.props.join(",")}return Mn(n=hr(e.children,r))?e.return=e.value+"{"+n+"}":""}function yr(e){return tr(vr("",null,null,null,[""],e=er(e),0,[0],e))}function vr(e,t,n,r,o,a,i,s,l){for(var c=0,u=0,d=i,p=0,f=0,m=0,h=1,g=1,y=1,v=0,b="",x=o,w=a,k=r,E=b;g;)switch(m=v,v=Vn()){case 40:if(108!=m&&58==zn(E,d-1)){-1!=_n(E+=jn(nr(v),"&","&\f"),"&\f")&&(y=-1);break}case 34:case 39:case 91:E+=nr(v);break;case 9:case 10:case 13:case 32:E+=rr(m);break;case 92:E+=or(Zn()-1,7);continue;case 47:switch(Xn()){case 42:case 47:Dn(xr(ir(Vn(),Zn()),t,n),l);break;default:E+="/"}break;case 123*h:s[c++]=Mn(E)*y;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:-1==y&&(E=jn(E,/\f/g,"")),f>0&&Mn(E)-d&&Dn(f>32?wr(E+";",r,n,d-1):wr(jn(E," ","")+";",r,n,d-2),l);break;case 59:E+=";";default:if(Dn(k=br(E,t,n,c,u,o,s,b,x=[],w=[],d),a),123===v)if(0===u)vr(E,t,k,k,x,a,d,s,w);else switch(99===p&&110===zn(E,3)?100:p){case 100:case 108:case 109:case 115:vr(e,k,k,r&&Dn(br(e,k,k,0,0,o,s,b,o,x=[],d),w),o,w,d,s,r?x:w);break;default:vr(E,k,k,k,[""],w,0,s,w)}}c=u=f=0,h=y=1,b=E="",d=i;break;case 58:d=1+Mn(E),f=m;default:if(h<1)if(123==v)--h;else if(125==v&&0==h++&&125==(Hn=Gn>0?zn(qn,--Gn):0,Wn--,10===Hn&&(Wn=1,Fn--),Hn))continue;switch(E+=$n(v),v*h){case 38:y=u>0?1:(E+="\f",-1);break;case 44:s[c++]=(Mn(E)-1)*y,y=1;break;case 64:45===Xn()&&(E+=nr(Vn())),p=Xn(),u=d=Mn(b=E+=sr(Zn())),v++;break;case 45:45===m&&2==Mn(E)&&(h=0)}}return a}function br(e,t,n,r,o,a,i,s,l,c,u){for(var d=o-1,p=0===o?a:[""],f=Bn(p),m=0,h=0,g=0;m<r;++m)for(var y=0,v=Ln(e,d+1,d=Rn(h=i[m])),b=e;y<f;++y)(b=In(h>0?p[y]+" "+v:jn(v,/&\f/g,p[y])))&&(l[g++]=b);return Un(e,t,n,0===o?pr:s,l,c,u)}function xr(e,t,n){return Un(e,t,n,dr,$n(Hn),Ln(e,2,-2),0)}function wr(e,t,n,r){return Un(e,t,n,fr,Ln(e,0,r),Ln(e,r+1,-1),r)}var kr=function(e,t,n){for(var r=0,o=0;r=o,o=Xn(),38===r&&12===o&&(t[n]=1),!Qn(o);)Vn();return Jn(e,Gn)},Er=function(e,t){return tr(function(e,t){var n=-1,r=44;do{switch(Qn(r)){case 0:38===r&&12===Xn()&&(t[n]=1),e[n]+=kr(Gn-1,t,n);break;case 2:e[n]+=nr(r);break;case 4:if(44===r){e[++n]=58===Xn()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=$n(r)}}while(r=Vn());return e}(er(e),t))},Sr=new WeakMap,Cr=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||Sr.get(n))&&!r){Sr.set(e,!0);for(var o=[],a=Er(t,o),i=n.props,s=0,l=0;s<a.length;s++)for(var c=0;c<i.length;c++,l++)e.props[l]=o[s]?a[s].replace(/&\f/g,i[c]):i[c]+" "+a[s]}}},Ar=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function Pr(e,t){switch(function(e,t){return 45^zn(e,0)?(((t<<2^zn(e,0))<<2^zn(e,1))<<2^zn(e,2))<<2^zn(e,3):0}(e,t)){case 5103:return ur+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ur+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ur+e+cr+e+lr+e+e;case 6828:case 4268:return ur+e+lr+e+e;case 6165:return ur+e+lr+"flex-"+e+e;case 5187:return ur+e+jn(e,/(\w+).+(:[^]+)/,ur+"box-$1$2"+lr+"flex-$1$2")+e;case 5443:return ur+e+lr+"flex-item-"+jn(e,/flex-|-self/,"")+e;case 4675:return ur+e+lr+"flex-line-pack"+jn(e,/align-content|flex-|-self/,"")+e;case 5548:return ur+e+lr+jn(e,"shrink","negative")+e;case 5292:return ur+e+lr+jn(e,"basis","preferred-size")+e;case 6060:return ur+"box-"+jn(e,"-grow","")+ur+e+lr+jn(e,"grow","positive")+e;case 4554:return ur+jn(e,/([^-])(transform)/g,"$1"+ur+"$2")+e;case 6187:return jn(jn(jn(e,/(zoom-|grab)/,ur+"$1"),/(image-set)/,ur+"$1"),e,"")+e;case 5495:case 3959:return jn(e,/(image-set\([^]*)/,ur+"$1$`$1");case 4968:return jn(jn(e,/(.+:)(flex-)?(.*)/,ur+"box-pack:$3"+lr+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ur+e+e;case 4095:case 3583:case 4068:case 2532:return jn(e,/(.+)-inline(.+)/,ur+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Mn(e)-1-t>6)switch(zn(e,t+1)){case 109:if(45!==zn(e,t+4))break;case 102:return jn(e,/(.+:)(.+)-([^]+)/,"$1"+ur+"$2-$3$1"+cr+(108==zn(e,t+3)?"$3":"$2-$3"))+e;case 115:return~_n(e,"stretch")?Pr(jn(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==zn(e,t+1))break;case 6444:switch(zn(e,Mn(e)-3-(~_n(e,"!important")&&10))){case 107:return jn(e,":",":"+ur)+e;case 101:return jn(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ur+(45===zn(e,14)?"inline-":"")+"box$3$1"+ur+"$2$3$1"+lr+"$2box$3")+e}break;case 5936:switch(zn(e,t+11)){case 114:return ur+e+lr+jn(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ur+e+lr+jn(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ur+e+lr+jn(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ur+e+lr+e+e}return e}var Or=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case fr:e.return=Pr(e.value,e.length);break;case mr:return hr([Yn(e,{value:jn(e.value,"@","@"+ur)})],r);case pr:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return hr([Yn(e,{props:[jn(t,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return hr([Yn(e,{props:[jn(t,/:(plac\w+)/,":"+ur+"input-$1")]}),Yn(e,{props:[jn(t,/:(plac\w+)/,":-moz-$1")]}),Yn(e,{props:[jn(t,/:(plac\w+)/,lr+"input-$1")]})],r)}return""}))}}],Tr=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var r=e.stylisPlugins||Or;var o,a,i={},s=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)i[t[n]]=!0;s.push(e)}));var l,c,u,d,p=[gr,(d=function(e){l.insert(e)},function(e){e.root||(e=e.return)&&d(e)})],f=(c=[Cr,Ar].concat(r,p),u=Bn(c),function(e,t,n,r){for(var o="",a=0;a<u;a++)o+=c[a](e,t,n,r)||"";return o});a=function(e,t,n,r){l=n,function(e){hr(yr(e),f)}(e?e+"{"+t.styles+"}":t.styles),r&&(m.inserted[t.name]=!0)};var m={key:t,sheet:new Tn({key:t,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:a};return m.sheet.hydrate(s),m};var Rr=/[A-Z]|^ms/g,$r=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Nr=function(e){return 45===e.charCodeAt(1)},Ir=function(e){return null!=e&&"boolean"!=typeof e},jr=An((function(e){return Nr(e)?e:e.replace(Rr,"-$&").toLowerCase()})),_r=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace($r,(function(e,t,n){return Lr={name:t,styles:n,next:Lr},t}))}return 1===ce[e]||Nr(e)||"number"!=typeof t||0===t?t:t+"px"};function zr(e,t,n){if(null==n)return"";if(void 0!==n.__emotion_styles)return n;switch(typeof n){case"boolean":return"";case"object":if(1===n.anim)return Lr={name:n.name,styles:n.styles,next:Lr},n.name;if(void 0!==n.styles){var r=n.next;if(void 0!==r)for(;void 0!==r;)Lr={name:r.name,styles:r.styles,next:Lr},r=r.next;return n.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=zr(e,t,n[o])+";";else for(var a in n){var i=n[a];if("object"!=typeof i)null!=t&&void 0!==t[i]?r+=a+"{"+t[i]+"}":Ir(i)&&(r+=jr(a)+":"+_r(a,i)+";");else if(!Array.isArray(i)||"string"!=typeof i[0]||null!=t&&void 0!==t[i[0]]){var s=zr(e,t,i);switch(a){case"animation":case"animationName":r+=jr(a)+":"+s+";";break;default:r+=a+"{"+s+"}"}}else for(var l=0;l<i.length;l++)Ir(i[l])&&(r+=jr(a)+":"+_r(a,i[l])+";")}return r}(e,t,n);case"function":if(void 0!==e){var o=Lr,a=n(e);return Lr=o,zr(e,t,a)}}if(null==t)return n;var i=t[n];return void 0!==i?i:n}var Lr,Mr=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var Br=!!o.useInsertionEffect&&o.useInsertionEffect,Dr=Br||function(e){return e()},Fr=(Br||r.useLayoutEffect,r.createContext("undefined"!=typeof HTMLElement?Tr({key:"css"}):null));Fr.Provider;var Wr=function(e){return(0,r.forwardRef)((function(t,n){var o=(0,r.useContext)(Fr);return e(t,o,n)}))};var Kr=r.createContext({});var Gr=function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)},Hr=On,qr=function(e){return"theme"!==e},Ur=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?Hr:qr},Yr=function(e,t,n){var r;if(t){var o=t.shouldForwardProp;r=e.__emotion_forwardProp&&o?function(t){return e.__emotion_forwardProp(t)&&o(t)}:o}return"function"!=typeof r&&n&&(r=e.__emotion_forwardProp),r},Vr=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return Gr(t,n,r),Dr((function(){return function(e,t,n){Gr(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var o=t;do{e.insert(t===o?"."+r:"",o,e.sheet,!0),o=o.next}while(void 0!==o)}}(t,n,r)})),null},Xr=(n(434),function e(t,n){var o,a,i=t.__emotion_real===t,s=i&&t.__emotion_base||t;void 0!==n&&(o=n.label,a=n.target);var l=Yr(t,n,i),c=l||Ur(s),u=!c("as");return function(){var d=arguments,p=i&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==o&&p.push("label:"+o+";"),null==d[0]||void 0===d[0].raw)p.push.apply(p,d);else{0,p.push(d[0][0]);for(var f=d.length,m=1;m<f;m++)p.push(d[m],d[0][m])}var h=Wr((function(e,t,n){var o,i,d,f,m=u&&e.as||s,h="",g=[],y=e;if(null==e.theme){for(var v in y={},e)y[v]=e[v];y.theme=r.useContext(Kr)}"string"==typeof e.className?(o=t.registered,i=g,d=e.className,f="",d.split(" ").forEach((function(e){void 0!==o[e]?i.push(o[e]+";"):f+=e+" "})),h=f):null!=e.className&&(h=e.className+" ");var b=function(e,t,n){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,o="";Lr=void 0;var a=e[0];null==a||void 0===a.raw?(r=!1,o+=zr(n,t,a)):o+=a[0];for(var i=1;i<e.length;i++)o+=zr(n,t,e[i]),r&&(o+=a[i]);Mr.lastIndex=0;for(var s,l="";null!==(s=Mr.exec(o));)l+="-"+s[1];var c=function(e){for(var t,n=0,r=0,o=e.length;o>=4;++r,o-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(o){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)}(o)+l;return{name:c,styles:o,next:Lr}}(p.concat(g),t.registered,y);h+=t.key+"-"+b.name,void 0!==a&&(h+=" "+a);var x=u&&void 0===l?Ur(m):c,w={};for(var k in e)u&&"as"===k||x(k)&&(w[k]=e[k]);return w.className=h,w.ref=n,r.createElement(r.Fragment,null,r.createElement(Vr,{cache:t,serialized:b,isStringTag:"string"==typeof m}),r.createElement(m,w))}));return h.displayName=void 0!==o?o:"Styled("+("string"==typeof s?s:s.displayName||s.name||"Component")+")",h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=s,h.__emotion_styles=p,h.__emotion_forwardProp=l,Object.defineProperty(h,"toString",{value:function(){return"."+a}}),h.withComponent=function(t,r){return e(t,Xt({},n,r,{shouldForwardProp:Yr(h,r,!0)})).apply(void 0,p)},h}}.bind());["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){Xr[e]=Xr(e)}));function Zr(e){return null!==e&&"object"==typeof e&&e.constructor===Object}function Jr(e){if(!Zr(e))return e;const t={};return Object.keys(e).forEach((n=>{t[n]=Jr(e[n])})),t}function Qr(e,t,n={clone:!0}){const r=n.clone?Xt({},e):e;return Zr(e)&&Zr(t)&&Object.keys(t).forEach((o=>{"__proto__"!==o&&(Zr(t[o])&&o in e&&Zr(e[o])?r[o]=Qr(e[o],t[o],n):n.clone?r[o]=Zr(t[o])?Jr(t[o]):t[o]:r[o]=t[o])})),r}const eo=["values","unit","step"],to=e=>{const t=Object.keys(e).map((t=>({key:t,val:e[t]})))||[];return t.sort(((e,t)=>e.val-t.val)),t.reduce(((e,t)=>Xt({},e,{[t.key]:t.val})),{})};var no={borderRadius:4};const ro={xs:0,sm:600,md:900,lg:1200,xl:1536},oo={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${ro[e]}px)`};function ao(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const e=r.breakpoints||oo;return t.reduce(((r,o,a)=>(r[e.up(e.keys[a])]=n(t[a]),r)),{})}if("object"==typeof t){const e=r.breakpoints||oo;return Object.keys(t).reduce(((r,o)=>{if(-1!==Object.keys(e.values||ro).indexOf(o)){r[e.up(o)]=n(t[o],o)}else{const e=o;r[e]=t[e]}return r}),{})}return n(t)}function io(e={}){var t;return(null==(t=e.keys)?void 0:t.reduce(((t,n)=>(t[e.up(n)]={},t)),{}))||{}}function so(e,t){return e.reduce(((e,t)=>{const n=e[t];return(!n||0===Object.keys(n).length)&&delete e[t],e}),t)}function lo(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}function co(e){if("string"!=typeof e)throw new Error(lo(7));return e.charAt(0).toUpperCase()+e.slice(1)}function uo(e,t,n=!0){if(!t||"string"!=typeof t)return null;if(e&&e.vars&&n){const n=`vars.${t}`.split(".").reduce(((e,t)=>e&&e[t]?e[t]:null),e);if(null!=n)return n}return t.split(".").reduce(((e,t)=>e&&null!=e[t]?e[t]:null),e)}function po(e,t,n,r=n){let o;return o="function"==typeof e?e(n):Array.isArray(e)?e[n]||r:uo(e,n)||r,t&&(o=t(o,r,e)),o}var fo=function(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:o}=e,a=e=>{if(null==e[t])return null;const a=e[t],i=uo(e.theme,r)||{};return ao(e,a,(e=>{let r=po(i,o,e);return e===r&&"string"==typeof e&&(r=po(i,o,`${t}${"default"===e?"":co(e)}`,e)),!1===n?r:{[n]:r}}))};return a.propTypes={},a.filterProps=[t],a};var mo=function(e,t){return t?Qr(e,t,{clone:!1}):e};const ho={m:"margin",p:"padding"},go={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},yo={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},vo=function(e){const t={};return n=>(void 0===t[n]&&(t[n]=e(n)),t[n])}((e=>{if(e.length>2){if(!yo[e])return[e];e=yo[e]}const[t,n]=e.split(""),r=ho[t],o=go[n]||"";return Array.isArray(o)?o.map((e=>r+e)):[r+o]})),bo=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],xo=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],wo=[...bo,...xo];function ko(e,t,n,r){var o;const a=null!=(o=uo(e,t,!1))?o:n;return"number"==typeof a?e=>"string"==typeof e?e:a*e:Array.isArray(a)?e=>"string"==typeof e?e:a[e]:"function"==typeof a?a:()=>{}}function Eo(e){return ko(e,"spacing",8)}function So(e,t){if("string"==typeof t||null==t)return t;const n=e(Math.abs(t));return t>=0?n:"number"==typeof n?-n:`-${n}`}function Co(e,t,n,r){if(-1===t.indexOf(n))return null;const o=function(e,t){return n=>e.reduce(((e,r)=>(e[r]=So(t,n),e)),{})}(vo(n),r);return ao(e,e[n],o)}function Ao(e,t){const n=Eo(e.theme);return Object.keys(e).map((r=>Co(e,t,r,n))).reduce(mo,{})}function Po(e){return Ao(e,bo)}function Oo(e){return Ao(e,xo)}function To(e){return Ao(e,wo)}Po.propTypes={},Po.filterProps=bo,Oo.propTypes={},Oo.filterProps=xo,To.propTypes={},To.filterProps=wo;var Ro=function(...e){const t=e.reduce(((e,t)=>(t.filterProps.forEach((n=>{e[n]=t})),e)),{}),n=e=>Object.keys(e).reduce(((n,r)=>t[r]?mo(n,t[r](e)):n),{});return n.propTypes={},n.filterProps=e.reduce(((e,t)=>e.concat(t.filterProps)),[]),n};function $o(e){return"number"!=typeof e?e:`${e}px solid`}const No=fo({prop:"border",themeKey:"borders",transform:$o}),Io=fo({prop:"borderTop",themeKey:"borders",transform:$o}),jo=fo({prop:"borderRight",themeKey:"borders",transform:$o}),_o=fo({prop:"borderBottom",themeKey:"borders",transform:$o}),zo=fo({prop:"borderLeft",themeKey:"borders",transform:$o}),Lo=fo({prop:"borderColor",themeKey:"palette"}),Mo=fo({prop:"borderTopColor",themeKey:"palette"}),Bo=fo({prop:"borderRightColor",themeKey:"palette"}),Do=fo({prop:"borderBottomColor",themeKey:"palette"}),Fo=fo({prop:"borderLeftColor",themeKey:"palette"}),Wo=e=>{if(void 0!==e.borderRadius&&null!==e.borderRadius){const t=ko(e.theme,"shape.borderRadius",4),n=e=>({borderRadius:So(t,e)});return ao(e,e.borderRadius,n)}return null};Wo.propTypes={},Wo.filterProps=["borderRadius"];Ro(No,Io,jo,_o,zo,Lo,Mo,Bo,Do,Fo,Wo);const Ko=e=>{if(void 0!==e.gap&&null!==e.gap){const t=ko(e.theme,"spacing",8),n=e=>({gap:So(t,e)});return ao(e,e.gap,n)}return null};Ko.propTypes={},Ko.filterProps=["gap"];const Go=e=>{if(void 0!==e.columnGap&&null!==e.columnGap){const t=ko(e.theme,"spacing",8),n=e=>({columnGap:So(t,e)});return ao(e,e.columnGap,n)}return null};Go.propTypes={},Go.filterProps=["columnGap"];const Ho=e=>{if(void 0!==e.rowGap&&null!==e.rowGap){const t=ko(e.theme,"spacing",8),n=e=>({rowGap:So(t,e)});return ao(e,e.rowGap,n)}return null};Ho.propTypes={},Ho.filterProps=["rowGap"];Ro(Ko,Go,Ho,fo({prop:"gridColumn"}),fo({prop:"gridRow"}),fo({prop:"gridAutoFlow"}),fo({prop:"gridAutoColumns"}),fo({prop:"gridAutoRows"}),fo({prop:"gridTemplateColumns"}),fo({prop:"gridTemplateRows"}),fo({prop:"gridTemplateAreas"}),fo({prop:"gridArea"}));function qo(e,t){return"grey"===t?t:e}Ro(fo({prop:"color",themeKey:"palette",transform:qo}),fo({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:qo}),fo({prop:"backgroundColor",themeKey:"palette",transform:qo}));function Uo(e){return e<=1&&0!==e?100*e+"%":e}const Yo=fo({prop:"width",transform:Uo}),Vo=e=>{if(void 0!==e.maxWidth&&null!==e.maxWidth){const t=t=>{var n,r;const o=(null==(n=e.theme)||null==(n=n.breakpoints)||null==(n=n.values)?void 0:n[t])||ro[t];return o?"px"!==(null==(r=e.theme)||null==(r=r.breakpoints)?void 0:r.unit)?{maxWidth:`${o}${e.theme.breakpoints.unit}`}:{maxWidth:o}:{maxWidth:Uo(t)}};return ao(e,e.maxWidth,t)}return null};Vo.filterProps=["maxWidth"];const Xo=fo({prop:"minWidth",transform:Uo}),Zo=fo({prop:"height",transform:Uo}),Jo=fo({prop:"maxHeight",transform:Uo}),Qo=fo({prop:"minHeight",transform:Uo});fo({prop:"size",cssProperty:"width",transform:Uo}),fo({prop:"size",cssProperty:"height",transform:Uo}),Ro(Yo,Vo,Xo,Zo,Jo,Qo,fo({prop:"boxSizing"}));var ea={border:{themeKey:"borders",transform:$o},borderTop:{themeKey:"borders",transform:$o},borderRight:{themeKey:"borders",transform:$o},borderBottom:{themeKey:"borders",transform:$o},borderLeft:{themeKey:"borders",transform:$o},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Wo},color:{themeKey:"palette",transform:qo},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:qo},backgroundColor:{themeKey:"palette",transform:qo},p:{style:Oo},pt:{style:Oo},pr:{style:Oo},pb:{style:Oo},pl:{style:Oo},px:{style:Oo},py:{style:Oo},padding:{style:Oo},paddingTop:{style:Oo},paddingRight:{style:Oo},paddingBottom:{style:Oo},paddingLeft:{style:Oo},paddingX:{style:Oo},paddingY:{style:Oo},paddingInline:{style:Oo},paddingInlineStart:{style:Oo},paddingInlineEnd:{style:Oo},paddingBlock:{style:Oo},paddingBlockStart:{style:Oo},paddingBlockEnd:{style:Oo},m:{style:Po},mt:{style:Po},mr:{style:Po},mb:{style:Po},ml:{style:Po},mx:{style:Po},my:{style:Po},margin:{style:Po},marginTop:{style:Po},marginRight:{style:Po},marginBottom:{style:Po},marginLeft:{style:Po},marginX:{style:Po},marginY:{style:Po},marginInline:{style:Po},marginInlineStart:{style:Po},marginInlineEnd:{style:Po},marginBlock:{style:Po},marginBlockStart:{style:Po},marginBlockEnd:{style:Po},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Ko},rowGap:{style:Ho},columnGap:{style:Go},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Uo},maxWidth:{style:Vo},minWidth:{transform:Uo},height:{transform:Uo},maxHeight:{transform:Uo},minHeight:{transform:Uo},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};const ta=function(){function e(e,t,n,r){const o={[e]:t,theme:n},a=r[e];if(!a)return{[e]:t};const{cssProperty:i=e,themeKey:s,transform:l,style:c}=a;if(null==t)return null;if("typography"===s&&"inherit"===t)return{[e]:t};const u=uo(n,s)||{};if(c)return c(o);return ao(o,t,(t=>{let n=po(u,l,t);return t===n&&"string"==typeof t&&(n=po(u,l,`${e}${"default"===t?"":co(t)}`,t)),!1===i?n:{[i]:n}}))}return function t(n){var r;const{sx:o,theme:a={}}=n||{};if(!o)return null;const i=null!=(r=a.unstable_sxConfig)?r:ea;function s(n){let r=n;if("function"==typeof n)r=n(a);else if("object"!=typeof n)return n;if(!r)return null;const o=io(a.breakpoints),s=Object.keys(o);let l=o;return Object.keys(r).forEach((n=>{const o=(s=r[n],c=a,"function"==typeof s?s(c):s);var s,c;if(null!=o)if("object"==typeof o)if(i[n])l=mo(l,e(n,o,a,i));else{const e=ao({theme:a},o,(e=>({[n]:e})));!function(...e){const t=e.reduce(((e,t)=>e.concat(Object.keys(t))),[]),n=new Set(t);return e.every((e=>n.size===Object.keys(e).length))}(e,o)?l=mo(l,e):l[n]=t({sx:o,theme:a})}else l=mo(l,e(n,o,a,i))})),so(s,l)}return Array.isArray(o)?o.map(s):s(o)}}();ta.filterProps=["sx"];var na=ta;const ra=["breakpoints","palette","spacing","shape"];var oa=function(e={},...t){const{breakpoints:n={},palette:r={},spacing:o,shape:a={}}=e,i=Vt(e,ra),s=function(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=e,o=Vt(e,eo),a=to(t),i=Object.keys(a);function s(e){return`@media (min-width:${"number"==typeof t[e]?t[e]:e}${n})`}function l(e){return`@media (max-width:${("number"==typeof t[e]?t[e]:e)-r/100}${n})`}function c(e,o){const a=i.indexOf(o);return`@media (min-width:${"number"==typeof t[e]?t[e]:e}${n}) and (max-width:${(-1!==a&&"number"==typeof t[i[a]]?t[i[a]]:o)-r/100}${n})`}return Xt({keys:i,values:a,up:s,down:l,between:c,only:function(e){return i.indexOf(e)+1<i.length?c(e,i[i.indexOf(e)+1]):s(e)},not:function(e){const t=i.indexOf(e);return 0===t?s(i[1]):t===i.length-1?l(i[t]):c(e,i[i.indexOf(e)+1]).replace("@media","@media not all and")},unit:n},o)}(n),l=function(e=8){if(e.mui)return e;const t=Eo({spacing:e}),n=(...e)=>(0===e.length?[1]:e).map((e=>{const n=t(e);return"number"==typeof n?`${n}px`:n})).join(" ");return n.mui=!0,n}(o);let c=Qr({breakpoints:s,direction:"ltr",components:{},palette:Xt({mode:"light"},r),spacing:l,shape:Xt({},no,a)},i);return c=t.reduce(((e,t)=>Qr(e,t)),c),c.unstable_sxConfig=Xt({},ea,null==i?void 0:i.unstable_sxConfig),c.unstable_sx=function(e){return na({sx:e,theme:this})},c};const aa=["variant"];function ia(e){return 0===e.length}function sa(e){const{variant:t}=e,n=Vt(e,aa);let r=t||"";return Object.keys(n).sort().forEach((t=>{r+="color"===t?ia(r)?e[t]:co(e[t]):`${ia(r)?t:co(t)}${co(e[t].toString())}`})),r}const la=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];const ca=e=>{const t={};return e&&e.forEach((e=>{const n=sa(e.props);t[n]=e.style})),t},ua=(e,t,n)=>{const{ownerState:r={}}=e,o=[];return n&&n.forEach((n=>{let a=!0;Object.keys(n.props).forEach((t=>{r[t]!==n.props[t]&&e[t]!==n.props[t]&&(a=!1)})),a&&o.push(t[sa(n.props)])})),o};function da(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}const pa=oa(),fa=e=>e?e.charAt(0).toLowerCase()+e.slice(1):e;function ma({defaultTheme:e,theme:t,themeId:n}){return r=t,0===Object.keys(r).length?e:t[n]||t;var r}function ha(e){return e?(t,n)=>n[e]:null}const ga=({styledArg:e,props:t,defaultTheme:n,themeId:r})=>{const o=e(Xt({},t,{theme:ma(Xt({},t,{defaultTheme:n,themeId:r}))}));let a;if(o&&o.variants&&(a=o.variants,delete o.variants),a){return[o,...ua(t,ca(a),a)]}return o};function ya(e,t){return Xt({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}function va(e,t=0,n=1){return Math.min(Math.max(t,e),n)}function ba(e){if(e.type)return e;if("#"===e.charAt(0))return ba(function(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&1===n[0].length&&(n=n.map((e=>e+e))),n?`rgb${4===n.length?"a":""}(${n.map(((e,t)=>t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3)).join(", ")})`:""}(e));const t=e.indexOf("("),n=e.substring(0,t);if(-1===["rgb","rgba","hsl","hsla","color"].indexOf(n))throw new Error(lo(9,e));let r,o=e.substring(t+1,e.length-1);if("color"===n){if(o=o.split(" "),r=o.shift(),4===o.length&&"/"===o[3].charAt(0)&&(o[3]=o[3].slice(1)),-1===["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(r))throw new Error(lo(10,r))}else o=o.split(",");return o=o.map((e=>parseFloat(e))),{type:n,values:o,colorSpace:r}}function xa(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return-1!==t.indexOf("rgb")?r=r.map(((e,t)=>t<3?parseInt(e,10):e)):-1!==t.indexOf("hsl")&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),r=-1!==t.indexOf("color")?`${n} ${r.join(" ")}`:`${r.join(", ")}`,`${t}(${r})`}function wa(e){let t="hsl"===(e=ba(e)).type||"hsla"===e.type?ba(function(e){e=ba(e);const{values:t}=e,n=t[0],r=t[1]/100,o=t[2]/100,a=r*Math.min(o,1-o),i=(e,t=(e+n/30)%12)=>o-a*Math.max(Math.min(t-3,9-t,1),-1);let s="rgb";const l=[Math.round(255*i(0)),Math.round(255*i(8)),Math.round(255*i(4))];return"hsla"===e.type&&(s+="a",l.push(t[3])),xa({type:s,values:l})}(e)).values:e.values;return t=t.map((t=>("color"!==e.type&&(t/=255),t<=.03928?t/12.92:((t+.055)/1.055)**2.4))),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function ka(e,t){if(e=ba(e),t=va(t),-1!==e.type.indexOf("hsl"))e.values[2]*=1-t;else if(-1!==e.type.indexOf("rgb")||-1!==e.type.indexOf("color"))for(let n=0;n<3;n+=1)e.values[n]*=1-t;return xa(e)}function Ea(e,t){if(e=ba(e),t=va(t),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*t;else if(-1!==e.type.indexOf("rgb"))for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(-1!==e.type.indexOf("color"))for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return xa(e)}var Sa={black:"#000",white:"#fff"};var Ca={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"};var Aa={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"};var Pa={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"};var Oa={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"};var Ta={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"};var Ra={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"};var $a={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};const Na=["mode","contrastThreshold","tonalOffset"],Ia={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Sa.white,default:Sa.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},ja={text:{primary:Sa.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Sa.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function _a(e,t,n,r){const o=r.light||r,a=r.dark||1.5*r;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:"light"===t?e.light=Ea(e.main,o):"dark"===t&&(e.dark=ka(e.main,a)))}function za(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,o=Vt(e,Na),a=e.primary||function(e="light"){return"dark"===e?{main:Ta[200],light:Ta[50],dark:Ta[400]}:{main:Ta[700],light:Ta[400],dark:Ta[800]}}(t),i=e.secondary||function(e="light"){return"dark"===e?{main:Aa[200],light:Aa[50],dark:Aa[400]}:{main:Aa[500],light:Aa[300],dark:Aa[700]}}(t),s=e.error||function(e="light"){return"dark"===e?{main:Pa[500],light:Pa[300],dark:Pa[700]}:{main:Pa[700],light:Pa[400],dark:Pa[800]}}(t),l=e.info||function(e="light"){return"dark"===e?{main:Ra[400],light:Ra[300],dark:Ra[700]}:{main:Ra[700],light:Ra[500],dark:Ra[900]}}(t),c=e.success||function(e="light"){return"dark"===e?{main:$a[400],light:$a[300],dark:$a[700]}:{main:$a[800],light:$a[500],dark:$a[900]}}(t),u=e.warning||function(e="light"){return"dark"===e?{main:Oa[400],light:Oa[300],dark:Oa[700]}:{main:"#ed6c02",light:Oa[500],dark:Oa[900]}}(t);function d(e){const t=function(e,t){const n=wa(e),r=wa(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}(e,ja.text.primary)>=n?ja.text.primary:Ia.text.primary;return t}const p=({color:e,name:t,mainShade:n=500,lightShade:o=300,darkShade:a=700})=>{if(!(e=Xt({},e)).main&&e[n]&&(e.main=e[n]),!e.hasOwnProperty("main"))throw new Error(lo(11,t?` (${t})`:"",n));if("string"!=typeof e.main)throw new Error(lo(12,t?` (${t})`:"",JSON.stringify(e.main)));return _a(e,"light",o,r),_a(e,"dark",a,r),e.contrastText||(e.contrastText=d(e.main)),e},f={dark:ja,light:Ia};return Qr(Xt({common:Xt({},Sa),mode:t,primary:p({color:a,name:"primary"}),secondary:p({color:i,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:p({color:s,name:"error"}),warning:p({color:u,name:"warning"}),info:p({color:l,name:"info"}),success:p({color:c,name:"success"}),grey:Ca,contrastThreshold:n,getContrastText:d,augmentColor:p,tonalOffset:r},f[t]),o)}const La=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];const Ma={textTransform:"uppercase"},Ba='"Roboto", "Helvetica", "Arial", sans-serif';function Da(e,t){const n="function"==typeof t?t(e):t,{fontFamily:r=Ba,fontSize:o=14,fontWeightLight:a=300,fontWeightRegular:i=400,fontWeightMedium:s=500,fontWeightBold:l=700,htmlFontSize:c=16,allVariants:u,pxToRem:d}=n,p=Vt(n,La);const f=o/14,m=d||(e=>e/c*f+"rem"),h=(e,t,n,o,a)=>{return Xt({fontFamily:r,fontWeight:e,fontSize:m(t),lineHeight:n},r===Ba?{letterSpacing:(i=o/t,Math.round(1e5*i)/1e5)+"em"}:{},a,u);var i},g={h1:h(a,96,1.167,-1.5),h2:h(a,60,1.2,-.5),h3:h(i,48,1.167,0),h4:h(i,34,1.235,.25),h5:h(i,24,1.334,0),h6:h(s,20,1.6,.15),subtitle1:h(i,16,1.75,.15),subtitle2:h(s,14,1.57,.1),body1:h(i,16,1.5,.15),body2:h(i,14,1.43,.15),button:h(s,14,1.75,.4,Ma),caption:h(i,12,1.66,.4),overline:h(i,12,2.66,1,Ma),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return Qr(Xt({htmlFontSize:c,pxToRem:m,fontFamily:r,fontSize:o,fontWeightLight:a,fontWeightRegular:i,fontWeightMedium:s,fontWeightBold:l},g),p,{clone:!1})}function Fa(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,0.2)`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,0.14)`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,0.12)`].join(",")}var Wa=["none",Fa(0,2,1,-1,0,1,1,0,0,1,3,0),Fa(0,3,1,-2,0,2,2,0,0,1,5,0),Fa(0,3,3,-2,0,3,4,0,0,1,8,0),Fa(0,2,4,-1,0,4,5,0,0,1,10,0),Fa(0,3,5,-1,0,5,8,0,0,1,14,0),Fa(0,3,5,-1,0,6,10,0,0,1,18,0),Fa(0,4,5,-2,0,7,10,1,0,2,16,1),Fa(0,5,5,-3,0,8,10,1,0,3,14,2),Fa(0,5,6,-3,0,9,12,1,0,3,16,2),Fa(0,6,6,-3,0,10,14,1,0,4,18,3),Fa(0,6,7,-4,0,11,15,1,0,4,20,3),Fa(0,7,8,-4,0,12,17,2,0,5,22,4),Fa(0,7,8,-4,0,13,19,2,0,5,24,4),Fa(0,7,9,-4,0,14,21,2,0,5,26,4),Fa(0,8,9,-5,0,15,22,2,0,6,28,5),Fa(0,8,10,-5,0,16,24,2,0,6,30,5),Fa(0,8,11,-5,0,17,26,2,0,6,32,5),Fa(0,9,11,-5,0,18,28,2,0,7,34,6),Fa(0,9,12,-6,0,19,29,2,0,7,36,6),Fa(0,10,13,-6,0,20,31,3,0,8,38,7),Fa(0,10,13,-6,0,21,33,3,0,8,40,7),Fa(0,10,14,-6,0,22,35,3,0,8,42,7),Fa(0,11,14,-7,0,23,36,3,0,9,44,8),Fa(0,11,15,-7,0,24,38,3,0,9,46,8)];const Ka=["duration","easing","delay"],Ga={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},Ha={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function qa(e){return`${Math.round(e)}ms`}function Ua(e){if(!e)return 0;const t=e/36;return Math.round(10*(4+15*t**.25+t/5))}function Ya(e){const t=Xt({},Ga,e.easing),n=Xt({},Ha,e.duration);return Xt({getAutoHeightDuration:Ua,create:(e=["all"],r={})=>{const{duration:o=n.standard,easing:a=t.easeInOut,delay:i=0}=r;Vt(r,Ka);return(Array.isArray(e)?e:[e]).map((e=>`${e} ${"string"==typeof o?o:qa(o)} ${a} ${"string"==typeof i?i:qa(i)}`)).join(",")}},e,{easing:t,duration:n})}var Va={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};const Xa=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function Za(e={},...t){const{mixins:n={},palette:r={},transitions:o={},typography:a={}}=e,i=Vt(e,Xa);if(e.vars)throw new Error(lo(18));const s=za(r),l=oa(e);let c=Qr(l,{mixins:ya(l.breakpoints,n),palette:s,shadows:Wa.slice(),typography:Da(s,a),transitions:Ya(o),zIndex:Xt({},Va)});return c=Qr(c,i),c=t.reduce(((e,t)=>Qr(e,t)),c),c.unstable_sxConfig=Xt({},ea,null==i?void 0:i.unstable_sxConfig),c.unstable_sx=function(e){return na({sx:e,theme:this})},c}var Ja=Za(),Qa="$$material";const ei=function(e={}){const{themeId:t,defaultTheme:n=pa,rootShouldForwardProp:r=da,slotShouldForwardProp:o=da}=e,a=e=>na(Xt({},e,{theme:ma(Xt({},e,{defaultTheme:n,themeId:t}))}));return a.__mui_systemSx=!0,(e,i={})=>{((e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))})(e,(e=>e.filter((e=>!(null!=e&&e.__mui_systemSx)))));const{name:s,slot:l,skipVariantsResolver:c,skipSx:u,overridesResolver:d=ha(fa(l))}=i,p=Vt(i,la),f=void 0!==c?c:l&&"Root"!==l&&"root"!==l||!1,m=u||!1;let h=da;"Root"===l||"root"===l?h=r:l?h=o:function(e){return"string"==typeof e&&e.charCodeAt(0)>96}(e)&&(h=void 0);const g=function(e,t){return Xr(e,t)}(e,Xt({shouldForwardProp:h,label:undefined},p)),y=(r,...o)=>{const i=o?o.map((e=>{if("function"==typeof e&&e.__emotion_real!==e)return r=>ga({styledArg:e,props:r,defaultTheme:n,themeId:t});if(Zr(e)){let t,n=e;return e&&e.variants&&(t=e.variants,delete n.variants,n=n=>{let r=e;return ua(n,ca(t),t).forEach((e=>{r=Qr(r,e)})),r}),n}return e})):[];let l=r;if(Zr(r)){let e;r&&r.variants&&(e=r.variants,delete l.variants,l=t=>{let n=r;return ua(t,ca(e),e).forEach((e=>{n=Qr(n,e)})),n})}else"function"==typeof r&&r.__emotion_real!==r&&(l=e=>ga({styledArg:r,props:e,defaultTheme:n,themeId:t}));s&&d&&i.push((e=>{const r=ma(Xt({},e,{defaultTheme:n,themeId:t})),o=((e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null)(s,r);if(o){const t={};return Object.entries(o).forEach((([n,o])=>{t[n]="function"==typeof o?o(Xt({},e,{theme:r})):o})),d(e,t)}return null})),s&&!f&&i.push((e=>{const r=ma(Xt({},e,{defaultTheme:n,themeId:t}));return((e,t,n,r)=>{var o;const a=null==n||null==(o=n.components)||null==(o=o[r])?void 0:o.variants;return ua(e,t,a)})(e,((e,t)=>{let n=[];return t&&t.components&&t.components[e]&&t.components[e].variants&&(n=t.components[e].variants),ca(n)})(s,r),r,s)})),m||i.push(a);const c=i.length-o.length;if(Array.isArray(r)&&c>0){const e=new Array(c).fill("");l=[...r,...e],l.raw=[...r.raw,...e]}const u=g(l,...i);return e.muiName&&(u.muiName=e.muiName),u};return g.withConfig&&(y.withConfig=g.withConfig),y}}({themeId:Qa,defaultTheme:Ja,rootShouldForwardProp:e=>da(e)&&"classes"!==e});var ti=ei;function ni(e,t){const n=Xt({},t);return Object.keys(e).forEach((r=>{if(r.toString().match(/^(components|slots)$/))n[r]=Xt({},e[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const o=e[r]||{},a=t[r];n[r]={},a&&Object.keys(a)?o&&Object.keys(o)?(n[r]=Xt({},a),Object.keys(o).forEach((e=>{n[r][e]=ni(o[e],a[e])}))):n[r]=a:n[r]=o}else void 0===n[r]&&(n[r]=e[r])})),n}function ri(e){const{theme:t,name:n,props:r}=e;return t&&t.components&&t.components[n]&&t.components[n].defaultProps?ni(t.components[n].defaultProps,r):r}var oi=function(e=null){const t=r.useContext(Kr);return t&&(n=t,0!==Object.keys(n).length)?t:e;var n};const ai=oa();var ii=function(e=ai){return oi(e)};function si({props:e,name:t}){return function({props:e,name:t,defaultTheme:n,themeId:r}){let o=ii(n);return r&&(o=o[r]||o),ri({theme:o,name:t,props:e})}({props:e,name:t,defaultTheme:Ja,themeId:Qa})}var li=n(4578),ci=!1,ui=r.createContext(null),di="unmounted",pi="exited",fi="entering",mi="entered",hi="exiting",gi=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var o,a=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?a?(o=pi,r.appearStatus=fi):o=mi:o=t.unmountOnExit||t.mountOnEnter?di:pi,r.state={status:o},r.nextCallback=null,r}(0,li.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===di?{status:pi}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==fi&&n!==mi&&(t=fi):n!==fi&&n!==mi||(t=hi)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===fi){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:Sn.findDOMNode(this);n&&function(e){e.scrollTop}(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===pi&&this.setState({status:di})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,o=this.props.nodeRef?[r]:[Sn.findDOMNode(this),r],a=o[0],i=o[1],s=this.getTimeouts(),l=r?s.appear:s.enter;!e&&!n||ci?this.safeSetState({status:mi},(function(){t.props.onEntered(a)})):(this.props.onEnter(a,i),this.safeSetState({status:fi},(function(){t.props.onEntering(a,i),t.onTransitionEnd(l,(function(){t.safeSetState({status:mi},(function(){t.props.onEntered(a,i)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:Sn.findDOMNode(this);t&&!ci?(this.props.onExit(r),this.safeSetState({status:hi},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:pi},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:pi},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:Sn.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=o[0],i=o[1];this.props.addEndListener(a,i)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===di)return null;var t=this.props,n=t.children,o=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Vt(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.createElement(ui.Provider,{value:null},"function"==typeof n?n(e,o):r.cloneElement(r.Children.only(n),o))},t}(r.Component);function yi(){}gi.contextType=ui,gi.propTypes={},gi.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:yi,onEntering:yi,onEntered:yi,onExit:yi,onExiting:yi,onExited:yi},gi.UNMOUNTED=di,gi.EXITED=pi,gi.ENTERING=fi,gi.ENTERED=mi,gi.EXITING=hi;var vi=gi;function bi(e,t){var n,r;const{timeout:o,easing:a,style:i={}}=e;return{duration:null!=(n=i.transitionDuration)?n:"number"==typeof o?o:o[t.mode]||0,easing:null!=(r=i.transitionTimingFunction)?r:"object"==typeof a?a[t.mode]:a,delay:i.transitionDelay}}var xi=en;const wi=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],ki={entering:{opacity:1},entered:{opacity:1}},Ei=r.forwardRef((function(e,t){const n=function(){const e=ii(Ja);return e[Qa]||e}(),o={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:a,appear:i=!0,children:s,easing:l,in:c,onEnter:u,onEntered:d,onEntering:p,onExit:f,onExited:m,onExiting:h,style:g,timeout:y=o,TransitionComponent:v=vi}=e,b=Vt(e,wi),x=r.useRef(null),w=xi(x,s.ref,t),k=e=>t=>{if(e){const n=x.current;void 0===t?e(n):e(n,t)}},E=k(p),S=k(((e,t)=>{(e=>{e.scrollTop})(e);const r=bi({style:g,timeout:y,easing:l},{mode:"enter"});e.style.webkitTransition=n.transitions.create("opacity",r),e.style.transition=n.transitions.create("opacity",r),u&&u(e,t)})),C=k(d),A=k(h),P=k((e=>{const t=bi({style:g,timeout:y,easing:l},{mode:"exit"});e.style.webkitTransition=n.transitions.create("opacity",t),e.style.transition=n.transitions.create("opacity",t),f&&f(e)})),O=k(m);return(0,bn.jsx)(v,Xt({appear:i,in:c,nodeRef:x,onEnter:S,onEntered:C,onEntering:E,onExit:P,onExited:O,onExiting:A,addEndListener:e=>{a&&a(x.current,e)},timeout:y},b,{children:(e,t)=>r.cloneElement(s,Xt({style:Xt({opacity:0,visibility:"exited"!==e||c?void 0:"hidden"},ki[e],g,s.props.style),ref:w},t))}))}));var Si=Ei;const Ci=e=>e;var Ai=(()=>{let e=Ci;return{configure(t){e=t},generate(t){return e(t)},reset(){e=Ci}}})();const Pi={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function Oi(e,t,n="Mui"){const r=Pi[t];return r?`${n}-${r}`:`${Ai.generate(e)}-${t}`}function Ti(e,t,n="Mui"){const r={};return t.forEach((t=>{r[t]=Oi(e,t,n)})),r}function Ri(e){return Oi("MuiBackdrop",e)}Ti("MuiBackdrop",["root","invisible"]);const $i=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],Ni=ti("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})((({ownerState:e})=>Xt({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})));var Ii=r.forwardRef((function(e,t){var n,r,o;const a=si({props:e,name:"MuiBackdrop"}),{children:i,className:s,component:l="div",components:c={},componentsProps:u={},invisible:d=!1,open:p,slotProps:f={},slots:m={},TransitionComponent:h=Si,transitionDuration:g}=a,y=Vt(a,$i),v=Xt({},a,{component:l,invisible:d}),b=(e=>{const{classes:t,invisible:n}=e;return vn({root:["root",n&&"invisible"]},Ri,t)})(v),x=null!=(n=f.root)?n:u.root;return(0,bn.jsx)(h,Xt({in:p,timeout:g},y,{children:(0,bn.jsx)(Ni,Xt({"aria-hidden":!0},x,{as:null!=(r=null!=(o=m.root)?o:c.Root)?r:l,className:Jt(b.root,s,null==x?void 0:x.className),ownerState:Xt({},v,null==x?void 0:x.ownerState),classes:b,ref:t,children:i}))}))}));function ji(e){return Oi("MuiModal",e)}Ti("MuiModal",["root","hidden","backdrop"]);const _i=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],zi=ti("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})((({theme:e,ownerState:t})=>Xt({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"}))),Li=ti(Ii,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),Mi=r.forwardRef((function(e,t){var n,o,a,i,s,l;const c=si({name:"MuiModal",props:e}),{BackdropComponent:u=Li,BackdropProps:d,className:p,closeAfterTransition:f=!1,children:m,container:h,component:g,components:y={},componentsProps:v={},disableAutoFocus:b=!1,disableEnforceFocus:x=!1,disableEscapeKeyDown:w=!1,disablePortal:k=!1,disableRestoreFocus:E=!1,disableScrollLock:S=!1,hideBackdrop:C=!1,keepMounted:A=!1,onBackdropClick:P,open:O,slotProps:T,slots:R}=c,$=Vt(c,_i),N=Xt({},c,{closeAfterTransition:f,disableAutoFocus:b,disableEnforceFocus:x,disableEscapeKeyDown:w,disablePortal:k,disableRestoreFocus:E,disableScrollLock:S,hideBackdrop:C,keepMounted:A}),{getRootProps:I,getBackdropProps:j,getTransitionProps:_,portalRef:z,isTopModal:L,exited:M,hasTransition:B}=yn(Xt({},N,{rootRef:t})),D=Xt({},N,{exited:M}),F=(e=>{const{open:t,exited:n,classes:r}=e;return vn({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},ji,r)})(D),W={};if(void 0===m.props.tabIndex&&(W.tabIndex="-1"),B){const{onEnter:e,onExited:t}=_();W.onEnter=e,W.onExited=t}const K=null!=(n=null!=(o=null==R?void 0:R.root)?o:y.Root)?n:zi,G=null!=(a=null!=(i=null==R?void 0:R.backdrop)?i:y.Backdrop)?a:u,H=null!=(s=null==T?void 0:T.root)?s:v.root,q=null!=(l=null==T?void 0:T.backdrop)?l:v.backdrop,U=on({elementType:K,externalSlotProps:H,externalForwardedProps:$,getSlotProps:I,additionalProps:{ref:t,as:g},ownerState:D,className:Jt(p,null==H?void 0:H.className,null==F?void 0:F.root,!D.open&&D.exited&&(null==F?void 0:F.hidden))}),Y=on({elementType:G,externalSlotProps:q,additionalProps:d,getSlotProps:e=>j(Xt({},e,{onClick:t=>{P&&P(t),null!=e&&e.onClick&&e.onClick(t)}})),className:Jt(null==q?void 0:q.className,null==d?void 0:d.className,null==F?void 0:F.backdrop),ownerState:D});return A||O||B&&!M?(0,bn.jsx)(Cn,{ref:z,container:h,disablePortal:k,children:(0,bn.jsxs)(K,Xt({},U,{children:[!C&&u?(0,bn.jsx)(G,Xt({},Y)):null,(0,bn.jsx)(En,{disableEnforceFocus:x,disableAutoFocus:b,disableRestoreFocus:E,isEnabled:L,open:O,children:r.cloneElement(m,W)})]}))}):null}));var Bi=Mi;const Di=Yt.div`
  width: auto;
  height: auto;
`;var Fi=e=>{let{children:t,open:n,onClose:o}=e;return r.createElement(Bi,{open:n,onClose:o},r.createElement(Di,null,t))};const Wi=512,Ki=768,Gi=938,Hi=1024,qi=1200,Ui=1400;const Yi=Yt.button`
  width: min-content;
  height: auto;
  border-radius: 1.2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: var(--black);
  box-shadow: rgba(13, 152, 212, 0.1) 2px 6px 12px;
  padding: 0.5rem 1rem;
  border: none;

  p {
    font-size: 1rem;
    font-family: 'roboto', sans-serif;
    font-weight: 400;
    font-style: normal;
    color: var(--white);
    text-align: center;
  }

  &:hover {
    background-color: var(--gosolr-yellow-secondary);
    transform: scale(1.02);
  }

  &:active {
    transform: scale(1);
  }

  @media (max-width: ${Wi}px) {
    border-radius: 1.15rem;

    p {
      font-size: 0.85rem;
    }
  }
`;var Vi=e=>{let{title:t,handleClick:n,isDisabled:o}=e;return r.createElement(Yi,{onClick:n,"data-testid":"primaryButton",disabled:o},r.createElement("p",null,t))},Xi=n(8032),Zi=function(e){return e.CART="CART",e.INFO="INFO",e}(Zi||{});const Ji=()=>r.createElement(Qi,null,r.createElement(Xi.S,{className:"logo-image",src:"../../images/gosolr-logo-new.svg",alt:"Go Solr logo",objectFit:"contain",objectPosition:"center",__imageData:n(5699)})),Qi=Yt.div`
  width: 3.45rem;
  height: 100%;
  background-color: var(--black);
  border-radius: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .logo-image {
    width: fit-content;
    height: 3.45rem;
  }

  @media (max-width: ${Gi}px) {
    .logo-image {
      height: 3.25rem;
    }
  }

  @media (max-width: ${Wi}px) {
    .logo-image {
      height: 2.25rem;
    }
  }
`,es=Yt.header`
  width: 100%;

  h1 {
    font-size: 1.35rem;
    font-family: 'roboto', sans-serif;
    font-weight: 400;
    font-style: normal;
    text-transform: uppercase;
    color: var(--white);
  }

  .header-container {
    height: 5rem;
    background-color: var(--black);
    border-radius: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    align-self: center;
    padding: 0rem 2rem;
  }

  .right-corner {
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }

  @media (max-width: ${Gi}px) {
    height: 4.5rem;
  }

  @media (max-width: ${Gi}px) {
    h1 {
      font-size: 1.25rem;
      word-wrap: break-word;
      text-align: center;
    }
  }

  @media (max-width: ${Wi}px) {
    h1 {
      font-size: 1.2rem;
    }
  }
`,ts=Yt.div`
  width: auto;
  height: auto;
  position: absolute;
  right: 3rem;
  top: 8rem;
  background-color: white;
  z-index: 20;
  border-radius: 18px;
`,ns=Yt.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-right: 5rem;
  row-gap: 0.5rem;

  p {
    font-family: 'roboto', sans-serif;
    font-weight: 400;
    font-style: normal;
    text-transform: capitalize;
  }

  .name {
    color: var(--black);
    font-size: 1.3rem;
  }

  .title {
    color: var(--black);
    font-size: 1.175rem;
  }

  .candidate {
    color: var(--gosolr-yellow-primary);
    font-size: 1rem;
  }
`,rs=Yt.div`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  border: 1px solid var(--gosolr-yellow--dark-primary);
  cursor: pointer;

  .candidate {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  &:hover {
    transform: scale(1.04);
  }

  &:active {
    transform: scale(1);
  }

  @media (max-width: ${Wi}px) {
    width: 2.45rem;
    height: 2.45rem;
  }
`;var os=e=>{let{onHomeScreen:t}=e;const{0:n,1:o}=(0,r.useState)(!1),{0:a,1:i}=(0,r.useState)(),s=e=>{o(!n),e&&i(e)};return r.createElement(es,null,r.createElement(Fi,{"data-testid":"candidateInfoModal",open:n,onClose:s},r.createElement(ts,null,a===Zi.INFO&&r.createElement(ns,null,r.createElement("p",{className:"name"},"Yenzokuhle Mdladla"),r.createElement("p",{className:"title"},"Developer"),r.createElement("p",{className:"candidate"},"Candidate")))),r.createElement("div",{className:"header-container"},r.createElement(Ji,null),r.createElement("h1",null,"Energy Calculator"),r.createElement("div",{className:"right-corner"},r.createElement(rs,{"data-testid":"pictureButton",onClick:()=>s(Zi.INFO)},r.createElement(Xi.S,{className:"candidate",src:"../../images/candidate.jpeg",alt:"Candidate image",objectPosition:"center",__error:'No data found for image "../../images/candidate.jpeg"\n              undefinedCould not read image data file "/home/runner/work/go-solr-client/go-solr-client/.cache/caches/gatsby-plugin-image/2450544761.json". \nThis may mean that the images in "/home/runner/work/go-solr-client/go-solr-client/src/components/Header/index.tsx" were not processed.\nPlease ensure that your gatsby version is at least 2.24.78.'})))))};let as=function(e){return e.BACKED="Backed up",e.NOTBACKED="Not backed up",e}({});const is=Yt.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  &.action-text {
    width: 100%;
    height: auto;
  }

  .light {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.3rem;
    font-family: 'roboto', sans-serif;
    font-weight: 400;
    font-style: normal;
    color: var(--black);
  }

  .mid {
    font-size: 1.7rem;
    font-family: 'roboto', sans-serif;
    font-weight: 500;
    font-style: normal;
    color: var(--gosolr-yellow-primary);
    padding-left: 0.5rem;

    span {
      color: var(--black);
    }
  }

  @media (max-width: ${Gi}px) {
    //align-items: center;
  }

  @media (max-width: ${Ki}px) {
    .light {
      font-size: 1rem;
    }

    .mid {
      font-size: 1.25rem;
    }
  }
`,ss=Yt.div`
  max-width: 37.5rem;
  height: auto;
  margin-top: 2rem;
  margin-bottom: 2.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
`,ls=Yt.div`
  width: 100%;
  height: 100%;
  //background-color: dodgerblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.5rem;
  cursor: pointer;

  .icon-box {
    width: 4rem;
    height: 4rem;
    background-color: #f7f6f6;
    border-radius: 50%;
  }

  p {
    font-size: 1rem;
    font-family: 'roboto', sans-serif;
    font-weight: 400;
    font-style: normal;
    color: var(--black);
  }

  &:hover {
    .icon-box {
      background-color: var(--gosolr-yellow-primary);
    }

    p {
      color: var(--gosolr-yellow-primary);
      font-weight: 500;
    }
  }

  &:active {
    transform: scale(1.1);
  }
`;var cs=e=>{let{activeItem:t,handleContinue:n}=e;return r.createElement(is,null,r.createElement("div",{className:"action-text"},r.createElement("div",{className:"light"},"Tell us about your",r.createElement("p",{className:"mid"},"home ",r.createElement("span",null,"electricity usage")))),r.createElement(ss,null,ds.map(((e,t)=>r.createElement(ls,{key:`energy-item-${t+1}`},r.createElement("div",{className:"icon-box"}),r.createElement("p",null,e.value))))),r.createElement(Vi,{title:"Continue",isDisabled:!1,handleClick:()=>n(2)}))};const us=[{name:"usage",value:"Usage"},{name:"top-up",value:"Top up"},{name:"results",value:"Results"}];const ds=[{name:"lights",value:"Lights",status:as.BACKED},{name:"tv",value:"TV",status:as.BACKED},{name:"internet",value:"Internet",status:as.NOTBACKED},{name:"fridge",value:"Fridge*",status:as.BACKED},{name:"alarm",value:"Alarm",status:as.BACKED},{name:"geyser",value:"Geyser",status:as.BACKED},{name:"stove",value:"Stove",status:as.BACKED},{name:"aircon",value:"Aircon",status:as.BACKED},{name:"poolPump",value:"Pool pump",status:as.NOTBACKED},{name:"ten",value:"Ten",status:as.NOTBACKED}],ps=e=>{let{title:t,isActive:n,idx:o}=e;return r.createElement(fs,{className:n?"is-active":"","data-testid":n&&`sidebarStage-${o}`},r.createElement("p",null,t))},fs=Yt.div`
  width: 100%;
  height: auto;
  background-color: var(--light-gray);
  border-radius: 2.5rem;
  padding: 0.6rem 0.9rem;

  p {
    font-size: 1.1rem;
    font-family: 'roboto', sans-serif;
    font-weight: 400;
    font-style: normal;
    text-transform: capitalize;
    color: var(--black);
    text-align: center;
  }

  &.is-active {
    background-color: var(--gosolr-yellow-secondary);

    p {
      font-size: 1.15rem;
      color: var(--white);
      font-weight: 500;
    }
  }

  @media (max-width: ${Hi}px) {
    padding: 0.5rem 0.85rem;

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: ${Gi}px) {
    width: auto;
    padding: 0.5rem 1.25rem;

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: ${Wi}px) {
    padding: 0.5rem 1rem;

    &.is-active {
      background-color: var(--gosolr-yellow-secondary);

      p {
        font-size: 1rem;
        font-weight: 500;
      }
    }

    p {
      width: max-content;
      font-size: 1rem;
    }
  }
`,ms=Yt.div`
  width: 100%;
  //height: 100%;

  .category-list {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    padding: 0rem 2.5rem;
  }

  @media (max-width: ${Hi}px) {
    .category-list {
      padding: 0rem 1.5rem;
    }
  }

  @media (max-width: ${Gi}px) {
    height: auto;

    .category-list {
      min-width: 100%;
      flex-direction: row;
      column-gap: 1rem;
      margin-top: 0rem;
      padding: 0rem;
      overflow-x: auto;
      justify-content: flex-end;
    }
  }
`;var hs=e=>{let{stage:t}=e;return r.createElement(ms,{"data-testid":"sideBar"},r.createElement("div",{className:"category-list"},us.map(((e,n)=>r.createElement(ps,{key:`pill-item-${n+1}`,title:e.value,isActive:t>=n+1,idx:n+1})))))};const gs=e=>{let{handleBackClick:t}=e;return r.createElement(ys,{onClick:t},r.createElement(Xi.S,{className:"arrow-left",src:"../images/icons/left-md.svg",alt:"left arrow icon back button",objectPosition:"center",__imageData:n(7905)}),r.createElement("p",null,"back"))},ys=Yt.div`
  width: min-content;
  height: min-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  cursor: pointer;
  margin: 0.4rem;
  margin-left: 2rem;

  p {
    font-size: 1rem;
    font-family: 'roboto', sans-serif;
    font-weight: 400;
    font-style: normal;
    text-transform: capitalize;
    color: var(--black);
  }

  .arrow-left {
    width: 24px;
    height: 24px;
    margin-right: 0.35rem;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &:hover {
    background-color: var(--gosolr-yellow-secondary);

    p {
      font-weight: 500;
    }
  }

  &:active {
    transform: scale(1);
  }

  @media (max-width: ${Gi}px) {
    margin-left: 0;
    margin: 0;
  }

  @media (max-width: ${Ki}px) {
    padding: 0.35rem 1rem;
  }
`,vs=Yt.div`
  width: 100%;
  height: 100%;
  background-color: var(--background-color);
  display: flex;
  flex-direction: column;
  padding: 2rem 7rem;
  row-gap: 2rem;

  @media (max-width: ${Hi}px) {
    padding: 2rem;
  }

  @media (max-width: ${Gi}px) {
    padding: 2rem;
  }

  @media (max-width: ${Wi}px) {
    padding: 0rem;
  }
`,bs=Yt.nav`
  width: 100%;
  height: auto;

  @media (max-width: ${Wi}px) {
    padding: 1rem;
    padding-bottom: 0rem;
  }
`,xs=Yt.div`
  width: 100%;
  height: 100%;
  display: flex;
  column-gap: 2rem;
  padding: 0rem 8rem;

  .sidebar {
    width: 18rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .content {
    flex: 1;
    height: auto;

    .info-sort-container {
      width: 100%;
      height: 3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  @media (max-width: ${Ui}px) {
    padding: 0rem 2rem;
  }

  @media (max-width: ${qi}px) {
    padding: 0rem;
  }

  @media (max-width: ${Hi}px) {
    .sidebar {
      width: 16rem;
      height: auto;
    }
  }

  @media (max-width: ${Gi}px) {
    flex-direction: column;

    .sidebar {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: row-reverse;
      margin-bottom: 2rem;
    }
  }

  @media (max-width: ${Wi}px) {
    .sidebar {
      padding: 1rem 0rem;
      padding-top: 0rem;
    }

    .content {
      padding: 0rem 1rem;

      .info-sort-container {
        height: 2.5rem;
      }
    }
  }
`,ws=Yt.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;Yt.div`
  width: 100%;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.25rem;
    font-family: RobotoRegular;
    text-transform: capitalize;
    color: red;
  }
`;var ks=e=>{let{category:t}=e;const{0:n,1:o}=(0,r.useState)(1),a=e=>{o(e)};return r.createElement(vs,null,r.createElement(bs,null,r.createElement(os,{onHomeScreen:!0})),r.createElement(xs,null,r.createElement("div",{className:"sidebar"},r.createElement(hs,{stage:n}),n>1&&r.createElement(gs,{handleBackClick:()=>a(n-1)})),r.createElement("div",{className:"content"},1===n&&r.createElement(ws,null,r.createElement(cs,{handleContinue:a})),2===n&&r.createElement(ws,null,r.createElement(Os,{handleContinue:a})," "),3===n&&r.createElement(ws,null,r.createElement(js,{amountSpent:5e3})))))};const Es=e=>{let{title:t,isActive:n,handleClick:o}=e;return r.createElement(Ss,{"data-testid":"borderButton",className:n?"is-active":"",onClick:o},r.createElement("p",null,t))},Ss=Yt.div`
  width: auto;
  height: min-content;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.35rem 1rem;
  border: 1.5px solid #929292;
  cursor: pointer;
  //box-shadow: rgba(249, 219, 97, 0.1) 2px 3px 6px;

  p {
    font-size: 1.1rem;
    font-family: 'roboto', sans-serif;
    font-weight: 400;
    font-style: normal;
    text-transform: capitalize;
    color: var(--black);
    text-align: center;
  }

  &.is-active {
    transform: scale(1.1);
    border: 1.5px solid var(--gosolr-yellow-secondary);

    p {
      font-size: 1.15rem;
      color: var(--white);
      font-weight: 500;
    }
  }

  &:hover {
    transform: scale(1.1);
    border: 1.5px solid var(--gosolr-yellow-secondary);

    p {
      color: var(--gosolr-yellow-secondary);
    }
  }

  &:active {
    transform: scale(1.02);
  }

  @media (max-width: ${Hi}px) {
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: ${Wi}px) {
    p {
      width: max-content;
      font-size: 1rem;
    }
  }
`,Cs=Yt.main`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;

  .top-up-info {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    padding-bottom: 2rem;
    border-bottom: 1px solid #ededed;
    align-items: center;

    .info-text {
      display: flex;
      flex-direction: column;
    }

    .light {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 1.2rem;
      font-family: 'roboto', sans-serif;
      font-weight: 400;
      font-style: normal;
      color: var(--black);
    }

    .mid {
      font-size: 1.5rem;
      font-family: 'roboto', sans-serif;
      font-weight: 500;
      font-style: normal;
      color: var(--gosolr-yellow-primary);

      span {
        color: var(--black);
      }
    }

    .top-up-actions {
      width: auto;
      height: 100%;
      display: flex;
      column-gap: 2rem;
    }
  }

  .top-up-items {
    width: 100%;
    flex: 1;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .top-up-totals {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: ${Ki}px) {
    .top-up-info {
      .light {
        font-size: 1rem;
      }

      .mid {
        font-size: 1.25rem;
      }

      .top-up-actions {
        column-gap: 1rem;
      }
    }
  }

  @media (max-width: ${Wi}px) {
    .top-up-info {
      .top-up-actions {
        column-gap: 0.5rem;
      }
    }
  }
`,As=Yt.p`
  font-size: 1.5rem;
  font-family: 'roboto', sans-serif;
  font-weight: 500;
  font-style: normal;
  color: var(--black);

  span {
    font-size: 1.2rem;
    font-weight: 400;
  }
`,Ps=Yt.div`
  width: 100%;
  height: 12rem;
  display: flex;
  justify-content: center;
  padding-top: 1.5rem;

  .logo-image {
    width: auto;
    height: 100%;
  }
`;var Os=e=>{let{handleContinue:t}=e;return r.createElement(Cs,null,r.createElement("div",{className:"top-up-info"},r.createElement("div",{className:"info-text"},r.createElement("p",{className:"light"},"How many electricity "),r.createElement("p",{className:"mid"},"top ups ",r.createElement("span",null,"per month?"))),r.createElement("div",{className:"top-up-actions"},r.createElement(Es,{title:"Prepaid",isActive:!1,handleClick:()=>console.log("BorderButton --\x3e clicked ...")}),r.createElement(Es,{title:"Postpaid",isActive:!1,handleClick:()=>console.log("BorderButton --\x3e clicked ...")}))),r.createElement("div",{className:"top-up-items"},r.createElement(Ps,null,r.createElement(Xi.S,{className:"logo-image",src:"../../images/newsletter-illustration.svg",alt:"Go Solr logo",objectFit:"contain",objectPosition:"center",__imageData:n(457)}))),r.createElement("div",{className:"top-up-totals"},r.createElement(As,null,r.createElement("span",null,"Total PM: ")," R0"),r.createElement(Vi,{title:"Calculate",handleClick:()=>t(3),isDisabled:!1})))};const Ts=Yt.div`
  min-width: 30rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 2rem;

  .horizontal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
  }

  .vertical {
    margin-bottom: 1rem;
  }

  .badge {
    width: 100%;
    height: auto;
    padding-bottom: 0.5rem;
    display: flex;
    justify-content: flex-end;
    border-left: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
  }

  @media (max-width: ${Wi}px) {
    margin-left: 0rem;
    min-width: 100%;
  }
`,Rs=Yt.div`
  width: 100%;
  flex: 1;
  border-top: 1px solid #dbdbdb;
  border-left: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  display: flex;
  flex-direction: column;
  font-family: 'roboto', sans-serif;
  font-style: normal;
  color: var(--black);
  padding-top: 2rem;

  .dual-style-text {
    font-weight: 400;
    font-size: 1rem;

    span {
      font-size: 1.3rem;
      font-weight: 500;
    }
  }

  .old-price {
    font-weight: 700;
    font-size: 1.4rem;
  }

  .average-price {
    font-weight: 200;
    font-size: 1.1rem;
  }
`,$s=Yt.div`
  width: 100%;
  height: auto;

  .solution {
    height: 3rem;
    background-color: var(--gosolr-yellow-primary);
  }

  .pricing {
    height: 3rem;
    background-color: var(--gosolr-yellow--dark-primary);
    border-bottom-left-radius: 28px;
    border-bottom-right-radius: 28px;
  }

  p {
    font-family: 'roboto', sans-serif;
    font-style: normal;
  }

  .recommend-solution {
    font-size: 1rem;
    font-weight: 500;
    color: var(--black);
  }

  .recommend-price {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--white);
  }
`,Ns=Yt.div`
  width: auto;
  height: auto;
  background-color: var(--black);
  font-size: 12px;
  font-family: 'roboto', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: var(--gosolr-yellow-secondary);
  padding: 0.4rem 2rem;
  right: 0;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
`,Is=Yt.div`
  width: 100%;
  height: auto;
  padding: 0rem 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  span {
    font-size: 14px;
    font-family: 'roboto', sans-serif;
    font-style: normal;
    font-weight: 200;
    color: var(--black);
  }

  .line {
    flex: 1;
    height: 1px;
    background-color: #f1f1f1;
    margin-left: 1rem;
  }
`;var js=e=>{let{amountSpent:t}=e;return r.createElement(Ts,null,r.createElement(Rs,null,r.createElement("div",{className:"horizontal vertical"},r.createElement("p",{className:"dual-style-text"},"Cost ",r.createElement("span",null,"without GoSolr")),r.createElement("p",{className:"old-price","data-testid":"inputPrice"},"R 5000")),r.createElement(Is,null,r.createElement("span",null,"Average estimations"),r.createElement("div",{className:"line"})),r.createElement("div",{className:"horizontal vertical"},r.createElement("p",{className:"dual-style-text"},"Savings ",r.createElement("span",null,"with GoSolr")),r.createElement("p",{className:"average-price","data-testid":"recommAveragePrice"},"R 3671")),r.createElement("div",{className:"horizontal vertical"},r.createElement("p",{className:"dual-style-text"},"Total ",r.createElement("span",null,"without GoSolr")),r.createElement("p",{className:"average-price","data-testid":"recommTotalWitoutPrice"},"R 5729")),r.createElement("div",{className:"horizontal vertical"},r.createElement("p",{className:"dual-style-text"},"Difference"),r.createElement("p",{className:"average-price","data-testid":"recommDifferencePrice"},"R 729"))),r.createElement($s,null,r.createElement("div",{className:"badge"},r.createElement(Ns,null,"Recommended")),r.createElement("div",{className:"horizontal solution"},r.createElement("p",{className:"recommend-solution"},"Solution"),r.createElement("p",{className:"recommend-price"},"Extra Large")),r.createElement("div",{className:"horizontal pricing"},r.createElement("p",{className:"recommend-solution"},"Price"),r.createElement("p",{className:"recommend-price"},"R 4400"))))};const _s=()=>r.createElement(zs,null,r.createElement(ks,null)),zs=Yt.div`
  width: 100%;
  height: 100vh;
  background-color: black;

  @media (max-width: ${768}px) {
    height: auto;
  }
`;var Ls=_s;const Ms=()=>r.createElement("title",null,"Go Solr - Technical")},6774:function(e){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var c=a[l];if(!s(c))return!1;var u=e[c],d=t[c];if(!1===(o=n?n.call(r,u,d,c):void 0)||void 0===o&&u!==d)return!1}return!0}},434:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},7905:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/e33647ce0d46408074b132d075b6113f/e4605/left-md.svg","srcSet":"/static/e33647ce0d46408074b132d075b6113f/99c53/left-md.svg 6w,\\n/static/e33647ce0d46408074b132d075b6113f/3dc2d/left-md.svg 12w,\\n/static/e33647ce0d46408074b132d075b6113f/e4605/left-md.svg 24w","sizes":"(min-width: 24px) 24px, 100vw"},"sources":[{"srcSet":"/static/e33647ce0d46408074b132d075b6113f/eee53/left-md.webp 6w,\\n/static/e33647ce0d46408074b132d075b6113f/30aa9/left-md.webp 12w,\\n/static/e33647ce0d46408074b132d075b6113f/4e704/left-md.webp 24w","type":"image/webp","sizes":"(min-width: 24px) 24px, 100vw"}]},"width":24,"height":24}')},457:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/2302108e79c62f60ad7be126f17cc6fb/0366d/newsletter-illustration.svg","srcSet":"/static/2302108e79c62f60ad7be126f17cc6fb/708a7/newsletter-illustration.svg 40w,\\n/static/2302108e79c62f60ad7be126f17cc6fb/8f2b7/newsletter-illustration.svg 80w,\\n/static/2302108e79c62f60ad7be126f17cc6fb/0366d/newsletter-illustration.svg 159w","sizes":"(min-width: 159px) 159px, 100vw"},"sources":[{"srcSet":"/static/2302108e79c62f60ad7be126f17cc6fb/61d80/newsletter-illustration.webp 40w,\\n/static/2302108e79c62f60ad7be126f17cc6fb/2d043/newsletter-illustration.webp 80w,\\n/static/2302108e79c62f60ad7be126f17cc6fb/ce12e/newsletter-illustration.webp 159w","type":"image/webp","sizes":"(min-width: 159px) 159px, 100vw"}]},"width":159,"height":245}')},5699:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8d808","images":{"fallback":{"src":"/static/7e790e265e1d0115f9c21144aac39ecc/f8a8b/gosolr-logo-new.svg","srcSet":"/static/7e790e265e1d0115f9c21144aac39ecc/06b6e/gosolr-logo-new.svg 98w,\\n/static/7e790e265e1d0115f9c21144aac39ecc/bb6b5/gosolr-logo-new.svg 197w,\\n/static/7e790e265e1d0115f9c21144aac39ecc/f8a8b/gosolr-logo-new.svg 393w","sizes":"(min-width: 393px) 393px, 100vw"},"sources":[{"srcSet":"/static/7e790e265e1d0115f9c21144aac39ecc/f1ce5/gosolr-logo-new.webp 98w,\\n/static/7e790e265e1d0115f9c21144aac39ecc/acead/gosolr-logo-new.webp 197w,\\n/static/7e790e265e1d0115f9c21144aac39ecc/d987c/gosolr-logo-new.webp 393w","type":"image/webp","sizes":"(min-width: 393px) 393px, 100vw"}]},"width":393,"height":393}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-00a4c4b765ef629a1a02.js.map