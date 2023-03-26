class NavBar extends HTMLElement {
   constructor () {
      super();
   }

   connectedCallback () {
      this.innerHTML = `<div class="w3-top">
      <div class="w3-bar w3-card" id="myNavbar">
         <div class="w3-large d-flex justify-content-between align-items-center text-center">
            <div class="w3-hide-small w3-hide-medium">
               <a href="index.html" class="w3-bar-item w3-button w3-wide block-logo">
                  <img src="img/LOGO.png" alt="" srcset="" class="logo-img">
               </a>
            </div>
            <div class="w3-hide-small w3-hide-medium">
               <a href="index.html" class="w3-bar-item w3-button"> HOME</a>
               <a href="shop.html" class="w3-bar-item w3-button"> SHOP</a>
               <a href="#work" class="w3-bar-item w3-button"><i class="fa fa-th"></i> SERVICE POINT</a>
               <a href="#contact" class="w3-bar-item w3-button"><i class="fa fa-envelope"></i> CONTACT</a>
            </div>
            <div class="w3-hide-small w3-hide-medium">
               <a href="login.html" class="w3-bar-item w3-button w3-wide"><i class="fa fa-user"></i>LOGIN</a>
               <a href="register.html" class="w3-bar-item w3-button w3-wide"><i class="fa fa-user"></i>REGISTER</a>
            </div>
         </div>

         <!-- Hide right-floated links on small screens and replace them with a menu icon -->
         <a href="javascript:void(0)" class="w3-bar-item w3-button w3-right w3-hide-large"
            onclick="w3_open()">
            <i class="fa fa-bars"></i>
         </a>
      </div>
   </div>`
   }
}
class Footer extends HTMLElement {
   constructor () {
      super();
   }

   connectedCallback () {
      this.innerHTML = `<!-- Footer. This section contains an ad for W3Schools Spaces. You can leave it to support us. -->
      <footer class="w3-center w3-black w3-padding-64" style="margin-top: 10rem;>
         <a href="index.html" class="w3-button w3-light-grey"><i class="fa fa-arrow-up w3-margin-right"></i>To the
            top</a>
         <div class="w3-xlarge w3-section">
            <i class="fa fa-facebook-official w3-hover-opacity"></i>
            <i class="fa fa-instagram w3-hover-opacity"></i>
            <i class="fa fa-snapchat w3-hover-opacity"></i>
            <i class="fa fa-pinterest-p w3-hover-opacity"></i>
            <i class="fa fa-twitter w3-hover-opacity"></i>
            <i class="fa fa-linkedin w3-hover-opacity"></i>
         </div>
         <p class="w3-small">This website was made with W3schools Spaces. Make your own free website today!</p>
         <a class="w3-button w3-round-xxlarge w3-small w3-light-grey w3-margin-bottom"
            href="https://www.w3schools.com/spaces" target="_blank">Start now</a>
      </footer>`
   }
}

customElements.define('navbar-component', NavBar);
customElements.define('footer-component', Footer);

// Modal Image Gallery
function onClick(element) {
   document.getElementById("img01").src = element.src;
   document.getElementById("modal01").style.display = "block";
   var captionText = document.getElementById("caption");
   captionText.innerHTML = element.alt;
}


// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
   if (mySidebar.style.display === 'block') {
      mySidebar.style.display = 'none';
   } else {
      mySidebar.style.display = 'block';
   }
}

// Close the sidebar with the close button
function w3_close() {
   mySidebar.style.display = "none";
}

let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
   const minPerSlide = 4
   let next = el.nextElementSibling
   for (var i=1; i<minPerSlide; i++) {
      if (!next) {
      // wrap carousel by using first child
      next = items[0]
      }
      let cloneChild = next.cloneNode(true)
      el.appendChild(cloneChild.children[0])
      next = next.nextElementSibling
   }
})

// // !ScrollTrigger
// gsap.registerPlugin(ScrollTrigger);

//    gsap.to(".img-block", {
//       duration: 1.5,
//       xPercent: 100,
//       scrollTrigger: {
//          trigger: ".img-block",
//          start: 700,
//       }
//    });