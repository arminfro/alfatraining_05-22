import userEvent from "@testing-library/user-event";
import {
  books,
  getNodeText,
  matchSnapshot,
  renderWithRouting,
  screen,
} from "./utils";

const renderCart = () =>
  renderWithRouting({ route: "/cart", store: { cart: [books[0]] } });

describe("BookDetails rendering and button clicks", () => {
  test("renders", async () => {
    renderCart();
    expect(await screen.findByTestId(/shopping-cart/i)).toBeInTheDocument();
  });

  test("matches snapshot", () => matchSnapshot(renderCart()));

  test("counter goes up", async () => {
    renderCart();
    const counter = await screen.findByTestId(/count-target/i);
    expect(getNodeText(counter)).toBe("1");
    await userEvent.click(await screen.findByTestId(/counter-up/i));
    expect(getNodeText(counter)).toBe("2");
  });

  test("counter goes down", async () => {
    renderCart();
    await userEvent.click(await screen.findByTestId(/counter-down/i));
    expect(screen.queryAllByTestId(/count-target/i).length).toBe(0);
  });
});
