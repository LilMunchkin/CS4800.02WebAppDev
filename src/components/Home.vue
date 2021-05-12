<template>
  <NavBar />
    <div class="about-section">
        <div class="floating-covid">
            <img src="../assets/v7_10.png" class="small-cov">
        </div>
        <div class="about-text">
            <div class="info">
                <h1>COVID<span>-19</span></h1>
                <p>Coronavirus</p>
                <h3>One of the biggest challenges of the COVID-19 pandemic 
                    is the shortage of medical resources and a proper plan to 
                    efficiently distribute them. Using a dataset, this web application
                    can predict whether a patient may survive or pass due to 
                    COVID-19.</h3>
                <TestButton />
            </div>
        </div>
        <div class="about-images">
            <img src="../assets/v7_23.png" class="controller">
        </div>
    </div>
</template>

<script>
import NavBar from './NavBar'
import TestButton from './TestButton'

export default {
    name: 'Home',
    components: {
      NavBar,
      TestButton
    }
}
</script>

<style scoped>
.about{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 100px 0;
  width: 100%;
}

.about-text{
  flex-basis: 40%;
  position: relative;
  padding-left: 5%;
  padding-bottom: 5%;
  padding-right: 5%;
  padding-top: 0.2%;
  width: 50%; 
  text-align: center;
}

.about-text h1{
  font-size: 120px;
  color: #38537B;
  margin-top: -5%;
}

.about-text h1 span{
  font-size:120px;
  color: #935C5C;
}

.about-text h3{
  font-size:30px;
  color: black;
  font-weight: 100;
}

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

.about-text p{
  font-size:30px;
  color: #FFB9BF;
  font-weight: 100;
  margin-top: -15%;
}

.controller{
  bottom: 0;
  right: 0;
  width: 60%;
  opacity: 95%;
  position: fixed;
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

</style>