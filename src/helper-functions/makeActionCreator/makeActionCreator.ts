export default function makeActionCreator(type: String): Function {
  return function(...args: any): Object {
    return {
      type: true
    }
  }
}