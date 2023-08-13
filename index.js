
  document.addEventListener("DOMContentLoaded", function () {
    const swallowEl = document.getElementById("swallow")
    const riceEl = document.getElementById("rice");
    const riceMenuEl = document.getElementById("ricemenu")
    const swallowMenuEl = document.getElementById("swallowmenu")
    const othersEl = document.getElementById("others")
    const othermenuEl = document.getElementById("othermenu")
    
    riceEl.addEventListener('click', () => {
      riceMenuEl.style.display = 'block';
      swallowMenuEl.style.display = 'none';
      othermenuEl.style.display = 'none';
      
    });

    swallowEl.addEventListener('click', () => {
      swallowMenuEl.style.display = 'block';
      riceMenuEl.style.display = 'none';
      othermenuEl.style.display = 'none';
    })

    othersEl.addEventListener('click', ()=>{
      othermenuEl.style.display = 'block';
      swallowMenuEl.style.display = 'none';
      riceMenuEl.style.display = 'none';
    })
  });
    
  
  