"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8115],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(r),h=i,f=c["".concat(l,".").concat(h)]||c[h]||u[h]||a;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8517:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return m},toc:function(){return u},default:function(){return h}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],s={slug:"File-system permissions",title:"File-system permissions",authors:"NENmSIS",tags:["English","Linux"]},l=void 0,p={permalink:"/blog/File-system permissions",source:"@site/blog/2022-01-11-Unix file-system permissions.md",title:"File-system permissions",description:"This is an interesting topic to talk about with the aim of understanding the Unix permissions.",date:"2022-01-11T00:00:00.000Z",formattedDate:"January 11, 2022",tags:[{label:"English",permalink:"/blog/tags/english"},{label:"Linux",permalink:"/blog/tags/linux"}],readingTime:1.18,truncated:!1,authors:[{name:"NENmSIS",title:"Learner",url:"https://NENmSIS.github.io",imageURL:"/img/avatargithub.jpg",key:"NENmSIS"}],prevItem:{title:"Vulnerability Research",permalink:"/blog/Vulnerability Research"},nextItem:{title:"Bienvenidos",permalink:"/blog/Bienvenidos"}},m={authorsImageUrls:[void 0]},u=[{value:"Notation of traditional Unix permissions",id:"notation-of-traditional-unix-permissions",children:[],level:2},{value:"Symbolic notation",id:"symbolic-notation",children:[],level:2}],c={toc:u};function h(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is an interesting topic to talk about with the aim of understanding the Unix permissions."),(0,a.kt)("h2",{id:"notation-of-traditional-unix-permissions"},"Notation of traditional Unix permissions"),(0,a.kt)("h2",{id:"symbolic-notation"},"Symbolic notation"),(0,a.kt)("p",null,"The most common form, as used by the following command, is symbolic notation. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ls -l \n")),(0,a.kt)("p",null,"The firs set represents the ",(0,a.kt)("em",{parentName:"p"},"user")," class. The second set represents the ",(0,a.kt)("em",{parentName:"p"},"group")," class. The third set represents the ",(0,a.kt)("em",{parentName:"p"},"others")," class.\nEach of the three characters represent the read, write and execute permissions."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"r")," if reading is permitted, - if is not"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"w")," if writting is permitted, - if is not"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"x")," if execution is permitted, - if is not")),(0,a.kt)("p",null,"Example: ",(0,a.kt)("strong",{parentName:"p"},"-rwxr-xr-x"),": a regular file whose user class has full permissions and whose group and others classes have only the read and execute permissions."),(0,a.kt)("p",null,"To represent the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"setuid")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"setgid"))," and ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"sticky"))," attributes, the executable character ( x or -) is modified. Though these attributes affect the overall file, not only users in one class, the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"setuid"))," attribute modifies the executable character in the triad for the user, the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"setgid"))," attribute modifies the executable character in the triad for the group and the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"sticky"))," attribure modifies the executable character in the triad for others. For the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"setuid"))," or ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"setgid"))," attributes, in the first or second triad, the ",(0,a.kt)("em",{parentName:"p"},"x")," becomes ",(0,a.kt)("em",{parentName:"p"},"s")," and the - becomes ",(0,a.kt)("em",{parentName:"p"},"s"),". For the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"sticky"))," attribute, in the third triad, the ",(0,a.kt)("em",{parentName:"p"},"x")," becomes ",(0,a.kt)("em",{parentName:"p"},"t")," and the - becomes ",(0,a.kt)("em",{parentName:"p"},"T"),"."))}h.isMDXComponent=!0}}]);