//Forma 1
var obj1 = new Object();
obj1.RA = '123456';
obj1.nome = 'Nome do Aluno';

//Forma 2
var obj2 = {
    RA: '12356',
    nome: 'Nome do Aluno'
};

//Forma 3
var obj3 = {};
obj3['RA'] = '123456';
obj3['nome'] = 'Nome do Aluno';

function printAluno(aluno){
    alert('Nome: ' + aluno.nome + "\nRA: " + aluno.RA);
}

printAluno(obj1);
printAluno(obj2);
printAluno(obj3);