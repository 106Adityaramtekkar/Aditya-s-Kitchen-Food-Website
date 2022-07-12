 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";

 const firebaseConfig = {
    apiKey: "AIzaSyAfSlXVI1L4ezcx9vsg-nppNL6sXxiRvC0",
    authDomain: "foodcontact-271da.firebaseapp.com",
    databaseURL: "https://foodcontact-271da-default-rtdb.firebaseio.com",
    projectId: "foodcontact-271da",
    storageBucket: "foodcontact-271da.appspot.com",
    messagingSenderId: "738237019213",
    appId: "1:738237019213:web:5d86d84782925eca455804"
  };

//initialize firebase
firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);

// reference database
var foodregisterDB = firebase.database().ref("foodcontact");

document.getElementById("form").addEventListener("submit", submitform);

function submitform(e) {
  e.preventDefault();

  var name = adi("name");
  var emailid = adi("email");
  var psw = adi("psw");
  var rpsw = adi("rpsw");

  savemessages(name, emailid, psw, rpsw);
}

const savemessages = (name, emailid, psw, rpsw) => {
  var newfoodregisterform = foodregisterDB.push();

  newfoodregisterform.set({
    name: name,
    emailid: emailid,
    psw: psw,
    rpsw: rpsw,
  });
};

const adi = (id) => {
  return document.getElementById(id).value;
};

