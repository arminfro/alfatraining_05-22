import { RenderResult } from ".";

export const matchSnapshot = (renderResult: RenderResult): void => {
  const { baseElement } = renderResult;
  expect(baseElement).toMatchSnapshot();
};
