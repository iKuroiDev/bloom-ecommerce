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
          <div class="header__cart-badge">80</div>
        </a>
      </div>
    </div>
  </div>
</header>

<style>
  .header {
    padding: 9px 25px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
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
