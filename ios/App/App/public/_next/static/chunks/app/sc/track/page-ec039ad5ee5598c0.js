(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8652],{23602:function(e,l,s){Promise.resolve().then(s.bind(s,67846))},67846:function(e,l,s){"use strict";s.r(l);var t=s(57437),i=s(66648),a=s(48871),r=s(16463),o=s(2265),n=s(86440),d=s(81634),c=s(14063),u=s(37368);l.default=()=>{var e,l,s,A,x;let m=(0,r.useSearchParams)().get("id"),{scKey:v,setScKey:f}=(0,d.Jt)(),{setCurrentTrack:h}=(0,d.nP)(),[g,p]=(0,o.useState)({title:"",artwork_url:"",user:{username:"",avatar_url:"",followers_count:0,description:"",visuals:{enabled:!1,visuals:[{visual_url:""}]}}}),[w,j]=(0,o.useState)(""),[_,N]=(0,o.useState)(""),[k,y]=(0,o.useState)({collection:[]});return(0,o.useEffect)(()=>{(async()=>{if(v){let e=await (0,n.fy)(m,v),l=e.response;console.log(e),p(l),e.newKey&&e.newKey!==v&&(console.log("Setting new key"),f(e.newKey))}})()},[v]),(0,o.useEffect)(()=>{(async()=>{(null==g?void 0:g.artwork_url)&&j(await (0,n._u)(null==g?void 0:g.artwork_url))})()},[null==g?void 0:g.artwork_url]),(0,o.useEffect)(()=>{(async()=>{(null==g?void 0:g.user.avatar_url)&&N(await (0,n._u)(null==g?void 0:g.user.avatar_url))})()},[null==g?void 0:g.user.avatar_url]),(0,o.useEffect)(()=>{(async()=>{if(v){let e=(await (0,n._)(m,v)).response;console.log(e),y(e)}})()},[v]),(0,t.jsxs)("div",{className:" bg-neutral-900  rounded-lg  h-full  w-full  overflow-hidden  overflow-y-auto ",children:[(0,t.jsx)(a.default,{children:(0,t.jsxs)("div",{className:"mt-20",children:[(0,t.jsxs)("div",{className:" flex  flex-col  md:flex-row  items-center  gap-x-5 ",children:[(0,t.jsx)("div",{className:"relative h-48 w-48 lg:h-60 lg:w-60",children:(0,t.jsx)(i.default,{className:"object-cover",fill:!0,src:w||(null==g?void 0:g.artwork_url)||"/images/liked.png",alt:"Song"})}),(0,t.jsxs)("div",{className:"flex flex-col gap-y-2 mt-4 md:mt-0",children:[(0,t.jsx)("p",{className:"hidden md:block font-semibold text-sm",children:"Song"}),(0,t.jsx)("h1",{className:" text-white  text-3xl  sm:text-4xl  lg:text-5xl  font-bold ",children:null==g?void 0:g.title})]})]}),g&&(0,t.jsx)("div",{className:" transition  opacity-100  rounded-full  inline-flex items-center  justify-center  bg-blue-600 p-6  drop-shadow-md  translate translate-y-1/4 group-hover:opacity-100  group-hover:translate-y-0 hover:scale-110 ",onClick:()=>h({...g,platform:"Soundcloud"}),children:(0,t.jsx)(c.gmG,{className:"text-3xl text-white",size:25})})]})}),(0,t.jsx)("div",{className:"p-5",children:(0,t.jsxs)("div",{className:" flex  flex-col  gap-y-5  md:gap-y-10 ",children:[(0,t.jsx)("div",{className:" flex  flex-col  gap-y-5  md:gap-y-10 p-5 bg-neutral-800 rounded-lg ",children:(0,t.jsx)("div",{children:(0,t.jsxs)("div",{className:" flex  flex-col  gap-y-5  md:gap-y-10 ",children:[(null==g?void 0:null===(l=g.user)||void 0===l?void 0:null===(e=l.visuals)||void 0===e?void 0:e.enabled)&&(0,t.jsx)("div",{className:"relative h-64 w-full",children:(0,t.jsx)(i.default,{className:"object-cover",layout:"fill",src:null==g?void 0:null===(A=g.user)||void 0===A?void 0:null===(s=A.visuals)||void 0===s?void 0:s.visuals[0].visual_url,alt:"Banner"})}),(0,t.jsxs)("div",{className:" flex  flex-col  md:flex-row  items-center  gap-x-5 ",children:[(0,t.jsx)("div",{className:"relative h-32 w-32 lg:h-32 lg:w-32",children:(0,t.jsx)(i.default,{className:"object-cover rounded-full",fill:!0,src:_||(null==g?void 0:g.user.avatar_url)||"/images/liked.png",alt:"Profile"})}),(0,t.jsxs)("div",{className:"flex flex-col gap-y-2 mt-4 md:mt-0",children:[(0,t.jsx)("p",{className:"hidden md:block font-semibold text-sm",children:"Artist"}),(0,t.jsx)("h1",{className:" text-white  text-3xl  sm:text-4xl  lg:text-5xl  font-bold ",children:null==g?void 0:g.user.username}),(null==g?void 0:g.user.followers_count)&&(0,t.jsxs)("div",{className:"flex flex-col gap-y-2",children:[(0,t.jsx)("p",{className:"text-white text-sm sm:text-base lg:text-lg",children:"Followers"}),(0,t.jsx)("h2",{className:"text-white text-3xl sm:text-4xl lg:text-5xl font-semibold",children:null==g?void 0:g.user.followers_count})]})]})]}),(0,t.jsx)("p",{className:" text-white  text-sm  sm:text-base  lg:text-lg ",children:null==g?void 0:g.user.description})]})})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:" text-white  text-2xl  sm:text-3xl  lg:text-4xl  font-bold ",children:"Related Tracks"}),(0,t.jsx)("div",{className:" flex  flex-col  gap-y-5  md:gap-y-10 ",children:null==k?void 0:null===(x=k.collection)||void 0===x?void 0:x.map((e,l)=>(0,t.jsx)("div",{children:(0,u.Z)(e,()=>h({...e,platform:"Soundcloud"}))},l))})]})]})})]})}},84318:function(e,l,s){"use strict";s.d(l,{Z:function(){return d}});var t=s(57437),i=s(16463),a=s(34728),r=s(12947),o=s(66648),n={src:"/_next/static/media/expand.625cdf6a.svg",height:24,width:24,blurWidth:0,blurHeight:0},d=e=>{let{song:l}=e;(0,i.useRouter)();let{supabaseClient:s}=(0,a.useSessionContext)();(0,r.Z)();let{isOpen:d,onOpen:c,onClose:u,setSong:A}=(0,r.Z)();return(0,t.jsx)("button",{className:" cursor-pointer  hover:opacity-75  transition ",onClick:e=>{e.stopPropagation(),A(l),d||c()},children:(0,t.jsx)(o.default,{className:"object-contain",onClick:()=>{A(l),d||c()},src:n,style:{filter:"invert(100%)"},alt:"Image",width:25,height:25})})}},973:function(e,l,s){"use strict";var t=s(57437),i=s(2265),a=s(61379),r=s(16463),o=s(88726),n=s(34728),d=s(89362),c=s(56480);l.Z=e=>{let{songId:l,song:s}=e,u=(0,r.useRouter)(),{supabaseClient:A}=(0,n.useSessionContext)(),x=(0,c.Z)(),{user:m}=(0,d.aF)(),[v,f]=(0,i.useState)(!1);(0,i.useEffect)(()=>{(null==m?void 0:m.id)&&(async()=>{let{data:e,error:s}=await A.from("liked_songs").select("*").eq("user_id",m.id).eq("song_id",l).single();!s&&e&&f(!0)})()},[l,A,null==m?void 0:m.id]);let h=v?a.M_L:a.lo,g=async()=>{if(!m)return x.onOpen();if(v){let{error:e}=await A.from("liked_songs").delete().eq("user_id",m.id).eq("song_id",l);e?o.Am.error(e.message):f(!1)}else{let{data:e,error:t}=await A.from("songs").select("id").eq("id",l);if(!(null==e?void 0:e.length)){let{error:e}=await A.from("songs").insert([s]);if(e){o.Am.error(e.message);return}}let{error:i}=await A.from("liked_songs").insert({song_id:l,user_id:m.id});i?o.Am.error(i.message):(f(!0),o.Am.success("Success"))}u.refresh()};return(0,t.jsx)("button",{className:" cursor-pointer  hover:opacity-75  transition ",onClick:e=>{e.stopPropagation(),g()},children:(0,t.jsx)(h,{color:v?"#22c55e":"white",size:25})})}},7155:function(e,l,s){"use strict";var t=s(57437),i=s(66648),a=s(43765),r=s(57771);l.Z=e=>{let{data:l,onClick:s,children:o}=e,n=(0,a.Z)();return(0,t.jsxs)("div",{className:" flex  items-center  gap-x-3  cursor-pointer  hover:bg-neutral-800/50  w-full  p-2  rounded-md ",onClick:()=>s?s(l.id):n.setId(l.id),children:[(0,t.jsxs)("div",{className:" flex  items-center  cursor-pointer   gap-x-3 w-full  rounded-md ",children:[(0,t.jsx)("div",{className:" relative  rounded-md  min-h-[60px]  min-w-[60px]  overflow-hidden ",children:(0,t.jsx)(i.default,{fill:!0,src:l.image_path||r.default,alt:"MediaItem",className:"object-cover"})}),(0,t.jsx)("div",{className:"flex flex-col gap-y-1 overflow-hidden",children:(0,t.jsx)("p",{className:"text-white truncate",children:l.name})})]}),o]})}},37368:function(e,l,s){"use strict";var t=s(57437);s(2265);var i=s(7155),a=s(973),r=s(84318);l.Z=(e,l,s)=>(0,t.jsx)("div",{children:(0,t.jsx)("div",{children:(0,t.jsx)(i.Z,{data:{id:null==e?void 0:e.id,artists:[null==e?void 0:e.user],name:null==e?void 0:e.title,href:null==e?void 0:e.permalink_url,image_path:null==e?void 0:e.artwork_url,waveform_url:null==e?void 0:e.waveform_url,track_authorization:null==e?void 0:e.track_authorization,likes_count:null==e?void 0:e.likes_count,media:null==e?void 0:e.media,platform:"Soundcloud"},onClick:l,children:(0,t.jsxs)("div",{className:"flex items-end",children:[s,(0,t.jsx)(a.Z,{songId:null==e?void 0:e.id}),(0,t.jsx)(r.Z,{song:{platform:"Soundcloud",id:null==e?void 0:e.id,name:null==e?void 0:e.title,author:null==e?void 0:e.user,image:null==e?void 0:e.artwork_url,media:{track_authorization:null==e?void 0:e.track_authorization,...null==e?void 0:e.media}}})]})})})},null==e?void 0:e.id)},12947:function(e,l,s){"use strict";let t=(0,s(39099).Ue)(e=>({isOpen:!1,onOpen:()=>e({isOpen:!0}),onClose:()=>e({isOpen:!1}),song:null,setSong:l=>e({song:l})}));l.Z=t},57771:function(e,l,s){"use strict";s.r(l),l.default={src:"/_next/static/media/playlist.9ff5369c.jpeg",height:1080,width:1080,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAAX/2gAMAwEAAhADEAAAALsVH//EABkQAAEFAAAAAAAAAAAAAAAAAAAREyJhYv/aAAgBAQABPwCDels//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:8}}},function(e){e.O(0,[2420,6115,9450,1787,9982,5722,3712,8077,7057,8871,2971,7023,1744],function(){return e(e.s=23602)}),_N_E=e.O()}]);