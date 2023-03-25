<template>
    <body>
        <div class="prn">
            <h1>Pranayamas</h1><br>
            <ul style= "list-style-type:disc; ">
              <li><a href="./Bhastrika">Bhastrika Pranayama</a></li><br>
              <li><a href="./Bhramari">Bhramari Pranayama</a></li><br>
              <li><a href="./nadisuddi">Nadishuddhi Pranayama</a></li><br>
              <li><a href="./Shitali">Shitali Pranayama</a></li><br>
            </ul>
        </div>
        <div class="prna">
            <h1>Meditation</h1><br>
            <ul style= "list-style-type:disc; ">
              <li ><a href="./pranavamed">Pranava Meditation</a></li><br>
              <li ><a href="./Soham">So-ham Meditation</a></li><br>
            </ul>
        </div>
    </body>
</template>

<script>
export default {
  name: 'pranaYama',
  components: {
  },
  data() {
    return {
    };
  },
};
</script>

<style>
.prn {
  justify-content:center;
  align-items:center;
  margin-left: -25%;
  background-color: rgb(248, 211, 211);
  position:relative;
  width: 400px;
  height: 350px;
  border-radius: 8px;
}
.prna {
  justify-content:center;
  align-items:center;
  margin-left: 30%;
  background-color: rgb(248, 211, 211);
  position:relative;
  width: 400px;
  height: 350px;
  border-radius: 8px;
}
h1 {
  margin-left: 10%;
  color: black;
  opacity: 55%;
  position:relative;
}
body {
    display:flex;
    min-height: 100vh;
    background-color: antiquewhite;
}
</style>
