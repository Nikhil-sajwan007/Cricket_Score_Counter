$(document).ready(function(){

// All buttons functions 

var dot = function(){

    $('ul').append('<li class = "list">0</li>');


}

var one = function(){

    $('ul').append('<li class = "list">1</li>');


}

var two = function(){

    $('ul').append('<li class = "list">2</li>');


}

var three = function(){

    $('ul').append('<li class = "list">3</li>');


}
    
var four = function(){

    $('ul').append('<li class = "list">4</li>');


}   
    
    

$('#dotBtn').on("click", dot);
$('#oneBtn').on("click", one);
$('#twoBtn').on("click", two);
$('#threeBtn').on("click", three);
$('#fourBtn').on("click", four);









});