(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6785],{11292:function(e,l,t){Promise.resolve().then(t.bind(t,8521))},8521:function(e,l,t){"use strict";t.r(l);var i=t(57437),s=t(66648),o=t(14063),a=t(48871),n=t(67545),r=t(16463),d=t(2265),u=t(57771),c=t(81634),m=t(78077),h=t(82384);l.default=()=>{let e=(0,r.useSearchParams)().get("id"),l=(0,r.useRouter)(),[t,f]=(0,d.useState)({name:"",image:"",songs:[{name:"",author:"",image:"",id:"",platform:"",yt:{id:"",name:"",author:"",image:"",platform:""}}]}),{getSpotPlaylist:g,spotPlaylists:v}=(0,c.Oz)(),{setCurrentTrack:x,setCurrentPlaylist:p,isShuffled:y,setIsShuffled:b,shufflePlaylist:j,setUnshuffledPlaylist:w}=(0,c.nP)();(0,d.useEffect)(()=>{let l=g(e);console.log(l),f(l)},[v]);let N=e=>{var l,t,i,s,o;return"Youtube"===e.platform?{id:null==e?void 0:e.id,author:null==e?void 0:e.author,title:{text:null==e?void 0:e.name},thumbnails:[{url:null==e?void 0:e.image}],platform:"Youtube"}:"Spotify"===e.platform?{id:null===(l=e.yt)||void 0===l?void 0:l.id,author:null===(t=e.yt)||void 0===t?void 0:t.author,title:{text:null===(i=e.yt)||void 0===i?void 0:i.name},thumbnails:[{url:null===(s=e.yt)||void 0===s?void 0:s.image}],platform:"Youtube"}:{id:e.id,user:[e.author],title:e.name,href:e.id,artwork_url:e.image,isExplicit:e.isExplicit||!1,platform:"Soundcloud",track_authorization:null===(o=e.media)||void 0===o?void 0:o.track_authorization,media:e.media}},k=()=>{if(console.log("Playing playlist"),null!==t&&(null==t?void 0:t.songs.length)!==0){if(y){var e,i;let s=(null===(e=t.songs)||void 0===e?void 0:e.slice()).sort(()=>.5-Math.random()),o=s[0];console.log(o);let a=N(o);"Youtube"===o.platform||o.platform,x(a),l.push("/watch?id="+o.id),p({...t,songs:[...s.slice(1).map(e=>N(e)),a]}),w({...t,songs:[null==t?void 0:null===(i=t.songs)||void 0===i?void 0:i.slice(1).map(e=>N(e)),N(null==t?void 0:t.songs[0])]})}else{console.log("Playing",t);let e=null==t?void 0:t.songs[0].yt;console.log(e);let i=N(e);"Youtube"===e.platform||e.platform,x(i),l.push("/watch?id="+e.id),p({...t,songs:[...null==t?void 0:t.songs.slice(1).map(e=>N(e)),i]})}}};return(0,i.jsxs)("div",{className:" bg-neutral-900  rounded-lg  h-full  w-full  overflow-hidden  overflow-y-auto ",children:[(0,i.jsx)(a.default,{className:(0,m.m)("\n        bg-gradient-to-b \n        from-indigo-700\n        to-b\n        "),children:(0,i.jsxs)("div",{className:"mt-20",children:[(0,i.jsxs)("div",{className:" flex  flex-col  md:flex-row  items-center  gap-x-5 ",children:[(0,i.jsx)("div",{className:"relative h-32 w-32 lg:h-44 lg:w-44",children:(0,i.jsx)(s.default,{className:"object-cover",fill:!0,src:(null==t?void 0:t.image)||u.default,alt:"Playlist"})}),(0,i.jsxs)("div",{className:"flex flex-col gap-y-2 mt-4 md:mt-0",children:[(0,i.jsx)("p",{className:"hidden md:block font-semibold text-sm",children:"Playlist"}),(0,i.jsx)("h1",{className:" text-white  text-4xl  sm:text-5xl  lg:text-7xl  font-bold ",children:null==t?void 0:t.name})]})]}),(0,i.jsxs)("div",{className:"gap-y-2 mt-4 items-center justify-center",children:[(0,i.jsx)("div",{className:" transition  opacity-100  rounded-full  inline-flex items-center  justify-center  bg-green-600 p-6  drop-shadow-md  translate translate-y-1/4 group-hover:opacity-100  group-hover:translate-y-0 hover:scale-110 ",onClick:()=>k(),children:(0,i.jsx)(o.gmG,{className:"text-3xl text-white",size:25})}),(0,i.jsx)("div",{className:" transition  opacity-100  inline-flex items-center  justify-center  p-6  drop-shadow-md  translate translate-y-1/3 group-hover:translate-y-0 hover:scale-110 ",onClick:()=>b(!y),children:(0,i.jsx)(s.default,{src:h.Z,style:y?{filter:" invert(50%) sepia(52%) saturate(2434%) hue-rotate(224deg) brightness(114%) contrast(101%)"}:{filter:"invert(70%)"},alt:"Shuffle",width:60,height:60})})]})]})}),t&&(null==t?void 0:t.songs)&&(0,i.jsx)(n.default,{songs:null==t?void 0:t.songs})]})}},82384:function(e,l){"use strict";l.Z={src:"/_next/static/media/shuffle.efc703ae.svg",height:29,width:29,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[2420,6115,9450,1787,9982,5722,3712,8077,7057,8871,7545,2971,7023,1744],function(){return e(e.s=11292)}),_N_E=e.O()}]);