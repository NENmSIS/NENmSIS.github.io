"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3748],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=l,k=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(k,o(o({ref:t},s),{},{components:r})):n.createElement(k,o({ref:t},s))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2952:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return c}});var n=r(3117),l=(r(7294),r(3905));const a={},o=void 0,i={unversionedId:"Cibersecurity/Red Team/Windows/Hack with Powershell",id:"Cibersecurity/Red Team/Windows/Hack with Powershell",title:"Hack with Powershell",description:"First, we connect to the machine:",source:"@site/docs/Cibersecurity/Red Team/Windows/Hack with Powershell.md",sourceDirName:"Cibersecurity/Red Team/Windows",slug:"/Cibersecurity/Red Team/Windows/Hack with Powershell",permalink:"/docs/Cibersecurity/Red Team/Windows/Hack with Powershell",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Nmap",permalink:"/docs/Cibersecurity/Red Team/Tools/Nmap"},next:{title:"Archetype THM{}",permalink:"/docs/Cibersecurity/Red Team/Writeups/Archetype THM{}"}},u={},c=[{value:"Basic Powershell commands",id:"basic-powershell-commands",level:3},{value:"Enumeration",id:"enumeration",level:3},{value:"Resources",id:"resources",level:3}],s={toc:c};function p(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"First, we connect to the machine:\n",(0,l.kt)("inlineCode",{parentName:"p"},"xfreerdp /u:Administrator /p:BHN2UVw0Q /cert:ignore /v:10.10.60.147")),(0,l.kt)("h3",{id:"basic-powershell-commands"},"Basic Powershell commands"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Find a file  with a particular name")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Get-ChildItem -Path C:\\ -Include *nameofthefile* -File -Recurse -ErrorAction SilentlyContinue\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Specify the contents of the file ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Get-Content "C:\\Program Files\\interesting-file.txt.txt"\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Get the MD5 hash of a file")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Get-FileHash -Path "C:\\Program Files\\interesting-file.txt.txt" -Algorithm MD5\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Get the current directory")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Get-Location\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Make a request to a web server")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Invoke-WebRequest\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Base64 decode")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Get-ChildItem -Path C:/ -Include b64.txt -Recurse -File\n")),(0,l.kt)("h3",{id:"enumeration"},"Enumeration"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"List users")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Get-LocalUser\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Get the User with an specific SID")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Get-LocalUser -SID "S-1-5-21-1394777289-3961777894-1791813945-501"\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Get users without passwords")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Get-LocalUser | Where-Object -Property PasswordRequired -Match false\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Get Localgroups")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Get-LocalGroup | measure\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Get the IP address info")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Get-NetIPAddress\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Count listening ports")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Get-NetTCPConnection | Where-Object -Property State -Match Listen | measure\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"List listening ports")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Get-NetTCPConnection | Where-Object -Property State -Match Listen\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Show the number of patches")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Get-Hotfix | measure\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Find the contents of a backup file")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'\nGet-ChildItem -Path C:\\ -Include *.bak* -File -Recurse -ErrorAction SilentlyContinue\n\nGet-Content "C:\\Program Files (x86)\\Internet Explorer\\passwords.bak.txt"\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Find a file containing a string")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Get-ChildItem",metastring:"C:* -Recurse | Select-String -pattern API_KEY","C:*":!0,"-Recurse":!0,"|":!0,"Select-String":!0,"-pattern":!0,API_KEY:!0},"")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"List processes ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Get-Process\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Get scheduled task")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Get-ScheduledTask -TaskName new-sched-task\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Know the owner of a path/directory")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Get-Acl c:/\n")),(0,l.kt)("h3",{id:"resources"},"Resources"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/powershell/scripting/developer/cmdlet/approved-verbs-for-windows-powershell-commands?view=powershell-7"},"Powershell verbs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/where-object?view=powershell-7.2&viewFallbackFrom=powershell-6"},"Operators")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://learnxinyminutes.com/docs/powershell/"},"Scripting Guide"))))}p.isMDXComponent=!0}}]);