// ! Quantity buttons
const plus = document.querySelector(".plus"); // select plus button
const minus = document.querySelector(".minus"); // select minus button
const num = document.querySelector(".num"); // select number
let a = 1; // เป็นการประกาศตัวแปรแบบสามารถแก้ไขข้อมูลของตัวแปรได้

plus.addEventListener("click", () => {
   a++;
   a = a++;
   // console.log(a);
   num.innerText = a;
})
minus.addEventListener("click", () => {
   if (a > 1) {
      a--;
      a = a--;
   }
   // console.log(a);
   num.innerText = a;
})

// ! Cart side nav
   /* Set the width of the side navigation to 250px */
function openNav() {
   document.getElementById("mySidenav").style.width = "380px";
   document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
   document.getElementById("pagecontent").style.pointerEvents = "none";
}

   /* Set the width of the side navigation to 0 */
function closeNav() {
   document.getElementById("mySidenav").style.width = "0";
   document.body.style.backgroundColor = "white";
   document.getElementById("pagecontent").style.pointerEvents = "auto";
}

const redeem = document.querySelector("#redeem");
const productName = document.querySelector("#productName").innerHTML;
const productPoint = document.querySelector("#productPoint").innerHTML;
const radioButtons = document.querySelectorAll('input[name="size"]');

redeem.addEventListener("click", function () {

   let selectedSize;
   for (const radioButton of radioButtons) {
      if (radioButton.checked) {
         selectedSize = radioButton.value;
         break;
      }
   }
   let html = "";
   html += `
   <div class="row" style="margin: 0 auto;">
   <hr>
      <div class="col-6 d-flex justify-content-center align-items-center">
         <div class="img-cart">
            <img src="https://cdn.shopify.com/s/files/1/0786/3209/products/Camp_800x.png?v=1680027389" alt="">
         </div>
      </div>
      <div class="col-6">
         <div class="d-block">
            <p style="font-size: smaller;font-weight: bold;">${productName}</p>
            <p style="font-size: smaller;font-weight: bold;">SIZE : ${selectedSize}</p>
            <p style="font-size: smaller;font-weight: bold;">${productPoint}</p>
         </div>
         <div class="row">
            <div class="col-6" style="width: 90px;">
               <h5>AMOUNT</h5>
            </div>
            <div class="col-6 text-end" style="width: 90px;">
               <h5>${a}</h5>
            </div>
         </div>
      </div>
      <hr class="my-2">
   </div>
   <div class="row">
      <div class="fixed-bottomside">
         <hr>
         <div class="row my-3 px-5">
            <div class="col-6 text-start" style="width: 150px;">
               <h5 style="font-weight: bold;">SUB TOTAL</h5>
            </div>
            <div class="col-6 text-end" style="width: 150px;">
               <h5 style="font-weight: bold;">${a*parseInt(productPoint)} P.</h5>
            </div>
         </div>
         <div class="col-12 d-flex justify-content-center" style="width: 380px;">
            <a type="button" class="btn btn-danger btn-lg btn-checkout">CHECKOUT NOW</a>
         </div>
      </div>
   </div>`;
   document.getElementById("cartOrder").innerHTML = html;
});