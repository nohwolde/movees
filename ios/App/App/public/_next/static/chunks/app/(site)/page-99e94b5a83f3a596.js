(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6502],{17038:function(e,t,l){Promise.resolve().then(l.bind(l,43297)),Promise.resolve().then(l.bind(l,48871)),Promise.resolve().then(l.bind(l,37238))},43297:function(e,t,l){"use strict";var a=l(57437),s=l(81634),n=l(2265),r=l(84238),i=l(97288);t.default=e=>{let{songs:t}=e,{scKey:l,setScKey:o}=(0,s.Jt)(),[c,d]=(0,n.useState)({header:{author:{name:""},banner:[{url:""}],channel_handle:{text:""},subscribers:{text:""},videos_count:{text:"0"}},current_tab:{content:{contents:[]}},metadata:{avatar:[{url:""}],description:""}}),u="UC-9-kyTW8ZkZNDHQJ6FgpwQ";return console.log(u),(0,n.useEffect)(()=>{(async()=>{console.log(u);let e=await (0,r.mr)(u);console.log(e),d(e),console.log(null==e?void 0:e.current_tab.content.contents.filter(e=>"Shelf"===e.contents[0].type||"ChannelVideoPlayer"===e.contents[0].type))})()},[]),(0,a.jsx)(a.Fragment,{children:c&&(0,a.jsx)(i.Z,{contents:null==c?void 0:c.current_tab.content.contents.filter(e=>"Shelf"===e.contents[0].type||"ChannelVideoPlayer"===e.contents[0].type)})})}},97288:function(e,t,l){"use strict";l.d(t,{Z:function(){return d}});var a=l(57437);l(2265);var s=l(10236),n=l(66648),r=e=>{var t,l,s,r;let{data:i,onClick:o}=e;return(0,a.jsxs)("div",{onClick:()=>o(i.id),className:" relative  group  flex  flex-col  items-center  justify-center  rounded-md  overflow-hidden  gap-x-4  bg-neutral-400/5  cursor-pointer  hover:bg-neutral-400/10  transition  p-3 text-center ",children:[(0,a.jsx)("div",{className:" relative  w-full h-full  rounded-full overflow-hidden ",children:(0,a.jsx)(n.default,{className:"object-contain",src:(null===(t=i.author)||void 0===t?void 0:t.thumbnails[0].url.startsWith("https:"))?null===(l=i.author)||void 0===l?void 0:l.thumbnails[0].url:"https:"+(null===(s=i.author)||void 0===s?void 0:s.thumbnails[0].url),width:1280,height:720,alt:"Image"})}),(0,a.jsxs)("div",{className:"flex flex-col items-start w-full pt-4 gap-y-1",children:[(0,a.jsx)("p",{className:"font-semibold truncate w-full",children:null==i?void 0:null===(r=i.author)||void 0===r?void 0:r.name}),(0,a.jsx)("p",{className:" text-neutral-400  text-sm  pb-4  w-full  truncate ",children:null==i?void 0:i.subscribers.text})]})]})},i=l(16463),o=l(81634),c=l(46066),d=e=>{let{contents:t}=e,l=(0,i.useRouter)(),{currentTrack:n,setCurrentTrack:d}=(0,o.nP)(),u=e=>{var t;return(0,a.jsxs)("div",{className:"mb-2",children:[(0,a.jsx)("div",{className:"text-lg font-semibold",children:null===(t=e.title)||void 0===t?void 0:t.text}),(0,a.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 w-full",children:e.content.items.map(e=>"GridVideo"===e.type?(0,a.jsx)(s.Z,{data:e},e.id):"GridChannel"===e.type?(0,a.jsx)(r,{data:e,onClick:()=>l.push("/channel?id=".concat(e.author.id))},e.author.id):"CompactStation"===e.type?(0,a.jsx)(c.Z,{data:{title:e.title.text,artist:"Youtube Music"},image:e.thumbnail[0].url,onClick:()=>l.push("/yt/playlist?id=".concat(e.endpoint.payload.playlistId))},e.endpoint.payload.playlistId):void 0)}),(0,a.jsx)("hr",{className:"border-gray-200"})]})};return(0,a.jsx)("div",{className:"mt-2 mb-7 px-6",children:t.map(e=>{var t;if((null===(t=e.contents[0])||void 0===t?void 0:t.type)==="Shelf")return u(e.contents[0])})})}},37238:function(e,t,l){"use strict";var a=l(57437),s=l(66648),n=l(16463),r=l(14063),i=l(56480),o=l(89362);t.default=e=>{let{image:t,name:l,href:c}=e,d=(0,n.useRouter)(),u=(0,i.Z)(),{user:A}=(0,o.aF)();return(0,a.jsxs)("button",{onClick:()=>{if(!A)return u.onOpen();d.push(c)},className:" relative  group  flex  items-center  rounded-md  overflow-hidden  gap-x-4  bg-neutral-100/10  cursor-pointer  hover:bg-neutral-100/20  transition  pr-4 ",children:[(0,a.jsx)("div",{className:"relative min-h-[64px] min-w-[64px]",children:(0,a.jsx)(s.default,{className:"object-cover",src:t,fill:!0,alt:"Image"})}),(0,a.jsx)("p",{className:"font-medium truncate py-5",children:l}),(0,a.jsx)("div",{className:" absolute  transition  opacity-0  rounded-full  flex  items-center  justify-center  bg-blue-500 p-4  drop-shadow-md  right-5 group-hover:opacity-100  hover:scale-110 ",children:(0,a.jsx)(r.gmG,{className:"text-black"})})]})}},46066:function(e,t,l){"use strict";var a=l(57437),s=l(66648),n=l(57771);t.Z=e=>{let{data:t,image:l,onClick:r}=e;return(0,a.jsxs)("div",{onClick:()=>r(t.id),className:" relative  group  flex  flex-col  items-center  justify-center  rounded-md  overflow-hidden  gap-x-4  bg-neutral-400/5  cursor-pointer  hover:bg-neutral-400/10  transition  p-3 ",children:[(0,a.jsx)("div",{className:" relative  aspect-square  w-full h-full  rounded-md  overflow-hidden ",children:(0,a.jsx)(s.default,{className:"object-cover",src:l||n,fill:!0,alt:"Image"})}),(0,a.jsxs)("div",{className:"flex flex-col items-start w-full pt-4 gap-y-1",children:[(0,a.jsx)("p",{className:"font-semibold truncate w-full",children:t.title}),(0,a.jsxs)("p",{className:" text-neutral-400  text-sm  pb-4  w-full  truncate ",children:["By ",t.artist]})]})]})}},10236:function(e,t,l){"use strict";l.d(t,{Z:function(){return A}});var a=l(57437),s=l(66648);l(57771);var n=l(16463),r=l(60370),i=l(17005),o=l(81634),c=l(14063),d=()=>(0,a.jsx)("button",{className:" transition  opacity-0  rounded-full  flex  items-center  justify-center  bg-cyan-500  p-4  drop-shadow-md  translate translate-y-1/4 group-hover:opacity-100  group-hover:translate-y-0 hover:scale-110 ",children:(0,a.jsx)(c.gmG,{className:"text-black"})}),u=l(88726),A=e=>{var t,l,c,A;let{data:h}=e,m=(0,n.useRouter)(),{addToFront:p,addToQueue:v,setCurrentTrack:f}=(0,o.nP)(),g=()=>{console.log("adding to Front of Queue"),p({...h,platform:"Youtube"})},x=()=>{console.log("adding to End of Queue"),v({...h,platform:"Youtube"})};return(0,a.jsxs)("div",{onClick:()=>{m.push("/watch?id=".concat(h.id)),console.log("Playing Now"),f({...h,platform:"Youtube"})},className:" relative  group  flex  flex-col  items-center  justify-center  rounded-md  overflow-hidden  gap-x-4  bg-neutral-400/5  cursor-pointer  hover:bg-neutral-400/10  transition  p-3 ",children:[(0,a.jsxs)("div",{className:" relative  w-full h-full  rounded-md  overflow-hidden ",children:[(0,a.jsx)(s.default,{className:"object-contain",src:"https://img.youtube.com/vi/".concat(h.id,"/hqdefault.jpg")||0,width:1280,height:720,alt:"Image"}),(0,a.jsx)("div",{className:" absolute  bottom-5  right-5 ",children:(0,a.jsx)(d,{})}),(0,a.jsxs)("div",{className:" absolute  top-5  right-5 flex flex-row ",children:[(0,a.jsx)("div",{className:" transition  opacity-0  rounded-md  flex  items-center  justify-center  bg-cyan-500  p-2  mb-2 drop-shadow-md  translate translate-y-1/4 group-hover:opacity-100  group-hover:translate-y-0 hover:scale-110 mr-2 ",onClick:e=>{null==e||e.stopPropagation(),g(),u.ZP.success("Added to Queue")},children:(0,a.jsx)(s.default,{className:"object-contain",src:r,alt:"Image",width:45,height:45})}),(0,a.jsx)("div",{className:" transition  opacity-0  rounded-md flex  items-center  justify-center  bg-blue-500 p-2 mt-2 drop-shadow-md  translate translate-y-1/4 group-hover:opacity-100  group-hover:translate-y-0 hover:scale-110 ",onClick:e=>{null==e||e.stopPropagation(),x(),u.ZP.success("Added to Queue")},children:(0,a.jsx)(s.default,{className:"object-contain",src:i,alt:"Image",width:45,height:45})})]})]}),(0,a.jsxs)("div",{className:"flex flex-col items-start w-full pt-4 gap-y-1",children:[(0,a.jsx)("p",{className:"font-semibold truncate w-full",children:null==h?void 0:null===(t=h.title)||void 0===t?void 0:t.text}),(0,a.jsx)("p",{className:" text-neutral-400  text-sm  pb-4  truncate hover:text-white ",onClick:e=>{var t;e.stopPropagation(),m.push("/channel?id=".concat(null==h?void 0:null===(t=h.author)||void 0===t?void 0:t.id))},children:null==h?void 0:null===(l=h.author)||void 0===l?void 0:l.name}),(0,a.jsxs)("p",{className:" text-neutral-400  text-sm  pb-4  w-full  truncate ",children:[null==h?void 0:null===(c=h.short_view_count)||void 0===c?void 0:c.text," • ",null==h?void 0:null===(A=h.published)||void 0===A?void 0:A.text]})]})]})}},17005:function(e,t,l){"use strict";l.r(t),t.default={src:"/_next/static/media/play-last.fa4f2f43.svg",height:29,width:29,blurWidth:0,blurHeight:0}},60370:function(e,t,l){"use strict";l.r(t),t.default={src:"/_next/static/media/play-next.b86e9490.svg",height:29,width:29,blurWidth:0,blurHeight:0}},57771:function(e,t,l){"use strict";l.r(t),t.default={src:"/_next/static/media/playlist.9ff5369c.jpeg",height:1080,width:1080,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAAX/2gAMAwEAAhADEAAAALsVH//EABkQAAEFAAAAAAAAAAAAAAAAAAAREyJhYv/aAAgBAQABPwCDels//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:8}}},function(e){e.O(0,[2420,6115,9450,1787,9982,5722,8077,7057,8871,2971,7023,1744],function(){return e(e.s=17038)}),_N_E=e.O()}]);