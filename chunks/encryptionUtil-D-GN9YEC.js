var l=Object.defineProperty;var h=(e,t,o)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var p=(e,t,o)=>h(e,typeof t!="symbol"?t+"":t,o);import{r as m,s as y}from"./i18nManager-FRL6Pt2B.js";import{u as f}from"./summary-Cmj3uyr6.js";class E{constructor(){p(this,"container",null);p(this,"notifications",m([]));p(this,"shadowRoot",null)}init(t){this.shadowRoot=t,this.createContainer()}autoInit(){if(this.container)return;this.container=document.createElement("div"),this.container.id="shadow-notify-container",this.container.style.cssText=`
            position: fixed !important;
            top: 20px !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            z-index: 2147483647 !important;
            pointer-events: none !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 8px !important;
            isolation: isolate !important;
            contain: none !important;
            width: auto !important;
            height: auto !important;
        `;const t=document.querySelector("#shadow-notify-container");if(t&&t.remove(),document.body.appendChild(this.container),!document.querySelector("#notify-styles")){const o=document.createElement("style");o.id="notify-styles",o.textContent=`
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes slideUp {
                    from {
                        opacity: 1;
                        transform: translateY(0);
                    }
                    to {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                }
            `,document.head.appendChild(o)}}createContainer(){if(!this.shadowRoot)return;this.container=document.createElement("div"),this.container.id="shadow-notify-container",this.container.style.cssText=`
            position: fixed !important;
            top: 20px !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            z-index: 2147483647 !important;
            pointer-events: none !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 8px !important;
            isolation: isolate !important;
            contain: none !important;
            width: auto !important;
            height: auto !important;
        `;const t=this.shadowRoot.querySelector("#shadow-notify-container");t&&t.remove();try{this.shadowRoot.appendChild(this.container),this.container.offsetHeight===0&&(this.container.remove(),this.container.className="shadow-notify-fallback-container",document.body.appendChild(this.container))}catch{document.body.appendChild(this.container)}setTimeout(()=>{this.container&&(this.container.style.setProperty("z-index","2147483647","important"),this.container.style.setProperty("position","fixed","important"))},0)}ensureTopLevel(){this.container&&(this.container.style.setProperty("z-index","2147483647","important"),this.container.style.setProperty("position","fixed","important"),this.container.style.setProperty("top","20px","important"),this.container.style.setProperty("left","50%","important"),this.container.style.setProperty("transform","translateX(-50%)","important"),this.container.isConnected||(this.shadowRoot?this.shadowRoot.appendChild(this.container):document.body.appendChild(this.container)))}show(t){if(this.container||this.autoInit(),!this.container)return;this.ensureTopLevel();const o=typeof t=="string"?{message:t}:t,{message:n,type:i="warning",duration:r=3e3}=o,s={id:Date.now().toString(),message:n,type:i,visible:!0};this.notifications.push(s),this.renderNotification(s,r)}renderNotification(t,o){var i;const n=document.createElement("div");if(n.className=`shadow-notify shadow-notify-${t.type}`,n.style.cssText=`
            padding: 12px 16px !important;
            border-radius: 8px !important;
            color: white !important;
            font-size: 14px !important;
            text-align: center !important;
            min-width: 200px !important;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
            animation: slideDown 0.3s ease-out !important;
            pointer-events: auto !important;
            background-color: ${this.getBackgroundColor(t.type)} !important;
            position: relative !important;
            z-index: 2147483647 !important;
            isolation: isolate !important;
            display: block !important;
            width: auto !important;
            height: auto !important;
        `,n.textContent=t.message,this.shadowRoot&&!this.shadowRoot.querySelector("#notify-styles")){const r=document.createElement("style");r.id="notify-styles",r.textContent=`
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes slideUp {
                    from {
                        opacity: 1;
                        transform: translateY(0);
                    }
                    to {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                }
            `,this.shadowRoot.appendChild(r)}(i=this.container)==null||i.appendChild(n),o>0&&setTimeout(()=>{n.style.animation="slideUp 0.3s ease-out forwards",setTimeout(()=>{n.remove();const r=this.notifications.findIndex(a=>a.id===t.id);r>-1&&this.notifications.splice(r,1)},300)},o)}getBackgroundColor(t){const o={success:"#9da4f5",warning:"#ff976a",danger:"#ee0a24",primary:"#1976d2"};return o[t]||o.warning}}const w=new E,b=e=>{w.show(e)},v=(e,t)=>{const o=e.__vccOpts||e;for(const[n,i]of t)o[n]=i;return o},d=f(),F=()=>{const e=Date.now().toString(36).slice(-6);let t="";const o="0123456789abcdefghijklmnopqrstuvwxyz";for(let n=0;n<13;n++)t+=o.charAt(Math.floor(Math.random()*o.length));return"user_"+e+t},g=(e=F())=>({userId:e,userName:"",userAvatar:"",userEmail:"",userType:"standard"}),C=e=>e!=null&&e.userId?{...g(e.userId),...e}:null,A=async()=>{try{const e=await y("getUserInfo",{});return(e==null?void 0:e.status)==="success"&&e.data?C(e.data):(d.error("get user info failed:",(e==null?void 0:e.message)||e),null)}catch(e){return d.error("get user info exception:",e),null}},T=async()=>{try{const e=await A();return(e==null?void 0:e.userId)||null}catch(e){return d.error("get user id exception:",e),null}};class P{isWebCryptoAvailable(){return typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof crypto.getRandomValues=="function"}async generateKey(t){if(!this.isWebCryptoAvailable())throw new Error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 Web Crypto API\u3002\u8BF7\u786E\u4FDD\u60A8\u5728\u5B89\u5168\u4E0A\u4E0B\u6587\u4E2D\u8FD0\u884C\uFF08HTTPS \u6216 localhost\uFF09\u3002");const o=new TextEncoder,n=await crypto.subtle.importKey("raw",o.encode(t.padEnd(32," ")),{name:"PBKDF2"},!1,["deriveBits","deriveKey"]);return crypto.subtle.deriveKey({name:"PBKDF2",salt:o.encode("salt"),iterations:1e5,hash:"SHA-256"},n,{name:"AES-GCM",length:256},!0,["encrypt","decrypt"])}async encrypt(t,o){try{if(!this.isWebCryptoAvailable())throw new Error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 Web Crypto API\u3002\u8BF7\u786E\u4FDD\u60A8\u5728\u5B89\u5168\u4E0A\u4E0B\u6587\u4E2D\u8FD0\u884C\uFF08HTTPS \u6216 localhost\uFF09\u3002");const i=new TextEncoder().encode(t),r=crypto.getRandomValues(new Uint8Array(12)),a=await this.generateKey(o),s=await crypto.subtle.encrypt({name:"AES-GCM",iv:r},a,i),c=new Uint8Array(s),u=new Uint8Array(r.length+c.length);return u.set(r),u.set(c,r.length),btoa(String.fromCharCode(...u))}catch(n){throw n instanceof Error&&n.message.includes("Web Crypto API")?n:new Error(`\u52A0\u5BC6\u5931\u8D25: ${n instanceof Error?n.message:"\u672A\u77E5\u9519\u8BEF"}`)}}async decrypt(t,o){try{if(!this.isWebCryptoAvailable())throw new Error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 Web Crypto API\u3002\u8BF7\u786E\u4FDD\u60A8\u5728\u5B89\u5168\u4E0A\u4E0B\u6587\u4E2D\u8FD0\u884C\uFF08HTTPS \u6216 localhost\uFF09\u3002");if(!t||typeof t!="string")throw new Error("\u65E0\u6548\u7684\u52A0\u5BC6\u6570\u636E: \u6570\u636E\u5FC5\u987B\u4E3A\u975E\u7A7A\u5B57\u7B26\u4E32");if(!o||typeof o!="string")throw new Error("\u65E0\u6548\u7684\u5BC6\u94A5: \u5BC6\u94A5\u5FC5\u987B\u4E3A\u975E\u7A7A\u5B57\u7B26\u4E32");const n=new TextDecoder;let i;try{i=Uint8Array.from(atob(t),u=>u.charCodeAt(0))}catch{throw new Error("\u65E0\u6548\u7684\u52A0\u5BC6\u6570\u636E: \u4E0D\u662F\u6709\u6548\u7684 Base64 \u5B57\u7B26\u4E32")}if(i.length<12)throw new Error("\u65E0\u6548\u7684\u52A0\u5BC6\u6570\u636E: \u6570\u636E\u957F\u5EA6\u8FC7\u77ED\uFF0C\u65E0\u6CD5\u5305\u542B\u521D\u59CB\u5316\u5411\u91CF");const r=i.slice(0,12),a=i.slice(12),s=await this.generateKey(o),c=await crypto.subtle.decrypt({name:"AES-GCM",iv:r},s,a);return n.decode(c)}catch(n){if(n instanceof Error){if(n.message.includes("Web Crypto API"))throw n;if(n.message.includes("decrypt"))throw new Error("\u89E3\u5BC6\u5931\u8D25: \u5BC6\u94A5\u4E0D\u6B63\u786E\u6216\u6570\u636E\u5DF2\u635F\u574F")}throw new Error(`\u89E3\u5BC6\u5931\u8D25: ${n instanceof Error?n.message:"\u672A\u77E5\u9519\u8BEF"}`)}}checkEnvironment(){const t=this.isWebCryptoAvailable();let o="";return t?o="\u5F53\u524D\u73AF\u5883\u652F\u6301 Web Crypto API\uFF0C\u53EF\u4EE5\u8FDB\u884C\u52A0\u89E3\u5BC6\u64CD\u4F5C":(typeof crypto>"u"?o="\u5F53\u524D\u73AF\u5883\u672A\u5B9A\u4E49 crypto \u5BF9\u8C61":typeof crypto.subtle>"u"?o="\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 crypto.subtle":typeof crypto.getRandomValues>"u"&&(o="\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 crypto.getRandomValues"),o+="\u3002\u8BF7\u4F7F\u7528 HTTPS \u534F\u8BAE\u6216 localhost \u73AF\u5883\u3002"),{supported:t,details:o}}}export{P as A,v as _,T as a,A as g,b as s};
