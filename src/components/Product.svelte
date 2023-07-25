<article class="product">
  <div class="product__image">
    <img src="img/product-1.png" alt="Product 1" />
  </div>
  <div class="product__info">
    <div class="product__category">Treino & Academia</div>
    <h3 class="product__name">Tênis Nike Air Max Bla bla bla</h3>
    <div class="product__price">R$ 719,99</div>
    <div class="product__btn">
      <button> Comprar </button>
    </div>
  </div>
</article>

<style>
  .product {
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  }

  .product__image img {
    width: 100%;
  }

  .product__info {
    padding: 10px;
  }

  .product__category {
    font-size: 0.7em;
    color: #fff;
    background-color: #828282;
    padding: 3px 8px;
    border-radius: 50px;
    text-align: center;
    width: max-content;
  }

  .product__name {
    margin: 10px 0;
    font-weight: 500;
  }

  .product__price {
    font-size: 1.5em;
    margin: 20px 0;
  }

  .product__btn {
    text-align: center;
  }

  .product__btn button {
    background-color: #000;
    color: #fff;
    font-size: 1.2em;
    border: none;
    padding: 7px 20px;
    margin: 5px 0 18px 0;
    cursor: pointer;
  }
</style>
