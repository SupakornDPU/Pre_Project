
// Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, setDoc, updateDoc, where, query } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";

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
const auth = getAuth(app);
const dbproduct = getFirestore(app);

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
   const product = products.data();
   // console.log(product.Product_Type);
   const productContainer = document.getElementById("product-container");
   const shirtContainer = document.getElementById("shirt-container");
   const couponContainer = document.getElementById("coupon-container");
   const foodDrinkContainer = document.getElementById("food-drink-container");

   if (product.Product_Type === "Shirt") {
      shirtContainer.innerHTML += `
            <div class="col-6 col-md-3">
               <div class="p-img">
                  <a href="product_1.html">
                     <img
                        src="${product.Product_FrontImage}"
                        onmouseout="this.src='${product.Product_FrontImage}'"
                        onmouseover="this.src='${product.Product_BackImage}'">
                  </a>
               </div>
               <div class="grid-product__meta">
                  <a href="product_1.html" class="">${product.Product_Name}</a>
                  <p>฿ ${product.Product_Point}</p>
               </div>
            </div>
            `;
   }

   if (product.Product_Type === "Coupon") {
      couponContainer.innerHTML += `
            <div class="col-6 col-md-3">
               <div class="p-img">
                  <a href="product_1.html">
                     <img
                        src="${product.Product_FrontImage}"
                        onmouseout="this.src='${product.Product_FrontImage}'"
                        onmouseover="this.src='${product.Product_BackImage}'">
                  </a>
               </div>
               <div class="grid-product__meta">
                  <a href="product_1.html" class="">${product.Product_Name}</a>
                  <p>฿ ${product.Product_Point}</p>
               </div>
            </div>
            `;
   }

   if (product.Product_Type === "Food&Drink") {
      foodDrinkContainer.innerHTML += `
            <div class="col-6 col-md-3">
               <div class="p-img">
                  <a href="product_1.html">
                     <img
                        src="${product.Product_FrontImage}"
                        onmouseout="this.src='${product.Product_FrontImage}'"
                        onmouseover="this.src='${product.Product_BackImage}'">
                  </a>
               </div>
               <div class="grid-product__meta">
                  <a href="product_1.html" class="">${product.Product_Name}</a>
                  <p>฿ ${product.Product_Point}</p>
               </div>
            </div>
            `;
   }
}

var checkboxShirt = document.getElementById("checkboxShirt");
var checkboxCoupon = document.getElementById("checkboxCoupon");
var checkboxFoodDrink = document.getElementById("checkboxFoodDrink");
const shirtContainer = document.getElementById("shirt-container");
const couponContainer = document.getElementById("coupon-container");
const foodDrinkContainer = document.getElementById("food-drink-container");

function clearProductContainers() {
   shirtContainer.innerHTML = "";
   couponContainer.innerHTML = "";
   foodDrinkContainer.innerHTML = "";
}

// async function checkBoxType() {

//    // ตรวจสอบว่ามีการเลือก Checkbox Shirt หรือไม่
//    if (checkboxShirt.checked == true && checkboxCoupon.checked == true && checkboxFoodDrink.checked == true) {
//       // ดึงสินค้าทั้งหมดออกมาแสดง
//       const data = await getProduct(dbproduct);

//       // เคลียร์ข้อมูลเดิมใน product-container
//       clearProductContainers();

//       data.forEach((products) => {
//          showData(products);
//       });
//    } else if (checkboxShirt.checked == true && checkboxCoupon.checked == true && checkboxFoodDrink.checked == false) {

//       const productCol = collection(dbproduct, "product");
//       const querySnapshot = await getDocs(query(productCol, where("Product_Type", "in", ["Shirt", "Coupon"]))
//       );

//       // เคลียร์ข้อมูลเดิมใน product-container
//       clearProductContainers();

//       querySnapshot.forEach((doc) => {
//          const product = doc.data();
//          if (product.Product_Type === "Shirt") {
//             showData(doc, shirtContainer);
//          } else if (product.Product_Type === "Coupon") {
//             showData(doc, couponContainer);
//          }
//       });
//    } else if (checkboxShirt.checked == true && checkboxCoupon.checked == false && checkboxFoodDrink.checked == true) {

//       const productCol = collection(dbproduct, "product");
//       const querySnapshot = await getDocs(query(productCol, where("Product_Type", "in", ["Shirt", "Food&Drink"]))
//       );

//       // เคลียร์ข้อมูลเดิมใน product-container
//       clearProductContainers();

