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

customElements.define('footer-component', Footer);