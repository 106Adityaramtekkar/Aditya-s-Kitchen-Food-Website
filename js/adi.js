const firebaseConfig = {
  apiKey: "AIzaSyAQYm5PREQ27ie9se1r5Dsc_IWPUqqX0uw",
  authDomain: "food-register-6d91d.firebaseapp.com",
  databaseURL: "https://food-register-6d91d-default-rtdb.firebaseio.com",
  projectId: "food-register-6d91d",
  storageBucket: "food-register-6d91d.appspot.com",
  messagingSenderId: "1058814530320",
  appId: "1:1058814530320:web:3a6d6abfd8227a99734b95",
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

// reference database
var food registerDB = firebase.database().ref("food register");

document.getElementById("foodregister").addEventListener("submit", submitform);

function submitform(e) {
  e.preventDefault();

  var name =  getElementVal("name");
  var emailid =  getElementVal("email");
  var psw =  getElementVal("psw");
  var rpsw = getElementVal("rpsw");
  console.log(name, emailid, psw, rpsw);
}

// constsave=(name, emailid, psw, rpsw) => {

// }
const getElementVal = (id) => {
  return document.getElementById(id).value;
};
