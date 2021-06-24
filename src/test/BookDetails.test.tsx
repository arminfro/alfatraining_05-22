import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import { books, matchSnapshot, render, screen } from "./utils";
import { baseUrl } from "../shared/BookApi";
import Routes from "../components/Routes";

const renderBookDetails = () =>
  render(<Routes />, { route: "/books/9783864906466" });

describe("BookDetails rendering and button clicks", () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
    mock.onGet(`${baseUrl}/books/9783864906466`).reply(200, books[0]);
  });

  afterEach(() => mock.reset());

  test("matches snapshot", async () => {
    const view = renderBookDetails();
    await screen.findByTestId(/book-details/i);
    matchSnapshot(view);
  });

  test("renders", async () => {
    renderBookDetails();
    expect(await screen.findByTestId(/book-details/i)).toBeInTheDocument();
  });

  test('click on "Add To Cart" and stay on Book Details', async () => {
    renderBookDetails();
    userEvent.click(await screen.findByText(/Add To Cart/i));
    expect(await screen.findByTestId(/book-details/i)).toBeInTheDocument();
  });
});
