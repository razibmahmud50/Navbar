//destroy menu
let navDestroy = ()=>{
  document.querySelectorAll("nav-menu .active, .nav-menu .show").forEach((activeItem)=>{
    activeItem.classList.remove("active")
    activeItem.classList.remove("show")
  })
}

// Prevent showing animation on window resize
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});


// Menu toogle on mobile
const navToggle = document.querySelector('.nav-toggle');
const menuToggle = document.querySelector('.menu-toggle');

navToggle.addEventListener('click', function (e) {
  this.classList.toggle('open');
  menuToggle.classList.toggle('active');
  e.stopPropagation();
  navDestroy()
});

//get all sibling
function getAllSiblings(element, parent) {
  const children = [...parent.children];
  return children.filter(child => child !== element);
}



window.addEventListener("click", ()=>{
  navDestroy()
})

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(".dropdown").forEach(el => {
    el.addEventListener('click', function (e) {
      e.stopPropagation()
      this.lastElementChild.classList.toggle('show');
      this.classList.toggle('active');
      // remove child element active class
      let childrenOfUl =  [].slice.call(this.lastElementChild.children);
      childrenOfUl.forEach((childItem)=>{
        childItem.classList.remove("active")
      })
      el.lastElementChild.querySelectorAll("ul").forEach((item)=>{
        if(item.classList.contains("show")){
          item.classList.remove("show")
        }
      })
       console.log(this.lastElementChild.children)
      //remove all active class from sibling
      let allSibling = getAllSiblings(this, this.parentElement)
      allSibling.forEach((sibling)=>{
        if(sibling.classList.contains("active")){
          sibling.classList.remove("active")
          sibling.lastElementChild.classList.remove('show');
        }
      })

      let nextUlRightPosition = this.nextElementSibling.getBoundingClientRect().right
      let nextUlBottomtPosition = this.nextElementSibling.getBoundingClientRect().bottom
      let documentWidth = document.documentElement.clientWidth
      let documentHeight = document.documentElement.clientHeight

      if(nextUlRightPosition>documentWidth){
        this.nextElementSibling.style.cssText = "left: auto; right: 100%; z-index:1;";
      }
      // if(nextUlBottomtPosition>documentHeight){
      //   this.nextElementSibling.style.cssText = "top: auto; bottom: 0;";
      // }
    });
  });
});







