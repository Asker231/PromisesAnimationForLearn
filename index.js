
const b = document.querySelector('body');
for(let i=0;i<350;i++)b.innerHTML+=` <div class="box">${i}</div>`;
const box = Array.from(document.querySelectorAll('.box'));
const Play = (x=[]) =>{
const RandomRoad = (elem) => {
   const rColor = Math.floor(Math.random()*16777216).toString(16);
  const random = Math.floor(Math.random()*800);       
   new Promise((resolve,reject)=>{
         elem.style.top = `${random}px`;
         elem.style.background = `#${rColor}`; 
         setTimeout(()=>{
           resolve()
         },200)
  }).then(()=>{
      if(r===1){
       elem.style.left = `${random}px`;     
       elem.style.background = `#${rColor}`;         
      }else{
       elem.style.background = `#${rColor}`; 
       elem.style.right = `${random}px`;          
      }
  }).then(()=>{
      elem.style.background = `#${rColor}`; 
      elem.style.bottom =`${random}px`
  })   
}
new Promise((resolve,reject)=>{
     setInterval(()=>{
       x.forEach((elem)=>{
         RandomRoad(elem);
       
         })
     },200)
      setInterval(()=>{
           resolve();
      },500)
   }).catch(()=>{        
     throw new Error('someone error')
   })
}
Play(box)