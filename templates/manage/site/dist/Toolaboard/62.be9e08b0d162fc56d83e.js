(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{ycC6:function(l,n,u){"use strict";u.r(n),u.d(n,"PaymentinvoiceModuleNgFactory",function(){return F});var e=u("8Y7J");class t{}var d=u("pMnS"),i=u("Ow+e"),a=u("dTnG"),c=u("nInX"),r=u("Kxz1"),o=u("3gKG"),s=u("ccN7"),p=u("G0yt"),m=u("SVse"),v=u("iInd");class b{constructor(){this.invoicelist=[{id:1,servicename:"Visting Charges",qty:1,price:100},{id:2,servicename:"Medicines",qty:10,price:69},{id:3,servicename:"X-ray Reports",qty:4,price:600},{id:4,servicename:"MRI",qty:2,price:245}]}calculateprice(){return this.invoicelist.reduce((l,n)=>l+n.qty*n.price,0)}ngOnInit(){}}var y=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function f(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,12,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),e["\u0275ted"](2,null,["",""])),(l()(),e["\u0275eld"](3,0,null,null,1,"td",[["class","text-left"]],null,null,null,null,null)),(l()(),e["\u0275ted"](4,null,["",""])),(l()(),e["\u0275eld"](5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](6,null,["",""])),(l()(),e["\u0275eld"](7,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](8,null,["$",""])),e["\u0275ppd"](9,2),(l()(),e["\u0275eld"](10,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](11,null,["$",""])),e["\u0275ppd"](12,2)],null,function(l,n){l(n,2,0,n.context.$implicit.id),l(n,4,0,n.context.$implicit.servicename),l(n,6,0,n.context.$implicit.qty);var u=e["\u0275unv"](n,8,0,l(n,9,0,e["\u0275nov"](n.parent,0),n.context.$implicit.price,"1.2-2"));l(n,8,0,u);var t=e["\u0275unv"](n,11,0,l(n,12,0,e["\u0275nov"](n.parent,0),n.context.$implicit.qty*n.context.$implicit.price,"1.2-2"));l(n,11,0,t)})}function h(l){return e["\u0275vid"](0,[e["\u0275pid"](0,m.e,[e.LOCALE_ID]),(l()(),e["\u0275eld"](1,0,null,null,74,"div",[["class","ms-content-wrapper"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,73,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,72,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,13,"nav",[["aria-label","breadcrumb"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,12,"ol",[["class","breadcrumb pl-0"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,5,"li",[["class","breadcrumb-item"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,4,"a",[["routerLink","/"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,8).onClick(u.button,u.ctrlKey,u.shiftKey,u.altKey,u.metaKey)&&t),t},null,null)),e["\u0275did"](8,671744,null,0,v.n,[v.m,v.a,m.k],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275eld"](9,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["home"])),(l()(),e["\u0275ted"](-1,null,[" Home"])),(l()(),e["\u0275eld"](12,0,null,null,3,"li",[["class","breadcrumb-item"]],null,null,null,null,null)),(l()(),e["\u0275eld"](13,0,null,null,2,"a",[["routerLink","/"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,14).onClick(u.button,u.ctrlKey,u.shiftKey,u.altKey,u.metaKey)&&t),t},null,null)),e["\u0275did"](14,671744,null,0,v.n,[v.m,v.a,m.k],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275ted"](-1,null,["Payment"])),(l()(),e["\u0275eld"](16,0,null,null,1,"li",[["aria-current","page"],["class","breadcrumb-item active"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Payment-Invoice"])),(l()(),e["\u0275eld"](18,0,null,null,57,"div",[["class","ms-panel"]],null,null,null,null,null)),(l()(),e["\u0275eld"](19,0,null,null,5,"div",[["class","ms-panel-header header-mini"]],null,null,null,null,null)),(l()(),e["\u0275eld"](20,0,null,null,4,"div",[["class","d-flex justify-content-between"]],null,null,null,null,null)),(l()(),e["\u0275eld"](21,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Invoice"])),(l()(),e["\u0275eld"](23,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["#135178"])),(l()(),e["\u0275eld"](25,0,null,null,50,"div",[["class","ms-panel-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](26,0,null,null,20,"div",[["class","row align-items-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](27,0,null,null,13,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](28,0,null,null,12,"div",[["class","invoice-address"]],null,null,null,null,null)),(l()(),e["\u0275eld"](29,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Reciever: "])),(l()(),e["\u0275eld"](31,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Hospital Memo"])),(l()(),e["\u0275eld"](33,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Anny.123@example.com"])),(l()(),e["\u0275eld"](35,0,null,null,1,"p",[["class","mb-0"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["1642 Cambridge Drive, Phoenix, 85029 Arizona"])),(l()(),e["\u0275eld"](37,0,null,null,1,"p",[["class","mb-0"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Arizona"])),(l()(),e["\u0275eld"](39,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Phoenix"])),(l()(),e["\u0275eld"](41,0,null,null,5,"div",[["class","col-md-6 text-md-right"]],null,null,null,null,null)),(l()(),e["\u0275eld"](42,0,null,null,4,"ul",[["class","invoice-date"]],null,null,null,null,null)),(l()(),e["\u0275eld"](43,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Invoice Date : Saturday, Nov 08 2019"])),(l()(),e["\u0275eld"](45,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Due Date : Sunday, Nov 16 2019"])),(l()(),e["\u0275eld"](47,0,null,null,23,"div",[["class","ms-invoice-table table-responsive mt-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](48,0,null,null,22,"table",[["class","table table-hover text-right thead-light"]],null,null,null,null,null)),(l()(),e["\u0275eld"](49,0,null,null,11,"thead",[],null,null,null,null,null)),(l()(),e["\u0275eld"](50,0,null,null,10,"tr",[["class","text-capitalize"]],null,null,null,null,null)),(l()(),e["\u0275eld"](51,0,null,null,1,"th",[["class","text-center w-5"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["id"])),(l()(),e["\u0275eld"](53,0,null,null,1,"th",[["class","text-left"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Item Name"])),(l()(),e["\u0275eld"](55,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Qty"])),(l()(),e["\u0275eld"](57,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Unit Cost"])),(l()(),e["\u0275eld"](59,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["total"])),(l()(),e["\u0275eld"](61,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,f)),e["\u0275did"](63,278528,null,0,m.m,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](64,0,null,null,6,"tfoot",[],null,null,null,null,null)),(l()(),e["\u0275eld"](65,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](66,0,null,null,1,"td",[["colspan","4"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Total Cost: "])),(l()(),e["\u0275eld"](68,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](69,null,["$",""])),e["\u0275ppd"](70,2),(l()(),e["\u0275eld"](71,0,null,null,4,"div",[["class","invoice-buttons text-right"]],null,null,null,null,null)),(l()(),e["\u0275eld"](72,0,null,null,1,"button",[["class","btn btn-primary mr-2"],["type","submit"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Print Invoice"])),(l()(),e["\u0275eld"](74,0,null,null,1,"button",[["class","btn btn-primary"],["type","submit"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Send Invoice"]))],function(l,n){var u=n.component;l(n,8,0,"/"),l(n,14,0,"/"),l(n,63,0,u.invoicelist)},function(l,n){var u=n.component;l(n,7,0,e["\u0275nov"](n,8).target,e["\u0275nov"](n,8).href),l(n,13,0,e["\u0275nov"](n,14).target,e["\u0275nov"](n,14).href);var t=e["\u0275unv"](n,69,0,l(n,70,0,e["\u0275nov"](n,0),u.calculateprice(),"1.2-2"));l(n,69,0,t)})}class g{constructor(){}ngOnInit(){}}var x=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function k(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,9,"div",[["class","body ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar"],["id","body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"app-settings",[],null,null,null,i.b,i.a)),e["\u0275did"](2,114688,null,0,a.a,[],null,null),(l()(),e["\u0275eld"](3,0,null,null,1,"app-sidenav",[],null,null,null,c.b,c.a)),e["\u0275did"](4,114688,null,0,r.a,[],null,null),(l()(),e["\u0275eld"](5,0,null,null,4,"main",[["class","body-content"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,1,"app-topbar",[],null,null,null,o.b,o.a)),e["\u0275did"](7,114688,null,0,s.a,[p.B],null,null),(l()(),e["\u0275eld"](8,0,null,null,1,"app-content",[],null,null,null,h,y)),e["\u0275did"](9,114688,null,0,b,[],null,null)],function(l,n){l(n,2,0),l(n,4,0),l(n,7,0),l(n,9,0)},null)}function C(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-paymentinvoice",[],null,null,null,k,x)),e["\u0275did"](1,114688,null,0,g,[],null,null)],function(l,n){l(n,1,0)},null)}var I=e["\u0275ccf"]("app-paymentinvoice",g,C,{},{},[]),w=u("9AJC"),K=u("s7LF"),L=u("+gVj");class D{}var R=u("IiJj"),q=u("aLe/"),$=u("hGdz"),F=e["\u0275cmf"](t,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[d.a,I,w.a,w.b,w.t,w.u,w.q,w.r,w.s]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,m.p,m.o,[e.LOCALE_ID]),e["\u0275mpd"](4608,K.y,K.y,[]),e["\u0275mpd"](4608,p.B,p.B,[e.ComponentFactoryResolver,e.Injector,p.Db,p.C]),e["\u0275mpd"](4608,K.f,K.f,[]),e["\u0275mpd"](4608,L.h,L.h,[L.b]),e["\u0275mpd"](1073742336,m.c,m.c,[]),e["\u0275mpd"](1073742336,v.o,v.o,[[2,v.t],[2,v.m]]),e["\u0275mpd"](1073742336,D,D,[]),e["\u0275mpd"](1073742336,K.x,K.x,[]),e["\u0275mpd"](1073742336,K.l,K.l,[]),e["\u0275mpd"](1073742336,p.c,p.c,[]),e["\u0275mpd"](1073742336,p.f,p.f,[]),e["\u0275mpd"](1073742336,p.h,p.h,[]),e["\u0275mpd"](1073742336,p.l,p.l,[]),e["\u0275mpd"](1073742336,p.m,p.m,[]),e["\u0275mpd"](1073742336,p.s,p.s,[]),e["\u0275mpd"](1073742336,p.y,p.y,[]),e["\u0275mpd"](1073742336,p.D,p.D,[]),e["\u0275mpd"](1073742336,p.K,p.K,[]),e["\u0275mpd"](1073742336,p.Q,p.Q,[]),e["\u0275mpd"](1073742336,p.Y,p.Y,[]),e["\u0275mpd"](1073742336,p.bb,p.bb,[]),e["\u0275mpd"](1073742336,p.gb,p.gb,[]),e["\u0275mpd"](1073742336,p.mb,p.mb,[]),e["\u0275mpd"](1073742336,p.pb,p.pb,[]),e["\u0275mpd"](1073742336,p.sb,p.sb,[]),e["\u0275mpd"](1073742336,p.tb,p.tb,[]),e["\u0275mpd"](1073742336,p.E,p.E,[]),e["\u0275mpd"](1073742336,K.u,K.u,[]),e["\u0275mpd"](1073742336,L.g,L.g,[]),e["\u0275mpd"](1073742336,R.a,R.a,[]),e["\u0275mpd"](1073742336,q.d,q.d,[]),e["\u0275mpd"](1073742336,$.a,$.a,[]),e["\u0275mpd"](1073742336,t,t,[]),e["\u0275mpd"](1024,v.k,function(){return[[{path:"",component:g}]]},[]),e["\u0275mpd"](1024,L.b,function(){return[[]]},[]),e["\u0275mpd"](256,L.a,1,[]),e["\u0275mpd"](256,q.a,$.b,[])])})}}]);