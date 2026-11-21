/* Divya Jap — offline-first procedural mala renderer.
   Pure browser APIs: SVG + Canvas 2D. No external libraries or network assets. */
(function () {
  const NS = "http://www.w3.org/2000/svg";
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const seeded = (n) => {
    let x = (n * 9301 + 49297) % 233280;
    return () => ((x = (x * 9301 + 49297) % 233280) / 233280);
  };

  window.FpvMalaRenderer = class FpvMalaRenderer {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext("2d");
      this.material = "rudraksha";
      this.targetCount = 108;
      this.currentCount = 0;
      this.beads = [];
      this.width = 0;
      this.height = 0;
      this.dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.phase = 0;
      this.lastFrame = 0;
      this.raf = 0;
      this.resizeObserver = new ResizeObserver(() => this.resize());
      this.resizeObserver.observe(canvas);
      this.resize();
      this.buildBeads();
      this.start();
    }
    setMaterial(value) {
      this.material = String(value || "rudraksha").toLowerCase();
      this.render();
    }
    setTargetCount(value) {
      this.targetCount = Math.max(1, Number(value) || 108);
      this.buildBeads();
      this.render();
    }
    advanceOneBead() {
      this.currentCount = Math.min(this.targetCount, this.currentCount + 1);
      this.render();
    }
    setCount(value) {
      this.currentCount = clamp(Number(value) || 0, 0, this.targetCount);
      this.render();
    }
    resize() {
      const rect = this.canvas.getBoundingClientRect();
      this.width = Math.max(1, rect.width);
      this.height = Math.max(1, rect.height);
      this.dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.canvas.width = Math.round(this.width * this.dpr);
      this.canvas.height = Math.round(this.height * this.dpr);
      this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
      this.render();
    }
    buildBeads() {
      const count = this.targetCount || 108;
      this.beads = Array.from({length: count}, (_, i) => {
        const r = seeded(i + 17);
        return { rx: .91 + r() * .16, ry: .94 + r() * .14, rot: (r() - .5) * .26,
          hue: (r() - .5) * 13, light: (r() - .5) * 9, phase: r() * Math.PI * 2 };
      });
    }
    palette() {
      return {
        rudraksha: ["#3b1c0e", "#8b4b25", "#c07a3d", "#241109"],
        tulsi: ["#5a351d", "#b47b43", "#d5a66c", "#3c2415"],
        chandan: ["#8b542b", "#d5a36b", "#f1cb91", "#69401f"],
        sphatik: ["#8797a4", "#e5f1f5", "#ffffff", "#72818d"]
      }[this.material] || ["#3b1c0e", "#8b4b25", "#c07a3d", "#241109"];
    }
    drawRudraksha(ctx, x, y, rx, ry, detail, idx) {
      const p = this.palette(), seed = seeded(idx + 991);
      const rot = detail.rot;
      ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
      // soft contact shadow
      ctx.shadowColor = "rgba(0,0,0,.55)"; ctx.shadowBlur = rx * .24; ctx.shadowOffsetY = ry * .10;
      const g = ctx.createRadialGradient(-rx*.34, -ry*.42, rx*.04, rx*.10, ry*.12, rx*1.18);
      g.addColorStop(0, p[2]); g.addColorStop(.34, p[1]); g.addColorStop(.78, p[0]); g.addColorStop(1, p[3]);
      ctx.beginPath();
      // naturally irregular seed silhouette
      for (let k=0;k<=72;k++) {
        const a = k/72*Math.PI*2;
        const wobble = 1 + .045*Math.sin(5*a+idx*.7) + .025*Math.sin(9*a+idx*1.3) + (seed()-.5)*.025;
        const px = Math.cos(a)*rx*detail.rx*wobble;
        const py = Math.sin(a)*ry*detail.ry*wobble;
        if (!k) ctx.moveTo(px,py); else ctx.lineTo(px,py);
      }
      ctx.closePath(); ctx.fillStyle=g; ctx.fill(); ctx.shadowColor="transparent";
      // five mukhi valleys: curved longitudinal channels radiating from crown
      for (let m=0;m<5;m++) {
        const a = m*Math.PI*2/5 - Math.PI/2;
        ctx.save(); ctx.rotate(a);
        ctx.beginPath(); ctx.moveTo(-rx*.13,-ry*.91);
        ctx.bezierCurveTo(-rx*.42,-ry*.47,-rx*.36,ry*.45,-rx*.08,ry*.89);
        ctx.bezierCurveTo(rx*.02,ry*.98,rx*.24,ry*.93,rx*.20,ry*.80);
        ctx.bezierCurveTo(rx*.04,ry*.35,rx*.08,-ry*.35,rx*.22,-ry*.84);
        ctx.strokeStyle="rgba(27,10,4,.78)"; ctx.lineWidth=Math.max(1.2,rx*.095); ctx.lineCap="round"; ctx.stroke();
        ctx.beginPath(); ctx.moveTo(-rx*.08,-ry*.82);
        ctx.bezierCurveTo(-rx*.28,-ry*.3,-rx*.22,ry*.3,-rx*.02,ry*.76);
        ctx.strokeStyle="rgba(205,133,73,.36)"; ctx.lineWidth=Math.max(.7,rx*.025); ctx.stroke();
        ctx.restore();
      }
      // rough raised nodules and fine cracks
      for(let n=0;n<Math.round(rx*.95);n++){
        const a=seed()*Math.PI*2, rr=.22+seed()*.58;
        const px=Math.cos(a)*rx*rr, py=Math.sin(a)*ry*rr;
        ctx.beginPath(); ctx.ellipse(px,py,rx*(.025+seed()*.035),ry*(.018+seed()*.028),a,0,Math.PI*2);
        ctx.fillStyle=seed()>.5?"rgba(22,9,3,.35)":"rgba(226,157,91,.22)"; ctx.fill();
      }
      // central natural threading bore, visible from hanging view
      ctx.beginPath(); ctx.ellipse(0,-ry*.02,rx*.105,ry*.075,0,0,Math.PI*2);
      ctx.fillStyle="rgba(17,8,4,.88)"; ctx.fill();
      ctx.beginPath(); ctx.ellipse(-rx*.025,-ry*.045,rx*.045,ry*.027,0,0,Math.PI*2);
      ctx.fillStyle="rgba(220,153,91,.22)"; ctx.fill();
      // restrained glossy edge highlight
      ctx.beginPath(); ctx.ellipse(-rx*.25,-ry*.38,rx*.25,ry*.10,-.7,0,Math.PI*2);
      ctx.fillStyle="rgba(255,216,164,.13)"; ctx.fill();
      ctx.restore();
    }
    drawOther(ctx,x,y,rx,ry,detail,idx) {
      const p=this.palette(); ctx.save(); ctx.translate(x,y); ctx.rotate(detail.rot);
      let g=ctx.createRadialGradient(-rx*.3,-ry*.4,1,0,0,rx*1.1);
      g.addColorStop(0,p[2]);g.addColorStop(.55,p[1]);g.addColorStop(1,p[3]);
      ctx.beginPath();ctx.ellipse(0,0,rx*detail.rx,ry*detail.ry,0,0,Math.PI*2);
      ctx.fillStyle=g;ctx.shadowColor="rgba(0,0,0,.45)";ctx.shadowBlur=rx*.2;ctx.fill();
      if(this.material==="sphatik"){
        ctx.strokeStyle="rgba(255,255,255,.72)";ctx.lineWidth=Math.max(1,rx*.045);ctx.stroke();
        ctx.beginPath();ctx.ellipse(-rx*.25,-ry*.25,rx*.25,ry*.13,-.5,0,Math.PI*2);
        ctx.fillStyle="rgba(255,255,255,.52)";ctx.fill();
      } else {
        for(let j=0;j<Math.round(rx*.7);j++){
          const a=seeded(idx*37+j)()*Math.PI*2;
          ctx.beginPath();ctx.arc(Math.cos(a)*rx*.55,Math.sin(a)*ry*.55,Math.max(.6,rx*.025),0,Math.PI*2);
          ctx.fillStyle="rgba(45,22,8,.22)";ctx.fill();
        }
      }
      ctx.restore();
    }
    render() {
      if(!this.ctx || !this.width || !this.height) return;
      const c=this.ctx,w=this.width,h=this.height;
      c.clearRect(0,0,w,h);
      const count=this.beads.length || 108;
      const cx=w*.5, top=Math.max(30,h*.045), bottom=h*.91;
      const usable=Math.max(40,bottom-top);
      const beadH=Math.min(usable/(count+1)*.78, w*.22, 28);
      const beadW=beadH*.82;
      // single hanging strand and fine thread behind the beads
      c.save(); c.strokeStyle="rgba(190,143,83,.75)";c.lineWidth=Math.max(1,w*.004);
      c.beginPath();c.moveTo(cx,top-beadH*.7);c.quadraticCurveTo(cx+w*.025,h*.48,cx,bottom+beadH*.4);c.stroke();c.restore();
      for(let i=0;i<count;i++){
        const d=this.beads[i], t=(i+.5)/count;
        const sway=Math.sin(this.phase+d.phase*.18)*w*.004;
        const x=cx+sway+Math.sin(t*Math.PI*2)*w*.006;
        const y=top+t*usable;
        const active=i<this.currentCount;
        c.save(); if(active){c.shadowColor="rgba(255,190,95,.8)";c.shadowBlur=beadH*.6;}
        if(this.material==="rudraksha") this.drawRudraksha(c,x,y,beadW*.5,beadH*.48,d,i);
        else this.drawOther(c,x,y,beadW*.5,beadH*.48,d,i);
        c.restore();
      }
      // guru bead and compact tassel
      const gy=top-beadH*1.45;
      this.drawRudraksha(c,cx,gy,beadW*.72,beadH*.66,{rx:1,ry:1,rot:0},999);
      c.strokeStyle="rgba(192,145,87,.85)";c.lineWidth=Math.max(1,w*.003);
      for(let j=-3;j<=3;j++){c.beginPath();c.moveTo(cx+j*2,gy+beadH*.55);c.quadraticCurveTo(cx+j*4,gy+beadH*1.2,cx+j*3,gy+beadH*1.9);c.stroke();}
    }
    start() {
      if(this.raf) cancelAnimationFrame(this.raf);
      const tick=(ts)=>{ if(ts-this.lastFrame>40){this.phase+=.018;this.lastFrame=ts;this.render();} this.raf=requestAnimationFrame(tick); };
      this.raf=requestAnimationFrame(tick);
    }
    destroy() { if(this.raf) cancelAnimationFrame(this.raf); if(this.resizeObserver) this.resizeObserver.disconnect(); }
  };
})();
