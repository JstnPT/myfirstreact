(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(15),s=n.n(a),o=(n(25),n.p,n(26),n(16)),i=n(17),j=n(20),l=n(19),u=n(0),h=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).addCounter=function(){e.setState({count:e.state.count+1})},e.state={count:0},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:this.addCounter,children:"Click me!!!"}),Object(u.jsxs)("p",{children:["counts = ",this.state.count]})]})}}]),n}(r.a.Component),d=n(5),b=n(18),p=n.n(b).a.create({baseURL:"http://localhost:8080/api/v1",headers:{"Content-Type":"application/json"}}),O=function(){return p.get("/hello")},f=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){O().then((function(e){r(e.data)})).catch((function(e){console.log("ay luh something went wrong kay Hello")}))})),n},x=function(){return p.get("/employees")},g=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){x().then((function(e){r(e.data)})).catch((function(){console.log("luh nag error si Employee")}))})),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"List of Employees"}),Object(u.jsx)("div",{children:Object(u.jsxs)("table",{border:"1",children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Name"}),Object(u.jsx)("td",{children:"Location"}),Object(u.jsx)("td",{children:"Department"})]}),n.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.name}),Object(u.jsx)("td",{children:e.location}),Object(u.jsx)("td",{children:e.department})]})}))]})})]})};var m=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("img",{className:"App-logo",src:"https://www.graphicpie.com/wp-content/uploads/2020/11/red-among-us-png.png",alt:"logo"}),Object(u.jsx)("p",{children:"Nay Hacker na ako! --Justin Tiu"}),Object(u.jsx)("img",{src:"https://c.tenor.com/CgGUXc-LDc4AAAAC/hacker-pc.gif",alt:"hackerman"}),Object(u.jsx)(h,{}),Object(u.jsx)("p",{children:f()}),Object(u.jsx)(g,{}),Object(u.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),v()}},[[46,1,2]]]);
//# sourceMappingURL=main.f9d83065.chunk.js.map