//       querySnapshot.forEach((doc) => {
//          const product = doc.data();
//          if (product.Product_Type === "Shirt") {
//             showData(doc, shirtContainer);
//          } else if (product.Product_Type === "Food&Drink") {
//             showData(doc, foodDrinkContainer);
//          }
//       });
//    } else if (checkboxShirt.checked == false && checkboxCoupon.checked == true && checkboxFoodDrink.checked == true) {

//       const productCol = collection(dbproduct, "product");
//       const querySnapshot = await getDocs(query(productCol, where("Product_Type", "in", ["Coupon", "Food&Drink"]))
//       );

//       // เคลียร์ข้อมูลเดิมใน product-container
//       clearProductContainers();

//       querySnapshot.forEach((doc) => {
//          const product = doc.data();
//          if (product.Product_Type === "Coupon") {
//             showData(doc, couponContainer);
//          } else if (product.Product_Type === "Food&Drink") {
//             showData(doc, foodDrinkContainer);
//          }
//       });
//    } else if (checkboxShirt.checked == true) {
//       // ดึงกลุ่ม Document และกรองเฉพาะสินค้าประเภท Shirt
//       const productCol = collection(dbproduct, "product");
//       const querySnapshot = await getDocs(query(productCol, where("Product_Type", "==", "Shirt"))
//       );

//       // เคลียร์ข้อมูลเดิมใน product-container
//       clearProductContainers();

//       // แสดงผลลัพธ์ใหม่
//       querySnapshot.forEach((doc) => {
//          showData(doc);
//       });
//    } else if (checkboxCoupon.checked == true) {
//       // ดึงกลุ่ม Document และกรองเฉพาะสินค้าประเภท Coupon
//       const productCol = collection(dbproduct, "product");
//       const querySnapshot = await getDocs(query(productCol, where("Product_Type", "==", "Coupon"))
//       );

//       // เคลียร์ข้อมูลเดิมใน product-container
//       clearProductContainers();

//       // แสดงผลลัพธ์ใหม่
//       querySnapshot.forEach((doc) => {
//          showData(doc);
//       });
//    } else if (checkboxFoodDrink.checked == true) {
//       // ดึงกลุ่ม Document และกรองเฉพาะสินค้าประเภท Food&Drink
//       const productCol = collection(dbproduct, "product");
//       const querySnapshot = await getDocs(query(productCol, where("Product_Type", "==", "Food&Drink"))
//       );

//       // เคลียร์ข้อมูลเดิมใน product-container
//       clearProductContainers();

//       // แสดงผลลัพธ์ใหม่
//       querySnapshot.forEach((doc) => {
//          showData(doc);
//       });
//    } else {
//       // ถ้าไม่เลือก Checkbox Shirt ให้แสดงสินค้าทั้งหมด
//       const data = await getProduct(dbproduct);

//       // เคลียร์ข้อมูลเดิมใน product-container
//       clearProductContainers();

//       data.forEach((products) => {
//          showData(products);
//       });
//    }
// }


