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
var foodregisterDB = firebase.database().ref("foodregister");

document.getElementById("foodregister").addEventListener("submit", submitform);

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

