// Navbar
class NavBar extends HTMLElement {
   constructor() {
      super();
   }

   connectedCallback() {
      this.innerHTML = `
      <div class="w3-top">
      <div class="w3-bar w3-card" id="myNavbar">
         <div class="w3-large d-flex justify-content-between align-items-center text-center">
            <div class="w3-hide-small w3-hide-medium">
               <a href="index.html" class="w3-bar-item w3-button w3-wide block-logo">
                  <img src="img/LOGO.png" alt="" srcset="" class="logo-img">
               </a>
            </div>
            <div class="w3-hide-small w3-hide-medium" style="padding-left: 200px;">
               <a href="index.html" class="w3-bar-item w3-button"><i class="bi bi-house-door-fill"></i> HOME</a>
               <a href="shop.html" class="w3-bar-item w3-button"><i class="bi bi-bag-fill"></i> SHOP</a>
               <a href="service_point.html" class="w3-bar-item w3-button"><i class="fa fa-th"></i> SERVICE POINT</a>
               <a href="#contact" class="w3-bar-item w3-button"><i class="fa fa-envelope"></i> CONTACT</a>
            </div>
            <div class="d-flex justify-content-end align-items-center">
               <div class="w3-hide-small w3-hide-medium" id="authLoginRegis">
                  <a href="login.html" class="w3-bar-item w3-button w3-wide"><i class="fa fa-user"></i>LOGIN</a>
                  <a href="register.html" class="w3-bar-item w3-button w3-wide"><i class="fa fa-user"></i>REGISTER</a>
               </div>
               <div class="w3-hide-small w3-hide-medium" id="profile" style="display:none">
                  <a href="#" class="w3-bar-item w3-button w3-wide"><i class="bi bi-cart-fill"></i>Cart</a>
                  <a href="#" class="w3-bar-item w3-button w3-wide"><i class="fa fa-user"></i>Profile</a>
                  <a href="#" class="w3-bar-item w3-button w3-wide" id="logout"><i class="fa fa-user"></i>LOGOUT</a>
               </div>
               <div class="w3-hide-small w3-hide-medium" id="admin-menu" style="display:none">
                  <a href="#" class="w3-bar-item w3-button w3-wide"><i class="bi bi-cart-fill"></i>Manage Admin</a>
               </div>
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

// Footer
class Footer extends HTMLElement {
   constructor() {
      super();
   }

   connectedCallback() {
      this.innerHTML = `
      <footer class="w3-center w3-black w3-padding-64" style="margin-top: 10rem;>
         <div class="w3-xlarge w3-section">
            <i class="fa fa-facebook-official w3-hover-opacity"></i>
            <i class="fa fa-instagram w3-hover-opacity"></i>
            <i class="fa fa-snapchat w3-hover-opacity"></i>
            <i class="fa fa-pinterest-p w3-hover-opacity"></i>
            <i class="fa fa-twitter w3-hover-opacity"></i>
            <i class="fa fa-linkedin w3-hover-opacity"></i>
         </div>
         <p class="w3-small">This website was made with W3schools Spaces. Make your own free website today!</p>
      </footer>`
   }
}

customElements.define('footer-component', Footer);

// NAVBAR ADMIN
class navbaradmin extends HTMLElement {
   constructor() {
      super();
   }

   connectedCallback() {
      this.innerHTML = `
      <nav class="navbar navbar-light bg-light p-3">
      <div class="d-flex col-12 col-md-3 col-lg-2 mb-2 mb-lg-0 flex-wrap flex-md-nowrap justify-content-between">
      <a class="navbar-brand" href="index.html"><i class="mx-1 bi bi-gear-wide-connected"></i>
         Management
      </a>
      <button class="navbar-toggler d-md-none collapsed mb-3" type="button" data-toggle="collapse"
         data-target="#sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
      </button>
      </div>
      <!-- Star vote -->
      <div class="col-12 col-md-5 col-lg-8 d-flex align-items-center justify-content-md-end mt-3 mt-md-0">
      <div class="mr-3 mt-1">
      </div>
      <div class="dropdown">
         <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
            aria-expanded="false">
            Admin
         </button>
         <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Messages</a></li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
         </ul>
      </div>
      </div>
   </nav>`
   }
}

customElements.define('navbaradmin-component', navbaradmin);

// SIDEBAR ADMIN
class sidebaradmin extends HTMLElement {
   constructor() {
      super();
   }

   connectedCallback() {
      this.innerHTML = `
   <div class="container-fluid">
      <div class="row">
         <nav id="sidebar" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div class="position-sticky">
               <ul class="nav flex-column">
                  <li class="nav-item">
                  <a class="nav-link " href="Adminproduct.html">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-shopping-cart">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                     </svg>
                     <span class="ml-2">Products</span>
                  </a>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link active " :before href="Admincustomer.html">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-users">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                     </svg>
                     <span class="ml-2">Customers</span>
                  </a>
                  </li>
               </ul>
            </div>
         </nav>
      </div>
   </div>`
   }
}

customElements.define('sidebaradmin-component', sidebaradmin);

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
   for (var i = 1; i < minPerSlide; i++) {
      if (!next) {
         // wrap carousel by using first child
         next = items[0]
      }
      let cloneChild = next.cloneNode(true)
      el.appendChild(cloneChild.children[0])
      next = next.nextElementSibling
   }
})