// ตรวจสอบการเปลี่ยนแปลงของ Checkbox Shirt
checkboxShirt.addEventListener("change", async () => {

   // ตรวจสอบว่ามีการเลือก Checkbox Shirt หรือไม่
   if (checkboxShirt.checked == true && checkboxCoupon.checked == true && checkboxFoodDrink.checked == true) {
      // ดึงสินค้าทั้งหมดออกมาแสดง
      const data = await getProduct(dbproduct);

      // เคลียร์ข้อมูลเดิมใน product-container
      clearProductContainers();

      data.forEach((products) => {
         showData(products);
      });
   } else if (checkboxShirt.checked == true && checkboxCoupon.checked == true && checkboxFoodDrink.checked == false) {

      const productCol = collection(dbproduct, "product");
      const querySnapshot = await getDocs(query(productCol, where("Product_Type", "in", ["Shirt", "Coupon"]))
      );

      // เคลียร์ข้อมูลเดิมใน product-container
      clearProductContainers();

      querySnapshot.forEach((doc) => {
         const product = doc.data();
         if (product.Product_Type === "Shirt") {
            showData(doc, shirtContainer);
         } else if (product.Product_Type === "Coupon") {
            showData(doc, couponContainer);
         }
      });
   } else if (checkboxShirt.checked == true && checkboxCoupon.checked == false && checkboxFoodDrink.checked == true) {

      const productCol = collection(dbproduct, "product");
      const querySnapshot = await getDocs(query(productCol, where("Product_Type", "in", ["Shirt", "Food&Drink"]))
      );

      // เคลียร์ข้อมูลเดิมใน product-container
      clearProductContainers();

      querySnapshot.forEach((doc) => {
         const product = doc.data();
         if (product.Product_Type === "Shirt") {
            showData(doc, shirtContainer);
         } else if (product.Product_Type === "Food&Drink") {
            showData(doc, foodDrinkContainer);
         }
      });
   } else if (checkboxShirt.checked == false && checkboxCoupon.checked == true && checkboxFoodDrink.checked == true) {

      const productCol = collection(dbproduct, "product");
      const querySnapshot = await getDocs(query(productCol, where("Product_Type", "in", ["Coupon", "Food&Drink"]))
      );

      // เคลียร์ข้อมูลเดิมใน product-container
      clearProductContainers();

      querySnapshot.forEach((doc) => {
         const product = doc.data();
         if (product.Product_Type === "Coupon") {
            showData(doc, couponContainer);
         } else if (product.Product_Type === "Food&Drink") {
            showData(doc, foodDrinkContainer);
         }
      });
   } else if (checkboxShirt.checked == true) {
      // ดึงกลุ่ม Document และกรองเฉพาะสินค้าประเภท Shirt
      const productCol = collection(dbproduct, "product");
      const querySnapshot = await getDocs(query(productCol, where("Product_Type", "==", "Shirt"))
      );

      // เคลียร์ข้อมูลเดิมใน product-container
      clearProductContainers();

      // แสดงผลลัพธ์ใหม่
      querySnapshot.forEach((doc) => {
         showData(doc);
      });
   } else if (checkboxCoupon.checked == true) {
      // ดึงกลุ่ม Document และกรองเฉพาะสินค้าประเภท Coupon
      const productCol = collection(dbproduct, "product");
      const querySnapshot = await getDocs(query(productCol, where("Product_Type", "==", "Coupon"))
      );

      // เคลียร์ข้อมูลเดิมใน product-container
      clearProductContainers();

      // แสดงผลลัพธ์ใหม่
      querySnapshot.forEach((doc) => {
         showData(doc);
      });
   } else if (checkboxFoodDrink.checked == true) {
      // ดึงกลุ่ม Document และกรองเฉพาะสินค้าประเภท Food&Drink
      const productCol = collection(dbproduct, "product");
      const querySnapshot = await getDocs(query(productCol, where("Product_Type", "==", "Food&Drink"))
      );

      // เคลียร์ข้อมูลเดิมใน product-container
      clearProductContainers();

      // แสดงผลลัพธ์ใหม่
      querySnapshot.forEach((doc) => {
         showData(doc);
      });
   } else {
      // ถ้าไม่เลือก Checkbox Shirt ให้แสดงสินค้าทั้งหมด
      const data = await getProduct(dbproduct);

      // เคลียร์ข้อมูลเดิมใน product-container
      clearProductContainers();

      data.forEach((products) => {
         showData(products);
      });
   }
});

