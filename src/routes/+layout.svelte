<script>
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
  import { fade } from "svelte/transition";
  import "../styles/global.css";

  export let data;
</script>

<div class="content">
  <Header />
  <div class="container">
    <section class="page">
      <!-- page content -->
      {#key data.url}
        <div in:fade={{ duration: 200 }}>
          <slot />
        </div>
      {/key}
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
