"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[104],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},72:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return d}});var a=n(3117),i=(n(7294),n(3905));const r={title:"Command Line",updated:new Date("2022-10-19T20:57:47.000Z"),created:new Date("2022-06-28T17:31:58.000Z"),latitude:56.9496487,longitude:24.1051864,altitude:0},o="The Bash Environment",l={unversionedId:"Cibersecurity/Red Team/OSCP Preparation/Command Line",id:"Cibersecurity/Red Team/OSCP Preparation/Command Line",title:"Command Line",description:"Envoronment Variables",source:"@site/docs/Cibersecurity/Red Team/OSCP Preparation/Command Line.md",sourceDirName:"Cibersecurity/Red Team/OSCP Preparation",slug:"/Cibersecurity/Red Team/OSCP Preparation/Command Line",permalink:"/docs/Cibersecurity/Red Team/OSCP Preparation/Command Line",draft:!1,tags:[],version:"current",frontMatter:{title:"Command Line",updated:"2022-10-19T20:57:47.000Z",created:"2022-06-28T17:31:58.000Z",latitude:56.9496487,longitude:24.1051864,altitude:0},sidebar:"tutorialSidebar",previous:{title:"Network Services",permalink:"/docs/Cibersecurity/Red Team/Network Services"},next:{title:"Passive Reconnaisance",permalink:"/docs/Cibersecurity/Red Team/Passive Reconnaisance"}},s={},d=[{value:"Envoronment Variables",id:"envoronment-variables",level:2},{value:"Bash History",id:"bash-history",level:2},{value:"Piping and Redirection",id:"piping-and-redirection",level:2},{value:"Redirecting to a New File",id:"redirecting-to-a-new-file",level:3},{value:"Redirecting to a Existing File",id:"redirecting-to-a-existing-file",level:3},{value:"Redirecting from a File",id:"redirecting-from-a-file",level:3},{value:"Piping",id:"piping",level:3},{value:"Text Searching and Manipulation",id:"text-searching-and-manipulation",level:2},{value:"grep",id:"grep",level:3},{value:"sed",id:"sed",level:3},{value:"cut",id:"cut",level:3},{value:"awk",id:"awk",level:3},{value:"Other commands",id:"other-commands",level:3},{value:"Editing Files from the Command Line",id:"editing-files-from-the-command-line",level:2},{value:"nano",id:"nano",level:3},{value:"vi",id:"vi",level:3},{value:"Comparing Files",id:"comparing-files",level:2},{value:"comm",id:"comm",level:3},{value:"diff",id:"diff",level:3},{value:"vimdiff",id:"vimdiff",level:3},{value:"Managin Processes",id:"managin-processes",level:2},{value:"Background Processes (bg)",id:"background-processes-bg",level:3},{value:"Jobs Control: jobs and fg",id:"jobs-control-jobs-and-fg",level:3},{value:"Process Control: ps and kill",id:"process-control-ps-and-kill",level:3},{value:"File and Command Monitoring",id:"file-and-command-monitoring",level:2},{value:"tail",id:"tail",level:3},{value:"watch",id:"watch",level:3},{value:"Downloading Files",id:"downloading-files",level:2},{value:"wget",id:"wget",level:3},{value:"curl",id:"curl",level:3},{value:"axel",id:"axel",level:3}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"the-bash-environment"},"The Bash Environment"),(0,i.kt)("h2",{id:"envoronment-variables"},"Envoronment Variables"),(0,i.kt)("p",null,"To view the contents of a given environment variable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"echo $PATH\necho $USER\necho $HOME\n")),(0,i.kt)("p",null,"To define a variable, we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"export")," and use it after:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export b=192.168.80.12\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ping $b\n")),(0,i.kt)("p",null,"To view the defaul environment variables, we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"env")),(0,i.kt)("h2",{id:"bash-history"},"Bash History"),(0,i.kt)("p",null,"To display the bash history, we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"history")," command. After using it, to re-type automatically one line, is possible to use ",(0,i.kt)("inlineCode",{parentName:"p"},"!")," followed by the target line."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"!34\n")),(0,i.kt)("p",null,"And with ",(0,i.kt)("inlineCode",{parentName:"p"},"!!"),", is possible to repeat the last command.\nIs also possible to use the ",(0,i.kt)("em",{parentName:"p"},"reverse-i-search")," facility to get the most recent command that contains one string. For that, we should hold down ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl")," and pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"R")," will invoke the facility. We just need to write one word and press ",(0,i.kt)("inlineCode",{parentName:"p"},"Enter")," to execute it."),(0,i.kt)("h2",{id:"piping-and-redirection"},"Piping and Redirection"),(0,i.kt)("p",null,"Every program run from the command line has three data streams connected to it that serve as communication channels with the external environment."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Stream Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Standard Input (STDIN)"),(0,i.kt)("td",{parentName:"tr",align:null},"Data fed into the program")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Standard Output (STDOUT)"),(0,i.kt)("td",{parentName:"tr",align:null},"Output from the program (defaults to terminal)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Standard Error (STDERR)"),(0,i.kt)("td",{parentName:"tr",align:null},"Error messages (defaults to terminal)")))),(0,i.kt)("p",null,"Piping (using the | operator) and redirection (using the > and < operators) connects these streams between program and files."),(0,i.kt)("h3",{id:"redirecting-to-a-new-file"},"Redirecting to a New File"),(0,i.kt)("p",null,"If the file doesn't exists, it will be created and the output redirected. If the file already exists, that file's content will be replaced."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'echo "test" > redirection_file.txt\n')),(0,i.kt)("h3",{id:"redirecting-to-a-existing-file"},"Redirecting to a Existing File"),(0,i.kt)("p",null,"To append additional data to an existing file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'echo "test" >> redirection_file.txt\n')),(0,i.kt)("h3",{id:"redirecting-from-a-file"},"Redirecting from a File"),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"<"),' operator, we can send data "other way". In the example, we count the number of characters.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wc -m < redirection_file.txt\n")),(0,i.kt)("h3",{id:"piping"},"Piping"),(0,i.kt)("p",null,"It is used to redirect the output of one command as input of another."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cat redirection_file.txt | wc -m\n")),(0,i.kt)("h2",{id:"text-searching-and-manipulation"},"Text Searching and Manipulation"),(0,i.kt)("h3",{id:"grep"},"grep"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"grep")," searches text files for the occurrence of a given regular expression and outputs any line containing a match to the standard output, the screen. Some of the most commonly used switches are ",(0,i.kt)("inlineCode",{parentName:"p"},"-r")," for recursive searching and ",(0,i.kt)("inlineCode",{parentName:"p"},"-i")," to ignore text case."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ls -la /usr/bin | grep x86\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://quickref.me/grep"},"https://quickref.me/grep")),(0,i.kt)("h3",{id:"sed"},"sed"),(0,i.kt)("p",null,"It performs text editing on a stream of text, either a set of specific files or standard output."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"echo \"That is so easy\" | sed 's/easy/difficult/'\n        That is so difficult\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://quickref.me/sed"},"https://quickref.me/sed")),(0,i.kt)("h3",{id:"cut"},"cut"),(0,i.kt)("p",null,"It is used to extract a section of text from a line and output it to the standard output. Some switches are: ",(0,i.kt)("inlineCode",{parentName:"p"},"-f")," for the field number we're cutting and ",(0,i.kt)("inlineCode",{parentName:"p"},"-d")," for the field delimiter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'echo "This is a text, but also a string" | cut -f 2 -d "," \n        but also a string\n\ncut -f 1 -d ":" /etc/passwd\n        root\n        daemon\n        bin\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://bencane.com/2012/10/22/cheat-sheet-cutting-text-with-cut/"},"https://bencane.com/2012/10/22/cheat-sheet-cutting-text-with-cut/")),(0,i.kt)("h3",{id:"awk"},"awk"),(0,i.kt)("p",null,"Is a programming language designed for text precessing and is typically used as a data extraction and reporting tool. The difference with ",(0,i.kt)("inlineCode",{parentName:"p"},"cut")," it that ",(0,i.kt)("inlineCode",{parentName:"p"},"awk")," can accept more than a single character."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'echo "hello::there::friend" | awk -F "::" \'{print $1, $3}\'\n        hello friend\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://quickref.me/awk"},"https://quickref.me/awk")),(0,i.kt)("h3",{id:"other-commands"},"Other commands"),(0,i.kt)("p",null,"There are other useful commands that we can use to filter the data: ",(0,i.kt)("inlineCode",{parentName:"p"},"head"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"tail"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"sort"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"uniq")),(0,i.kt)("h2",{id:"editing-files-from-the-command-line"},"Editing Files from the Command Line"),(0,i.kt)("h3",{id:"nano"},"nano"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.nano-editor.org/dist/latest/cheatsheet.html"},"https://www.nano-editor.org/dist/latest/cheatsheet.html")),(0,i.kt)("h3",{id:"vi"},"vi"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://quickref.me/vim"},"https://quickref.me/vim"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikibooks.org/wiki/Learning_the_vi_Editor/vi_Reference"},"https://en.wikibooks.org/wiki/Learning","_","the","_","vi","_","Editor/vi","_","Reference")),(0,i.kt)("h2",{id:"comparing-files"},"Comparing Files"),(0,i.kt)("h3",{id:"comm"},"comm"),(0,i.kt)("p",null,"Compares two text files, displaying the lines that are unique to each one, as well as the lines they have in common. It outputs three space-offset columns: the first contains lines that are unique to the first file or argument; the second contains lines that are unique to the second file or argument; and the third column contains lines that are shared by both files. The -nswitch, where \u201cn\u201d is either 1, 2, or 3, can be used to suppress one or more columns, depending on the need."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"comm 1.txt 2.txt\n                            10.10.10.1\n                            10.10.10.2\n10.10.10.3\n10.10.10.4\n                10.10.10.5\n                10.10.10.6\n\n")),(0,i.kt)("h3",{id:"diff"},"diff"),(0,i.kt)("p",null,"Is used to detect differences between files, similar to the comm command. Some switches are context format ",(0,i.kt)("inlineCode",{parentName:"p"},"-c")," and the unified format ",(0,i.kt)("inlineCode",{parentName:"p"},"-u"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"diff 1.txt 2.txt\n    3,4c3,4\n    < 10.10.10.3\n    < 10.10.10.4\n    ---\n    > 10.10.10.5\n    > 10.10.10.6\n")),(0,i.kt)("h3",{id:"vimdiff"},"vimdiff"),(0,i.kt)("p",null,"Opens vim with multiple files, one in each window."),(0,i.kt)("h2",{id:"managin-processes"},"Managin Processes"),(0,i.kt)("h3",{id:"background-processes-bg"},"Background Processes (bg)"),(0,i.kt)("p",null,"The quickest way to background a process is to append an ampersand ",(0,i.kt)("inlineCode",{parentName:"p"},"&")," to the end of the command to send it to the background immediately after it starts. The job is now running in the background and we can continue using the terminal as we wish."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ping -c 400 localhost > ping_results.txt &\n")),(0,i.kt)("p",null,"Once a job has been suspended, we can resume it in the background by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"bg")," command."),(0,i.kt)("h3",{id:"jobs-control-jobs-and-fg"},"Jobs Control: jobs and fg"),(0,i.kt)("p",null,"To cancel a command, we use ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl")," ",(0,i.kt)("inlineCode",{parentName:"p"},"C")," and to suspend a job, ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Z"),".\nThe built-in ",(0,i.kt)("inlineCode",{parentName:"p"},"jobs")," utility lists the jobs that are running in the current terminal session, while ",(0,i.kt)("inlineCode",{parentName:"p"},"fg"),"\nreturns a job to the foreground."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ping -c 400 localhost > ping_results.txt\n^Z\nfind / -name  sbd.exe\n^Z\njobs    \n        [1]  - suspended  ping -c 400 localhost > ping_results.txt\n        [2]  + suspended  find / -name sbd.exe\nfg %1\n        [1]  - continued  ping -c 400 localhost > ping_results.txt\n^C\njobs\n        [2]  + suspended  find / -name sbd.exe\nfg\n        [2]  - continued  find / -name sbd.exe\n")),(0,i.kt)("p",null,"There are various ways to refer to a job in the shell."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"%Number")," : Refers to a job number such as %1 or %2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"%String")," : Refers to the beginning of the suspended command\u2019s name such as"),(0,i.kt)("li",{parentName:"ul"},"%commandNameHere or %ping"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"%","+"," OR %%")," : Refers to the current job"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"%-")," : Refers to the previous job")),(0,i.kt)("h3",{id:"process-control-ps-and-kill"},"Process Control: ps and kill"),(0,i.kt)("p",null,"One of the most useful commands to monitor processes on mostly any Unix-like operating systemis ",(0,i.kt)("inlineCode",{parentName:"p"},"ps")," (short for process status). Unlike the ",(0,i.kt)("inlineCode",{parentName:"p"},"jobs")," command, ",(0,i.kt)("inlineCode",{parentName:"p"},"ps")," lists processes system-wide, not only for the current terminal session. This utility is considered a standard on Unix-like OSes and its name is so well-recognized that even on Windows PowerShell, ",(0,i.kt)("inlineCode",{parentName:"p"},"ps")," is a predefined command alias for the Get-Process cmdlet, which essentially serves the same purpose."),(0,i.kt)("p",null,"As an example, let\u2019s start the vi text editor and then try to find its process ID (PID) from the command line by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"ps")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"vi\n^Z\nps -ef \n        UID          PID    PPID  C STIME TTY          TIME CMD\n        kali      763720  482169  0 14:11 pts/3    00:00:00 vim\n# The -ef options we used above stand for:\n#   e:select all processes\n#   f: display full format listing (UID, PID, PPID, etc.)\n# for more info man ps\nps -fC vim\n")),(0,i.kt)("p",null,"Let\u2019s say we now want to stop the vi process without interacting with the GUI. In order to use kill, we need the PID of the process we want to send the signal to."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kill 763720\n")),(0,i.kt)("h2",{id:"file-and-command-monitoring"},"File and Command Monitoring"),(0,i.kt)("h3",{id:"tail"},"tail"),(0,i.kt)("p",null,"The most common use of ",(0,i.kt)("inlineCode",{parentName:"p"},"tail")," is to monitor log file entries as they are being written. The ",(0,i.kt)("inlineCode",{parentName:"p"},"-f")," option (follow) is very useful as it continuously updates the output as the target file grows. Another convenient switch is ",(0,i.kt)("inlineCode",{parentName:"p"},"-nX"),", which outputs the last \u201cX\u201d number of lines, instead of the default value of 10."),(0,i.kt)("h3",{id:"watch"},"watch"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"watch")," command is used to run a designated command at regular intervals. By default, it runsevery two seconds but we can specify a different interval by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"-n X")," option to have it run every \u201cX\u201d number of seconds."),(0,i.kt)("h2",{id:"downloading-files"},"Downloading Files"),(0,i.kt)("h3",{id:"wget"},"wget"),(0,i.kt)("p",null,"The wget command, which we will use extensively, downloads files using the HTTP/HTTPS and FTP protocols."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# The switch -O save the destination file with a different name on the local machine\nwget -O new_name.pdf https://www.testweb.com/reports/document.pdf\n")),(0,i.kt)("h3",{id:"curl"},"curl"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"curl")," is a tool to transfer data to or from a server using a host of protocols including IMAP/S, POP3/S, SCP, SFTP, SMB/S, SMTP/S, TELNET, TFTP, and others. A penetration tester can use this to download or upload files and build complex requests. Its most basic use is very similar to wget."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -o new_name.pdf https://www.testweb.com/reports/document.pdf\n")),(0,i.kt)("h3",{id:"axel"},"axel"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"axel")," is a download accelerator that transfers a file from a FTP or HTTP server through multiple connections. This tool has a vast array of features, but the most common is ",(0,i.kt)("inlineCode",{parentName:"p"},"-n"),", which is used to specify the number of multiple connections to use. In the following example, we are also using the ",(0,i.kt)("inlineCode",{parentName:"p"},"-a")," option for a more concise progress indicator and -o to specify a different file name for the downloaded file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"axel -a -n 20 -o new_name.pdf https://www.testweb.com/reports/document.pdf\n")))}c.isMDXComponent=!0}}]);