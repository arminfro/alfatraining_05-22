import { matchSnapshot, renderWithRouting, screen } from "./utils";

const renderApp = () => renderWithRouting();

test("matches snapshot", () => matchSnapshot(renderApp()));

test("renders: Willkommen beim BookMonkey from Home Component", async () => {
  renderApp();
  const textElement = await screen.findByText(/Willkommen beim BookMonkey/i);
  expect(textElement).toBeInTheDocument();
});
