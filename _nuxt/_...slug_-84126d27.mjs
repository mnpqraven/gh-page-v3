import{h as $,E as N,w as p,o as n,b as k,U as w,e as l,t as A,u as o,c as i,S as d,Y as h,i as D,q as m,P as v,Z as g,X as B}from"./entry-069a7229.mjs";const C={class:"prose"},P=g("| Previous post |"),V=g("| Next post |"),E={__name:"[...slug]",async setup(q){let t,a;$({titleTemplate:s=>s?`${s} - Othi's blog`:"Othi's blog"});const e=N(),{path:r}=e,x=e.params.slug,b=e.params.group;console.log(`slug output: ${x}`);const{data:f}=([t,a]=p(()=>D(`${e.params.group}-${e.params.slug}`,()=>m(r).sort({publishedAt:1}).findOne(),"$Dm9qPFdD3I")),t=await t,a(),t),[u,c]=([t,a]=p(()=>m(`blog/${b}`).sort({publishedAt:1}).only("_path").findSurround({_path:r}).then(s=>s)),t=await t,a(),t);return(s,O)=>{const y=B,_=v;return n(),k("div",C,[w(y),l("p",null,"Published at: "+A(o(f).publishedAt),1),l("div",null,[o(u)?(n(),i(_,{key:0,to:o(u)._path},{default:d(()=>[P]),_:1},8,["to"])):h("",!0),o(c)?(n(),i(_,{key:1,to:o(c)._path},{default:d(()=>[V]),_:1},8,["to"])):h("",!0)])])}}};export{E as default};