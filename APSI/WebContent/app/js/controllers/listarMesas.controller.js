        angular.module("Restaurant")
        .controller("listarMesasController", listarMesasController);

        listarMesasController.$inject = ['$scope', "$rootScope", "$location", "$http", "reservasService"];

        function listarMesasController($scope, $rootScope, $location, $http, reservasService) {
            $scope.service = reservasService;
            $scope.codeMesa = 0;
            $scope.showData = false;
            $scope.selecionaMesa = function(codigo){
                $scope.codeMesa = codigo;
                $scope.showData = true;
            };
            $scope.realizarChamadaGet = function() {
            	$http({
            		  method: 'GET',
            		  url: '/rest/reservaFacade/exibir'
            		}).then(function successCallback(response) {
            		   alert("deu certo porra");
            		  }, function errorCallback(response) {
            			  alert("deu errado carai")
            		  });
			};
            $scope.solicitaReserva = function(reserva){
                reserva.codeMesa = $scope.codeMesa;
                console.log(reserva);
                /*$http({
                    url: '/guardaBanco',
                    method: 'POST',
                    data: {
                        "nome": reserva.nome,
                        "email": reserva.email,
                        "tel": reserva.tel,
                        "codMesa": $scope.codeMesa,
                        "data": reserva.dtR
                    }
                });*/
            };
            
        }