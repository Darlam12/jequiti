angular.module("listaTelefonica", ["ngMessages"]);
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, uppercaseFilter) {
  

$scope.slider = document.querySelector('.slider .list');
$scope.items = document.querySelectorAll('.slider .list .item');

 //alert($scope.items.length);

$scope.lengthItems = $scope.items.length;
$scope.valor = 0;


  $scope.textoWhatzap = null;

$scope.codigo = "80703";
$scope.descricao = "Claudia Leite Colônia Desodorante Feminina";

$scope.textoWhatzap = "🙂 Oi gostei desse "+$scope.descricao+", código: "+$scope.codigo+" informe quantidade 👉🏻: ";


$scope.proximo = function(){
      
  $scope.valor = $scope.valor + 1 <= $scope.lengthItems ? $scope.valor + 1 : 0;
    reloadSlider();
}

$scope.anterior = function(){
    $scope.valor = $scope.valor - 1 >= 0 ? $scope.valor - 1 : $scope.lengthItems;
    reloadSlider();
}

function reloadSlider(){
$scope.slider.style.left = -$scope.items[$scope.valor].offsetLeft + 'px';
}

});


