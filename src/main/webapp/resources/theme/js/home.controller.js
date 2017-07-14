var app = angular.module('home');

app.controller('homeController', function ($scope, Produtos) {

    $scope.produtos = [];
    $scope.novoProduto = {};

    $scope.sortType = '';
    $scope.sortReverse = false;
    $scope.searchProdcut = '';

    Produtos.listar().then(function (produtos) {
        $scope.produtos = produtos;
    });

    $scope.addProduto = function () {
        $scope.produtos.push($scope.novoProduto);
        $scope.novoProduto = {};
    }

    $scope.removerProduto = function (id) {
        angular.forEach($scope.produtos, function (produto, i) {
            if (produto.id == id) {
                $scope.produtos.splice(i, 1);
            }
        });
    }
});




