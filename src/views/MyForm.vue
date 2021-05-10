<template>
  <div class="container">
    <div class="navbar">
      <img src="../assets/logo.png" class ="logo">
      <a class="menu-btn"><img src="../assets/menu (2).png" ></a>
      <div class="overlay">
        <div class="text">
          <ul>
            <a href="/" style="text-decoration: none;"><li>Home</li></a>
            <a href="/MyForm" style="text-decoration: none;"><li>Start a Test</li></a>
            <a href="" style="text-decoration: none;"><li>How to Protect</li></a>
          </ul>
        </div>
      </div>
    </div>
    <div class="small-covid">
      <img src="../assets/v7_10.png" class="small-cov">
    </div>
    
    <div>
      <form @submit="postData" method="post">
        <!-- textbox input for age [need some way to verify int] -->
        <h3>Age</h3>
        <input type="text" name="age" placeholder="Enter age" v-model="posts.age">
        <br>
        <!-- radio button input for sex [female - 1, male - 2] -->
        <h3>Sex</h3>
        <input type="radio" name="sex" id="female" value="1" v-model="posts.sex">
        <label for="female">Female</label>
        <input type="radio" name="sex" id="male" value="2" v-model="posts.sex">
        <label for="male">Male</label>
        <br>
        <!-- radio button input for patient type [outpatient - 1, inpatient - 2] -->
        <h3>Patient Type</h3>
        <input type="radio" name="patient_type" id="outpatient" value="1" v-model="posts.patient_type">
        <label for="outpatient">Outpatient</label>
        <input type="radio" name="patient_type" id="inpatient" value="2" v-model="posts.patient_type">
        <label for="inpatient">Inpatient</label>
        <br>
        <!-- radio button input for intubed status [yes - 1, no - 2] -->
        <h3>Intubed</h3>
        <input type="radio" name="intubed" id="yes" value="1" v-model="posts.intubed">
        <label for="yes">Yes</label>
        <input type="radio" name="intubed" id="no" value="2" v-model="posts.intubed"> 
        <label for="no">No</label>
        <br>
        <!-- radio button input for pneumonia status [yes - 1, no - 2] -->
        <h3>Pneumonia</h3>
        <input type="radio" name="pneumonia" id="yes" value="1" v-model="posts.pneumonia">
        <label for="yes">Yes</label>
        <input type="radio" name="pneumonia" id="no" value="2" v-model="posts.pneumonia">
        <label for="no">No</label>
        <br>
        <!-- radio button input for pregnancy status [yes - 1, no - 2] -->
        <h3>Pregnancy</h3>
        <input type="radio" name="pregnancy" id="yes" value="1" v-model="posts.pregnancy">
        <label for="yes">Yes</label>
        <input type="radio" name="pregnancy" id="no" value="2" v-model="posts.pregnancy">
        <label for="no">No</label>
        <br>
        <!-- radio button input for diabetes status [yes - 1, no - 2] -->
        <h3>Diabetes</h3>
        <input type="radio" name="diabetes" id="yes" value="1" v-model="posts.diabetes">
        <label for="yes">Yes</label>
        <input type="radio" name="diabetes" id="no" value="2" v-model="posts.diabetes">
        <label for="no">No</label>
        <br>
        <!-- radio button input for chronic obstructive pulmonary disease(copd) status [yes - 1, no - 2] -->
        <h3>Chronic Obstructive Pulmonary Disease(COPD)</h3>
        <input type="radio" name="copd" id="yes" value="1" v-model="posts.copd">
        <label for="yes">Yes</label>
        <input type="radio" name="copd" id="no" value="2" v-model="posts.copd">
        <label for="no">No</label>
        <br>
        <!-- radio button input for asthma status [yes - 1, no - 2] -->
        <h3>Asthma</h3>
        <input type="radio" name="asthma" id="yes" value="1" v-model="posts.asthma">
        <label for="yes">Yes</label>
        <input type="radio" name="asthma" id="no" value="2" v-model="posts.asthma">
        <label for="no">No</label>
        <br>
        <!-- radio button input for immune suppression status [yes - 1, no - 2] -->
        <h3>Immune Suppression</h3>
        <input type="radio" name="immsupr" id="yes" value="1" v-model="posts.immsupr">
        <label for="yes">Yes</label>
        <input type="radio" name="immsupr" id="no" value="2" v-model="posts.immsupr">
        <label for="no">No</label>
        <br>
        <!-- radio button input for hypertension status [yes - 1, no - 2] -->
        <h3>Hypertension</h3>
        <input type="radio" name="hypertension" id="yes" value="1" v-model="posts.hypertension">
        <label for="yes">Yes</label>
        <input type="radio" name="hypertension" id="no" value="2" v-model="posts.hypertension">
        <label for="no">No</label>
        <br>
        <!-- radio button input for other disease [yes - 1, no - 2] -->
        <h3>Other Disease</h3>
        <input type="radio" name="other_disease" id="yes" value="1" v-model="posts.other_disease">
        <label for="yes">Yes</label>
        <input type="radio" name="other_disease" id="no" value="2" v-model="posts.other_disease">
        <label for="no">No</label>
        <br>
        <!-- radio button input for cardiovascular status [yes - 1, no - 2] -->
        <h3>Cardiovascular</h3>
        <input type="radio" name="cardiovascular" id="yes" value="1" v-model="posts.cardiovascular">
        <label for="yes">Yes</label>
        <input type="radio" name="cardiovascular" id="no" value="2" v-model="posts.cardiovascular">
        <label for="no">No</label>
        <br>
        <!--- radio button input for obesity status [yes - 1, no - 2] -->
        <h3>Obesity</h3>
        <input type="radio" name="obesity" id="yes" value="1" v-model="posts.obesity">
        <label for="yes">Yes</label>
        <input type="radio" name="obesity" id="no" value="2" v-model="posts.obesity">
        <label for="no">No</label>
        <br>
        <!-- radio button input for renal chronic status [yes - 1, no - 2] -->
        <h3>Renal Chronic</h3>
        <input type="radio" name="renal_chronic" id="yes" value="1" v-model="posts.renal_chronic">
        <label for="yes">Yes</label>
        <input type="radio" name="renal_chronic" id="no" value="2" v-model="posts.renal_chronic">
        <label for="no">No</label>
        <br>
        <!-- radio button input for whether patient smokes tobacco [yes - 1, no - 2] -->
        <h3>Tobacco Usage</h3>
        <input type="radio" name="tobacco" id="yes" value="1" v-model="posts.tobacco">
        <label for="yes">Yes</label>
        <input type="radio" name="tobacco" id="no" value="2" v-model="posts.tobacco">
        <label for="no">No</label>
        <br>
        <!-- radio button input for whether patient has had contact with other covid patients [yes - 1, no - 1] -->
        <h3>Contact With Other Covid Patients</h3>
        <input type="radio" name="contact_other_covid" id="yes" value="1" v-model="posts.contact_other_covid">
        <label for="yes">Yes</label>
        <input type="radio" name="contact_other_covid" id="no" value="2" v-model="posts.contact_other_covid">
        <label for="no">No</label>
        <br>
        <!-- radio button input for covid_res [yes - 1, no - 2] -->
        <h3>Covid_Res</h3>
        <input type="radio" name="covid_res" id="yes" value="1" v-model="posts.covid_res">
        <label for="yes">Yes</label>
        <input type="radio" name="covif_res" id="no" value="2" v-model="posts.covid_res">
        <label for="no">No</label>
        <br>
        <!-- radio button input for whether patient was in the icu [yes - 1, no - 2] -->
        <h3>ICU Stay</h3>
        <input type="radio" name="icu" id="yes" value="1" v-model="posts.icu">
        <label for="yes">Yes</label>
        <input type="radio" name="icu" id="no" value="2" v-model="posts.icu">
        <label for="no">No</label>
        <br>
        <button type="submit">Submit</button>
      </form>
    </div>

    <!--<div class="btn-box">
      <button  type="button" id = "Back">Back </button>
      <button  type="Submit" id = "Submit" value="Send">Submit</button>
    </div>-->

    <!--<div class="step-row">
      <div id="progress"> </div>
      <div class="step-col"><small>Step 1</small></div>
      <div class="step-col"><small>Step 2</small></div>
      <div class="step-col"><small>Submit</small></div>
    </div>-->

    <!-- results page -->
    <!-- we can print different messages based on whether the 
    deceased value we receive is 0 or 1 -->
    <div>
      {{ results.deceased }}
    </div>
  </div>
