(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(19),r=n.n(s),l=(n(29),n.p,n(30),n(20)),o=n(21),i=n(24),j=n(23),d=n(0),b=function(e){Object(i.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).addCounter=function(){e.setState({count:e.state.count+1})},e.state={count:0},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:this.addCounter,children:"Click me!!!"}),Object(d.jsxs)("p",{children:["counts = ",this.state.count]})]})}}]),n}(a.a.Component),h=n(3),u=n(22),m=n.n(u).a.create({baseURL:"http://localhost:8080/api/v1",headers:{"Content-Type":"application/json"}}),p=function(){return m.get("/hello")},O=function(){var e=Object(c.useState)(""),t=Object(h.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){p().then((function(e){a(e.data)})).catch((function(e){console.log("ay luh something went wrong kay Hello")}))})),n},x=n(6),f=function(){return m.get("/employees")},g=function(e){return m.post("/employees",e)},v=function(e){return m.put("/employees",e)},y=function(e){return m.get("/employees/".concat(e))},N=function(e){return m.delete("/employees/".concat(e))},k=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){s()}));var s=function(){f().then((function(e){a(e.data)})).catch((function(){console.log("luh nag error si Employee")}))};return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h3",{children:"List of Employees"}),Object(d.jsxs)("div",{children:[Object(d.jsx)(x.b,{to:"/add",className:"btn btn-warning btn=primary mb-2",children:"Add Employee"}),Object(d.jsxs)("table",{className:"table table-hover table-light table-striped",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{className:"table-dark",children:[Object(d.jsx)("td",{children:"Name"}),Object(d.jsx)("td",{children:"Location"}),Object(d.jsx)("td",{children:"Department"}),Object(d.jsx)("td",{children:"Actions"})]})}),Object(d.jsx)("tbody",{children:n.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.name}),Object(d.jsx)("td",{children:e.location}),Object(d.jsx)("td",{children:e.department}),Object(d.jsx)("td",{children:Object(d.jsxs)("div",{className:"d-grid gap-2 d-md-flex justify-content-md-center",children:[Object(d.jsx)(x.b,{className:"btn btn-warning",to:"/edit/".concat(e.employeeId),children:"Update"}),Object(d.jsx)("button",{className:"btn btn-danger",onClick:function(){return t=e.employeeId,void N(t).then((function(e){console.log("employee has been fired!"),s()})).catch((function(e){console.error("luh something went wrong!",e)}));var t},children:"Delete"})]})})]},e.employeeId)}))})]})]})]})},w=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(d.jsxs)("div",{class:"container-fluid",children:[Object(d.jsx)("a",{class:"navbar-brand",href:"/",children:"Amogus"}),Object(d.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNav",children:Object(d.jsxs)("ul",{class:"navbar-nav",children:[Object(d.jsx)("li",{class:"nav-item",children:Object(d.jsx)("a",{class:"nav-link",href:"/",children:"Home"})}),Object(d.jsx)("li",{class:"nav-item",children:Object(d.jsx)("a",{class:"nav-link",href:"/employees",children:"Employees"})}),Object(d.jsx)("li",{class:"nav-item",children:Object(d.jsx)("a",{class:"nav-link",href:"/add",children:"Add Employee"})}),Object(d.jsx)("li",{class:"nav-item",children:Object(d.jsx)("a",{class:"nav-link disabled",href:"#",tabindex:"-1","aria-disabled":"true",children:"Disabled"})})]})})]})})})};var A=function(){return Object(d.jsx)("div",{className:"Home",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("img",{className:"App-logo",src:"https://www.graphicpie.com/wp-content/uploads/2020/11/red-among-us-png.png",alt:"logo"}),Object(d.jsx)("p",{children:"Nay Hacker na ako! --Justin Tiu"}),Object(d.jsx)("img",{src:"https://c.tenor.com/CgGUXc-LDc4AAAAC/hacker-pc.gif",alt:"hackerman"}),Object(d.jsx)(b,{}),Object(d.jsx)("p",{children:O()}),Object(d.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},C=n(2),E=function(){var e=Object(c.useState)(""),t=Object(h.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(h.a)(s,2),l=r[0],o=r[1],i=Object(c.useState)(""),j=Object(h.a)(i,2),b=j[0],u=j[1],m=Object(C.f)(),p=Object(C.g)().employeeId;return Object(c.useEffect)((function(){p&&y(p).then((function(e){a(e.data.name),o(e.data.location),u(e.data.department)})).catch((function(e){console.error("luh something went wrong!")}))}),[]),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h3",{children:"Add Employee Here"}),Object(d.jsxs)("form",{children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{for:"name",className:"form-label",children:"Name"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"name",placeholder:"Add employee name",onChange:function(e){a(e.target.value)}})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{for:"location",className:"form-label",children:"Location"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"location",placeholder:"Add employee location",onChange:function(e){o(e.target.value)}})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{for:"department",className:"form-label",children:"Department"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"department",placeholder:"Add employee depratment",onChange:function(e){u(e.target.value)}})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){return function(e){e.preventDefault();var t={employeeId:p,name:n,location:l,department:b};p?v(t).then((function(e){console.log("existing employee updated!",e.data),m("/employees")})).catch((function(e){console.error("luh something went wrong!")})):g(t).then((function(e){console.log("new employee added!",e.data),m("/employees")})).catch((function(e){console.error("luh something went wrong!")}))}(e)},children:"Save"})]})]})},S=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"Page Not Found!"})})},I=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(x.a,{children:Object(d.jsxs)(C.c,{children:[Object(d.jsx)(C.a,{exact:!0,path:"/",element:Object(d.jsx)(A,{})}),Object(d.jsx)(C.a,{exact:!0,path:"/employees",element:Object(d.jsx)(k,{})}),Object(d.jsx)(C.a,{exact:!0,path:"/add",element:Object(d.jsx)(E,{})}),Object(d.jsx)(C.a,{exact:!0,path:"/edit/:employeeId",element:Object(d.jsx)(E,{})}),Object(d.jsx)(C.a,{exact:!0,path:"*",element:Object(d.jsx)(S,{})})]})})})};var L=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(w,{}),Object(d.jsx)(I,{})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};n(50);r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(L,{})}),document.getElementById("root")),D()}},[[51,1,2]]]);
//# sourceMappingURL=main.34f60597.chunk.js.map