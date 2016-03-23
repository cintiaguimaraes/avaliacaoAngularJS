myApp.controller('FormCtrl',function($scope){
	$scope.indexnome = 0;
	$scope.clicouEditar = false;
	$scope.semnomes = false;

	$scope.pessoa = {
		nomenome : 'Cintia',
		email : 'cintia@ciss.com.br',
		telefone: '46-9114-7640'
	};

	$scope.list =[
		{
			nomenome : 'nome Teste',
			email : 'email@teste.com',
			telefone: 5566777
		}
	];

	//Função para cadastrar uma nova nome...
	 $scope.cadastranome = function(nome, email, telefone)	{
	 	
		 	$scope.list.push({
			 	nomenome : nome,
				email : email,
				telefone: telefone
		 	});
		 	$scope.semnomes = false;
	 };

	 //Função para editar uma nome
	 $scope.editanome = function(dataIndex){
	 	$scope.clicouEditar = true;
	 	$scope.indexnome = dataIndex;
	 	$scope.name = $scope.list[dataIndex].nomenome;
	 	$scope.fone = $scope.list[dataIndex].telefone;
	 	$scope.mail = $scope.list[dataIndex].email;
	 	$scope.semnomes = false;
	 };
	

	 //Função para renomear
	 $scope.renomearnome = function(novoNome, novoEmail, novoTelefone){
	 	var editObj = {};
	 	editObj = {
	 		'nomenome' : novoNome,
	 		'email' : novoEmail,
	 		'telefone': novoTelefone
	 	};
	 	$scope.list[$scope.indexnome] = editObj;
	 	$scope.semnomes = false;
	 	$scope.cancelar();
	 };


	 //Função para Remover Trefa
	 $scope.removenome = function(remove){
	 	$scope.list.splice(remove,1);
	 	console.log($scope.list.length);
	 	if($scope.list.length == 0){
	 		$scope.semnomes = true;
	 	};
	 };

	 $scope.cancelar = function(cancela) {
	 	$scope.clicouEditar = false;
	 };

});