/* Lightweight decorative 3D wireframes. Stylised anatomy, not a diagnostic model. */
function Joint3D({kind}) {
  const ref=React.useRef(null);
  React.useEffect(()=>{
    const canvas=ref.current, ctx=canvas.getContext('2d'); if(!ctx)return;
    const lines=[];
    // Sweep elliptical sections through space; each ring has actual depth.
    function bone(points,color='bone') {
      const rings=points.map(([x,y,z,rx,rz])=>Array.from({length:24},(_,i)=>{const a=i*Math.PI/12;return [x+rx*Math.cos(a),y,z+rz*Math.sin(a)];}));
      for(const ring of rings)lines.push({p:[...ring,ring[0]],color});
      for(let j=0;j<24;j+=3)lines.push({p:rings.map(r=>r[j]),color});
    }
    function ball(x,y,z,rx,ry,rz,color='bone') {bone(Array.from({length:11},(_,i)=>{const a=-Math.PI/2+.04+i*(Math.PI-.08)/10;return [x,y+ry*Math.sin(a),z,rx*Math.cos(a),rz*Math.cos(a)];}),color);}
    if(kind==='hip') {
      // Iliac wing, acetabular cup, femoral head, neck and proximal shaft.
      bone([[-.38,-1.5,0,.30,.13],[-.36,-1.35,0,.65,.19],[-.28,-1.1,0,.75,.23],[-.20,-.8,0,.61,.27],[-.09,-.5,0,.39,.31],[0,-.28,0,.32,.32],[.06,-.05,0,.28,.28]],'bone');
      ball(.17,-.06,.04,.40,.39,.37,'joint');
      bone([[.30,.18,.03,.19,.17],[.52,.35,.01,.21,.19],[.76,.52,0,.28,.24],[.80,.74,0,.25,.24],[.74,1,0,.18,.19],[.66,1.35,0,.16,.17],[.6,1.8,0,.17,.17]]);
      ball(.91,.35,-.02,.19,.29,.23);
      bone([[-.07,-.04,-.1,.18,.20],[-.3,.3,-.18,.18,.16],[-.6,.55,-.17,.18,.12],[-.78,.38,-.12,.15,.10],[-.65,.12,-.05,.15,.12]]);
    } else if(kind==='knee') {
      bone([[0,-1.9,0,.26,.26],[.02,-1.5,0,.24,.25],[.05,-1.1,0,.28,.28],[.04,-.7,0,.37,.32],[0,-.40,0,.50,.40]]);
      ball(-.27,-.25,0,.30,.34,.42);ball(.27,-.25,0,.30,.34,.42);
      bone([[0,.19,0,.52,.40],[0,.31,0,.48,.37],[.01,.62,0,.32,.28],[.01,1.0,0,.23,.23],[.04,1.8,0,.19,.18]]);
      bone([[.63,.38,.05,.10,.12],[.67,.7,.04,.08,.08],[.61,1.8,.02,.07,.07]]);
      ball(0,-.12,.47,.27,.36,.11,'joint');
      bone([[0,.08,0,.5,.38],[0,.13,0,.5,.38]],'joint');
    } else {
      // Talus/calcaneus and five metatarsal rays, with a taller ankle crop.
      const ankle=kind==='ankle';
      if(ankle){bone([[-.08,-1.8,-.18,.24,.22],[-.08,-1.3,-.18,.23,.23],[-.08,-.7,-.18,.27,.26],[-.08,-.35,-.18,.34,.29]]);bone([[.45,-1.8,-.18,.07,.07],[.46,-1,-.18,.07,.08],[.47,-.3,-.18,.12,.14],[.43,-.12,-.18,.11,.13]]);}
      ball(0,-.04,-.17,.36,.24,.35,'joint');ball(0,.42,-.40,.34,.37,.5);
      ball(0,.21,.2,.35,.24,.30);ball(-.19,.35,.48,.25,.18,.27);ball(.25,.36,.43,.20,.19,.25);
      for(let i=0;i<5;i++){
        const x=-.46+i*.22, end=.98-Math.abs(i-1)*.09;
        bone([[x*.72,.33,.45,.085,.12],[x,.39,.68,.072,.1],[x*1.13,.43,end,.075,.1]]);
        for(let j=0;j<(i===0?2:3);j++)ball(x*1.15,.47,end+.18+j*.19,i===0?.11:.075,.09,.11);
      }
      if(!ankle){for(const line of lines)line.p=line.p.map(([x,y,z])=>[x*1.5,(z-.45)*1.6,-y*1.5]);}
    }
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible=false,frame=0,last=0,angle=.5,w=0,h=0;
    function draw(){
      ctx.clearRect(0,0,w,h);const scale=Math.min(w/3.1,h/4.2),c=Math.cos(angle),s=Math.sin(angle);
      for(const line of lines){ctx.beginPath();let depth=0;line.p.forEach(([x,y,z],i)=>{const xx=x*c+z*s,zz=-x*s+z*c;depth+=zz;const py=y*.98-zz*.15, f=5/(5-zz*.3);const a=w/2+xx*scale*f,b=h/2+py*scale*f;i?ctx.lineTo(a,b):ctx.moveTo(a,b);});
        const alpha=.16+Math.max(0,Math.min(1,(depth/line.p.length+1)/2))*.30;
        ctx.strokeStyle=line.color==='joint'?`rgba(0,205,235,${alpha+.12})`:`rgba(164,194,211,${alpha})`;ctx.lineWidth=.8;ctx.stroke();}
    }
    function tick(t){frame=0;if(!visible||document.hidden||reduced.matches)return;if(t-last>40){angle=(angle+(last?Math.min(t-last,80):0)*Math.PI*2/48000)%(Math.PI*2);last=t;draw();}frame=requestAnimationFrame(tick);}
    function sync(){cancelAnimationFrame(frame);frame=0;last=0;if(visible&&!document.hidden&&!reduced.matches)frame=requestAnimationFrame(tick);else draw();}
    function resize(){const rect=canvas.getBoundingClientRect();w=rect.width;h=rect.height;const dpr=Math.min(window.devicePixelRatio||1,1.5);canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);draw();}
    const ro=new ResizeObserver(resize);ro.observe(canvas);
    const io=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();});io.observe(canvas);
    reduced.addEventListener('change',sync);document.addEventListener('visibilitychange',sync);resize();
    return ()=>{cancelAnimationFrame(frame);ro.disconnect();io.disconnect();reduced.removeEventListener('change',sync);document.removeEventListener('visibilitychange',sync);};
  },[kind]);
  return React.createElement('canvas',{ref,className:'joint-3d','aria-hidden':'true'});
}
