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
                  <img src="../img/LOGO.png" alt="" srcset="" class="logo-img">
               </a>
            </div>
            <div class="w3-hide-small w3-hide-medium">
               <a href="../index.html" class="w3-bar-item w3-button"> HOME</a>
               <a href="../shop.html" class="w3-bar-item w3-button"> SHOP</a>
               <a href="#work" class="w3-bar-item w3-button"><i class="fa fa-th"></i> SERVICE POINT</a>
               <a href="#contact" class="w3-bar-item w3-button"><i class="fa fa-envelope"></i> CONTACT</a>
            </div>
            <div class="w3-hide-small w3-hide-medium">
               <a href="../login.html" class="w3-bar-item w3-button w3-wide"><i class="fa fa-user"></i>LOGIN</a>
               <a href="../register.html" class="w3-bar-item w3-button w3-wide"><i class="fa fa-user"></i>REGISTER</a>
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

customElements.define('navbar-component', NavBar);