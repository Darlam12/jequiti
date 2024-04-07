angular.module("listaTelefonica", ["ngMessages"]);
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, uppercaseFilter) {
  


$scope.listaRegistro = [
 {id: 1,codigo: 17840, descricao: "Desodorante Colônia", categoria: "Claudia Leite"},
 {id: 2,codigo: 80703, descricao: "Desodorante Hidratante", categoria: "Claudia Leite"}
         
];




$scope.slider = document.querySelector('.slider .list');
$scope.items = document.querySelectorAll('.slider .list .item');


$scope.lengthItems = $scope.items.length;
$scope.valor = 0;


$scope.proximo = function(){
  $scope.textoWhatzap = null;
  $scope.valor = $scope.valor + 1 <= $scope.lengthItems ? $scope.valor + 1 : 0;

   for (var i = 0; i < $scope.listaRegistro.length; i++) {
    if($scope.listaRegistro[i].id===$scope.valor){
     $scope.textoWhatzap = "🙂 Oi gostei desse "+$scope.listaRegistro[i].descricao+", código: "+$scope.listaRegistro[i].codigo+" quantidade 👉🏻: ";
    }
 }
   
    reloadSlider();
}

$scope.anterior = function(){
   
    $scope.textoWhatzap = null;
    $scope.valor = $scope.valor - 1 >= 0 ? $scope.valor - 1 : $scope.lengthItems;

  for (var i = 0; i < $scope.listaRegistro.length; i++) {
    if($scope.listaRegistro[i].id===$scope.valor){
     $scope.textoWhatzap = "🙂 Oi gostei desse "+$scope.listaRegistro[i].descricao+", código: "+$scope.listaRegistro[i].codigo+" quantidade 👉🏻: ";
    }
 }

    reloadSlider();
}


function reloadSlider(){
$scope.slider.style.left = -$scope.items[$scope.valor].offsetLeft + 'px';

 $scope.getPagina = 0;
 
if($scope.valor > 0){
 $scope.getPagina =$scope.valor;
 }
}

});


