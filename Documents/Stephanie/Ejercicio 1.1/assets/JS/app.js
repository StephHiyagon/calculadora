function convertirFarenheit(){
  var celsius = parseFloat(document.getElementById("farenheit").value);
  var result = ((9/5*celsius)+32).toFixed(0);
  document.getElementById("celsius").value=result;
  return false;
}

function convertirCelsius(){
  var farenheit = parseFloat(document.getElementById("celsius").value);
  var resultado = ((farenheit - 32)*5/9).toFixed(0);
  document.getElementById("farenheit").value=resultado;
  return false;
}
