import makeActionCreator from './makeActionCreator';
const DUMMY_ACTION = 'DUMMY_ACTION';

describe('makeActionCreator', () => {
  test('creates an action creator Function', () => {
    expect(typeof makeActionCreator(DUMMY_ACTION)).toBe('function');
  });
});

describe('action creator', () => {
  test("returns an object which must have a property of 'type' ", () => {
    expect(makeActionCreator(DUMMY_ACTION)().hasOwnProperty('type')).toBe(true);
  });
});
