<script>
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
  import Notification from "../components/Notification.svelte";
  import "../styles/global.css";
</script>

<div class="content">
  <Header />
  <div class="container">
    <section class="page">
      <!-- page content -->
      <slot />
    </section>
  </div>

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
    /* padding: 60px 0; */
    position: relative;
  }
</style>
