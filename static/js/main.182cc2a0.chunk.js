(this["webpackJsonpreactjs-code-editor"]=this["webpackJsonpreactjs-code-editor"]||[]).push([[0],{10:function(e,t,a){e.exports={content:"Preview_content__WC10b",preview:"Preview_preview__2Tlvk",loading:"Preview_loading__3yr2M"}},2:function(e,t,a){e.exports={codebar:"CodeBar_codebar__2f-cR",tab:"CodeBar_tab__1oIcI",item:"CodeBar_item__2NKen",activeTab:"CodeBar_activeTab__3H7QT",editor:"CodeBar_editor__24t9P"}},23:function(e,t,a){e.exports={main:"App_main__7QJ7m"}},26:function(e,t,a){e.exports=a(49)},31:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),i=a.n(r),o=(a(31),a(23)),l=a.n(o),s=a(3),m=Object(n.createContext)(),u=function(e){var t=e.children,a=Object(n.useState)(""),r=Object(s.a)(a,2),i=r[0],o=r[1],l=Object(n.useState)(""),u=Object(s.a)(l,2),h=u[0],d=u[1],b=Object(n.useState)(""),v=Object(s.a)(b,2),p={html:i,css:h,js:v[0],setHtml:o,setCss:d,setJs:v[1]};return c.a.createElement(m.Provider,{value:p},t)},h=a(2),d=a.n(h),b=a(4),v=a.n(b),p=(a(39),a(12),a(40),a(13),function(){var e=Object(n.useContext)(m),t=e.html,a=e.setHtml;return c.a.createElement(v.a,{value:t,onChange:function(e){return a(e)},placeholder:"Write your HTML codes here!",mode:"html",theme:"monokai",name:"editor_html",fontSize:14,height:"100%",width:"100%",showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showLineNumbers:!0,tabSize:2}})}),_=(a(41),a(42),function(){var e=Object(n.useContext)(m),t=e.css,a=e.setCss;return c.a.createElement(v.a,{value:t,onChange:function(e){return a(e)},placeholder:"Write your CSS codes here!",mode:"css",theme:"monokai",name:"editor_css",fontSize:14,height:"100%",width:"100%",showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showLineNumbers:!0,tabSize:2}})}),f=(a(43),a(44),function(){var e=Object(n.useContext)(m),t=e.js,a=e.setJs;return c.a.createElement(v.a,{value:t,onChange:function(e){return a(e)},placeholder:"Write your JavaScript codes here!",mode:"javascript",theme:"monokai",name:"editor_javascript",fontSize:14,height:"100%",width:"100%",showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showLineNumbers:!0,tabSize:2}})}),E=function(){var e=Object(n.useState)("html"),t=Object(s.a)(e,2),a=t[0],r=t[1];return c.a.createElement("div",{className:d.a.codebar},c.a.createElement("nav",{className:d.a.tab},c.a.createElement("button",{onClick:function(){return r("html")},className:"".concat(d.a.item," ").concat("html"===a?d.a.activeTab:"")},"HTML"),c.a.createElement("button",{onClick:function(){return r("css")},className:"".concat(d.a.item," ").concat("css"===a?d.a.activeTab:"")},"CSS"),c.a.createElement("button",{onClick:function(){return r("js")},className:"".concat(d.a.item," ").concat("js"===a?d.a.activeTab:"")},"JS")),c.a.createElement("div",{className:d.a.editor},"html"===a?c.a.createElement(p,null):null,"css"===a?c.a.createElement(_,null):null,"js"===a?c.a.createElement(f,null):null))},w=a(15),j=a(9),g=a.n(j),C=a(24),O=a.n(C),S=a(25),N=a.n(S),A=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{className:g.a.header},c.a.createElement("button",{onClick:function(){return r(!a)},className:g.a.button},a?c.a.createElement(w.a,{fill:"#fff",size:23}):c.a.createElement(w.b,{fill:"#fff",size:23}))),a?c.a.createElement(O.a,null,c.a.createElement(N.a,{className:g.a.camera,audio:!1,width:300,height:300,videoConstraints:{width:300,height:300,facingMode:"user"}})):null)},k=a(10),L=a.n(k);function T(){var e=Object(n.useContext)(m),t=e.html,a=e.css,r=e.js,i=Object(n.useMemo)((function(){if(t||a||r)return'\n        <!DOCTYPE html>\n        <html lang="en">\n        <head>\n            <meta charset="UTF-8">\n            <meta http-equiv="X-UA-Compatible" content="IE=edge">\n            <meta name="viewport" content="width=device-width, initial-scale=1.0">\n            <style>'.concat(a,"</style>\n        </head>\n        <body>\n            ").concat(t,"\n        <script>\n            ").concat(r,"\n        <\/script>\n        </body>\n        </html>\n         ")}),[t,a,r]);return c.a.createElement("div",{className:L.a.content},i?c.a.createElement("iframe",{title:"preview",className:L.a.preview,srcDoc:i}):c.a.createElement("div",{className:L.a.loading},"Your code will be displayed here..."))}var x=function(){return c.a.createElement(u,null,c.a.createElement(E,null),c.a.createElement("div",{className:l.a.main},c.a.createElement(A,null),c.a.createElement(T,null)))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(x,null)),document.getElementById("root"))},9:function(e,t,a){e.exports={header:"Header_header__HiKXY",button:"Header_button__1tkrO",camera:"Header_camera__1-3A8"}}},[[26,1,2]]]);
//# sourceMappingURL=main.182cc2a0.chunk.js.map