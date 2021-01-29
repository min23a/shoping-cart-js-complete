const plusButton = document.querySelector("#plus_btn");
const minusButton = document.querySelector("#minus_btn");
const plusButton1 = document.querySelector("#plus_btn1");
const minusButton1 = document.querySelector("#minus_btn1");
btnAction();
btnAction2();
//for 1st item
function btnAction(){
    plusButton.addEventListener("click", function(){
    let inputValue = document.querySelector("#quantity1").value;
    let quantityNum = parseInt(inputValue);
    newValueP(quantityNum);
    });
    minusButton.addEventListener("click", function () {
        let inputValue = document.querySelector("#quantity1").value;
        let quantityNum = parseInt(inputValue);
        newValueN(quantityNum);
    });
}
//for 2nd item
function btnAction2() {
    plusButton1.addEventListener("click", function () {
        let inputValue = document.querySelector("#quantity2").value;
        let quantityNum = parseInt(inputValue);
        newValueP2(quantityNum);
    });
    minusButton1.addEventListener("click", function () {
        let inputValue = document.querySelector("#quantity2").value;
        let quantityNum = parseInt(inputValue);
        newValueN2(quantityNum);
    });
}
//1st item +
function newValueP(quantityNum){
    let newValue = quantityNum + 1;
    document.querySelector("#quantity1").setAttribute("value", newValue);
        //price changing +
    let priceNum = 1219;
    let value1 = document.querySelector("#quantity1").value;
    let valueNum = parseInt(value1);
    let newPrice1 = valueNum * priceNum;
    document.querySelector("#price1").innerText = "" + newPrice1;
    //Total price
    let item1 = newPrice1;
    let phoneCase = document.querySelector("#price2").innerText;
    let item2 = parseInt(phoneCase);
    let totalPrice = item1 + item2;
    document.querySelector("#totalprice").innerText = "" + totalPrice;
    document.querySelector("#totalprice2").innerText = "" + totalPrice;

}
//1st item -
function newValueN(quantityNum) {
    let newValue = quantityNum - 1;
    if(newValue <= -1){
        newValue = 0;
    }
    else{
      document.querySelector("#quantity1").setAttribute("value", newValue);
    }
    //price changing -
    let priceNum = 1219;
    let value1 = document.querySelector("#quantity1").value;
    let valueNum = parseInt(value1);
    let newPrice2 = valueNum * priceNum;
    document.querySelector("#price1").innerText = "" + newPrice2;
    //Total price
    let item1 = newPrice2;
    let phoneCase = document.querySelector("#price2").innerText;
    let item2 = parseInt(phoneCase);
    let totalPrice = item1 + item2;
    document.querySelector("#totalprice").innerText = "" + totalPrice;
    document.querySelector("#totalprice2").innerText = "" + totalPrice;
}
//2nd item +
function newValueP2(quantityNum) {
    let newValue = quantityNum + 1;
    document.querySelector("#quantity2").setAttribute("value", newValue);
    //price changing2 +
    let priceNum = 59;
    let value1 = document.querySelector("#quantity2").value;
    let valueNum = parseInt(value1);
    let newPrice3 = valueNum * priceNum;
    document.querySelector("#price2").innerText = "" + newPrice3;
    //Total price
    let item2 = newPrice3;
    let phoneCase = document.querySelector("#price1").innerText;
    let item1 = parseInt(phoneCase);
    let totalPrice = item1 + item2;
    document.querySelector("#totalprice").innerText = "" + totalPrice;
    document.querySelector("#totalprice2").innerText = "" + totalPrice;
}
//2nd item -
function newValueN2(quantityNum) {
    let newValue = quantityNum - 1;
    if (newValue <= -1) {
        newValue = 0;
    }
    else {
        document.querySelector("#quantity2").setAttribute("value", newValue);
    }
    //price changing2 -
    let priceNum = 59;
    let value1 = document.querySelector("#quantity2").value;
    let valueNum = parseInt(value1);
    let newPrice4 = valueNum * priceNum;
    document.querySelector("#price2").innerText = "" + newPrice4;
    //Total price
    let item2 = newPrice4;
    let phoneCase = document.querySelector("#price1").innerText;
    let item1 = parseInt(phoneCase);
    let totalPrice = item1 + item2;
    document.querySelector("#totalprice").innerText = "" + totalPrice;
    document.querySelector("#totalprice2").innerText = "" + totalPrice;
}
//Total price



