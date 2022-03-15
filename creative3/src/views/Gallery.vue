<template>
    <div class="page-container">
        <div class="content-wrap">
            <div>
            <div class="row padded-row">
                <div class="col">
                    <img src="https://i.ytimg.com/vi/NsY-9MCOIAQ/maxresdefault.jpg" class="img-fluid" alt="1">
                </div>
                <div class="col">
                    <img src="https://thehoneypop.com/wp-content/uploads/2021/09/Untitled-design-12.png" class="img-fluid" alt="2">
                </div>

                    <div class="col">
                        <img src="https://www.envimedia.co/wp-content/uploads/2022/02/stayc-heart--1024x576.jpg" class="img-fluid" alt="3">
                    </div>
                    <div class="col">
                        <img src="../assets/stayc6.jpg" class="img-fluid" alt="4">
                    </div>
                </div>
            </div>
        </div>

        <div class="footer">
            <hr>
            <a href="https://github.com/ZK34/Creative3-CS260">GitHub</a>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Gallery-view"
    }
</script>

<style scoped>
    hr {
        height: 1px;
    }

    .padded-row {
        padding-top: 50px;
        padding-bottom: 50px;
        margin: auto;
        width: 100%;
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
