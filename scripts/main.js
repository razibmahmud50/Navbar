function isElementInViewport (el) {
  var rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&     
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
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
});



// Dropdown toogle on mobile

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(".dropdown a").forEach(el => {
    el.addEventListener('click', function () {
      this.nextElementSibling.classList.toggle('show');
      this.parentNode.classList.toggle('active');

console.log(el.querySelectorAll(".active"))
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







