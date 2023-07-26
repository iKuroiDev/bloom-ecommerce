<script>
  import { cart } from "../stores/cartStore";

  let cartLength = 0;

  const unsubscribe = cart.subscribe((res) => {
    console.log(res);
    cartLength = 0;
    res.forEach((item) => (cartLength += item.quantity));
  });
</script>

<header class="header">
  <div class="container">
    <div class="header__wrapper">
      <div class="header__logo">
        <a href="/">
          <img src="img/logo-nike.svg" alt="Logo Nike" />
        </a>
      </div>
      <div class="header__cart">
        <a href="/carrinho">
          <img src="img/cart.svg" alt="Cart (1)" />
          <div class="header__cart-badge">{cartLength}</div>
        </a>
      </div>
    </div>
  </div>
</header>

<style>
  .header {
    padding: 12px 0;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.09);
  }

  .header__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header__cart {
    position: relative;
  }

  .header__cart-badge {
    position: absolute;
    top: -4px;
    right: -2px;
    font-size: 0.7em;
    color: #fff;
    background-color: #828282;
    padding: 2px;
    width: 18px;
    height: 18px;
    text-align: center;
    border-radius: 50px;
  }
</style>
