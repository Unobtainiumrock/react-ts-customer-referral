// import * as React from 'react';
// import './Hello.css';
// import { getExclamationMarks } from '../../helper-functions/getExclamationMarks/getExclamationMarks';

// export interface Props {
//   name: string;
//   enthusiasmLevel?: number;
// }

// interface State {
//   currentEnthusiasm: number;
//   minusDisabled: boolean;
//   plusDisabled: boolean;
// }

// class Hello extends React.Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     this.state = {
//       currentEnthusiasm: props.enthusiasmLevel || 1,
//       minusDisabled: false,
//       plusDisabled: false
//     }
//   }

//   updateEnthusiasm(currentEnthusiasm: number) {
//     if (currentEnthusiasm >= 7) {
//       currentEnthusiasm = 7;
//       this.setState({ currentEnthusiasm, plusDisabled: true });
//     } else if (currentEnthusiasm <= 0) {
//       currentEnthusiasm = 0;
//       this.setState({ currentEnthusiasm, minusDisabled: true });
//     } else {
//       this.setState({ currentEnthusiasm, plusDisabled: false, minusDisabled: false });
//     }
//   }

//   onIncrement = () => {
//     if (!this.state.plusDisabled) {
//       this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
//     }
//   }

//   onDecrement = () => {
//     if (!this.state.minusDisabled) {
//       this.updateEnthusiasm(this.state.currentEnthusiasm - 1);
//     }
//   }

//   render() {
//     const { name } = this.props;

//     if (this.state.currentEnthusiasm > 7) {
//       throw new Error(
//         "The enthusiasm cap is 7. Change the number props to 7 or below"
//       );
//     }

//     return (
//       <div className="hello">
//         <div className="greeting">
//           Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
//         </div>
//         <button id="plus" onClick={this.onIncrement}>+</button>
//         <button id="minus" onClick={this.onDecrement}>-</button>
//       </div>
//     );
//   }
// }

// export default Hello;
