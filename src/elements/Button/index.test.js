import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';

import Button from './index'

//test 1
test("Should not allowed click button if isDisabled is present", () => {
    const {container} = render(<Button isDisabled></Button>);
    // cek container apakah terdapan span disabled
    //toBeInTheDocuments => memastikan test berada di document
    expect(container.querySelector('span.disabled')).toBeInTheDocument();
});

//test 2
test("Should render loading/spinner", () => {
    //cek container dan distrak 1 variable dengan nama getByText
    const {container, getByText} = render(<Button isLoading></Button>);
    //expect untuk mendeteksi kata loading
    expect(getByText(/loading/i)).toBeInTheDocument();
    //cek container apakah terdapat span 
    //toBeInTheDocuments => memastikan test berada di document
    expect(container.querySelector("span")).toBeInTheDocument();
});

//test 3
test("Should render <a> tag", () => {
    const {container} = render(<Button type="link" isExternal></Button>);
    //cek container apakah terdapat tag <a>
    expect(container.querySelector("a")).toBeInTheDocument();
});

//test 4
test("Should render <Link> component", () => {
    const {container} = render(
    <Router>
        <Button href="" type="link"></Button>
    </Router>
    );
    expect(container.querySelector("a")).toBeInTheDocument();
});

