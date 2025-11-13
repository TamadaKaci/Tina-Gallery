    const frames=document.querySelectorAll('.frame');
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')});
    },{threshold:0.2});
    frames.forEach(f=>observer.observe(f));

    const lb=document.getElementById('lightbox');
    const lbImg=lb.querySelector('img');
    document.querySelectorAll('.frame img').forEach(img=>{
      img.addEventListener('click',()=>{
        lbImg.src=img.src;
        lb.classList.add('show');
      });
    });
    lb.addEventListener('click',()=>lb.classList.remove('show'));