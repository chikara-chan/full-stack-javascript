webpackJsonp([6,10],{60:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(22),c=l(n),r=a(13),u=l(r),s=a(14),i=l(s),o=a(16),d=l(o),f=a(15),m=l(f),p=a(1),h=l(p),v=a(24),_=a(61),E=l(_),N=function(e){function t(){(0,u.default)(this,t);var e=(0,d.default)(this,(t.__proto__||(0,c.default)(t)).call(this));return e.handleClickBack=e.handleClickBack.bind(e),e}return(0,m.default)(t,e),(0,i.default)(t,[{key:"handleClickBack",value:function(){v.browserHistory.goBack()}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.title,l=e.back,n=e.action,c=e.handleClickAction,r=e.handleClickTitle;return h.default.createElement("div",{className:E.default.actionbar+" "+t},h.default.createElement("h1",{className:E.default.back,onClick:this.handleClickBack},l&&h.default.createElement("i",{className:"iconfont icon-back "+E.default.icon})),h.default.createElement("h1",{className:E.default.title,onClick:r},a),h.default.createElement("h1",{className:E.default.action,onClick:c},n))}}]),t}(p.Component);t.default=N,e.exports=t.default},61:function(e,t){e.exports={actionbar:"_1YT9hvmS",back:"_1HoiKgwz",icon:"_3t3E94hd",title:"_3NYzz9Zp",action:"_2GmbHU0p"}},253:function(e,t){"use strict";function a(e){switch(e){case 0:return"普通超市";default:return""}}function l(e){switch(e){case 0:return"男";case 1:return"女";default:return""}}function n(e){switch(e){case 100:return"待接单";case 101:return"待发货";case 102:return"待收货";case 103:return"待评价";case 104:return"已完成";case 200:return"已取消";case 201:return"已拒单";default:return""}}Object.defineProperty(t,"__esModule",{value:!0}),t.default={switchShopType:a,switchGender:l,switchStatus:n},e.exports=t.default},522:function(e,t){"use strict";function a(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;e.length<t;)e="0"+e;return e}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD hh:mm:ss",l=new Date(e),n=""+l.getFullYear(),c=""+(l.getMonth()+1),r=""+l.getDate(),u=""+l.getHours(),s=""+l.getMinutes(),i=""+l.getSeconds(),o=/Y+|M+|D+|h+|m+|s+|S+/g;return t.replace(o,function(e){var t=e.length;switch(e[0]){case"Y":return n.slice(-t);case"M":return a(c).slice(-t);case"D":return a(r).slice(-t);case"h":return a(u).slice(-t);case"m":return a(s).slice(-t);case"s":return a(i).slice(-t)}})}function n(e){var t=/^\s*(\d{4})-(\d{1,2})-(\d{1,2})\s*$/,a=/^\s*(\d{4})-(\d{1,2})-(\d{1,2})\s+(\d{1,2}):(\d{1,2}):(\d{1,2})\s*$/,l=void 0;return(l=e.match(t))?+new Date(+l[1],+l[2]-1,+l[3]):(l=e.match(a))?+new Date(+l[1],+l[2]-1,+l[3],+l[4],+l[5],+l[6]):void 0}Object.defineProperty(t,"__esModule",{value:!0}),t.default={formatDate:l,parseDate:n},e.exports=t.default},674:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(22),c=l(n),r=a(13),u=l(r),s=a(14),i=l(s),o=a(16),d=l(o),f=a(15),m=l(f),p=a(1),h=l(p),v=(a(24),a(1292)),_=l(v),E=a(674),N=(l(E),function(e){function t(){return(0,u.default)(this,t),(0,d.default)(this,(t.__proto__||(0,c.default)(t)).call(this))}return(0,m.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props.item;return h.default.createElement("div",{className:_.default.item},h.default.createElement("img",{className:_.default.img,src:e.pic}),h.default.createElement("div",{className:_.default.content},h.default.createElement("p",{className:_.default.contentInfo},e.brand&&"["+e.brand+"]",e.itemName," ",e.property,h.default.createElement("span",{className:_.default.strong},"￥",e.price)),h.default.createElement("p",{className:_.default.contentInfo},e.price,"元 / ",e.unit,h.default.createElement("span",{className:_.default.strong},"× ",e.checkedNumber))))}}]),t}(p.Component));t.default=N,e.exports=t.default},1106:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(22),c=l(n),r=a(13),u=l(r),s=a(14),i=l(s),o=a(16),d=l(o),f=a(15),m=l(f),p=a(1),h=l(p),v=(a(24),a(1293)),_=l(v),E=a(674),N=l(E),k=a(253),b=a(522),g=function(e){function t(){(0,u.default)(this,t);var e=(0,d.default)(this,(t.__proto__||(0,c.default)(t)).call(this));return e.handleCancel=e.handleCancel.bind(e),e.handleReceive=e.handleReceive.bind(e),e}return(0,m.default)(t,e),(0,i.default)(t,[{key:"handleCancel",value:function(){var e=this.props,t=e.order,a=e.actions;a.cancelOrder(t.id)}},{key:"handleReceive",value:function(){var e=this.props,t=e.order,a=e.actions;a.receiveOrder(t.id)}},{key:"componentDidMount",value:function(){var e=this,t=this.props.actions,a=function t(){e.forceUpdate(),e.timer=setTimeout(t,1e3)},l=function a(){t.getOrderWithoutRedirect(),e.pollTimer=setTimeout(a,5e3)};a(),l()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer),clearTimeout(this.pollTimer)}},{key:"render",value:function(){var e=this.props,t=e.order,a=e.actions;return h.default.createElement("section",{className:_.default.sectionMain},h.default.createElement("div",{className:_.default.header},h.default.createElement("span",{className:_.default.title},(0,k.switchStatus)(t.status))),!!~[100,101,102].indexOf(t.status)&&h.default.createElement("p",{className:_.default.time},(0,b.formatDate)(Date.now()-t.create+576e5,"hh:mm:ss")),h.default.createElement("div",{className:_.default.buyer},h.default.createElement("i",{className:"iconfont icon-account "+_.default.icon}),h.default.createElement("p",{className:_.default.receiver},"收货人: ",t.buyer.nickname,h.default.createElement("span",{className:_.default.mobile},t.buyer.mobile)),h.default.createElement("p",{className:_.default.address},"收货地址: ",t.buyer.address),h.default.createElement("p",{className:_.default.remark},"备注: ",t.remark||"无")),h.default.createElement("div",{className:_.default.panel},h.default.createElement("div",{className:_.default.titleWrap},h.default.createElement("img",{className:_.default.img,src:t.seller.avatar}),h.default.createElement("span",{className:_.default.title},t.shop.shopName)),t.item.map(function(e){return h.default.createElement(N.default,{key:e.id,actions:a,item:e})}),h.default.createElement("div",{className:_.default.footer},h.default.createElement("div",{className:_.default.colLeft},"实付"),h.default.createElement("div",{className:_.default.colRight},h.default.createElement("span",{className:_.default.amount},"￥",t.amount))),h.default.createElement("a",{className:_.default.footerAttach,href:"tel:"+t.seller.mobile},h.default.createElement("i",{className:"iconfont icon-phone "+_.default.icon}),"联系商家")),h.default.createElement("div",{className:_.default.pageFooter},h.default.createElement("p",{className:_.default.content},"订单号: ",t.id),h.default.createElement("p",{className:_.default.content},"下单时间: ",(0,b.formatDate)(t.create))),100===t.status&&h.default.createElement("div",{className:_.default.field},h.default.createElement("input",{className:_.default.logout,onClick:this.handleCancel,type:"button",value:"取消订单"})),102===t.status&&h.default.createElement("div",{className:_.default.field},h.default.createElement("input",{className:_.default.logout,onClick:this.handleReceive,type:"button",value:"确认收货"})))}}]),t}(p.Component);t.default=g,e.exports=t.default},1107:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(22),c=l(n),r=a(13),u=l(r),s=a(14),i=l(s),o=a(16),d=l(o),f=a(15),m=l(f),p=a(1),h=l(p),v=a(1106),_=l(v),E=a(1291),N=l(E),k=a(60),b=l(k),g=function(e){function t(){return(0,u.default)(this,t),(0,d.default)(this,(t.__proto__||(0,c.default)(t)).call(this))}return(0,m.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.actions;e.updateActionbar({title:"订单详情",action:"",back:!0}),e.updateNavbar({show:!1})}},{key:"componentWillUnmount",value:function(){var e=this.props.actions;e.updateNavbar({show:!0})}},{key:"render",value:function(){var e=this.props,t=e.actions,a=e.order,l=e.actionbar;return h.default.createElement("div",{className:N.default.app},h.default.createElement(b.default,{title:l.title,back:l.back,action:l.action}),h.default.createElement(_.default,{actions:t,order:a}))}}]),t}(p.Component);t.default=g,e.exports=t.default},1291:1272,1292:function(e,t){e.exports={item:"_2y9TrzO5",img:"_1l4ORHt0",content:"l3DCjtz9","content-info":"_3YKEDYtU",contentInfo:"_3YKEDYtU",strong:"_2AdGOvGD"}},1293:function(e,t){e.exports={"section-main":"_1s0QbaOZ",sectionMain:"_1s0QbaOZ",header:"_331wpcdg",title:"wEywobqp",time:"_2O8xYiDx",buyer:"scQyFjJg",receiver:"_1Wrhz6Cp",mobile:"_2Z0hLmka",address:"_19W4Oo1v",remark:"_2NToYPSK",icon:"yhYJphv2",panel:"SbzkakOO","title-wrap":"_3pI9KO3M",titleWrap:"_3pI9KO3M",img:"v4w3WsSY",footer:"_3ZqpIAzg","col-right":"_1DR1XSX1",colRight:"_1DR1XSX1",amount:"_28AzqnQ0","footer-attach":"_1x0Iy4Sc",footerAttach:"_1x0Iy4Sc","page-footer":"_3-4gkM0j",pageFooter:"_3-4gkM0j",field:"_2nMmEoS9",logout:"_2S_jgROy"}}});