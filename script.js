var imgagora = "corte2.jpg";
var imgdepois = "corte1.jpg";

function trocar(){
  document.getElementById("troca()").src = imgagora;
   let aux = imgagora;
  imgagora = imgdepois;
  imgdepois = aux;
}
