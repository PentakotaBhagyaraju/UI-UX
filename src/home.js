import React from "react";
import "./index.css";

const Home = () => {

    return (
      <div class="container-fluid">
      <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>                        
          </button>
          <a class="navbar-brand" href="#">Custom<br/>Cuisine</a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
    
            <li><a href="#">About Us</a></li>
            <li><a href="#"><button type="button" class="btn btn-default btn-sm button1" >
              <img class="cart" src="asserts/images/shopping-cart.png"/> Food Cart
            </button></a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#"><span class="glyphicon glyphicon-user"></span>
            </a></li>
            <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Log-out</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div><marquee behavior="alternate"><img class="image" src="asserts/images/logo.png"/></marquee></div>
    
    <div class="container-fluid"> 
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

  
    <div class="carousel-inner" id="slide">
      <div class="item active">
        <br/><br/><br/>
   <div class="row">
       <div class="col-lg-4 card-padding">
         <div class="card" >
            <img src="asserts/images/s7.png"/><br/>
          
         </div>
      </div>
      <div class="col-lg-4 card-padding">
         <div class="card">
            <img src="asserts/images/s8.jpg"/><br/>
         
         </div>
      </div>
      <div class="col-lg-4 card-padding">
         <div class="card">
            <img src="asserts/images/s9.png"/><br/>
        
         </div>
      </div>
      </div>
<br/><br/><br/>
    </div>

      <div class="item" id="slide">
        <br/><br/><br/>
        <div class="row">
       <div class="col-lg-4 card-padding">
         <div class="card">
            <img src="asserts/images/s4.png"/>
            
         </div>
      </div>
      <div class="col-lg-4 card-padding">
         <div class="card">
            <img src="asserts/images/s5.png"/>
          
         </div>
      </div>
      <div class="col-lg-4 card-padding">
         <div class="card">
            <img src="asserts/images/s6.jpg"/>
            
         </div>
      </div>
      </div><br/><br/><br/>
    </div>

      <div class="item " id="slide">
        <br/><br/><br/>

          <div class="row">
       <div class="col-lg-4 card-padding">
         <div class="card">
            <img src="asserts/images/s1.png"/>
            
         </div>
      </div>
      <div class="col-lg-4 card-padding">
         <div class="card">
            <img src="asserts/images/s2.png"/>
         
         </div>
      </div>
      <div class="col-lg-4 card-padding">
         <div class="card">
            <img src="asserts/images/s3.png"/>
           
         </div>
      </div>
      </div>
     


     <br/><br/><br/>
    </div>

      
    </div>

    
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
    
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>

    </a>
  </div>
</div>

    </div>
    );


}

export default Home;