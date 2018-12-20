/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
        
    });
function name(answer){
    if (answer === "Red") {
        return "4" ;
    }
     else if (answer === "Pink") {
         return "2";
    } else if (answer === "Brown"){
        return "3";
    } else if (answer === "Black"){
        return "1";
    }
 
function question1(answer){
    if (answer === "") {
        return "4" ;
    }
     else if (answer === "") {
         return "3";
    } else if (answer === ""){
        return "2";
    } else if (answer === ""){
        return "1";
    }

function question2(answer){
    if (answer === "") {
        return "4" ;
    }
     else if (answer === "") {
         return "3";
    } else if (answer === ""){
        return "2";
    } else if (answer === ""){
        return "1";
    }

});
