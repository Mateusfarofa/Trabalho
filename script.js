var imgagora = "corte2.jpg";
var imgdepois = "corte1.jpg";

function troca(){
  document.getElementById("corte").src = imgagora;
   let aux = "imgagora";
  "imgagora" = "imgdepois";
  "imgdepois" = aux;
}
