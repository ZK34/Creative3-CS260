<template>
  <div class="page-container">
    <div class="content-wrap">

      <img src="https://1409791524.rsc.cdn77.org/data/images/full/579604/stayc-asap.jpg" class="img-fluid" alt="group">

      <div class="text-center">
        <div class="card-body">
          <h5 class="quote">Thanks Guys</h5>
          <p class="info-text">
            Thank you guys for all of the love to our group! We will continue to make more great music in the future!
          </p>
        </div>
      </div>

      <div class="footer">
        <hr>
        <a href="https://github.com/ZK34/Creative3-CS260">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "About-view"
    }
</script>

<style>
  hr {
    height: 1px;
  }

  .info-text {
    text-align: center;
    font-size: 20pt;
    font-family: Calibri;
    padding: 100px;
  }

  .quote {
    position: relative;
    text-align: center;
    font-size: 30pt;
    font-family: cursive;
    padding-top: 100px;
  }

  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    height: 100px;
    padding-bottom: 50px;
    background-color: #f8f9fa;
  }

  .page-container {
    position: relative;
    min-height: 100vh;
    width: 100%;
  }

  .content-wrap {
    padding-bottom: 100px;
    width: 100%
  }
</style>
