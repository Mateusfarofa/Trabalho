var imgagora = "corte2.jpg";
var imgdepois = "corte1.jpg";
var imgpreterito = "corte3.jpg";

function trocar(){
  document.getElementById("corte").src = imgagora;
   let aux = imgagora;
  imgagora = imgdepois;
  imgpreterito = aux;
}
