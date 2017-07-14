angular.module("home").factory("Produtos", function ($q, $http) {
    return {
        listar: function () {
            var r = $q.defer();
            $http.get("rest/produto").then(
                    function (result) {
                        var lista = [];
                        angular.forEach(result.data, function (produto) {
                            lista.push(produto);
                        });
                        r.resolve(lista);
                    }
            );
            return r.promise;
        }

    };
});

