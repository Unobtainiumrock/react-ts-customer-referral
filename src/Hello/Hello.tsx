import * as React from 'react';
import './Hello.css';
import { getExclamationMarks } from '../helper-functions/helper-functions';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

interface State {
  currentEnthusiasm: number;
  minusDisabled: boolean;
  plusDisabled: boolean;
}

class Hello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentEnthusiasm: props.enthusiasmLevel || 1,
      minusDisabled: false,
      plusDisabled: false
    }
  }

  updateEnthusiasm(currentEnthusiasm: number) {
    if (currentEnthusiasm >= 7) {
      currentEnthusiasm = 7;
      this.setState({ currentEnthusiasm, plusDisabled: true });
    } else if (currentEnthusiasm <= 0) {
      currentEnthusiasm = 0;
      this.setState({ currentEnthusiasm, minusDisabled: true });
    } else {
      this.setState({ currentEnthusiasm, plusDisabled: false, minusDisabled: false });
    }
  }

  onIncrement = () => {
    if (!this.state.plusDisabled) {
      this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
    }
  }

  onDecrement = () => {
    if (!this.state.minusDisabled) {
      this.updateEnthusiasm(this.state.currentEnthusiasm - 1);
    }
  }

  render() {
    const { name } = this.props;

    if (this.state.currentEnthusiasm < 0) {
      throw new Error('You could be a little more enthusiastic!');
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
        </div>
        <button id="plus" onClick={this.onIncrement}>+</button>
        <button id="minus" onClick={this.onDecrement}>-</button>
      </div>
    );
  }
}

export default Hello;
