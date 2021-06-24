import {
  render,
  RenderOptions as TLRRenderOptions,
  RenderResult,
} from "@testing-library/react";
import { ReactElement, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "../../components/Routes";
import { Store, StoreProvider } from "../../store";

type RenderOptions = Omit<TLRRenderOptions, "queries"> & {
  route?: string;
  store?: Store;
};

// Custom render function to render Providers and pass routes
export const customRender = (
  ui: ReactElement,
  options?: RenderOptions
): RenderResult => {
  if (options?.route) {
    window.history.pushState({}, "", options.route);
  }

  const providers = ({ children }: { children?: ReactNode }) => {
    const storeProviderProps = {
      store: options && options.store ? options.store : { cart: [] },
    };
    return (
      <BrowserRouter>
        <StoreProvider {...storeProviderProps}>
          <>{children}</>
        </StoreProvider>
      </BrowserRouter>
    );
  };

  const localRender = () =>
    render(ui, {
      wrapper: providers,
      ...options,
    });

  // const actsRenderResult = act(new Promise(() => {
  //   console.log('')

  // }))

  return localRender();
};

export const renderWithRouting = (options?: RenderOptions): RenderResult =>
  customRender(<Routes />, options);
