(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a1a99f3"],{"371a":function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"contact"}},[t("form",{staticClass:"contact-form",on:{submit:function(a){return a.preventDefault(),e.submit.apply(null,arguments)}}},[t("fieldset",[t("legend",[e._v("Sharpei House Contact Form")]),t("div",[t("label",{staticClass:"label",attrs:{for:"name"}},[e._v("Name ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",name:"name",id:"name",required:""},domProps:{value:e.name},on:{input:function(a){a.target.composing||(e.name=a.target.value)}}})]),t("div",[t("label",{staticClass:"label",attrs:{for:"email"}},[e._v("Email")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email.value,expression:"email.value"}],class:{email:e.email,error:!e.email.valid},attrs:{type:"email",name:"email",id:"email",required:""},domProps:{value:e.email.value},on:{input:function(a){a.target.composing||e.$set(e.email,"value",a.target.value)}}})]),t("div",[t("label",{staticClass:"label",attrs:{for:"name"}},[e._v("Sharpei ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.sharpeiname,expression:"sharpeiname"}],attrs:{type:"text",name:"name",id:"name",required:""},domProps:{value:e.sharpeiname},on:{input:function(a){a.target.composing||(e.sharpeiname=a.target.value)}}})]),t("div",[t("label",{staticClass:"label",attrs:{for:"textarea"}},[e._v("Message ")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message.text,expression:"message.text"}],staticClass:"message",attrs:{name:"textarea",id:"textarea",required:"",maxlength:e.message.maxlength},domProps:{value:e.message.text},on:{input:function(a){a.target.composing||e.$set(e.message,"text",a.target.value)}}}),t("span",{staticClass:"counter"},[e._v(e._s(e.message.text.length)+" / "+e._s(e.message.maxlength))])]),e._m(0)])])])},s=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("input",{staticClass:"submitbutton",attrs:{type:"submit",value:"Send Form"}})])}],n=t("e07f"),l={name:"Contact",mixins:[n["a"]],data:function(){return{name:"Enter Name",sharpeiname:"Sharpei Name",email:{value:"Email@emaildomain.com",valid:!0},message:{text:"Enter Message here,\n...",maxlength:255},submitted:!1}},methods:{submit:function(){this.submitted=!0},validate:function(e,a){"email"===e&&(this.email.valid=!!this.isEmail(a))},isEmail:function(e){return emailRegExp.test(e)},checkAll:function(e){this.selection.features=e.target.checked?this.features:[]}},watch:{"email.value":function(e){this.validate("email",e)}}},m=l,r=(t("7d2b"),t("2877")),o=Object(r["a"])(m,i,s,!1,null,"6917ff82",null);a["default"]=o.exports},"7d2b":function(e,a,t){"use strict";t("9a9d")},"9a9d":function(e,a,t){}}]);
//# sourceMappingURL=chunk-4a1a99f3.bff60f2c.js.map