"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3273],{84318:function(e,t,l){l.d(t,{Z:function(){return d}});var i=l(57437),n=l(16463),o=l(34728),a=l(12947),r=l(66648),s={src:"/_next/static/media/expand.625cdf6a.svg",height:24,width:24,blurWidth:0,blurHeight:0},d=e=>{let{song:t}=e;(0,n.useRouter)();let{supabaseClient:l}=(0,o.useSessionContext)();(0,a.Z)();let{isOpen:d,onOpen:u,onClose:c,setSong:h}=(0,a.Z)();return(0,i.jsx)("button",{className:" cursor-pointer  hover:opacity-75  transition ",onClick:e=>{e.stopPropagation(),h(t),d||u()},children:(0,i.jsx)(r.default,{className:"object-contain",onClick:()=>{h(t),d||u()},src:s,style:{filter:"invert(100%)"},alt:"Image",width:25,height:25})})}},973:function(e,t,l){var i=l(57437),n=l(2265),o=l(61379),a=l(16463),r=l(88726),s=l(34728),d=l(89362),u=l(56480);t.Z=e=>{let{songId:t,song:l}=e,c=(0,a.useRouter)(),{supabaseClient:h}=(0,s.useSessionContext)(),v=(0,u.Z)(),{user:m}=(0,d.aF)(),[f,x]=(0,n.useState)(!1);(0,n.useEffect)(()=>{(null==m?void 0:m.id)&&(async()=>{let{data:e,error:l}=await h.from("liked_songs").select("*").eq("user_id",m.id).eq("song_id",t).single();!l&&e&&x(!0)})()},[t,h,null==m?void 0:m.id]);let g=f?o.M_L:o.lo,p=async()=>{if(!m)return v.onOpen();if(f){let{error:e}=await h.from("liked_songs").delete().eq("user_id",m.id).eq("song_id",t);e?r.Am.error(e.message):x(!1)}else{let{data:e,error:i}=await h.from("songs").select("id").eq("id",t);if(!(null==e?void 0:e.length)){let{error:e}=await h.from("songs").insert([l]);if(e){r.Am.error(e.message);return}}let{error:n}=await h.from("liked_songs").insert({song_id:t,user_id:m.id});n?r.Am.error(n.message):(x(!0),r.Am.success("Success"))}c.refresh()};return(0,i.jsx)("button",{className:" cursor-pointer  hover:opacity-75  transition ",onClick:e=>{e.stopPropagation(),p()},children:(0,i.jsx)(g,{color:f?"#22c55e":"white",size:25})})}},7155:function(e,t,l){var i=l(57437),n=l(66648),o=l(43765),a=l(57771);t.Z=e=>{let{data:t,onClick:l,children:r}=e,s=(0,o.Z)();return(0,i.jsxs)("div",{className:" flex  items-center  gap-x-3  cursor-pointer  hover:bg-neutral-800/50  w-full  p-2  rounded-md ",onClick:()=>l?l(t.id):s.setId(t.id),children:[(0,i.jsxs)("div",{className:" flex  items-center  cursor-pointer   gap-x-3 w-full  rounded-md ",children:[(0,i.jsx)("div",{className:" relative  rounded-md  min-h-[60px]  min-w-[60px]  overflow-hidden ",children:(0,i.jsx)(n.default,{fill:!0,src:t.image_path||a.default,alt:"MediaItem",className:"object-cover"})}),(0,i.jsx)("div",{className:"flex flex-col gap-y-1 overflow-hidden",children:(0,i.jsx)("p",{className:"text-white truncate",children:t.name})})]}),r]})}},93273:function(e,t,l){l.d(t,{default:function(){return k}});var i=l(57437),n=l(2265),o=l(45614),a=l(21794),r=l(61379),s=l(5779),d=l(57771),u=l(82384),c={src:"/_next/static/media/replay.0c54e6e1.svg",height:24,width:24,blurWidth:0,blurHeight:0},h=l(56958),v=e=>{let{value:t=1,onChange:l}=e;return(0,i.jsx)(h.fC,{className:" relative  flex  items-center  select-none  touch-none  w-16 h-16 ",defaultValue:[1],value:[t],onValueChange:e=>{null==l||l(e[0])},max:1,step:.1,"aria-label":"Volume",children:(0,i.jsx)(h.fQ,{className:" bg-neutral-600  relative  grow  rounded-full  h-[5px] ",children:(0,i.jsx)(h.e6,{className:" absolute  bg-white  rounded-full  h-full "})})})},m=l(16463),f=l(31504),x=l(37368),g=l(84238);l(90558);var p=l(48871),w=l(78077),A=l(66648),b=l(10236),j=l(81634),y=l(86440),N=l(25566),_=e=>{var t,l,h,_,k,E,C,P,S,R,I,M,B,Z,L,z,Q,W,F;let{shaka:q}=e;(0,n.useRef)(null);let T=(0,n.useRef)(null),Y=(0,n.useRef)(null),[V,D]=(0,n.useState)(1),[U,H]=(0,n.useState)(!1),G=(0,m.usePathname)(),O=(0,m.useSearchParams)(),K=O.get("id"),J=(0,m.useRouter)(),[X,$]=(0,n.useState)(""),[ee,et]=(0,n.useState)(""),[el,ei]=(0,n.useState)([{id:"",type:""}]),[en,eo]=(0,n.useState)({basic_info:{title:"",thumbnail:[{url:""}],view_count:"0",id:"",channel:{id:"",name:"",thumbnails:[{url:""}]}},secondary_info:{owner:{author:{id:"",name:"",thumbnails:[{url:""}]},subscriber_count:{text:""}},description:{text:""}},watch_next_feed:[{id:"",type:""}]}),[ea,er]=(0,n.useState)(""),{scKey:es}=(0,j.Jt)(),{currentTrack:ed,setCurrentTrack:eu,playNext:ec,playPrev:eh,queue:ev,shufflePlaylist:em,isShuffled:ef,setIsShuffled:ex,currentPlaylist:eg}=(0,j.nP)(),ep=U?o.wRS:o.W9m,ew=0===V?a.Iko:a.MVT,[eA,eb]=(0,n.useState)(!0);(0,n.useEffect)(()=>{var e,t;console.log("backend url",null==N?void 0:null===(e=N.env)||void 0===e?void 0:"proxy-production-ce3e.up.railway.app"),console.log("supabase url",null==N?void 0:null===(t=N.env)||void 0===t?void 0:"https://kfazznrzyzoeoxeljouc.supabase.co")},[]),(0,n.useEffect)(()=>{(async()=>{(null==ed?void 0:ed.artwork_url)&&$(await (0,y._u)(null==ed?void 0:ed.artwork_url))})()},[null==ed?void 0:ed.artwork_url]),(0,n.useEffect)(()=>{if(null==en?void 0:en.watch_next_feed){var e;ei(null==en?void 0:null===(e=en.watch_next_feed)||void 0===e?void 0:e.filter(e=>(null==e?void 0:e.type)==="CompactVideo"))}},[en]),(0,n.useEffect)(()=>{(async()=>{if(console.log("App mounted"),G.startsWith("/watch")){console.log("PATHNAME:",G);let e=O.get("id");e&&""!==e&&(console.log("ID",e),(null===ed||(null==ed?void 0:ed.id)!==K)&&eu({id:e,platform:"Youtube"}))}})()},[]);let ej=(0,n.useRef)(null),ey=(0,n.useRef)(null),eN=null,[e_,ek]=(0,n.useState)(0);(0,n.useEffect)(()=>{if(T.current||Y.current){let e=new MutationObserver((e,t)=>{for(let l of(console.log(e),e))"childList"===l.type&&(t.disconnect(),T.current&&t.observe(T.current,{childList:!0,subtree:!0}),Y.current&&t.observe(Y.current,{childList:!0,subtree:!0}))});return T.current&&(e.observe(T.current,{childList:!0,subtree:!0}),console.log("Watching watch page")),Y.current&&(e.observe(Y.current,{childList:!0,subtree:!0}),console.log("Watching player bar")),G.startsWith("/watch")&&T.current&&ey.current?T.current.contains(ey.current)||(T.current.appendChild(ey.current),console.log("Moving player to watch page")):Y.current&&ey.current&&!Y.current.contains(ey.current)&&(Y.current.appendChild(ey.current),console.log("Moving player to player bar")),()=>e.disconnect()}},[G,T.current,Y.current]);let eE=(0,n.useRef)(!1),[eC,eP]=(0,n.useState)(0),[eS,eR]=(0,n.useState)(0),eI=eS>0?eC/eS*100:0,eM=e=>{let t=Math.floor(e%60);return"".concat(Math.floor(e/60),":").concat(t<10?"0":"").concat(t)};(0,n.useEffect)(()=>{eE.current=!0;let e=ej.current,t=ey.current;var l,i,n,o,a=new q.Player(e);let r=null;eN=a,null===(l=ej.current)||void 0===l||l.addEventListener("play",()=>{console.log("Event Listener: Video Play"),H(!0)}),null===(i=ej.current)||void 0===i||i.addEventListener("pause",()=>{console.log("Event Listener: Video Pause"),H(!1)}),r&&(r.destroy(),r=null),null==t||t.querySelectorAll("div").forEach(e=>e.remove()),q.polyfill.installAll(),(r=new q.ui.Overlay(a,t,e)).configure({seekBarColors:{base:"rgba(255,255,255,.2)",buffered:"rgba(255,255,255,.4)",played:"rgb(64, 224, 208)"}}),console.log(Object.keys(q.ui));let s=e=>{console.error("Error code",e.code,"object",e)},d=()=>{a.getMediaElement().addEventListener("timeupdate",()=>{let e=a.getMediaElement().currentTime,t=a.getMediaElement().duration;eP(e),t-e<=1&&(console.log("Video Ended"),console.log(ev),console.log(ed),ec())})};if((null==ed?void 0:ed.platform)==="Youtube"){a.configure({streaming:{bufferingGoal:180,rebufferingGoal:.02,bufferBehind:300,retryParameters:{maxAttempts:5}},drm:{servers:{"com.widevine.alpha":"https://widevine-proxy.appspot.com/proxy"}}}),null===(n=a.getNetworkingEngine())||void 0===n||n.registerRequestFilter((e,t)=>{let l=new URL(t.uris[0]),i=t.headers;if(l.host.endsWith(".googlevideo.com")||i.Range||l.host.includes("cf-hls-media.sndcdn.com")){var n;l.searchParams.set("__host",l.host),l.host=(null==N?void 0:null===(n=N.env)||void 0===n?void 0:"proxy-production-ce3e.up.railway.app")||"localhost:8080",l.protocol="http",l.host.includes("cf-hls-media.sndcdn.com")&&(l.pathname="/hls"+l.pathname)}i.Range&&(t.headers={},l.searchParams.set("range",i.Range.split("=")[1]),l.searchParams.set("alr","yes")),t.uris[0]=l.toString()});let e=q.net.NetworkingEngine.RequestType;null===(o=a.getNetworkingEngine())||void 0===o||o.registerResponseFilter(async(t,l)=>{let i;let n=new DataView(l.data);if(l.data.byteLength<4||1752462448!=n.getUint32(0))return;let o=q.util.StringUtils.fromUTF8(l.data);i=t==e.MANIFEST?a.getConfiguration().manifest.retryParameters:t==e.SEGMENT?a.getConfiguration().streaming.retryParameters:t==e.LICENSE?a.getConfiguration().drm.retryParameters:q.net.NetworkingEngine.defaultRetryParameters();let r=q.net.NetworkingEngine.makeRequest([o],i),s=a.getNetworkingEngine().request(t,r),d=await s.promise;l.data=d.data,l.headers=d.headers,l.uri=d.uri}),(0,g.bF)(null==ed?void 0:ed.id).then(e=>{console.log(e),eo(e.video),(null==ed?void 0:ed.title)||(console.log("Setting Current Track"),eu({...e.video.basic_info,author:e.video.secondary_info.owner.author,thumbnails:e.video.basic_info.thumbnail,views:e.video.basic_info.view_count,title:{text:e.video.basic_info.title},endpoint:{metadata:{url:"/watch?id="+e.video.basic_info.id}},platform:"Youtube"}));let t=e.video.streaming_data.hls_manifest_url;er(t),a.load(t).then(function(){eN=a,console.log("Player",a),console.log(eN),console.log("The video has now been loaded!"),eR(a.getMediaElement().duration),d(),console.log(G),G.startsWith("/watch")&&O.get("id")!==(null==ed?void 0:ed.id)&&(console.log("Changing route name"),J.push("/watch?id="+(null==ed?void 0:ed.id)))}).catch(s),eN=a})}else(null==ed?void 0:ed.platform)==="Soundcloud"&&null!==es&&(0,y.Gd)(null==ed?void 0:ed.media.transcodings[0].url,null==ed?void 0:ed.track_authorization,es).then(e=>{console.log(e),a.load(e.url).then(function(){eN=a,console.log("Player",a),console.log(eN),console.log("The video has now been loaded!"),eR(a.getMediaElement().duration),d()}).catch(s)})},[null==ed?void 0:ed.id,e_]),(0,n.useEffect)(()=>{console.log("Watch Ref",T),console.log("Video Container",ey.current)},[T.current]);let eB=()=>{var e,t;U?(null===(t=ej.current)||void 0===t||t.pause(),H(!1)):(null===(e=ej.current)||void 0===e||e.play(),H(!0))},eZ=e=>{let t=null==e?void 0:e.sort((e,t)=>{var l,i,n,o;return((null===(l=e.author)||void 0===l?void 0:l.id)===(null===(i=ed.author)||void 0===i?void 0:i.id)?-1:0)-((null===(n=t.author)||void 0===n?void 0:n.id)===(null===(o=ed.author)||void 0===o?void 0:o.id)?-1:0)});return(0,i.jsx)(i.Fragment,{children:null==t?void 0:t.map(e=>(0,i.jsx)(b.Z,{data:e},e.id))})},[eL,ez]=(0,n.useState)(!1);return(0,i.jsxs)(i.Fragment,{children:[G.startsWith("/watch")&&(0,i.jsx)("div",{className:" bg-black w-full  h-[calc(100%-80px)] flex-1  overflow-y-auto  py-2  ",children:(0,i.jsxs)("div",{className:" bg-neutral-900 rounded-lg  h-full  w-full  overflow-hidden  overflow-y-auto ",children:[(0,i.jsx)(p.default,{className:(0,w.m)("\n            bg-gradient-to-b \n            from-blue-900\n            to-b\n            ")}),en&&(0,i.jsxs)("div",{className:" flex flex-row gap-x-3 p-4 mr-4 ",children:[(0,i.jsxs)("div",{className:"w-full md:w-3/4 h-auto",children:[(0,i.jsx)("div",{className:" flex  w-full h-auto items-center  justify-center  rounded-md  overflow-hidden  gap-x-4  bg-neutral-400/5  cursor-pointer  hover:bg-neutral-400/10  transition  ",ref:T}),(0,i.jsxs)("div",{className:" flex  flex-col gap-x-3  cursor-pointer  hover:bg-neutral-800/50  w-full  p-4 rounded-md ",children:[(0,i.jsx)("div",{className:"flex mb-2 gap-y-1",children:(0,i.jsx)("p",{className:"font-semibold truncate w-full",children:null==en?void 0:null===(S=en.basic_info)||void 0===S?void 0:S.title})}),(0,i.jsxs)("div",{className:"flex mb-2 gap-y-1 overflow-hidden truncate",onClick:()=>{var e,t;return J.push("/channel?id=".concat(null==en?void 0:null===(t=en.basic_info)||void 0===t?void 0:null===(e=t.channel)||void 0===e?void 0:e.id))},children:[(0,i.jsx)("div",{className:" flex relative  rounded-full  min-h-[50px]  min-w-[50px]  overflow-hidden ",children:(0,i.jsx)(A.default,{fill:!0,src:null==en?void 0:null===(B=en.secondary_info)||void 0===B?void 0:null===(M=B.owner)||void 0===M?void 0:null===(I=M.author)||void 0===I?void 0:null===(R=I.thumbnails[0])||void 0===R?void 0:R.url,alt:"ArtistItem",className:"object-cover"})}),(0,i.jsx)("div",{className:"flex flex-col",children:(0,i.jsxs)("div",{className:"gap-y-1 overflow-hidden",children:[(0,i.jsx)("p",{className:"text-white truncate ml-2",children:null==en?void 0:null===(z=en.secondary_info)||void 0===z?void 0:null===(L=z.owner)||void 0===L?void 0:null===(Z=L.author)||void 0===Z?void 0:Z.name}),(0,i.jsx)("div",{className:"flex ml-2 gap-x-2 overflow-hidden items-center",children:(0,i.jsx)("p",{className:"text-neutral-400 text-sm truncate",children:null==en?void 0:null===(F=en.secondary_info)||void 0===F?void 0:null===(W=F.owner)||void 0===W?void 0:null===(Q=W.subscriber_count)||void 0===Q?void 0:Q.text})})]})})]})]}),(0,i.jsxs)("div",{className:"flex flex-col items-start min-w-full pt-4 gap-y-1",children:[(0,i.jsx)("p",{className:"\n                    text-neutral-400 \n                    text-sm \n                    pb-4 \n                    w-full \n                    ".concat(eL?"":"truncate","\n                  "),children:null==en?void 0:null===(l=en.secondary_info)||void 0===l?void 0:null===(t=l.description)||void 0===t?void 0:t.text}),(0,i.jsx)("button",{className:"text-neutral-100 text-sm",onClick:()=>ez(!eL),children:eL?"Show less":"Show more"})]}),(0,i.jsx)("div",{className:"md:hidden flex-col gap-y-6",children:eZ(el)})]}),(0,i.jsx)("div",{className:"hidden md:flex w-1/4 h-auto flex-col gap-y-6",children:eZ(el)})]})]})}),(0,i.jsx)("div",{className:" fixed bottom-0  bg-black  w-full  py-2  h-[80px]  px-4 ",children:(0,i.jsxs)("div",{className:"grid grid-cols-4 md:grid-cols-3 h-full",children:[(0,i.jsxs)("div",{className:"flex w-full justify-start col-span-3 md:col-span-1",children:[(0,i.jsx)("div",{className:"hidden md:".concat(ed&&"Youtube"===ed.platform&&eA?"block":"hidden"," flex bg-black py-2 px-4"),children:(0,i.jsxs)("div",{className:"absolute bottom-20 right-0 items-center gap-x-2 max-w-[400px]",children:[(0,i.jsx)("div",{className:"cursor-pointer\n                      relative \n                      rounded-full\n                      h-[30px] \n                      w-[30px] \n                      overflow-hidden\n                      bg-neutral-800\n                      flex\n                      items-center\n                      justify-center\n                      ".concat(G.startsWith("/watch")?"hidden":"block","\n                      "),onClick:()=>eb(!eA),children:eA?(0,i.jsx)(o.IAR,{size:18}):(0,i.jsx)(o.E0f,{size:18})}),(0,i.jsx)("div",{className:"bg-black py-2 px-4 bottom-20 rounded-md w-full",ref:Y,children:(0,i.jsx)("div",{className:"bg-black shadow-lg mx-auto w-full",ref:ey,id:"shaka-container",children:(0,i.jsx)("video",{id:"video",ref:ej,className:"w-full h-full",poster:ed&&"Youtube"===ed.platform?null==en?void 0:null===(h=en.basic_info)||void 0===h?void 0:h.thumbnail[0].url:ed&&"Soundcloud"===ed.platform?X||ed.artwork_url:d,autoPlay:!0})})})]})}),ed?(null==ed?void 0:ed.platform)==="Youtube"&&(null==ed?void 0:ed.title)?(0,i.jsx)("div",{className:"flex justify-between items-center w-full rounded shadow truncate",children:(0,i.jsx)(f.Z,{song:{id:ed.id,author:ed.author,name:null===(_=ed.title)||void 0===_?void 0:_.text,href:"youtube.com"+(null===(E=ed.endpoint)||void 0===E?void 0:null===(k=E.metadata)||void 0===k?void 0:k.url),image_path:null===(C=ed.thumbnails[0])||void 0===C?void 0:C.url,views:null===(P=ed.short_view_count)||void 0===P?void 0:P.text,platform:"Youtube"},onPlay:()=>console.log("Already playing"),children:(0,i.jsx)("div",{className:" relative  rounded-full h-[30px]  w-[30px]  overflow-hidden bg-neutral-800 flex items-center justify-center ",onClick:e=>{e.stopPropagation(),eb(!eA)},children:eA?(0,i.jsx)(o.IAR,{size:15}):(0,i.jsx)(o.E0f,{size:15})})})},ed.id):(0,x.Z)(ed,()=>console.log("Already playing")):(0,i.jsxs)("div",{className:"flex items-center gap-x-4",children:[(0,i.jsx)("div",{className:"w-10 h-10 bg-gray-400 rounded-sm animate-pulse"}),(0,i.jsx)("div",{className:"w-10 h-10 bg-gray-400 rounded-full animate-pulse"})]})]}),(0,i.jsx)("div",{className:" flex  md:hidden  col-auto  w-full  justify-end  items-center ",children:(0,i.jsx)("div",{onClick:eB,className:" h-10 w-10 flex  items-center  justify-center  rounded-full  bg-white  p-1  cursor-pointer ",children:(0,i.jsx)(ep,{size:30,className:"text-black"})})}),(0,i.jsxs)("div",{className:" hidden h-full md:flex  justify-center  items-center  w-full  max-w-[722px]  gap-x-6 flex-col ",children:[(0,i.jsxs)("div",{className:"flex justify-center items-center w-full gap-x-6",children:[(0,i.jsx)(A.default,{className:"object-contain filter invert-100",src:u.Z,style:{filter:"invert(70%)"},alt:"Image",width:28,height:28}),(0,i.jsx)(r.KCK,{onClick:()=>{eh()},size:30,className:" text-neutral-400  cursor-pointer  hover:text-white  transition "}),(0,i.jsx)("div",{onClick:eB,className:" flex  items-center  justify-center h-10 w-10  rounded-full  bg-white  p-1  cursor-pointer ",children:(0,i.jsx)(ep,{size:30,className:"text-black"})}),(0,i.jsx)(r.tfD,{onClick:()=>{ec()},size:30,className:" text-neutral-400  cursor-pointer  hover:text-white  transition "}),(0,i.jsx)(A.default,{className:"object-contain",src:c,style:{filter:"invert(70%)"},alt:"Image",width:25,height:25})]}),(0,i.jsxs)("div",{className:"w-full flex justify-between items-center mt-2",children:[(0,i.jsx)("span",{children:eM(eC)}),(0,i.jsx)("div",{className:"flex-grow mx-2 h-1 bg-gray-500 relative cursor-pointer",onClick:e=>{let t=e.currentTarget.getBoundingClientRect(),l=(e.clientX-t.left)/t.width;ej.current&&(ej.current.currentTime=l*eS)},children:(0,i.jsx)("div",{style:{width:"".concat(eI,"%")},className:"absolute left-0 top-0 h-1 bg-blue-500"})}),(0,i.jsx)("span",{children:eM(eS)})]})]}),(0,i.jsx)("div",{className:"hidden md:flex lg:flex",children:(0,i.jsxs)("div",{className:"flex items-center gap-x-2 ml-auto",children:[(0,i.jsxs)("div",{className:"flex items-center gap-x-2",onClick:()=>J.push("/queue"),children:[ev.length>0&&(0,i.jsxs)("div",{className:" hidden xl:flex  items-center flex-col gap-x-2 cursor-pointer hover:bg-neutral-800/50 rounded-md  ",onMouseEnter:e=>{var t,l,i;return null==e?void 0:null===(i=e.currentTarget)||void 0===i?void 0:null===(l=i.children[1])||void 0===l?void 0:null===(t=l.firstChild)||void 0===t?void 0:t.classList.add("animate-marquee")},onMouseLeave:e=>{var t,l,i;return null==e?void 0:null===(i=e.currentTarget)||void 0===i?void 0:null===(l=i.children[1])||void 0===l?void 0:null===(t=l.firstChild)||void 0===t?void 0:t.classList.remove("animate-marquee")},children:[(0,i.jsx)("span",{className:" px-2  py-1  text-md text-gray-400 font-semibold ",children:"Up Next"}),(0,i.jsx)("div",{className:" rounded-full  px-2  py-1  text-md text-gray-400 font-semibold w-60  // Limit the width to 15rem (240px) overflow-hidden  // Hide the overflow whitespace-nowrap  // Prevent the text from wrapping relative  // Make the div a positioned parent h-6 group ",children:(0,i.jsx)("div",{className:" absolute  top-0  left-0  whitespace-nowrap  group-hover:animate-marquee  // Apply the marquee animation on hover h-full ",children:"Youtube"===ev[0].platform?ev[0].title.text:ev[0].title})})]}),(0,i.jsx)(A.default,{className:"object-contain",src:s,style:{filter:"invert(100%)"},alt:"Image",width:37,height:37})]}),(0,i.jsxs)("div",{className:"flex items-center gap-x-2",children:[(0,i.jsx)(ew,{onClick:()=>{0===V?D(1):D(0)},className:"cursor-pointer",size:27}),(0,i.jsx)(v,{value:V,onChange:e=>D(e)})]})]})})]})})]})},k=()=>{let[e,t]=(0,n.useState)(!1),[o,a]=(0,n.useState)(!0),[r,s]=(0,n.useState)(null);return((0,n.useEffect)(()=>{t(!0)},[]),(0,n.useEffect)(()=>{e&&l.e(3663).then(l.t.bind(l,25733,23)).then(e=>{s(e),a(!1)}).catch(e=>{console.error("Error loading shaka-player:",e)})},[e]),o)?(0,i.jsx)("div",{children:"Loading..."}):(0,i.jsx)(_,{shaka:r})}},37368:function(e,t,l){var i=l(57437);l(2265);var n=l(7155),o=l(973),a=l(84318);t.Z=(e,t,l)=>(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(n.Z,{data:{id:null==e?void 0:e.id,artists:[null==e?void 0:e.user],name:null==e?void 0:e.title,href:null==e?void 0:e.permalink_url,image_path:null==e?void 0:e.artwork_url,waveform_url:null==e?void 0:e.waveform_url,track_authorization:null==e?void 0:e.track_authorization,likes_count:null==e?void 0:e.likes_count,media:null==e?void 0:e.media,platform:"Soundcloud"},onClick:t,children:(0,i.jsxs)("div",{className:"flex items-end",children:[l,(0,i.jsx)(o.Z,{songId:null==e?void 0:e.id}),(0,i.jsx)(a.Z,{song:{platform:"Soundcloud",id:null==e?void 0:e.id,name:null==e?void 0:e.title,author:null==e?void 0:e.user,image:null==e?void 0:e.artwork_url,media:{track_authorization:null==e?void 0:e.track_authorization,...null==e?void 0:e.media}}})]})})})},null==e?void 0:e.id)},10236:function(e,t,l){l.d(t,{Z:function(){return h}});var i=l(57437),n=l(66648);l(57771);var o=l(16463),a=l(60370),r=l(17005),s=l(81634),d=l(14063),u=()=>(0,i.jsx)("button",{className:" transition  opacity-0  rounded-full  flex  items-center  justify-center  bg-cyan-500  p-4  drop-shadow-md  translate translate-y-1/4 group-hover:opacity-100  group-hover:translate-y-0 hover:scale-110 ",children:(0,i.jsx)(d.gmG,{className:"text-black"})}),c=l(88726),h=e=>{var t,l,d,h;let{data:v}=e,m=(0,o.useRouter)(),{addToFront:f,addToQueue:x,setCurrentTrack:g}=(0,s.nP)(),p=()=>{console.log("adding to Front of Queue"),f({...v,platform:"Youtube"})},w=()=>{console.log("adding to End of Queue"),x({...v,platform:"Youtube"})};return(0,i.jsxs)("div",{onClick:()=>{m.push("/watch?id=".concat(v.id)),console.log("Playing Now"),g({...v,platform:"Youtube"})},className:" relative  group  flex  flex-col  items-center  justify-center  rounded-md  overflow-hidden  gap-x-4  bg-neutral-400/5  cursor-pointer  hover:bg-neutral-400/10  transition  p-3 ",children:[(0,i.jsxs)("div",{className:" relative  w-full h-full  rounded-md  overflow-hidden ",children:[(0,i.jsx)(n.default,{className:"object-contain",src:"https://img.youtube.com/vi/".concat(v.id,"/hqdefault.jpg")||0,width:1280,height:720,alt:"Image"}),(0,i.jsx)("div",{className:" absolute  bottom-5  right-5 ",children:(0,i.jsx)(u,{})}),(0,i.jsxs)("div",{className:" absolute  top-5  right-5 flex flex-row ",children:[(0,i.jsx)("div",{className:" transition  opacity-0  rounded-md  flex  items-center  justify-center  bg-cyan-500  p-2  mb-2 drop-shadow-md  translate translate-y-1/4 group-hover:opacity-100  group-hover:translate-y-0 hover:scale-110 mr-2 ",onClick:e=>{null==e||e.stopPropagation(),p(),c.ZP.success("Added to Queue")},children:(0,i.jsx)(n.default,{className:"object-contain",src:a,alt:"Image",width:45,height:45})}),(0,i.jsx)("div",{className:" transition  opacity-0  rounded-md flex  items-center  justify-center  bg-blue-500 p-2 mt-2 drop-shadow-md  translate translate-y-1/4 group-hover:opacity-100  group-hover:translate-y-0 hover:scale-110 ",onClick:e=>{null==e||e.stopPropagation(),w(),c.ZP.success("Added to Queue")},children:(0,i.jsx)(n.default,{className:"object-contain",src:r,alt:"Image",width:45,height:45})})]})]}),(0,i.jsxs)("div",{className:"flex flex-col items-start w-full pt-4 gap-y-1",children:[(0,i.jsx)("p",{className:"font-semibold truncate w-full",children:null==v?void 0:null===(t=v.title)||void 0===t?void 0:t.text}),(0,i.jsx)("p",{className:" text-neutral-400  text-sm  pb-4  truncate hover:text-white ",onClick:e=>{var t;e.stopPropagation(),m.push("/channel?id=".concat(null==v?void 0:null===(t=v.author)||void 0===t?void 0:t.id))},children:null==v?void 0:null===(l=v.author)||void 0===l?void 0:l.name}),(0,i.jsxs)("p",{className:" text-neutral-400  text-sm  pb-4  w-full  truncate ",children:[null==v?void 0:null===(d=v.short_view_count)||void 0===d?void 0:d.text," • ",null==v?void 0:null===(h=v.published)||void 0===h?void 0:h.text]})]})]})}},31504:function(e,t,l){var i=l(57437),n=l(16463),o=l(66648),a=l(973),r=l(84318),s=l(57771);t.Z=e=>{var t,l,d,u,c,h;let{song:v,onPlay:m,children:f}=e,x=(0,n.useRouter)();return(0,i.jsxs)("div",{onClick:()=>{m(v.id),x.push("/watch?id=".concat(v.id))},className:" flex  items-center  gap-x-3  cursor-pointer  hover:bg-neutral-800/50  w-full  p-2  rounded-md ",children:[(0,i.jsxs)("div",{className:" flex  items-center  gap-x-3  cursor-pointer  w-full  ",children:[(0,i.jsxs)("div",{className:" relative  rounded-md  min-h-[60px]  min-w-[60px]  overflow-hidden group ",children:[(0,i.jsx)(o.default,{fill:!0,src:v.image_path||s.default,alt:"Song",className:"object-cover"}),(0,i.jsx)("div",{className:"opacity-0 group-hover:opacity-100 transition-opacity duration-200",children:f})]}),(0,i.jsxs)("div",{className:"flex-col gap-y-1 overflow-hidden",children:[(0,i.jsx)("p",{className:"text-white truncate pb-1",children:v.name}),(0,i.jsxs)("div",{className:"flex gap-x-2 overflow-hidden items-center",children:[(null===(t=v.author)||void 0===t?void 0:t.thumbnails)&&(null===(d=v.author)||void 0===d?void 0:null===(l=d.thumbnails)||void 0===l?void 0:l.length)>0&&(0,i.jsx)("div",{className:" relative  rounded-full  h-8 w-8 overflow-hidden ",children:(0,i.jsx)(o.default,{fill:!0,src:null===(c=v.author)||void 0===c?void 0:null===(u=c.thumbnails[0])||void 0===u?void 0:u.url,alt:"Artist",className:"object-cover"})}),(0,i.jsx)("p",{className:"text-neutral-400 text-sm truncate hover:text-white",onClick:e=>{var t;e.stopPropagation(),x.push("/channel?id=".concat(null===(t=v.author)||void 0===t?void 0:t.id))},children:null===(h=v.author)||void 0===h?void 0:h.name})]})]})]}),(0,i.jsx)("div",{className:"flex items-end",children:(0,i.jsxs)("div",{className:"flex gap-x-2 items-end justify-end",children:[(0,i.jsx)(a.Z,{songId:v.id}),(0,i.jsx)(r.Z,{song:{platform:"Youtube",id:v.id,name:v.name,image:v.image_path,author:v.author}})]})})]},v.id)}},12947:function(e,t,l){let i=(0,l(39099).Ue)(e=>({isOpen:!1,onOpen:()=>e({isOpen:!0}),onClose:()=>e({isOpen:!1}),song:null,setSong:t=>e({song:t})}));t.Z=i},17005:function(e,t,l){l.r(t),t.default={src:"/_next/static/media/play-last.fa4f2f43.svg",height:29,width:29,blurWidth:0,blurHeight:0}},60370:function(e,t,l){l.r(t),t.default={src:"/_next/static/media/play-next.b86e9490.svg",height:29,width:29,blurWidth:0,blurHeight:0}},57771:function(e,t,l){l.r(t),t.default={src:"/_next/static/media/playlist.9ff5369c.jpeg",height:1080,width:1080,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAAX/2gAMAwEAAhADEAAAALsVH//EABkQAAEFAAAAAAAAAAAAAAAAAAAREyJhYv/aAAgBAQABPwCDels//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:8}},5779:function(e,t,l){l.r(t),t.default={src:"/_next/static/media/queue.6b16e76b.svg",height:48,width:48,blurWidth:0,blurHeight:0}},82384:function(e,t){t.Z={src:"/_next/static/media/shuffle.efc703ae.svg",height:29,width:29,blurWidth:0,blurHeight:0}}}]);