// ตรวจสอบการเปลี่ยนแปลงของ Checkbox Coupon
checkboxCoupon.addEventListener("change", async () => {

   // ตรวจสอบว่ามีการเลือก Checkbox Shirt หรือไม่
   if (checkboxShirt.checked == true && checkboxCoupon.checked == true && checkboxFoodDrink.checked == true) {
      // ดึงสินค้าทั้งหมดออกมาแสดง
      const data = await getProduct(dbproduct);

      // เคลียร์ข้อมูลเดิมใน product-container
      clearProductContainers();

      data.forEach((products) => {
         showData(products);
      });
   } else if (checkboxShirt.checked == true && checkboxCoupon.checked == true && checkboxFoodDrink.checked == false) {

      const productCol = collection(dbproduct, "product");
      const querySnapshot = await getDocs(query(productCol, where("Product_Type", "in", ["Shirt", "Coupon"]))
      );

      // เคลียร์ข้อมูลเดิมใน product-container
      clearProductContainers();

      querySnapshot.forEach((doc) => {
         const product = doc.data();
         if (product.Product_Type === "Shirt") {
            showData(doc, shirtContainer);
         } else if (product.Product_Type === "Coupon") {
            showData(doc, couponContainer);
         }
      });
   } else if (checkboxShirt.checked == true && checkboxCoupon.checked == false && checkboxFoodDrink.checked == true) {

      const productCol = collection(dbproduct, "product");
      const querySnapshot = await getDocs(query(productCol, where("Product_Type", "in", ["Shirt", "Food&Drink"]))
      );

      // เคลียร์ข้อมูลเดิมใน product-container
      clearProductContainers();

      querySnapshot.forEach((doc) => {
         const product = doc.data();
         if (product.Product_Type === "Shirt") {
            showData(doc, shirtContainer);
         } else if (product.Product_Type === "Food&Drink") {
            showData(doc, foodDrinkContainer);
         }
      });
   } else if (checkboxShirt.checked == false && checkboxCoupon.checked == true && checkboxFoodDrink.checked == true) {

      const productCol = collection(dbproduct, "product");
      const querySnapshot = await getDocs(query(productCol, where("Product_Type", "in", ["Coupon", "Food&Drink"]))
      );

      // เคลียร์ข้อมูลเดิมใน product-container
      clearProductContainers();

      querySnapshot.forEach((doc) => {
         const product = doc.data();
         if (product.Product_Type === "Coupon") {
            showData(doc, couponContainer);
         } else if (product.Product_Type === "Food&Drink") {
            showData(doc, foodDrinkContainer);
         }
      });
   } else if (checkboxShirt.checked == true) {
      // ดึงกลุ่ม Document และกรองเฉพาะสินค้าประเภท Shirt
      const productCol = collection(dbproduct, "product");
      const querySnapshot = await getDocs(query(productCol, where("Product_Type", "==", "Shirt"))
      );

      // เคลียร์ข้อมูลเดิมใน product-container
      clearProductContainers();

      // แสดงผลลัพธ์ใหม่
      querySnapshot.forEach((doc) => {
         showData(doc);
      });
   } else if (checkboxCoupon.checked == true) {
      // ดึงกลุ่ม Document และกรองเฉพาะสินค้าประเภท Coupon
      const productCol = collection(dbproduct, "product");
      const querySnapshot = await getDocs(query(productCol, where("Product_Type", "==", "Coupon"))
      );

      // เคลียร์ข้อมูลเดิมใน product-container
      clearProductContainers();

      // แสดงผลลัพธ์ใหม่
      querySnapshot.forEach((doc) => {
         showData(doc);
      });
   } else if (checkboxFoodDrink.checked == true) {
      // ดึงกลุ่ม Document และกรองเฉพาะสินค้าประเภท Food&Drink
      const productCol = collection(dbproduct, "product");
      const querySnapshot = await getDocs(query(productCol, where("Product_Type", "==", "Food&Drink"))
      );

      // เคลียร์ข้อมูลเดิมใน product-container
      clearProductContainers();

      // แสดงผลลัพธ์ใหม่
      querySnapshot.forEach((doc) => {
         showData(doc);
      });
   } else {
      // ถ้าไม่เลือก Checkbox Shirt ให้แสดงสินค้าทั้งหมด
      const data = await getProduct(dbproduct);

      // เคลียร์ข้อมูลเดิมใน product-container
      clearProductContainers();

      data.forEach((products) => {
         showData(products);
      });
   }
});

