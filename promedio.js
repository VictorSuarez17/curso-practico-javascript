
function calcularPromedio(lista){

  const sumaLista = lista.reduce(
    function(valorAcumulado = 0, nuevoElemento){
      return sumaLista = valorAcumulado + nuevoElemento;
   
    }
  );
  const promedioLista = sumaLista / lista.lenght;
  return promedioLista;
}

