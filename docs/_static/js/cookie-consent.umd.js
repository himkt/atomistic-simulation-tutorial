!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).cookieConsent={})}(this,(function(e){"use strict";function t(){}function s(e){return e()}function n(){return Object.create(null)}function o(e){e.forEach(s)}function c(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(e){return null==e?"":e}function l(e,t){e.appendChild(t)}function r(e,t,s){e.insertBefore(t,s||null)}function u(e){e.parentNode.removeChild(e)}function d(e){return document.createElement(e)}function p(e){return document.createTextNode(e)}function m(){return p(" ")}function h(e,t,s,n){return e.addEventListener(t,s,n),()=>e.removeEventListener(t,s,n)}function f(e,t,s){null==s?e.removeAttribute(t):e.getAttribute(t)!==s&&e.setAttribute(t,s)}function g(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let C;function N(e){C=e}function b(e){(function(){if(!C)throw new Error("Function called outside component initialization");return C})().$$.on_mount.push(e)}const v=[],$=[],x=[],B=[],T=Promise.resolve();let y=!1;function j(e){x.push(e)}const A=new Set;let k=0;function w(){const e=C;do{for(;k<v.length;){const e=v[k];k++,N(e),D(e.$$)}for(N(null),v.length=0,k=0;$.length;)$.pop()();for(let e=0;e<x.length;e+=1){const t=x[e];A.has(t)||(A.add(t),t())}x.length=0}while(v.length);for(;B.length;)B.pop()();y=!1,A.clear(),N(e)}function D(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(j)}}const S=new Set;function H(e,t){-1===e.$$.dirty[0]&&(v.push(e),y||(y=!0,T.then(w)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function R(e,a,i,l,r,d,p,m=[-1]){const h=C;N(e);const f=e.$$={fragment:null,ctx:null,props:d,update:t,not_equal:r,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a.context||(h?h.$$.context:[])),callbacks:n(),dirty:m,skip_bound:!1,root:a.target||h.$$.root};p&&p(f.root);let g=!1;if(f.ctx=i?i(e,a.props||{},((t,s,...n)=>{const o=n.length?n[0]:s;return f.ctx&&r(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),g&&H(e,t)),s})):[],f.update(),g=!0,o(f.before_update),f.fragment=!!l&&l(f.ctx),a.target){if(a.hydrate){const e=function(e){return Array.from(e.childNodes)}(a.target);f.fragment&&f.fragment.l(e),e.forEach(u)}else f.fragment&&f.fragment.c();a.intro&&((b=e.$$.fragment)&&b.i&&(S.delete(b),b.i(v))),function(e,t,n,a){const{fragment:i,on_mount:l,on_destroy:r,after_update:u}=e.$$;i&&i.m(t,n),a||j((()=>{const t=l.map(s).filter(c);r?r.push(...t):o(t),e.$$.on_mount=[]})),u.forEach(j)}(e,a.target,a.anchor,a.customElement),w()}var b,v;N(h)}
/*! js-cookie v3.0.1 | MIT */
function _(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)e[n]=s[n]}return e}var E=function e(t,s){function n(e,n,o){if("undefined"!=typeof document){"number"==typeof(o=_({},s,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var a in o)o[a]&&(c+="; "+a,!0!==o[a]&&(c+="="+o[a].split(";")[0]));return document.cookie=e+"="+t.write(n,e)+c}}return Object.create({set:n,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var s=document.cookie?document.cookie.split("; "):[],n={},o=0;o<s.length;o++){var c=s[o].split("="),a=c.slice(1).join("=");try{var i=decodeURIComponent(c[0]);if(n[i]=t.read(a,i),e===i)break}catch(e){}}return e?n[e]:n}},remove:function(e,t){n(e,"",_({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,_({},this.attributes,t))},withConverter:function(t){return e(_({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(s)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});function O(e,t,s){const n=e.slice();return n[64]=t[s],n[65]=t,n[66]=s,n}function L(e){let t,s,n,c,a,C,N,b,v,$,x,B,T,y,j,A,k,w,D,S,H,R=e[9]&&M(e),_=!e[21]&&P(e),E=!e[17]&&U(e);return{c(){t=d("div"),s=d("div"),n=d("button"),c=p("×"),C=m(),R&&R.c(),N=m(),b=d("p"),$=m(),x=d("p"),_&&_.c(),B=m(),E&&E.c(),T=m(),y=d("button"),j=p(e[19]),f(n,"type","button"),f(n,"class",a=i(e[6])+" svelte-8pd0rh"),n.disabled=e[2],f(b,"class",v=i(e[10])+" svelte-8pd0rh"),f(y,"type","button"),f(y,"class",A=i(e[18])+" svelte-8pd0rh"),y.disabled=e[2],f(x,"class",k=i(e[12])+" svelte-8pd0rh"),f(s,"class",w=i(e[5])+" svelte-8pd0rh"),f(t,"class",D=i(`${e[3]} ${e[4]}`)+" svelte-8pd0rh")},m(o,a){r(o,t,a),l(t,s),l(s,n),l(n,c),l(s,C),R&&R.m(s,null),l(s,N),l(s,b),b.innerHTML=e[11],l(s,$),l(s,x),_&&_.m(x,null),l(x,B),E&&E.m(x,null),l(x,T),l(x,y),l(y,j),S||(H=[h(n,"click",e[51]),h(y,"click",e[54])],S=!0)},p(e,o){64&o[0]&&a!==(a=i(e[6])+" svelte-8pd0rh")&&f(n,"class",a),4&o[0]&&(n.disabled=e[2]),e[9]?R?R.p(e,o):(R=M(e),R.c(),R.m(s,N)):R&&(R.d(1),R=null),2048&o[0]&&(b.innerHTML=e[11]),1024&o[0]&&v!==(v=i(e[10])+" svelte-8pd0rh")&&f(b,"class",v),e[21]?_&&(_.d(1),_=null):_?_.p(e,o):(_=P(e),_.c(),_.m(x,B)),e[17]?E&&(E.d(1),E=null):E?E.p(e,o):(E=U(e),E.c(),E.m(x,T)),524288&o[0]&&g(j,e[19]),262144&o[0]&&A!==(A=i(e[18])+" svelte-8pd0rh")&&f(y,"class",A),4&o[0]&&(y.disabled=e[2]),4096&o[0]&&k!==(k=i(e[12])+" svelte-8pd0rh")&&f(x,"class",k),32&o[0]&&w!==(w=i(e[5])+" svelte-8pd0rh")&&f(s,"class",w),24&o[0]&&D!==(D=i(`${e[3]} ${e[4]}`)+" svelte-8pd0rh")&&f(t,"class",D)},d(e){e&&u(t),R&&R.d(),_&&_.d(),E&&E.d(),S=!1,o(H)}}}function M(e){let t,s,n;return{c(){t=d("h1"),s=p(e[9]),f(t,"class",n=i(e[8])+" svelte-8pd0rh")},m(e,n){r(e,t,n),l(t,s)},p(e,o){512&o[0]&&g(s,e[9]),256&o[0]&&n!==(n=i(e[8])+" svelte-8pd0rh")&&f(t,"class",n)},d(e){e&&u(t)}}}function P(e){let t,s,n,o,c;return{c(){t=d("button"),s=p(e[14]),f(t,"type","button"),f(t,"class",n=i(e[13])+" svelte-8pd0rh"),t.disabled=e[2]},m(n,a){r(n,t,a),l(t,s),o||(c=h(t,"click",e[52]),o=!0)},p(e,o){16384&o[0]&&g(s,e[14]),8192&o[0]&&n!==(n=i(e[13])+" svelte-8pd0rh")&&f(t,"class",n),4&o[0]&&(t.disabled=e[2])},d(e){e&&u(t),o=!1,c()}}}function U(e){let t,s,n,o,c;return{c(){t=d("button"),s=p(e[16]),f(t,"type","button"),f(t,"class",n=i(e[15])+" svelte-8pd0rh"),t.disabled=e[2]},m(n,a){r(n,t,a),l(t,s),o||(c=h(t,"click",e[53]),o=!0)},p(e,o){65536&o[0]&&g(s,e[16]),32768&o[0]&&n!==(n=i(e[15])+" svelte-8pd0rh")&&f(t,"class",n),4&o[0]&&(t.disabled=e[2])},d(e){e&&u(t),o=!1,c()}}}function I(e){let t,s,n,c,a,C,N,b,v,$,x,B,T,y,j,A,k,w,D,S,H,R,_,E,L,M,P,U,I,V,G=(e[33]||e[19])+"",K=e[25]&&q(e),Q=!e[31]&&F(e),W=e[36]&&z(e),X=e[0],Y=[];for(let t=0;t<X.length;t+=1)Y[t]=J(O(e,X,t));return{c(){t=d("div"),s=d("div"),n=d("button"),c=p("×"),C=m(),K&&K.c(),N=m(),b=d("p"),$=m(),x=d("p"),Q&&Q.c(),B=m(),T=d("button"),y=p(G),k=m(),w=d("div"),W&&W.c(),D=m();for(let e=0;e<Y.length;e+=1)Y[e].c();S=m(),H=d("p"),R=d("button"),_=p(e[42]),f(n,"type","button"),f(n,"class",a=i(e[23])+" svelte-8pd0rh"),f(b,"class",v=i(e[26])+" svelte-8pd0rh"),f(T,"type","button"),f(T,"class",j=i(e[32])+" svelte-8pd0rh"),f(x,"class",A=i(e[28])+" svelte-8pd0rh"),f(R,"type","button"),f(R,"class",E=i(e[41])+" svelte-8pd0rh"),f(H,"class",L=i(e[40])+" svelte-8pd0rh"),f(w,"class",M=i(e[34])+" svelte-8pd0rh"),f(s,"class",P=i(e[22])+" svelte-8pd0rh"),f(t,"class",U=i(`${e[3]} ${e[20]}`)+" svelte-8pd0rh")},m(o,a){r(o,t,a),l(t,s),l(s,n),l(n,c),l(s,C),K&&K.m(s,null),l(s,N),l(s,b),b.innerHTML=e[27],l(s,$),l(s,x),Q&&Q.m(x,null),l(x,B),l(x,T),l(T,y),l(s,k),l(s,w),W&&W.m(w,null),l(w,D);for(let e=0;e<Y.length;e+=1)Y[e].m(w,null);l(w,S),l(w,H),l(H,R),l(R,_),I||(V=[h(n,"click",e[55]),h(T,"click",e[57]),h(R,"click",e[59])],I=!0)},p(e,o){if(8388608&o[0]&&a!==(a=i(e[23])+" svelte-8pd0rh")&&f(n,"class",a),e[25]?K?K.p(e,o):(K=q(e),K.c(),K.m(s,N)):K&&(K.d(1),K=null),134217728&o[0]&&(b.innerHTML=e[27]),67108864&o[0]&&v!==(v=i(e[26])+" svelte-8pd0rh")&&f(b,"class",v),e[31]?Q&&(Q.d(1),Q=null):Q?Q.p(e,o):(Q=F(e),Q.c(),Q.m(x,B)),524288&o[0]|4&o[1]&&G!==(G=(e[33]||e[19])+"")&&g(y,G),2&o[1]&&j!==(j=i(e[32])+" svelte-8pd0rh")&&f(T,"class",j),268435456&o[0]&&A!==(A=i(e[28])+" svelte-8pd0rh")&&f(x,"class",A),e[36]?W?W.p(e,o):(W=z(e),W.c(),W.m(w,D)):W&&(W.d(1),W=null),1&o[0]|448&o[1]){let t;for(X=e[0],t=0;t<X.length;t+=1){const s=O(e,X,t);Y[t]?Y[t].p(s,o):(Y[t]=J(s),Y[t].c(),Y[t].m(w,S))}for(;t<Y.length;t+=1)Y[t].d(1);Y.length=X.length}2048&o[1]&&g(_,e[42]),1024&o[1]&&E!==(E=i(e[41])+" svelte-8pd0rh")&&f(R,"class",E),512&o[1]&&L!==(L=i(e[40])+" svelte-8pd0rh")&&f(H,"class",L),8&o[1]&&M!==(M=i(e[34])+" svelte-8pd0rh")&&f(w,"class",M),4194304&o[0]&&P!==(P=i(e[22])+" svelte-8pd0rh")&&f(s,"class",P),1048584&o[0]&&U!==(U=i(`${e[3]} ${e[20]}`)+" svelte-8pd0rh")&&f(t,"class",U)},d(e){e&&u(t),K&&K.d(),Q&&Q.d(),W&&W.d(),function(e,t){for(let s=0;s<e.length;s+=1)e[s]&&e[s].d(t)}(Y,e),I=!1,o(V)}}}function q(e){let t,s,n;return{c(){t=d("h1"),s=p(e[25]),f(t,"class",n=i(e[24])+" svelte-8pd0rh")},m(e,n){r(e,t,n),l(t,s)},p(e,o){33554432&o[0]&&g(s,e[25]),16777216&o[0]&&n!==(n=i(e[24])+" svelte-8pd0rh")&&f(t,"class",n)},d(e){e&&u(t)}}}function F(e){let t,s,n,o,c,a=(e[30]||e[16])+"";return{c(){t=d("button"),s=p(a),f(t,"type","button"),f(t,"class",n=i(e[29])+" svelte-8pd0rh")},m(n,a){r(n,t,a),l(t,s),o||(c=h(t,"click",e[56]),o=!0)},p(e,o){1073807360&o[0]&&a!==(a=(e[30]||e[16])+"")&&g(s,a),536870912&o[0]&&n!==(n=i(e[29])+" svelte-8pd0rh")&&f(t,"class",n)},d(e){e&&u(t),o=!1,c()}}}function z(e){let t,s,n;return{c(){t=d("h2"),s=p(e[36]),f(t,"class",n=i(e[35])+" svelte-8pd0rh")},m(e,n){r(e,t,n),l(t,s)},p(e,o){32&o[1]&&g(s,e[36]),16&o[1]&&n!==(n=i(e[35])+" svelte-8pd0rh")&&f(t,"class",n)},d(e){e&&u(t)}}}function J(e){let t,s,n,o,c,a,C,N,b,v,$,x,B,T,y=e[64].label+"",j=e[64].description+"";function A(){e[58].call(o,e[65],e[66])}return{c(){t=d("div"),s=d("p"),n=d("label"),o=d("input"),a=m(),C=p(y),b=m(),v=d("p"),f(o,"type","checkbox"),o.disabled=c=e[64].required,f(s,"class",N=i(e[38])+" svelte-8pd0rh"),f(v,"class",$=i(e[39])+" svelte-8pd0rh"),f(t,"class",x=i(e[37])+" svelte-8pd0rh")},m(c,i){r(c,t,i),l(t,s),l(s,n),l(n,o),o.checked=e[64].value,l(n,a),l(n,C),l(t,b),l(t,v),v.innerHTML=j,B||(T=h(o,"change",A),B=!0)},p(n,a){e=n,1&a[0]&&c!==(c=e[64].required)&&(o.disabled=c),1&a[0]&&(o.checked=e[64].value),1&a[0]&&y!==(y=e[64].label+"")&&g(C,y),128&a[1]&&N!==(N=i(e[38])+" svelte-8pd0rh")&&f(s,"class",N),1&a[0]&&j!==(j=e[64].description+"")&&(v.innerHTML=j),256&a[1]&&$!==($=i(e[39])+" svelte-8pd0rh")&&f(v,"class",$),64&a[1]&&x!==(x=i(e[37])+" svelte-8pd0rh")&&f(t,"class",x)},d(e){e&&u(t),B=!1,T()}}}function V(e){let s,n,o=e[1]&&L(e),c=e[2]&&!e[21]&&I(e);return{c(){o&&o.c(),s=m(),c&&c.c(),n=p("")},m(e,t){o&&o.m(e,t),r(e,s,t),c&&c.m(e,t),r(e,n,t)},p(e,t){e[1]?o?o.p(e,t):(o=L(e),o.c(),o.m(s.parentNode,s)):o&&(o.d(1),o=null),e[2]&&!e[21]?c?c.p(e,t):(c=I(e),c.c(),c.m(n.parentNode,n)):c&&(c.d(1),c=null)},i:t,o:t,d(e){o&&o.d(e),e&&u(s),c&&c.d(e),e&&u(n)}}}function G(e,t,s){let{consentCookieName:n="consent-cookie"}=t,{consentCookieOptions:o={}}=t,{shown:c}=t,{settingsShown:a=!1}=t,{baseClassName:i="cookie-consent"}=t,{rootClassName:l=`${i}-root`}=t,{className:r=i}=t,{popupClassName:u=`${i}-popup`}=t,{closeClassName:d=`${i}-close`}=t,{closeAsReject:p=!1}=t,{headerClassName:m=`${i}-header`}=t,{headerText:h=""}=t,{descriptionClassName:f=`${i}-description`}=t,{description:g=""}=t,{actionsClassName:C=`${i}-actions`}=t,{settingsButtonClassName:N=`${i}-settings-button`}=t,{settingsButtonText:v="Customize Settings"}=t,{rejectButtonClassName:$=`${i}-reject-button`}=t,{rejectButtonText:x="Disable All"}=t,{rejectButtonDisabled:B=!1}=t,{acceptButtonClassName:T=`${i}-accept-button`}=t,{acceptButtonText:y="Allow All"}=t,{baseSettingsClassName:j=`${i}-settings`}=t,{settingsClassName:A=j}=t,{settingsDisabled:k=!1}=t,{settingsPopupClassName:w=`${j}-popup`}=t,{settingsCloseClassName:D=`${j}-close`}=t,{settingsHeaderClassName:S=`${j}-header`}=t,{settingsHeaderText:H="Manage Consent Preferences"}=t,{settingsDescriptionClassName:R=`${j}-description`}=t,{settingsDescription:_=""}=t,{settingsActionsClassName:O=`${j}-actions`}=t,{settingsRejectButtonClassName:L=`${j}-reject-button`}=t,{settingsRejectButtonText:M=""}=t,{settingsRejectButtonDisabled:P=!1}=t,{settingsAcceptButtonClassName:U=`${j}-accept-button`}=t,{settingsAcceptButtonText:I=""}=t,{choicesClassName:q=`${j}-choices`}=t,{choicesHeaderClassName:F=`${j}-choices-header`}=t,{choicesHeaderText:z=""}=t,{choiceClassName:J=`${j}-choice`}=t,{choiceLabelClassName:V=`${j}-choice-label`}=t,{choiceDescriptionClassName:G=`${j}-choice-description`}=t,{choices:K=[]}=t,{choicesActionsClassName:Q=`${j}-choices-actions`}=t,{choicesAcceptSomeButtonClassName:W=`${j}-choices-accept-some-button`}=t,{choicesAcceptSomeButtonText:X="Allow Some"}=t,{onChange:Y=(e=>{})}=t;const Z=()=>{const e={};K.forEach((t=>{e[t.id]=t.value})),(e=>{E.set(n,JSON.stringify({result:e}),{expires:365,sameSite:"strict",...o})})(e),Y(e)},ee=()=>{K.forEach((e=>{e.value=e.required||!1})),Z()},te=()=>{K.forEach((e=>{e.value=!0})),Z()},se=()=>{Z()};b((()=>{if(void 0===c){const e=(()=>{const e=E.get(n);if(!e)return null;try{const{result:t}=JSON.parse(e);return t}catch(e){return null}})();s(1,c=!(e&&(e=>K.length===Object.keys(e).length&&K.every((t=>t.id in e)))(e))),e&&!c&&(K.forEach((t=>{t.value=!!e[t.id]})),Z())}}));return e.$$set=e=>{"consentCookieName"in e&&s(46,n=e.consentCookieName),"consentCookieOptions"in e&&s(47,o=e.consentCookieOptions),"shown"in e&&s(1,c=e.shown),"settingsShown"in e&&s(2,a=e.settingsShown),"baseClassName"in e&&s(48,i=e.baseClassName),"rootClassName"in e&&s(3,l=e.rootClassName),"className"in e&&s(4,r=e.className),"popupClassName"in e&&s(5,u=e.popupClassName),"closeClassName"in e&&s(6,d=e.closeClassName),"closeAsReject"in e&&s(7,p=e.closeAsReject),"headerClassName"in e&&s(8,m=e.headerClassName),"headerText"in e&&s(9,h=e.headerText),"descriptionClassName"in e&&s(10,f=e.descriptionClassName),"description"in e&&s(11,g=e.description),"actionsClassName"in e&&s(12,C=e.actionsClassName),"settingsButtonClassName"in e&&s(13,N=e.settingsButtonClassName),"settingsButtonText"in e&&s(14,v=e.settingsButtonText),"rejectButtonClassName"in e&&s(15,$=e.rejectButtonClassName),"rejectButtonText"in e&&s(16,x=e.rejectButtonText),"rejectButtonDisabled"in e&&s(17,B=e.rejectButtonDisabled),"acceptButtonClassName"in e&&s(18,T=e.acceptButtonClassName),"acceptButtonText"in e&&s(19,y=e.acceptButtonText),"baseSettingsClassName"in e&&s(49,j=e.baseSettingsClassName),"settingsClassName"in e&&s(20,A=e.settingsClassName),"settingsDisabled"in e&&s(21,k=e.settingsDisabled),"settingsPopupClassName"in e&&s(22,w=e.settingsPopupClassName),"settingsCloseClassName"in e&&s(23,D=e.settingsCloseClassName),"settingsHeaderClassName"in e&&s(24,S=e.settingsHeaderClassName),"settingsHeaderText"in e&&s(25,H=e.settingsHeaderText),"settingsDescriptionClassName"in e&&s(26,R=e.settingsDescriptionClassName),"settingsDescription"in e&&s(27,_=e.settingsDescription),"settingsActionsClassName"in e&&s(28,O=e.settingsActionsClassName),"settingsRejectButtonClassName"in e&&s(29,L=e.settingsRejectButtonClassName),"settingsRejectButtonText"in e&&s(30,M=e.settingsRejectButtonText),"settingsRejectButtonDisabled"in e&&s(31,P=e.settingsRejectButtonDisabled),"settingsAcceptButtonClassName"in e&&s(32,U=e.settingsAcceptButtonClassName),"settingsAcceptButtonText"in e&&s(33,I=e.settingsAcceptButtonText),"choicesClassName"in e&&s(34,q=e.choicesClassName),"choicesHeaderClassName"in e&&s(35,F=e.choicesHeaderClassName),"choicesHeaderText"in e&&s(36,z=e.choicesHeaderText),"choiceClassName"in e&&s(37,J=e.choiceClassName),"choiceLabelClassName"in e&&s(38,V=e.choiceLabelClassName),"choiceDescriptionClassName"in e&&s(39,G=e.choiceDescriptionClassName),"choices"in e&&s(0,K=e.choices),"choicesActionsClassName"in e&&s(40,Q=e.choicesActionsClassName),"choicesAcceptSomeButtonClassName"in e&&s(41,W=e.choicesAcceptSomeButtonClassName),"choicesAcceptSomeButtonText"in e&&s(42,X=e.choicesAcceptSomeButtonText),"onChange"in e&&s(50,Y=e.onChange)},e.$$.update=()=>{1&e.$$.dirty[0]&&K.forEach((e=>{"value"in e||(e.value=!!e.required||!!e.defaultValue)}))},[K,c,a,l,r,u,d,p,m,h,f,g,C,N,v,$,x,B,T,y,A,k,w,D,S,H,R,_,O,L,M,P,U,I,q,F,z,J,V,G,Q,W,X,ee,te,se,n,o,i,j,Y,()=>{p&&ee(),s(1,c=!1)},()=>{s(2,a=!0)},()=>{ee(),s(1,c=!1)},()=>{te(),s(1,c=!1)},()=>{s(2,a=!1)},()=>{ee(),s(2,a=!1),s(1,c=!1)},()=>{te(),s(2,a=!1),s(1,c=!1)},function(e,t){e[t].value=this.checked,s(0,K)},()=>{se(),s(2,a=!1),s(1,c=!1)}]}class K extends class{$destroy(){!function(e,t){const s=e.$$;null!==s.fragment&&(o(s.on_destroy),s.fragment&&s.fragment.d(t),s.on_destroy=s.fragment=null,s.ctx=[])}(this,1),this.$destroy=t}$on(e,t){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const e=s.indexOf(t);-1!==e&&s.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}{constructor(e){super(),R(this,e,G,V,a,{consentCookieName:46,consentCookieOptions:47,shown:1,settingsShown:2,baseClassName:48,rootClassName:3,className:4,popupClassName:5,closeClassName:6,closeAsReject:7,headerClassName:8,headerText:9,descriptionClassName:10,description:11,actionsClassName:12,settingsButtonClassName:13,settingsButtonText:14,rejectButtonClassName:15,rejectButtonText:16,rejectButtonDisabled:17,acceptButtonClassName:18,acceptButtonText:19,baseSettingsClassName:49,settingsClassName:20,settingsDisabled:21,settingsPopupClassName:22,settingsCloseClassName:23,settingsHeaderClassName:24,settingsHeaderText:25,settingsDescriptionClassName:26,settingsDescription:27,settingsActionsClassName:28,settingsRejectButtonClassName:29,settingsRejectButtonText:30,settingsRejectButtonDisabled:31,settingsAcceptButtonClassName:32,settingsAcceptButtonText:33,choicesClassName:34,choicesHeaderClassName:35,choicesHeaderText:36,choiceClassName:37,choiceLabelClassName:38,choiceDescriptionClassName:39,choices:0,choicesActionsClassName:40,choicesAcceptSomeButtonClassName:41,choicesAcceptSomeButtonText:42,onChange:50},null,[-1,-1,-1])}}const Q=(e,t)=>{for(let s=0;s<t.length;s+=1){const n=t[s];if(null!=e[n])return e[n];const o=/^(\w+)-\w+$/.exec(n);if(o&&null!=e[o[1]])return e[o[1]]}throw new Error(`Not found text: getText(${JSON.stringify(t)},${JSON.stringify(e)})`)},W=e=>[...window.navigator.languages,e],X=(e,t={})=>{const s=document.createElement("script");return Object.keys(t).forEach((e=>{s[e]=t[e]})),s.src=e,document.head.appendChild(s),s};e.createScript=X,e.getLocales=W,e.getText=Q,e.loadScript=(e,t={})=>new Promise(((s,n)=>{const o=X(e,t);o.onload=()=>{o.onload=null,o.onerror=null,s(o)},o.onerror=()=>{o.onload=null,o.onerror=null,n(new Error(`Fail to load: ${e}`))}})),e.start=(e={},t=document.body)=>new K({target:t,props:e}),e.t=(e,t=W("en-US"))=>Q(e,t),Object.defineProperty(e,"__esModule",{value:!0})}));