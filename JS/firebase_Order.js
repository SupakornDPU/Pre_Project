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


async function getUsers(dborder){
   const orderCol = collection(dborder,'order')
   const orderSnap = await getDocs(orderCol)
   return orderSnap
}

function showData(orders){
   const row = table.insertRow(-1)
   const OrderEmail = row.insertCell(0)
   const OrderName = row.insertCell(1)
   const OrderLast = row.insertCell(2)
   const OrderAddress = row.insertCell(3)
   const OrderProvince = row.insertCell(4)
   const OrderPostalcode = row.insertCell(5)
   const OrderPhone = row.insertCell(6)
   // const OrderImg = row.insertCell(7)
   const botton = row.insertCell(7)
   const deleteCol = row.insertCell(8)


   OrderEmail.innerHTML = orders.data().Order_Email
   OrderName.innerHTML = orders.data().Order_Name
   OrderLast.innerHTML = orders.data().Order_Lastname
   OrderAddress.innerHTML = orders.data().Order_Address
   OrderProvince.innerHTML = orders.data().Order_Province
   OrderPostalcode.innerHTML = orders.data().Order_Postalcode
   OrderPhone.innerHTML = orders.data().Order_Phone
   // OrderImg.innerHTML = `<img src="${orders.data().Order_Img}" alt="Order image"height="50" width="50">`

   let btn2 = document.createElement('select')
   btn2.textContent="ลบข้อมูล"
   btn2.setAttribute('class','form-select')
   botton.appendChild(btn2)
   btn2.addEventListener('click',(e)=>{
      
   })
   //ปุ่มลบ
   let btn = document.createElement('button')
   btn.textContent="ลบข้อมูล"
   btn.setAttribute('class','btn btn-danger')
   btn.setAttribute('data-id',orders.id)
   deleteCol.appendChild(btn)
   btn.addEventListener('click',(e)=>{
      let id = e.target.getAttribute('data-id');
   
      deleteDoc(doc(dborder,'order',id))
      .then(() => {
         alert("ลบข้อมูลเรียบร้อย")
         window.location.href = " Adminorder.html "
      }).catch((error) => {
      
      });
      
   })
}

//ดึงกลุ่ม Document
const data = await getUsers(dborder)
data.forEach(orders =>{
   showData(orders)
})


