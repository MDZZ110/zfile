import{d as t}from"./request.2ccc188b.js";const o=()=>t({url:"/admin/support-storage",method:"get"}),s=e=>t({url:"/admin/storages",method:"get",data:e}),n=e=>t({url:`/admin/storage/${e}`,method:"get"}),d=e=>t({url:`/admin/storage/${e}`,method:"delete"}),m=(e,r)=>t({url:`/admin/storage/${e}/${r}`,method:"post"}),g=e=>t({url:"/admin/storage/sort",method:"post",data:e}),u=(e,r)=>t({url:`/admin/cache/${e}/${r}`,method:"post"}),i=(e,r)=>t({url:`/admin/cache/${e}/auto-refresh/${r}`,method:"post"}),l=e=>t({url:"/admin/storage-params",method:"get",data:e}),c=e=>t({url:"/admin/storage",method:"post",data:e}),h=e=>t({url:"/admin/storage/exist/key",method:"get",data:e}),p=e=>t({url:`/admin/storage/${e}/filters`,method:"get"}),R=(e,r)=>t({url:`/admin/storage/${e}/filters`,method:"post",data:r}),q=e=>t({url:`/admin/storage/${e}/password`,method:"get"}),S=(e,r)=>t({url:`/admin/storage/${e}/password`,method:"post",data:r}),$=e=>t({url:`/admin/storage/${e}/readme`,method:"get"}),w=(e,r)=>t({url:`/admin/storage/${e}/readme`,method:"post",data:r}),b=(e,r)=>t({url:`/admin/storage/${e}/compatibility_readme/${r}`,method:"post"}),f=e=>t({url:"/admin/storage/copy",method:"post",data:e});export{u as a,i as b,g as c,d,h as e,f,n as g,c as h,o as i,l as j,p as k,s as l,R as m,q as n,S as o,$ as p,w as q,b as r,m as s};