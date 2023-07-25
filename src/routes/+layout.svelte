<script>
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
  import "../styles/global.css";
</script>

<div class="content">
  <Header />
  <!-- page content -->
  <slot />

  <Footer />
</div>

<style>
  .content {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>
