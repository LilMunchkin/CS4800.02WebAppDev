<template>
  <NavBar />

  <div class="container">
    <form @submit="postData" method="post">
        <!-- textbox input for age [need some way to verify int] -->
        <h3>Age</h3>
        <input type="number" name="age" placeholder="Enter age" v-model.number="posts.age" >
        <br>
        <!-- radio button input for sex [female - 1, male - 2] -->
        <h3>Sex</h3>
        <input type="radio" name="sex" id="female" v-bind:value="a" v-model="posts.sex"  >
        <label for="female">Female</label><span></span>
        <input type="radio" name="sex" id="male" v-bind:value="b" v-model="posts.sex" >
        <label for="male">Male</label>
        <br>
        <!-- radio button input for patient type [outpatient - 1, inpatient - 2] -->
        <h3>Patient Type</h3>
        <input type="radio" name="patient_type" id="outpatient" v-bind:value="a" v-model="posts.patient_type" >
        <label for="outpatient">Outpatient</label>
        <input type="radio" name="patient_type" id="inpatient" v-bind:value="b" v-model="posts.patient_type" >
        <label for="inpatient">Inpatient</label>
        <br>
        <!-- radio button input for pneumonia status [yes - 1, no - 2] -->
        <h3>Pneumonia</h3>
        <input type="radio" name="pneumonia" id="yes" v-bind:value="a" v-model="posts.pneumonia" >
        <label for="yes">Yes</label>
        <input type="radio" name="pneumonia" id="no" v-bind:value="b" v-model="posts.pneumonia" >
        <label for="no">No</label>
        <br>
        <!-- radio button input for pregnancy status [yes - 1, no - 2] -->
        <h3>Pregnancy</h3>
        <input type="radio" name="pregnancy" id="yes" v-bind:value="a" v-model="posts.pregnancy" >
        <label for="yes">Yes</label>
        <input type="radio" name="pregnancy" id="no" v-bind:value="b" v-model="posts.pregnancy" >
        <label for="no">No</label>
        <br>
        <!-- radio button input for diabetes status [yes - 1, no - 2] -->
        <h3>Diabetes</h3>
        <input type="radio" name="diabetes" id="yes" v-bind:value="a" v-model="posts.diabetes" >
        <label for="yes">Yes</label>
        <input type="radio" name="diabetes" id="no" v-bind:value="b" v-model="posts.diabetes" >
        <label for="no">No</label>
        <br>
        <!-- radio button input for chronic obstructive pulmonary disease(copd) status [yes - 1, no - 2] -->
        <h3>Chronic Obstructive Pulmonary Disease(COPD)</h3>
        <input type="radio" name="copd" id="yes" v-bind:value="a" v-model="posts.copd" >
        <label for="yes">Yes</label>
        <input type="radio" name="copd" id="no" v-bind:value="b" v-model="posts.copd" >
        <label for="no">No</label>
        <br>
        <!-- radio button input for asthma status [yes - 1, no - 2] -->
        <h3>Asthma</h3>
        <input type="radio" name="asthma" id="yes" v-bind:value="a" v-model="posts.asthma" >
        <label for="yes">Yes</label>
        <input type="radio" name="asthma" id="no" v-bind:value="b" v-model="posts.asthma" >
        <label for="no">No</label>
        <br>
        <!-- radio button input for immune suppression status [yes - 1, no - 2] -->
        <h3>Immune Suppression</h3>
        <input type="radio" name="inmsupr" id="yes" v-bind:value="a" v-model="posts.inmsupr" >
        <label for="yes">Yes</label>
        <input type="radio" name="inmsupr" id="no" v-bind:value="b" v-model="posts.inmsupr" >
        <label for="no">No</label>
        <br>
        <!-- radio button input for hypertension status [yes - 1, no - 2] -->
        <h3>Hypertension</h3>
        <input type="radio" name="hypertension" id="yes" v-bind:value="a" v-model="posts.hypertension" >
        <label for="yes">Yes</label>
        <input type="radio" name="hypertension" id="no" v-bind:value="b" v-model="posts.hypertension" >
        <label for="no">No</label>
        <br>
        <!-- radio button input for other disease [yes - 1, no - 2] -->
        <h3>Other Disease</h3>
        <input type="radio" name="other_disease" id="yes" v-bind:value="a" v-model="posts.other_disease" >
        <label for="yes">Yes</label>
        <input type="radio" name="other_disease" id="no" v-bind:value="b" v-model="posts.other_disease" >
        <label for="no">No</label>
        <br>
        <!-- radio button input for cardiovascular status [yes - 1, no - 2] -->
        <h3>Cardiovascular Disease</h3>
        <input type="radio" name="cardiovascular" id="yes" v-bind:value="a" v-model="posts.cardiovascular">
        <label for="yes">Yes</label>
        <input type="radio" name="cardiovascular" id="no" v-bind:value="b" v-model="posts.cardiovascular">
        <label for="no">No</label>
        <br>
        <!--- radio button input for obesity status [yes - 1, no - 2] -->
        <h3>Obesity</h3>
        <input type="radio" name="obesity" id="yes" v-bind:value="a" v-model="posts.obesity" >
        <label for="yes">Yes</label>
        <input type="radio" name="obesity" id="no" v-bind:value="b" v-model="posts.obesity" >
        <label for="no">No</label>
        <br>
        <!-- radio button input for renal chronic status [yes - 1, no - 2] -->
        <h3>Renal Chronic</h3>
        <input type="radio" name="renal_chronic" id="yes" v-bind:value="a" v-model="posts.renal_chronic" >
        <label for="yes">Yes</label>
        <input type="radio" name="renal_chronic" id="no" v-bind:value="b" v-model="posts.renal_chronic" >
        <label for="no">No</label>
        <br>
        <!-- radio button input for whether patient smokes tobacco [yes - 1, no - 2] -->
        <h3>Does the patient smoke tobacco?</h3>
        <input type="radio" name="tobacco" id="yes" v-bind:value="a" v-model="posts.tobacco" >
        <label for="yes">Yes</label>
        <input type="radio" name="tobacco" id="no" v-bind:value="b" v-model="posts.tobacco" >
        <label for="no">No</label>
        <br>
        <!-- radio button input for intubed status [yes - 1, no - 2] -->
        <h3>Has the patient been on a ventilator?</h3>
        <input type="radio" name="intubed" id="yes" v-bind:value="a" v-model="posts.intubed" >
        <label for="yes">Yes</label>
        <input type="radio" name="intubed" id="no" v-bind:value="b" v-model="posts.intubed" > 
        <label for="no">No</label>
        <br>
        <!-- radio button input for whether patient has had contact with other covid patients [yes - 1, no - 1] -->
        <h3>Has the patient been in contact with other COVID-19 patients?</h3>
        <input type="radio" name="contact_other_covid" id="yes" v-bind:value="a" v-model="posts.contact_other_covid" >
        <label for="yes">Yes</label>
        <input type="radio" name="contact_other_covid" id="no" v-bind:value="b" v-model="posts.contact_other_covid" >
        <label for="no">No</label>
        <br>
        <!-- radio button input for whether patient is resistant to covid [yes - 1, no - 2] -->
        <h3>Is the patient resistant to COVID-19?</h3>
        <input type="radio" name="covid_res" id="yes" v-bind:value="a" v-model="posts.covid_res" >
        <label for="yes">Yes</label>
        <input type="radio" name="covid_res" id="no" v-bind:value="b" v-model="posts.covid_res">
        <label for="no">No</label>
        <br>
        <!-- radio button input for whether patient was in the icu [yes - 1, no - 2] -->
        <h3>Has the patient stayed in the ICU?</h3>
        <input type="radio" name="icu" id="yes" v-bind:value="a" v-model="posts.icu" >
        <label for="yes">Yes</label>
        <input type="radio" name="icu" id="no" v-bind:value="b" v-model="posts.icu" >
        <label for="no">No</label>
        <br>
        <button type="submit" @click="display = !display" >Submit</button>
      </form>
    </div>

    <div class="outcome" v-show="display">
      <h1>Results</h1>
      <h3 v-if="final == 0">The patient is not likely to die of COVID-19.</h3>
      <h3 v-if="final == 1">The patient is likely to die of COVID-19.</h3>
      <button type="close" @click="display = !display">Close</button>
    </div>
