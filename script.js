
// Obtém a data/hora atual
var data = new Date();
// Guarda cada pedaço em uma variável
var dia     	= data.getDate();           // 1-31
var dia_sem 	= data.getDay();            // 0-6 (zero=domingo)
var mes     	= data.getMonth();          // 0-11 (zero=janeiro)
var ano2    	= data.getYear();           // 2 dígitos
var ano4    	= data.getFullYear();       // 4 dígitos
var hora    	= data.getHours();          // 0-23
var hora100 	= Math.round(hora*4.16666666666666667);          // 0-23
var hora100util	= Math.round((hora-8)*10);          // 0-23
var hora100falta= 100-Math.round(hora*4.16666666666666667);          // 0-23
var hora100faltautil = 100-Math.round((hora-8)*10);          // 0-23
var min     	= data.getMinutes();        // 0-59
var min100  	= Math.round(min*1.6666666666666667);        // 0-59
var min100falta = 100-Math.round(min*1.6666666666666667);        // 0-59
var seg     	= data.getSeconds();        // 0-59
var seg100  	= Math.round(seg*1.6666666666666667);
var seg100falta = 100-Math.round(seg*1.6666666666666667);
var mseg    	= data.getMilliseconds();   // 0-999
var tz      	= data.getTimezoneOffset(); // em minutos

// Formata a data e a hora (note o mês + 1)
var str_data = dia + '/' + (mes+1) + '/' + ano4;
var str_hora = hora100 + '% das horas do dia e';
var str_minuto = '<br><br>' + min100 + '% dos minutos dessa hora e ';
var str_segundos = '<br><br>' + seg100 + '% dos segundos desse minuto';
-
/// COMEÇA AQUI
document.write('<b>Estamos em % das horas </b> do Dia ' + str_data + '<br><br>');
// Mostra o resultado
document.write(str_hora);
var ia = 0; var len1 = hora100;
document.write('<br>');
for (; ia < len1; ia++) {   document.write('|'); }
// Linha 100
document.write('<br>');
var i0a = 0; for (; i0a < 100; i0a++) {   document.write('_'); }

document.write(str_minuto);
var ib = 0; var len2 = min100;
document.write('<br>');
for (; ib < len2; ib++) {   document.write('|'); }
// Linha 100
document.write('<br>');
var i0a = 0; for (; i0a < 100; i0a++) {   document.write('_'); }

document.write(str_segundos);
var ic = 0; var len3 = seg100;
document.write('<br>');
for (; ic < len3; ic++) {   document.write('|'); }
// Linha 100
document.write('<br>');
var i0a = 0; for (; i0a < 100; i0a++) {   document.write('_'); }

document.write('<br><br><br>');

/// Falta ainda
document.write('<b> Faltam ainda % das horas </b> ');
document.write('do Dia ' + str_data + '<br><br>');

// Formata a data e a hora (note o mês + 1)
var str_horafalta = hora100falta + '% das horas do dia e';
var str_minutofalta = '<br><br>' + min100falta + '% dos minutos dessa hora e ';
var str_segundosfalta = '<br><br>' + seg100falta + '% dos segundos desse minuto';

// Mostra o resultado
document.write(str_horafalta);
var ia = 0; var len1 = hora100falta;
document.write('<br>');
for (; ia < len1; ia++) {   document.write('|'); }
// Linha 100
document.write('<br>');
var i0a = 0; for (; i0a < 100; i0a++) {   document.write('_'); }

document.write(str_minutofalta);
var ib = 0; var len2 = min100falta;
document.write('<br>');
for (; ib < len2; ib++) {   document.write('|'); }
// Linha 100
document.write('<br>');
var i0a = 0; for (; i0a < 100; i0a++) {   document.write('_'); }

document.write(str_segundosfalta);
var ic = 0; var len3 = seg100falta;
document.write('<br>');
for (; ic < len3; ic++) {   document.write('|'); }
// Linha 100
document.write('<br>');
var i0a = 0; for (; i0a < 100; i0a++) {   document.write('_'); }


/////// DOS DIAS DO ANO

/*
document.write('<br>');
var str_hora = hora + ':' + min + ':' + seg;
document.write('Hoje é ' + str_data + ' às ' + str_hora);
document.write('<br>');
*/

document.write('<br>-----------<br><br>');
var dias	= (mes)*30+dia; 
var dias100 	= Math.round(dias/365*100);
document.write(dias + ' dias do Ano');
document.write(' e <br> em Porcentagem <b>' + dias100 + '% do ano</b>');
document.write('<br><br>');

var iXc = 0;
for (; iXc < dias100; iXc++) {   document.write('|'); }
document.write('<br>');
var iXa = 0; for (; iXa < 100; iXa++) {   document.write('_'); }


///// DOS DIAS DO MES

document.write('<br><br> ');
var mes100 	= Math.round(dia/30*100);
document.write(dia + ' dias do Mes');
document.write(' e <br> em Porcentagem <b>' + mes100 + '% do mês</b>');
document.write('<br><br>');

var iXc = 0;
for (; iXc < mes100; iXc++) {   document.write('|'); }
document.write('<br>');
var iXa = 0; for (; iXa < 100; iXa++) {   document.write('_'); }

