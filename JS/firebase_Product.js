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

//
const table_product = document.getElementById("table2");
const table_type = document.getElementById("tabletype");
const form = document.getElementById("addForm");
const formpop = document.getElementById("formpop");
const formpoptype = document.getElementById("formpoptype");
const buttontype = document.getElementById("submittype");
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

// Function โหลดรูป
const formFileFront = document.getElementById("formFileFront");
const formFileBack = document.getElementById("formFileBack");
const frontImgPreview = document.getElementById("frontImgPreview");
const backImgPreview = document.getElementById("backImgPreview");

formFileFront.addEventListener("change", (event) => {
   const file = event.target.files[0];
   const reader = new FileReader();

   reader.addEventListener("load", (event) => {
      document.getElementById("frontImgPreview").style.display = "block";
      frontImgPreview.src = event.target.result;
   });
   reader.readAsDataURL(file);
});

formFileBack.addEventListener("change", (event) => {
   const file = event.target.files[0];
   const reader = new FileReader();

   reader.addEventListener("load", (event) => {
      document.getElementById("backImgPreview").style.display = "block";
      backImgPreview.src = event.target.result;
   });
   reader.readAsDataURL(file);
});

// โหลดรูป frompop
const popformFileFront = document.getElementById("popformFileFront");
const popformFileBack = document.getElementById("popformFileBack");
const popfrontImgPreview = document.getElementById("popfrontImgPreview");
const popbackImgPreview = document.getElementById("popbackImgPreview");

popformFileFront.addEventListener("change", (event) => {
   const file = event.target.files[0];
   const reader = new FileReader();

   reader.addEventListener("load", (event) => {
      document.getElementById("popfrontImgPreview").style.display = "block";
      popfrontImgPreview.src = event.target.result;
   });
   reader.readAsDataURL(file);
});

popformFileBack.addEventListener("change", (event) => {
   const file = event.target.files[0];
   const reader = new FileReader();

   reader.addEventListener("load", (event) => {
      document.getElementById("popbackImgPreview").style.display = "block";
      popbackImgPreview.src = event.target.result;
   });
   reader.readAsDataURL(file);
});

// SHOWDATA PRODUCT //
function showData(products) {
   // Insert Row
   const row = table_product.insertRow(-1);
   const nameCol = row.insertCell(0);
   const pointCol = row.insertCell(1);
   const typeCol = row.insertCell(2);
   const frontImg = row.insertCell(3);
   const backImg = row.insertCell(4);
   const updateCol1 = row.insertCell(5);
   const deleteCol1 = row.insertCell(6);

   nameCol.innerHTML = products.data().Product_Name;
   pointCol.innerHTML = products.data().Product_Point;
   typeCol.innerHTML = products.data().Product_Type;

   frontImg.innerHTML = `<img src="${products.data().Product_BackImage
      }" alt="Order image"height="50" width="50" 
   style="cursor: pointer;" onclick="debugBase64('${products.data().Product_BackImage
      }')" >`;

   backImg.innerHTML = `<img src="${products.data().Product_FrontImage
      }" alt="Order image"height="50" width="50" 
   style="cursor: pointer;" onclick="debugBase64('${products.data().Product_FrontImage
      }')" >`;

   // BUTTON DELETE PRODUCT //
   let btn = document.createElement("button");
   btn.textContent = "ลบข้อมูล";
   btn.setAttribute("class", "btn btn-danger");
   btn.setAttribute("data-id", products.id);
   deleteCol1.appendChild(btn);
   btn.addEventListener("click", (e) => {
      let id = e.target.getAttribute("data-id");
      console.log(id);
      deleteDoc(doc(dbproduct, "product", id))
         .then(() => {
            alert("ลบข้อมูลเรียบร้อย");
            window.location.href = " Adminproduct.html ";
         })
         .catch((error) => { });
   });
   // BUTTON UPDATE //
   let btnupdate = document.createElement("button");
   btnupdate.textContent = "แก้ไข";
   btnupdate.setAttribute("class", "btn btn-warning");
   btnupdate.setAttribute("data-id", products.id);
   btnupdate.setAttribute("data-Product_Id", products.Product_Id);
   updateCol1.appendChild(btnupdate);
   // POPUP UPDATE //
   btnupdate.addEventListener("click", (e) => {
      popup.classList.add("active");
      let id = e.target.getAttribute("data-id");
      console.log(id);
      console.log(products.data().Product_Id);
      formpop.idproduct.value = id;
      //  formpop.proid.value = products.data().Product_Id
      formpop.proname.value = products.data().Product_Name;
      formpop.proprice.value = products.data().Product_Point;
      formpop.productTypeSelectsPopup.value = products.data().Product_Type;
      formpop.popfrontImgPreview.src = products.data().Product_FrontImage;
      formpop.popbackImgPreview.src = products.data().Product_BackImage;
      document.getElementById("popfrontImgPreview").style.display = "block";
      document.getElementById("popbackImgPreview").style.display = "block";
   });

   // UPDATE PRODUCT //
   
   popup.addEventListener("submit", (e) => {
      e.preventDefault();
      const docRef = doc(dbproduct, "product", formpop.idproduct.value);
      const proname = formpop.proname.value
      const proprice = formpop.proprice.value
      const protype = formpop.protype.value
      const imgfont = formpop.popfrontImgPreview.src
      const imgback = formpop.popbackImgPreview.src
      updateDoc(docRef, {
         
         // Product_Id:formpop.proid.value,
         Product_Name: proname,
         Product_Point: proprice,
         Product_Type: protype,
         Product_FrontImage : imgfont,
         Product_BackImage : imgback,
      }).then(() => {
         popup.classList.remove("active");
         window.location.href = " Adminproduct.html ";
      }).catch(()=>{
         alert("รูปมีขนาดใหญ่เกินไป");
         window.location.href = " Adminproduct.html ";
      })
   });
}

