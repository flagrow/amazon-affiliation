module.exports=function(t){var a={};function n(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=a,n.d=function(t,a,e){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var o in t)n.d(e,o,function(a){return t[a]}.bind(null,o));return e},n.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="",n(n.s=3)}([function(t,a){t.exports=flarum.core.compat.app},function(t,a){t.exports=flarum.core.compat["components/Switch"]},function(t,a){t.exports=flarum.core.compat["components/SettingsModal"]},function(t,a,n){"use strict";n.r(a);var e=n(0),o=n.n(e);var r=n(2),i=n.n(r),l=n(1),s=n.n(l),c=[{domain:"com",name:"United States",central:"https://affiliate-program.amazon.com/"},{domain:"co.uk",name:"United Kingdom",central:"https://affiliate-program.amazon.co.uk/"},{domain:"de",name:"Deutschland",central:"https://partnernet.amazon.de/"},{domain:"fr",name:"France",central:"https://partenaires.amazon.fr/"},{domain:"co.jp",name:"Japan",central:"https://affiliate.amazon.co.jp/"},{domain:"ca",name:"Canada",central:"https://associates.amazon.ca/"},{domain:"cn",name:"China",central:"https://associates.amazon.cn/"},{domain:"it",name:"Italia",central:"https://programma-affiliazione.amazon.it/"},{domain:"es",name:"España",central:"https://afiliados.amazon.es/"},{domain:"in",name:"India",central:"https://affiliate-program.amazon.in/"},{domain:"com.br",name:"Brazil",central:"https://associados.amazon.com.br/"},{domain:"com.mx",name:"Mexico",central:"https://afiliados.amazon.com.mx/"},{domain:"com.au",name:"Australia",central:"https://affiliate-program.amazon.com.au/"}],f="flagrow-amazon-affiliation.",p="flagrow-amazon-affiliation.admin.settings.",u=function(t){var a,n;function e(){return t.apply(this,arguments)||this}n=t,(a=e).prototype=Object.create(n.prototype),a.prototype.constructor=a,a.__proto__=n;var r=e.prototype;return r.title=function(){return o.a.translator.trans(p+"title.modal")},r.form=function(){var t=this;return[m(".Form-group",[m("label",s.a.component({state:this.setting(f+"keep-existing-tag")()>0,onchange:this.setting(f+"keep-existing-tag"),children:o.a.translator.trans(p+"field.keep-existing-tag")})),m(".helpText",o.a.translator.trans(p+"field.keep-existing-tag-help"))]),m(".Form-group",[m("label",s.a.component({state:this.setting(f+"remove-tag-if-unhandled")()>0,onchange:this.setting(f+"remove-tag-if-unhandled"),children:o.a.translator.trans(p+"field.remove-tag-if-unhandled")})),m(".helpText",o.a.translator.trans(p+"field.remove-tag-if-unhandled-help"))]),m("h2",o.a.translator.trans(p+"title.tags")),c.map(function(a){return m(".Form-group",[m("label",o.a.translator.trans(p+"field.tag",a)),m("input[type=text].FormControl",{bidi:t.setting(f+"affiliate-tag."+a.domain),placeholder:o.a.translator.trans(p+"field.tag-placeholder")})])})]},e}(i.a);o.a.initializers.add("flagrow-amazon-affiliation",function(t){t.extensionSettings["flagrow-amazon-affiliation"]=function(){return t.modal.show(new u)}})}]);
//# sourceMappingURL=admin.js.map