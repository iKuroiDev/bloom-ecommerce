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

  let searchTerm = "";

  let filteredProducts = products;

  function addToCart(item) {
    addItem(item);
    notifications.success(item.name + " adicionado ao carrinho!", 2000);
  }

  function search(input) {
    let term = normalizeData(input);
    filteredProducts = products.filter((item) =>
      normalizeData(item.name).includes(term)
    );
  }

  // search term to lowecase and replace special characters
  function normalizeData(input) {
    return input
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }
</script>

<div class="page">
  <div class="search">
    <input
      type="text"
      class="search__input"
      placeholder="Pesquise um produto:"
      name="search"
      bind:value={searchTerm}
      on:input={() => search(searchTerm)}
    />
  </div>
  <div class="product-grid">
    {#each filteredProducts as product}
      <Product data={product} on:addItem={(event) => addToCart(event.detail)} />
    {/each}
  </div>
  {#if filteredProducts.length == 0}
    <div class="products__not-found">
      Não foram encontrados resultados para sua busca! Tente novamente.
    </div>
  {/if}
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

  .products__not-found {
    text-align: center;
  }

  .search__input {
    margin-bottom: 30px;
    border: solid 2px #000;
    border-radius: 50px;
    padding: 10px 20px;
    width: 100%;
  }

  @media (max-width: 768px) {
    .product-grid {
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }
  }
</style>
