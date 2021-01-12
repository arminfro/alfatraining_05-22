import { Book } from "../types/Book";

interface AddToCart {
  type: "addToCart";
  book: Book;
}

interface RemoveFromCart {
  type: "removeFromCart";
  book: Book;
}

export type Action = AddToCart | RemoveFromCart;