</template>

<script>
import NavBar from './NavBar'
//importing Axios for API
import axios from 'axios'

export default {
    name: 'Form',
    components: {
      NavBar,
    },
    //Form Data [ null value = 0 ]
    data(){
      return {
        a: 1,
        b: 2, 
        //Form Data
        posts:{
          sex: 0,
          patient_type: 0,
          intubed: 0,
          pneumonia: 0,
          age: 0,
          pregnancy: 0,
          diabetes: 0,
          copd: 0,
          asthma: 0,
          inmsupr: 0,
          hypertension: 0,
          other_disease: 0,
          cardiovascular: 0,
          obesity: 0,
          renal_chronic: 0,
          tobacco: 0,
          contact_other_covid: 0,
          covid_res: 0,
          icu: 0
        },
        //POST Request Result
        final: 0,
        display: false,
      }
    },
    methods:{
      //POST Request
      postData(e)
      {
        const url = "https://localhost:8080/Production/patient";
        const data = JSON.stringify(this.posts);

        axios.post(url, data, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          }
        })
        .then((result)=>{
          console.warn(result.data),
          this.final = result.data
        });
        e.preventDefault();
      },
    }
}
</script>

<style scoped>
*{
  padding : 0;
  font-family: 'Anton',sans-serif;
}

label{
  margin-right: 2%;
}

.container{
  width: 560px;
  margin: 8% auto;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  text-align: center;
  background: #d9d9d9;
}

form button{
  margin: 10%;
  width: 110px;
  height: 35px;
  /*margin: 0 10px;*/
  background: linear-gradient(to right, #ff105f, #ffad06);
  border-radius: 30px;
  border: 0;
  outline: none;
  color: #fff;
  cursor: pointer;
}

.outcome {
    width: 50%;
    height: 25%;
    top: 75%;
    left: 25%;
    border-radius: 5px;
    position: absolute;
    background: black;
    color: white;
    text-align: center;
    z-index: 5;
    padding-bottom: 1%;
}

button {
  width: 110px;
  height: 35px;
}
</style>
