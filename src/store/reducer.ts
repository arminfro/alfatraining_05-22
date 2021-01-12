import { Action, Store } from ".";

export const reducer = (store: Store, action: Action): Store => {
  switch (action.type) {
    case "addToCart":
      return {
        ...store,
        cart: [...store.cart, action.book],
      };
    case "removeFromCart": {
      const index = store.cart
        .map((book) => book.isbn)
        .indexOf(action.book.isbn);
      return { ...store, cart: store.cart.filter((_book, i) => i !== index) };
    }
  }
};
