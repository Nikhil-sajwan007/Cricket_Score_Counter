$(document).ready(function(){

// All buttons functions 

runCount = 0;

var dot = function(){

    $('ul').append('<li class = "list">0</li>');
    

}

var one = function(){

    $('ul').append('<li class = "list">1</li>');
    
    
    runCount = runCount + 1
    $('#run-Count').text(runCount)
  

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
    
var six = function(){

    $('ul').append('<li class = "list">6</li>');


}

var noBall = function(){

    $('ul').append('<li class = "list">NB<sup>+1</sup></li>');


}  

var wideBall = function(){

    $('ul').append('<li class = "list">WB<sup>+1</sup></li>');


}

var reset = function(){

    $('ul li').remove()
}

var undo = function(){

    $('ul li:last-child').remove()
}

$('#dotBtn').on("click", dot);
$('#oneBtn').on("click", one);
$('#twoBtn').on("click", two);
$('#threeBtn').on("click", three);
$('#fourBtn').on("click", four);
$('#sixBtn').on("click", six);
$('#noBall').on("click", noBall);
$('#wideBall').on("click", wideBall);
$('#reset').on("click", reset);
$('#undo').on("click", undo);


// ALL button function ends here 




});


