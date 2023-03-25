<template>
    <div class="bhu">
        <h1>Bhastrika Pranayama</h1><br>
        <p>Bhastrika (bas-tree-kah) is a Sanskrit word that means
            bellows, like a blacksmith or metal worker uses to fan the flames.
             Pranayama, also a Sanskrit word, is comprised of two words- Prana and Yama.

            Prana means subtle life energy. And Yama means to control or contain.
            This yogic breath is considered the most important pranayama practice
            (breathing exercise) you can do daily with any yoga or meditation practice.</p>
        <div><br><br>

            <div><h2>Steps</h2><br>
            <ul style= "list-style-type: upper-roman; ">
                <li>Do preliminary conditioning in Sukhasana or any other
                     meditative posture.<br>Sit on a firm chair with an upright
                      backrest, if unable to sit on the floor.<br> Keep the body above
                       the waist straight and the spine erect.
                       <br>Eyes can be kept closed.</li><br>
                <li>Take in a deep breath and breathe out forcefully
                     through the nose,<br> without any strain.</li><br>
                <li>Immediately, breathe in with the same force.</li><br>
                <li>Inhale and exhale repeatedly, deeply and thoroughly,
                     using the diaphragmatic muscles<br> with vigour. The abdomen moves
                      out during inhalation, while the diaphragm descends.<br>
                       The converse happens while exhaling.</li><br>
                <li>The above movements should be slightly exaggerated.<br>
                    A strong nasal sound will accompany such breathing.<br>
                     The process should be rhythmic and controlled, maintaining the
                      speed as per capacity.</li><br>
                <li>Do ten cycles to complete 1 round of Bhastrika Pranayama.</li>
            </ul>
            <div class="bhim"></div>
        </div>
            <div class="bn">
                <h2>Benefits</h2><br>
                <ul style= "list-style-type: square; ">
                <li>Energizes while increasing a calm focus</li>
                <li>Cleanses nasal passage</li>
                <li>Clears away unwanted thoughts</li>
                <li>Enhances present moment awareness</li>
                <li>Stress reduction </li>
                <li>Reduces anxiety</li>
                <li>Improves circulation</li>
                <li>Oxygenates the blood</li>
                <li>Is a  precursor for mindfulness meditation practice</li><br><br><br>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'BhastRika',
  components: {
  },
  data() {
    return {
    };
  },
};
</script>

<style>
/* .bcgr {
    background-image: url('../assets/bhastrika.jpg');
  background-size:contain;

} */
.bhu {
    margin-top: 100px;
    margin-left: 50px;
    font-family: 'Futara Arial, sans-serif';
    font-size: 1.5em;
    font-weight:normal;
    opacity: .7;
}
.bhim {
  border-radius: 20px;
  margin-top: -695px;
  margin-left: 770px;
  background-image: url('../assets/bhastrika.jpg');
  background-size:contain;
  width:420px;
  height: 355px;
  opacity: 50%;
}
.bn {
    position: relative;
    margin-top: 430px;
}
 body {
    display:flex;
    justify-content:center;
    align-items:center;
    min-height: 100vh;
    background-color: antiquewhite;
}
</style>
