import{P as le,L as te,r as _,ae as oe,a as u,b as d,e as o,p as V,h as i,u as e,f as b,y as w,F as P,Q as se,R as ne,J as h,t as S,k as A,U as re,V as ue,o as ie,c as me,w as I}from"./index.552205f5.js";import{x as L,r as ce}from"./base.d698891e.js";/* empty css               *//* empty css                */import"./popper.14a92806.js";import{E as de}from"./link.0fb91bad.js";import"./scrollbar.97fa2ffd.js";import{E as pe}from"./switch.2393edfd.js";/* empty css              */import{E as ye,a as fe}from"./select.ff52a9e1.js";import{S as he}from"./SvgIcon.c7a5ac24.js";import{Z as k,a as ge}from"./ZFormItem.7a4b4758.js";import{f as ve,g as _e,h as be,i as Se,e as ke}from"./admin-storage.260bbac1.js";import{e as N}from"./request.3708b2c4.js";import{b as M}from"./route-block.9b0645f8.js";import{_ as Ve}from"./plugin-vue_export-helper.21dcd24c.js";import{E as we}from"./index.3eb5cbdf.js";import{E as Pe}from"./index.e168d154.js";import{r as qe}from"./BadgeCheckIcon.09c2c42b.js";import{E as Ae}from"./index.11692625.js";import{E as Ie}from"./index.4ab44dc8.js";import"./focus-trap.58847c97.js";import"./event.3ec63147.js";import"./validator.6f3b33db.js";import"./event.776e7e11.js";import"./index.24f1077d.js";import"./index.1e624cbf.js";import"./scroll.cbf731df.js";import"./isEqual.fe8e5f6f.js";import"./debounce.32892d61.js";import"./index.c92ded65.js";import"./dropdown.d5503246.js";import"./index.0f572ca8.js";let O={aliyun:[{name:"\u534E\u4E1C 1\uFF08\u676D\u5DDE\uFF09",val:"oss-cn-hangzhou.aliyuncs.com"},{name:"\u534E\u4E1C 2\uFF08\u4E0A\u6D77\uFF09",val:"oss-cn-shanghai.aliyuncs.com"},{name:"\u534E\u5317 1\uFF08\u9752\u5C9B\uFF09",val:"oss-cn-qingdao.aliyuncs.com"},{name:"\u534E\u5317 2\uFF08\u5317\u4EAC\uFF09",val:"oss-cn-beijing.aliyuncs.com"},{name:"\u534E\u5317 3\uFF08\u5F20\u5BB6\u53E3\uFF09",val:"oss-cn-zhangjiakou.aliyuncs.com"},{name:"\u534E\u5317 5\uFF08\u547C\u548C\u6D69\u7279\uFF09",val:"oss-cn-huhehaote.aliyuncs.com"},{name:"\u534E\u5317 6\uFF08\u4E4C\u5170\u5BDF\u5E03\uFF09",val:"oss-cn-wulanchabu.aliyuncs.com"},{name:"\u534E\u5357 1\uFF08\u6DF1\u5733\uFF09",val:"oss-cn-shenzhen.aliyuncs.com"},{name:"\u534E\u5357 2\uFF08\u6CB3\u6E90\uFF09",val:"oss-cn-heyuan.aliyuncs.com"},{name:"\u534E\u5357 3\uFF08\u5E7F\u5DDE\uFF09",val:"oss-cn-guangzhou.aliyuncs.com"},{name:"\u897F\u5357 1\uFF08\u6210\u90FD\uFF09",val:"oss-cn-chengdu.aliyuncs.com"},{name:"\u4E2D\u56FD\uFF08\u9999\u6E2F\uFF09",val:"oss-cn-hongkong.aliyuncs.com"},{name:"\u65B0\u52A0\u5761",val:"oss-ap-southeast-1.aliyuncs.com"},{name:"\u65E5\u672C\uFF08\u4E1C\u4EAC\uFF09",val:"oss-ap-northeast-1.aliyuncs.com"},{name:"\u7F8E\u56FD\u897F\u90E8 1 \uFF08\u7845\u8C37\uFF09",val:"oss-us-west-1.aliyuncs.com"},{name:"\u7F8E\u56FD\u4E1C\u90E8 1 \uFF08\u5F17\u5409\u5C3C\u4E9A\uFF09",val:"oss-us-east-1.aliyuncs.com"},{name:"\u4E9A\u592A\u4E1C\u5357 1 \uFF08\u65B0\u52A0\u5761\uFF09",val:"oss-ap-southeast-1.aliyuncs.com"},{name:"\u4E9A\u592A\u4E1C\u5357 2 \uFF08\u6089\u5C3C\uFF09",val:"oss-ap-southeast-2.aliyuncs.com"},{name:"\u4E9A\u592A\u4E1C\u5357 3 \uFF08\u5409\u9686\u5761\uFF09",val:"oss-ap-southeast-3.aliyuncs.com"},{name:"\u4E9A\u592A\u4E1C\u5357 5 \uFF08\u96C5\u52A0\u8FBE\uFF09",val:"oss-ap-southeast-5.aliyuncs.com"},{name:"\u4E9A\u592A\u4E1C\u5317 1 \uFF08\u65E5\u672C\uFF09",val:"oss-ap-northeast-1.aliyuncs.com"},{name:"\u4E9A\u592A\u5357\u90E8 1 \uFF08\u5B5F\u4E70\uFF09",val:"oss-ap-south-1.aliyuncs.com"},{name:"\u6B27\u6D32\u4E2D\u90E8 1 \uFF08\u6CD5\u5170\u514B\u798F\uFF09",val:"oss-eu-central-1.aliyuncs.com"},{name:"\u82F1\u56FD\uFF08\u4F26\u6566\uFF09",val:"oss-eu-west-1.aliyuncs.com"},{name:"\u4E2D\u4E1C\u4E1C\u90E8 1 \uFF08\u8FEA\u62DC\uFF09",val:"oss-me-east-1.aliyuncs.com"}],tencent:[{name:"\u5317\u4EAC\u4E00\u533A",val:"cos.ap-beijing-1.myqcloud.com"},{name:"\u5317\u4EAC",val:"cos.ap-beijing.myqcloud.com"},{name:"\u4E0A\u6D77",val:"cos.ap-shanghai.myqcloud.com"},{name:"\u5E7F\u5DDE",val:"cos.ap-guangzhou.myqcloud.com"},{name:"\u6210\u90FD",val:"cos.ap-chengdu.myqcloud.com"},{name:"\u91CD\u5E86",val:"cos.ap-chongqing.myqcloud.com"},{name:"\u6DF1\u5733\u91D1\u878D",val:"cos.ap-shenzhen-fsi.myqcloud.com"},{name:"\u4E0A\u6D77\u91D1\u878D",val:"cos.ap-shanghai-fsi.myqcloud.com"},{name:"\u5317\u4EAC\u91D1\u878D",val:"cos.ap-beijing-fsi.myqcloud.com"},{name:"\u4E2D\u56FD\u9999\u6E2F",val:"cos.ap-hongkong.myqcloud.com"},{name:"\u65B0\u52A0\u5761",val:"cos.ap-singapore.myqcloud.com"},{name:"\u5B5F\u4E70",val:"cos.ap-mumbai.myqcloud.com"},{name:"\u96C5\u8FBE\u52A0",val:"cos.ap-jakarta.myqcloud.com"},{name:"\u9996\u5C14",val:"cos.ap-seoul.myqcloud.com"},{name:"\u66FC\u8C37",val:"cos.ap-bangkok.myqcloud.com"},{name:"\u4E1C\u4EAC",val:"cos.ap-tokyo.myqcloud.com"},{name:"\u7845\u8C37\uFF08\u7F8E\u897F\uFF09",val:"cos.na-siliconvalley.myqcloud.com"},{name:"\u5F17\u5409\u5C3C\u4E9A\uFF08\u7F8E\u4E1C\uFF09",val:"cos.na-ashburn.myqcloud.com"},{name:"\u591A\u4F26\u591A",val:"cos.na-toronto.myqcloud.com"},{name:"\u6CD5\u5170\u514B\u798F",val:"cos.eu-frankfurt.myqcloud.com"},{name:"\u83AB\u65AF\u79D1",val:"cos.eu-moscow"}],huawei:[{name:"\u975E\u6D32-\u7EA6\u7FF0\u5185\u65AF\u5821",val:"obs.af-south-1.myhuaweicloud.com"},{name:"\u534E\u5317-\u5317\u4EAC\u56DB",val:"obs.cn-north-4.myhuaweicloud.com"},{name:"\u534E\u5317-\u5317\u4EAC\u4E00",val:"obs.cn-north-1.myhuaweicloud.com"},{name:"\u534E\u4E1C-\u4E0A\u6D77\u4E8C",val:"obs.cn-east-2.myhuaweicloud.com"},{name:"\u534E\u4E1C-\u4E0A\u6D77\u4E00",val:"obs.cn-east-3.myhuaweicloud.com"},{name:"\u534E\u5357-\u5E7F\u5DDE",val:"obs.cn-south-1.myhuaweicloud.com"},{name:"\u897F\u5357-\u8D35\u9633\u4E00",val:"obs.cn-southwest-2.myhuaweicloud.com"},{name:"\u4E9A\u592A-\u66FC\u8C37",val:"obs.ap-southeast-2.myhuaweicloud.com"},{name:"\u4E2D\u56FD-\u9999\u6E2F",val:"obs.ap-southeast-1.myhuaweicloud.com"},{name:"\u4E9A\u592A-\u65B0\u52A0\u5761",val:"obs.ap-southeast-3.myhuaweicloud.com"}],qiniu:[{name:"\u534E\u4E1C",val:"s3-cn-east-1.qiniucs.com"},{name:"\u534E\u5317",val:"s3-cn-north-1.qiniucs.com"},{name:"\u534E\u5357",val:"s3-cn-south-1.qiniucs.com"},{name:"\u5317\u7F8E",val:"s3-us-north-1.qiniucs.com"},{name:"\u4E1C\u5357\u4E9A",val:"s3-ap-southeast-1.qiniucs.com"},{name:"\u534E\u4E1C-\u6D59\u6C5F2",val:"s3-cn-east-2.qiniucs.com"}]};const Ee=g=>N({url:"/sharepoint/getSites",method:"post",data:g}),Ue=g=>N({url:"/sharepoint/getSiteLists",method:"post",data:g}),xe=g=>N({url:"/s3/getBuckets",method:"post",data:g,config:{showDefaultMsg:!1}});const B=g=>(re("data-v-2b52e2be"),g=g(),ue(),g),Te={class:"flex justify-items-center"},Le=B(()=>V("span",null,"\u5B58\u50A8\u6E90\u4FE1\u606F",-1)),Ne=h(" \u8BF7\u7EF4\u62A4\u60A8\u7684\u5B58\u50A8\u6E90\u4FE1\u606F\uFF0C\u53EF\u53C2\u8003 "),Ce=B(()=>V("a",{class:"link",target:"_blank",href:"https://docs.zfile.vip/#/example"},"ZFile \u5B58\u50A8\u6E90\u914D\u7F6E\u6587\u6863",-1)),Fe=h(" \u5B58\u50A8\u6E90\u522B\u540D\uFF0C\u7528\u4E8E URL \u4E2D\u5C55\u793A, \u5982 http://ip:port/{\u5B58\u50A8\u6E90\u522B\u540D} "),ze=h(" \u5B58\u50A8\u6E90\u5907\u6CE8\u4FE1\u606F, \u7528\u4E8E\u8F85\u52A9\u7BA1\u7406\u5458\u533A\u5206\u4E0D\u540C\u7684\u5B58\u50A8\u6E90, \u6B64\u5B57\u6BB5\u4EC5\u7BA1\u7406\u5458\u53EF\u89C1 "),Re=h(" \u5982\u4E0D\u542F\u7528\uFF0C\u5219\u5728\u524D\u53F0\u4E0D\u663E\u793A\uFF0C\u4E14\u4E0D\u53EF\u8BBF\u95EE. "),Ke=h(" \u662F\u5426\u542F\u7528\u6587\u4EF6\u4E0A\u4F20\uFF0C\u7F16\u8F91\uFF0C\u5220\u9664\u7B49\u64CD\u4F5C. "),Me=h(" \u5F00\u542F\u540E\u6240\u6709\u4EBA\u90FD\u53EF\u8FDB\u884C\u6587\u4EF6\u64CD\u4F5C\uFF0C\u53CD\u4E4B\u4EC5\u7BA1\u7406\u5458\u767B\u5F55\u540E\u53EF\u64CD\u4F5C "),Oe=h(" \u542F\u7528\u540E\uFF0C\u6BCF\u6B21\u5207\u6362\u5230\u6B64\u5B58\u50A8\u6E90\uFF0C\u662F\u5426\u9ED8\u8BA4\u6253\u5F00\u753B\u5ECA\u6A21\u5F0F "),Be={style:{float:"left"}},je={style:{float:"right",color:"#8492a6","font-size":"13px"}},De={style:{float:"left"}},Ze=h("\u9ED8\u8BA4\u7F51\u7AD9"),He=h("\u67E5\u770B\u7F51\u7AD9"),Je={style:{float:"left"}},Qe=h("\u9ED8\u8BA4\u7F51\u7AD9"),$e=h("\u67E5\u770B\u7F51\u7AD9"),Ge={style:{float:"left"}},We={class:"float-right"},Xe={key:7},Ye={key:0},ea=["innerHTML"],aa=h("\u4FDD\u5B58\u8BBE\u7F6E"),j={__name:"index",setup(g){let D=le(),Z=te(),C=null,F=_();const H=()=>{F.value.validate(p=>{p&&(E.value=!0,ve(a.value).then(()=>{U.value=!0,Ae.confirm("\u4FDD\u5B58\u6210\u529F, \u662F\u5426\u8FD4\u56DE\u5B58\u50A8\u6E90\u5217\u8868\uFF1F","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"success",callback:s=>{s==="confirm"&&D.push("/admin/storage-list")}})}).finally(()=>{E.value=!1}))})};let J=()=>{let p=_({orderNum:null,name:"",type:"",remark:"",alias:"",defaultSwitchToImgMode:!1,enable:!0,enableFileOperator:!0,enableFileAnnoOperator:!1,searchEnable:!1,searchIgnoreCase:!1,searchMode:"SEARCH_CACHE",enableCache:!1,autoRefreshCache:!1,storageSourceAllParam:{endPoint:"",pathStyle:"",isPrivate:!1,accessKey:null,secretKey:null,bucketName:null,host:null,port:null,filePath:null,accessToken:null,refreshToken:null,secretId:null,username:null,password:null,basePath:"",domain:"",listId:"",siteId:"",proxyDomain:"",downloadLinkType:"",clientId:"",clientSecret:"",region:"",autoConfigCors:!1}});const s=r=>{ke(r).then(n=>{n.data.type=n.data.type.key,p.value=n.data,C=n.data.key})};let f=_(!1),y=_([]);ie(()=>{_e().then(n=>{y.value=n.data});let r=Z.params.storageId;r&&(f.value=!0,s(r))});let m=_(!1),v=_({name:[{required:!0,message:"\u8BF7\u8F93\u5165\u5B58\u50A8\u6E90\u540D\u79F0"}],key:[{validator:(r,n,c)=>{if(n==null||n===""){c();return}if(["admin","file","login","install"].includes(n)){c(new Error("\u4E0D\u53EF\u5360\u7528\u7CFB\u7EDF\u7EA7\u540D\u79F0\uFF0C\u8BF7\u4FEE\u6539\u3002"));return}if(!/^[\w\-]+$/.test(n)){c(new Error("\u53EA\u5141\u8BB8\u4F7F\u7528\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF\u3001\u6A2A\u6760"));return}if(C===n){c();return}be({storageKey:n}).then(T=>{T.data?c(new Error("\u8BE5\u5B58\u50A8\u6E90\u522B\u540D\u5DF2\u5B58\u5728\uFF0C\u8BF7\u4FEE\u6539\u3002")):c()})}}],type:[{required:!0,message:"\u5B58\u50A8\u7B56\u7565\u4E0D\u80FD\u4E3A\u7A7A"}],"storageSourceAllParam.domain":[{type:"url",message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u57DF\u540D\uFF0C\u9700\u4EE5 http:// \u6216 https:// \u5F00\u5934"},{validator:(r,n,c)=>{if(n==null||n===""){c();return}if(window.location.protocol==="https:"&&n.indexOf("http://")===0){c(new Error("\u68C0\u6D4B\u5230\u5F53\u524D ZFile \u7AD9\u70B9\u662F https \u534F\u8BAE, \u53D7\u6D4F\u89C8\u5668\u9650\u5236, \u6B64\u5904\u4E5F\u5FC5\u987B\u662F https \u534F\u8BAE, \u5426\u5219\u53EF\u80FD\u65E0\u6CD5\u6B63\u5E38\u4F7F\u7528."));return}c()}}]});return{storageItem:p,supportStorageType:y,loading:m,rules:v,isEditMode:f}},{storageItem:a,supportStorageType:Q,loading:E,rules:$,isEditMode:U}=J(),G=()=>{let p=_([]),s=me(()=>({accessKey:a.value.storageSourceAllParam.accessKey||a.value.storageSourceAllParam.secretId,secretKey:a.value.storageSourceAllParam.secretKey,endPoint:a.value.storageSourceAllParam.endPoint,region:a.value.storageSourceAllParam.region}));I(()=>s.value,y=>{y.accessKey&&y.secretKey&&y.endPoint&&f(y)});const f=y=>{xe(y).then(m=>{p.value=m.data}).catch(m=>{p.value=[]})};return{bucketList:p}},{bucketList:z}=G(),W=()=>{let p=_([]),s=_([]);const f=r=>r.indexOf("sharepoint")!==-1,y=r=>r==="sharepoint"?"Standard":"China";I(()=>a.value.storageSourceAllParam.accessToken,r=>{r&&m()});const m=()=>{let r=a.value.type;if(f(r)){let n={type:y(r),accessToken:a.value.storageSourceAllParam.accessToken};Ee(n).then(c=>{p.value=c.data})}};I(()=>a.value.storageSourceAllParam.siteId,r=>{r&&v()});const v=()=>{let r=a.value.type;if(f(r)){let n={type:y(r),accessToken:a.value.storageSourceAllParam.accessToken,siteId:a.value.storageSourceAllParam.siteId};Ue(n).then(c=>{s.value=c.data})}};return{sharepointSites:p,sharepointSiteLists:s,isSharePoint:f}},{sharepointSites:X,sharepointSiteLists:Y,isSharePoint:R}=W(),ee=()=>{I(()=>a.value.type,f=>{s(f)});let p=_([]);const s=f=>{!f||Se({storageType:f}).then(y=>{p.value=y.data;for(let m of p.value)!U.value&&m.defaultValue&&(m.defaultValue==="true"?m.defaultValue=!0:m.defaultValue==="false"&&(m.defaultValue=!1),a.value.storageSourceAllParam[m.key]=m.defaultValue)})};return{storageSourceParamList:p}},{storageSourceParamList:ae}=ee();return(p,s)=>{const f=he,y=oe("router-link"),m=Ie,v=ye,r=fe,n=pe,c=we,q=de,x=Pe,T=ce;return u(),d(ge,{model:e(a),class:"zfile-storage-edit",rules:e($),ref_key:"storageEditForm",ref:F},{"form-title":o(()=>[V("div",Te,[i(y,{to:"/admin/storage-list"},{default:o(()=>[i(f,{class:"inline mr-2 cursor-pointer",name:"file-type-back"})]),_:1}),Le])]),"form-sub-title":o(()=>[Ne,Ce]),footer:o(()=>[i(T,{loading:e(E),type:"primary",size:"default",icon:e(qe),onClick:H},{default:o(()=>[aa]),_:1},8,["loading","icon"])]),default:o(()=>[i(k,{label:"\u5B58\u50A8\u6E90\u540D\u79F0",prop:"name"},{default:o(()=>[i(m,{modelValue:e(a).name,"onUpdate:modelValue":s[0]||(s[0]=l=>e(a).name=l)},null,8,["modelValue"])]),_:1}),i(k,{label:"\u5B58\u50A8\u6E90\u522B\u540D",prop:"key"},{tips:o(()=>[Fe]),default:o(()=>[i(m,{modelValue:e(a).key,"onUpdate:modelValue":s[1]||(s[1]=l=>e(a).key=l)},null,8,["modelValue"])]),_:1}),i(k,{label:"\u5B58\u50A8\u6E90\u5907\u6CE8"},{tips:o(()=>[ze]),default:o(()=>[i(m,{type:"textarea",rows:3,placeholder:"\u8BF7\u8F93\u5165\u5B58\u50A8\u6E90\u5907\u6CE8",modelValue:e(a).remark,"onUpdate:modelValue":s[2]||(s[2]=l=>e(a).remark=l)},null,8,["modelValue"])]),_:1}),i(k,{label:"\u5B58\u50A8\u7B56\u7565",prop:"type"},{default:o(()=>[i(r,{disabled:e(U),filterable:"",modelValue:e(a).type,"onUpdate:modelValue":s[3]||(s[3]=l=>e(a).type=l),placeholder:"\u8BF7\u9009\u62E9\u5B58\u50A8\u7B56\u7565"},{default:o(()=>[(u(!0),b(P,null,w(e(Q),l=>(u(),d(v,{key:l.key,label:l.description,value:l.key},null,8,["label","value"]))),128))]),_:1},8,["disabled","modelValue"])]),_:1}),i(k,{label:"\u662F\u5426\u542F\u7528"},{tips:o(()=>[Re]),default:o(()=>[i(n,{modelValue:e(a).enable,"onUpdate:modelValue":s[4]||(s[4]=l=>e(a).enable=l)},null,8,["modelValue"])]),_:1}),i(k,{label:"\u542F\u7528\u6587\u4EF6\u64CD\u4F5C"},{tips:o(()=>[Ke]),default:o(()=>[i(n,{modelValue:e(a).enableFileOperator,"onUpdate:modelValue":s[5]||(s[5]=l=>e(a).enableFileOperator=l)},null,8,["modelValue"])]),_:1}),se(i(k,{label:"\u5141\u8BB8\u533F\u540D\u6587\u4EF6\u64CD\u4F5C"},{tips:o(()=>[Me]),default:o(()=>[i(n,{modelValue:e(a).enableFileAnnoOperator,"onUpdate:modelValue":s[6]||(s[6]=l=>e(a).enableFileAnnoOperator=l)},null,8,["modelValue"])]),_:1},512),[[ne,e(a).enableFileOperator]]),i(k,{label:"\u662F\u5426\u9ED8\u8BA4\u6253\u5F00\u753B\u5ECA\u6A21\u5F0F"},{tips:o(()=>[Oe]),default:o(()=>[i(n,{modelValue:e(a).defaultSwitchToImgMode,"onUpdate:modelValue":s[7]||(s[7]=l=>e(a).defaultSwitchToImgMode=l)},null,8,["modelValue"])]),_:1}),(u(!0),b(P,null,w(e(ae),l=>(u(),d(k,{label:l.name,key:l.name,required:l.required,prop:"storageSourceAllParam."+l.key},{tips:o(()=>[l.link?(u(),b("div",Ye,[i(q,{target:"_blank",icon:e(L),href:l.link},{default:o(()=>[h(S(l.linkName),1)]),_:2},1032,["icon","href"])])):A("",!0),l.description?(u(),b("div",{key:1,innerHTML:l.description},null,8,ea)):A("",!0)]),default:o(()=>{var K;return[l.key==="endPoint"&&e(O).hasOwnProperty(e(a).type)?(u(),d(r,{key:0,filterable:"","allow-create":"","default-first-option":"",style:{width:"100%"},modelValue:e(a).storageSourceAllParam.endPoint,"onUpdate:modelValue":s[8]||(s[8]=t=>e(a).storageSourceAllParam.endPoint=t)},{default:o(()=>[(u(!0),b(P,null,w(e(O)[e(a).type],t=>(u(),d(v,{label:t.name,value:t.val,key:t.name},{default:o(()=>[V("span",Be,S(t.name),1),V("span",je,S(t.val),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])):l.key==="siteId"&&e(R)(e(a).type)?(u(),d(r,{key:1,filterable:"",placeholder:"\u8BF7\u9009\u62E9\u7AD9\u70B9\u5217\u8868",modelValue:e(a).storageSourceAllParam.siteId,"onUpdate:modelValue":s[9]||(s[9]=t=>e(a).storageSourceAllParam.siteId=t),class:"input-with-select"},{default:o(()=>[(u(!0),b(P,null,w(e(X),t=>(u(),d(v,{key:t.id,label:t.displayName,value:t.id},{default:o(()=>[V("span",De,[h(S(t.displayName)+" ",1),t.displayName==="Communication site"?(u(),d(c,{key:0,type:"success"},{default:o(()=>[Ze]),_:1})):A("",!0)]),i(x,{placement:"right",width:"400",trigger:"hover",content:t.webUrl},{reference:o(()=>[i(q,{target:"_blank",icon:e(L),href:t.webUrl,underline:!1,class:"float-right",type:"primary"},{default:o(()=>[He]),_:2},1032,["icon","href"])]),_:2},1032,["content"])]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])):l.key==="listId"&&e(R)(e(a).type)?(u(),d(r,{key:2,filterable:"",placeholder:"\u8BF7\u9009\u62E9\u7F51\u7AD9\u5B50\u76EE\u5F55",modelValue:e(a).storageSourceAllParam.listId,"onUpdate:modelValue":s[10]||(s[10]=t=>e(a).storageSourceAllParam.listId=t),class:"input-with-select"},{default:o(()=>[(u(!0),b(P,null,w(e(Y),t=>(u(),d(v,{key:t.id,label:t.displayName,value:t.id},{default:o(()=>[V("span",Je,[h(S(t.displayName)+" ",1),t.displayName==="Communication site"?(u(),d(c,{key:0,type:"success"},{default:o(()=>[Qe]),_:1})):A("",!0)]),i(x,{placement:"right",width:"400",trigger:"hover",content:t.webUrl},{reference:o(()=>[i(q,{target:"_blank",icon:e(L),href:t.webUrl,underline:!1,class:"float-right",type:"primary"},{default:o(()=>[$e]),_:2},1032,["icon","href"])]),_:2},1032,["content"])]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])):l.key==="bucketName"&&((K=e(z))==null?void 0:K.length)>0?(u(),d(r,{key:3,filterable:"",placeholder:"\u8BF7\u9009\u62E9\u5B58\u50A8\u5668\u5217\u8868",modelValue:e(a).storageSourceAllParam.bucketName,"onUpdate:modelValue":s[11]||(s[11]=t=>e(a).storageSourceAllParam.bucketName=t),class:"input-with-select"},{default:o(()=>[(u(!0),b(P,null,w(e(z),t=>(u(),d(v,{key:t.name,label:t.name,value:t.name},{default:o(()=>[V("span",Ge,S(t.name),1),V("span",We,S(t.date),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])):l.type==="select"?(u(),d(r,{key:4,filterable:"","default-first-option":"",modelValue:e(a).storageSourceAllParam[l.key],"onUpdate:modelValue":t=>e(a).storageSourceAllParam[l.key]=t},{default:o(()=>[(u(!0),b(P,null,w(l.options,t=>(u(),d(v,{label:t.label,value:t.value},null,8,["label","value"]))),256))]),_:2},1032,["modelValue","onUpdate:modelValue"])):l.type==="switch"?(u(),d(n,{key:5,modelValue:e(a).storageSourceAllParam[l.key],"onUpdate:modelValue":t=>e(a).storageSourceAllParam[l.key]=t},null,8,["modelValue","onUpdate:modelValue"])):l.type==="input"?(u(),d(m,{key:6,modelValue:e(a).storageSourceAllParam[l.key],"onUpdate:modelValue":t=>e(a).storageSourceAllParam[l.key]=t},null,8,["modelValue","onUpdate:modelValue"])):(u(),b("div",Xe," \u670D\u52A1\u7AEF\u914D\u7F6E\u9519\u8BEF, \u5B57\u6BB5 "+S(l.key)+" \u7C7B\u578B\u4E3A "+S(l.type)+", \u4E0D\u652F\u6301\u6B64\u7C7B\u578B\u7684\u6E32\u67D3. ",1))]}),_:2},1032,["label","required","prop"]))),128))]),_:1},8,["model","rules"])}}};typeof M=="function"&&M(j);var Ca=Ve(j,[["__scopeId","data-v-2b52e2be"]]);export{Ca as default};