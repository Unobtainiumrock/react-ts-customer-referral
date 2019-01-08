// Refer to Flux standard actions for more info on actions
// https://github.com/redux-utilities/flux-standard-action

export interface Action {
  readonly type: string;
  readonly payload?: object;
  readonly error?: boolean;
  readonly meta?: any;
}

export default (type: string, payloadKeys: string[]): Function => {
  return (...args: string[]): Action => {
    const argsObj = {}
    const action = { type, payload: {}, error: false, meta: null }

    // This is to protect against providing parameters in the wrong order, since
    // the dynamically created function doesn't know its parameters ahead of time.
    args.forEach((arg: string): void => {
      argsObj[arg] = null;
    });

    payloadKeys.forEach((payloadKey: string): void => {
      action.payload[payloadKey] = argsObj[payloadKey];
    });

    return action;
  }
}