// Create an initial document to update.
//ADD PRODUCT TO FIREBASE//
form.addEventListener("submit", (e) => {
   e.preventDefault();
   addDoc(collection(dbproduct, "product"), {
      Product_Name: form.productname.value,
      Product_Point: form.productpoint.value,
      Product_Type: form.productTypeSelect.value,
      Product_FrontImage: form.frontImgPreview.src,
      Product_BackImage: form.backImgPreview.src,
   }).then(() => {
      alert("เพิ่มข้อมูลเรียบร้อย");
      window.location.href = " Adminproduct.html ";
   });
});

//ปิด POPUP UPDATE ออก
window.addEventListener("click", (e) => {
   if (e.target == popup) {
      popup.classList.remove("active");
   }
});


const productTypeSelect = document.getElementById("productTypeSelect");
const productTypes = await getProductTypes(dbproduct);
productTypes.forEach((productType) => {
   const option = document.createElement("option");
   option.text = productType.data().Type_Name;
   option.value = productType.data().Type_Name;
   productTypeSelect.add(option);
});


const productTypeSelectsPopup = document.getElementById("productTypeSelectsPopup");
const productTypePopup = await getProductTypes(dbproduct);
productTypePopup.forEach((productType) => {
   const option = document.createElement("option");
   option.text = productType.data().Type_Name;
   option.value = productType.data().Type_Name;
   productTypeSelectsPopup.add(option);
});


//ดึงกลุ่ม Document
const datatype = await getProductTypes(dbproduct);
datatype.forEach((productType) => {
   showDatatype(productType);
});

async function getProductTypes(dbproduct) {
   const productCol = collection(dbproduct, "productType");
   const productSnap = await getDocs(productCol);
   return productSnap;
}

// SHOWTYPEDATA //
function showDatatype(productType) {
   // Insert Row
   const row = table_type.insertRow(-1);
   const nametypeCol = row.insertCell(0);
   const deletetype = row.insertCell(1);

   nametypeCol.innerHTML = productType.data().Type_Name;
   // BUTTON DELETE TYPE //
   let btn = document.createElement("button");
   btn.textContent = "ลบข้อมูล";
   btn.setAttribute("class", "btn btn-danger");
   btn.setAttribute("data-id", productType.id);
   deletetype.appendChild(btn);
   // DELETE TPYE IN FIREBASE //
   btn.addEventListener("click", (e) => {
      let id = e.target.getAttribute("data-id");
      console.log(id);
      deleteDoc(doc(dbproduct, "productType", id))
         .then(() => {
            alert("ลบข้อมูลเรียบร้อย");
            window.location.href = " Adminproduct.html ";
         })
         .catch((error) => { });
   });
   
}

// ADD TYPE TO FIREBASE //
formpoptype.addEventListener("submit", (e) => {
   e.preventDefault();
   addDoc(collection(dbproduct, "productType"), {
      Type_Name: formpoptype.productType.value,
      
   }).then(() => {
      alert("เพิ่มข้อมูลเรียบร้อย");
      window.location.href = " Adminproduct.html ";
   });
});