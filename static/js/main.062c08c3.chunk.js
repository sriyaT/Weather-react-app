(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(3),o=t.n(r),l=(t(9),t(1)),s="701ff62f3ec89f58f0504d55c8766b5d",u="https://api.openweathermap.org/data/2.5/";var m=function(){var e=Object(n.useState)(""),a=Object(l.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)({}),m=Object(l.a)(o,2),i=m[0],d=m[1];return c.a.createElement("div",{className:"undefined"!==typeof i.main&&i.main.temp>30?"app warm":"app"},c.a.createElement("main",null,c.a.createElement("div",{className:"search-box"},c.a.createElement("input",{type:"text",className:"search-bar",placeholder:"search...",onChange:function(e){return r(e.target.value)},value:t,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(u,"weather?q=").concat(t,"&units=metric&APPID=").concat(s)).then((function(e){return e.json()})).then((function(e){r(""),d(e),console.log("weather",e)}))}})),"undefined"!==typeof i.main?c.a.createElement("div",null,c.a.createElement("div",{className:"location-box"},c.a.createElement("div",{className:"location"},i.name,",",i.sys.country),c.a.createElement("div",{className:"date"},function(e){var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],t=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(a," ").concat(t," ").concat(n," ").concat(c)}(new Date)," ")),c.a.createElement("div",{className:"weather-box"},c.a.createElement("div",{className:"temp"},Math.round(i.main.temp),"\xb0c"),c.a.createElement("div",{className:"weather"},i.weather[0].main))):""))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root"))},4:function(e,a,t){e.exports=t(10)},9:function(e,a,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.062c08c3.chunk.js.map