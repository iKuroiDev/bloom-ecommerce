<script>
  import CartItem from "../../components/CartItem.svelte";
</script>

<h1 class="title">Carrinho</h1>

<div class="cart">
  <CartItem />
  <CartItem />
  <CartItem />
  <CartItem />
  <CartItem />
</div>

<div class="total">Total R$ 1439.98</div>

<style>
  .title {
    text-align: center;
    font-size: 1.7em;
  }

  .total {
    font-weight: 300;
    font-size: 1.7em;
    text-align: center;
  }
</style>
