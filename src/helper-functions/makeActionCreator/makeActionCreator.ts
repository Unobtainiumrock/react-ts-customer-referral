import * as constants from '../../constants/constants';

export interface Action {
  type: string;
}

export default function makeActionCreator(type: string): Function {
  return function(...args: any): Action {
    return {
      type: type
    }
  }
}