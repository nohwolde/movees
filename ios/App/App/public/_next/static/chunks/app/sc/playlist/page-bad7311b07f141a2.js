(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8142],{51130:function(l,e,t){Promise.resolve().then(t.bind(t,43797))},43797:function(l,e,t){"use strict";t.r(e);var i=t(57437),o=t(66648),a=t(48871),s=t(67545),n=t(16463),r=t(2265),d=t(86440),u=t(81634),c=t(37368),m=t(14063),v=t(78077),f=t(57771),h=t(82384);e.default=()=>{var l,e;let t=(0,n.useSearchParams)().get("id"),{scKey:g,setScKey:x}=(0,u.Jt)(),{setCurrentTrack:p,addToFront:k,addToQueue:w,setCurrentPlaylist:y,isShuffled:j,setIsShuffled:b,shufflePlaylist:N,setUnshuffledPlaylist:_}=(0,u.nP)();(0,n.useRouter)();let{getScPlaylist:S}=(0,u.Oz)(),[E,P]=(0,r.useState)({name:"",title:"",image:"",artwork_url:"",songs:[{image:""}],tracks:[{artwork_url:""}]}),[z,C]=(0,r.useState)(""),[O,Y]=(0,r.useState)(!0);(0,r.useEffect)(()=>{(async()=>{let l=await S(t);if(console.log(l),void 0!==l)P(l);else if(Y(!1),g){let l=await (0,d.qh)(t,g);console.log(l),P(l)}})()},[g]);let Z=l=>{var e,t,i,o,a;return"Youtube"===l.platform?{id:null==l?void 0:l.id,author:null==l?void 0:l.author,title:{text:null==l?void 0:l.name},thumbnails:[{url:null==l?void 0:l.image}],platform:"Youtube"}:"Spotify"===l.platform?{id:null===(e=l.yt)||void 0===e?void 0:e.id,author:null===(t=l.yt)||void 0===t?void 0:t.author,title:{text:null===(i=l.yt)||void 0===i?void 0:i.name},thumbnails:[{url:null===(o=l.yt)||void 0===o?void 0:o.image}],platform:"Youtube"}:{id:l.id,user:[l.author],title:l.name,href:l.id,artwork_url:l.image,isExplicit:l.isExplicit||!1,platform:"Soundcloud",track_authorization:null===(a=l.media)||void 0===a?void 0:a.track_authorization,media:l.media}},M=()=>{var l,e;if(O){if(j){let e=(null===(l=E.songs)||void 0===l?void 0:l.slice()).sort(()=>.5-Math.random()),t=Z(e[0]);console.log(t),p(t),y({...E,songs:[...e.slice(1).map(l=>Z(l)),t]})}else{console.log("Playing",E);let l=null==E?void 0:E.songs[0];console.log(l),p(Z(l)),y({...E,songs:[...null==E?void 0:E.songs.slice(1).map(l=>Z(l)),Z(l)]})}}else if(j){let l=(null===(e=E.tracks)||void 0===e?void 0:e.slice()).sort(()=>.5-Math.random());console.log(l[0]),p({...l[0],platform:"Soundcloud"}),y({...E,songs:[...l.slice(1).map(l=>({...l,platform:"Soundcloud"})),{...l[0],platform:"Soundcloud"}]})}else p({...null==E?void 0:E.tracks[0],platform:"Soundcloud"}),console.log("Playing",E),y({...E,songs:[...null==E?void 0:E.tracks.slice(1).map(l=>({...l,platform:"Soundcloud"})),{...null==E?void 0:E.tracks[0],platform:"Soundcloud"}]})};return(0,r.useEffect)(()=>{(async()=>{(null==E?void 0:E.image)?C(await (0,d._u)(null==E?void 0:E.image)):(null==E?void 0:E.tracks)&&C(await (0,d._u)(null==E?void 0:E.tracks[0].artwork_url))})()},[null==E?void 0:E.image,null==E?void 0:E.tracks]),(0,i.jsxs)("div",{className:" bg-neutral-900  rounded-lg  h-full  w-full  overflow-hidden  overflow-y-auto ",children:[(0,i.jsx)(a.default,{className:(0,v.m)("\n        bg-gradient-to-b \n        from-indigo-700\n        to-b\n        "),children:(0,i.jsxs)("div",{className:"mt-20",children:[(0,i.jsxs)("div",{className:" flex  flex-col  md:flex-row  items-center  gap-x-5 ",children:[(0,i.jsx)("div",{className:"relative h-48 w-48 lg:h-56 lg:w-56",children:(0,i.jsx)(o.default,{className:"object-cover",fill:!0,src:O?null==E?void 0:E.image:z||((null==E?void 0:E.artwork_url)?E.artwork_url:(null==E?void 0:E.tracks)?null==E?void 0:null===(l=E.tracks[0])||void 0===l?void 0:l.artwork_url:f.default),alt:"Playlist"})}),(0,i.jsxs)("div",{className:"flex flex-col gap-y-2 mt-4 md:mt-0",children:[(0,i.jsx)("p",{className:"hidden md:block font-semibold text-sm",children:"Playlist"}),(0,i.jsx)("h1",{className:" text-white  text-4xl  sm:text-5xl  lg:text-7xl  font-bold ",children:O?null==E?void 0:E.name:null==E?void 0:E.title})]})]}),(0,i.jsxs)("div",{className:"items-center justify-center gap-x-4 mt-4",children:[(0,i.jsx)("div",{className:" transition  opacity-100  rounded-full  inline-flex items-center  justify-center  bg-orange-600 p-6  drop-shadow-md  translate translate-y-1/4 group-hover:opacity-100  group-hover:translate-y-0 hover:scale-110 ",onClick:()=>M(),children:(0,i.jsx)(m.gmG,{className:"text-3xl text-white",size:25})}),(0,i.jsx)("div",{className:" transition  opacity-100  inline-flex items-center  justify-center  p-6  drop-shadow-md  translate translate-y-1/3 group-hover:translate-y-0 hover:scale-110 ",onClick:()=>b(!j),children:(0,i.jsx)(o.default,{src:h.Z,style:j?{filter:" invert(50%) sepia(52%) saturate(2434%) hue-rotate(224deg) brightness(114%) contrast(101%)"}:{filter:"invert(70%)"},alt:"Shuffle",width:60,height:60})})]})]})}),O&&(0,i.jsx)(s.default,{songs:null==E?void 0:E.songs}),!O&&(0,i.jsx)("div",{className:"flex flex-col gap-y-2 w-full p-6",children:null==E?void 0:null===(e=E.tracks)||void 0===e?void 0:e.map(l=>(0,i.jsx)("div",{className:"flex-1 items-center gap-x-4 w-full",children:(0,c.Z)(l,()=>p({...l,platform:"Soundcloud"}))},l.id))})]})}},82384:function(l,e){"use strict";e.Z={src:"/_next/static/media/shuffle.efc703ae.svg",height:29,width:29,blurWidth:0,blurHeight:0}}},function(l){l.O(0,[2420,6115,9450,1787,9982,5722,3712,8077,7057,8871,7545,2971,7023,1744],function(){return l(l.s=51130)}),_N_E=l.O()}]);