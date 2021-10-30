(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[5],{10:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return g})),n.d(t,"b",(function(){return x}));var r=n(21),c=n.n(r),a=n(29),o=n(24),s=n.n(o),i=n(5),u=n(20);s.a.defaults.baseURL="https://connections-api.herokuapp.com";var b,l=function(e){s.a.defaults.headers.common.Authorization="Bearer ".concat(e)},j=function(){s.a.defaults.headers.common.Authorization=""},d=Object(i.c)("auth/register",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.post("/users/signup",t);case 3:return r=e.sent,l(r.data.token),e.abrupt("return",r.data);case 8:if(e.prev=8,e.t0=e.catch(0),(a=e.t0).response){e.next=13;break}throw e.t0;case 13:return 400===a.response.status?u.b.error("User creation error! Please try again!"):500===a.response.status?u.b.error("Oops! Server error! Please try later!"):u.b.error("Something went wrong!"),e.abrupt("return",n.rejectWithValue(a.response.data));case 15:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}()),h=Object(i.c)("auth/login",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,s.a.post("/users/login",t);case 4:return a=e.sent,o=a.data,l(o.token),e.abrupt("return",o);case 10:e.prev=10,e.t0=e.catch(1),r(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}()),O=Object(i.c)("auth/logout",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,s.a.post("/users/logout",t);case 4:j(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),r(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}()),f=Object(i.c)("auth/refresh",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,o,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(r=n.getState().auth.token)){e.next=3;break}return e.abrupt("return",n.rejectWithValue());case 3:return l(r),e.prev=4,e.next=7,s.a.get("/users/current");case 7:return a=e.sent,o=a.data,e.abrupt("return",o);case 12:if(e.prev=12,e.t0=e.catch(4),(i=e.t0).response){e.next=17;break}throw e.t0;case 17:return 400===i.response.status?u.b.error("User creation error! Please try again!"):500===i.response.status?u.b.error("Oops! Server error! Please try later!"):u.b.error("Something went wrong!"),e.abrupt("return",n.rejectWithValue(i.response.data));case 19:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t,n){return e.apply(this,arguments)}}()),p={register:d,logIn:h,logOut:O,fetchCurrentUser:f},g={getIsLoggedIn:function(e){return e.auth.isLoggedIn},getUserName:function(e){return e.auth.user.name},getInFetchingCurrent:function(e){return e.auth.isRefreshUser}},v=n(3),x=Object(i.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,error:null},extraReducers:(b={},Object(v.a)(b,p.register.fulfilled,(function(e,t){var n=t.payload;e.user=n.user,e.token=n.token,e.isLoggedIn=!0})),Object(v.a)(b,p.register.rejected,(function(e,t){var n=t.payload;e.error=n})),Object(v.a)(b,p.logIn.fulfilled,(function(e,t){var n=t.payload;e.user=n.user,e.token=n.token,e.isLoggedIn=!0})),Object(v.a)(b,p.logOut.fulfilled,(function(e){e.user={name:null,email:null},e.token=null,e.isLoggedIn=!1})),Object(v.a)(b,p.fetchCurrentUser.pending,(function(e){e.isRefreshUser=!0})),Object(v.a)(b,p.fetchCurrentUser.fulfilled,(function(e,t){var n=t.payload;e.user=n,e.isLoggedIn=!0,e.isRefreshUser=!1})),Object(v.a)(b,p.fetchCurrentUser.rejected,(function(e){e.isRefreshUser=!1})),b)}).reducer},115:function(e,t,n){},119:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(27),o=n.n(a),s=n(8),i=n(9),u=n(10),b=n(20),l=(n(90),n(131)),j=n(15),d=n(32),h=n.n(d),O=n(2),f=function(){var e=Object(i.c)(u.c.getIsLoggedIn);return Object(O.jsxs)("nav",{children:[Object(O.jsx)(j.b,{exact:!0,to:"/",activeClassName:h.a.activeLink,className:h.a.link,children:"Home"}),e&&Object(O.jsx)(j.b,{to:"/contact",activeClassName:h.a.activeLink,className:h.a.link,children:"Contact"})]})},p=n(33),g=n.n(p),v=function(){return Object(O.jsxs)("nav",{children:[Object(O.jsx)(j.b,{to:"/register",activeClassName:g.a.activeLink,className:g.a.link,children:"Register"}),Object(O.jsx)(j.b,{to:"/login",activeClassName:g.a.activeLink,className:g.a.link,children:"Login"})]})},x=n(26),k=n.n(x),m=function(){var e=Object(i.b)(),t=Object(i.c)(u.c.getUserName);return Object(O.jsxs)("div",{className:k.a.container,children:[Object(O.jsx)("img",{src:"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg",alt:"",width:"32",className:k.a.avatar}),Object(O.jsxs)("span",{className:k.a.name,children:["\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c, ",t,"!"]}),Object(O.jsxs)("button",{className:k.a.button,type:"button",onClick:function(){return e(u.a.logOut())},children:[Object(O.jsxs)("svg",{className:k.a.exit,height:"24",viewBox:"0 0 512 512",width:"32",xmlns:"http://www.w3.org/2000/svg",children:[Object(O.jsx)("path",{d:"m480.971 239.029-90.51-90.509a24 24 0 0 0 -33.942 0 24 24 0 0 0 0 33.941l49.54 49.539h-262.059a24 24 0 0 0 -24 24 24 24 0 0 0 24 24h262.059l-49.54 49.539a24 24 0 0 0 33.942 33.941l90.51-90.51a24 24 0 0 0 0-33.941z"}),Object(O.jsx)("path",{d:"m304 392a24 24 0 0 0 -24 24v24h-208v-368h208v24a24 24 0 0 0 48 0v-32a40 40 0 0 0 -40-40h-224a40 40 0 0 0 -40 40v384a40 40 0 0 0 40 40h224a40 40 0 0 0 40-40v-32a24 24 0 0 0 -24-24z"})]}),Object(O.jsx)("span",{className:k.a.label,children:"Exit"})]})]})},_=n(55),w=n.n(_),y=function(){var e=Object(i.c)(u.c.getIsLoggedIn);return Object(O.jsxs)("header",{className:w.a.header,children:[Object(O.jsx)(f,{}),e?Object(O.jsx)(m,{}):Object(O.jsx)(v,{})]})},C=n(36),N=n(22),L=n(6),U=["children","redirectTo"];function I(e){var t=e.children,n=e.redirectTo,r=void 0===n?"/":n,c=Object(L.a)(e,U),a=Object(i.c)(u.c.getIsLoggedIn);return Object(O.jsx)(s.b,Object(N.a)(Object(N.a)({},c),{},{children:a?t:Object(O.jsx)(s.a,{to:r})}))}var S=["children","redirectTo","restricted"];function P(e){var t=e.children,n=e.redirectTo,r=void 0===n?"/":n,c=e.restricted,a=void 0!==c&&c,o=Object(L.a)(e,S),b=Object(i.c)(u.c.getIsLoggedIn)&&a;return Object(O.jsx)(s.b,Object(N.a)(Object(N.a)({},o),{},{children:b?Object(O.jsx)(s.a,{to:r}):t}))}var R=Object(r.lazy)((function(){return n.e(0).then(n.bind(null,145))})),z=Object(r.lazy)((function(){return Promise.all([n.e(8),n.e(3)]).then(n.bind(null,149))})),T=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,146))})),A=Object(r.lazy)((function(){return n.e(1).then(n.bind(null,147))})),E=Object(r.lazy)((function(){return n.e(2).then(n.bind(null,148))}));function M(){var e=Object(i.b)(),t=Object(i.c)(u.c.getInFetchingCurrent);return Object(r.useEffect)((function(){e(u.a.fetchCurrentUser())}),[e]),!t&&Object(O.jsxs)(l.a,{children:[Object(O.jsx)(y,{}),Object(O.jsx)(r.Suspense,{fallback:Object(O.jsx)(C.a,{}),children:Object(O.jsxs)(s.d,{children:[Object(O.jsx)(P,{path:"/",exact:!0,children:Object(O.jsx)(R,{})}),Object(O.jsx)(I,{path:"/contact",exact:!0,redirectTo:"/login",children:Object(O.jsx)(z,{})}),Object(O.jsx)(P,{path:"/register",restricted:!0,children:Object(O.jsx)(T,{})}),Object(O.jsx)(P,{path:"/login",restricted:!0,redirectTo:"/contact",children:Object(O.jsx)(A,{})}),Object(O.jsx)(P,{children:Object(O.jsx)(E,{})})]})}),Object(O.jsx)(b.a,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}n(115);var W,F,q,B=n(23),V=n(5),H=n(18),J=n(43),Z=n.n(J),D=n(3),G=n(11),Q=n(7),Y=Object(V.d)([],(W={},Object(D.a)(W,Q.j,(function(e,t){return t.payload})),Object(D.a)(W,Q.c,(function(e,t){return[t.payload].concat(Object(B.a)(e))})),Object(D.a)(W,Q.g,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),W)),K=Object(V.d)(!1,(F={},Object(D.a)(F,Q.i,(function(){return!0})),Object(D.a)(F,Q.j,(function(){return!1})),Object(D.a)(F,Q.h,(function(){return!1})),Object(D.a)(F,Q.b,(function(){return!0})),Object(D.a)(F,Q.c,(function(){return!1})),Object(D.a)(F,Q.a,(function(){return!1})),Object(D.a)(F,Q.f,(function(){return!0})),Object(D.a)(F,Q.g,(function(){return!1})),Object(D.a)(F,Q.e,(function(){return!1})),F)),X=Object(V.d)("",Object(D.a)({},Q.d,(function(e,t){return t.payload}))),$=Object(V.d)(!1,(q={},Object(D.a)(q,Q.i,(function(){return""})),Object(D.a)(q,Q.j,(function(){return""})),Object(D.a)(q,Q.h,(function(e,t){return t.payload})),Object(D.a)(q,Q.b,(function(){return""})),Object(D.a)(q,Q.c,(function(){return""})),Object(D.a)(q,Q.a,(function(e,t){return t.payload})),Object(D.a)(q,Q.f,(function(){return""})),Object(D.a)(q,Q.g,(function(){return""})),Object(D.a)(q,Q.e,(function(e,t){return t.payload})),q)),ee=Object(G.b)({items:Y,filter:X,loading:K,error:$}),te=Object(B.a)(Object(V.f)({serializableCheck:{ignoredActions:[H.a,H.f,H.b,H.c,H.d,H.e]}})),ne={key:"contact",storage:Z.a,blacklist:["filter"]},re={key:"auth",storage:Z.a,whitelist:["token"]},ce=Object(V.a)({reducer:{auth:Object(H.g)(re,u.b),contacts:Object(H.g)(ne,ee)},middleware:te,devTools:!1}),ae=Object(H.h)(ce),oe=n(60);n(118);o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(i.a,{store:ce,children:Object(O.jsx)(oe.a,{loading:Object(O.jsx)(C.a,{}),persistor:ae,children:Object(O.jsx)(j.a,{children:Object(O.jsx)(M,{})})})})}),document.getElementById("root"))},26:function(e,t,n){e.exports={container:"UserMenu_container__2qYWu",avatar:"UserMenu_avatar__2usWP",name:"UserMenu_name__37LHs",button:"UserMenu_button__2ZQkU",label:"UserMenu_label__2gGc0",exit:"UserMenu_exit__1D3Iq"}},32:function(e,t,n){e.exports={link:"Navigation_link__FUt1n",activeLink:"Navigation_activeLink__2PbJl Navigation_link__FUt1n"}},33:function(e,t,n){e.exports={link:"AuthNavigation_link__1CCS5",activeLink:"AuthNavigation_activeLink__1eEtT AuthNavigation_link__1CCS5"}},36:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(56),c=n.n(r),a=(n(114),n(2)),o=function(){return Object(a.jsx)(c.a,{className:"loader",type:"Audio",color:"#464646",height:40,width:40,"\u044b":!0,timeout:3e3})}},55:function(e,t,n){e.exports={header:"AppBar_header__1m2ZR"}},7:function(e,t,n){"use strict";n.d(t,"i",(function(){return c})),n.d(t,"j",(function(){return a})),n.d(t,"h",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return u})),n.d(t,"f",(function(){return b})),n.d(t,"g",(function(){return l})),n.d(t,"e",(function(){return j})),n.d(t,"d",(function(){return d}));var r=n(5),c=Object(r.b)("phonebook/fetchPhonebookRequest"),a=Object(r.b)("phonebook/fetchPhonebookSuccess"),o=Object(r.b)("phonebook/fetchPhonebookError"),s=Object(r.b)("contacts/addContactRequest"),i=Object(r.b)("contacts/addContactSuccess"),u=Object(r.b)("contacts/addContactError"),b=Object(r.b)("contact/deleteContactRequest"),l=Object(r.b)("contact/deleteContactSuccess"),j=Object(r.b)("contacts/deleteContactError"),d=Object(r.b)("phonebook/ChangeFilter")}},[[119,6,7]]]);
//# sourceMappingURL=main.4f0d55bc.chunk.js.map