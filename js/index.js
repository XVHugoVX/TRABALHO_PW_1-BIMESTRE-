document.write("[Questão 1 Abaixo:]")
let valorUm = 12;

if(valorUm > 10){
    document.write("<br><br>" + valorUm + " é maior que 10");
}else if(valorUm < 10)
    document.write( "<br>" + valorUm + " é menor que 10");





document.write("<br><br>[Questão 2 Abaixo:]");
let notaA = 7;
let notaB = 7;
let notaC = 10;
let notaD = 8;
let notaFinal = notaA + notaB + notaC + notaD;
let notaAritmetica = notaFinal / 4;

if(notaAritmetica >= 6){
        document.write("<br><br>1º Bimestre: " + notaA +
                        "<br>2º Bimestre: " + notaB +
                        "<br>3º Bimestre: " + notaC +
                        "<br>4º Bimestre: " + notaD +
                        "<br>Média Final: " + notaAritmetica +
                        "<br><br>Parabéns Aluno, você foi Aprovado");
}else if(notaAritmetica < 6)
        document.write("<br><br>1º Bimestre: " + notaA +
                        "<br>2º Bimestre: " + notaB +
                        "<br>3º Bimestre: " + notaC +
                        "<br>4º Bimestre: " + notaD +
                        "<br>Média Final: " + notaAritmetica +
                        "<br><br>Necessita Práticar, você foi Reprovado");




document.write("<br><br>[Questão 3 Abaixo:]")
let empregadoid = 11;
let nascimento = 1954;
let iniciodetrabalho = 1989;
let anoatual = 2022;
let idade = anoatual - nascimento;
let tempodetrabalho = anoatual - iniciodetrabalho;

if((idade >= 65) && (tempodetrabalho >= 30)){
    document.write("<br><br>Idade: " + idade + "<br>Tempo de Trabalho: " + tempodetrabalho + "<br>Requerer Aposentadoria");
}else if((idade < 65) &&(tempodetrabalho < 30))
    document.write("<br><br>Idade: " + idade + "<br>Tempo de Trabalho: " + tempodetrabalho + "<br>Não Requerer Aposentadoria");



document.write("<br><br>[Questão 4 Abaixo:]")
var prod = "Roupas"
var quant = 6
var valorP = 8
var total = quant * valorP
var desc = total * 0.03
var totalP = total - desc 
document.write("<br>Quantidade das Roupas: "+ quant);
document.write("<br>Preço das Roupas: " + valorP + "$");
document.writeln("<br>O valor total é: " + total + "$");
document.writeln("<br>Valor com desconto é: " + totalP + "$");



document.write("<br><br>[Questão 5 Abaixo:]")
let tipo = 5;

switch(tipo){
    case 0:
            document.write("<br>Ocorreu um Erro");
    break;
    case 1:
            document.write("<br> 1 Arroz");
    break;        
    case 2:
            document.write("<br> 2 Feijão");
    break;        
    case 3:
            document.write("<br> 3 Cuzcuz");
    break;        
    case 4:
            document.write("<br> 4 Carne de Frango");
    break;        
    case 5:
            document.write("<br> 5 Carne Súina");
    break;        
    case 6:
            document.write("<br> 6 Carne Bovina");        
    break;
    default: document.write("<br> valor inválido");
}



document.write("[<br><br>Questão 6 Abaixo:]")
var p = parseInt(prompt("Informe o codigo do Produto que você deseia:"))
  var quant = parseInt(prompt("Qual a Quantidade de Produtos ?"))
  var valor1 = 1.50
  var valor2 = 2.40
  var valor3 = 5.60
  var valor4 = 3.70
  var valor5 = 8.90
  var valor6 = 6.10
  
  var preco1 = valor1 * quant
  var preco2 = valor2 * quant
  var preco3 = valor3 * quant
  var preco4 = valor4 * quant
  var preco5 = valor5 * quant
  var preco6 = valor6 * quant
  
  switch(p){
    case 1: document.write("<br>Total a pagar: " + preco1 + "$");
    break;
    case 2: document.write("<br>Total a pagar: " + preco2 + "$");
    break;
    case 3: document.write("<br>Total a pagar: " + preco3 + "$");
    break;
    case 4: document.write("<br>Total a pagar: " + preco4 + "$");
    break;
    case 5: document.write("<br>Total a pagar: " + preco5 + "$");
    break;
    case 6: document.write("<br>Total a pagar: " + preco6 + "$");
    break;
    default: alert("<br>Produto Inexistente!!");
    document.write("Errror 404")
  }



document.write("<br><br>[Questão 7 Abaixo:]")
var inicio = 100;

while(inicio <= 110){
	document.write("<br>Número do cliente: " + inicio);
	inicio++;
}




document.write("<br>Questão 8 Abaixo:")
var Num = parseInt(prompt("Para a Questão 8, Digite um valor:"))
  while(Num <= 90){
    document.write("<br>"+ Num);
    Num++;
  }




document.write("<br><br>[Questão 9 Abaixo:]");
        document.write("<br>Tabuada de qualquer número abaixo de 10, vezes 10:")
let valor = 6

for(let i = 0; i <=10; i++){
        let res = valor * i;
        document.write(valor, "*", i, "=", res, "<br>")
}




document.write("<br><br>[Questão 10 Abaixo:]");
var cres = 1;
        document.write("<br>Ordem Crescente:");
while(cres <= 10){
	document.write("<br>Número: " + cres);
	cres++;
}var decre = 10;
document.write("<br>Ordem Decrescente:");
while(decre >= 1){
	document.write("<br>Número: " + decre);
	decre--;
}

