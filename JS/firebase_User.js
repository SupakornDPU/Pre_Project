// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getFirestore , collection , getDocs , deleteDoc , doc, query, where, updateDoc} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";
import { getAuth, deleteUser ,createUserWithEmailAndPassword, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

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
const db = getFirestore(app);
const auth = getAuth(app);
const user = auth.currentUser;
//ตาราง
const table = document.getElementById("table1");
const table2 = document.getElementById("table2");
const form = document.getElementById("registerForm");

async function getUsers(db){
   const userCol = collection(db,'user')
   const userWhere = query(userCol, where("deleted", "==", false ));
   const userSnap = await getDocs(userWhere)
   return userSnap
}

//ดึงกลุ่ม Document
const data = await getUsers(db)
data.forEach(users =>{
   showData(users)
})

function showData(users){
   const row = table.insertRow(-1)
   const emailCol = row.insertCell(0)
   const nameCol = row.insertCell(1)
   const lastCol = row.insertCell(2)
   const telCol = row.insertCell(3)
   const passCol = row.insertCell(4)
   const deleteCol = row.insertCell(5)

   emailCol.innerHTML = users.data().email
   nameCol.innerHTML = users.data().User_Firstname
   lastCol.innerHTML = users.data().User_Lastname
   telCol.innerHTML = users.data().User_Tel
   passCol.innerHTML = users.data().User_Point

   //ปุ่มลบ
   let btn = document.createElement('button')
   btn.textContent="ลบข้อมูล"
   btn.setAttribute('class','btn btn-danger')
   btn.setAttribute('data-id',users.id)
   deleteCol.appendChild(btn)
   btn.addEventListener('click',(e)=>{
      let id = e.target.getAttribute('data-id');
   
      updateDoc(doc(db,'user',id), { deleted: true })
      .then(() => {
         alert("ลบข้อมูลเรียบร้อย")
         window.location.href = " Admincustomer.html "
      }).catch((error) => {
         console.error("ลบข้อมูลไม่สำเร็จ: ", error);
      });
      
   })
}


