(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{3:function(e,t,a){"use strict";a.r(t),a.d(t,"db",function(){return l}),a.d(t,"functions",function(){return c}),a.d(t,"auth",function(){return r});var n=a(20);a(48),a(51),a(53);n.initializeApp({apiKey:"AIzaSyDqSPSxMQOmTP6R2qOauDNYrBrKRPvfbc0",authDomain:"smiles-ai.firebaseapp.com",databaseURL:"https://smiles-ai.firebaseio.com",projectId:"smiles-ai",storageBucket:"smiles-ai.appspot.com",messagingSenderId:"165351250419",appId:"1:165351250419:web:d08a3639876167ba"});var l=n.firestore(),c=n.functions(),r=n.auth()},32:function(e,t,a){e.exports={form:"signup_form__1DaXr"}},33:function(e,t,a){e.exports={form:"signin_form__2rg93"}},34:function(e,t,a){e.exports=a.p+"static/media/bubble.a53c9901.svg"},35:function(e,t,a){e.exports=a.p+"static/media/bubble-people.1c81151e.svg"},36:function(e,t,a){e.exports=a.p+"static/media/join-project.4ab4499b.svg"},37:function(e,t,a){e.exports=a.p+"static/media/propose-project.16c0f265.svg"},4:function(e,t,a){e.exports={content:"App_content__3La4L",header:"App_header__3ZZ1n",logo:"App_logo__1ItuU",auth:"App_auth__3brsa",people:"App_people__KaCT_",bubble:"App_bubble__1fIMU",pushContent:"App_pushContent__2vvGu",slogan:"App_slogan__3779v",pitch:"App_pitch__1PHLw",offers:"App_offers__34IRo",offer:"App_offer__2pRC3",footer:"App_footer__29Fsv"}},40:function(e,t,a){e.exports=a(63)},45:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(21),r=a.n(c),o=(a(45),a(14)),s=a(16),i=a(15),m=a(4),u=a.n(m),p=a(13),d=a(32),E=a.n(d),f=a(3),h={firstName:"",lastName:"",email:"",password:""},b=function(e,t){switch(t.type){case"CHANGE_FIRSTNAME":return Object(p.a)({},e,{firstName:t.value});case"CHANGE_LASTNAME":return Object(p.a)({},e,{lastName:t.value});case"CHANGE_EMAIL":return Object(p.a)({},e,{email:t.value});case"CHANGE_PASSWORD":return Object(p.a)({},e,{password:t.value});default:return e}};function v(e){var t=Object(n.useReducer)(b,h),a=Object(i.a)(t,2),c=a[0],r=a[1];return l.a.createElement("div",{className:"modall"},l.a.createElement("form",{className:E.a.form},l.a.createElement("input",{type:"text",placeholder:"First Name",name:"firstName",value:c.firstName,onChange:function(e){return r({type:"CHANGE_FIRSTNAME",value:e.target.value})}}),l.a.createElement("input",{type:"text",placeholder:"Last Name",name:"lastName",value:c.lastName,onChange:function(e){return r({type:"CHANGE_LASTNAME",value:e.target.value})}}),l.a.createElement("input",{type:"email",placeholder:"Company Email",name:"email",value:c.email,onChange:function(e){return r({type:"CHANGE_EMAIL",value:e.target.value})}}),l.a.createElement("input",{type:"password",placeholder:"Password",name:"password",value:c.password,onChange:function(e){return r({type:"CHANGE_PASSWORD",value:e.target.value})}}),l.a.createElement("button",{type:"submit",onClick:function(t){t.preventDefault(),t.stopPropagation(),f.auth.createUserWithEmailAndPassword(c.email,c.password).then(function(t){e.onClick&&e.onClick(),f.db.collection("users").doc(t.user.uid).set({firstName:c.firstName,lastName:c.lastName,email:c.email})}).catch(function(e){})}},"Create Account")))}var N=a(33),g=a.n(N),j={email:"",password:""},y=function(e,t){switch(t.type){case"CHANGE_EMAIL":return Object(p.a)({},e,{email:t.value});case"CHANGE_PASSWORD":return Object(p.a)({},e,{password:t.value});default:return e}};function _(e){var t=Object(n.useReducer)(y,j),a=Object(i.a)(t,2),c=a[0],r=a[1];return l.a.createElement("div",{className:"modall"},l.a.createElement("form",{className:g.a.form},l.a.createElement("input",{type:"email",placeholder:"Company Email",name:"email",value:c.email,onChange:function(e){return r({type:"CHANGE_EMAIL",value:e.target.value})}}),l.a.createElement("input",{type:"password",placeholder:"Password",name:"password",value:c.password,onChange:function(e){return r({type:"CHANGE_PASSWORD",value:e.target.value})}}),l.a.createElement("button",{type:"submit",onClick:function(t){t.preventDefault(),t.stopPropagation(),f.auth.signInWithEmailAndPassword(c.email,c.password).then(function(t){e.onClick&&e.onClick(),f.db.collection("users").doc(t.user.uid).set({firstName:c.firstName,lastName:c.lastName,email:c.email})}).catch(function(e){})}},"Login")))}var C=a(6),O=a(7),w=a(9),x=a(8),k=a(10),A=document.getElementById("modal-root"),I=function(e){function t(e){var a;return Object(C.a)(this,t),(a=Object(w.a)(this,Object(x.a)(t).call(this,e))).el=document.createElement("div"),a}return Object(k.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){A.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){A.removeChild(this.el)}},{key:"render",value:function(){return r.a.createPortal(this.props.children,this.el)}}]),t}(l.a.Component),S=a(34),P=a.n(S),D=a(35),T=a.n(D),L=a(36),H=a.n(L),F=a(37),M=a.n(F),R=l.a.createContext({user:null});var G=function(){var e=Object(n.useContext)(R),t=Object(n.useState)(!1),a=Object(i.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(!1),m=Object(i.a)(s,2),p=m[0],d=m[1];return Object(n.useEffect)(function(){function e(e){27===e.keyCode&&(r(!1),d(!1))}return document.addEventListener("keydown",e,!1),function(){document.removeEventListener("keydown",e,!1)}},[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:u.a.content},c&&l.a.createElement(I,null,l.a.createElement(v,{onClick:function(){return r(!1)}})),p&&l.a.createElement(I,null,l.a.createElement(_,{onClick:function(){return d(!1)}})),l.a.createElement("header",{className:u.a.header},l.a.createElement(o.b,{to:"/"},l.a.createElement("img",{className:u.a.logo,src:"https://firebasestorage.googleapis.com/v0/b/smiles-ai-images/o/logo_smile.ai.jpg?alt=media&token=ea199bd3-4c7c-47fe-9a58-7c9efd054ce4",alt:"Our logo"})),l.a.createElement("div",{className:u.a.auth},e.user&&e.user.firstName&&l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{style:{fontSize:"12px"}},"Hello, ",e.user.firstName),l.a.createElement("a",{onClick:function(){return f.auth.signOut()},style:{fontSize:"12px"}},"Sign out")),!e.user&&l.a.createElement(l.a.Fragment,null,l.a.createElement("a",{onClick:function(){return d(!0)}}," Sign in "),l.a.createElement("a",{onClick:function(){return r(!0)}}," Sign up ")))),l.a.createElement("div",{className:u.a.pushContent}),l.a.createElement("div",null,l.a.createElement("img",{src:P.a,className:u.a.bubble}),l.a.createElement("img",{src:T.a,className:u.a.people})),l.a.createElement("section",{className:u.a.slogan},l.a.createElement("h1",null," We provide the time."),l.a.createElement("h1",null," You provide the hands."),l.a.createElement("p",null,"Corthropy wants to make an impact. You too. Let\u2019s do it! Choose from the available projects and we\u2019ll give you time off your work week to participate. It\u2019s never been easier.")),l.a.createElement("section",{className:u.a.pitch},l.a.createElement("h1",null," What you can do with Corthropy & Fond Finaz "),l.a.createElement("div",{className:u.a.offers},l.a.createElement(o.b,{to:"/projects",style:{textDecoration:"none",color:"black"}},l.a.createElement("div",{className:u.a.offer},l.a.createElement("img",{src:H.a}),l.a.createElement("h3",null," Join an existing project "),l.a.createElement("p",null,"Choose from a huge selection and find exactly the project that really suits you"))),l.a.createElement("div",{className:u.a.offer},l.a.createElement("img",{src:M.a}),l.a.createElement("h3",null," Propose project "),l.a.createElement("p",null,"Do you know of a project that you want to support? Tell us more!"))))),l.a.createElement("footer",{className:u.a.footer}))},W=a(24),B=function(e){function t(e){var a;return Object(C.a)(this,t),(a=Object(w.a)(this,Object(x.a)(t).call(this,e))).state={docs:[]},a}return Object(k.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.db.collection("projects").orderBy("projectName").get().then(function(t){t.docs.forEach(function(t){var a=e.state.docs,n=[].concat(Object(W.a)(a),[Object(p.a)({},t.data(),{id:t.id})]);e.setState({docs:n})})})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("button",{onClick:function(){return f.auth.signOut()}}," Sign out "),l.a.createElement("h1",null,"Projects"),l.a.createElement("strong",null,"Select a project")),l.a.createElement("div",{className:"container"},l.a.createElement("ul",{className:"list-unstyled"},this.state.docs.map(function(e){return l.a.createElement("li",{className:"media my-3",key:e.id},l.a.createElement("img",{src:"https://www.xing.com/image/c_2_b_d6d996c21_22325856_4/thomas-stanner-foto.256x256.jpg",className:"align-self-center mr-3",alt:"..."}),l.a.createElement("div",{className:"media-body"},l.a.createElement(o.b,{to:"projects/".concat(e.segmentID)},l.a.createElement("h5",{className:"mt-0 mb-1"}," ",e.projectName," ")),l.a.createElement("p",null,"Contact: ",e.email),l.a.createElement("p",null,"Organizer: ",e.firstName," ",e.lastName),l.a.createElement("p",null,"Description: ",e.description)))}))))}}]),t}(l.a.Component),q=a(23),z=(a(61),a(3).functions,function(e){function t(){var e;return Object(C.a)(this,t),(e=Object(w.a)(this,Object(x.a)(t).call(this))).state={subscribed:!1},e.handleClick=e.handleClick.bind(Object(q.a)(e)),e}return Object(k.a)(t,e),Object(O.a)(t,[{key:"handleClick",value:function(e){e.preventDefault();var t=document.getElementById("apply-firstName").value,a=document.getElementById("apply-lastName").value,n=document.getElementById("apply-email").value,l=window.location.pathname.split("/")[2],c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({first_name:t,last_name:a,email:n,segment_id:l})};fetch("https://us-central1-smiles-ai.cloudfunctions.net/subscribeUserToProject",c)}},{key:"render",value:function(){return l.a.createElement("div",{className:"popup"},l.a.createElement("div",{className:"popup-inner"},l.a.createElement("div",{class:"row mt-4 mx-auto"},l.a.createElement("div",{class:"col"},l.a.createElement("h2",null,"JOIN THIS PROJECT"))),l.a.createElement("form",null,l.a.createElement("div",{class:"form-group px-3",id:"apply-form"},l.a.createElement("div",{class:"form-row mt-4"},l.a.createElement("div",{class:"col"},l.a.createElement("input",{type:"text",id:"apply-firstName",name:"firstName",class:"form-control",placeholder:"First name"})),l.a.createElement("div",{class:"col"},l.a.createElement("input",{type:"text",id:"apply-lastName",name:"lastName",class:"form-control",placeholder:"Last name"}))),l.a.createElement("div",{class:"form-row my-3"},l.a.createElement("div",{class:"col"},l.a.createElement("input",{type:"email",id:"apply-email",name:"email",class:"form-control",placeholder:"Email"}))),l.a.createElement("button",{onClick:this.handleClick,class:"btn btn-danger btn-lg btn-block mb-4"},"Join now")))))}}]),t}(l.a.Component)),J=a(3).db,U=function(e){function t(e){var a;return Object(C.a)(this,t),(a=Object(w.a)(this,Object(x.a)(t).call(this,e))).state={docs:[],showPopup:!1},a}return Object(k.a)(t,e),Object(O.a)(t,[{key:"togglePopup",value:function(){this.setState({showPopup:!this.state.showPopup})}},{key:"componentDidMount",value:function(){var e=this,t=Number(this.props.match.params.id);J.collection("projects").where("segmentID","==",t).get().then(function(t){t.docs.forEach(function(t){var a=e.state.docs,n=[].concat(Object(W.a)(a),[t.data()]);e.setState({docs:n})})})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,this.state.docs.map(function(t){return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"d-flex justify-content-around"},l.a.createElement("img",{src:"https://www.xing.com/image/c_2_b_d6d996c21_22325856_4/thomas-stanner-foto.256x256.jpg",className:"img-fluid",alt:"..."}),l.a.createElement("img",{src:"https://www.xing.com/image/c_2_b_d6d996c21_22325856_4/thomas-stanner-foto.256x256.jpg",className:"img-fluid",alt:"..."}),l.a.createElement("img",{src:"https://www.xing.com/image/c_2_b_d6d996c21_22325856_4/thomas-stanner-foto.256x256.jpg",className:"img-fluid",alt:"..."}))),l.a.createElement("div",{className:"container my-5"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-8"},l.a.createElement("div",{className:"container mt-4"},l.a.createElement("h1",{key:t.id},t.projectName),l.a.createElement("p",null,"Contact: ",t.email),l.a.createElement("p",null,"Organizer: ",t.firstName," ",t.lastName),l.a.createElement("p",null,"Description of project: ",t.description))),l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("button",{onClick:e.togglePopup.bind(e),className:"btn btn-danger btn-lg btn-block mt-3 mb-4"}," ","Apply now"),l.a.createElement("h5",{className:"card-title text-warning"},"TIME"),l.a.createElement("p",{className:"card-text"},"Some quick example"),l.a.createElement("h5",{className:"card-title  text-warning"},"WHEN"),l.a.createElement("p",{className:"card-text"},"Some quick example"),l.a.createElement("h5",{className:"card-title text-warning"},"WHERE"),l.a.createElement("p",{className:"card-text"},"Some quick example"),l.a.createElement("h5",{className:"card-title  text-warning"},"REQUIREMENTS"),l.a.createElement("p",{className:"card-text"},"Some quick example")))))),l.a.createElement("div",{className:"container my-5"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},"Testimony"),l.a.createElement("div",{className:"col"},"Space to ask questions"))),l.a.createElement("div",{className:"container my-5"},l.a.createElement("div",{className:"row justify-content-md-center"},l.a.createElement("div",{className:"col-md-auto"},"Recommend to a friend."))),l.a.createElement("div",{className:"App-footer container-fluid py-4 pl-4"},l.a.createElement("div",{className:"d-flex flex-row bd-highlight mb-3 text-nav-footer"},l.a.createElement("div",{className:"p-2 bd-highlight"},"About"),l.a.createElement("a",{href:"https://try.corthropy.com/",className:"p-2 bd-highlight"},"Product")),l.a.createElement("div",{className:"d-flex bd-highlight"},l.a.createElement("div",{className:"mr-auto p-2 bd-highlight"},"2019 All rights reserved"),l.a.createElement("div",{className:"ml-auto p-2 bd-highlight"},"Made with love by Smile.AI"))),e.state.showPopup?l.a.createElement(z,{closePopup:e.togglePopup.bind(e)}):null)}),this.state.showPopup?l.a.createElement(z,{closePopup:this.togglePopup.bind(this)}):null)}}]),t}(l.a.Component),Y=a(22),K=a(3).db,Q=function(e){function t(e){var a;return Object(C.a)(this,t),(a=Object(w.a)(this,Object(x.a)(t).call(this,e))).addProject=function(e){e.preventDefault(),K.settings({timestampsInSnapshots:!0}),K.collection("projects").add({email:a.state.email,firstName:a.state.firstName,lastName:a.state.lastName,projectName:a.state.projectName,description:a.state.description,segmentID:null}),a.setState({email:"",firstName:"",lastName:"",projectName:"",description:"",segmentID:null})},a.updateInput=function(e){a.setState(Object(Y.a)({},e.target.name,e.target.value))},a.state={email:"",firstName:"",lastName:"",projectName:"",description:"",segmentID:null},a}return Object(k.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.addProject},l.a.createElement("div",{class:"form-group",id:"add-project-form"},l.a.createElement("label",{for:"exampleInputEmail1"},"Email address"),l.a.createElement("input",{type:"email",name:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email",onChange:this.updateInput,value:this.state.email})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"exampleInputFirstName"},"First name"),l.a.createElement("input",{type:"text",name:"firstName",class:"form-control",id:"exampleInputFirstName",placeholder:"Your first name",onChange:this.updateInput,value:this.state.firstName})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"exampleInputLastName"},"Last name"),l.a.createElement("input",{type:"text",name:"lastName",class:"form-control",id:"exampleInputLastName",placeholder:"Your last name",onChange:this.updateInput,value:this.state.lastName})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"exampleInputPassword1"},"Project's name"),l.a.createElement("input",{type:"text",name:"projectName",class:"form-control",id:"exampleInputProjectName",placeholder:"Name of your project",onChange:this.updateInput,value:this.state.projectName})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"exampleFormControlTextarea1"},"Project's description"),l.a.createElement("textarea",{name:"description",class:"form-control",id:"exampleFormControlTextarea1",rows:"3",placeholder:"Tell us about your project",onChange:this.updateInput,value:this.state.description})),l.a.createElement("button",{type:"submit",class:"btn btn-primary",onClick:function(t){return e.addProject(t)}},"Submit")))}}]),t}(l.a.Component),Z=function(e){function t(){return Object(C.a)(this,t),Object(w.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{class:"container"},l.a.createElement("h1",null,"Propose a project!")),l.a.createElement("div",{class:"container"},l.a.createElement(Q,null)))}}]),t}(l.a.Component),X=function(){return l.a.createElement("h1",null,"Not found")};a(62);var V=l.a.createElement(function(e){var t=Object(n.useState)({user:!0,status:"FETCHING"}),a=Object(i.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)(function(){f.auth.onAuthStateChanged(function(e){if(!e)return r({user:null,status:"COMPLETE"});f.db.collection("users").doc(e.uid).get().then(function(e){r({user:e.data(),status:"COMPLETE"})})})},[]),l.a.createElement(R.Provider,{value:c},e.children)},null,l.a.createElement(o.a,null,l.a.createElement(s.d,null,l.a.createElement(s.b,{exact:!0,path:"/",component:G}),l.a.createElement(function(e){var t=Object(n.useContext)(R);return"FETCHING"===t.status?l.a.createElement(l.a.Fragment,null):t.user?l.a.createElement(l.a.Fragment,null,e.children):l.a.createElement(s.a,{to:"/"})},null,l.a.createElement(s.b,{exact:!0,path:"/projects",component:B}),l.a.createElement(s.b,{exact:!0,path:"/projects/:id",component:U}),l.a.createElement(s.b,{exact:!0,path:"/project-proposal",component:Z})),l.a.createElement(s.b,{component:X}))));r.a.render(V,document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.4937453c.chunk.js.map