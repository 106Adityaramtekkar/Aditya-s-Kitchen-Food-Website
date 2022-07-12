////const firebaseConfig = {
////  apiKey: "AIzaSyAQYm5PREQ27ie9se1r5Dsc_IWPUqqX0uw",
////  authDomain: "food-register-6d91d.firebaseapp.com",
////  databaseURL: "https://food-register-6d91d-default-rtdb.firebaseio.com",
////  projectId: "food-register-6d91d",
////  storageBucket: "food-register-6d91d.appspot.com",
////  messagingSenderId: "1058814530320",
////  appId: "1:1058814530320:web:89cf2929110a4518734b95"
////};
////const firebaseConfig = {
////  apiKey: "AIzaSyB8najgYp0m5oxSrfNQafPu3wvZAJdUcSk",
////  authDomain: "foodcart1-cac65.firebaseapp.com",
////  databaseURL: "https://foodcart1-cac65-default-rtdb.firebaseio.com",
////  projectId: "foodcart1-cac65",
////  storageBucket: "foodcart1-cac65.appspot.com",
////  messagingSenderId: "160474667316",
////  appId: "1:160474667316:web:169173137c3b0ca9b9ed61"
////};
//const firebaseConfig = {
//  apiKey: "AIzaSyAQYm5PREQ27ie9se1r5Dsc_IWPUqqX0uw",
//  authDomain: "food-register-6d91d.firebaseapp.com",
//  databaseURL: "https://food-register-6d91d-default-rtdb.firebaseio.com",
//  projectId: "food-register-6d91d",
//  storageBucket: "food-register-6d91d.appspot.com",
//  messagingSenderId: "1058814530320",
//  appId: "1:1058814530320:web:3a6d6abfd8227a99734b95"
//};
//firebase.initializeApp(firebaseConfig);
////const app = initializeApp(firebaseConfig);
//var foodcartDB = firebase.database().ref("foodcart");
//
//document.getElementById("foodcart").addEventListener("submit", submitform);
//
//
//function submitform(e) {
//  e.preventDefault();
//
//  var prod_name = adi("prod_name");
//  var prod_quan = adi("prod_quan");
//  var prod_price = adi("prod_price");
//  var add = adi("add");
//  console.log(prod_name, prod_quan , prod_price , add );
//}
//
////  savemessages(name, emailid, psw, rpsw);
////}
////const savemessages = (name, emailid, psw, rpsw) => {
////  var newfoodregisterform = foodregisterDB.push();
////
////  newfoodregisterform.set({
////    productname: prod_name,
////    productquantity : prod_quan,
////    productprice: prod_price,
////    customeraddress: add,
////  });
////};
//
//const adi = (id) => {
//  return document.getElementById(id).value;
//};
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

  var prod_name = adi("prod_name");
  var prod_quan = adi("prod_quan");
  var prod_price = adi("prod_price");
  var add = adi("add");

  savemessages(prod_name, prod_quan, prod_price , add);
}

const savemessages = (prod_name, prod_quan, prod_price, add) => {
  var newfoodregisterform = foodregisterDB.push();

  newfoodregisterform.set({
    prod_name: prod_name,
    prod_quan: prod_quan,
    prod_price: prod_price,
    add: add,
  });
};

const adi = (id) => {
  return document.getElementById(id).value;
};

