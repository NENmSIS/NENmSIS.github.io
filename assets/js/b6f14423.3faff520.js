"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7596],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=u(n),d=l,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:l,o[1]=a;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9358:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return u}});var r=n(3117),l=(n(7294),n(3905));const i={},o=void 0,a={unversionedId:"Cibersecurity/Red Team/Network Services",id:"Cibersecurity/Red Team/Network Services",title:"Network Services",description:"SMB (Server Message Block) 445/TCP",source:"@site/docs/Cibersecurity/Red Team/Network Services.md",sourceDirName:"Cibersecurity/Red Team",slug:"/Cibersecurity/Red Team/Network Services",permalink:"/docs/Cibersecurity/Red Team/Network Services",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Linux Privilege Escalation",permalink:"/docs/Cibersecurity/Red Team/Linux/Linux Privilege Escalation"},next:{title:"Passive Reconnaisance",permalink:"/docs/Cibersecurity/Red Team/Passive Reconnaisance"}},s={},u=[{value:"SMB (Server Message Block) 445/TCP",id:"smb-server-message-block-445tcp",level:2},{value:"Enumerating SMB",id:"enumerating-smb",level:3},{value:"enum4linux options IP",id:"enum4linux-options-ip",level:4},{value:"Exploiting SMB",id:"exploiting-smb",level:3},{value:"smbclient //IP/SHARE",id:"smbclient-ipshare",level:4},{value:"Telnet 23/TCP",id:"telnet-23tcp",level:2},{value:"Enumerating Telnet",id:"enumerating-telnet",level:3},{value:"Exploiting SMB",id:"exploiting-smb-1",level:3},{value:"Bruteforce (Hacktricks)",id:"bruteforce-hacktricks",level:4},{value:"telnet IP",id:"telnet-ip",level:4},{value:"FTP (File Transfer Protocol) 21/TCP",id:"ftp-file-transfer-protocol-21tcp",level:2},{value:"Enumerating FTP",id:"enumerating-ftp",level:3},{value:"Exploiting FTP",id:"exploiting-ftp",level:3},{value:"Bruteforce (Hacktricks)",id:"bruteforce-hacktricks-1",level:4},{value:"Anonymous login",id:"anonymous-login",level:4},{value:"NFS (Network File System)  2049/TCP",id:"nfs-network-file-system--2049tcp",level:2},{value:"Enumerating NFS",id:"enumerating-nfs",level:3},{value:"Useful nmap scripts",id:"useful-nmap-scripts",level:4},{value:"Mounting",id:"mounting",level:4},{value:"Exploiting NFS",id:"exploiting-nfs",level:3},{value:"SMTP 25,465,587/TCP",id:"smtp-25465587tcp",level:2},{value:"Enumerating SMTP",id:"enumerating-smtp",level:3},{value:"Exploiting SMTP",id:"exploiting-smtp",level:3},{value:"Mysql 3306/TCP",id:"mysql-3306tcp",level:2},{value:"Connect",id:"connect",level:3},{value:"Local",id:"local",level:4},{value:"Remote",id:"remote",level:4},{value:"Enumerating Mysql",id:"enumerating-mysql",level:3},{value:"Brute force (Hacktricks)",id:"brute-force-hacktricks",level:4},{value:"Exploiting Mysql",id:"exploiting-mysql",level:3},{value:"Tcpdump",id:"tcpdump",level:2},{value:"SSH",id:"ssh",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"smb-server-message-block-445tcp"},"SMB (Server Message Block) 445/TCP"),(0,l.kt)("p",null,"Microsoft Windows OS have client and server SMB protocol support. Samba, an open source server that supports the SMB protocol, was released for Unix systems."),(0,l.kt)("h3",{id:"enumerating-smb"},"Enumerating SMB"),(0,l.kt)("h4",{id:"enum4linux-options-ip"},"enum4linux ","[options]"," IP"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"-U")," get Userlist"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"-M")," get machine list"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"-N")," get namelist dump (different from -U and -M)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"-S")," get sharelist"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"-P")," get password policy information"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"-G")," get group and member list"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"-a")," all of the above (full basic enumeration)")),(0,l.kt)("h3",{id:"exploiting-smb"},"Exploiting SMB"),(0,l.kt)("h4",{id:"smbclient-ipshare"},"smbclient //","[IP]","/","[SHARE]"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"-U ","[name]")," to specify the user"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"-p ","[port]")," to specify the port")),(0,l.kt)("p",null,"Sometimes is enough trying with Anonymous username and no password."),(0,l.kt)("h2",{id:"telnet-23tcp"},"Telnet 23/TCP"),(0,l.kt)("p",null,"Allows with the use of a telnet client, to connect to and execute commands on a remote machine that's hosting a telnet server."),(0,l.kt)("h3",{id:"enumerating-telnet"},"Enumerating Telnet"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},'nmap -n -sV -Pn --script "',(0,l.kt)("em",{parentName:"strong"},"telnet"),' and safe" -p 23 \\<IP',">"))),(0,l.kt)("h3",{id:"exploiting-smb-1"},"Exploiting SMB"),(0,l.kt)("h4",{id:"bruteforce-hacktricks"},"Bruteforce (Hacktricks)"),(0,l.kt)("h4",{id:"telnet-ip"},"telnet ","[IP][Port]"),(0,l.kt)("h2",{id:"ftp-file-transfer-protocol-21tcp"},"FTP (File Transfer Protocol) 21/TCP"),(0,l.kt)("h3",{id:"enumerating-ftp"},"Enumerating FTP"),(0,l.kt)("p",null,"With nmap"),(0,l.kt)("h3",{id:"exploiting-ftp"},"Exploiting FTP"),(0,l.kt)("h4",{id:"bruteforce-hacktricks-1"},"Bruteforce (Hacktricks)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Ex: ",(0,l.kt)("strong",{parentName:"li"},"nmap --script ftp-","*"," -p 21 \\<ip",">"))),(0,l.kt)("h4",{id:"anonymous-login"},"Anonymous login"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ftp IP")," (anonymous, anonymous)")),(0,l.kt)("h2",{id:"nfs-network-file-system--2049tcp"},"NFS (Network File System)  2049/TCP"),(0,l.kt)("h3",{id:"enumerating-nfs"},"Enumerating NFS"),(0,l.kt)("h4",{id:"useful-nmap-scripts"},"Useful nmap scripts"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"nfs-ls #List NFS exports and check permissions\nnfs-showmount #Like showmount -e\nnfs-statfs #Disk statistics and info from NFS share\n")),(0,l.kt)("h4",{id:"mounting"},"Mounting"),(0,l.kt)("p",null,"To know ",(0,l.kt)("strong",{parentName:"p"},"which folder")," has the server available to mount you ask it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"showmount -e <IP>\n")),(0,l.kt)("p",null,"Then mount it using:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mount -t nfs [-o vers=2] <ip>:<remote_folder> <local_folder> -o nolock\n")),(0,l.kt)("h3",{id:"exploiting-nfs"},"Exploiting NFS"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.pentestpartners.com/security-blog/using-nfsshell-to-compromise-older-environments/"},"NSFShell")),(0,l.kt)("h2",{id:"smtp-25465587tcp"},"SMTP 25,465,587/TCP"),(0,l.kt)("h3",{id:"enumerating-smtp"},"Enumerating SMTP"),(0,l.kt)("h3",{id:"exploiting-smtp"},"Exploiting SMTP"),(0,l.kt)("h2",{id:"mysql-3306tcp"},"Mysql 3306/TCP"),(0,l.kt)("h3",{id:"connect"},"Connect"),(0,l.kt)("h4",{id:"local"},"Local"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql -u root # Connect to root without password\nmysql -u root -p # A password will be asked (check someone)\n")),(0,l.kt)("h4",{id:"remote"},"Remote"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql -h <Hostname> -u root\nmysql -h <Hostname> -u root@localhost\n")),(0,l.kt)("h3",{id:"enumerating-mysql"},"Enumerating Mysql"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"nmap -sV -p 3306 --script mysql-audit,mysql-databases,mysql-dump-hashes,mysql-empty-password,mysql-enum,mysql-info,mysql-query,mysql-users,mysql-variables,mysql-vuln-cve2012-2122 <IP>\n")),(0,l.kt)("h4",{id:"brute-force-hacktricks"},"Brute force (Hacktricks)"),(0,l.kt)("h3",{id:"exploiting-mysql"},"Exploiting Mysql"),(0,l.kt)("h2",{id:"tcpdump"},"Tcpdump"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo tcpdump port 110 -A\n")),(0,l.kt)("h2",{id:"ssh"},"SSH"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ssh username@MACHINE_IP\nscp username@MACHINE_IP:/path/archive ~ # To transfer files securely\nscp fileto transfer username@MACHINE_IP:/destinypath\n")))}c.isMDXComponent=!0}}]);