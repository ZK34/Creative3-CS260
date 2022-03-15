<template>
  <div class="page-container">
    <div class="content-wrap">
      <div>
        <div class="row  padded-row banner side-by-side">
          <div class="col">
            <p class="info-text">
              STAYC girls, it's going down!
            </p>
          </div>
          <div class="col text-center">
            <img class="rounded" src="https://www.allkpop.com/upload/2021/09/content/131613/1631564018-untitled-1.jpg" alt="1">
          </div>
        </div>
        </div>
    </div>

  </div>



<!--    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>-->
<!--    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>-->
<!--    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>-->

</template>

<script>
    export default {
        name: "Home-view"
    }
</script>

<style>
hr {
  height: 1px;
}

.infos {
  margin: 50px;
}

.banner {
  height: 1%;
  width: auto;
  background-color: steelblue;
  color: white;
}

.padded-row {
  padding-top: 50px;
  padding-bottom: 50px;
  /*margin: auto;*/
  width: 100%;
}

.info-text {
  text-align: center;
  font-size: 20pt;
  font-family: Calibri;
  padding: 100px;
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

@media only screen and (min-width: 961px){
  .side-by-side{
    display: flex;
    align-items: center;
    vertical-align: center;
    justify-content: space-around;
    flex-direction: row;
    align-self: center;
    padding-top: 100px;
  }
}

</style>
