(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9566],{68611:function(e,l,t){Promise.resolve().then(t.bind(t,2226))},2226:function(e,l,t){"use strict";t.r(l);var i=t(57437),o=t(2265),n=t(16463),s=t(81634),a=t(31504),d=t(5779),r=t(66648),u=t(48871),c=t(78077),h=t(37368),m=t(85048);l.default=()=>{var e,l,t,v,g;let{queue:A,setQueue:x,currentTrack:f,setCurrentTrack:p,removeFromQueue:j,currentPlaylist:w,removeTrackFromPlaylist:b,updatePlaylist:N}=(0,s.nP)();(0,n.useRouter)();let[_,k]=(0,o.useState)(0),[y,C]=(0,o.useState)(null),[E,D]=(0,o.useState)(null),P=e=>{console.log("Playing track",e),p(e)},S=e=>{console.log("Removing track from Queue",e),j(e.id)},Z=[f?{...f,position:"c-0"}:[],...A.map((e,l)=>({...e,position:"q-".concat(l)})),...w.songs.map((e,l)=>({...e,position:"p-".concat(l)}))];return(0,o.useEffect)(()=>{console.log("Current Playlist",w)},[w]),(0,i.jsxs)("div",{className:" bg-neutral-900 rounded-lg  h-full  w-full  overflow-hidden  overflow-y-auto ",children:[(0,i.jsx)(u.default,{className:(0,c.m)("\n        bg-gradient-to-b \n        from-blue-950\n        to-b\n        "),children:(0,i.jsxs)("div",{className:" flex  items-center  justify-between  mb-4  p-4  rounded  shadow ",children:[(0,i.jsx)("h1",{className:"text-4xl font-bold mb-4",children:"Queue"}),(0,i.jsx)(r.default,{className:"object-contain",style:{filter:"invert(100%)"},src:d,alt:"Image",width:45,height:45})]})}),(0,i.jsxs)(m.t.Group,{values:Z,onReorder:e=>{if(console.log("Reorder Event",e),console.log("Active",_),0!==_){let l=e[_];console.log("Dragged Track",l),console.log("Dragged Track Position",l.position),e.map((e,t)=>{e.position===l.position&&(console.log("Dragged Track New Position",t),k(t))});let t=e[0],i=e.slice(1,A.length+1),o=e.slice(A.length+1,e.length);console.log("New Current Track",t),console.log("New Queue",i),console.log("New Playlist",o),x(i),N({...w,songs:o})}},children:[(0,i.jsx)("div",{className:"mb-8 w-full bg-neutral-900 p-4 rounded shadow",children:f&&((null==f?void 0:f.platform)==="Youtube"?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{className:"text-xl font-semibold mb-2",children:"Now Playing"}),(0,i.jsx)(m.t.Item,{id:f.id,value:Z[0],onDragStart:(e,l)=>{k(0),C(l.point),console.log("Drag Start",l)},onDrag:(e,l)=>{console.log(e,l),D(l.point)},onDragEnd:()=>console.log("Drag End"),children:(0,i.jsxs)("div",{className:"flex justify-between items-center w-full mb-2 p-4 rounded shadow",children:[(0,i.jsx)("div",{className:"pr-2 text-white",children:"1"}),(0,i.jsx)(a.Z,{song:{id:f.id,author:f.author,name:null===(e=f.title)||void 0===e?void 0:e.text,href:"youtube.com"+(null===(t=f.endpoint)||void 0===t?void 0:null===(l=t.metadata)||void 0===l?void 0:l.url),image_path:null===(v=f.thumbnails[0])||void 0===v?void 0:v.url,views:null===(g=f.short_view_count)||void 0===g?void 0:g.text,platform:"Youtube"},onPlay:()=>P(f)})]},f.id)},f.id+"-1")]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{className:"text-xl font-semibold mb-2",children:"Now Playing"}),(0,i.jsxs)(m.t.Item,{id:f.id,value:Z[0],onDragStart:(e,l)=>{k(0),C(l.point)},onDrag:(e,l)=>{console.log(e,l),D(l.point)},children:[(0,i.jsx)("div",{className:"pr-2 text-white",children:"1"}),(0,h.Z)(f,()=>P(f))]},f.id+"-1")]}))}),0!==A.length&&(0,i.jsxs)("div",{className:"mb-8 w-full bg-neutral-900 p-4 rounded shadow",children:[(0,i.jsx)("h2",{className:"text-xl font-semibold mb-2",children:"Next in Queue"}),A.map((e,l)=>{var t,o,n,s,d;return"Youtube"!==e.platform?(0,i.jsx)(m.t.Item,{id:e.id,value:Z[l+1],onDragStart:()=>k(l+1),onDragEnd:()=>console.log("Drag End"),children:(0,i.jsxs)("div",{className:"flex justify-between items-center w-full mb-2 p-4 rounded",children:[(0,i.jsx)("div",{children:l+1}),(0,h.Z)(e,()=>{}),(0,i.jsx)("button",{onClick:()=>S(e),className:"ml-2 bg-red-500 text-white rounded px-2 py-1",children:"Remove"})]},e.id)},"".concat(e.id,"-").concat(l+1)):(0,i.jsx)(m.t.Item,{id:e.id,value:Z[l+1],onDragStart:()=>k(l+1),onDragEnd:e=>{console.log(e),console.log(l+1)},children:(0,i.jsxs)("div",{className:"flex justify-between items-center w-full mb-2 p-4 rounded",children:[(0,i.jsx)("div",{className:"pr-2",children:l+2}),(0,i.jsx)(a.Z,{song:{id:e.id,author:e.author,name:null===(t=e.title)||void 0===t?void 0:t.text,href:"youtube.com"+(null===(n=e.endpoint)||void 0===n?void 0:null===(o=n.metadata)||void 0===o?void 0:o.url),image_path:null===(s=e.thumbnails[0])||void 0===s?void 0:s.url,views:null===(d=e.short_view_count)||void 0===d?void 0:d.text,platform:"Youtube"},onPlay:()=>{}}),(0,i.jsx)("button",{onClick:()=>S(e),className:"ml-2 bg-red-500 text-white rounded px-2 py-1",children:"Remove"})]},e.id)},"".concat(e.id,"-").concat(l+1))})]}),(null==w?void 0:w.songs.length)!==0&&(0,i.jsxs)("div",{className:"mb-8 w-full bg-neutral-900 p-4 rounded shadow",children:[(0,i.jsx)("h2",{className:"text-xl font-semibold mb-2",children:"Next up"}),null==w?void 0:w.songs.map((e,l)=>{var t,o,n,s,d;return"Youtube"!==e.platform?(0,i.jsx)(m.t.Item,{id:e.id,value:Z[l+A.length+1],onDragStart:e=>{console.log(e),k(l+A.length+1)},onDragEnd:e=>console.log(e),children:(0,i.jsxs)("div",{className:"flex justify-between items-center w-full mb-2 p-4 rounded",children:[(0,i.jsx)("div",{children:l+2}),(0,i.jsx)("div",{className:"flex-1 items-center gap-x-4 w-full",children:(0,h.Z)(e,()=>P(e))},e.id),(0,i.jsx)("button",{onClick:()=>b(null==e?void 0:e.id),className:"ml-2 bg-red-500 text-white rounded px-2 py-1",children:"Remove"})]},e.id)},"".concat(e.id,"-").concat(l+A.length+1)):(0,i.jsx)(m.t.Item,{id:e.id,value:Z[l+A.length+1],onDragStart:()=>k(l+A.length+1),onDragEnd:()=>console.log("Drag End"),children:(0,i.jsxs)("div",{className:"flex justify-between items-center w-full mb-2 p-4 rounded",children:[(0,i.jsx)("div",{className:"pr-2 ",children:l+A.length+2}),(0,i.jsx)(a.Z,{song:{id:e.id,author:e.author,name:null===(t=e.title)||void 0===t?void 0:t.text,href:"youtube.com"+(null===(n=e.endpoint)||void 0===n?void 0:null===(o=n.metadata)||void 0===o?void 0:o.url),image_path:null===(s=e.thumbnails[0])||void 0===s?void 0:s.url,views:null===(d=e.short_view_count)||void 0===d?void 0:d.text,platform:"Youtube"},onPlay:()=>{P(e)}}),(0,i.jsx)("button",{onClick:()=>b(null==e?void 0:e.id),className:"ml-2 bg-red-500 text-white rounded px-2 py-1",children:"Remove"})]},e.id)},"".concat(e.id,"-").concat(l+A.length+1))})]})]})]})}},84318:function(e,l,t){"use strict";t.d(l,{Z:function(){return r}});var i=t(57437),o=t(16463),n=t(34728),s=t(12947),a=t(66648),d={src:"/_next/static/media/expand.625cdf6a.svg",height:24,width:24,blurWidth:0,blurHeight:0},r=e=>{let{song:l}=e;(0,o.useRouter)();let{supabaseClient:t}=(0,n.useSessionContext)();(0,s.Z)();let{isOpen:r,onOpen:u,onClose:c,setSong:h}=(0,s.Z)();return(0,i.jsx)("button",{className:" cursor-pointer  hover:opacity-75  transition ",onClick:e=>{e.stopPropagation(),h(l),r||u()},children:(0,i.jsx)(a.default,{className:"object-contain",onClick:()=>{h(l),r||u()},src:d,style:{filter:"invert(100%)"},alt:"Image",width:25,height:25})})}},973:function(e,l,t){"use strict";var i=t(57437),o=t(2265),n=t(61379),s=t(16463),a=t(88726),d=t(34728),r=t(89362),u=t(56480);l.Z=e=>{let{songId:l,song:t}=e,c=(0,s.useRouter)(),{supabaseClient:h}=(0,d.useSessionContext)(),m=(0,u.Z)(),{user:v}=(0,r.aF)(),[g,A]=(0,o.useState)(!1);(0,o.useEffect)(()=>{(null==v?void 0:v.id)&&(async()=>{let{data:e,error:t}=await h.from("liked_songs").select("*").eq("user_id",v.id).eq("song_id",l).single();!t&&e&&A(!0)})()},[l,h,null==v?void 0:v.id]);let x=g?n.M_L:n.lo,f=async()=>{if(!v)return m.onOpen();if(g){let{error:e}=await h.from("liked_songs").delete().eq("user_id",v.id).eq("song_id",l);e?a.Am.error(e.message):A(!1)}else{let{data:e,error:i}=await h.from("songs").select("id").eq("id",l);if(!(null==e?void 0:e.length)){let{error:e}=await h.from("songs").insert([t]);if(e){a.Am.error(e.message);return}}let{error:o}=await h.from("liked_songs").insert({song_id:l,user_id:v.id});o?a.Am.error(o.message):(A(!0),a.Am.success("Success"))}c.refresh()};return(0,i.jsx)("button",{className:" cursor-pointer  hover:opacity-75  transition ",onClick:e=>{e.stopPropagation(),f()},children:(0,i.jsx)(x,{color:g?"#22c55e":"white",size:25})})}},7155:function(e,l,t){"use strict";var i=t(57437),o=t(66648),n=t(43765),s=t(57771);l.Z=e=>{let{data:l,onClick:t,children:a}=e,d=(0,n.Z)();return(0,i.jsxs)("div",{className:" flex  items-center  gap-x-3  cursor-pointer  hover:bg-neutral-800/50  w-full  p-2  rounded-md ",onClick:()=>t?t(l.id):d.setId(l.id),children:[(0,i.jsxs)("div",{className:" flex  items-center  cursor-pointer   gap-x-3 w-full  rounded-md ",children:[(0,i.jsx)("div",{className:" relative  rounded-md  min-h-[60px]  min-w-[60px]  overflow-hidden ",children:(0,i.jsx)(o.default,{fill:!0,src:l.image_path||s.default,alt:"MediaItem",className:"object-cover"})}),(0,i.jsx)("div",{className:"flex flex-col gap-y-1 overflow-hidden",children:(0,i.jsx)("p",{className:"text-white truncate",children:l.name})})]}),a]})}},37368:function(e,l,t){"use strict";var i=t(57437);t(2265);var o=t(7155),n=t(973),s=t(84318);l.Z=(e,l,t)=>(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(o.Z,{data:{id:null==e?void 0:e.id,artists:[null==e?void 0:e.user],name:null==e?void 0:e.title,href:null==e?void 0:e.permalink_url,image_path:null==e?void 0:e.artwork_url,waveform_url:null==e?void 0:e.waveform_url,track_authorization:null==e?void 0:e.track_authorization,likes_count:null==e?void 0:e.likes_count,media:null==e?void 0:e.media,platform:"Soundcloud"},onClick:l,children:(0,i.jsxs)("div",{className:"flex items-end",children:[t,(0,i.jsx)(n.Z,{songId:null==e?void 0:e.id}),(0,i.jsx)(s.Z,{song:{platform:"Soundcloud",id:null==e?void 0:e.id,name:null==e?void 0:e.title,author:null==e?void 0:e.user,image:null==e?void 0:e.artwork_url,media:{track_authorization:null==e?void 0:e.track_authorization,...null==e?void 0:e.media}}})]})})})},null==e?void 0:e.id)},31504:function(e,l,t){"use strict";var i=t(57437),o=t(16463),n=t(66648),s=t(973),a=t(84318),d=t(57771);l.Z=e=>{var l,t,r,u,c,h;let{song:m,onPlay:v,children:g}=e,A=(0,o.useRouter)();return(0,i.jsxs)("div",{onClick:()=>{v(m.id),A.push("/watch?id=".concat(m.id))},className:" flex  items-center  gap-x-3  cursor-pointer  hover:bg-neutral-800/50  w-full  p-2  rounded-md ",children:[(0,i.jsxs)("div",{className:" flex  items-center  gap-x-3  cursor-pointer  w-full  ",children:[(0,i.jsxs)("div",{className:" relative  rounded-md  min-h-[60px]  min-w-[60px]  overflow-hidden group ",children:[(0,i.jsx)(n.default,{fill:!0,src:m.image_path||d.default,alt:"Song",className:"object-cover"}),(0,i.jsx)("div",{className:"opacity-0 group-hover:opacity-100 transition-opacity duration-200",children:g})]}),(0,i.jsxs)("div",{className:"flex-col gap-y-1 overflow-hidden",children:[(0,i.jsx)("p",{className:"text-white truncate pb-1",children:m.name}),(0,i.jsxs)("div",{className:"flex gap-x-2 overflow-hidden items-center",children:[(null===(l=m.author)||void 0===l?void 0:l.thumbnails)&&(null===(r=m.author)||void 0===r?void 0:null===(t=r.thumbnails)||void 0===t?void 0:t.length)>0&&(0,i.jsx)("div",{className:" relative  rounded-full  h-8 w-8 overflow-hidden ",children:(0,i.jsx)(n.default,{fill:!0,src:null===(c=m.author)||void 0===c?void 0:null===(u=c.thumbnails[0])||void 0===u?void 0:u.url,alt:"Artist",className:"object-cover"})}),(0,i.jsx)("p",{className:"text-neutral-400 text-sm truncate hover:text-white",onClick:e=>{var l;e.stopPropagation(),A.push("/channel?id=".concat(null===(l=m.author)||void 0===l?void 0:l.id))},children:null===(h=m.author)||void 0===h?void 0:h.name})]})]})]}),(0,i.jsx)("div",{className:"flex items-end",children:(0,i.jsxs)("div",{className:"flex gap-x-2 items-end justify-end",children:[(0,i.jsx)(s.Z,{songId:m.id}),(0,i.jsx)(a.Z,{song:{platform:"Youtube",id:m.id,name:m.name,image:m.image_path,author:m.author}})]})})]},m.id)}},12947:function(e,l,t){"use strict";let i=(0,t(39099).Ue)(e=>({isOpen:!1,onOpen:()=>e({isOpen:!0}),onClose:()=>e({isOpen:!1}),song:null,setSong:l=>e({song:l})}));l.Z=i},57771:function(e,l,t){"use strict";t.r(l),l.default={src:"/_next/static/media/playlist.9ff5369c.jpeg",height:1080,width:1080,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAAX/2gAMAwEAAhADEAAAALsVH//EABkQAAEFAAAAAAAAAAAAAAAAAAAREyJhYv/aAAgBAQABPwCDels//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:8}},5779:function(e,l,t){"use strict";t.r(l),l.default={src:"/_next/static/media/queue.6b16e76b.svg",height:48,width:48,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[2420,6115,9450,1787,9982,5722,3712,8077,7057,5048,8871,2971,7023,1744],function(){return e(e.s=68611)}),_N_E=e.O()}]);