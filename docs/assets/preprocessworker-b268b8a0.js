(function(){"use strict";const f="discrete";let a,e;const d=(t,s,r,o,n,c)=>(e.clearRect(0,0,n,c),e.setTransform(1,0,0,1,n/2,c/2),e.rotate(o*Math.PI/180),e.filter=r,e.drawImage(t,-t.width/2,-t.height/2),e.setTransform(1,0,0,1,0,0),e.filter=s,e.drawImage(a,0,0,a.width,a.height,0,0,n,c),e.getImageData(0,0,n,c));self.addEventListener("message",t=>{if(t.data.offscreen){a=t.data.offscreen,e=a.getContext("2d");return}const{inputImageBitmap:s,posterize:r,rgba:o,cssFilters:n,rotate:c,width:l,height:i,dpr:u}=t.data;e.scale(u,u),a.width=l,a.height=i;const g=d(s,p(r,o),n,c,l,i);t.ports[0].postMessage({result:g})});const p=(t,s)=>{const r=[];return t&&r.push({name:"componentTransfer",filter:"componentTransfer",funcR:{type:f,tableValues:s.r},funcG:{type:f,tableValues:s.g},funcB:{type:f,tableValues:s.b},funcA:{type:f,tableValues:s.a}}),new CanvasFilter(r)}})();
