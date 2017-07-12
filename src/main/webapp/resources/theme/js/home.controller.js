angular.module('home').controller('homeController', function ($scope, Produtos) {

    $scope.produtoss = [
//        {id: 125453, nome: "Bateria Peral", descricao: "Bateria Acustica Pearl EXP", valor: "1.987,90", quantidade: 2, imagem: "http://www.bateraclube.com.br/imagens_cliente/122/Bateria-Pearl-Export-EXL-Series-Mahogany-Honey-Amber-22222c8222c10222c12222c14222c1622-(Shell-Pack)-2727.JPG"},
//        {id: 1546423, nome: "Bateria Tama", descricao: "Bateria Acustica Tama Professional", valor: "1.987,90", quantidade: 2, imagem: "http://www.equipo.com.br/adminsetup/mg_produtos/imagens/tama-star01.jpg"},
//        {id: 124563, nome: "Bateria Yamaha", descricao: "Bateria Acustica Yamaha Classic", valor: "1.987,90", quantidade: 2, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgc_PkpWLREtovTYUR-gQSF-DL4tXoxyzdt-cIzCGSa7y4CaAc"},
//        {id: 12453, nome: "Bateria RMV", descricao: "Bateria Acustica RMV Study Séries", valor: "1.987,90", quantidade: 2, imagem: "http://www.bateraclube.com.br/imagens_cliente/122/Bateria-RMV-Concept-Exclusive-Maple-Custom-Natural-Burst-(Somente-Tambores)-18,8,10,12,14.JPG"},
//        {id: 126773, nome: "Bateria Tama", descricao: "Bateria Acustica Tama Professional", valor: "1.987,90", quantidade: 2, imagem: "http://www.equipo.com.br/adminsetup/mg_produtos/imagens/tama-star01.jpg"}
    ];
    
    $scope.produtos = [];
    Produtos.listar().then(function(produtos){
        $scope.produtos = produtos;
        
    });
    

    
    $scope.novoProduto = {};

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


