/*

$(document).ready(function(){
  $('.delete-article').on('click',function(e){
    $target = $(e.target);
    const id = $target.attr('data-id');
    $.ajax({
      type:"DELETE",
      url:'/article/'+id,
      succes: function(response){
        alert('Deleting Article');
        windowd.location.href='/';//going back
      }
      error: function(err){
        console.log(err);
      }
    })
  })
})


window.addEventListener( "load", function () {
    function sendData() {
      const XHR = new XMLHttpRequest();
      // Bind the FormData object and the form element
      const FD = new FormData( form );
      // Define what happens on successful data submission
      XHR.addEventListener( "load", function(event) {
        alert( event.target.responseText );
      } );
      // Define what happens in case of error
      XHR.addEventListener( "error", function( event ) {
        alert( 'Oops! Something went wrong.' );
      } );
      // Set up our request
      XHR.open( "POST", "https://example.com/cors.php" );
      // The data sent is what the user provided in the form
      XHR.send( FD );
    }
    // Access the form element...
    let form = document.getElementById( "myForm" );
    // ...and take over its submit event.
    form.addEventListener( "submit", function ( event ) {
      event.preventDefault();
      sendData();s
    } );
  } );*/
  
  function mOver(obj) {
    obj.innerHTML = "Revin-o"
  }
  
  function mOut(obj) {
    obj.innerHTML = "Esti gata sa te intorci?"
  }
/*  
var counterArticles = 0;
function adaugareDeArticol() {
  var newArticle = document.createElement("div");
  var textNode = document.createTextNode("Acesta este noul articol");
  newArticle.append(textNode);
  counterArticles+=1;
  var s = "div" + counterArticles ; 
  newArticle.setAttribute("id","s");
  newArticle.setAttribute("name","article");
  elmnt.add();
}

function stergereDeArticol(myId) {
  var elmnt = document.getElementById(myId);
  elmnt.remove();
}

function editareDeArticol(myId){
  var elmnt = document.getElementById("p");
  elmnt.remove();
}


    var express = require("express");
    var router = express.Router();
    var app =  express();
    function preload(){

    }
    app.get('/',function(req,res)
    {
       res.send("GET Hello world")
    });
    app.post('/',function(req,res)
    {
       res.send("POST hello world")
    });
    app.put('/',function(req,res)
    {
       res.send("PUT world")
    });
    app.update('/',function(req,res)
    {
       res.send("hello world")
    });
    app.delete('/',function(req,res)
    {
       res.send("hello world")
    });

    function myFunction() {
      console.log('a');
      var x = document.getElementById("myText").form.id;
      document.getElementById("demo").innerHTML = x;
    }
  

  function adaugaArticol(){
    counterArticles+=1;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
    if(xmlhttp.readyState==4 && xmlhttp.status==200)
        alert("webpage " + xmlhttp.responseText + " was successfully created!");
    }
    var content = "<html><head><meta charset=\"utf-8\" /> </head><body>new website<script>alert(\"test\")</script></body></html>";
    xmlhttp.open("GET","makePage.php?content=" + content,true);
    xmlhttp.send();
  }
  
  
  
  
  
  
  
  
  $(document).ready(function () {
    articolAdd();
  });
  function formClear() {
    $("#productname").val("");
    $("#introdate").val("");
    $("#url").val("");
  }
  function articolUpdate() {
    if ($("#articolname").val() != null &&
        $("#articolname").val() != '') {
      articleAddToTable();
      formClear();
      $("#articolname").focus();
    }
  }
  function articolDelete(ctl) {
    $(ctl).parents("tr").remove();
  }
  */























  window.onload = function( ){
document.getElementById("btnsave").addEventListener("onclick",helloWorld, false);
}

  function helloWorld()
   {
    var express=require('express');
    var app=express();
    app.get('/',function(req,res)
    {   
      res.send('Hello World!'); 
      });
     var server=app.listen(3000,function() {});
  }
 let counterArticles = 0;
 let articles = [
   {
     title:"Padurea Calugarita",
     author:"Istrati Lucian",
     content:"ABC"
   },
   {
    title:"Biserica Adormirea Maicii Domnului",
     author:"Istrati Lucian",
     content:"ABC"
   }
 ];
 function displayNoOfArticles(index)
 {
    let first=0;
    console.log(counterArticles);
 }