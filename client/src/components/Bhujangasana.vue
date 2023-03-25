<template>
  <div class="bhu">
     <h1 class="text-black-50">Bhujangasana [Cobra Pose]</h1><br>
        <p class="text-black-50">Bhujangasana (Cobra Stretch) comes from the word bhujanga meaning
         cobra or snake and asana meaning pose. Bhujangasana or Cobra Stretch
         is a solution to solve these and many other problems, just sitting
         (or lying down) at home! Bhujangasana, the Cobra Pose, is a pose that
         you do while lying down on your stomach. It gives your body (especially
         the back), a good stretch that melts your stress away almost instantly!</p><br><br>
        <div>
            <div class="text-black-50"><h2>Steps</h2><br>
            <ul style= "list-style-type: upper-roman; ">
                <li>Lie down on your stomach with your toes flat on the floor,<br>
                    soles facing upwards; rest your forehead on the ground.</li><br>
                <li> Keep your legs close together, with your feet and heels<br>
                     lightly touching each other.</li><br>
                <li>Place both hands in such a way that palms are touching<br>
                    ground under your shoulders, elbows should be parallel<br> and
                     close to your torso. </li><br>
                <li>Taking a deep breath in, slowly lift your head, chest<br>
                    and abdomen. Keep your navel on the floor.</li><br>
                <li> Maintain the pose while breathing evenly for 4-5 breaths. </li><br>
                <li>Now, breathe out, and gently bring your abdomen, chest,<br>
                    and head back to the floor and relax.</li>
            </ul></div>
            <div class="bhim"></div>
            <div class="text-black-50 bn">
                <h2>Benefits</h2><br>
                <ul style= "list-style-type: square; ">
                <li>Opens up the shoulders and neck to relieve pain</li>
                <li>Tones the abdomen</li>
                <li>Strengthens the entire back and shoulders</li>
                <li>Improves flexibility of the upper and middle back</li>
                <li>Expands the chest</li>
                <li>Improves blood circulation</li>
                <li>Reduces fatigue and stress</li>
                <li>Useful for people with respiratory disorders such as asthma</li><br><br>
                </ul>
            </div>
        </div>
 </div>
</template>

<script>
export default {
  name: 'BhujangAsana',
  components: {
  },
  data() {
    return {
    };
  },
};
</script>

<style>
.bhu {
    margin-top: 100px;
    margin-left: 50px;
    font-family: 'Futara Arial, sans-serif';
    font-size: 1.5em;
    font-weight:normal;
}
.bhim {
  border-radius: 20px;
  margin-top: -620px;
  margin-left: 620px;
  background-image: url('../assets/bhujangasana.png');
  background-size:contain;
  width:580px;
  height: 360px;
  opacity: 50%;
}
.bn {
    position: relative;
    margin-top: 350px;
}
 body {
    display:flex;
    justify-content:center;
    align-items:center;
    min-height: 100vh;
    background-color: antiquewhite;
}
</style>
