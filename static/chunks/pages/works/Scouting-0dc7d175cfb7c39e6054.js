(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[467],{6884:function(e,r,t){"use strict";t.d(r,{X:function(){return n}});var n=(0,t(9867).I)({d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",displayName:"ChevronRightIcon"})},8482:function(e,r,t){"use strict";t.d(r,{E:function(){return f}});var n=t(63),i=t(3852),a=t(5505),l=t(3808),s=t(7294),c=t(6732);function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function u(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}var d=s.forwardRef(((e,r)=>{var{htmlWidth:t,htmlHeight:n,alt:i}=e,a=u(e,["htmlWidth","htmlHeight","alt"]);return s.createElement("img",o({width:t,height:n,ref:r,alt:i},a))})),f=(0,n.G)(((e,r)=>{var{fallbackSrc:t,fallback:n,src:l,srcSet:f,align:h,fit:m,loading:x,ignoreFallback:p,crossOrigin:g}=e,v=u(e,["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"]),y=null!=x||p||void 0===t&&void 0===n,j=function(e){var{loading:r,src:t,srcSet:n,onLoad:i,onError:a,crossOrigin:l,sizes:o,ignoreFallback:u}=e,[d,f]=(0,s.useState)("pending");(0,s.useEffect)((()=>{f(t?"loading":"pending")}),[t]);var h=(0,s.useRef)(),m=(0,s.useCallback)((()=>{if(t){x();var e=new Image;e.src=t,l&&(e.crossOrigin=l),n&&(e.srcset=n),o&&(e.sizes=o),r&&(e.loading=r),e.onload=e=>{x(),f("loaded"),null==i||i(e)},e.onerror=e=>{x(),f("failed"),null==a||a(e)},h.current=e}}),[t,l,n,o,i,a,r]),x=()=>{h.current&&(h.current.onload=null,h.current.onerror=null,h.current=null)};return(0,c.G)((()=>{if(!u)return"loading"===d&&m(),()=>{x()}}),[d,m,u]),u?"loaded":d}(o({},e,{ignoreFallback:y})),b=o({ref:r,objectFit:m,objectPosition:h},y?v:(0,a.CE)(v,["onError","onLoad"]));return"loaded"!==j?n||s.createElement(i.m$.img,o({as:d,className:"chakra-image__placeholder",src:t},b)):s.createElement(i.m$.img,o({as:d,src:l,srcSet:f,crossOrigin:g,loading:x,className:"chakra-image"},b))}));l.Ts&&(f.displayName="Image")},8125:function(e,r,t){"use strict";t.d(r,{C:function(){return d}});var n=t(63),i=t(2326),a=t(5284),l=t(3852),s=t(4461),c=t(3808),o=t(7294);function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var d=(0,n.G)(((e,r)=>{var t=(0,i.m)("Badge",e),n=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}((0,a.Lr)(e),["className"]);return o.createElement(l.m$.span,u({ref:r,className:(0,s.cx)("chakra-badge",e.className)},n,{__css:u({display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle"},t)}))}));c.Ts&&(d.displayName="Badge")},3762:function(e,r,t){"use strict";t.d(r,{aV:function(){return m},QI:function(){return p},HC:function(){return g}});var n=t(58),i=t(63),a=t(2326),l=t(5284),s=t(9676),c=t(3852),o=t(3808),u=t(4255),d=t(7294);function f(){return(f=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function h(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}var m=(0,i.G)(((e,r)=>{var t=(0,a.j)("List",e),n=(0,l.Lr)(e),{children:i,styleType:o="none",stylePosition:m,spacing:x}=n,p=h(n,["children","styleType","stylePosition","spacing"]),g=(0,u.W)(i),v=x?{"& > *:not(style) ~ *:not(style)":{mt:x}}:{};return d.createElement(s.Fo,{value:t},d.createElement(c.m$.ul,f({ref:r,listStyleType:o,listStylePosition:m,role:"list",__css:f({},t.container,v)},p),g))}));o.Ts&&(m.displayName="List");var x=(0,i.G)(((e,r)=>{var t=h(e,["as"]);return d.createElement(m,f({ref:r,as:"ol",styleType:"decimal",marginStart:"1em"},t))}));o.Ts&&(x.displayName="OrderedList");var p=(0,i.G)(((e,r)=>{var t=h(e,["as"]);return d.createElement(m,f({ref:r,as:"ul",styleType:"initial",marginStart:"1em"},t))}));o.Ts&&(p.displayName="UnorderedList");var g=(0,i.G)(((e,r)=>{var t=(0,s.yK)();return d.createElement(c.m$.li,f({ref:r},e,{__css:t.item}))}));o.Ts&&(g.displayName="ListItem");var v=(0,i.G)(((e,r)=>{var t=(0,s.yK)();return d.createElement(n.J,f({ref:r,role:"presentation"},e,{__css:t.icon}))}));o.Ts&&(v.displayName="ListIcon")},1667:function(e,r,t){"use strict";t.d(r,{P4:function(){return g},Pg:function(){return y},Et:function(){return v}});var n=t(1664),i=t(5675),a=t(63),l=t(3852),s=t(4461),c=t(7294);function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function u(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}var d=(0,a.G)(((e,r)=>{var{isExternal:t,target:n,rel:i,className:a}=e,d=u(e,["isExternal","target","rel","className"]);return c.createElement(l.m$.a,o({},d,{ref:r,className:(0,s.cx)("chakra-linkbox__overlay",a),rel:t?"noopener noreferrer":i,target:t?"_blank":n,__css:{position:"static","&::before":{content:"''",cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%"}}}))})),f=(0,a.G)(((e,r)=>{var{className:t}=e,n=u(e,["className"]);return c.createElement(l.m$.div,o({ref:r,position:"relative"},n,{className:(0,s.cx)("chakra-linkbox",t),__css:{"a[href]:not(.chakra-linkbox__overlay), abbr[title]":{position:"relative",zIndex:1}}}))})),h=t(8017),m=t(4115),x=t(917),p=t(5893),g=function(e){var r=e.children,t=e.href,n=e.title,a=e.thumbnail;return(0,p.jsx)(h.xu,{w:"100%",textAlign:"center",children:(0,p.jsxs)(f,{cursor:"pointer",children:[(0,p.jsx)(i.default,{src:a,alt:n,className:"grid-item-thumbnail",placeholder:"blur",loading:"lazy"}),(0,p.jsx)(d,{href:t,target:"_blank",children:(0,p.jsx)(m.x,{mt:2,children:n})}),(0,p.jsx)(m.x,{fontSize:14,children:r})]})})},v=function(e){var r=e.children,t=e.id,a=e.title,l=e.thumbnail;return(0,p.jsx)(h.xu,{w:"100%",textAlign:"center",children:(0,p.jsx)(n.default,{href:"/works/".concat(t),children:(0,p.jsxs)(f,{cursor:"pointer",children:[(0,p.jsx)(i.default,{src:l,alt:a,className:"grid-item-thumbnail",placeholder:"blur"}),(0,p.jsx)(d,{href:"/works/".concat(t),children:(0,p.jsx)(m.x,{mt:2,fontSize:20,children:a})}),(0,p.jsx)(m.x,{fontSize:14,children:r})]})})})},y=function(){return(0,p.jsx)(x.xB,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 12px;\n      }\n    "})}},3062:function(e,r,t){"use strict";var n=t(1770),i=t(9008),a=t(1667),l=t(5893),s={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}};r.Z=function(e){var r=e.children,t=e.title;return(0,l.jsx)(n.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:s,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,l.jsxs)(l.Fragment,{children:[t&&(0,l.jsxs)(i.default,{children:[(0,l.jsxs)("title",{children:[t," - Remidi Kamal"]}),(0,l.jsx)("meta",{name:"twitter:title",content:t}),(0,l.jsx)("meta",{property:"og:title",content:t})]}),r,(0,l.jsx)(a.Pg,{})]})})}},6113:function(e,r,t){"use strict";var n,i=t(2209),a=t(4524).Z.p(n||(n=(0,i.Z)(["\n  text-align: justify;\n  text-indent: 1em;\n"])));r.Z=a},7921:function(e,r,t){"use strict";t.d(r,{Dx:function(){return d},WZ:function(){return f},h_:function(){return h}});var n=t(1664),i=t(8017),a=t(9444),l=t(336),s=t(8482),c=t(8125),o=t(6884),u=t(5893),d=function(e){var r=e.children;return(0,u.jsxs)(i.xu,{children:[(0,u.jsx)(n.default,{href:"/works",children:(0,u.jsx)(a.r,{children:"Works"})}),(0,u.jsxs)("span",{children:[" ",(0,u.jsx)(o.X,{})," "]}),(0,u.jsx)(l.X,{display:"inline-block",as:"h3",fontSize:20,mb:4,children:r})]})},f=function(e){var r=e.src,t=e.alt;return(0,u.jsx)(s.E,{borderRadius:"lg",w:"full",src:r,alt:t,mb:4})},h=function(e){var r=e.children;return(0,u.jsx)(c.C,{colorScheme:"green",mr:2,children:r})}},2787:function(e,r,t){"use strict";t.r(r);var n=t(3850),i=t(8125),a=t(3762),l=t(8017),s=t(3062),c=t(7921),o=t(6113),u=t(5893);r.default=function(){return(0,u.jsx)(s.Z,{title:"Scouting tool",children:(0,u.jsxs)(n.W,{children:[(0,u.jsxs)(c.Dx,{children:["Wfs scouting tool ",(0,u.jsx)(i.C,{children:"2020"})]}),(0,u.jsx)(o.Z,{children:"-Use Advanced Search to discover new talents according to performance statistics"}),(0,u.jsx)(o.Z,{children:"-Advanced statistics help you go into each and every detail of Moroccan league."}),(0,u.jsxs)(a.QI,{my:4,children:[(0,u.jsx)(a.HC,{children:"Advanced Attack Metrics"}),(0,u.jsx)(a.HC,{children:"Advanced Possession Metrics"}),(0,u.jsx)(a.HC,{children:"Advanced Defense Metrics"})]}),(0,u.jsx)(a.aV,{ml:4,my:4,children:(0,u.jsxs)(a.HC,{children:[(0,u.jsx)(c.h_,{children:"Platform"}),(0,u.jsx)("span",{children:"Tableau"})]})}),(0,u.jsx)(l.xu,{children:(0,u.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/zgZIZGjqfhM",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),(0,u.jsx)(l.xu,{align:"center",my:6})]})})}},8913:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works/Scouting",function(){return t(2787)}])}},function(e){e.O(0,[774,888,179],(function(){return r=8913,e(e.s=r);var r}));var r=e.O();_N_E=r}]);