var D=Object.defineProperty;var A=(o,t,e)=>t in o?D(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var p=(o,t,e)=>A(o,typeof t!="symbol"?t+"":t,e);import{u as C,c as v,w as g,s as F,d as B}from"./_plugin-vue_export-helper-BL2Yd6PI.js";import{r as w,o as T,g as b,s as x,a as f,b as S,c as k}from"./i18nManager--6OJdPSJ.js";const a=C(),n=w({...B}),d=w("light"),c=v(()=>n.value.mode==="auto"?d.value:n.value.mode);class P{constructor(){p(this,"mediaQuery",null);this.init()}async init(){try{this.setupSystemThemeListener(),await this.loadThemeConfig(),this.applyTheme(),g(n,t=>{this.saveThemeConfig(t),this.applyTheme()},{deep:!0}),g(c,t=>{this.updateBodyClass(t),a.info("\u4E3B\u9898\u5DF2\u5207\u6362:",t)}),a.info("\u4E3B\u9898\u7BA1\u7406\u5668\u521D\u59CB\u5316\u5B8C\u6210:",{config:n.value,currentTheme:c.value,systemTheme:d.value,bodyClasses:document.body.className})}catch(t){a.error("\u4E3B\u9898\u7BA1\u7406\u5668\u521D\u59CB\u5316\u5931\u8D25:",t),this.updateBodyClass("light")}}async loadThemeConfig(){try{const t=await b(F.THEME_KEY);t&&(n.value={...B,...t})}catch(t){a.error("\u52A0\u8F7D\u4E3B\u9898\u914D\u7F6E\u5931\u8D25:",t)}}async saveThemeConfig(t){try{await x(F.THEME_KEY,t)}catch(e){a.error("\u4FDD\u5B58\u4E3B\u9898\u914D\u7F6E\u5931\u8D25:",e)}}setupSystemThemeListener(){typeof window<"u"&&window.matchMedia&&(this.mediaQuery=window.matchMedia("(prefers-color-scheme: dark)"),d.value=this.mediaQuery.matches?"dark":"light",a.info("\u7CFB\u7EDF\u4E3B\u9898setupSystemThemeListener:",d.value),this.mediaQuery.addEventListener("change",t=>{d.value=t.matches?"dark":"light",a.info("\u7CFB\u7EDF\u4E3B\u9898\u53D8\u5316:",d.value)}))}applyTheme(){this.updateBodyClass(c.value)}updateBodyClass(t){if(typeof document<"u"){const e=()=>{document.body.classList.remove("good-theme-light","good-theme-dark"),document.body.classList.add(`good-theme-${t}`),a.info(`\u4E3B\u9898\u7C7B\u5DF2\u66F4\u65B0: good-theme-${t}`,document.body.className)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e()}}setTheme(t){a.info(`\u8BBE\u7F6E\u4E3B\u9898\u6A21\u5F0F: ${n.value.mode} -> ${t}`),n.value.mode=t,a.info("\u4E3B\u9898\u914D\u7F6E\u5DF2\u66F4\u65B0:",n.value),a.info("\u5F53\u524D\u8BA1\u7B97\u4E3B\u9898:",c.value)}async toggleTheme(){a.info(`\u5F00\u59CB\u5207\u6362\u4E3B\u9898\uFF0C\u5F53\u524D\u6A21\u5F0F: ${n.value.mode}`),n.value.mode==="light"?this.setTheme("dark"):n.value.mode==="dark"?this.setTheme("light"):this.setTheme(d.value==="light"?"dark":"light"),a.info(`\u4E3B\u9898\u5207\u6362\u5B8C\u6210\uFF0C\u65B0\u6A21\u5F0F: ${n.value.mode}\uFF0C\u5F53\u524D\u4E3B\u9898: ${c.value}`)}setAutoDetect(t){n.value.autoDetect=t,t&&(n.value.mode="auto")}getCurrentTheme(){return c.value}getThemeConfig(){return{...n.value}}isDark(){return c.value==="dark"}isLight(){return c.value==="light"}}const i=new P;function U(){return{themeConfig:f(n),currentTheme:f(c),systemTheme:f(d),setTheme:i.setTheme.bind(i),toggleTheme:i.toggleTheme.bind(i),setAutoDetect:i.setAutoDetect.bind(i),getCurrentTheme:i.getCurrentTheme.bind(i),getThemeConfig:i.getThemeConfig.bind(i),isDark:i.isDark.bind(i),isLight:i.isLight.bind(i)}}try{T("setTheme",o=>{a.info("\u8BBE\u7F6E\u4E3B\u9898,\u63A5\u6536\u6D88\u606F:",o);const t=o.data.theme;i.setTheme(t)})}catch{a.warn("\u4E3B\u9898\u76D1\u542C\u5DF2\u6CE8\u518C\u5728\u5F53\u524D\u4E0A\u4E0B\u6587")}class W{isWebCryptoAvailable(){return typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof crypto.getRandomValues=="function"}async generateKey(t){if(!this.isWebCryptoAvailable())throw new Error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 Web Crypto API\u3002\u8BF7\u786E\u4FDD\u60A8\u5728\u5B89\u5168\u4E0A\u4E0B\u6587\u4E2D\u8FD0\u884C\uFF08HTTPS \u6216 localhost\uFF09\u3002");const e=new TextEncoder,u=await crypto.subtle.importKey("raw",e.encode(t.padEnd(32," ")),{name:"PBKDF2"},!1,["deriveBits","deriveKey"]);return crypto.subtle.deriveKey({name:"PBKDF2",salt:e.encode("salt"),iterations:1e5,hash:"SHA-256"},u,{name:"AES-GCM",length:256},!0,["encrypt","decrypt"])}async encrypt(t,e){try{if(!this.isWebCryptoAvailable())throw new Error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 Web Crypto API\u3002\u8BF7\u786E\u4FDD\u60A8\u5728\u5B89\u5168\u4E0A\u4E0B\u6587\u4E2D\u8FD0\u884C\uFF08HTTPS \u6216 localhost\uFF09\u3002");const s=new TextEncoder().encode(t),r=crypto.getRandomValues(new Uint8Array(12)),l=await this.generateKey(e),h=await crypto.subtle.encrypt({name:"AES-GCM",iv:r},l,s),y=new Uint8Array(h),m=new Uint8Array(r.length+y.length);return m.set(r),m.set(y,r.length),btoa(String.fromCharCode(...m))}catch(u){throw u instanceof Error&&u.message.includes("Web Crypto API")?u:new Error(`\u52A0\u5BC6\u5931\u8D25: ${u instanceof Error?u.message:"\u672A\u77E5\u9519\u8BEF"}`)}}async decrypt(t,e){try{if(!this.isWebCryptoAvailable())throw new Error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 Web Crypto API\u3002\u8BF7\u786E\u4FDD\u60A8\u5728\u5B89\u5168\u4E0A\u4E0B\u6587\u4E2D\u8FD0\u884C\uFF08HTTPS \u6216 localhost\uFF09\u3002");if(!t||typeof t!="string")throw new Error("\u65E0\u6548\u7684\u52A0\u5BC6\u6570\u636E: \u6570\u636E\u5FC5\u987B\u4E3A\u975E\u7A7A\u5B57\u7B26\u4E32");if(!e||typeof e!="string")throw new Error("\u65E0\u6548\u7684\u5BC6\u94A5: \u5BC6\u94A5\u5FC5\u987B\u4E3A\u975E\u7A7A\u5B57\u7B26\u4E32");const u=new TextDecoder;let s;try{s=Uint8Array.from(atob(t),m=>m.charCodeAt(0))}catch{throw new Error("\u65E0\u6548\u7684\u52A0\u5BC6\u6570\u636E: \u4E0D\u662F\u6709\u6548\u7684 Base64 \u5B57\u7B26\u4E32")}if(s.length<12)throw new Error("\u65E0\u6548\u7684\u52A0\u5BC6\u6570\u636E: \u6570\u636E\u957F\u5EA6\u8FC7\u77ED\uFF0C\u65E0\u6CD5\u5305\u542B\u521D\u59CB\u5316\u5411\u91CF");const r=s.slice(0,12),l=s.slice(12),h=await this.generateKey(e),y=await crypto.subtle.decrypt({name:"AES-GCM",iv:r},h,l);return u.decode(y)}catch(u){if(u instanceof Error){if(u.message.includes("Web Crypto API"))throw u;if(u.message.includes("decrypt"))throw new Error("\u89E3\u5BC6\u5931\u8D25: \u5BC6\u94A5\u4E0D\u6B63\u786E\u6216\u6570\u636E\u5DF2\u635F\u574F")}throw new Error(`\u89E3\u5BC6\u5931\u8D25: ${u instanceof Error?u.message:"\u672A\u77E5\u9519\u8BEF"}`)}}checkEnvironment(){const t=this.isWebCryptoAvailable();let e="";return t?e="\u5F53\u524D\u73AF\u5883\u652F\u6301 Web Crypto API\uFF0C\u53EF\u4EE5\u8FDB\u884C\u52A0\u89E3\u5BC6\u64CD\u4F5C":(typeof crypto>"u"?e="\u5F53\u524D\u73AF\u5883\u672A\u5B9A\u4E49 crypto \u5BF9\u8C61":typeof crypto.subtle>"u"?e="\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 crypto.subtle":typeof crypto.getRandomValues>"u"&&(e="\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 crypto.getRandomValues"),e+="\u3002\u8BF7\u4F7F\u7528 HTTPS \u534F\u8BAE\u6216 localhost \u73AF\u5883\u3002"),{supported:t,details:e}}}class L{constructor(){p(this,"container",null);p(this,"notifications",S([]));p(this,"shadowRoot",null)}init(t){this.shadowRoot=t,this.createContainer()}autoInit(){if(this.container)return;this.container=document.createElement("div"),this.container.id="shadow-notify-container",this.container.style.cssText=`
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
        `;const t=document.querySelector("#shadow-notify-container");if(t&&t.remove(),document.body.appendChild(this.container),!document.querySelector("#notify-styles")){const e=document.createElement("style");e.id="notify-styles",e.textContent=`
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
            `,document.head.appendChild(e)}}createContainer(){if(!this.shadowRoot)return;this.container=document.createElement("div"),this.container.id="shadow-notify-container",this.container.style.cssText=`
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
        `;const t=this.shadowRoot.querySelector("#shadow-notify-container");t&&t.remove();try{this.shadowRoot.appendChild(this.container),this.container.offsetHeight===0&&(this.container.remove(),this.container.className="shadow-notify-fallback-container",document.body.appendChild(this.container))}catch{document.body.appendChild(this.container)}setTimeout(()=>{this.container&&(this.container.style.setProperty("z-index","2147483647","important"),this.container.style.setProperty("position","fixed","important"))},0)}ensureTopLevel(){this.container&&(this.container.style.setProperty("z-index","2147483647","important"),this.container.style.setProperty("position","fixed","important"),this.container.style.setProperty("top","20px","important"),this.container.style.setProperty("left","50%","important"),this.container.style.setProperty("transform","translateX(-50%)","important"),this.container.isConnected||(this.shadowRoot?this.shadowRoot.appendChild(this.container):document.body.appendChild(this.container)))}show(t){if(this.container||this.autoInit(),!this.container)return;this.ensureTopLevel();const e=typeof t=="string"?{message:t}:t,{message:u,type:s="warning",duration:r=3e3}=e,h={id:Date.now().toString(),message:u,type:s,visible:!0};this.notifications.push(h),this.renderNotification(h,r)}renderNotification(t,e){var s;const u=document.createElement("div");if(u.className=`shadow-notify shadow-notify-${t.type}`,u.style.cssText=`
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
        `,u.textContent=t.message,this.shadowRoot&&!this.shadowRoot.querySelector("#notify-styles")){const r=document.createElement("style");r.id="notify-styles",r.textContent=`
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
            `,this.shadowRoot.appendChild(r)}(s=this.container)==null||s.appendChild(u),e>0&&setTimeout(()=>{u.style.animation="slideUp 0.3s ease-out forwards",setTimeout(()=>{u.remove();const r=this.notifications.findIndex(l=>l.id===t.id);r>-1&&this.notifications.splice(r,1)},300)},e)}getBackgroundColor(t){const e={success:"#9da4f5",warning:"#ff976a",danger:"#ee0a24",primary:"#1976d2"};return e[t]||e.warning}}const R=new L,Y=o=>{R.show(o)},E=C(),I=async()=>{try{const o=await k("getUserInfo",{});return o&&o.status==="success"&&o.data?o.data:(E.error("\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u5931\u8D25:",(o==null?void 0:o.message)||o),null)}catch(o){return E.error("\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u5F02\u5E38:",o),null}},N=async()=>{try{const o=await I();return(o==null?void 0:o.userId)||null}catch(o){return E.error("\u83B7\u53D6\u7528\u6237ID\u5F02\u5E38:",o),null}};export{W as A,N as a,I as g,Y as s,U as u};
