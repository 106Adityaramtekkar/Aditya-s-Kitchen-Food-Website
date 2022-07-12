$(".offer-price").click(function(){
  // alert("Clicked to add the item in cart");
  // $(location).attr("href", "/static/DEMOAPP/cart.html");
let buttons = document.getElementsByTagName("button");

const cart = [];

for(var i=0; i<buttons.length; i++) {
  let button = buttons[i];
  console.log(button);
  button.addEventListener('click', function(event){
    console.clear();
    console.log(event.target);
    console.log(event.target.dataset.productSku);
    cart.push( event.target.dataset.productSku );
    var name =event.target.dataset.productSku;
    console.log(cart)
    console.log(name)
    var para = new URLSearchParams();
para.append("KEY", name);
// location.href = "/static/DEMOAPP/cart.html?" + para.toString();
$(location).attr("href", "/static/DEMOAPP/cart.html?"+para.toString());
  });
}

//  var name ="event.target.dataset.productSku";
// console.log('cart')
//   var para = new URLSearchParams();
// para.append("KEY", name);
// // location.href = "/static/DEMOAPP/cart.html?" + para.toString();
// $(location).attr("href", "/static/DEMOAPP/cart.html?"+para.toString());
});