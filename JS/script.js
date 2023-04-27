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
const productImg = document.querySelector("#bannerImage").src;
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

   localStorage.setItem("productImg", productImg);
   localStorage.setItem("selectSize", selectedSize);
   localStorage.setItem("productName", productName);
   localStorage.setItem("productPoint", productPoint);
   localStorage.setItem("amount", a);

   let html = "";
   html += `
   
   <hr class="mt-2">
      <div class="col-6 d-flex justify-content-center align-items-center">
         <div class="img-cart">
            <img src="${productImg}" alt="">
         </div>
      </div>
      <div class="col-6">
         <div class="d-block">
            <p style="font-size: smaller;font-weight: bold;">${productName}</p>
            <p style="font-size: smaller;font-weight: bold;">SIZE : ${selectedSize}</p>
            <p style="font-size: smaller;font-weight: bold;">${productPoint}</p>
         </div>
         <div class="row">
            <div class="col-6">
               <h5>AMOUNT</h5>
            </div>
            <div class="col-6 text-end">
               <h5>${a}</h5>
            </div>
         </div>
         <div class="row">
            <div class="col-6">
               <h5>TOTAL</h5>
            </div>
            <div class="col-6 text-end">
               <p style="font-weight: bold;">${a*parseInt(productPoint)} P.</p>
            </div>
         </div>
      </div>
   </div>`;

   var newNode = document.createElement('div');
   newNode.className = 'row';
   newNode.innerHTML = html;
   document.getElementById("cartOrder").appendChild(newNode);
   document.getElementById("totalPoint").innerHTML = a*parseInt(productPoint)+" P.";
});