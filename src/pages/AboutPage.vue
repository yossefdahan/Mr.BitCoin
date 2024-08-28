<template>
  <div class="about-page">
    <h1>About This App</h1>
    <section class="content">
      <p>This application was built entirely by me, Yossef Dahan. It is designed to provide users with a seamless
        experience, showcasing my skills as a full-stack developer. Every feature, from the front-end design to the
        back-end functionality, was crafted with care and precision.</p>

      <p>Technologies used in this project include:</p>
      <ul>
        <li>Vue.js</li>
        <li>Vuex</li>
        <li>JavaScript (ES6+)</li>
        <li>HTML5 & CSS3</li>
        <li>SASS/SCSS</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
      </ul>

      <p>Thank you for visiting and using my app. I hope you enjoy the experience as much as I enjoyed building it!</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
};
</script>

<style lang="scss">
.about-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em;
  background-color: #1d1f21;
  color: whitesmoke;
  min-height: 100vh;

  h1 {
    font-size: 2.5em;
    margin-bottom: 1em;
    color: #1d50db;
  }

  .content {
    max-width: 800px;
    text-align: center;
    line-height: 1.6;

    p {
      margin-bottom: 1em;
      font-size: 1.2em;
    }

    ul {
      list-style-type: none;
      padding: 0;
      margin: 1em 0;

      li {
        background-color: #303031;
        margin: 0.5em 0;
        padding: 0.7em;
        border-radius: 8px;
      }
    }
  }
}
</style>
