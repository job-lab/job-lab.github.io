webpackJsonp([1],{"/NIL":function(t,e){},"0g16":function(t,e){},"6snN":function(t,e){},"9M+g":function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),o=a("kxiW"),r=Object(o.initializeApp)({apiKey:"AIzaSyC87Lfg7x_OIsTDsD7wJ24qShPp5TVsyyw",authDomain:"vue-simple-project-01.firebaseapp.com",databaseURL:"https://vue-simple-project-01.firebaseio.com",projectId:"vue-simple-project-01",storageBucket:"vue-simple-project-01.appspot.com",messagingSenderId:"604770702570"}).firestore(),n=r.collection("applied_jobs"),s=r.collection("logInfo"),l=a("VogD");i.default.use(l.default);var d={name:"app",data:function(){return{logData:[],spiner:{govt:!1,private:!1,add:!1},email:this.getCookie("email"),user:"",pass:this.getCookie("pass"),username:"",password:"",permission:!1,signup:!1,showUser:!0}},firestore:function(){return{logData:r.collection("logInfo")}},methods:{govtHover:function(t){1==t&&(this.spiner.govt=!0),0==t&&(this.spiner.govt=!1)},privateHover:function(t){this.spiner.private=1==t||0!=t},addHover:function(t){this.spiner.add=1==t||0!=t},setCookie:function(t,e,a){var i=new Date;i.setTime(i.getTime()+24*a*60*60*1e3);var o="expires="+i.toUTCString();return document.cookie=t+"="+e+";"+o+";path=/",!0},getCookie:function(t){for(var e=t+"=",a=decodeURIComponent(document.cookie).split(";"),i=0;i<a.length;i++){for(var o=a[i];" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(e))return o.substring(e.length,o.length)}return""},signIn:function(){this.setCookie("email",this.email,365),this.setCookie("pass",this.pass,365),location.reload()},signUp:function(){s.add({email:this.email,user:this.username.toLowerCase(),pass:this.password}).then(function(t){alert("Account create success! You can log in now.")}).catch(function(t){alert("Faild!"+t)}),this.signup=!1},changeUser:function(){1==this.showUser?this.showUser=!1:this.showUser=!0},logout:function(){this.setCookie("email","",365),this.setCookie("pass","",365),location.reload()}},watch:{logData:function(){if(this.logData.length>0)for(var t=0;t<=this.logData.length;t++)this.logData[t].email==this.email?this.logData[t].pass==this.pass&&(this.user=this.logData[t].user,this.permission=!0):console.log("Not Found!")}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("b-navbar",{attrs:{id:"navbar",fixed:"top"}},[a("b-container",[a("b-navbar-brand",{attrs:{href:"#",id:"navbarBrand",to:"/"}},[t._v("\n        JOB "),a("b",[t._v("LAB")])]),t._v(" "),a("b-navbar-nav",{staticClass:"ml-auto",attrs:{id:"navbarRight"}},[a("b-nav-item",{attrs:{to:"add",id:"newLink"}},[t.spiner.add?a("b-spinner",{attrs:{type:"grow",label:"Spinning"}}):t._e(),t._v("NEW")],1),t._v(" "),a("b-nav-item",{attrs:{to:"govt",id:"govtLink"}},[t.spiner.govt?a("b-spinner",{attrs:{type:"grow",label:"Spinning"}}):t._e(),t._v("GOVT")],1),t._v(" "),a("b-nav-item",{attrs:{to:"private",id:"privateLink"}},[t.spiner.private?a("b-spinner",{attrs:{type:"grow",label:"Spinning"}}):t._e(),t._v("PRIVATE")],1),t._v(" "),a("b-nav-item",{directives:[{name:"show",rawName:"v-show",value:t.permission,expression:"permission"}],attrs:{id:"user"},on:{mouseover:function(e){return t.changeUser()},mouseout:function(e){return t.changeUser()}}},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.showUser,expression:"showUser"}]},[t._v(t._s(t.user))]),a("span",{directives:[{name:"show",rawName:"v-show",value:!t.showUser,expression:"!showUser"}],on:{click:function(e){return t.logout()}}},[t._v("LOG OUT")])])],1)],1)],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!this.permission,expression:"!this.permission"}],attrs:{id:"contentSection"}},[a("b-container",[a("b-row",[a("b-col",{attrs:{"offset-md":"3",md:"6",sm:"12"}},[a("b-card",[a("div",{staticClass:"text-center",attrs:{id:"logTitle"}},[t._v("LOG IN")]),t._v(" "),a("b-form",[a("b-form-group",[a("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:"@"}},[a("b-input",{attrs:{placeholder:"EMAIL",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),t._v(" "),a("b-form-group",[a("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:"@"}},[a("b-input",{attrs:{placeholder:"PASSWORD",type:"password",required:""},model:{value:t.pass,callback:function(e){t.pass=e},expression:"pass"}})],1)],1),t._v(" "),a("b-button",{attrs:{type:"submit",block:"",variant:"primary"},on:{click:function(e){return t.signIn()}}},[t._v("LOG")]),t._v(" "),a("div",{attrs:{id:"remember"}},[a("b-form-checkbox",{attrs:{checked:"true",disabled:"",size:"sm"}},[t._v("REMEMBER")])],1)],1)],1),t._v(" "),a("div",{staticClass:"text-center",attrs:{id:"newAccount"},on:{click:function(e){t.signup=!0}}},[t._v("CREATE NEW ACCOUNT")]),t._v(" "),a("b-card",{directives:[{name:"show",rawName:"v-show",value:t.signup,expression:"signup"}]},[a("div",{staticClass:"text-center",attrs:{id:"logTitle"}},[t._v("SIGN UP")]),t._v(" "),a("b-form",[a("b-form-group",[a("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:"@"}},[a("b-input",{attrs:{placeholder:"EMAIL",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),t._v(" "),a("b-form-group",[a("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:"@"}},[a("b-input",{attrs:{placeholder:"NICK NAME",type:"text",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1)],1),t._v(" "),a("b-form-group",[a("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:"@"}},[a("b-input",{attrs:{placeholder:"PASSWORD",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),a("b-button",{attrs:{type:"submit",block:"",variant:"success"},on:{click:function(e){return t.signUp()}}},[t._v("SIGN UP")])],1)],1)],1)],1)],1)],1),t._v(" "),a("router-view",{directives:[{name:"show",rawName:"v-show",value:this.permission,expression:"this.permission"}],attrs:{email:t.email,user:t.user},on:{govt:t.govtHover,private:t.privateHover,add:t.addHover}}),t._v(" "),a("br"),a("br"),t._v(" "),a("b-navbar",{attrs:{fixed:"bottom",id:"footer"}},[a("b-container",[a("b-navbar-brand",{attrs:{href:"#",id:"footerBrand",to:"/"}},[t._v("HOST @DEB")]),t._v(" "),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{id:"footerLink",title:"deb.just.23@gmail.com"}},[t._v("HOTLINK")])],1)],1)],1)],1)},staticRenderFns:[]};var p=a("VU/8")(d,c,!1,function(t){a("0g16")},null,null).exports,v=a("hnaQ"),u=a("Tqaz"),m=(a("Jmt5"),a("9M+g"),a("/ocq")),b={props:["email"],data:function(){return{jobRetriveData:[],logData:[],loader:!0,dataLoadSignal:!1}},firestore:function(){return{jobRetriveData:r.collection("applied_jobs").orderBy("createdAt","desc"),logData:r.collection("logInfo")}},methods:{},watch:{jobRetriveData:function(){this.jobRetriveData.length>0&&(this.loader=!1,this.dataLoadSignal=!0)}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.loader?a("div",{staticClass:"lds-ring"},[a("span",{attrs:{id:"loaderText"}},[t._v("Loading")]),a("div"),a("div"),a("div"),a("div")]):t._e(),t._v(" "),t.dataLoadSignal?a("div",{attrs:{id:"contentSection"}},[a("b-container",[a("b-row",[a("b-col",{attrs:{md:"8",sm:"12"}},[a("b-card",{staticClass:"text-center title-card"},[t._v("\n            ALL PUBLIC JOB INFORMATION\n          ")]),t._v(" "),t._l(t.jobRetriveData,function(e){return a("div",{key:e},["public"==e.privacy||"both"==e.privacy?a("b-card",{attrs:{id:"card"}},[a("div",{attrs:{id:"jobTitle",title:"Job Title"}},[t._v(t._s(e.title))]),t._v(" "),a("div",{attrs:{id:"jobCompany",title:"Company Name"}},[t._v(t._s(e.company)+" - "),a("span",{attrs:{id:"jobType"}},[t._v(t._s(e.type))])]),t._v(" "),a("div",{attrs:{id:"jobDeadline",title:"Application Deadline"}},[t._v(t._s(e.deadline))]),t._v(" "),a("b-row",[a("b-col",{attrs:{cols:"6"}},[a("div",{attrs:{id:"jobLink",title:"Source Link"}},[a("a",{attrs:{href:e.link,target:"_blank"}},[t._v("Source Link")])])]),t._v(" "),a("b-col",{attrs:{cols:"6"}},[a("div",{staticClass:"text-right",attrs:{title:"Posted By"}},[a("span",{attrs:{id:"jobAuthor"}},[t._v(t._s(e.user))])])])],1)],1):t._e()],1)})],2),t._v(" "),a("b-col",{attrs:{md:"4",sm:"12"}},[a("b-card",{staticClass:"text-center title-card"},[t._v("\n            USER LIST\n          ")]),t._v(" "),a("div",[a("b-card",{attrs:{id:"card"}},t._l(t.logData,function(e){return a("div",{key:e,attrs:{id:"userlist"}},[a("span",{attrs:{id:"userlistData"}},[t._v(t._s(e.user)+" "),e.email==t.email?a("span",[t._v("(YOU)")]):t._e()])])}),0)],1)],1)],1)],1)],1):t._e()])},staticRenderFns:[]};var h=a("VU/8")(b,f,!1,function(t){a("Xrcf")},"data-v-3ef6eecf",null).exports,_={props:["email"],data:function(){return{jobRetriveData:[],loader:!0,dataLoadSignal:!1,userInfo:this.email}},firestore:function(){return{jobRetriveData:r.collection("applied_jobs").orderBy("createdAt","desc")}},methods:{govtHover:function(t){1==t&&this.$emit("govt",!0),0==t&&this.$emit("govt",!1)}},watch:{jobRetriveData:function(){this.jobRetriveData.length>0&&(this.loader=!1,this.dataLoadSignal=!0)}}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.loader?a("div",{staticClass:"lds-ring"},[a("span",{attrs:{id:"loaderText"}},[t._v("Loading")]),a("div"),a("div"),a("div"),a("div")]):t._e(),t._v(" "),t.dataLoadSignal?a("div",{attrs:{id:"contentSection"},on:{mouseover:function(e){return t.govtHover(!0)},mouseout:function(e){return t.govtHover(!1)}}},[a("b-container",[a("b-card",{staticClass:"text-center title-card"},[t._v("\n        YOUT PERSONAL GOVT JOB APPLICATION LIST\n      ")]),t._v(" "),t._l(t.jobRetriveData,function(e){return a("div",{key:e},["govt"!=e.type||"onlyme"!=e.privacy&&"both"!=e.privacy||e.email!=t.userInfo?t._e():a("b-card",{attrs:{id:"card"}},[a("div",{attrs:{id:"jobTitle",title:"Job Title"}},[t._v(t._s(e.title))]),t._v(" "),a("div",{attrs:{id:"jobCompany",title:"Company Name"}},[t._v(t._s(e.company)+" - "),a("span",{attrs:{id:"jobType"}},[t._v(t._s(e.type))])]),t._v(" "),a("div",{attrs:{id:"jobDeadline",title:"Application Deadline"}},[t._v(t._s(e.deadline))]),t._v(" "),a("div",{attrs:{id:"jobLink",title:"Source Link"}},[a("a",{attrs:{href:e.link,target:"_blank"}},[t._v("Source Link")])])])],1)})],2)],1):t._e()])},staticRenderFns:[]};var y=a("VU/8")(_,g,!1,function(t){a("6snN")},"data-v-1058dea9",null).exports,T={props:["email"],data:function(){return{jobRetriveData:[],loader:!0,dataLoadSignal:!1,userInfo:this.email}},firestore:function(){return{jobRetriveData:r.collection("applied_jobs").orderBy("createdAt","desc")}},methods:{privateHover:function(t){1==t&&this.$emit("private",!0),0==t&&this.$emit("private",!1)}},watch:{jobRetriveData:function(){this.jobRetriveData.length>0&&(this.loader=!1,this.dataLoadSignal=!0)}}},k={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.loader?a("div",{staticClass:"lds-ring"},[a("span",{attrs:{id:"loaderText"}},[t._v("Loading")]),a("div"),a("div"),a("div"),a("div")]):t._e(),t._v(" "),t.dataLoadSignal?a("div",{attrs:{id:"contentSection"},on:{mouseover:function(e){return t.privateHover(!0)},mouseout:function(e){return t.privateHover(!1)}}},[a("b-container",[a("b-card",{staticClass:"text-center title-card"},[t._v("\n        YOUT PERSONAL PRIVATE JOB APPLICATION LIST\n      ")]),t._v(" "),t._l(t.jobRetriveData,function(e){return a("div",{key:e},["private"!=e.type||"onlyme"!=e.privacy&&"both"!=e.privacy||e.email!=t.userInfo?t._e():a("b-card",{attrs:{id:"card"}},[a("div",{attrs:{id:"jobTitle",title:"Job Title"}},[t._v(t._s(e.title))]),t._v(" "),a("div",{attrs:{id:"jobCompany",title:"Company Name"}},[t._v(t._s(e.company)+" - "),a("span",{attrs:{id:"jobType"}},[t._v(t._s(e.type))])]),t._v(" "),a("div",{attrs:{id:"jobDeadline",title:"Application Deadline"}},[t._v(t._s(e.deadline))]),t._v(" "),a("div",{attrs:{id:"jobLink",title:"Source Link"}},[a("a",{attrs:{href:e.link,target:"_blank"}},[t._v("Source Link")])])])],1)})],2)],1):t._e()])},staticRenderFns:[]};var j=a("VU/8")(T,k,!1,function(t){a("U69U")},"data-v-b68bcf6e",null).exports,w=a("uSVs"),L=a.n(w),C=a("Puvr"),D=a.n(C),S={props:["email","user"],components:{"vue-flip":L.a,VueCircle:D.a},data:function(){return{jobRetriveData:[],loader:!0,dataLoadSignal:!1,form:{jobTitle:"",company:"",deadline:"",link:"",jobType:"",collectionType:"",email:this.email,user:this.user}}},firestore:function(){return{jobRetriveData:r.collection("applied_jobs").orderBy("createdAt","desc")}},computed:{},methods:{onSubmit:function(t){t.preventDefault(),n.add({title:this.form.jobTitle,company:this.form.company,deadline:this.form.deadline,link:this.form.link,type:this.form.jobType,privacy:this.form.collectionType,createdAt:new Date,email:this.email,user:this.user}).then(function(t){console.log("Document written with ID:"+t.id),alert(" Upload Success! ID : "+t.id)}).catch(function(t){console.error("Error adding document:"+t),alert(" Upload Faild! - "+t)})},onReset:function(t){t.preventDefault(),this.form.jobTitle="",this.form.company="",this.form.deadline="",this.form.link="",this.form.jobType="",this.form.collectionType="",this.form.user=""},addHover:function(t){1==t&&this.$emit("add",!0),0==t&&this.$emit("add",!1)}},watch:{jobRetriveData:function(){this.loader=!1,this.dataLoadSignal=!0}}},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.loader?a("div",{staticClass:"lds-ring"},[a("span",{attrs:{id:"loaderText"}},[t._v("Loading")]),a("div"),a("div"),a("div"),a("div")]):t._e(),t._v(" "),t.dataLoadSignal?a("div",{attrs:{id:"contentSection"},on:{mouseover:function(e){return t.addHover(!0)},mouseout:function(e){return t.addHover(!1)}}},[a("b-container",[a("b-card",{staticClass:"text-center title-card"},[t._v("\n        COLLECT YOUR JOB INFORMATION OR SHARE IT\n      ")]),t._v(" "),a("b-card",{attrs:{id:"card"}},[a("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[a("b-form-group",{attrs:{id:"input-group-1",label:"JOB TITLE:","label-for":"input-1",description:""}},[a("b-form-input",{attrs:{id:"input-1",type:"text",required:"",placeholder:""},model:{value:t.form.jobTitle,callback:function(e){t.$set(t.form,"jobTitle",e)},expression:"form.jobTitle"}})],1),t._v(" "),a("b-form-group",{attrs:{id:"input-group-2",label:"COMPANY NAME:","label-for":"input-2"}},[a("b-form-input",{attrs:{id:"input-2",required:"",placeholder:""},model:{value:t.form.company,callback:function(e){t.$set(t.form,"company",e)},expression:"form.company"}})],1),t._v(" "),a("b-form-group",{attrs:{id:"input-group-3",label:"DEADLINE:","label-for":"input-3"}},[a("b-form-input",{attrs:{id:"input-3",required:"",placeholder:""},model:{value:t.form.deadline,callback:function(e){t.$set(t.form,"deadline",e)},expression:"form.deadline"}})],1),t._v(" "),a("b-form-group",{attrs:{id:"input-group-4",label:"SOURCE LINK:","label-for":"input-4"}},[a("b-form-input",{attrs:{id:"input-4",required:"",placeholder:""},model:{value:t.form.link,callback:function(e){t.$set(t.form,"link",e)},expression:"form.link"}})],1),t._v(" "),a("b-form-group",{attrs:{label:"JOB TYPE"}},[a("b-form-radio-group",{attrs:{required:""}},[a("b-form-radio",{attrs:{name:"some-radios",value:"govt"},model:{value:t.form.jobType,callback:function(e){t.$set(t.form,"jobType",e)},expression:"form.jobType"}},[t._v("GOVT")]),t._v(" "),a("b-form-radio",{attrs:{name:"some-radios",value:"private"},model:{value:t.form.jobType,callback:function(e){t.$set(t.form,"jobType",e)},expression:"form.jobType"}},[t._v("PRIVATE")])],1)],1),t._v(" "),a("b-form-group",{attrs:{label:"PRIVACY"}},[a("b-form-radio-group",{attrs:{required:""}},[a("b-form-radio",{attrs:{name:"some-radios",value:"public"},model:{value:t.form.collectionType,callback:function(e){t.$set(t.form,"collectionType",e)},expression:"form.collectionType"}},[t._v("PUBLIC")]),t._v(" "),a("b-form-radio",{attrs:{name:"some-radios",value:"onlyme"},model:{value:t.form.collectionType,callback:function(e){t.$set(t.form,"collectionType",e)},expression:"form.collectionType"}},[t._v("ONLY ME")]),t._v(" "),a("b-form-radio",{attrs:{name:"some-radios",value:"both"},model:{value:t.form.collectionType,callback:function(e){t.$set(t.form,"collectionType",e)},expression:"form.collectionType"}},[t._v("BOTH")])],1)],1),t._v(" "),a("b-row",[a("b-col",{attrs:{cols:"6"}},[a("b-button",{attrs:{type:"submit",variant:"primary",id:"uploadButton"}},[t._v("UPLOAD")])],1),t._v(" "),a("b-col",{staticClass:"text-right",attrs:{cols:"6"}},[a("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("RESET")])],1)],1)],1)],1)],1)],1):t._e()])},staticRenderFns:[]};var R=a("VU/8")(S,x,!1,function(t){a("n7kY")},"data-v-7b9c4fe9",null).exports;i.default.use(m.a);var I=new m.a({routes:[{path:"/",name:"home",component:h},{path:"/govt",name:"govt",component:y},{path:"/private",name:"private",component:j},{path:"/add",name:"add",component:R}]});i.default.config.productionTip=!1,i.default.use(v.a),i.default.use(u.a),new i.default({el:"#app",router:I,components:{App:p},template:"<App/>"})},U69U:function(t,e){},Xrcf:function(t,e){},n7kY:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d8ae7eb95a4c2d429ae0.js.map