import{u as l,_ as a,o as c,c as _,a as e,t as i,w as d,v as u}from"./entry-3345d122.mjs";const p=()=>l("color-mode").value;const v={__name:"ColorConfig",setup(o,{expose:r}){r();const t=p();console.log(t.preference);const s={colorMode:t};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}},f=e("option",{value:"system"},"System",-1),m=e("option",{value:"light"},"Light",-1),g=e("option",{value:"dark"},"Dark",-1),h=e("option",{value:"sepia"},"Sepia",-1),C=[f,m,g,h];function y(o,r,t,s,S,$){return c(),_("div",null,[e("h1",null,"Color mode: "+i(o.$colorMode.value),1),d(e("select",{"onUpdate:modelValue":r[0]||(r[0]=n=>o.$colorMode.preference=n)},C,512),[[u,o.$colorMode.preference]])])}var k=a(v,[["render",y]]);export{k as default};