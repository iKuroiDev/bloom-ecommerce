<!-- CART PAGE -->
<script>
  import CartItem from "../../components/CartItem.svelte";
  import Notification from "../../components/Notification.svelte";
  import { cart, changeQuantity, removeItem } from "../../stores/cartStore";
  import { notifications } from "../../stores/notificationStore.js";

  let total = 0;

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  const unsubscribe = cart.subscribe((res) => {
    getTotalPrice();
  });

  function getTotalPrice() {
    total = 0;
    $cart.forEach((item) => (total += item.price * item.quantity));
  }

  function deleteItem(item) {
    removeItem(item);
    notifications.warning(item.name + " removido do carrinho.", 2000);
  }

  function removeOneItem(item) {
    if (item.quantity === 1) {
      deleteItem(item);
      return;
    }
    changeQuantity(item, -1);
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
          on:removeItem={() => removeOneItem(product)}
          on:delete={() => deleteItem(product)}
        />
      {/each}
    </div>
  {:else}
    <div class="cart__no-items">
      <h3>
        Você ainda não tem produtos no carrinho, <a href="/"> ver produtos.</a>
      </h3>
    </div>
  {/if}
  <div class="cart__total">Total {formatter.format(total)}</div>
  <Notification />
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
