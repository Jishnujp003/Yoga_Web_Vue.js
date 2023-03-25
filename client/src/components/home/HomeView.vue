<template>
  <div class="a">
    <spann></spann>
    <h2>YOGA HAS MANY MEANINGS...<br>
WHAT WILL IT MEAN TO YOU?</h2>
    <h3>"Yoga takes you, <br>into the present moment.
      <br>The only place, <br>where life exists"</h3>
  </div>
  <div class="b text-black-50">
    <h2>"Yoga is a path towards total harmony of body, mind, and spirit."</h2>
    <h3>Yoga is not merely a form of exercise for the body.<br>
      It is an ancient wisdom - for a healthier, happier,<br>
      and more peaceful way of living - which ultimately<br>
      leads to union with the Self.</h3>
    <p class="text-black-50">
      To live in harmony with oneself and the environment is the wish of every human.
      However, in modern times greater<br> physical and emotional demands are constantly
      placed upon many areas of life. The result: more and more people<br> suffer from
      physical and mental tension such as stress, anxiety, insomnia, and there is an imbalance
       in physical<br>
      activity and proper exercise. This is why methods and techniques for the attainment
      and improvement of health,<br> as well as physical, mental and spiritual harmony, are of
      great importance, and it is exactly in this respect that <br>“Yoga in Daily Life”
      comprehensively offers an aid to help one’s self.</p>
  </div>

<div class="cd" >

  <div class="c"></div>

  <div class="d text-black-50">
  <h3 >Benefits</h3>
  <p>
  <ul style= "list-style-type: circle; ">
    <li>Wake up Energized</li>
    <li>Find Calm</li>
    <li>Build Strength</li>
    <li>Sharpen Focus</li>
    <li>Sleep Soundly</li>
    <li>Increase Flexibility</li>
    <li>Improve Mobility</li>
    <li>Support Longevity</li>
    <li>Live Balanced</li>
  </ul>
  </p>
  </div>
</div>
<div class="bod" >
  <div class="e ">
    <router-link to="/pranayama" class="btn btn-outline-danger ea "
    v-on:click="asna()"><h3>Physical Practices</h3>
    <br><br><br><br><br><br><br><br><br><br><br>
    Physical Practices/Asanas are performed to improve flexibility,<br>
    strength, and balance. Asanas-or yoga poses-help the body's <br>
    joints, ligaments, and muscles strengthen through movement.<br>
    A regular yoga practice can, over time, increase flexibility<br>
    and mobility, lubricating the spine and alignment to aid in<br>
    everyday activity.A regular asana practice can also help<br>
    strengthen the immune system and improves blood circulation <br>
    throughout the body, vascular function, blood lipids, and mood.<br>
    Through dedicated practice and time, the body can experience<br>
    noticeable improvements and benefits from asanas.</router-link>
  </div>
  <div class="f">
    <router-link to="/pranayama" class="btn btn-outline-danger fa "
    v-on:click="pranayama()">
    <h3>Pranayama and Meditation</h3><br><br><br><br><br><br><br><br><br><br><br>
    Pranayama is the art of prolongation and control
    of breath helps in bringing conscious awareness
    to breathing and the reshaping of breathing habits and patterns.The goal of pranayama is to
    connect your body and mind. It also supplies your body with oxygen while removing toxins.
    <br><br>
    Meditation is a yogic process of providing deep rest to the system
    by allowing the mind to calm down. Benefits: Lowers stress,
    Reduces anxiety,Improve self-awareness,
    Increases concentration,
    Reduce memory loss,
    Generates empathy and kindness,
    Improves sleep hygiene.</router-link>
  </div>
</div>
</template>
<script src="./home.vue.js"></script>
<style src="./home.css"></style>
