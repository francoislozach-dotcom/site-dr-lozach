/* Anatomical background shared with the dedicated nerve atlas. */
function AnatomyBackground({kind}) {
 React.useEffect(()=>{
  if(!document.getElementById('anatomy-renderer')){
   const script=document.createElement('script');script.id='anatomy-renderer';script.src='/js/nerfs-3d.js?v=5';script.defer=true;document.body.appendChild(script);
  }
  document.dispatchEvent(new Event('anatomy:mount'));
 },[]);
 return React.createElement('div',{className:'anatomy-background','data-model':kind,'data-decorative':'true','aria-hidden':'true'},
  React.createElement('div',{className:'canvas-wrap'},React.createElement('canvas'),React.createElement('div',{className:'canvas-fallback'},React.createElement('img',{src:'/assets/anatomy/'+kind+'.png',alt:'',loading:'lazy',width:390,height:415}))));
}
