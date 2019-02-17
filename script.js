function getPrice(){
    let shoe = document.getElementById("shoe").value;
    let price;

    switch(shoe){
        case "air force":
        price = 150;
        break;
        case "air max":
        price = 125;
        break;
        case "zoom":
        price = 105;
        break;
        case "air jordan":
        price = 175;
        break;
        case "lunar":
        price = 135;
        break;
        default:
        price = "invalid entry";
    }
    document.getElementById("price").innerHTML = price;
}