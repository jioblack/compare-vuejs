<template>
  <div id="app">
    <div class="navbar has-shadow">
      <div class="container">
        <div class="navbar-brand"> <!-- hold the logo on the left -->
          <a class="navbar-item">MyCompany</a>

      <span class="navbar-burger" v-on:click="toggleNav" v-bind:class="{ 'is-active': isActive }"> 
        <span></span>
        <span></span>
        <span></span>
      </span> <!-- navbar-burger or nav-toggle -->
        </div> <!-- navbar-brand -->


      
    <div class="navbar-end navbar-menu" v-bind:class="{ 'is-active': isActive }">

          <router-link to="/" class="navbar-item r-item">Home</router-link>
          <router-link to="faq" class="navbar-item r-item">About</router-link>
          <router-link to="faq" class="navbar-item r-item">Features</router-link>
          <router-link to="faq" class="navbar-item r-item">FAQ</router-link>
      

          <div class="navbar-item">
            <p class="control">
              <a class="button is-primary is-outlined">
                <span class="icon">
                  <i class="fa fa-download"></i>
                </span>
                <span>Join Now</span>
              </a> 
            </p>
          </div> <!-- navbar-item -->

     </div> <!-- navbar-end navbar-menu -->

          



      </div> <!-- container -->

    </div> <!-- navbar has shadow -->

    <router-view></router-view> <!-- Where all hero, info, faq content will be viewed. -->

    <footer class="footer is-primary">
      <div class="container">
        <div class="columns">
          <div class="column">
            <p>Copyright by Jackie Pareja</p>
          </div> <!-- column -->
          <div class="column has-text-right">
            <a class="icon" href="#"><i class="fa fa-facebook"></i></a>
            <a class="icon" href="#"><i class="fa fa-twitter"></i></a>
          </div> <!-- column has-text-right -->
        </div> <!-- columns -->
      </div> <!-- container -->
    </footer>
  </div> <!-- app -->
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleNav: function() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style lang="sass">
@import '../node_modules/bulma/bulma.sass'
@import 'mq'

.navbar
  background-color: #383838
  a:hover
    color: gray

.navbar-brand a
  color: #ffffff
  font-weight: 600

a.r-item
  color: #c1c1c1
  padding: 0.5rem 1.75rem
  +mobile
    color: gray
    &:hover
      background-color: #f1f1f1

.is-active
  color: #1EC9AC

.navbar-burger span 
  background-color: #c1c1c1

footer
  background-color: $primary !important
  color: #fff

  .icon
    color: #fff
    margin-left: 20px


</style>
