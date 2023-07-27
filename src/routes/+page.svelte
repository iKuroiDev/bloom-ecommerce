<!-- HOME/PRODUCT PAGE -->
<script>
  import Notification from "../components/Notification.svelte";
  import Product from "../components/Product.svelte";
  import { addItem } from "../stores/cartStore.js";
  import { notifications } from "../stores/notificationStore.js";

  const products = [
    {
      id: 1,
      name: "Tênis Nike Air Max Alpha Trainer 5 Masculino",
      category: "Treino & Academia",
      price: 719.99,
      img: "img/product-1.png",
    },
    {
      id: 2,
      name: "Tênis Nike Pegasus Turbo Next Nature Masculino",
      category: "Corrida",
      price: 519.99,
      img: "img/product-2.png",
    },
    {
      id: 3,
      name: "Tênis Nike Downshifter 12 Masculino",
      category: "Caminhada",
      price: 249.99,
      img: "img/product-3.png",
    },
  ];

  function addToCart(item) {
    addItem(item);
    notifications.success(item.name + " adicionado ao carrinho!", 2000);
  }
</script>

<div class="page">
  <div class="product-grid">
    {#each products as product}
      <Product data={product} on:addItem={(event) => addToCart(event.detail)} />
    {/each}
  </div>
  <Notification />
</div>

<style>
  .page {
    position: relative;
  }
  .product-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    width: 100%;
  }

  @media (max-width: 768px) {
    .product-grid {
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }
  }
</style>
