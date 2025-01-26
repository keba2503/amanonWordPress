import{c as et}from"./default-i18n.20001971.js";import{m as ct}from"./helpers.53868b98.js";var Y={},tt={exports:{}};/*! https://mths.be/punycode v1.4.1 by @mathias */tt.exports;(function(s,n){(function(t){var y=n&&!n.nodeType&&n,l=s&&!s.nodeType&&s,g=typeof et=="object"&&et;(g.global===g||g.window===g||g.self===g)&&(t=g);var m,e=2147483647,x=36,d=1,j=26,S=38,b=700,f=72,P=128,k="-",A=/^xn--/,G=/[^\x20-\x7E]/,o=/[\x2E\u3002\uFF0E\uFF61]/g,c={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},F=x-d,u=Math.floor,v=String.fromCharCode,z;function q(h){throw new RangeError(c[h])}function I(h,r){for(var a=h.length,i=[];a--;)i[a]=r(h[a]);return i}function D(h,r){var a=h.split("@"),i="";a.length>1&&(i=a[0]+"@",h=a[1]),h=h.replace(o,".");var p=h.split("."),w=I(p,r).join(".");return i+w}function J(h){for(var r=[],a=0,i=h.length,p,w;a<i;)p=h.charCodeAt(a++),p>=55296&&p<=56319&&a<i?(w=h.charCodeAt(a++),(w&64512)==56320?r.push(((p&1023)<<10)+(w&1023)+65536):(r.push(p),a--)):r.push(p);return r}function Q(h){return I(h,function(r){var a="";return r>65535&&(r-=65536,a+=v(r>>>10&1023|55296),r=56320|r&1023),a+=v(r),a}).join("")}function N(h){return h-48<10?h-22:h-65<26?h-65:h-97<26?h-97:x}function K(h,r){return h+22+75*(h<26)-((r!=0)<<5)}function W(h,r,a){var i=0;for(h=a?u(h/b):h>>1,h+=u(h/r);h>F*j>>1;i+=x)h=u(h/F);return u(i+(F+1)*h/(h+S))}function Z(h){var r=[],a=h.length,i,p=0,w=P,C=f,_,T,U,$,O,M,L,B,V;for(_=h.lastIndexOf(k),_<0&&(_=0),T=0;T<_;++T)h.charCodeAt(T)>=128&&q("not-basic"),r.push(h.charCodeAt(T));for(U=_>0?_+1:0;U<a;){for($=p,O=1,M=x;U>=a&&q("invalid-input"),L=N(h.charCodeAt(U++)),(L>=x||L>u((e-p)/O))&&q("overflow"),p+=L*O,B=M<=C?d:M>=C+j?j:M-C,!(L<B);M+=x)V=x-B,O>u(e/V)&&q("overflow"),O*=V;i=r.length+1,C=W(p-$,i,$==0),u(p/i)>e-w&&q("overflow"),w+=u(p/i),p%=i,r.splice(p++,0,w)}return Q(r)}function H(h){var r,a,i,p,w,C,_,T,U,$,O,M=[],L,B,V,st;for(h=J(h),L=h.length,r=P,a=0,w=f,C=0;C<L;++C)O=h[C],O<128&&M.push(v(O));for(i=p=M.length,p&&M.push(k);i<L;){for(_=e,C=0;C<L;++C)O=h[C],O>=r&&O<_&&(_=O);for(B=i+1,_-r>u((e-a)/B)&&q("overflow"),a+=(_-r)*B,r=_,C=0;C<L;++C)if(O=h[C],O<r&&++a>e&&q("overflow"),O==r){for(T=a,U=x;$=U<=w?d:U>=w+j?j:U-w,!(T<$);U+=x)st=T-$,V=x-$,M.push(v(K($+st%V,0))),T=u(st/V);M.push(v(K(T,0))),w=W(a,B,i==p),a=0,++i}++a,++r}return M.join("")}function ft(h){return D(h,function(r){return A.test(r)?Z(r.slice(4).toLowerCase()):r})}function ut(h){return D(h,function(r){return G.test(r)?"xn--"+H(r):r})}if(m={version:"1.4.1",ucs2:{decode:J,encode:Q},decode:Z,encode:H,toASCII:ut,toUnicode:ft},y&&l)if(s.exports==y)l.exports=m;else for(z in m)m.hasOwnProperty(z)&&(y[z]=m[z]);else t.punycode=m})(et)})(tt,tt.exports);var pt=tt.exports,lt=pt;function R(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}var mt=/^([a-z0-9.+-]+:)/i,xt=/:[0-9]*$/,yt=/^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,gt=["<",">",'"',"`"," ","\r",`
`,"	"],dt=["{","}","|","\\","^","`"].concat(gt),ht=["'"].concat(dt),nt=["%","/","?",";","#"].concat(ht),at=["/","?","#"],bt=255,it=/^[+a-z0-9A-Z_-]{0,63}$/,vt=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,Ct={javascript:!0,"javascript:":!0},ot={javascript:!0,"javascript:":!0},X={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},rt=ct;function E(s,n,t){if(s&&typeof s=="object"&&s instanceof R)return s;var y=new R;return y.parse(s,n,t),y}R.prototype.parse=function(s,n,t){if(typeof s!="string")throw new TypeError("Parameter 'url' must be a string, not "+typeof s);var y=s.indexOf("?"),l=y!==-1&&y<s.indexOf("#")?"?":"#",g=s.split(l),m=/\\/g;g[0]=g[0].replace(m,"/"),s=g.join(l);var e=s;if(e=e.trim(),!t&&s.split("#").length===1){var x=yt.exec(e);if(x)return this.path=e,this.href=e,this.pathname=x[1],x[2]?(this.search=x[2],n?this.query=rt.parse(this.search.substr(1)):this.query=this.search.substr(1)):n&&(this.search="",this.query={}),this}var d=mt.exec(e);if(d){d=d[0];var j=d.toLowerCase();this.protocol=j,e=e.substr(d.length)}if(t||d||e.match(/^\/\/[^@/]+@[^@/]+/)){var S=e.substr(0,2)==="//";S&&!(d&&ot[d])&&(e=e.substr(2),this.slashes=!0)}if(!ot[d]&&(S||d&&!X[d])){for(var b=-1,f=0;f<at.length;f++){var P=e.indexOf(at[f]);P!==-1&&(b===-1||P<b)&&(b=P)}var k,A;b===-1?A=e.lastIndexOf("@"):A=e.lastIndexOf("@",b),A!==-1&&(k=e.slice(0,A),e=e.slice(A+1),this.auth=decodeURIComponent(k)),b=-1;for(var f=0;f<nt.length;f++){var P=e.indexOf(nt[f]);P!==-1&&(b===-1||P<b)&&(b=P)}b===-1&&(b=e.length),this.host=e.slice(0,b),e=e.slice(b),this.parseHost(),this.hostname=this.hostname||"";var G=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!G)for(var o=this.hostname.split(/\./),f=0,c=o.length;f<c;f++){var F=o[f];if(F&&!F.match(it)){for(var u="",v=0,z=F.length;v<z;v++)F.charCodeAt(v)>127?u+="x":u+=F[v];if(!u.match(it)){var q=o.slice(0,f),I=o.slice(f+1),D=F.match(vt);D&&(q.push(D[1]),I.unshift(D[2])),I.length&&(e="/"+I.join(".")+e),this.hostname=q.join(".");break}}}this.hostname.length>bt?this.hostname="":this.hostname=this.hostname.toLowerCase(),G||(this.hostname=lt.toASCII(this.hostname));var J=this.port?":"+this.port:"",Q=this.hostname||"";this.host=Q+J,this.href+=this.host,G&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),e[0]!=="/"&&(e="/"+e))}if(!Ct[j])for(var f=0,c=ht.length;f<c;f++){var N=ht[f];if(e.indexOf(N)!==-1){var K=encodeURIComponent(N);K===N&&(K=escape(N)),e=e.split(N).join(K)}}var W=e.indexOf("#");W!==-1&&(this.hash=e.substr(W),e=e.slice(0,W));var Z=e.indexOf("?");if(Z!==-1?(this.search=e.substr(Z),this.query=e.substr(Z+1),n&&(this.query=rt.parse(this.query)),e=e.slice(0,Z)):n&&(this.search="",this.query={}),e&&(this.pathname=e),X[j]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var J=this.pathname||"",H=this.search||"";this.path=J+H}return this.href=this.format(),this};function At(s){return typeof s=="string"&&(s=E(s)),s instanceof R?s.format():R.prototype.format.call(s)}R.prototype.format=function(){var s=this.auth||"";s&&(s=encodeURIComponent(s),s=s.replace(/%3A/i,":"),s+="@");var n=this.protocol||"",t=this.pathname||"",y=this.hash||"",l=!1,g="";this.host?l=s+this.host:this.hostname&&(l=s+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(l+=":"+this.port)),this.query&&typeof this.query=="object"&&Object.keys(this.query).length&&(g=rt.stringify(this.query,{arrayFormat:"repeat",addQueryPrefix:!1}));var m=this.search||g&&"?"+g||"";return n&&n.substr(-1)!==":"&&(n+=":"),this.slashes||(!n||X[n])&&l!==!1?(l="//"+(l||""),t&&t.charAt(0)!=="/"&&(t="/"+t)):l||(l=""),y&&y.charAt(0)!=="#"&&(y="#"+y),m&&m.charAt(0)!=="?"&&(m="?"+m),t=t.replace(/[?#]/g,function(e){return encodeURIComponent(e)}),m=m.replace("#","%23"),n+l+t+m+y};function qt(s,n){return E(s,!1,!0).resolve(n)}R.prototype.resolve=function(s){return this.resolveObject(E(s,!1,!0)).format()};function Ot(s,n){return s?E(s,!1,!0).resolveObject(n):n}R.prototype.resolveObject=function(s){if(typeof s=="string"){var n=new R;n.parse(s,!1,!0),s=n}for(var t=new R,y=Object.keys(this),l=0;l<y.length;l++){var g=y[l];t[g]=this[g]}if(t.hash=s.hash,s.href==="")return t.href=t.format(),t;if(s.slashes&&!s.protocol){for(var m=Object.keys(s),e=0;e<m.length;e++){var x=m[e];x!=="protocol"&&(t[x]=s[x])}return X[t.protocol]&&t.hostname&&!t.pathname&&(t.pathname="/",t.path=t.pathname),t.href=t.format(),t}if(s.protocol&&s.protocol!==t.protocol){if(!X[s.protocol]){for(var d=Object.keys(s),j=0;j<d.length;j++){var S=d[j];t[S]=s[S]}return t.href=t.format(),t}if(t.protocol=s.protocol,!s.host&&!ot[s.protocol]){for(var c=(s.pathname||"").split("/");c.length&&!(s.host=c.shift()););s.host||(s.host=""),s.hostname||(s.hostname=""),c[0]!==""&&c.unshift(""),c.length<2&&c.unshift(""),t.pathname=c.join("/")}else t.pathname=s.pathname;if(t.search=s.search,t.query=s.query,t.host=s.host||"",t.auth=s.auth,t.hostname=s.hostname||s.host,t.port=s.port,t.pathname||t.search){var b=t.pathname||"",f=t.search||"";t.path=b+f}return t.slashes=t.slashes||s.slashes,t.href=t.format(),t}var P=t.pathname&&t.pathname.charAt(0)==="/",k=s.host||s.pathname&&s.pathname.charAt(0)==="/",A=k||P||t.host&&s.pathname,G=A,o=t.pathname&&t.pathname.split("/")||[],c=s.pathname&&s.pathname.split("/")||[],F=t.protocol&&!X[t.protocol];if(F&&(t.hostname="",t.port=null,t.host&&(o[0]===""?o[0]=t.host:o.unshift(t.host)),t.host="",s.protocol&&(s.hostname=null,s.port=null,s.host&&(c[0]===""?c[0]=s.host:c.unshift(s.host)),s.host=null),A=A&&(c[0]===""||o[0]==="")),k)t.host=s.host||s.host===""?s.host:t.host,t.hostname=s.hostname||s.hostname===""?s.hostname:t.hostname,t.search=s.search,t.query=s.query,o=c;else if(c.length)o||(o=[]),o.pop(),o=o.concat(c),t.search=s.search,t.query=s.query;else if(s.search!=null){if(F){t.host=o.shift(),t.hostname=t.host;var u=t.host&&t.host.indexOf("@")>0?t.host.split("@"):!1;u&&(t.auth=u.shift(),t.hostname=u.shift(),t.host=t.hostname)}return t.search=s.search,t.query=s.query,(t.pathname!==null||t.search!==null)&&(t.path=(t.pathname?t.pathname:"")+(t.search?t.search:"")),t.href=t.format(),t}if(!o.length)return t.pathname=null,t.search?t.path="/"+t.search:t.path=null,t.href=t.format(),t;for(var v=o.slice(-1)[0],z=(t.host||s.host||o.length>1)&&(v==="."||v==="..")||v==="",q=0,I=o.length;I>=0;I--)v=o[I],v==="."?o.splice(I,1):v===".."?(o.splice(I,1),q++):q&&(o.splice(I,1),q--);if(!A&&!G)for(;q--;q)o.unshift("..");A&&o[0]!==""&&(!o[0]||o[0].charAt(0)!=="/")&&o.unshift(""),z&&o.join("/").substr(-1)!=="/"&&o.push("");var D=o[0]===""||o[0]&&o[0].charAt(0)==="/";if(F){t.hostname=D?"":o.length?o.shift():"",t.host=t.hostname;var u=t.host&&t.host.indexOf("@")>0?t.host.split("@"):!1;u&&(t.auth=u.shift(),t.hostname=u.shift(),t.host=t.hostname)}return A=A||t.host&&o.length,A&&!D&&o.unshift(""),o.length>0?t.pathname=o.join("/"):(t.pathname=null,t.path=null),(t.pathname!==null||t.search!==null)&&(t.path=(t.pathname?t.pathname:"")+(t.search?t.search:"")),t.auth=s.auth||t.auth,t.slashes=t.slashes||s.slashes,t.href=t.format(),t};R.prototype.parseHost=function(){var s=this.host,n=xt.exec(s);n&&(n=n[0],n!==":"&&(this.port=n.substr(1)),s=s.substr(0,s.length-n.length)),s&&(this.hostname=s)};Y.parse=E;Y.resolve=qt;Y.resolveObject=Ot;Y.format=At;Y.Url=R;export{Y as u};
