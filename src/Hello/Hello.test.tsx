import * as React from 'react';
import * as enzyme from 'enzyme';
import Hello from './Hello';

it('renders the correct text when no enthusiasm level is given', () => {
  const hello = enzyme.shallow(<Hello name='Jack Daniels' />);
  expect(hello.find(".greeting").text()).toEqual('Hello Jack Daniels!');
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
  const hello = enzyme.shallow(<Hello name='Jack Daniels' enthusiasmLevel={1} />);
  expect(hello.find(".greeting").text()).toEqual('Hello Jack Daniels!');
});

it('renders the correct text with an explicit enthusiasm of 7', () => {
  const hello = enzyme.shallow(<Hello name='Jack Daniels' enthusiasmLevel={7} />);
  expect(hello.find(".greeting").text()).toEqual('Hello Jack Daniels!!!!!!!');
});

it('throws when the enthusiasm level is negative', () => {
  expect(() => {  
    enzyme.shallow(<Hello name='Jack Daniels' enthusiasmLevel={-1} />);
  }).toThrow();
});

it('does not allow the minus button to decrement the enthusiasm level below 0', () => {
  const hello = enzyme.mount(<Hello name='Jack Daniels' enthusiasmLevel={1} />);
  hello.find("#minus").simulate('click');
  hello.find("#minus").simulate('click');
  expect(hello.find(".greeting").text()).toEqual('Hello Jack Daniels');
});

it('does not allow the plus butont to increment the enthusiasm level above 7', () => {
  const hello = enzyme.mount(<Hello name='Jack Daniels' enthusiasmLevel={7} />);
  hello.find("#plus").simulate('click');
  expect(hello.find(".greeting").text()).toEqual('Hello Jack Daniels!!!!!!!');
});
