import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders a large button', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button size="large" />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders a small button', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button size="small" />, div);
    ReactDOM.unmountComponentAtNode(div);
});


it('renders a default button', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button size="batata" />, div);
    ReactDOM.unmountComponentAtNode(div);
});


it('renders a red button', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button color="red" />, div);
    ReactDOM.unmountComponentAtNode(div);
});


it('renders a default color button', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button color="loucuras" />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders a fullWidth button', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button fullWidth />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders a disabled color button', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button disabled />, div);
    ReactDOM.unmountComponentAtNode(div);
});