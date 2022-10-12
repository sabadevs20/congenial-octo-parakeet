(this["webpackJsonpbuild-first-stellar-wallet"]=this["webpackJsonpbuild-first-stellar-wallet"]||[]).push([[0],{205:function(e,t){},206:function(e,t){},394:function(e,t){},396:function(e,t){},431:function(e,t){},433:function(e,t,n){},435:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n.n(r),c=n(101),s=n.n(c),o=n(8),i=n(18),u=n(5),l=n(7),d=n.n(l),j=n(1),b=n(0),p=function(e){var t=e.visible,n=e.onClose,r=e.onDone;return Object(b.jsxs)(j.Modal,{visible:t,onClose:n,children:[Object(b.jsx)(j.Modal.Heading,{children:"Sign out"}),Object(b.jsx)(j.Modal.Body,{children:Object(b.jsx)("p",{children:"Are you sure? This will remove saved account information from the local storage. Your account will not be affected."})}),Object(b.jsxs)(j.Modal.Footer,{children:[Object(b.jsx)(j.Button,{variant:j.Button.variant.secondary,onClick:n,children:"Cancel"}),Object(b.jsx)(j.Button,{onClick:function(){r(),n()},children:"Confirm"})]})]})},O=n(69),f=n.n(O),v=function(e){var t=e.visible,n=e.onClose,r=e.onDone,c=a.a.useState(""),s=Object(u.a)(c,2),o=s[0],i=s[1];return Object(b.jsxs)(j.Modal,{visible:t,onClose:n,children:[Object(b.jsx)(j.Modal.Heading,{children:"Copy secret key"}),Object(b.jsx)("p",{children:"Enter the pincode you used to encrypt the keystore data."}),Object(b.jsx)(j.Modal.Body,{children:Object(b.jsx)(j.Input,{id:"pincode",label:"Enter your keystore pincode",onBlur:function(e){return i(e.target.value)}})}),Object(b.jsxs)(j.Modal.Footer,{children:[Object(b.jsx)(j.Button,{variant:j.Button.variant.secondary,onClick:n,children:"Cancel"}),Object(b.jsx)(j.Button,{onClick:function(){o&&(r(o),n())},children:"Confirm"})]})]})},h=function(e){var t=e.visible,n=e.onClose,r=e.onDone,c=a.a.useState(""),s=Object(u.a)(c,2),o=s[0],i=s[1],l=a.a.useState(""),d=Object(u.a)(l,2),p=d[0],O=d[1],f=a.a.useState(""),v=Object(u.a)(f,2),h=v[0],x=v[1],y=a.a.useState(""),k=Object(u.a)(y,2),m=k[0],C=k[1],g=a.a.useState(""),S=Object(u.a)(g,2),B=S[0],w=S[1],I=a.a.useState(!1),M=Object(u.a)(I,2),E=M[0],K=M[1];a.a.useEffect((function(){t&&(i(""),O(""),x(""),C(""),w(""),K(!1))}),[t]);return Object(b.jsxs)(j.Modal,{visible:t,onClose:n,children:[Object(b.jsx)(j.Modal.Heading,{children:"Make Payment"}),Object(b.jsxs)(j.Modal.Body,{children:[Object(b.jsx)(j.Input,{id:"destination",label:"Enter destination address",onBlur:function(e){return i(e.target.value)}}),Object(b.jsx)(j.Input,{id:"amount",label:"Enter amount",onBlur:function(e){return O(e.target.value)},type:"number"}),Object(b.jsx)(j.Input,{id:"assetCode",label:"Enter asset code",onBlur:function(e){x(e.target.value),K("XLM"===e.target.value)}}),Object(b.jsx)(j.Input,{id:"assetIssuer",label:"Enter asset issuer",onBlur:function(e){return C(e.target.value)},disabled:E,note:E?"XLM is native asset":null}),Object(b.jsx)(j.Input,{id:"pincode",label:"Enter your keystore pincode",onBlur:function(e){return w(e.target.value)},note:"Pincode is needed to get the secret key from the keystore"})]}),Object(b.jsxs)(j.Modal.Footer,{children:[Object(b.jsx)(j.Button,{variant:j.Button.variant.secondary,onClick:n,children:"Cancel"}),Object(b.jsx)(j.Button,{onClick:function(){o&&p&&h&&B&&(E||m)&&(r({destination:o,amount:p,assetCode:h,assetIssuer:m,pincode:B}),n())},children:"Confirm"})]})]})},x=function(e){var t=e.visible,n=e.onClose,r=e.onDone,c=a.a.useState(""),s=Object(u.a)(c,2),o=s[0],i=s[1],l=a.a.useState(""),d=Object(u.a)(l,2),p=d[0],O=d[1],f=a.a.useState(""),v=Object(u.a)(f,2),h=v[0],x=v[1];return Object(b.jsxs)(j.Modal,{visible:t,onClose:n,children:[Object(b.jsx)(j.Modal.Heading,{children:"Trust Asset"}),Object(b.jsx)("p",{children:"Create a trustline to an asset."}),Object(b.jsxs)(j.Modal.Body,{children:[Object(b.jsx)(j.Input,{id:"assetCode",label:"Enter asset code",onBlur:function(e){return i(e.target.value)}}),Object(b.jsx)(j.Input,{id:"assetIssuer",label:"Enter asset issuer",onBlur:function(e){return O(e.target.value)}}),Object(b.jsx)(j.Input,{id:"pincode",label:"Enter your keystore pincode",onBlur:function(e){return x(e.target.value)},note:"Pincode is needed to get the secret key from the keystore"})]}),Object(b.jsxs)(j.Modal.Footer,{children:[Object(b.jsx)(j.Button,{variant:j.Button.variant.secondary,onClick:n,children:"Cancel"}),Object(b.jsx)(j.Button,{onClick:function(){o&&p&&h&&(r(o,p,h),n())},children:"Continue"})]})]})},y=n(180),k=n.n(y),m=function(e){e&&k()(e)},C="https://horizon-testnet.stellar.org",g=d.a.Networks.TESTNET,S=function(){var e=Object(i.a)(Object(o.a)().mark((function e(t){var n,r,a,c,s,i,u,l,j;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.amount,r=t.assetCode,a=t.assetIssuer,c=t.destination,s=t.secretKey,u=new d.a.Server(C),l=d.a.Keypair.fromSecret(s),j=l.publicKey(),e.prev=4,e.next=7,B({amount:n,assetCode:r,assetIssuer:a,destination:c,publicKey:j,server:u});case 7:i=e.sent,e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(4),new Error("Failed to build transaction");case 13:return e.prev=13,e.next=16,i.sign(l);case 16:e.next=21;break;case 18:throw e.prev=18,e.t1=e.catch(13),new Error("Failed to sign transaction");case 21:return e.next=23,u.submitTransaction(i);case 23:return e.abrupt("return",e.sent);case 24:case"end":return e.stop()}}),e,null,[[4,10],[13,18]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(i.a)(Object(o.a)().mark((function e(t){var n,r,a,c,s,i,u,l,j,b,p,O;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.amount,r=t.assetCode,a=t.assetIssuer,c=t.destination,s=t.publicKey,i=t.server,e.prev=1,e.next=4,i.loadAccount(s);case 4:return u=e.sent,l=u.sequence,e.next=8,new d.a.Account(s,l);case 8:return j=e.sent,b=r&&"XLM"!==r?new d.a.Asset(r,a):d.a.Asset.native(),p=d.a.Operation.payment({destination:c,asset:b,amount:n.toString(),withMuxing:!0}),e.t0=d.a.TransactionBuilder,e.t1=j,e.t2=d.a.BASE_FEE,e.t3=g,e.next=17,i.fetchTimebounds(100);case 17:return e.t4=e.sent,e.t5={fee:e.t2,networkPassphrase:e.t3,timebounds:e.t4},O=new e.t0(e.t1,e.t5).addOperation(p),e.abrupt("return",O.build());case 23:throw e.prev=23,e.t6=e.catch(1),new Error("Transaction failed");case 26:case"end":return e.stop()}}),e,null,[[1,23]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(i.a)(Object(o.a)().mark((function e(t){var n,r,a,c,s,i,u;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.secretKey,r=t.assetCode,a=t.assetIssuer,e.prev=1,c=new d.a.Server(C),s=d.a.Keypair.fromSecret(n),e.next=6,c.loadAccount(s.publicKey());case 6:return i=e.sent,(u=new d.a.TransactionBuilder(i,{fee:d.a.BASE_FEE,networkPassphrase:g}).addOperation(d.a.Operation.changeTrust({asset:new d.a.Asset(r,a)})).setTimeout(0).build()).sign(s),e.next=11,c.submitTransaction(u);case 11:return e.abrupt("return",e.sent);case 14:throw e.prev=14,e.t0=e.catch(1),new Error("Add trustline transaction failed");case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),I=function(e){var t=e.accountKeys,n=e.accountData,r=e.refreshAccount,c=a.a.useState(!1),s=Object(u.a)(c,2),l=s[0],p=s[1],O=a.a.useState(!1),y=Object(u.a)(O,2),k=y[0],C=y[1],g=a.a.useState(!1),B=Object(u.a)(g,2),I=B[0],M=B[1],E=a.a.useState(!1),K=Object(u.a)(E,2),A=K[0],_=K[1],T=function(e){if(null!==t&&void 0!==t&&t.keystore)try{return d.a.Keypair.fromSecret(f.a.decrypt(e,t.keystore))}catch(n){}},D=function(){var e=Object(i.a)(Object(o.a)().mark((function e(t,n,a){var c;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(!0),c=T(a).secret(),e.next=5,w({secretKey:c,assetCode:t,assetIssuer:n});case 5:r(),p(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),p(!1);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n,r){return e.apply(this,arguments)}}(),L=function(){var e=Object(i.a)(Object(o.a)().mark((function e(t){var n,a,c,s,i,u;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.destination,a=t.amount,c=t.assetCode,s=t.assetIssuer,i=t.pincode,e.prev=1,p(!0),u=T(i).secret(),e.next=6,S({destination:n,amount:a,assetCode:c,assetIssuer:s,secretKey:u});case 6:r(),p(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),p(!1);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"Account",children:[Object(b.jsx)(j.Heading3,{children:"Your account address"}),Object(b.jsx)(j.Identicon,{publicAddress:t.publicKey}),Object(b.jsxs)("div",{className:"Account__copyLinks",children:[Object(b.jsx)(j.TextLink,{onClick:function(){m(null===t||void 0===t?void 0:t.publicKey)},children:"Copy Address"}),Object(b.jsx)(j.TextLink,{onClick:function(){return C(!0)},children:"Copy Secret"})]}),Object(b.jsx)(j.Heading3,{children:"Balances"}),Object(b.jsx)("table",{className:"Balances",children:Object(b.jsx)("tbody",{children:null===n||void 0===n?void 0:n.balances.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.asset_code}),Object(b.jsx)("td",{children:e.balance})]},"".concat(e.asset_code,"-").concat(e.asset_issuer||"native"))}))})}),Object(b.jsxs)("div",{className:"Account__buttons",children:[Object(b.jsx)(j.Button,{onClick:r,isLoading:l,children:"Refresh Account"}),Object(b.jsx)(j.Button,{onClick:function(){return M(!0)},isLoading:l,children:"Trust Asset"}),Object(b.jsx)(j.Button,{onClick:function(){return _(!0)},isLoading:l,children:"Make Payment"})]}),Object(b.jsx)(v,{visible:k,onClose:function(){return C(!1)},onDone:function(e){var t=T(e).secret();m(t)}}),Object(b.jsx)(x,{visible:I,onClose:function(){return M(!1)},onDone:D}),Object(b.jsx)(h,{visible:A,onClose:function(){return _(!1)},onDone:L})]})},M=function(e){var t=e.visible,n=e.onClose,r=e.onDone,c=a.a.useState(""),s=Object(u.a)(c,2),o=s[0],i=s[1],l=a.a.useState(""),d=Object(u.a)(l,2),p=d[0],O=d[1],f=a.a.useState(""),v=Object(u.a)(f,2),h=v[0],x=v[1];return Object(b.jsxs)(j.Modal,{visible:t,onClose:n,children:[Object(b.jsx)(j.Modal.Heading,{children:"Sign in with a secret key"}),Object(b.jsxs)(j.Modal.Body,{children:[Object(b.jsx)("p",{children:"Enter a secret key and a pincode to encrypt the keystore data. You\u2019ll need to enter it any time you need to use a secret key."}),Object(b.jsx)(j.Input,{id:"secretKey",label:"Enter your secret key",onBlur:function(e){return i(e.target.value)}}),Object(b.jsx)(j.Input,{id:"pincode",label:"Enter a keystore pincode",onBlur:function(e){return O(e.target.value)}}),Object(b.jsx)(j.Input,{id:"pincodeConfirm",label:"Confirm keystore pincode",onBlur:function(e){return x(e.target.value)}})]}),Object(b.jsxs)(j.Modal.Footer,{children:[Object(b.jsx)(j.Button,{variant:j.Button.variant.secondary,onClick:n,children:"Cancel"}),Object(b.jsx)(j.Button,{onClick:function(){o&&p&&h&&p===h&&(r(o,p),n())},children:"Sign in"})]})]})},E=function(e){var t=e.visible,n=e.onClose,r=e.onDone,c=a.a.useState(""),s=Object(u.a)(c,2),o=s[0],i=s[1],l=a.a.useState(""),d=Object(u.a)(l,2),p=d[0],O=d[1];return Object(b.jsxs)(j.Modal,{visible:t,onClose:n,children:[Object(b.jsx)(j.Modal.Heading,{children:"Generate keypair"}),Object(b.jsxs)(j.Modal.Body,{children:[Object(b.jsx)("p",{children:"Enter a pincode to encrypt the keystore data. You\u2019ll need to enter it any time you need to use a secret key."}),Object(b.jsx)(j.Input,{id:"pincode",label:"Enter a keystore pincode",onBlur:function(e){return i(e.target.value)}}),Object(b.jsx)(j.Input,{id:"pincodeConfirm",label:"Confirm keystore pincode",onBlur:function(e){return O(e.target.value)}})]}),Object(b.jsxs)(j.Modal.Footer,{children:[Object(b.jsx)(j.Button,{variant:j.Button.variant.secondary,onClick:n,children:"Cancel"}),Object(b.jsx)(j.Button,{onClick:function(){o&&p&&o===p&&(r(o),n())},children:"Confirm"})]})]})},K=function(e){var t=e.createAndSetAccount,n=e.signInWithSecretKey,r=e.isUiUpdating,c=a.a.useState(!1),s=Object(u.a)(c,2),o=s[0],i=s[1],l=a.a.useState(!1),d=Object(u.a)(l,2),p=d[0],O=d[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)(j.Heading2,{children:"Benkiko DAO"}),Object(b.jsxs)("div",{className:"Intro__buttons",children:[Object(b.jsx)(j.Button,{onClick:function(){return i(!0)},isLoading:r,children:"Generate keypair for new account"}),Object(b.jsx)(j.Button,{onClick:function(){return O(!0)},children:"Sign in with a secret key"})]}),Object(b.jsx)(E,{visible:o,onClose:function(){return i(!1)},onDone:t}),Object(b.jsx)(M,{visible:p,onClose:function(){return O(!1)},onDone:n})]})},A=function(e,t){var n=e.publicKey(),r=e.secret();return{publicKey:n,keystore:f.a.encrypt(t,r,{adata:JSON.stringify({publicKey:n})})}},_=n(181),T=function(){var e=Object(i.a)(Object(o.a)().mark((function e(t){var n,r,a,c,s,i;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new d.a.Server(C),e.next=3,n.accounts().accountId(t).call();case 3:return r=e.sent,a=r.last_modified_time,c=r.balances,s=r.num_sponsoring,i=r.num_sponsored,e.abrupt("return",{last_modified_time:a,balances:c.reduce((function(e,t){var n;return n="native"===t.asset_type?{balance:t.balance,asset_code:"XLM"}:{balance:t.balance,asset_code:t.asset_code,asset_issuer:t.asset_issuer},[].concat(Object(_.a)(e),[n])}),[]),num_sponsoring:s,num_sponsored:i});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=(n(433),"app-example-account-key"),L=function(){var e=a.a.useState(null),t=Object(u.a)(e,2),n=t[0],r=t[1],c=a.a.useState(null),s=Object(u.a)(c,2),l=s[0],O=s[1],f=a.a.useState(!1),v=Object(u.a)(f,2),h=v[0],x=v[1],y=a.a.useState(!1),k=Object(u.a)(y,2),m=k[0],C=k[1],g=a.a.useState(!1),S=Object(u.a)(g,2),B=S[0],w=S[1],M=null===n||void 0===n?void 0:n.publicKey;a.a.useEffect((function(){var e=function(e){var t=localStorage.getItem(e);return t?JSON.parse(t):null}(D);if(e){var t=JSON.parse(e),n=t.publicKey,a=t.keystore;r({publicKey:n,keystore:a}),C(!0)}}),[]),a.a.useEffect((function(){var e=function(){var e=Object(i.a)(Object(o.a)().mark((function e(){var t;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m||!M){e.next=6;break}return e.next=3,T(M);case 3:t=e.sent,O(t),C(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[m,M]);var E=function(e){var t,n;x(!1),r(e),C(!0),t=D,n=JSON.stringify(e),localStorage.setItem(t,JSON.stringify(n))},_=function(){var e=Object(i.a)(Object(o.a)().mark((function e(t){var n,r;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),n=d.a.Keypair.random(),r=A(n,t),e.prev=3,e.next=6,fetch("https://friendbot.stellar.org?addr=".concat(r.publicKey));case 6:E(r),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(3);case 11:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j.Layout.Header,{projectTitle:"Benkiko DAO",onSignOut:function(){if(n)return function(){return w(!0)}}(),hasDarkModeToggle:!0}),Object(b.jsx)(j.Layout.Content,{children:Object(b.jsx)(j.Layout.Inset,{children:n?Object(b.jsx)(I,{accountKeys:n,accountData:l,refreshAccount:function(){return C(!0)}}):Object(b.jsx)(K,{createAndSetAccount:_,signInWithSecretKey:function(e,t){x(!0);var n=d.a.Keypair.fromSecret(e),r=A(n,t);E(r)},isUiUpdating:h})})}),Object(b.jsx)(p,{visible:B,onClose:function(){return w(!1)},onDone:function(){var e;r(null),e=D,localStorage.removeItem(e)}})]})};n(434);s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(L,{})}),document.getElementById("root"))}},[[435,1,2]]]);
//# sourceMappingURL=main.d268774a.chunk.js.map