// ตรวจสอบการเปลี่ยนแปลงของ Checkbox Food&Drnk
checkboxFoodDrink.addEventListener("change", async () => {

   // ตรวจสอบว่ามีการเลือก Checkbox Shirt หรือไม่
   if (checkboxShirt.checked == true && checkboxCoupon.checked == true && checkboxFoodDrink.checked == true) {
      // ดึงสินค้าทั้งหมดออกมาแสดง
      const data = await getProduct(dbproduct);

      // เคลียร์ข้อมูลเดิมใน product-container
      clearProductContainers();

      data.forEach((products) => {
         showData(products);
      });
   } else if (checkboxShirt.checked == true && checkboxCoupon.checked == true && checkboxFoodDrink.checked == false) {

      const productCol = collection(dbproduct, "product");
      const querySnapshot = await getDocs(query(productCol, where("Product_Type", "in", ["Shirt", "Coupon"]))
      );

      // เคลียร์ข้อมูลเดิมใน product-container
      clearProductContainers();

      querySnapshot.forEach((doc) => {
         const product = doc.data();
         if (product.Product_Type === "Shirt") {
            showData(doc, shirtContainer);
         } else if (product.Product_Type === "Coupon") {
            showData(doc, couponContainer);
         }
      });
   } else if (checkboxShirt.checked == true && checkboxCoupon.checked == false && checkboxFoodDrink.checked == true) {

      const productCol = collection(dbproduct, "product");
      const querySnapshot = await getDocs(query(productCol, where("Product_Type", "in", ["Shirt", "Food&Drink"]))
      );

      // เคลียร์ข้อมูลเดิมใน product-container
      clearProductContainers();

      querySnapshot.forEach((doc) => {
         const product = doc.data();
         if (product.Product_Type === "Shirt") {
            showData(doc, shirtContainer);
         } else if (product.Product_Type === "Food&Drink") {
            showData(doc, foodDrinkContainer);
         }
      });
   } else if (checkboxShirt.checked == false && checkboxCoupon.checked == true && checkboxFoodDrink.checked == true) {

      const productCol = collection(dbproduct, "product");
      const querySnapshot = await getDocs(query(productCol, where("Product_Type", "in", ["Coupon", "Food&Drink"]))
      );

      // เคลียร์ข้อมูลเดิมใน product-container
      clearProductContainers();

      querySnapshot.forEach((doc) => {
         const product = doc.data();
         if (product.Product_Type === "Coupon") {
            showData(doc, couponContainer);
         } else if (product.Product_Type === "Food&Drink") {
            showData(doc, foodDrinkContainer);
         }
      });
   } else if (checkboxShirt.checked == true) {
      // ดึงกลุ่ม Document และกรองเฉพาะสินค้าประเภท Shirt
      const productCol = collection(dbproduct, "product");
      const querySnapshot = await getDocs(query(productCol, where("Product_Type", "==", "Shirt"))
      );

      // เคลียร์ข้อมูลเดิมใน product-container
      clearProductContainers();

      // แสดงผลลัพธ์ใหม่
      querySnapshot.forEach((doc) => {
         showData(doc);
      });
   } else if (checkboxCoupon.checked == true) {
      // ดึงกลุ่ม Document และกรองเฉพาะสินค้าประเภท Coupon
      const productCol = collection(dbproduct, "product");
      const querySnapshot = await getDocs(query(productCol, where("Product_Type", "==", "Coupon"))
      );

      // เคลียร์ข้อมูลเดิมใน product-container
      clearProductContainers();

      // แสดงผลลัพธ์ใหม่
      querySnapshot.forEach((doc) => {
         showData(doc);
      });
   } else if (checkboxFoodDrink.checked == true) {
      // ดึงกลุ่ม Document และกรองเฉพาะสินค้าประเภท Food&Drink
      const productCol = collection(dbproduct, "product");
      const querySnapshot = await getDocs(query(productCol, where("Product_Type", "==", "Food&Drink"))
      );

      // เคลียร์ข้อมูลเดิมใน product-container
      clearProductContainers();

      // แสดงผลลัพธ์ใหม่
      querySnapshot.forEach((doc) => {
         showData(doc);
      });
   } else {
      // ถ้าไม่เลือก Checkbox Shirt ให้แสดงสินค้าทั้งหมด
      const data = await getProduct(dbproduct);

      // เคลียร์ข้อมูลเดิมใน product-container
      clearProductContainers();

      data.forEach((products) => {
         showData(products);
      });
   }
});

// On Auth State Change
const profile = document.getElementById("profile");
const profileRes = document.getElementById("profileRes");
const authLoginRegis = document.getElementById("authLoginRegis");
const authLoginRegisRes = document.getElementById("authLoginRegisRes");
const logout = document.getElementById("logout");
const logoutRes = document.getElementById("logoutRes");
const adminMenu = document.getElementById("admin-menu");

onAuthStateChanged(auth, (user) => {
   if (user && user.email === "nongfilmcry@gmail.com") {
      // User is signed in and has the admin email address
      adminMenu.style.display = "block";
   } if (user) {
      profile.style.display = "block";
      authLoginRegis.style.display = "none";
      profileRes.style.display = "block";
      authLoginRegisRes.style.display = "none";

   } else {
      profile.style.display = "none";
      profileRes.style.display = "none";
      adminMenu.style.display = "none";
      authLoginRegisRes.style.display = "block";
      authLoginRegis.style.display = "block";
   }
});

logout.addEventListener("click", (e) => {
   signOut(auth)
      .then(() => {
         swal.fire({
            title: "ออกจากระบบสำเร็จ",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
         });
      }).catch((err) => {
         swal.fire({
            title: "ออกจากระบบไม่สำเร็จ",
            icon: "error",
            showConfirmButton: false,
            timer: 1500
         });
      });
})

logoutRes.addEventListener("click", (e) => {
   signOut(auth)
      .then(() => {
         swal.fire({
            title: "ออกจากระบบสำเร็จ",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
         });
      }).catch((err) => {
         swal.fire({
            title: "ออกจากระบบไม่สำเร็จ",
            icon: "error",
            showConfirmButton: false,
            timer: 1500
         });
      });
})