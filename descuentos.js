function calcularPrecioConDescuento(precio, descuento){

  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function buttonPriceDiscount(){
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("inputDiscount");
  const discountValue = inputDiscount.value;

  const precioDescuento = calcularPrecioConDescuento(priceValue, discountValue);
  const resultP = document.getElementById("resultPrice");
  resultP.innerText = "El precio con descuento es de: $" + precioDescuento + " pesos";

}