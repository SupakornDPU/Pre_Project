// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getFirestore , collection , getDocs , deleteDoc , doc} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";
import { getAuth, deleteUser ,createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyCODow7HLMRU3ik_9glYxoxjE2R6prKjq8",
   authDomain: "recycle-machine-23716.firebaseapp.com",
   projectId: "recycle-machine-23716",
   storageBucket: "recycle-machine-23716.appspot.com",
   messagingSenderId: "715253109818",
   appId: "1:715253109818:web:8dae7aa5ed3ada676e1103",
   measurementId: "G-DEQYWJ115S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dborder = getFirestore(app);
const auth = getAuth(app);

//ตาราง
const table = document.getElementById("table1");
const table2 = document.getElementById("table2");
const form = document.getElementById("registerForm");


//ดึงกลุ่ม Document
const data = await getUsers(dborder)
data.forEach(orders =>{
   showData(orders)
})

async function getUsers(dborder){
   const orderCol = collection(dborder,'order')
   const orderSnap = await getDocs(orderCol)
   return orderSnap
}

function showData(orders){
   const order = orders.data()
   const cartContainer = document.getElementById("cartContainer")

   // ดึงข้อมูลมาแสดงใน cartContainer
   cartContainer.innerHTML += `
      <div class="row justify-content-center align-items-center my-4">
         <div class="col-2 col-md-3 cart-img text-center">
            <img src="${order.Order_Product_Image}" alt="">
         </div>
         <div class="col-2 col-md-3" style="margin-left: 2em;">
            <p>${order.Order_Product_Name}</p>
            <p>Size: ${order.Order_Product_Size}</p>
         </div>
         <div class="col-2 col-md-3 text-center" style="width: 50px;">
            <p>${order.Order_Product_Amount}</p>
         </div>
         <div class="col-2 col-md-3 text-center">
            <p>฿${order.Order_Product_Total}</p>
         </div>
         <div class="col-2 col-md-2 text-center">
            <button class="btn btn-danger" data-id="${orders.id}" id="btnOrder"><i class="bi bi-x"></i></button>
         </div>
      </div>
         `;

   //ปุ่มลบ
   const btnOrders = document.querySelectorAll("#btnOrder");
   if (btnOrders) {
      btnOrders.forEach((btnOrder) => {
         btnOrder.addEventListener('click',(e)=>{
            let id = e.currentTarget.getAttribute('data-id');
         
            deleteDoc(doc(dborder,'order',id))
            .then(() => {
               alert("ลบข้อมูลเรียบร้อย")
               window.location.href = "order.html"
            }).catch((error) => {
            
            });
         });
      });
   }
}