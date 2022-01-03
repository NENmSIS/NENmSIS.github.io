"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[692],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return p}});var a=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function t(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,a,o=function(e,n){if(null==e)return{};var r,a,o={},t=Object.keys(e);for(a=0;a<t.length;a++)r=t[a],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)r=t[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=a.createContext({}),c=function(e){var n=a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=c(e.components);return a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var r=e.components,o=e.mdxType,t=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),p=o,f=m["".concat(u,".").concat(p)]||m[p]||d[p]||t;return r?a.createElement(f,i(i({ref:n},s),{},{components:r})):a.createElement(f,i({ref:n},s))}));function p(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var t=r.length,i=new Array(t);i[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<t;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},83:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var a=r(7462),o=r(3366),t=(r(7294),r(3905)),i=["components"],l={sidebar_position:2},u=void 0,c={unversionedId:"Configurations/Configurar-Webserver-jekyll",id:"Configurations/Configurar-Webserver-jekyll",title:"Configurar-Webserver-jekyll",description:"Configuraciones desde CLI en LINUX",source:"@site/docs/Configurations/Configurar-Webserver-jekyll.md",sourceDirName:"Configurations",slug:"/Configurations/Configurar-Webserver-jekyll",permalink:"/docs/Configurations/Configurar-Webserver-jekyll",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Configurations/Configurar-Webserver-jekyll.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Docusaurus-configuration",permalink:"/docs/Configurations/Docusaurus-configuration"}},s=[{value:"Configuraciones desde CLI en LINUX",id:"configuraciones-desde-cli-en-linux",children:[],level:2},{value:"Utilizaci\xf3n de markdown como lenguaje de marcado",id:"utilizaci\xf3n-de-markdown-como-lenguaje-de-marcado",children:[],level:2}],d={toc:s};function m(e){var n=e.components,r=(0,o.Z)(e,i);return(0,t.kt)("wrapper",(0,a.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"configuraciones-desde-cli-en-linux"},"Configuraciones desde CLI en LINUX"),(0,t.kt)("p",null,"En este art\xedculo, se exponen las configuraciones necesarias para visualizar las modificaciones realizadas en el servidor web local y guardar y publicar las modificaciones en el servidor web de Github."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},'##PARA VISUALIZAR LAS MODIFICACIONES LOCALES\n#A continuacion ejecutamos en local \nbundle exec jekyll serve\n\n#Para todos los errores que nos de, tenemos que instalar las dependencias de ruby\nsudo gem install nombredependencia:versionindicada\n\n#Por ultimo es probable que nos diga que le falta un parser en el archivo gem, solo hay que abrir con nano Gemfile >\ngem "kramdown-parser-gfm"\n\n#Cuando se realice alg\xfan cambio y se quiera reiniciar el servidor, primero hay que eliminar el servicio activo en e>\nsudo lsof -i :4000\nkill -9 numerodePID\n\n\n##PARA SUBIR LA P\xc1GINA AL SERVIDOR WEB   \n#Para editar la pagina web creada con jekyll en Githubpages, se edita en documents/webserver/NENmSIS... lo que se n>\ngit add .\ngit commit -m "comentario de lo realizado en el cambio"\n\n#Solo si lo pide (aunque en la primera vez que se hace deberia quedar guardado), se escribe lo siguiente\ngit config --global user.email "nenmsis@protonmail.com"\ngit config --global user.name "nombreusuario"  \n\n#Ahora se sube la web entera e introducimos el nombre de usuario y el token generado\ngit push -u origin\n \n#A continuaci\xf3n se introduce el nombre de usuario y el token de acceso \n\n')),(0,t.kt)("h2",{id:"utilizaci\xf3n-de-markdown-como-lenguaje-de-marcado"},"Utilizaci\xf3n de markdown como lenguaje de marcado"),(0,t.kt)("p",null,"Para la elaboraci\xf3n de los art\xedculos, se utiliza el lenguaje de marcado markdown. Con el objetivo de tener una referencia a la que acudir con frecuencia, se pueden utilizar estos links: "),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://towardsdatascience.com/the-ultimate-markdown-cheat-sheet-3d3976b31a0"},"Markdown1")," "),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://github.com/mundimark/awesome-markdown#markdown-style-guides--best-practices"},"Markdown2")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://www.markdownguide.org/basic-syntax/"},"Markdown3"))))}m.isMDXComponent=!0}}]);