(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3235dfca"],{"1e1a":function(t,e,i){t.exports=i.p+"img/webinar.b26fac46.svg"},"297c":function(t,e,i){"use strict";i("a9e3");var a=i("2b0e"),r=(i("c7cd"),i("5530")),s=i("ade3"),n=(i("6ece"),i("0789")),o=i("a9ad"),l=i("fe6c"),c=i("a452"),u=i("7560"),d=i("80d2"),h=i("58df"),v=Object(h["a"])(o["a"],Object(l["b"])(["absolute","fixed","top","bottom"]),c["a"],u["a"]),m=v.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(d["g"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(d["g"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(s["a"])(t,this.isReversed?"right":"left",Object(d["g"])(this.normalizedValue,"%")),Object(s["a"])(t,"width",Object(d["g"])(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return Object(r["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?n["c"]:n["d"]},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(d["g"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(d["r"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(s["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),i=e.width;this.internalValue=t.offsetX/i*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(d["g"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),f=m;e["a"]=a["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(f,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"4ff9a":function(t,e,i){"use strict";i("c315")},"5ef3":function(t,e,i){t.exports=i.p+"img/premedical.1e07b5eb.png"},"6ece":function(t,e,i){},"74ae":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sections__main"},[a("v-card",{staticClass:"transparent infocard",attrs:{flat:""}},[a("v-card-title",[a("div",{staticClass:"text-center ma-auto"},[a("img",{attrs:{src:i("5ef3"),alt:"",width:"320px"}})])]),a("div",{staticClass:"text-center mb-n2"},[a("v-btn",{attrs:{color:"#1aa566",outlined:""}},[t._v(" Roll: "+t._s(this.$store.state.user.roll)+" ")])],1),a("v-card-text",[a("v-list",{staticClass:"transparent"},[a("v-list-item",{staticClass:"sector__item py-2 elevation-12",attrs:{to:"/liveclasses",link:""}},[a("v-list-item-avatar",{attrs:{tile:""}},[a("v-img",{attrs:{src:i("1e1a")}})],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Live Classes")])],1)],1),a("v-list-item",{staticClass:"sector__item py-2 elevation-12",attrs:{to:"/exam"}},[a("v-list-item-avatar",{attrs:{tile:""}},[a("v-img",{attrs:{src:i("7cdc")}})],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" Exam ")])],1)],1),a("v-list-item",{staticClass:"sector__item py-2 elevation-12",attrs:{to:"/qna"}},[a("v-list-item-avatar",{attrs:{tile:""}},[a("v-img",{attrs:{src:i("ba3b")}})],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" QnA ")])],1)],1),a("v-list-item",{staticClass:"sector__item py-2 elevation-12",attrs:{href:"https://10ms.io/10MS-SSC22-Crash",target:"_blank"}},[a("v-list-item-avatar",{attrs:{tile:""}},[a("v-img",{attrs:{src:i("cdc2")}})],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" Facebook Group ")])],1)],1)],1)],1)],1)],1)},r=[],s={data:function(){return{}},methods:{}},n=s,o=(i("4ff9a"),i("2877")),l=i("6544"),c=i.n(l),u=i("8336"),d=i("b0af"),h=i("99d9"),v=i("adda"),m=i("8860"),f=i("da13"),g=i("8270"),p=i("5d23"),b=Object(o["a"])(n,a,r,!1,null,"170684c4",null);e["default"]=b.exports;c()(b,{VBtn:u["a"],VCard:d["a"],VCardText:h["b"],VCardTitle:h["c"],VImg:v["a"],VList:m["a"],VListItem:f["a"],VListItemAvatar:g["a"],VListItemContent:p["a"],VListItemTitle:p["b"]})},"7cdc":function(t,e,i){t.exports=i.p+"img/exam.4b91101d.svg"},a452:function(t,e,i){"use strict";var a=i("ade3"),r=i("2b0e");function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return r["a"].extend({name:"proxyable",model:{prop:t,event:e},props:Object(a["a"])({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:Object(a["a"])({},t,(function(t){this.internalLazyValue=t}))})}var n=s();e["a"]=n},ba3b:function(t,e,i){t.exports=i.p+"img/brain.e80f0afc.svg"},c315:function(t,e,i){},cdc2:function(t,e,i){t.exports=i.p+"img/facebook_group.cacad517.svg"}}]);