import * as React from 'react';
import './Hello.css';

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
    switch(currentEnthusiasm) {
      case 7:
        this.setState({ currentEnthusiasm, plusDisabled: true });
        break;
      case 0:
        this.setState({ currentEnthusiasm, minusDisabled: true });
        break;
      default:
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

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
        </div>
        <button onClick={this.onIncrement}>+</button>
        <button onClick={this.onDecrement}>-</button>
      </div>
    );
  }
}

export default Hello;

// We put these here, so that 
function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
