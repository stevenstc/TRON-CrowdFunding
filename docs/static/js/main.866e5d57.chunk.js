(this["webpackJsonpcrowdfunding-earntron"]=this["webpackJsonpcrowdfunding-earntron"]||[]).push([[0],{195:function(e,t,a){},199:function(e,t,a){},200:function(e,t,a){},201:function(e,t,a){},202:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(57),o=a.n(c),l=a(2),s=a.n(l),i=a(3),u=a(7),d=a(8),m=a(10),f=a(9),p=a(58),v=a.n(p),w={tronWeb:!1,contract:!1,setTronWeb(e){this.tronWeb=e},setContract(e,t){var a=this;return Object(i.a)(s.a.mark((function n(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.contract().at(t);case 2:a.contract=n.sent;case 3:case"end":return n.stop()}}),n)})))()}},b=a(11),h=(a(195),"TV1R4Vqw3eiabXfaYB42YAeadXYSzXwcwt"),E=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).deposit=n.deposit.bind(Object(b.a)(n)),n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.setContract(window.tronWeb,h);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"deposit",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n,r,c,o,l,i,u,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=document.location.href).indexOf("?")>0){for(a=t.split("?")[1],n=a.split("&"),r={},c=0,o=n.length;c<o;c++)l=n[c].split("="),r[l[0]]=unescape(decodeURI(l[1]));r.capital?(document.getElementById("tarifa").value=1,document.getElementById("sponsor").value="T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb"):34===r.ref.length?(document.getElementById("tarifa").value=0,document.getElementById("sponsor").value=r.ref):(document.getElementById("tarifa").value=0,document.getElementById("sponsor").value="T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb")}else document.getElementById("tarifa").value=0,document.getElementById("sponsor").value="T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb";return i=document.getElementById("amount").value,u=document.getElementById("sponsor").value,d=document.getElementById("tarifa").value,document.getElementById("amount").value="",e.abrupt("return",w.contract.deposit(d,u).send({shouldPollResponse:!0,callValue:1e6*i}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"card wow bounceInUp"},r.a.createElement("i",{className:"fa fa-diamond"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Gold Premium"),r.a.createElement("h6",{className:"card-text"},"Return: ",r.a.createElement("strong",null,"200%"),r.a.createElement("br",null),r.a.createElement("strong",null,"2%")," per day",r.a.createElement("br",null)),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",id:"amount",placeholder:"Min. 200 TRX"}),r.a.createElement("p",{className:"card-text"},"Debes tener ~3 TRX para hacer la transacci\xf3n"))),r.a.createElement("button",{type:"button",class:"btn btn-light",onClick:function(){return e.deposit()}},"Invertir")))}}]),a}(n.Component),g=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={totalInvestors:0,totalInvested:0,totalRefRewards:0},n.totalInvestors=n.totalInvestors.bind(Object(b.a)(n)),n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.setContract(window.tronWeb,h);case 2:setInterval((function(){return t.totalInvestors()}),1e3);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"totalInvestors",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.contract.setstate().call();case 2:t=e.sent,this.setState({totalInvestors:parseInt(t.Investors._hex),totalInvested:parseInt(t.Invested._hex)/1e6,totalRefRewards:parseInt(t.RefRewards._hex)/1e6});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.totalInvestors,a=e.totalInvested,n=e.totalRefRewards;return r.a.createElement("div",{className:"row counters"},r.a.createElement("div",{className:"col-lg-4 col-12 text-center"},r.a.createElement("span",{"data-toggle":"counter-up"},t),r.a.createElement("p",null,"Inversores Globales")),r.a.createElement("div",{className:"col-lg-4 col-12 text-center"},r.a.createElement("span",{"data-toggle":"counter-up"},a.toFixed(2)," TRX"),r.a.createElement("p",null,"Invertido Global")),r.a.createElement("div",{className:"col-lg-4 col-12 text-center"},r.a.createElement("span",{"data-toggle":"counter-up"},n.toFixed(2)," TRX"),r.a.createElement("p",null,"Recompensas  Globales Referidos")))}}]),a}(n.Component),x=a(59),N=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={direccion:"",link2:"#",link:"Haz una inversi\xf3n para obtener el LINK de referido",registered:!1,balanceRef:0,totalRef:0,invested:0,paidAt:0,my:0,withdrawn:0},n.Investors=n.Investors.bind(Object(b.a)(n)),n.Link=n.Link.bind(Object(b.a)(n)),n.withdraw=n.withdraw.bind(Object(b.a)(n)),n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.setContract(window.tronWeb,h);case 2:setInterval((function(){return t.Investors()}),1e3),setInterval((function(){return t.Link()}),1e3);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"Link",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.registered){e.next=12;break}return(t=document.location.href).indexOf("?")>0&&(t=t.split("?")[0]),e.next=6,window.tronWeb.trx.getAccount();case 6:a=e.sent,a=window.tronWeb.address.fromHex(a.address),a=t+"?ref="+a,this.setState({link2:a,link:"Presiona COPIAR para obtener el LINK de referido"}),e.next=13;break;case 12:this.setState({link2:"https://earntron.ml/",link:"Haz una inversi\xf3n para obtener el LINK de referido"});case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"Investors",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.tronWeb.trx.getAccount();case 2:return t=e.sent,e.next=5,w.contract.investors(t.address).call();case 5:return a=e.sent,e.next=8,w.contract.MYwithdrawable().call();case 8:n=e.sent,this.setState({direccion:window.tronWeb.address.fromHex(t.address),registered:a.registered,balanceRef:parseInt(a.balanceRef._hex)/1e6,totalRef:parseInt(a.totalRef._hex)/1e6,invested:parseInt(a.invested._hex)/1e6,paidAt:parseInt(a.paidAt._hex)/1e6,my:parseInt(n.amount._hex)/1e6,withdrawn:parseInt(a.withdrawn._hex)/1e6});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"withdraw",value:function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.contract.withdraw().send();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.balanceRef,n=t.totalRef,c=t.invested,o=t.withdrawn,l=t.my,s=t.direccion,i=t.link,u=t.link2;return r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"section-header"},r.a.createElement("h3",null,"My Office:"),r.a.createElement("p",{style:{"text-align":"center","max-width":"90%"}},s,r.a.createElement("br",null),r.a.createElement("a",{href:u},i),r.a.createElement("br",null),r.a.createElement(x.CopyToClipboard,{text:u},r.a.createElement("button",{type:"button",className:"btn btn-info"},"COPIAR")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 col-lg-5 offset-lg-1 wow bounceInUp","data-wow-duration":"1.4s"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"icon"},r.a.createElement("i",{className:"ion-ios-analytics-outline",style:{color:"#ff689b"}})),r.a.createElement("h4",{className:"title"},r.a.createElement("a",{href:"#services"},c," TRX")),r.a.createElement("p",{className:"description"},"Total invertido"))),r.a.createElement("div",{className:"col-md-6 col-lg-5 wow bounceInUp","data-wow-duration":"1.4s"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"icon"},r.a.createElement("i",{className:"ion-ios-bookmarks-outline",style:{color:"#e9bf06"}})),r.a.createElement("h4",{className:"title"},r.a.createElement("a",{href:"#services"},n," TRX")),r.a.createElement("p",{className:"description"},"Total ganancias por referidos"))),r.a.createElement("div",{className:"col-md-6 col-lg-5 offset-lg-1 wow bounceInUp","data-wow-delay":"0.1s","data-wow-duration":"1.4s"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"icon"},r.a.createElement("i",{className:"ion-ios-paper-outline",style:{color:"#3fcdc7"}})),r.a.createElement("p",{className:"description"},"Mi balance"),r.a.createElement("h4",{className:"title"},r.a.createElement("a",{href:"#services"},l," TRX")))),r.a.createElement("div",{className:"col-md-6 col-lg-5 wow bounceInUp","data-wow-delay":"0.1s","data-wow-duration":"1.4s"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"icon"},r.a.createElement("i",{className:"ion-ios-paper-outline",style:{color:"#3fcdc7"}})),r.a.createElement("p",{className:"description"},"Balance por referidos"),r.a.createElement("h4",{className:"title"},r.a.createElement("a",{href:"#services"}," ",a," TRX")))),r.a.createElement("div",{className:"col-md-6 col-lg-5 offset-lg-1 wow bounceInUp","data-wow-delay":"0.1s","data-wow-duration":"1.4s"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"icon"},r.a.createElement("i",{className:"ion-ios-speedometer-outline",style:{color:"#41cf2e"}})),r.a.createElement("h4",{className:"title"},r.a.createElement("a",{href:"#services"},"Disponible")),r.a.createElement("p",{className:"description"},a+l," TRX ",r.a.createElement("button",{type:"button",className:"btn btn-info",onClick:function(){return e.withdraw()}},"Retirar")))),r.a.createElement("div",{className:"col-md-6 col-lg-5 wow bounceInUp","data-wow-delay":"0.2s","data-wow-duration":"1.4s"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"icon"},r.a.createElement("i",{className:"ion-ios-clock-outline",style:{color:"#4680ff"}})),r.a.createElement("h4",{className:"title"},r.a.createElement("a",{href:"#services"},"Retirado")),r.a.createElement("p",{className:"description"},o," TRX")))))}}]),a}(n.Component),y=(a(199),function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={accountAddress:"Billetera NO conectada",accountBalance:"Billetera NO conectada",accountBandwidth:"Billetera NO conectada"},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){return e.fetchAccountAddress()}),1e3),setInterval((function(){return e.fetchAccountBalance()}),1e3),setInterval((function(){return e.fetchAccountBandwidth()}),1e3)}},{key:"fetchAccountAddress",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.tronWeb.trx.getAccount();case 2:t=e.sent,a=t.address,n=window.tronWeb.address.fromHex(a),this.setState({accountAddress:n});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchAccountBalance",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.tronWeb.trx.getBalance();case 2:t=e.sent,a=window.tronWeb.fromSun(t),this.setState({accountBalance:a});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchAccountBandwidth",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.tronWeb.trx.getBandwidth();case 2:t=e.sent,this.setState({accountBandwidth:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.accountAddress,a=e.accountBalance,n=e.accountBandwidth;return r.a.createElement("div",{className:"col-lg-5 mb-5"},r.a.createElement("div",{className:"card wow bounceInUp"},r.a.createElement("i",{className:"fa fa-address-card-o"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Informaci\xf3n de la cuenta"),r.a.createElement("h6",{className:"card-text"},"Direcci\xf3n:",r.a.createElement("br",null),r.a.createElement("strong",null,r.a.createElement("span",null,t)),r.a.createElement("br",null),r.a.createElement("br",null),"Balance:",r.a.createElement("br",null),r.a.createElement("strong",null,r.a.createElement("span",null,a," TRX")),r.a.createElement("br",null),r.a.createElement("br",null),"Bandwidth:",r.a.createElement("br",null),r.a.createElement("strong",null,r.a.createElement("span",null,n)),r.a.createElement("br",null)))))}}]),a}(n.Component)),k=a(60),I=a.n(k),O=(a(200),"https://chrome.google.com/webstore/detail/ibnejdfjmmkpcnlpebklmnkoeoihofec/"),j=r.a.createElement("div",{className:"logo col-xs-12 col-md-4 text-center"},r.a.createElement("img",{src:I.a,className:"img-fluid",alt:"TronLink logo"})),W=function(){window.open(O,"_blank")},R=function(e){var t=e.installed;return void 0!==t&&t?r.a.createElement("div",{className:"tronLink hover",onClick:W},r.a.createElement("div",{className:"info"},r.a.createElement("h1",null,"Log in Required"),r.a.createElement("p",null,"TronLink is installed but you must first log in. Open TronLink from the browser bar and set up your first wallet or decrypt a previously-created wallet.")),j):r.a.createElement("div",{className:"tronLink row",onClick:W},r.a.createElement("div",{className:"info col-xs-12 col-md-8"},r.a.createElement("h1",null,"TronLink Required"),r.a.createElement("p",null,"To create a post or tip others you must install TronLink. TronLink is a TRON wallet for the browser that can be ",r.a.createElement("a",{href:O,target:"_blank",rel:"noopener noreferrer"},"installed from the Chrome Webstore"),". Once installed, return back and refresh the page.")),j)},B=(a(201),function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={tronWeb:{installed:!1,loggedIn:!1}},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){var a={installed:!!window.tronWeb,loggedIn:window.tronWeb&&window.tronWeb.ready};if(a.installed)return t.setState({tronWeb:a}),e();var n=0,r=setInterval((function(){if(n>=10){return window.tronWeb=new v.a("https://api.trongrid.io","https://api.trongrid.io","https://api.trongrid.io"),t.setState({tronWeb:{installed:!1,loggedIn:!1}}),clearInterval(r),e()}if(a.installed=!!window.tronWeb,a.loggedIn=window.tronWeb&&window.tronWeb.ready,!a.installed)return n++;t.setState({tronWeb:a}),e()}),100)}));case 2:this.state.tronWeb.loggedIn||(window.tronWeb.defaultAddress={hex:window.tronWeb.address.toHex("TWiWt5SEDzaEqS6kE5gandWMNfxR2B5xzg"),base58:"TWiWt5SEDzaEqS6kE5gandWMNfxR2B5xzg"},window.tronWeb.on("addressChange",(function(){t.state.tronWeb.loggedIn||t.setState({tronWeb:{installed:!0,loggedIn:!0}})}))),w.setTronWeb(window.tronWeb);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.tronWeb.installed?this.state.tronWeb.loggedIn?r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("section",{id:"why-us",className:"wow fadeIn"},r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"section-header"},r.a.createElement("h3",null,"Has tu inversi\xf3n")),r.a.createElement("div",{className:"row row-eq-height justify-content-center"},r.a.createElement(E,null),r.a.createElement(y,null)),r.a.createElement("div",null,r.a.createElement(g,null)))),r.a.createElement("section",{id:"services",className:"section-bg"},r.a.createElement(N,null)))):r.a.createElement(R,{installed:!0}):r.a.createElement(R,null)}}]),a}(n.Component)),T=document.getElementById("root");o.a.render(r.a.createElement(B,null),T)},60:function(e,t,a){e.exports=a.p+"static/media/TronLinkLogo.d3a8f115.png"},61:function(e,t,a){e.exports=a(202)},90:function(e,t){},91:function(e,t){}},[[61,1,2]]]);
//# sourceMappingURL=main.866e5d57.chunk.js.map