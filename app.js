(() => {
  "use strict";
  const $ = (s) => document.querySelector(s);
  const canvas = $("#malaCanvas"), ctx = canvas.getContext("2d", { alpha: true });
  const stage = $("#malaStage");
  const state = { count: 0, target: 108, material: "rudraksha", sound: true, chant: {type:"NAAM JAP",title:"RAM",subtitle:"श्री राम जय राम जय जय राम"}, theme:"dark", sway:0, phase:0 };
  const chants = {
    naam: [
      ["RAM","श्री राम जय राम जय जय राम"],["HARI","हरि बोल • ॐ नमो भगवते वासुदेवाय"],
      ["SHIVA","ॐ नमः शिवाय • हर हर महादेव"],["GOVIND","श्री कृष्ण गोविन्द हरे मुरारे"],
      ["RADHA","श्री राधे राधे"],["KRISHNA","हरे कृष्ण हरे राम"],
      ["DURGA","ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे"],["GANESH","ॐ गं गणपतये नमः"]
    ],
    mantra: [
      ["GAYATRI MANTRA","ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि"],
      ["MAHAMRITYUNJAYA","ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्"],
      ["HARE KRISHNA","हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे"],
      ["OM NAMAH SHIVAYA","ॐ नमः शिवाय"]
    ]
  };
  let W=1,H=1,DPR=1, lastY=null, toastTimer=0, audio=null;

  function resize(){
    const r=stage.getBoundingClientRect(); W=Math.max(1,r.width); H=Math.max(1,r.height); DPR=Math.min(devicePixelRatio||1,2);
    canvas.width=Math.round(W*DPR); canvas.height=Math.round(H*DPR);
    ctx.setTransform(DPR,0,0,DPR,0,0); draw();
  }
  const rand=(seed)=>{let x=Math.sin(seed*127.1+311.7)*43758.5453;return x-Math.floor(x)};
  function palette(){
    return ({
      rudraksha:["#261006","#71351a","#b16b36","#d19458","#170903"],
      tulsi:["#51371f","#9a7143","#c7a16d","#e2c394","#302014"],
      chandan:["#74451f","#b77a3c","#dfad68","#f0ce94","#482a13"],
      sphatik:["#718b99","#b8d0d9","#edf8fa","#ffffff","#4e626e"]
    })[state.material];
  }
  function pathSeed(c,x,y,rx,ry,seed){
    c.beginPath();
    for(let i=0;i<=100;i++){
      const a=i/100*Math.PI*2;
      const wob=1+.055*Math.sin(5*a+seed)+.028*Math.sin(9*a+seed*1.7)+.015*Math.sin(13*a+seed*.5);
      const px=x+Math.cos(a)*rx*wob, py=y+Math.sin(a)*ry*(1+.035*Math.sin(7*a+seed))*wob;
      if(i===0)c.moveTo(px,py);else c.lineTo(px,py);
    } c.closePath();
  }
  function drawRudraksha(c,x,y,rx,ry,seed,scale=1){
    c.save(); c.translate(x,y);
    const p=palette();
    // A seed-shaped, irregular silhouette rather than a smooth sphere.
    pathSeed(c,0,0,rx,ry,seed);
    c.shadowColor="rgba(0,0,0,.62)";c.shadowBlur=rx*.24;c.shadowOffsetY=ry*.14;
    const base=c.createRadialGradient(-rx*.34,-ry*.42,rx*.03,rx*.08,ry*.13,rx*1.2);
    base.addColorStop(0,p[3]);base.addColorStop(.28,p[2]);base.addColorStop(.68,p[1]);base.addColorStop(1,p[4]);
    c.fillStyle=base;c.fill();c.shadowColor="transparent";
    c.save();pathSeed(c,0,0,rx,ry,seed);c.clip();
    // Five deeply recessed, curved Mukhi channels with unequal wandering.
    for(let k=0;k<5;k++){
      const a=k*Math.PI*2/5-Math.PI/2 + .03*Math.sin(seed+k);
      c.save();c.translate(Math.cos(a)*rx*.035,Math.sin(a)*ry*.035);c.rotate(a+Math.PI/2);
      const drift=Math.sin(seed+k*1.91)*rx*.09;
      c.beginPath();c.moveTo(drift-rx*.02,-ry*.98);
      c.bezierCurveTo(-rx*.37+drift,-ry*.58,rx*.27+drift,-ry*.18,-rx*.16+drift,ry*.18);
      c.bezierCurveTo(-rx*.37+drift,ry*.47,-rx*.04+drift,ry*.76,rx*.08+drift,ry*.99);
      c.lineCap="round";c.lineJoin="round";
      c.strokeStyle="rgba(15,5,2,.92)";c.lineWidth=rx*.115;c.stroke();
      c.strokeStyle="rgba(5,2,1,.55)";c.lineWidth=rx*.055;c.stroke();
      c.beginPath();c.moveTo(drift-rx*.065,-ry*.85);c.bezierCurveTo(-rx*.23+drift,-ry*.35,rx*.17+drift,ry*.05,-rx*.07+drift,ry*.77);
      c.strokeStyle="rgba(220,151,91,.48)";c.lineWidth=rx*.025;c.stroke();
      c.restore();
    }
    // Irregular raised nodules and shallow pits distributed across the lobes.
    for(let i=0;i<Math.floor(rx*1.55);i++){
      const a=rand(seed*17+i*3.1)*Math.PI*2, rr=.16+rand(seed*9+i*7.7)*.73;
      const px=Math.cos(a)*rx*rr, py=Math.sin(a)*ry*rr;
      const r=rx*(.018+rand(seed+i*2.3)*.034);
      c.beginPath();c.ellipse(px,py,r,r*.72,a,0,Math.PI*2);
      c.fillStyle=i%3===0?"rgba(13,5,2,.34)":"rgba(232,170,107,.18)";c.fill();
      if(i%4===0){c.beginPath();c.arc(px-r*.3,py-r*.4,r*.55,0,Math.PI*2);c.fillStyle="rgba(8,3,1,.28)";c.fill();}
    }
    // Small dark threading bore at the top-facing center.
    c.beginPath();c.ellipse(0,-ry*.035,rx*.09,ry*.058,0,0,Math.PI*2);c.fillStyle="#100602";c.fill();
    c.beginPath();c.ellipse(-rx*.02,-ry*.055,rx*.034,ry*.019,0,0,Math.PI*2);c.fillStyle="rgba(229,169,108,.24)";c.fill();
    c.restore();
    // warm edge light gives the seed volume without a plastic gloss
    c.beginPath();c.ellipse(-rx*.24,-ry*.36,rx*.25,ry*.09,-.7,0,Math.PI*2);c.fillStyle="rgba(255,216,168,.13)";c.fill();
    c.restore();
  }
  function drawOther(c,x,y,rx,ry,seed){
    c.save();c.translate(x,y);const p=palette();
    const g=c.createRadialGradient(-rx*.3,-ry*.4,1,0,0,rx*1.2);
    g.addColorStop(0,p[3]);g.addColorStop(.5,p[2]);g.addColorStop(1,p[4]);
    c.beginPath();c.ellipse(0,0,rx*(.95+rand(seed)*.1),ry*(.96+rand(seed+1)*.08),.04*Math.sin(seed),0,Math.PI*2);
    c.fillStyle=g;c.shadowColor="rgba(0,0,0,.5)";c.shadowBlur=rx*.2;c.shadowOffsetY=ry*.12;c.fill();c.shadowColor="transparent";
    if(state.material==="sphatik"){c.strokeStyle="rgba(255,255,255,.7)";c.lineWidth=rx*.045;c.stroke();c.beginPath();c.ellipse(-rx*.25,-ry*.27,rx*.24,ry*.11,-.6,0,Math.PI*2);c.fillStyle="rgba(255,255,255,.5)";c.fill();}
    else for(let i=0;i<rx*.8;i++){const a=rand(seed+i)*Math.PI*2;c.beginPath();c.arc(Math.cos(a)*rx*.5,Math.sin(a)*ry*.5,rx*.022,0,Math.PI*2);c.fillStyle="rgba(35,17,7,.22)";c.fill();}
    c.restore();
  }
  function draw(){
    if(!ctx)return;ctx.clearRect(0,0,W,H);
    const count=state.target, top=Math.max(30,H*.045), bottom=H*.91, span=bottom-top;
    const beadH=Math.min(span/(count+1)*.83,W*.19,27), beadW=beadH*.86, cx=W*.5;
    // Single hanging thread behind the beads.
    ctx.save();ctx.beginPath();ctx.moveTo(cx,top-beadH*1.4);ctx.bezierCurveTo(cx+state.sway*4,H*.27,cx-state.sway*3,H*.68,cx,bottom+beadH*.3);
    ctx.strokeStyle="rgba(184,135,78,.82)";ctx.lineWidth=Math.max(1.1,W*.0035);ctx.stroke();ctx.restore();
    for(let i=0;i<count;i++){
      const t=(i+.5)/count, y=top+t*span;
      const x=cx+Math.sin(t*Math.PI*1.9)*W*.008+state.sway*Math.sin(t*Math.PI)*W*.007;
      const active=i<state.count, seed=i+41;
      ctx.save();if(active){ctx.shadowColor="rgba(239,173,91,.65)";ctx.shadowBlur=beadH*.45;}
      if(state.material==="rudraksha")drawRudraksha(ctx,x,y,beadW*.5,beadH*.48,seed);
      else drawOther(ctx,x,y,beadW*.5,beadH*.48,seed);
      ctx.restore();
    }
    // Guru / Sumeru bead, a little larger, and its attached cotton tassel.
    const gy=top-beadH*1.55;
    drawRudraksha(ctx,cx,gy,beadW*.68,beadH*.66,901);
    ctx.save();ctx.strokeStyle="rgba(197,148,88,.88)";ctx.lineWidth=Math.max(1,W*.003);
    for(let i=-4;i<=4;i++){ctx.beginPath();ctx.moveTo(cx+i*1.6,gy+beadH*.56);ctx.quadraticCurveTo(cx+i*3.2,gy+beadH*1.22,cx+i*2.8,gy+beadH*1.9);ctx.stroke();}
    ctx.restore();
  }
  function updateUI(){
    $("#countDisplay").textContent=state.count;$("#targetDisplay").textContent=state.target;
    $("#malas").textContent=Math.floor(state.count/state.target);$("#total").textContent=state.count;
    $("#progressFill").style.width=(state.count/state.target*100)+"%";
    $("#gestureHint").style.opacity=state.count>=state.target?".25":".9";
  }
  function toast(msg){const el=$("#toast");el.textContent=msg;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),1500);}
  function clickSound(){
    if(!state.sound)return;
    try{audio ||= new (window.AudioContext||window.webkitAudioContext)();if(audio.state==="suspended")audio.resume();
      const o=audio.createOscillator(),g=audio.createGain(),t=audio.currentTime;
      o.type="triangle";o.frequency.setValueAtTime(state.material==="sphatik"?900:390,t);o.frequency.exponentialRampToValueAtTime(170,t+.055);
      g.gain.setValueAtTime(.001,t);g.gain.linearRampToValueAtTime(.12,t+.004);g.gain.exponentialRampToValueAtTime(.001,t+.07);
      o.connect(g);g.connect(audio.destination);o.start(t);o.stop(t+.08);
    }catch(e){}
  }
  function advance(){
    if(state.count>=state.target){toast("Mala complete — begin another round");return;}
    state.count++;state.sway+=.11;clickSound();updateUI();draw();
    if(state.count===state.target)toast("Mala complete • शुभ जप");
    try{localStorage.setItem("divya-jap-state",JSON.stringify({count:state.count,target:state.target,material:state.material,chant:state.chant,theme:state.theme}));}catch(e){}
  }
  function restore(){
    try{const s=JSON.parse(localStorage.getItem("divya-jap-state")||"null");if(!s)return;
      if(Number.isInteger(s.target)&&s.target>0&&s.target<=1008)state.target=s.target;
      if(Number.isInteger(s.count))state.count=Math.max(0,Math.min(s.count,state.target));
      if(["rudraksha","tulsi","sphatik","chandan"].includes(s.material))state.material=s.material;
      if(s.chant&&s.chant.title)state.chant=s.chant;
      if(s.theme==="light")state.theme="light";
    }catch(e){}
  }
  function persist(){try{localStorage.setItem("divya-jap-state",JSON.stringify({count:state.count,target:state.target,material:state.material,chant:state.chant,theme:state.theme}));}catch(e){}}
  function applyChant(c){state.chant={type:c.type,title:c.title,subtitle:c.subtitle};$("#chantType").textContent=c.type;$("#chantTitle").textContent=c.title;$("#chantSubtitle").textContent=c.subtitle;persist();}
  function showChants(tab="naam"){
    const list=$("#chantList"), custom=$("#customPanel");list.innerHTML="";
    document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.tab===tab));
    custom.classList.toggle("hidden",tab!=="custom");list.classList.toggle("hidden",tab==="custom");
    (chants[tab]||[]).forEach(([title,subtitle])=>{const b=document.createElement("button");b.type="button";b.className="chant-choice";b.innerHTML=`<strong></strong><small></small>`;b.querySelector("strong").textContent=title;b.querySelector("small").textContent=subtitle;b.addEventListener("click",()=>{applyChant({type:tab==="naam"?"NAAM JAP":"MANTRA JAP",title,subtitle});$("#chantDialog").close();});list.appendChild(b);});
  }
  $("#chantOpen").addEventListener("click",()=>{showChants("naam");$("#chantDialog").showModal();});
  document.querySelectorAll(".tab").forEach(b=>b.addEventListener("click",()=>showChants(b.dataset.tab)));
  $("#applyCustom").addEventListener("click",()=>{const title=$("#customName").value.trim(),subtitle=$("#customSubtitle").value.trim();if(!title){toast("Enter a chant name");return;}applyChant({type:"CUSTOM JAP",title:title.toUpperCase(),subtitle});$("#chantDialog").close();});
  $("#targetOpen").addEventListener("click",()=>$("#targetDialog").showModal());
  const presets=[27,54,108,216,1008];let selected=state.target;
  function renderPresets(){const box=$("#presets");box.innerHTML="";presets.forEach(n=>{const b=document.createElement("button");b.type="button";b.className="preset"+(selected===n?" selected":"");b.textContent=n;b.addEventListener("click",()=>{selected=n;renderPresets();});box.appendChild(b);});}
  $("#applyCount").addEventListener("click",()=>{const custom=Number($("#customCount").value);const n=custom>0?Math.min(1008,Math.floor(custom)):selected;if(!n){toast("Choose a bead count");return;}state.target=n;state.count=0;updateUI();draw();persist();$("#targetDialog").close();toast("Mala set to "+n+" beads");});
  $("#reset").addEventListener("click",()=>{state.count=0;updateUI();draw();persist();toast("Current mala reset");});
  $("#soundToggle").addEventListener("click",()=>{state.sound=!state.sound;$("#soundToggle").classList.toggle("muted",!state.sound);toast(state.sound?"Sound on":"Sound off");});
  $("#themeToggle").addEventListener("click",()=>{state.theme=state.theme==="dark"?"light":"dark";document.documentElement.dataset.theme=state.theme;persist();});
  document.querySelectorAll(".material").forEach(b=>b.addEventListener("click",()=>{state.material=b.dataset.material;document.querySelectorAll(".material").forEach(x=>x.classList.toggle("active",x===b));draw();persist();}));
  stage.addEventListener("pointerdown",e=>{lastY=e.clientY;stage.setPointerCapture?.(e.pointerId);});
  stage.addEventListener("pointerup",e=>{if(lastY===null)return;const delta=lastY-e.clientY;lastY=null;if(delta>12||Math.abs(delta)<=12)advance();});
  stage.addEventListener("pointercancel",()=>lastY=null);
  window.addEventListener("resize",resize,{passive:true});
  restore();document.documentElement.dataset.theme=state.theme;
  applyChant(state.chant);document.querySelectorAll(".material").forEach(b=>b.classList.toggle("active",b.dataset.material===state.material));
  selected=state.target;renderPresets();updateUI();resize();
  let raf=0;function animate(){state.phase+=.01;state.sway*=.965;if(Math.abs(state.sway)<.001)state.sway=0;raf=requestAnimationFrame(animate);if(state.sway)draw();}animate();
})();