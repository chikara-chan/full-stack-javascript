webpackJsonp([8,10],{138:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(227),u=l(n);t.default=function(e,t,a){return t in e?(0,u.default)(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},1111:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(138),u=l(n),r=a(22),s=l(r),d=a(13),i=l(d),f=a(14),o=l(f),c=a(16),m=l(c),p=a(15),h=l(p),_=a(1),v=l(_),b=a(24),E=a(1297),N=l(E),g=a(87),y=(l(g),function(e){function t(){(0,i.default)(this,t);var e=(0,m.default)(this,(t.__proto__||(0,s.default)(t)).call(this));return e.handleChange=e.handleChange.bind(e),e.onSubmit=e.onSubmit.bind(e),e}return(0,h.default)(t,e),(0,o.default)(t,[{key:"handleChange",value:function(e){var t=e.target,a=this.props.actions;a.updateUser((0,u.default)({},t.name,t.value))}},{key:"componentDidMount",value:function(){var e=this.props.actions;e.updateUser({username:"",password:""})}},{key:"onSubmit",value:function(e){var t=this.props.actions;t.postSignup(),e.preventDefault()}},{key:"render",value:function(){var e=this.props.user;return v.default.createElement("section",{className:N.default.sectionMain},v.default.createElement("h1",{className:N.default.title},"买家版"),v.default.createElement("form",{className:N.default.form,onSubmit:this.onSubmit},v.default.createElement("div",{className:N.default.field},v.default.createElement("label",{className:N.default.label},v.default.createElement("span",{className:N.default.title},"账号"),v.default.createElement("input",{className:N.default.input,type:"text",name:"username",placeholder:"请输入账号",value:e.username,required:!0,onChange:this.handleChange}))),v.default.createElement("div",{className:N.default.field},v.default.createElement("label",{className:N.default.label},v.default.createElement("span",{className:N.default.title},"密码"),v.default.createElement("input",{className:N.default.input,type:"password",name:"password",placeholder:"请输入密码",value:e.password,required:!0,onChange:this.handleChange}))),v.default.createElement("input",{className:N.default.submit,type:"submit",value:"注册"})),v.default.createElement(b.Link,{className:N.default.link,to:"/login"},"前往登录"))}}]),t}(_.Component));t.default=y,e.exports=t.default},1112:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(524),u=l(n),r=a(22),s=l(r),d=a(13),i=l(d),f=a(14),o=l(f),c=a(16),m=l(c),p=a(15),h=l(p),_=a(1),v=l(_),b=a(1111),E=l(b),N=a(1296),g=l(N),y=function(e){function t(){return(0,i.default)(this,t),(0,m.default)(this,(t.__proto__||(0,s.default)(t)).call(this))}return(0,h.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=(0,u.default)(this.props,[]);return v.default.createElement("div",{className:g.default.app},v.default.createElement(E.default,e))}}]),t}(_.Component);t.default=y,e.exports=t.default},1296:1272,1297:function(e,t){e.exports={"section-main":"_3rfa0rTW",sectionMain:"_3rfa0rTW",title:"_9hRvVoaA",form:"_3mZP1n3a",field:"_37NOg261",label:"_3hOsDKrc",input:"_2VnYZXSq",submit:"VEY74Oxz",link:"_1JrBcInt"}}});