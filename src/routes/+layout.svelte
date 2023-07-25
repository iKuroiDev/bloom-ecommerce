<script>
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
  import "../styles/global.css";
</script>

<div class="content">
  <Header />
  <!-- page content -->
  <section class="page">
    <div class="container">
      <slot />
    </div>
  </section>

  <Footer />
</div>

<style>
  .content {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .page {
    margin: 60px 0;
  }
</style>
