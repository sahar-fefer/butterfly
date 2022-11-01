"use strict";(self.webpackChunkbutterfly=self.webpackChunkbutterfly||[]).push([[650],{2482:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var n=a(7294),l=a(4249);var r=function(){return n.createElement("section",{className:"contact-us"},n.createElement("h1",null,"צור קשר"),n.createElement("div",{className:"title sub"},"שלחו פנייה ונשמח לעמוד לרשותכם בכל נושא"),n.createElement("div",{className:"title m"},"יש לכם שאלה דחופה?"),n.createElement("div",{className:"text s-title"},"אנחנו זמינות עבורכם גם בטלפון:"),n.createElement("div",{className:"text"},"יעל - ",n.createElement("a",{className:"num",href:"tel:+972523338118"},"052-3338118")),n.createElement("div",{className:"text"},"איילת - ",n.createElement("a",{className:"num",href:"tel:+97254-4404322"},"054-4404322")),n.createElement("div",{className:"title m"},"מייל"),n.createElement("a",{className:"email",href:"mailto: omer.butterflies@gmail.com"},"omer.butterflies@gmail.com"))},u=function(e,t){var a=(0,n.useState)({subject:"",fullName:"",email:"",formContent:""}),l=a[0],r=a[1],u=(0,n.useState)({}),m=u[0],c=u[1],o=(0,n.useState)(!1),s=o[0],i=o[1];(0,n.useEffect)((function(){0===Object.keys(m).length&&s&&(e(),console.log("submit"))}),[m]);return{handleChange:function(e){var t;e.persist();var a=""[0],n=""[1];if(e.target.name&&e.target.value){var u=[e.target.name,e.target.value];a=u[0],n=u[1]}else if(e.target.dataset.name&&e.target.dataset.value){var m=[e.target.dataset.name,e.target.dataset.value];a=m[0],n=m[1]}r(Object.assign({},l,((t={})[a]=n,t)))},handleSubmit:function(e){e&&e.preventDefault(),c(t(l)),i(!0),console.log("submit func")},formInfo:l,errors:m}};function m(e){var t={},a=/^[A-Za-z\u0590-\u05fe\0-9\-_!?@₪%():...,=\n]+$/;return e.subject||(t.subject="Subject is required"),e.fullName?a.test(e.fullName)?e.fullName.length<2?t.fullName="Full Name must be 2 or more characters":e.fullName.length>40&&(t.fullName="Full Name must be 40 or less characters"):t.formContent="שימוש בתווים לא חוקיים כמו: <>{}^~;":t.fullName="שדה חובה",e.email?/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/.test(e.email)||(t.email="Email address is invalid"):t.email="שדה חובה",e.formContent?a.test(e.formContent)?e.formContent.length<8?t.formContent="Form Content must be 8 or more characters":e.formContent.length>800&&(t.formContent="Form Content must be 800 or less characters"):t.formContent="שימוש בתווים לא חוקיים כמו: <>{}^~;":t.formContent="שדה חובה",t}var c=function(){var e=u((function(){console.log("No errors, submit callback called!")}),m),t=e.formInfo,a=(e.errors,e.handleChange),l=e.handleSubmit;var r=(0,n.useState)("נושא הפנייה"),c=r[0],o=r[1],s=(0,n.useState)(!1),i=s[0],f=s[1],d=function(e){var t=(0,n.useRef)(null);return(0,n.useEffect)((function(){var a=function(a){i&&t.current&&!t.current.contains(a.target)&&(e(),f(!i))};return document.addEventListener("click",a,!0),function(){document.removeEventListener("click",a,!0)}}),[t,i]),t}((function(){return document.getElementsByClassName("dropdown")[0].classList.toggle("active")})),C=function(e){document.getElementsByClassName("dropdown")[0].classList.toggle("active"),e.preventDefault(),"button"!==e.target.type&&(o(e.target.innerText),a(e)),f(!i)};return n.createElement("form",{className:"form",onSubmit:l},n.createElement("div",{className:"dropdown",ref:d},n.createElement("button",{type:"button",onClick:function(e){return C(e)}},c,n.createElement("svg",{width:"14",height:"8",viewBox:"0 0 14 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M7.12562 7.527C7.40092 7.5004 7.66124 7.38924 7.87087 7.2088L13.4981 2.38549C13.6382 2.27317 13.7543 2.13381 13.8396 1.97571C13.9248 1.81761 13.9774 1.64399 13.9941 1.46517C14.0109 1.28635 13.9916 1.10599 13.9373 0.934788C13.883 0.763591 13.7948 0.605058 13.678 0.468613C13.5612 0.332167 13.4182 0.220594 13.2574 0.140524C13.0967 0.0604543 12.9214 0.0135228 12.7422 0.00251778C12.5629 -0.00848722 12.3832 0.0166593 12.2139 0.0764632C12.0445 0.136267 11.8889 0.229507 11.7563 0.350642L6.99999 4.4287L2.24367 0.350642C2.11106 0.229506 1.95546 0.136267 1.7861 0.0764628C1.61675 0.0166589 1.4371 -0.0084877 1.25783 0.00251728C1.07856 0.0135223 0.903334 0.0604538 0.742564 0.140524C0.581796 0.220593 0.438769 0.332167 0.321977 0.468612C0.205185 0.605057 0.117022 0.76359 0.0627155 0.934787C0.00840945 1.10598 -0.0109196 1.28635 0.00586503 1.46517C0.0226506 1.64399 0.0752038 1.81761 0.160421 1.97571C0.245639 2.13381 0.361771 2.27316 0.501916 2.38549L6.12912 7.2088C6.26539 7.32595 6.42383 7.4145 6.59502 7.46916C6.76622 7.52383 6.94667 7.5435 7.12562 7.527Z",fill:"#FF121C"}))),n.createElement("ul",null,n.createElement("li",{onClick:function(e){return C(e)},"data-name":"subject","data-value":"donation"},"תרומות"),n.createElement("li",{onClick:function(e){return C(e)},"data-name":"subject","data-value":"bracelets"},"הצמידים של עומר"),n.createElement("li",{onClick:function(e){return C(e)},"data-name":"subject","data-value":"house"},"הבית של עומר"),n.createElement("li",{onClick:function(e){return C(e)},"data-name":"subject","data-value":"house-available"},"בדיקת זמינות לבית לפתרון דיור"),n.createElement("li",{onClick:function(e){return C(e)},"data-name":"else","data-value":"house-available"},"אחר"))),n.createElement("input",{placeholder:"שם מלא",autoCapitalize:"on",type:"text",value:t.fullName||"",name:"fullName",minLength:2,maxLength:20,onChange:a}),n.createElement("input",{placeholder:"מייל",type:"text",value:t.email||"",name:"email",onChange:a}),n.createElement("textarea",{placeholder:"מה תרצו להגיד לנו?",value:t.formContent||"",name:"formContent",onChange:function(e){return a(e)}}),n.createElement("input",{className:"submit",type:"submit",value:"שליחת טופס"}))},o=function(){return n.createElement(l.Z,null,n.createElement("div",{className:"contact-wrapper desktop-fill-page"},n.createElement(r,null),n.createElement(c,null)))}}}]);
//# sourceMappingURL=component---src-pages-contact-tsx-d297dede631cd4288244.js.map