var T=Object.defineProperty;var b=(o,e,t)=>e in o?T(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var f=(o,e,t)=>b(o,typeof e!="symbol"?e+"":e,t);import{r as C,o as v,g as x,s as S,b as g,c as k,d as P}from"./i18nManager-C2Gwi4HS.js";import{c as R,p as w}from"./_plugin-vue_export-helper-CXKwipru.js";const _={PROJECT_NAME:"GoodAssistant"},I={enabled:!1,prefix:_.PROJECT_NAME},B={LOCAL_STORAGE_KEY:"floatingWindowDisabled",PAGE_STORAGE_KEY:"pageFloatingWindowDisabledList",MODEL_INFO_KEY:"modelInfo",MODEL_CONFIGS_KEY:"modelConfigs",THEME_KEY:"appTheme",CHAT_HISTORY_KEY:"chatHistory",USER_INFO_KEY:"userInfo",CHAT_SETTINGS_KEY:"chatSettings",DEVNET_RULES_KEY:"devNetRules",AUTOMATION_FLOWS_KEY:"automationFlows"},W={enabled:!1,contentEx:"Gusy@1216",content:"ed70+zXrd0O8mo54EjkXypwiXHjXUIpnNIoRSTwakYVd8U8GRDw="},$={githubUrl:"A2OlUB0MzGnqNQDE1lX95HKPmiNHU4O0+p95Xa9/qLkdWiqhbzmYd3q9WcFpXcZTZRs6fXSPse1yyLzK5eA4qGIZNb52NWCdxd29m5lrog=="},D={mode:"light",autoDetect:!1},H={version:"v1.1.12",versionPageUrl:"https://github.com/herogus/good_ai_chrome_extension/blob/main/VERSION.md"};function A(o){const e={...I,...o},t=C(e.enabled),n=(u,...y)=>{if(!t.value)return;const E=e.prefix?`\u3010${e.prefix}\u3011`:"";switch(u){case"log":console.log(`${E}`,...y);break;case"info":console.info(`${E}`,...y);break;case"warn":console.warn(`${E}`,...y);break;case"error":console.error(`${E}`,...y);break}};return{info:(...u)=>n("info",...u),error:(...u)=>n("error",...u),warn:(...u)=>n("warn",...u),logWithPrefix:(...u)=>n("info",...u),enableLogger:u=>{t.value=u}}}const s=A(),i=C({...D}),l=C("light"),d=R(()=>i.value.mode==="auto"?l.value:i.value.mode);class L{constructor(){f(this,"mediaQuery",null);this.init()}async init(){try{this.setupSystemThemeListener(),await this.loadThemeConfig(),this.applyTheme(),w(i,e=>{this.saveThemeConfig(e),this.applyTheme()},{deep:!0}),w(d,e=>{this.updateBodyClass(e),s.info("\u4E3B\u9898\u5DF2\u5207\u6362:",e)}),s.info("\u4E3B\u9898\u7BA1\u7406\u5668\u521D\u59CB\u5316\u5B8C\u6210:",{config:i.value,currentTheme:d.value,systemTheme:l.value,bodyClasses:document.body.className})}catch(e){s.error("\u4E3B\u9898\u7BA1\u7406\u5668\u521D\u59CB\u5316\u5931\u8D25:",e),this.updateBodyClass("light")}}async loadThemeConfig(){try{const e=await x(B.THEME_KEY);e&&(i.value={...D,...e})}catch(e){s.error("\u52A0\u8F7D\u4E3B\u9898\u914D\u7F6E\u5931\u8D25:",e)}}async saveThemeConfig(e){try{await S(B.THEME_KEY,e)}catch(t){s.error("\u4FDD\u5B58\u4E3B\u9898\u914D\u7F6E\u5931\u8D25:",t)}}setupSystemThemeListener(){typeof window<"u"&&window.matchMedia&&(this.mediaQuery=window.matchMedia("(prefers-color-scheme: dark)"),l.value=this.mediaQuery.matches?"dark":"light",s.info("\u7CFB\u7EDF\u4E3B\u9898setupSystemThemeListener:",l.value),this.mediaQuery.addEventListener("change",e=>{l.value=e.matches?"dark":"light",s.info("\u7CFB\u7EDF\u4E3B\u9898\u53D8\u5316:",l.value)}))}applyTheme(){this.updateBodyClass(d.value)}updateBodyClass(e){if(typeof document<"u"){const t=()=>{document.body.classList.remove("good-theme-light","good-theme-dark"),document.body.classList.add(`good-theme-${e}`),s.info(`\u4E3B\u9898\u7C7B\u5DF2\u66F4\u65B0: good-theme-${e}`,document.body.className)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",t):t()}}setTheme(e){s.info(`\u8BBE\u7F6E\u4E3B\u9898\u6A21\u5F0F: ${i.value.mode} -> ${e}`),i.value.mode=e,s.info("\u4E3B\u9898\u914D\u7F6E\u5DF2\u66F4\u65B0:",i.value),s.info("\u5F53\u524D\u8BA1\u7B97\u4E3B\u9898:",d.value)}async toggleTheme(){s.info(`\u5F00\u59CB\u5207\u6362\u4E3B\u9898\uFF0C\u5F53\u524D\u6A21\u5F0F: ${i.value.mode}`),i.value.mode==="light"?this.setTheme("dark"):i.value.mode==="dark"?this.setTheme("light"):this.setTheme(l.value==="light"?"dark":"light"),s.info(`\u4E3B\u9898\u5207\u6362\u5B8C\u6210\uFF0C\u65B0\u6A21\u5F0F: ${i.value.mode}\uFF0C\u5F53\u524D\u4E3B\u9898: ${d.value}`)}setAutoDetect(e){i.value.autoDetect=e,e&&(i.value.mode="auto")}getCurrentTheme(){return d.value}getThemeConfig(){return{...i.value}}isDark(){return d.value==="dark"}isLight(){return d.value==="light"}}const a=new L;function G(){return{themeConfig:g(i),currentTheme:g(d),systemTheme:g(l),setTheme:a.setTheme.bind(a),toggleTheme:a.toggleTheme.bind(a),setAutoDetect:a.setAutoDetect.bind(a),getCurrentTheme:a.getCurrentTheme.bind(a),getThemeConfig:a.getThemeConfig.bind(a),isDark:a.isDark.bind(a),isLight:a.isLight.bind(a)}}try{v("setTheme",o=>{s.info("\u8BBE\u7F6E\u4E3B\u9898,\u63A5\u6536\u6D88\u606F:",o);const e=o.data.theme;a.setTheme(e)})}catch{s.warn("\u4E3B\u9898\u76D1\u542C\u5DF2\u6CE8\u518C\u5728\u5F53\u524D\u4E0A\u4E0B\u6587")}class X{isWebCryptoAvailable(){return typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof crypto.getRandomValues=="function"}async generateKey(e){if(!this.isWebCryptoAvailable())throw new Error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 Web Crypto API\u3002\u8BF7\u786E\u4FDD\u60A8\u5728\u5B89\u5168\u4E0A\u4E0B\u6587\u4E2D\u8FD0\u884C\uFF08HTTPS \u6216 localhost\uFF09\u3002");const t=new TextEncoder,n=await crypto.subtle.importKey("raw",t.encode(e.padEnd(32," ")),{name:"PBKDF2"},!1,["deriveBits","deriveKey"]);return crypto.subtle.deriveKey({name:"PBKDF2",salt:t.encode("salt"),iterations:1e5,hash:"SHA-256"},n,{name:"AES-GCM",length:256},!0,["encrypt","decrypt"])}async encrypt(e,t){try{if(!this.isWebCryptoAvailable())throw new Error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 Web Crypto API\u3002\u8BF7\u786E\u4FDD\u60A8\u5728\u5B89\u5168\u4E0A\u4E0B\u6587\u4E2D\u8FD0\u884C\uFF08HTTPS \u6216 localhost\uFF09\u3002");const c=new TextEncoder().encode(e),r=crypto.getRandomValues(new Uint8Array(12)),h=await this.generateKey(t),m=await crypto.subtle.encrypt({name:"AES-GCM",iv:r},h,c),p=new Uint8Array(m),u=new Uint8Array(r.length+p.length);return u.set(r),u.set(p,r.length),btoa(String.fromCharCode(...u))}catch(n){throw n instanceof Error&&n.message.includes("Web Crypto API")?n:new Error(`\u52A0\u5BC6\u5931\u8D25: ${n instanceof Error?n.message:"\u672A\u77E5\u9519\u8BEF"}`)}}async decrypt(e,t){try{if(!this.isWebCryptoAvailable())throw new Error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 Web Crypto API\u3002\u8BF7\u786E\u4FDD\u60A8\u5728\u5B89\u5168\u4E0A\u4E0B\u6587\u4E2D\u8FD0\u884C\uFF08HTTPS \u6216 localhost\uFF09\u3002");if(!e||typeof e!="string")throw new Error("\u65E0\u6548\u7684\u52A0\u5BC6\u6570\u636E: \u6570\u636E\u5FC5\u987B\u4E3A\u975E\u7A7A\u5B57\u7B26\u4E32");if(!t||typeof t!="string")throw new Error("\u65E0\u6548\u7684\u5BC6\u94A5: \u5BC6\u94A5\u5FC5\u987B\u4E3A\u975E\u7A7A\u5B57\u7B26\u4E32");const n=new TextDecoder;let c;try{c=Uint8Array.from(atob(e),u=>u.charCodeAt(0))}catch{throw new Error("\u65E0\u6548\u7684\u52A0\u5BC6\u6570\u636E: \u4E0D\u662F\u6709\u6548\u7684 Base64 \u5B57\u7B26\u4E32")}if(c.length<12)throw new Error("\u65E0\u6548\u7684\u52A0\u5BC6\u6570\u636E: \u6570\u636E\u957F\u5EA6\u8FC7\u77ED\uFF0C\u65E0\u6CD5\u5305\u542B\u521D\u59CB\u5316\u5411\u91CF");const r=c.slice(0,12),h=c.slice(12),m=await this.generateKey(t),p=await crypto.subtle.decrypt({name:"AES-GCM",iv:r},m,h);return n.decode(p)}catch(n){if(n instanceof Error){if(n.message.includes("Web Crypto API"))throw n;if(n.message.includes("decrypt"))throw new Error("\u89E3\u5BC6\u5931\u8D25: \u5BC6\u94A5\u4E0D\u6B63\u786E\u6216\u6570\u636E\u5DF2\u635F\u574F")}throw new Error(`\u89E3\u5BC6\u5931\u8D25: ${n instanceof Error?n.message:"\u672A\u77E5\u9519\u8BEF"}`)}}checkEnvironment(){const e=this.isWebCryptoAvailable();let t="";return e?t="\u5F53\u524D\u73AF\u5883\u652F\u6301 Web Crypto API\uFF0C\u53EF\u4EE5\u8FDB\u884C\u52A0\u89E3\u5BC6\u64CD\u4F5C":(typeof crypto>"u"?t="\u5F53\u524D\u73AF\u5883\u672A\u5B9A\u4E49 crypto \u5BF9\u8C61":typeof crypto.subtle>"u"?t="\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 crypto.subtle":typeof crypto.getRandomValues>"u"&&(t="\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 crypto.getRandomValues"),t+="\u3002\u8BF7\u4F7F\u7528 HTTPS \u534F\u8BAE\u6216 localhost \u73AF\u5883\u3002"),{supported:e,details:t}}}class K{constructor(){f(this,"container",null);f(this,"notifications",k([]));f(this,"shadowRoot",null)}init(e){this.shadowRoot=e,this.createContainer()}autoInit(){if(this.container)return;this.container=document.createElement("div"),this.container.id="shadow-notify-container",this.container.style.cssText=`
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
        `;const e=document.querySelector("#shadow-notify-container");if(e&&e.remove(),document.body.appendChild(this.container),!document.querySelector("#notify-styles")){const t=document.createElement("style");t.id="notify-styles",t.textContent=`
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
            `,document.head.appendChild(t)}}createContainer(){if(!this.shadowRoot)return;this.container=document.createElement("div"),this.container.id="shadow-notify-container",this.container.style.cssText=`
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
        `;const e=this.shadowRoot.querySelector("#shadow-notify-container");e&&e.remove();try{this.shadowRoot.appendChild(this.container),this.container.offsetHeight===0&&(this.container.remove(),this.container.className="shadow-notify-fallback-container",document.body.appendChild(this.container))}catch{document.body.appendChild(this.container)}setTimeout(()=>{this.container&&(this.container.style.setProperty("z-index","2147483647","important"),this.container.style.setProperty("position","fixed","important"))},0)}ensureTopLevel(){this.container&&(this.container.style.setProperty("z-index","2147483647","important"),this.container.style.setProperty("position","fixed","important"),this.container.style.setProperty("top","20px","important"),this.container.style.setProperty("left","50%","important"),this.container.style.setProperty("transform","translateX(-50%)","important"),this.container.isConnected||(this.shadowRoot?this.shadowRoot.appendChild(this.container):document.body.appendChild(this.container)))}show(e){if(this.container||this.autoInit(),!this.container)return;this.ensureTopLevel();const t=typeof e=="string"?{message:e}:e,{message:n,type:c="warning",duration:r=3e3}=t,m={id:Date.now().toString(),message:n,type:c,visible:!0};this.notifications.push(m),this.renderNotification(m,r)}renderNotification(e,t){var c;const n=document.createElement("div");if(n.className=`shadow-notify shadow-notify-${e.type}`,n.style.cssText=`
            padding: 12px 16px !important;
            border-radius: 8px !important;
            color: white !important;
            font-size: 14px !important;
            text-align: center !important;
            min-width: 200px !important;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
            animation: slideDown 0.3s ease-out !important;
            pointer-events: auto !important;
            background-color: ${this.getBackgroundColor(e.type)} !important;
            position: relative !important;
            z-index: 2147483647 !important;
            isolation: isolate !important;
            display: block !important;
            width: auto !important;
            height: auto !important;
        `,n.textContent=e.message,this.shadowRoot&&!this.shadowRoot.querySelector("#notify-styles")){const r=document.createElement("style");r.id="notify-styles",r.textContent=`
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
            `,this.shadowRoot.appendChild(r)}(c=this.container)==null||c.appendChild(n),t>0&&setTimeout(()=>{n.style.animation="slideUp 0.3s ease-out forwards",setTimeout(()=>{n.remove();const r=this.notifications.findIndex(h=>h.id===e.id);r>-1&&this.notifications.splice(r,1)},300)},t)}getBackgroundColor(e){const t={success:"#9da4f5",warning:"#ff976a",danger:"#ee0a24",primary:"#1976d2"};return t[e]||t.warning}}const N=new K,z=o=>{N.show(o)},F=A(),Y=async()=>{try{const o=await P("getUserInfo",{});return o&&o.status==="success"&&o.data?o.data:(F.error("\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u5931\u8D25:",(o==null?void 0:o.message)||o),null)}catch(o){return F.error("\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u5F02\u5E38:",o),null}},q=async()=>{try{const o=await Y();return(o==null?void 0:o.userId)||null}catch(o){return F.error("\u83B7\u53D6\u7528\u6237ID\u5F02\u5E38:",o),null}};export{X as A,G as a,B as b,$ as c,q as d,Y as g,z as s,A as u,H as v,W as w};
