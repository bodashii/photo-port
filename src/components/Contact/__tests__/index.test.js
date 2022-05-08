import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..'
import { toHaveTextContent } from '@testing-library/jest-dom/dist/matchers';

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(<ContactForm />);
});

it('matches snapshot', () => {
    const { asFragment } = render(<ContactForm />);

    expect(asFragment()).toMatchSnapshot();
});
})

describe('contact title', () => {
    it('checks to see if it says Contact Me', () => {
        const { getByTestId } = render(<ContactForm />);

        expect(getByTestId('title')).toHaveTextContent('Contact me');
    })
})

describe('contact button says Submit', () => {
    it('inserts text into button', () => {
        const { getByTestId } = render(<ContactForm />);

        expect(getByTestId('contact-submit')).toHaveTextContent('Submit');
    })
})