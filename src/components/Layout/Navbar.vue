<template>
    <b-navbar fixed="true" class="navbar-expand-lg navbar-light bg-light">


      <b-navbar-brand href="#">Go URL Shortener</b-navbar-brand>

      <b-navbar-toggle target="nav_collapse" class="ml-auto"></b-navbar-toggle>


      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav class="ml-auto">
          <li class="nav-item"><router-link :to="{name: 'Hello'}" class="nav-link" active-class="active" exact>Home</router-link></li>
          <li class="nav-item"><router-link :to="{name: 'About'}" class="nav-link" active-class="active" exact>About</router-link></li>
        </b-navbar-nav>

      
      </b-collapse>
    </b-navbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

