(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{APIU:function(l,n,u){"use strict";u.r(n),u.d(n,"ClientmanagementModuleNgFactory",function(){return E});var e=u("8Y7J");class t{}var a=u("pMnS"),s=u("Ow+e"),d=u("dTnG"),o=u("nInX"),i=u("Kxz1"),r=u("3gKG"),c=u("ccN7"),p=u("G0yt"),m=u("iInd"),h=u("SVse"),b=u("hrfs"),g=u("uilG"),f=u("aLe/");class v{constructor(){this.statbox=[{icon:"folder",title:"My Products",text:"Manage Products",notification:6},{icon:"people",title:"My Clients",text:"Manage Users",notification:5},{icon:"help",title:"Support Tickets",text:"View Tickets",notification:3},{icon:"graphic_eq",title:"Management",text:"Manage Product",notification:2}],this.countrytable=[{countryflag:"assets/img/dashboard/widgets/country-1.jpg",entrance:725,bouncerate:17.24,exits:7.65},{countryflag:"assets/img/dashboard/widgets/country-2.jpg",entrance:890,bouncerate:12.9,exits:9.12},{countryflag:"assets/img/dashboard/widgets/country-3.jpg",entrance:729,bouncerate:20.75,exits:14.29},{countryflag:"assets/img/dashboard/widgets/country-4.jpg",entrance:316,bouncerate:32.09,exits:10.99}],this.PieChartLabels=["USA","Germany","UK","Russia","France"],this.PieChartType="pie",this.PieChartData=[{label:"Users (thousands)",backgroundColor:["#141433","#f7b11b","#ff6c60","#8663e1","#08bf6f"],data:[725,890,729,316,275]}],this.PieChartOptions={responsive:!0,title:{display:!1,text:"Users By Country"},legend:{display:!1}},this.lineChartType="line",this.UsertrafficChartLabels=["Jan-11","Jan-12","Jan-13","Jan-14","Jan-15","Jan-16","Jan-17","Jan-18","Jan-19"],this.UsertrafficChartData=[{label:"Users",borderColor:"#141433",pointBorderColor:"#141433",pointBackgroundColor:"#141433",pointHoverBackgroundColor:"#141433",pointHoverBorderColor:"#141433",pointBorderWidth:1,pointHoverRadius:4,pointHoverBorderWidth:1,pointRadius:2,fill:!0,backgroundColor:"rgba(53,127,250,0.4)",borderWidth:1,data:[1800,1600,2300,2800,3600,2900,3e3,3800,3600]}],this.UsertrafficChartOptions={responsive:!0,legend:{display:!1,position:"bottom"},scales:{yAxes:[{ticks:{fontColor:"#A8A9AD",beginAtZero:!0,maxTicksLimit:200,padding:20},gridLines:{drawTicks:!1,display:!1}}],xAxes:[{gridLines:{zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#A8A9AD"}}]}},this.UserpchChartLabels=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"],this.UserpchChartOptions={responsive:!0,elements:{line:{tension:0}},legend:{display:!1,position:"bottom"},scales:{yAxes:[{display:!1}],xAxes:[{display:!1}]}},this.engagedChartData=[{label:"Data",borderColor:"#07be6e",pointBorderColor:"#07be6e",pointBackgroundColor:"#07be6e",pointHoverBackgroundColor:"#07be6e",pointHoverBorderColor:"#07be6e",pointBorderWidth:0,pointHoverRadius:0,pointHoverBorderWidth:0,pointRadius:0,fill:!0,backgroundColor:"rgba(7, 190, 110,0.3)",borderWidth:2,data:[5,1,8,1,3,7,8,4,3,6,8,9,4,5,8,2,6,4,8,3]}],this.pageimmpChartData=[{label:"Data",borderColor:"#07be6e",pointBorderColor:"#07be6e",pointBackgroundColor:"#07be6e",pointHoverBackgroundColor:"#07be6e",pointHoverBorderColor:"#07be6e",pointBorderWidth:0,pointHoverRadius:0,pointHoverBorderWidth:0,pointRadius:0,fill:!0,backgroundColor:"rgba(7, 190, 110,0.3)",borderWidth:2,data:[8,5,1,8,5,9,4,3,4,5,8,4,4,8,9,5,5,1,3,6]}],this.tickets=[{userimg:"assets/img/dashboard/employee-list/employee-(2).jpg",username:"Lorem ipsum dolor",date:"February 24, 2021",query:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ... ",comment:16,attachment:3,open:!0,close:!1},{userimg:"assets/img/dashboard/employee-list/employee-(4).jpg",username:"Lorem ipsum dolor",date:"February 24, 2021",query:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ... ",comment:11,attachment:1,open:!0,close:!1},{userimg:"assets/img/dashboard/employee-list/employee-(1).jpg",username:"Lorem ipsum dolor",date:"February 24, 2021",query:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ... ",comment:21,attachment:5,open:!1,close:!0}],this.currentUserId=1,this.chats=[{userImg:"assets/img/dashboard/employee-list/employee-(5).jpg",userId:1,time:"10:33 pm",message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{userImg:"assets/img/dashboard/employee-list/employee-(1).jpg",userId:2,time:"11:01 pm",message:"I'm doing great, thanks for asking"},{userImg:"assets/img/dashboard/employee-list/employee-(1).jpg",userId:2,time:"11:01 pm",message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{userImg:"assets/img/dashboard/employee-list/employee-(5).jpg",userId:1,time:"11:03 pm",message:"It is a long established fact that a reader will be distracted by the readable content of a page"},{userImg:"assets/img/dashboard/employee-list/employee-(5).jpg",userId:1,time:"11:03 pm",message:"There are many variations of passages of Lorem Ipsum available"}]}getChatInitialMsg(l,n){var u="";return 0===n||0!==n&&this.chats[n-1].userId!==l.userId?u+='<div class="ms-chat-status ms-status-online ms-chat-img"><img src="'+l.userImg+'" class="ms-img-round" alt="people"></div>':u="",u}getChatInitialTime(l,n){var u="";return n===this.chats.length-1||n+1<=this.chats.length-1&&this.chats[n+1].userId!==l.userId?u+='<p class="ms-chat-time">'+l.time+"</p>":u="",u}ngOnInit(){}}var y=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function w(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,13,"div",[["class","col-xl-3 col-md-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,12,"a",[["routerLink","/"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,2).onClick(u.button,u.ctrlKey,u.shiftKey,u.altKey,u.metaKey)&&t),t},null,null)),e["\u0275did"](2,671744,null,0,m.n,[m.m,m.a,h.k],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275eld"](3,0,null,null,10,"div",[["class","ms-panel ms-widget ms-panel-hoverable has-border ms-has-new-msg ms-notification-widget"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,1,"span",[["class","msg-count"]],null,null,null,null,null)),(l()(),e["\u0275ted"](5,null,["",""])),(l()(),e["\u0275eld"](6,0,null,null,7,"div",[["class","ms-panel-body media"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(l()(),e["\u0275ted"](8,null,["",""])),(l()(),e["\u0275eld"](9,0,null,null,4,"div",[["class","media-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](10,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e["\u0275ted"](11,null,["",""])),(l()(),e["\u0275eld"](12,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](13,null,["",""]))],function(l,n){l(n,2,0,"/")},function(l,n){l(n,1,0,e["\u0275nov"](n,2).target,e["\u0275nov"](n,2).href),l(n,5,0,n.context.$implicit.notification),l(n,8,0,n.context.$implicit.icon),l(n,11,0,n.context.$implicit.title),l(n,13,0,n.context.$implicit.text)})}function k(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"th",[["scope","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,0,"img",[["alt","flags"]],[[8,"src",4]],null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](4,null,["",""])),e["\u0275ppd"](5,2),(l()(),e["\u0275eld"](6,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](7,null,["","%"])),e["\u0275ppd"](8,2),(l()(),e["\u0275eld"](9,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](10,null,["",""])),e["\u0275ppd"](11,2)],null,function(l,n){l(n,2,0,n.context.$implicit.countryflag);var u=e["\u0275unv"](n,4,0,l(n,5,0,e["\u0275nov"](n.parent,0),n.context.$implicit.entrance,"1.2-2"));l(n,4,0,u);var t=e["\u0275unv"](n,7,0,l(n,8,0,e["\u0275nov"](n.parent,0),n.context.$implicit.bouncerate,"1.2-2"));l(n,7,0,t);var a=e["\u0275unv"](n,10,0,l(n,11,0,e["\u0275nov"](n.parent,0),n.context.$implicit.exits,"1.2-2"));l(n,10,0,a)})}function C(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,6,"div",[],[[8,"className",0]],null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,4,"div",[["class","media-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,2,"div",[["class","ms-chat-text"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](5,null,[" ",""])),(l()(),e["\u0275eld"](6,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){var u=n.component;l(n,0,0,e["\u0275inlineInterpolate"](1,"",n.context.$implicit.userId===u.currentUserId?"ms-chat-bubble ms-chat-message media clearfix ms-chat-outgoing":"ms-chat-bubble ms-chat-message media clearfix ms-chat-incoming","")),l(n,1,0,u.getChatInitialMsg(n.context.$implicit,n.context.index)),l(n,5,0,n.context.$implicit.message),l(n,6,0,u.getChatInitialTime(n.context.$implicit,n.context.index))})}function x(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"span",[["class","badge badge-success"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Open "]))],null,null)}function R(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"span",[["class","badge badge-danger"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Closed "]))],null,null)}function T(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,27,"li",[["class","ms-list-item"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,26,"a",[["class","media clearfix"],["routerLink","/"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,2).onClick(u.button,u.ctrlKey,u.shiftKey,u.altKey,u.metaKey)&&t),t},null,null)),e["\u0275did"](2,671744,null,0,m.n,[m.m,m.a,h.k],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275eld"](3,0,null,null,0,"img",[["class","ms-img-round ms-img-small"]],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,23,"div",[["class","media-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,6,"div",[["class","d-flex justify-content-between"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,1,"h4",[["class","ms-feed-user mb-0"]],null,null,null,null,null)),(l()(),e["\u0275ted"](7,null,["",""])),(l()(),e["\u0275and"](16777216,null,null,1,null,x)),e["\u0275did"](9,16384,null,0,h.n,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,R)),e["\u0275did"](11,16384,null,0,h.n,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](12,0,null,null,3,"span",[["class","my-2 d-block"]],null,null,null,null,null)),(l()(),e["\u0275eld"](13,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["date_range"])),(l()(),e["\u0275ted"](15,null,[" ",""])),(l()(),e["\u0275eld"](16,0,null,null,1,"p",[["class","d-block"]],null,null,null,null,null)),(l()(),e["\u0275ted"](17,null,[" ",""])),(l()(),e["\u0275eld"](18,0,null,null,9,"div",[["class","d-flex justify-content-between align-items-end"]],null,null,null,null,null)),(l()(),e["\u0275eld"](19,0,null,null,8,"div",[["class","ms-feed-controls"]],null,null,null,null,null)),(l()(),e["\u0275eld"](20,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),e["\u0275eld"](21,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["chat"])),(l()(),e["\u0275ted"](23,null,[" "," "])),(l()(),e["\u0275eld"](24,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),e["\u0275eld"](25,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["attachment"])),(l()(),e["\u0275ted"](27,null,[" "," "]))],function(l,n){l(n,2,0,"/"),l(n,9,0,n.context.$implicit.open),l(n,11,0,n.context.$implicit.close)},function(l,n){l(n,1,0,e["\u0275nov"](n,2).target,e["\u0275nov"](n,2).href),l(n,3,0,e["\u0275inlineInterpolate"](1,"",n.context.$implicit.userimg,""),e["\u0275inlineInterpolate"](1,"",n.context.$implicit.username,"")),l(n,7,0,n.context.$implicit.username),l(n,15,0,n.context.$implicit.date),l(n,17,0,n.context.$implicit.query),l(n,23,0,n.context.$implicit.comment),l(n,27,0,n.context.$implicit.attachment)})}function I(l){return e["\u0275vid"](0,[e["\u0275pid"](0,h.e,[e.LOCALE_ID]),(l()(),e["\u0275eld"](1,0,null,null,202,"div",[["class","ms-content-wrapper"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,201,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,w)),e["\u0275did"](4,278528,null,0,h.m,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](5,0,null,null,22,"div",[["class","col-xl-6 col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,21,"div",[["class","ms-panel ms-widget ms-panel-fh"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,4,"div",[["class","ms-panel-header"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Users By Country"])),(l()(),e["\u0275eld"](10,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Your user base based on country"])),(l()(),e["\u0275eld"](12,0,null,null,15,"div",[["class","ms-panel-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](13,0,null,null,14,"div",[["class","table-responsive"]],null,null,null,null,null)),(l()(),e["\u0275eld"](14,0,null,null,13,"table",[["class","table table-hover mb-0"]],null,null,null,null,null)),(l()(),e["\u0275eld"](15,0,null,null,9,"thead",[],null,null,null,null,null)),(l()(),e["\u0275eld"](16,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](17,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Country"])),(l()(),e["\u0275eld"](19,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Users"])),(l()(),e["\u0275eld"](21,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Percentage"])),(l()(),e["\u0275eld"](23,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Exits"])),(l()(),e["\u0275eld"](25,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,k)),e["\u0275did"](27,278528,null,0,h.m,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](28,0,null,null,33,"div",[["class","col-xl-6 col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](29,0,null,null,32,"div",[["class","ms-panel ms-panel-fh"]],null,null,null,null,null)),(l()(),e["\u0275eld"](30,0,null,null,4,"div",[["class","ms-panel-header"]],null,null,null,null,null)),(l()(),e["\u0275eld"](31,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Users"])),(l()(),e["\u0275eld"](33,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Users by country visualized"])),(l()(),e["\u0275eld"](35,0,null,null,26,"div",[["class","ms-panel-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](36,0,null,null,25,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](37,0,null,null,21,"div",[["class","col-xl-4 col-md-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](38,0,null,null,20,"div",[["class","ms-graph-labels column-direction"]],null,null,null,null,null)),(l()(),e["\u0275eld"](39,0,null,null,3,"div",[["class","ms-chart-no-label"]],null,null,null,null,null)),(l()(),e["\u0275eld"](40,0,null,null,0,"span",[["class","bg-success"]],null,null,null,null,null)),(l()(),e["\u0275eld"](41,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["$9,348,319"])),(l()(),e["\u0275eld"](43,0,null,null,3,"div",[["class","ms-chart-no-label"]],null,null,null,null,null)),(l()(),e["\u0275eld"](44,0,null,null,0,"span",[["class","bg-primary"]],null,null,null,null,null)),(l()(),e["\u0275eld"](45,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["$4,344,316"])),(l()(),e["\u0275eld"](47,0,null,null,3,"div",[["class","ms-chart-no-label"]],null,null,null,null,null)),(l()(),e["\u0275eld"](48,0,null,null,0,"span",[["class","bg-warning"]],null,null,null,null,null)),(l()(),e["\u0275eld"](49,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["$518,513"])),(l()(),e["\u0275eld"](51,0,null,null,3,"div",[["class","ms-chart-no-label"]],null,null,null,null,null)),(l()(),e["\u0275eld"](52,0,null,null,0,"span",[["class","bg-danger"]],null,null,null,null,null)),(l()(),e["\u0275eld"](53,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["$348,319"])),(l()(),e["\u0275eld"](55,0,null,null,3,"div",[["class","ms-chart-no-label"]],null,null,null,null,null)),(l()(),e["\u0275eld"](56,0,null,null,0,"span",[["class","bg-secondary"]],null,null,null,null,null)),(l()(),e["\u0275eld"](57,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["$3,416,139"])),(l()(),e["\u0275eld"](59,0,null,null,2,"div",[["class","col-xl-8 col-md-8"]],null,null,null,null,null)),(l()(),e["\u0275eld"](60,0,null,null,1,"canvas",[["baseChart",""]],null,null,null,null,null)),e["\u0275did"](61,999424,null,0,b.a,[e.ElementRef,b.c],{datasets:[0,"datasets"],labels:[1,"labels"],options:[2,"options"],chartType:[3,"chartType"]},null),(l()(),e["\u0275eld"](62,0,null,null,9,"div",[["class","col-xl-7 col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](63,0,null,null,8,"div",[["class","ms-panel ms-panel-fh"]],null,null,null,null,null)),(l()(),e["\u0275eld"](64,0,null,null,4,"div",[["class","ms-panel-header"]],null,null,null,null,null)),(l()(),e["\u0275eld"](65,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["User Traffic"])),(l()(),e["\u0275eld"](67,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Track User Traffic"])),(l()(),e["\u0275eld"](69,0,null,null,2,"div",[["class","ms-panel-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](70,0,null,null,1,"canvas",[["baseChart",""]],null,null,null,null,null)),e["\u0275did"](71,999424,null,0,b.a,[e.ElementRef,b.c],{datasets:[0,"datasets"],labels:[1,"labels"],options:[2,"options"],chartType:[3,"chartType"]},null),(l()(),e["\u0275eld"](72,0,null,null,68,"div",[["class","col-xl-5 col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](73,0,null,null,67,"div",[["class","ms-panel ms-panel-fh ms-facebook-engagements"]],null,null,null,null,null)),(l()(),e["\u0275eld"](74,0,null,null,4,"div",[["class","ms-panel-header"]],null,null,null,null,null)),(l()(),e["\u0275eld"](75,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["User Purchases"])),(l()(),e["\u0275eld"](77,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Track which purchases by month"])),(l()(),e["\u0275eld"](79,0,null,null,61,"div",[["class","ms-panel-body p-0"]],null,null,null,null,null)),(l()(),e["\u0275eld"](80,0,null,null,31,"div",[["class","ms-facebook-page-selection"]],null,null,null,null,null)),(l()(),e["\u0275eld"](81,0,null,null,1,"p",[["class","ms-text-dark"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["March 25, 2021 to April 02, 2021"])),(l()(),e["\u0275eld"](83,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Product: "])),(l()(),e["\u0275eld"](85,0,null,null,26,"div",[["class","dropdown"],["ngbDropdown",""]],[[2,"show",null]],null,null,null,null)),e["\u0275did"](86,1720320,null,2,p.u,[e.ChangeDetectorRef,p.w,h.d,e.NgZone,e.ElementRef,e.Renderer2,[2,p.N]],null,null),e["\u0275qud"](603979776,1,{_menu:0}),e["\u0275qud"](603979776,2,{_anchor:0}),(l()(),e["\u0275eld"](89,0,null,null,3,"a",[["class","has-chevron dropdown-toggle"],["href","javascript:void(0)"],["ngbDropdownToggle",""]],[[1,"aria-expanded",0]],[[null,"click"],[null,"keydown.ArrowUp"],[null,"keydown.ArrowDown"],[null,"keydown.Home"],[null,"keydown.End"],[null,"keydown.Tab"],[null,"keydown.Shift.Tab"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,90).dropdown.toggle()&&t),"keydown.ArrowUp"===n&&(t=!1!==e["\u0275nov"](l,90).dropdown.onKeyDown(u)&&t),"keydown.ArrowDown"===n&&(t=!1!==e["\u0275nov"](l,90).dropdown.onKeyDown(u)&&t),"keydown.Home"===n&&(t=!1!==e["\u0275nov"](l,90).dropdown.onKeyDown(u)&&t),"keydown.End"===n&&(t=!1!==e["\u0275nov"](l,90).dropdown.onKeyDown(u)&&t),"keydown.Tab"===n&&(t=!1!==e["\u0275nov"](l,90).dropdown.onKeyDown(u)&&t),"keydown.Shift.Tab"===n&&(t=!1!==e["\u0275nov"](l,90).dropdown.onKeyDown(u)&&t),t},null,null)),e["\u0275did"](90,16384,null,0,p.z,[p.u,e.ElementRef],null,null),e["\u0275prd"](2048,[[2,4]],p.v,null,[p.z]),(l()(),e["\u0275ted"](-1,null,["Product Name here "])),(l()(),e["\u0275eld"](93,0,null,null,18,"ul",[["class","dropdown-menu"],["ngbDropdownMenu",""]],[[2,"dropdown-menu",null],[2,"show",null],[1,"x-placement",0]],[[null,"keydown.ArrowUp"],[null,"keydown.ArrowDown"],[null,"keydown.Home"],[null,"keydown.End"],[null,"keydown.Enter"],[null,"keydown.Space"],[null,"keydown.Tab"],[null,"keydown.Shift.Tab"]],function(l,n,u){var t=!0;return"keydown.ArrowUp"===n&&(t=!1!==e["\u0275nov"](l,94).dropdown.onKeyDown(u)&&t),"keydown.ArrowDown"===n&&(t=!1!==e["\u0275nov"](l,94).dropdown.onKeyDown(u)&&t),"keydown.Home"===n&&(t=!1!==e["\u0275nov"](l,94).dropdown.onKeyDown(u)&&t),"keydown.End"===n&&(t=!1!==e["\u0275nov"](l,94).dropdown.onKeyDown(u)&&t),"keydown.Enter"===n&&(t=!1!==e["\u0275nov"](l,94).dropdown.onKeyDown(u)&&t),"keydown.Space"===n&&(t=!1!==e["\u0275nov"](l,94).dropdown.onKeyDown(u)&&t),"keydown.Tab"===n&&(t=!1!==e["\u0275nov"](l,94).dropdown.onKeyDown(u)&&t),"keydown.Shift.Tab"===n&&(t=!1!==e["\u0275nov"](l,94).dropdown.onKeyDown(u)&&t),t},null,null)),e["\u0275did"](94,16384,[[1,4]],1,p.x,[p.u,e.ElementRef],null,null),e["\u0275qud"](603979776,3,{menuItems:1}),(l()(),e["\u0275eld"](96,0,null,null,15,"li",[["class","ms-dropdown-list"]],null,null,null,null,null)),(l()(),e["\u0275eld"](97,0,null,null,4,"a",[["class","media p-2"],["routerLink","/"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,98).onClick(u.button,u.ctrlKey,u.shiftKey,u.altKey,u.metaKey)&&t),t},null,null)),e["\u0275did"](98,671744,null,0,m.n,[m.m,m.a,h.k],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275eld"](99,0,null,null,2,"div",[["class","media-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](100,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Product 1"])),(l()(),e["\u0275eld"](102,0,null,null,4,"a",[["class","media p-2"],["routerLink","/"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,103).onClick(u.button,u.ctrlKey,u.shiftKey,u.altKey,u.metaKey)&&t),t},null,null)),e["\u0275did"](103,671744,null,0,m.n,[m.m,m.a,h.k],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275eld"](104,0,null,null,2,"div",[["class","media-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](105,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Product 2"])),(l()(),e["\u0275eld"](107,0,null,null,4,"a",[["class","media p-2"],["routerLink","/"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,108).onClick(u.button,u.ctrlKey,u.shiftKey,u.altKey,u.metaKey)&&t),t},null,null)),e["\u0275did"](108,671744,null,0,m.n,[m.m,m.a,h.k],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275eld"](109,0,null,null,2,"div",[["class","media-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](110,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Product 3"])),(l()(),e["\u0275eld"](112,0,null,null,28,"ul",[["class","ms-list clearfix"]],null,null,null,null,null)),(l()(),e["\u0275eld"](113,0,null,null,13,"li",[["class","ms-list-item"]],null,null,null,null,null)),(l()(),e["\u0275eld"](114,0,null,null,12,"div",[["class","d-flex justify-content-between align-items-end"]],null,null,null,null,null)),(l()(),e["\u0275eld"](115,0,null,null,8,"div",[["class","ms-graph-meta"]],null,null,null,null,null)),(l()(),e["\u0275eld"](116,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["January, 2021"])),(l()(),e["\u0275eld"](118,0,null,null,1,"p",[["class","ms-text-dark"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["45.07%"])),(l()(),e["\u0275eld"](120,0,null,null,1,"p",[["class","ms-text-success"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["+28.44%"])),(l()(),e["\u0275eld"](122,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["VS 66.68% (Prev)"])),(l()(),e["\u0275eld"](124,0,null,null,2,"div",[["class","ms-graph-canvas"]],null,null,null,null,null)),(l()(),e["\u0275eld"](125,0,null,null,1,"canvas",[["baseChart",""]],null,null,null,null,null)),e["\u0275did"](126,999424,null,0,b.a,[e.ElementRef,b.c],{datasets:[0,"datasets"],labels:[1,"labels"],options:[2,"options"],chartType:[3,"chartType"]},null),(l()(),e["\u0275eld"](127,0,null,null,13,"li",[["class","ms-list-item"]],null,null,null,null,null)),(l()(),e["\u0275eld"](128,0,null,null,12,"div",[["class","d-flex justify-content-between align-items-end"]],null,null,null,null,null)),(l()(),e["\u0275eld"](129,0,null,null,8,"div",[["class","ms-graph-meta"]],null,null,null,null,null)),(l()(),e["\u0275eld"](130,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["February, 2021"])),(l()(),e["\u0275eld"](132,0,null,null,1,"p",[["class","ms-text-dark"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["9.07%"])),(l()(),e["\u0275eld"](134,0,null,null,1,"p",[["class","ms-text-danger"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["-2.31%"])),(l()(),e["\u0275eld"](136,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["VS 45.07% (Prev)"])),(l()(),e["\u0275eld"](138,0,null,null,2,"div",[["class","ms-graph-canvas"]],null,null,null,null,null)),(l()(),e["\u0275eld"](139,0,null,null,1,"canvas",[["baseChart",""]],null,null,null,null,null)),e["\u0275did"](140,999424,null,0,b.a,[e.ElementRef,b.c],{datasets:[0,"datasets"],labels:[1,"labels"],options:[2,"options"],chartType:[3,"chartType"]},null),(l()(),e["\u0275eld"](141,0,null,null,46,"div",[["class","col-xl-6 col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](142,0,null,null,45,"div",[["class","ms-panel ms-panel-fh ms-widget ms-chat-conversations"]],null,null,null,null,null)),(l()(),e["\u0275eld"](143,0,null,null,22,"div",[["class","ms-panel-header"]],null,null,null,null,null)),(l()(),e["\u0275eld"](144,0,null,null,21,"div",[["class","ms-chat-header justify-content-between"]],null,null,null,null,null)),(l()(),e["\u0275eld"](145,0,null,null,7,"div",[["class","ms-chat-user-container media clearfix"]],null,null,null,null,null)),(l()(),e["\u0275eld"](146,0,null,null,1,"div",[["class","ms-chat-status ms-status-online ms-chat-img mr-3 align-self-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](147,0,null,null,0,"img",[["alt","people"],["class","ms-img-round"],["src","assets/img/dashboard/employee-list/employee-(1).jpg"]],null,null,null,null,null)),(l()(),e["\u0275eld"](148,0,null,null,4,"div",[["class","media-body ms-chat-user-info mt-1"]],null,null,null,null,null)),(l()(),e["\u0275eld"](149,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Heather Brown"])),(l()(),e["\u0275eld"](151,0,null,null,1,"span",[["class","text-disabled fs-12"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Active Now "])),(l()(),e["\u0275eld"](153,0,null,null,12,"ul",[["class","ms-list ms-list-flex ms-chat-controls"]],null,null,null,null,null)),(l()(),e["\u0275eld"](154,16777216,null,null,3,"li",[["ngbTooltip","Call"],["placement","top"]],null,null,null,null,null)),e["\u0275did"](155,737280,null,0,p.qb,[e.ElementRef,e.Renderer2,e.Injector,e.ComponentFactoryResolver,e.ViewContainerRef,p.rb,e.NgZone,h.d,e.ChangeDetectorRef,e.ApplicationRef],{placement:[0,"placement"],ngbTooltip:[1,"ngbTooltip"]},null),(l()(),e["\u0275eld"](156,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["local_phone"])),(l()(),e["\u0275eld"](158,16777216,null,null,3,"li",[["ngbTooltip","Video Call"],["placement","top"]],null,null,null,null,null)),e["\u0275did"](159,737280,null,0,p.qb,[e.ElementRef,e.Renderer2,e.Injector,e.ComponentFactoryResolver,e.ViewContainerRef,p.rb,e.NgZone,h.d,e.ChangeDetectorRef,e.ApplicationRef],{placement:[0,"placement"],ngbTooltip:[1,"ngbTooltip"]},null),(l()(),e["\u0275eld"](160,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["videocam"])),(l()(),e["\u0275eld"](162,16777216,null,null,3,"li",[["ngbTooltip","Add to Chat"],["placement","top"]],null,null,null,null,null)),e["\u0275did"](163,737280,null,0,p.qb,[e.ElementRef,e.Renderer2,e.Injector,e.ComponentFactoryResolver,e.ViewContainerRef,p.rb,e.NgZone,h.d,e.ChangeDetectorRef,e.ApplicationRef],{placement:[0,"placement"],ngbTooltip:[1,"ngbTooltip"]},null),(l()(),e["\u0275eld"](164,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["person_add"])),(l()(),e["\u0275eld"](166,0,null,null,21,"perfect-scrollbar",[["class","ms-panel-body ms-scrollable"]],[[2,"ps-show-limits",null],[2,"ps-show-active",null]],null,null,g.b,g.a)),e["\u0275did"](167,507904,null,0,f.b,[e.NgZone,e.ChangeDetectorRef,e.PLATFORM_ID],null,null),(l()(),e["\u0275and"](16777216,null,0,1,null,C)),e["\u0275did"](169,278528,null,0,h.m,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](170,0,null,0,17,"div",[["class","ms-panel-footer"]],null,null,null,null,null)),(l()(),e["\u0275eld"](171,0,null,null,16,"div",[["class","ms-chat-textbox"]],null,null,null,null,null)),(l()(),e["\u0275eld"](172,0,null,null,15,"ul",[["class","ms-list-flex mb-0"]],null,null,null,null,null)),(l()(),e["\u0275eld"](173,0,null,null,2,"li",[["class","ms-chat-vn"]],null,null,null,null,null)),(l()(),e["\u0275eld"](174,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["mic"])),(l()(),e["\u0275eld"](176,0,null,null,1,"li",[["class","ms-chat-input"]],null,null,null,null,null)),(l()(),e["\u0275eld"](177,0,null,null,0,"input",[["name","msg"],["placeholder","Enter Message"],["type","text"],["value",""]],null,null,null,null,null)),(l()(),e["\u0275eld"](178,0,null,null,9,"li",[["class","ms-chat-text-controls ms-list-flex"]],null,null,null,null,null)),(l()(),e["\u0275eld"](179,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),e["\u0275eld"](180,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["tag_faces"])),(l()(),e["\u0275eld"](182,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),e["\u0275eld"](183,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["attach_file"])),(l()(),e["\u0275eld"](185,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),e["\u0275eld"](186,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["camera_alt"])),(l()(),e["\u0275eld"](188,0,null,null,15,"div",[["class","col-xl-6 col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](189,0,null,null,14,"div",[["class","ms-panel ms-panel-fh"]],null,null,null,null,null)),(l()(),e["\u0275eld"](190,0,null,null,9,"div",[["class","ms-panel-header"]],null,null,null,null,null)),(l()(),e["\u0275eld"](191,0,null,null,8,"div",[["class","d-flex justify-content-between"]],null,null,null,null,null)),(l()(),e["\u0275eld"](192,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),e["\u0275eld"](193,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Recent Support Tickets"])),(l()(),e["\u0275eld"](195,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Some of the recent support tickets"])),(l()(),e["\u0275eld"](197,0,null,null,2,"a",[["class","btn btn-primary"],["routerLink","/"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,198).onClick(u.button,u.ctrlKey,u.shiftKey,u.altKey,u.metaKey)&&t),t},null,null)),e["\u0275did"](198,671744,null,0,m.n,[m.m,m.a,h.k],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275ted"](-1,null,[" View All"])),(l()(),e["\u0275eld"](200,0,null,null,3,"div",[["class","ms-panel-body p-0"]],null,null,null,null,null)),(l()(),e["\u0275eld"](201,0,null,null,2,"ul",[["class","ms-list ms-feed ms-twitter-feed ms-recent-support-tickets"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,T)),e["\u0275did"](203,278528,null,0,h.m,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,4,0,u.statbox),l(n,27,0,u.countrytable),l(n,61,0,u.PieChartData,u.PieChartLabels,u.PieChartOptions,u.PieChartType),l(n,71,0,u.UsertrafficChartData,u.UsertrafficChartLabels,u.UsertrafficChartOptions,u.lineChartType),l(n,98,0,"/"),l(n,103,0,"/"),l(n,108,0,"/"),l(n,126,0,u.engagedChartData,u.UserpchChartLabels,u.UserpchChartOptions,u.lineChartType),l(n,140,0,u.pageimmpChartData,u.UserpchChartLabels,u.UserpchChartOptions,u.lineChartType),l(n,155,0,"top","Call"),l(n,159,0,"top","Video Call"),l(n,163,0,"top","Add to Chat"),l(n,167,0),l(n,169,0,u.chats),l(n,198,0,"/"),l(n,203,0,u.tickets)},function(l,n){l(n,85,0,e["\u0275nov"](n,86).isOpen()),l(n,89,0,e["\u0275nov"](n,90).dropdown.isOpen()),l(n,93,0,!0,e["\u0275nov"](n,94).dropdown.isOpen(),e["\u0275nov"](n,94).placement),l(n,97,0,e["\u0275nov"](n,98).target,e["\u0275nov"](n,98).href),l(n,102,0,e["\u0275nov"](n,103).target,e["\u0275nov"](n,103).href),l(n,107,0,e["\u0275nov"](n,108).target,e["\u0275nov"](n,108).href),l(n,166,0,e["\u0275nov"](n,167).autoPropagation,e["\u0275nov"](n,167).scrollIndicators),l(n,197,0,e["\u0275nov"](n,198).target,e["\u0275nov"](n,198).href)})}class D{constructor(){}ngOnInit(){}}var L=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function K(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,9,"div",[["class","body ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar"],["id","body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"app-settings",[],null,null,null,s.b,s.a)),e["\u0275did"](2,114688,null,0,d.a,[],null,null),(l()(),e["\u0275eld"](3,0,null,null,1,"app-sidenav",[],null,null,null,o.b,o.a)),e["\u0275did"](4,114688,null,0,i.a,[],null,null),(l()(),e["\u0275eld"](5,0,null,null,4,"main",[["class","body-content"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,1,"app-topbar",[],null,null,null,r.b,r.a)),e["\u0275did"](7,114688,null,0,c.a,[p.B],null,null),(l()(),e["\u0275eld"](8,0,null,null,1,"app-content",[],null,null,null,I,y)),e["\u0275did"](9,114688,null,0,v,[],null,null)],function(l,n){l(n,2,0),l(n,4,0),l(n,7,0),l(n,9,0)},null)}function A(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-clientmanagement",[],null,null,null,K,L)),e["\u0275did"](1,114688,null,0,D,[],null,null)],function(l,n){l(n,1,0)},null)}var U=e["\u0275ccf"]("app-clientmanagement",D,A,{},{},[]),j=u("9AJC"),$=u("s7LF"),O=u("+gVj");class B{}var F=u("IiJj"),P=u("hGdz"),E=e["\u0275cmf"](t,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,U,j.a,j.b,j.t,j.u,j.q,j.r,j.s]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,h.p,h.o,[e.LOCALE_ID]),e["\u0275mpd"](4608,$.y,$.y,[]),e["\u0275mpd"](4608,p.B,p.B,[e.ComponentFactoryResolver,e.Injector,p.Db,p.C]),e["\u0275mpd"](4608,$.f,$.f,[]),e["\u0275mpd"](4608,O.h,O.h,[O.b]),e["\u0275mpd"](1073742336,h.c,h.c,[]),e["\u0275mpd"](1073742336,m.o,m.o,[[2,m.t],[2,m.m]]),e["\u0275mpd"](1073742336,B,B,[]),e["\u0275mpd"](1073742336,$.x,$.x,[]),e["\u0275mpd"](1073742336,$.l,$.l,[]),e["\u0275mpd"](1073742336,p.c,p.c,[]),e["\u0275mpd"](1073742336,p.f,p.f,[]),e["\u0275mpd"](1073742336,p.h,p.h,[]),e["\u0275mpd"](1073742336,p.l,p.l,[]),e["\u0275mpd"](1073742336,p.m,p.m,[]),e["\u0275mpd"](1073742336,p.s,p.s,[]),e["\u0275mpd"](1073742336,p.y,p.y,[]),e["\u0275mpd"](1073742336,p.D,p.D,[]),e["\u0275mpd"](1073742336,p.K,p.K,[]),e["\u0275mpd"](1073742336,p.Q,p.Q,[]),e["\u0275mpd"](1073742336,p.Y,p.Y,[]),e["\u0275mpd"](1073742336,p.bb,p.bb,[]),e["\u0275mpd"](1073742336,p.gb,p.gb,[]),e["\u0275mpd"](1073742336,p.mb,p.mb,[]),e["\u0275mpd"](1073742336,p.pb,p.pb,[]),e["\u0275mpd"](1073742336,p.sb,p.sb,[]),e["\u0275mpd"](1073742336,p.tb,p.tb,[]),e["\u0275mpd"](1073742336,p.E,p.E,[]),e["\u0275mpd"](1073742336,$.u,$.u,[]),e["\u0275mpd"](1073742336,O.g,O.g,[]),e["\u0275mpd"](1073742336,F.a,F.a,[]),e["\u0275mpd"](1073742336,f.d,f.d,[]),e["\u0275mpd"](1073742336,P.a,P.a,[]),e["\u0275mpd"](1073742336,b.b,b.b,[]),e["\u0275mpd"](1073742336,t,t,[]),e["\u0275mpd"](1024,m.k,function(){return[[{path:"",component:D}]]},[]),e["\u0275mpd"](1024,O.b,function(){return[[]]},[]),e["\u0275mpd"](256,O.a,1,[]),e["\u0275mpd"](256,f.a,P.b,[])])})}}]);