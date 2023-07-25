<script>
  import Product from "../components/Product.svelte";
</script>

<div class="product-grid">
  <Product />
  <Product />
  <Product />
</div>

<style>
  .product-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    width: 100%;
  }
</style>
