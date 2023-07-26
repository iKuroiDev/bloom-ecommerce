<script>
  import { createEventDispatcher } from "svelte";

  export let data = null;

  const dispatch = createEventDispatcher();
</script>

<div class="cart__item">
  <div class="cart__thumb">
    <img src={data.img} alt={data.name} />
  </div>
  <h2 class="cart__name align-items-center">
    {data.name}
  </h2>
  <div class="cart__quantity align-items-center">
    <div class="align-items-center">
      <button class="cart__button" on:click={() => dispatch("removeItem")}>
        <img src="img/minus-icon.svg" alt="Remover 1" />
      </button>
      <span class="cart__quantity_label"> {data.quantity} </span>
      <button class="cart__button" on:click={() => dispatch("addItem")}>
        <img src="img/plus_icon.svg" alt="Adicionar 1" />
      </button>
    </div>
  </div>
  <h1 class="cart__price align-items-center">
    R$ {data.price * data.quantity}
  </h1>
</div>

<style>
  .cart__item {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr 1fr;
    border-radius: 3px;
    margin-bottom: 25px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  }

  .cart__thumb {
    display: flex;
  }

  .cart__thumb img {
    width: 100%;
    object-fit: cover;
  }

  .cart__name {
    padding: 10px 25px;
    font-size: 1.4em;
  }

  .cart__quantity,
  .cart__price {
    padding: 10px;
  }

  .cart__quantity_label {
    font-size: 2.2em;
    font-weight: 300;
    padding: 0 7px;
    width: 53px;
    text-align: center;
  }

  .cart__button {
    background: transparent;
    border: none;
    cursor: pointer;
  }

  .cart__price {
    font-size: 1.7em;
  }

  .align-items-center {
    display: flex;
    align-items: center;
  }
</style>
