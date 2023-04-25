// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import {
   getFirestore,
   collection,
   getDocs,
   addDoc,
   deleteDoc,
   doc,
   setDoc,
   updateDoc,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";
import {
   ref,
   update,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
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
   measurementId: "G-DEQYWJ115S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dbproduct = getFirestore(app);

//ตาราง
const table_product = document.getElementById("table2");
const form = document.getElementById("addForm");
const formpop = document.getElementById("formpop");
let popup = document.querySelector(".popup");

//ดึงกลุ่ม Document
const data = await getProduct(dbproduct);
data.forEach((products) => {
   showData(products);
});

async function getProduct(dbproduct) {
   const productCol = collection(dbproduct, "product");
   const productSnap = await getDocs(productCol);
   return productSnap;
}

function showData(products) {
   const row = table_product.insertRow(-1);
   const nameCol = row.insertCell(0);
   const pointCol = row.insertCell(1);
   const typeCol = row.insertCell(2);
   const updateCol1 = row.insertCell(3);
   const deleteCol1 = row.insertCell(4);

   nameCol.innerHTML = products.data().Product_Name;
   pointCol.innerHTML = products.data().Product_Point;
   typeCol.innerHTML = products.data().Product_Type;

   //ปุ่มลบ
   let btn = document.createElement("button");
   btn.textContent = "ลบข้อมูล";
   btn.setAttribute("class", "btn btn-danger");
   btn.setAttribute("data-id", products.id);
   deleteCol1.appendChild(btn);
   btn.addEventListener("click", (e) => {
      let id = e.target.getAttribute("data-id");
      alert("ลบข้อมูลเรียบร้อย");
      console.log(id);
      deleteDoc(doc(dbproduct, "product", id));
   });

   let btnupdate = document.createElement("button");
   btnupdate.textContent = "แก้ไข";
   btnupdate.setAttribute("class", "btn btn-warning");
   btnupdate.setAttribute("data-id", products.id);
   btnupdate.setAttribute("data-Product_Id", products.Product_Id);
   updateCol1.appendChild(btnupdate);
   btnupdate.addEventListener("click", (e) => {
      popup.classList.add("active");
      let id = e.target.getAttribute("data-id");
      console.log(id);
      console.log(products.data().Product_Id);
      formpop.idproduct.value = id;
      //  formpop.proid.value = products.data().Product_Id
      formpop.proname.value = products.data().Product_Name;
      formpop.proprice.value = products.data().Product_Point;
      formpop.protype.value = products.data().Product_Type;
   });

   //update
   popup.addEventListener("submit", (e) => {
      e.preventDefault();
      const docRef = doc(dbproduct, "product", formpop.idproduct.value);
      updateDoc(docRef, {
         // Product_Id:formpop.proid.value,
         Product_Name: formpop.proname.value,
         Product_Point: formpop.proprice.value,
         Product_Type: formpop.protype.value,
      }).then(() => {
         popup.classList.remove("active");
         window.location.href = " Adminproduct.html ";
      });
   });
}

// Create an initial document to update.
//ดึงข้อมูล
form.addEventListener("submit", (e) => {
   e.preventDefault();
   addDoc(collection(dbproduct, "product"), {
      Product_Name: form.productname.value,
      Product_Point: form.productpoint.value,
      Product_Type: form.producttype.value,
   }).then(() => {
      alert("เพิ่มข้อมูลเรียบร้อย");
      window.location.href = " Adminproduct.html ";
   });
});

//ปิดpopupออก
window.addEventListener("click", (e) => {
   if (e.target == popup) {
      popup.classList.remove("active");
   }
});
