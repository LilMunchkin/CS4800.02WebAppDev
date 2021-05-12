<template>
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
        <button type="submit">Submit</button>
      </form>
    </div>
</template>

<script>
//importing Axios for API
import axios from 'axios'

export default {
    name: 'Form',
    //Form Data [ null value = 0 ]
    data(){
      return {
        a: 1,
        b: 2, 
        posts:{
          sex: 1,
          patient_type: 1,
          intubed: 1,
          pneumonia: 1,
          age: 50,
          pregnancy: 1,
          diabetes: 1,
          copd: 1,
          asthma: 1,
          inmsupr: 1,
          hypertension: 1,
          other_disease: 1,
          cardiovascular: 1,
          obesity: 1,
          renal_chronic: 1,
          tobacco: 1,
          contact_other_covid: 1,
          covid_res: 1,
          icu: 1
        }
      }
    },
    methods:{
      //POST Request
      postData(e)
      {
        //console.warn(this.posts);
        const url = "https://localhost:8080/Production/patient";
        const data = JSON.stringify(this.posts);
        //const json = JSON.parse(data);

        //console.warn(data);

        axios.post(url, data, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          }
        })
        .then((result)=>{
          console.warn(result);
        });
        e.preventDefault();
      },
    }
}
</script>

<style scoped>
*{
  padding : 0;
}

label{
  margin-right: 2%;
}
</style>