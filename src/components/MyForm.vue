<template>
<html>

<head>
  <meta name="viewport" content="width= device-width, initial-scale=1.0">
  <title>Home</title>
  <link href="style.css" rel="stylesheet" /> 
  <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Anton" />
</head>

<body>
  <div class="container">
    <div class="navbar">
      <img src="../assets/logo.png" class ="logo">
      <a class="menu-btn"><img src="../assets/menu (2).png" ></a>
      <div class="overlay">
        <div class="text">
          <ul>
            <a href="../Home/index.html" style="text-decoration: none;"><li>Home</li></a>
            <a href="index.html" style="text-decoration: none;"><li>Start a Test</li></a>
            <li>How to Protect</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="small-covid">
      <img src="../assets/v7_10.png" class="small-cov">
    </div>

      <!-- "Step 1 to form" -->
    <div id="app" class="container2">
    <form id="Form1">
 
     <h3>Age</h3>
      <input v-model="age" type="text" placeholder="Enter age" required>
      <br><br>

      <h3>Ethnicity</h3>
      <label for="Ethnicity">
        <select name="ethnicity" id="ethnicity" v-model="ethnicity">
          <option disabled value="" selected>Select One</option>
          <option value="American Native or Alaska Native">American Native or Alaska Native</option>
          <option value="Asian">Asian</option>
          <option value="Black or African American">Black or African American</option>
          <option value="Hispanic or Latino">Hispanic or Latino</option>
          <option value="Native Hawaiian or Other Pacific Islander">Native Hawaiian or Other Pacific Islander</option>
          <option value="Caucacian">Caucacian</option>
        </select>
      </label>
      <br><br>
      <h3>Sex</h3>
        <input type="radio" id="male" value="male" name="sex" v-model="Sex">
        <label for="male">Male</label>
        <input type="radio" id="Female" value="Female" name="sex" v-model="Sex">
        <label for="female">Female</label>
        <input type="radio" id="Other" value="Other" name="Other" v-model="Sex">
        <label for="Other">Other</label>
        <br><br>

      <h3>Health Conditions</h3>
        <p>Asthma:</p>
        <input type="radio" id="yes" value="yes" name="asthma" v-model="asthma">
        <label for="yes">Yes</label>
        <input type="radio" id="no" value="no" name="asthma" v-model="asthma">
        <label for="no">No</label>
        <input type="radio" id="unknown" value="unknown" name="asthma" v-model="asthma">
        <label for="unknown">Unknown</label>
        <br><br>
        <p>Cardiovascular Disease:</p>
        <input type="radio" id="yes" value="yes" name="cardiovascular" v-model="cardiovascular">
        <label for="yes">Yes</label>
        <input type="radio" id="no" value="no" name="cardiovascular" v-model="cardiovascular">
        <label for="no">No</label>
        <input type="radio" id="unknown" value="unknown" name="cardiovascular" v-model="cardiovascular">
        <label for="unknown">Unknown</label>
        <br><br>
        <p>Chronic Lung Disease:</p>
        <input type="radio" id="yes" value="yes" name="chronic" v-model="chronic">
        <label for="yes">Yes</label>
        <input type="radio" id="no" value="no" name="chronic" v-model="chronic">
        <label for="no">No</label>
        <input type="radio" id="unknown" value="unknown" name="chronic" v-model="chronic">
        <label for="unknown">Unknown</label>
        <br><br>
        <p>Immune Suppression:</p>
        <input type="radio" id="yes" value="yes" name="immune" v-model="immune">
        <label for="yes">Yes</label>
        <input type="radio" id="no" value="no" name="immune" v-model="immune">
        <label for="no">No</label>
        <input type="radio" id="unknown" value="unknown" name="immune" v-model="immune">
        <label for="unknown">Unknown</label>
        <br><br>
        <p>Metabolic Disease:</p>
        <input type="radio" id="yes" value="yes" name="metabolic" v-model="metabolic">
        <label for="yes">Yes</label>
        <input type="radio" id="no" value="no" name="metabolic" v-model="metabolic">
        <label for="no">No</label>
        <input type="radio" id="unknown" value="unknown" name="metabolic" v-model="metabolic">
        <label for="unknown">Unknown</label>
      
      <div class="btn-box">
        <button type="button" id="Next">Next</button>
      </div>
    </form>

    <!-- Step 2 to form -->
    <form id="Form2">
      <h3>Health Conditions</h3>
        <p>Neurologic Disease:</p>
        <input type="radio" id="yes" value="yes" name="neurologic" v-model="neurologic">
        <label for="yes">Yes</label>
        <input type="radio" id="no" value="no" name="neurologic" v-model="neurologic">
        <label for="no">No</label>
        <input type="radio" id="unknown" value="unknown" name="neurologic" v-model="neurologic">
        <label for="unknown">Unknown</label>
        <br><br>
        <p>Autoimmune Disease:</p>
        <input type="radio" id="yes" value="yes" name="autoimmune" v-model="autoimmune">
        <label for="yes">Yes</label>
        <input type="radio" id="no" value="no" name="autoimmune" v-model="autoimmune">
        <label for="no">No</label>
        <input type="radio" id="unknown" value="unknown" name="autoimmune" v-model="autoimmune">
        <label for="unknown">Unknown</label>
        <br><br>
        <p>Renal Disease:</p>
        <input type="radio" id="yes" value="yes" name="renal" v-model="renal">
        <label for="yes">Yes</label>
        <input type="radio" id="no" value="no" name="renal" v-model="renal">
        <label for="no">No</label>
        <input type="radio" id="unknown" value="unknown" name="renal" v-model="renal">
        <label for="unknown">Unknown</label>
        <br><br>
        <p>Gastrointestinal/Liver Disease:</p>
        <input type="radio" id="yes" value="yes" name="gastrointestinal" v-model="gastrointestinal">
        <label for="yes">Yes</label>
        <input type="radio" id="no" value="no" name="gastrointestinal" v-model="gastrointestinal">
        <label for="no">No</label>
        <input type="radio" id="unknown" value="unknown" name="gastrointestinal" v-model="gastrointestinal">
        <label for="unknown">Unknown</label>
        <br><br>
        <p>Other Disease:</p>
        <input type="radio" id="yes" value="yes" name="other" v-model="other">
        <label for="yes">Yes</label>
        <input type="radio" id="no" value="no" name="other" v-model="other">
        <label for="no">No</label>
        <input type="radio" id="unknown" value="unknown" name="other" v-model="other">
        <label for="unknown">Unknown</label>
        <br><br>
        <p>Hypertension:</p>
        <input type="radio" id="yes" value="yes" name="hypertension" v-model="hypertension">
        <label for="yes">Yes</label>
        <input type="radio" id="no" value="no" name="hypertension" v-model="hypertension">
        <label for="no">No</label>
        <input type="radio" id="unknown" value="unknown" name="hypertension" v-model="hypertension">
        <label for="unknown">Unknown</label>
        <br><br>
        <p>Obesity:</p>
        <input type="radio" id="yes" value="yes" name="obesity" v-model="obesity">
        <label for="yes">Yes</label>
        <input type="radio" id="no" value="no" name="obesity" v-model="obesity">
        <label for="no">No</label>
        <input type="radio" id="unknown" value="unknown" name="obesity" v-model="obesity">
        <label for="unknown">Unknown</label>
        <br><br>
        <p>Pregnancy:</p>
        <input type="radio" id="yes" value="yes" name="pregnancy" v-model="pregnancy">
        <label for="yes">Yes</label>
        <input type="radio" id="no" value="no" name="pregnancy" v-model="pregnancy">
        <label for="no">No</label>
        <input type="radio" id="unknown" value="unknown" name="pregnancy" v-model="pregnancy">
        <label for="unknown">Unknown</label>

      <div class="btn-box">
        <button  type="button" id = "Back">Back</button>
        <button  type="Submit" id = "Submit" value="Send">Submit</button>
      </div>
    </form>

    <div class="step-row">
      <div id="progress"> </div>
      <div class="step-col"><small>Step 1</small></div>
      <div class="step-col"><small>Step 2</small></div>
      <div class="step-col"><small>Submit</small></div>

    </div>

  </div>

  </div>

