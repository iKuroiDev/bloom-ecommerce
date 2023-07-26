<!-- CART PAGE -->
<script>
  import CartItem from "../../components/CartItem.svelte";
  import { cart, changeQuantity, removeItem } from "../../stores/cartStore";

  let total = 0;

  const unsubscribe = cart.subscribe((res) => {
    console.log("updated");
    getTotalPrice();
  });

  function getTotalPrice() {
    total = 0;
    $cart.forEach((item) => (total += item.price * item.quantity));
  }
</script>

<div class="cart">
  <h1 class="cart__title">Carrinho</h1>

  {#if $cart.length > 0}
    <div class="cart__list">
      {#each $cart as product}
        <CartItem
          data={product}
          on:addItem={() => changeQuantity(product, 1)}
          on:removeItem={() => changeQuantity(product, -1)}
        />
      {/each}
    </div>
    <div class="cart__total">Total R$ {total}</div>
  {:else}
    <div class="cart__no-items">
      <h3>Ainda não há items no seu carrinho.</h3>
      <a href="/">Ir às compras!</a>
    </div>
  {/if}
</div>

<style>
  .cart__title {
    text-align: center;
    font-size: 1.7em;
  }

  .cart__total {
    font-weight: 300;
    font-size: 1.7em;
    text-align: center;
  }

  .cart__no-items {
    text-align: center;
  }
</style>
