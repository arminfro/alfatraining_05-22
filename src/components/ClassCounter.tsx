import React, { ReactElement } from "react";

interface Props {
  startValue?: number;
}

interface State {
  counter: number;
}

export default class ClassCounter extends React.Component<Props, State> {
  intervalId: number | undefined;
  defaultTitle!: string;

  constructor(props: Props) {
    super(props);
    this.state = { counter: props.startValue || 0 };
  }

  componentDidMount(): void {
    this.intervalId = window.setInterval(this.onIncrement, 1000);
    this.defaultTitle = document.title;
  }

  componentDidUpdate(_prevProps: Props, prevState: State): void {
    if (prevState.counter !== this.state.counter) {
      // document.title = `Counter: ${this.state.counter}`
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.intervalId);
  }

  onIncrement = (): void => {
    this.setState((currentState) => {
      return { counter: currentState.counter + 1 };
    });
  };

  render(): ReactElement {
    return (
      <>
        <p>Class Counter: {this.state.counter}</p>
        <button onClick={this.onIncrement} className="ui button">
          +
        </button>
      </>
    );
  }
}
