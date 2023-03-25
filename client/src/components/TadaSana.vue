<template>
  <div>
    <h1>Tadasana [Mountain Pose]</h1>
    <p>Tadasana yoga or the Mountain Pose is suitable for all levels of yoga practitioners and
      is considered to be the foundation of all standing yoga postures.
      This pose requires the engagement of the entire body while relaxing the mind.</p>
    <div>
      <div>
        <h3>Steps</h3>
        <ul style="list-style-type: upper-roman; ">
          <li>Stand with your feet slightly apart and make sure
            that your weight is balanced equally on both feet.</li>
          <li>Inhale, raise your arms above your head, interlock
            your fingers with palms facing upwards.</li>
          <li>Raise your shoulders up towards your ears and on an exhale,
            roll your shoulders back and down your spine, opening your chest
            and straightening your posture.</li>
          <li>Relax all muscles in your face, including your tongue.Relax
            your eyes and maintain a steady gaze.</li>
          <li>Come back to normal position and relax.</li>
        </ul>
      </div>
      <div class=""></div>
    </div>
    <div>
      <h3>Benefits</h3>
      <ul style="list-style-type: square; ">
        <li>It improves posture, opens up the chest and lengthens the spine</li>
        <li>Gently strengthens the thighs, buttock and leg muscles</li>
        <li>It is also beneficial in increasing awareness and concentration</li>
        <li>Reduces flat feet and relieves sciatica</li>
        <li>Releases tension from the face</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TadaSana',
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
