export default function ShoppingCartIcon({ numberOfItemsInCart }) {
  return (
    <a
      className="shopping-cart-button modal-trigger black-text"
      href="#cart-modal"
    >
      Cart ({numberOfItemsInCart})
      <i className="material-icons" style={{ fontSize: 22, marginLeft: 5 }}>
        shopping_cart
      </i>
    </a>
  );
}
