<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Drop Earrings Not Bombs</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/css/bootstrap.min.css" integrity="sha384-AysaV+vQoT3kOAXZkl02PThvDr8HYKPZhNT5h/CXfBThSRXQ6jW5DO2ekP5ViFdi" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">
</head>

<body>
    <div id="app">
        <div class="container">
            <h1 class="hero-title"> Custom Earrings </h1>
            <br />

            <div class="row">

                <!-- Image row -->
                <div class="col-md-6 earring-display">
                  <!--
                  <img class="image1" height="500" width="240" :src="earrings.frame.src" />
                  <img class="image2" height="280" width="230" :src="earrings.style.src" />
                  -->
                  <classic-earring :color="earrings.color"></classic-earring>
                </div>

                <!-- Dropdowns -->
                <div class="col-md-3">

                    <!-- Sizes -->
                    <selector :available="earrings.availableSizes" title="Sizes"></selector>

                    <!-- Frames -->
                    <selector :available="earrings.availableFrames" title="Frames"></selector>

                    <!-- Styles -->
                    <selector :available="earrings.availableStyles" title="Styles"></selector>

                    <!-- Colors  -->
                    <template v-for="(layer, layerName) in earrings.color">
                      <div class="form-group">
                          <label :for="layerName">@{{ layerName }}</label>
                          <colorpicker :layername="layerName"></colorpicker>
                      </div>
                    </template>

                    <!-- Beads -->
                    <selector :model="earrings.bead" :available="earrings.availableBeads" title="Beads"></selector>

                </div>
            </div>

            @{{ earrings }}

        </div>
    </div>
</body>

<!-- Jquery -->
<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>

<!-- Data js files -->
<script src="./js/data/colors.js"></script>
<script src="./js/data/styles.js"></script>
<script src="./js/data/frames.js"></script>
<script src="./js/data/sizes.js"></script>
<script src="./js/data/beads.js"></script>


<!-- Bootstrap  -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/js/bootstrap.min.js" integrity="sha384-BLiI7JTZm+JWlgKa0M0kGRpJbF2J8q+qreVrKBC47e3K6BW78kGLrCkeRX6I9RoK" crossorigin="anonymous"></script>

<!-- Vue.js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.1.4/vue.js"></script>

<!-- Vue Components-->
<script src="./js/components.js"></script>

<!-- Vue Instance -->
<script src="./js/main.js"></script>

</html>
