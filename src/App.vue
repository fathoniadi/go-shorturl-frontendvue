<template>
  <div id="app" class="text-center">
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default {
  name: 'app',
  components: {Navbar, Footer}
}
</script>
