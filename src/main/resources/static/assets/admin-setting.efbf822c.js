import{e as t}from"./request.ae06a338.js";const o=()=>t({url:"https://api.github.com/repos/zhaojun1998/zfile/releases/latest",method:"get",config:{responseIntercept:!1,withCredentials:!1,showDefaultMsg:!1}}),s=()=>t({url:"/admin/config",method:"get"}),r=e=>t({url:"/admin/config/password",method:"put",data:e}),a=e=>t({url:"/admin/config/site",method:"put",data:e}),i=e=>t({url:"/admin/config/view",method:"put",data:e}),u=e=>t({url:"/admin/config/security",method:"put",data:e}),d=e=>t({url:"/admin/config/link",method:"put",data:e}),l=()=>t({url:"/admin/2fa/setup",method:"get"}),f=e=>t({url:"/admin/2fa/verify",method:"post",data:e}),g=()=>t({url:"/admin/log/download",method:"get",config:{responseType:"blob",showDefaultMsg:!1,responseIntercept:!1}});export{r as a,i as b,d as c,u as d,g as e,o as f,l as g,s as l,a as u,f as v};