</template>

<script>
//for API stuff
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import $ from 'jquery'

export default {
  name: "changeForm",
  data(){
    return {
      className: ''
    };
  },
  mounted (){
    const $icon = $('.menu-btn');
    const $menu = $('.overlay');
    const $data = $('.container2');
    $icon.on('click', function(){
    if(!$menu.hasClass('active')) {
 		  $menu.fadeIn().toggleClass('active');
      $data.fadeOut().removeClass('active');
    }else {
      $menu.fadeOut().removeClass('active');
      $data.fadeIn().removeClass('active');
    }
  });

    var Form1 = document.getElementById("Form1");
    var Form2 = document.getElementById("Form2");

    var Next = document.getElementById("Next");
    var Back = document.getElementById("Back");

    var progress = document.getElementById("progress");
    var submit = document.getElementById("Submit");

    Next.onclick = function(){
    Form1.style.left = "-450px";
    Form2.style.left = "40px";
    progress.style.width = "266.66px";  
    }

    Back.onclick = function(){
      Form1.style.left = "40px";
      Form2.style.left = "450px";
      progress.style.width = "133.33px";
    }
    submit.onclick = function(){
      progress.style.width = "400px";
    }

    //get request information
    Vue.axios.get('https://78r2cneiod.execute-api.us-east-2.amazonaws.com/Production/patient')
    .then((resp)=>{
      this.list=resp.data.data;
      console.warn(resp.data.data)

    })
  },
  data(){
    return{
      //form data for post request
      posts:{
        sex: null,
        patient_type: null,
        intubed: null,
        pneumonia: null,
        age: null,
        pregnancy: null,
        diabetes: null,
        copd: null,
        asthma: null,
        immsupr: null,
        hypertension: null,
        other_disease: null,
        cardiovascular: null,
        obesity: null,
        renal_chronic: null,
        tobacco: null,
        contact_other_covid: null,
        covid_res: null,
        icu: null
      },
      results: undefined
    }
  },
  //post request function
  methods:{
    postData(e)
    {
      this.axios.post("https://78r2cneiod.execute-api.us-east-2.amazonaws.com/Production/patient", this.ports)
      .then((result)=>{
        console.warn(result)
      })
      e.preventDefault();
    }
  }

}

</script>


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
