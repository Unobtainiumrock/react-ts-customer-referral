import makeActionCreator from './makeActionCreator';
import { isFSA, isError } from 'flux-standard-action';

const DUMMY_ACTION_TYPE = 'DUMMY_ACTION_TYPE';
const testActionCreator = makeActionCreator(DUMMY_ACTION_TYPE);
const testAction = testActionCreator();

describe('makeActionCreator', () => {
  test('creates and returns an action creator Function', () => {
    expect(typeof testActionCreator).toBe('function');
  });
});

describe('action creator function', () => {
  test('it returns a flux-standard-action (fsa) compliant action object', () => {
    expect(isFSA(testAction)).toBe(true);
  });
});