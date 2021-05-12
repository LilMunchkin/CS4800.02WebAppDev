<template>
    <div class="navbar">
        <img src="../assets/logo.png" class="logo">
        <button @click="display = !display" class="menu-btn"><img src="../assets/menu(2).png"></button>
        <div class="overlay" v-show="display">
        <ul>
            <router-link to='/'><li>Home</li></router-link>
            <router-link to='/form'><li>Start a Test</li></router-link>
            <a href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"><li>How to Protect Yourself</li></a>
            <a href="https://covid19.ca.gov/vaccines/"><li>Get Vaccinated</li></a>
         </ul>
     </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    data(){
        return{
            display: false
        }
    },
}

</script>

<style scoped>

.navbar{
    width: 100%;
    display: flex;
    align-items: center;
}

.logo{
    width: 100px;
    cursor: pointer;
    margin:30px 0;
    margin-left: 15px;
}

.menu-btn{
    position: absolute;
    right: 100px;
    z-index: 10;
    cursor: pointer;

    appearance: none;
    background: transparent;
    border: none;
    display: block;

    width: 20px;
}

.overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #0066ff;
    z-index: 5;
}

ul{
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
</style>