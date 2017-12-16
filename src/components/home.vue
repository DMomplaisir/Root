<template>
  <v-app light>

    <v-content>
      <section>
        <v-parallax src="https://pixel.nymag.com/imgs/daily/intelligencer/2017/01/29/29-anti-travel-ban-protest-nyc.w710.h473.jpg" height="600"/>
          <v-layout column align-center justify-center class="">
            <h1 class="display-3 text-xs-center">root v.2</h1>
              <p class="subheading text-center"> root is a social
                activism platform aimed at providing more access to protests for
                citizens interested in changing their communties, and developing
                managment systems for the often-chaotic protests in our
                communties.
              </p>
              <v-btn class="blue white--text" dark large href="#/sign-up">Sign Up</v-btn>

              <v-btn color="blue lighten-1 white--text" dark large href="#/login">Log In</v-btn>
            </v-layout>
          </section>
          <v-parallax src="http://i.dailymail.co.uk/i/pix/2017/03/07/09/3E068BF100000578-4288896-image-a-10_1488877821962.jpg" height="800"/>

        </v-content>
      </v-app light>

</template>

<script>

export default {
  name: 'Home',

}

</script>

<style>
</style>
