<template>
    <body>
        <div class="asn">
            <h1>Asanas</h1><br>
            <ul style= "list-style-type:disc; ">
              <li><a href="./Bhujangasana">Bhujangasana</a></li><br>
              <li><a href="./Padmasana">Padmasana</a></li><br>
              <li><a href="./TadaSana">TadaSana</a></li><br>
              <li><a href="./Vajrasana">Vajrasana</a></li><br>
              <li><a href="./paschimottanasana">Paschimottanasana</a></li>
            </ul>
        </div>
    </body>
</template>

<script>
export default {
  name: 'asaNas',
  components: {
  },
  data() {
    return {
    };
  },
};
</script>

<style>
.asn {
  justify-content:center;
  align-items:center;
  margin-left: -25%;
  background-color: rgb(248, 211, 211);
  position:relative;
  width: 400px;
  height: 400px;
  border-radius: 8px;
}
.asn h1 {
color: #141717;
  opacity: 55%;
  position:relative;
}
body {
    display:flex;
    justify-content:center;
    align-items:center;
    min-height: 100vh;
    background-color: antiquewhite;
}
</style>