</body>

</html>

</template>





<style>
*{
  margin : 0;
  padding : 0;
  font-family: 'Anton',sans-serif;
  
}
body{
  background: rgb(136, 133, 133);
}
.container2{
  width: 400px;
  height: 810px;
  margin: 8% auto;
  background: rgb(255, 255, 255);
  border-radius: 5px;
  position: relative;
  overflow: hidden;
}
/*
h3{
  text-align: center;
  margin-bottom: 40px;
  color: #777;
}
*/

.container{
  width:100%;
  min-height: 100vh;
  padding-left: 5%;
  padding-right: 5%;
  box-sizing: border-box;
  overflow: hidden;
}
.container form{
  width: 280px;
  position: absolute;
  top: 100px;
  left: 40px;;
  transition: 0.5s;
}

#Form2{
  
  left: 450px; 
  
}


form button{
  width: 110px;
  height: 35px;
  margin: 0 10px;
  background: linear-gradient(to right, #ff105f, #ffad06);
  border-radius: 30px;
  border: 0;
  outline: none;
  color: #fff;
  cursor: pointer;

}

.btn-box{
  width: 100%;
  margin: 30px auto;
  text-align: center;
}


.navbar{
  width: 100%;
  display: flex;
  align-items: center;
}
.logo{
  width: 100px;
  cursor:pointer;
  margin:30px 0; 
}
.menu-icon{
  width: 25px;
  cursor:pointer;
}
.menu-button
nav{
  flex:1;
  text-align:right;
}
nav ul li{
  list-style: none;
  display: inline-block;
  margin-right: 30px;
}
nav ul li a{
  text-decoration: none;
  color: black;
  font-size: 14px;
}
nav ul li a:hover{
  color:coral;
}
.row{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 100px 0;
  width: 100%;
}
.col-1{
  flex-basis: 40%;
  position: relative;
  margin-left:0px;
}
.col-1 h1{
  font-size:120px;
  color: #38537B;
}
.col-1 h1 span{
  font-size:120px;
  color: #935C5C;
}

.col-1 h3{
  font-size:30px;
  color: black;
  font-weight: 100;
  margin:20px 100px 10px 0;
  
}
button{
  border-radius: 56px;
  cursor: pointer;
}
.button-div{
  text-align: center;
  margin-right: 30%;
}
.button-1{
  margin-top: 5%;
  width: 140px;
  border:0;
  padding: 12px 10px;
  outline:none;
  color: #fff;
  background: linear-gradient(to right,#ECAB7C,#E9965A)
}
/* .col-1::after{
  content:'';
  width:40%;
  height:80%;
  background: url("images/v7_10.png");
  position: absolute;
  left: -130px;
  top: -130px;
} */
.small-cov{
  top: 10%;
  left: 0;
  width: 14%;
  opacity: 95%;
  position: absolute;
  z-index: -1;
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
  animation-direction: alternate;

}
.col-1 p{
  font-size:30px;
  color: #FFB9BF;
  font-weight: 100;
  padding-left: 10%;
  margin-top: -3%;
}
.controller{
  bottom: 0;
  right: 0;
  width: 60%;
  opacity: 95%;
  position: absolute;
  z-index: -1;
}

@keyframes slidein {
  from {
    top: 10%;
    left: 0;
    width: 14%;
  }

  to {
    top: 9%;
    left: 3%;
    width: 14%;;
  }
}


/* menubar */
@import url(https://fonts.googleapis.com/css?family=Droid+Sans);

.overlay {
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: pink;
}

ul {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

ul li{
  list-style-type: none;
  margin: 20px 0;
  font-size: 33px;
  text-transform: uppercase;
  transition: all 0.2s ease;
  cursor: pointer;
  color: #fff;
}
ul li:hover{
    transform: translateX(-10px);
  }
.menu-btn {
  position: absolute;
  right: 100px;
  z-index: 10;
  cursor: pointer;
  
  appearance: none;
  background: #fff;
  border: 0 none;
  display: block;
  
  width: 20px;
}
.menu-btn:active,
.menu-btn:focus {
    outline: 0 none;
  }
  
  .menu-btn:before,
  .menu-btn:after {
    background: #fff;
    content: '';
    display: block;
    height: 2px;
    width: 20px;
  }
  .step-row{
    width:400px;
    height: 40px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    box-shadow: 0 -1px 5px -1px #000;
    position: relative;

  }
  
  .step-col{
    width:133.3px;
    text-align: center;
    color: #333;
    position: relative;

  }
  #progress{

    position:absolute;
    height:100%;
    width:133.3px;
    background: linear-gradient(to right, #ff105f, #ffad06);
    transition: 1s;
  }
  #progress::after{
    content:'';
    height: 0;
    width: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    position: absolute;
    right: -20px;
    top: 0;
    border-left: 20px solid #ffad06;
    

  }

</style>
