// We can use (.spec) or (.test) extension for the test file name

// describe function that is going to allows us to setup a test suite. In other words, it actually allows us to geoup together our test
import { describe, it, test, expect } from 'vitest';

// We will import render function from react-testing-library
// This render function returns an object which is the instance of render result
// It renders whatever we want into a container thats pretty much rendered to the document itself
import { render, screen } from '@testing-library/react';
// to verify username we need screen api from react-testing-library

import UsernameDisplay from '../components/UsernameDisplay';

/*
describe('name of the test vite', () => {
  it('label of the test work', () => {
    'this is where we write our testing logic';
  });
});

OR,

describe('name of the test vite', () => {
  test('label of the test work', () => {
    'this is where we write our testing logic';
  });
});

//We can use either it or test function
*/
describe('UsernameDisplay', () => {
  it('should render username', () => {
    // with every single test in react, we must make sure that we first render the component before testing.
    // In this case, we must first render UsernameDisplay.jsx component before testing.
    // To first render the component before testing, we gonna use react-testing-library.
    // We will use react-testing-library APIs to render the element to the document and then we can actually use a function that comes from vitest called expect to write assertion

    render(<UsernameDisplay username="ansonthedev" />); // pass in as if writing jsx for UsernameDisplay component to render first
    // this render function returns an object which is the instance of RenderResult

    /*
    // SNAPSHOT TESTING
    // its very common testing but not as popular
    // its a way to detect whenever changes happens to the ui made accindentally or purposely
    // snapshot testing with the container and this container itself gives html element
    // when testing is passed, it creates a snapshots folder with tested file snap

    const result = render(<UsernameDisplay username="ansonthedev" />);
    expect(result.container).toMatchSnapshot();
    */

    /*
    // SCREEN API
    // we need to verify the username is on the screen/document or not
    // to test this, we need to use screen api from react-testing-library
    // screen api has different method. These method helps to query the document to lookup element/find element/search element etc
    // screen.queryMethod()
    */

    /*
    // getByText QUERY
    // it accepts only one element with text. it doenot support mulitple element with same text
    //screen.getByText(actual string value or regular expressions);
    // screen.getByText(/ansonthedev/); ===> regular expressions like when we are concating it with buch of other text
    // screen.getByText('ansonthedev'); ===>actual string value

    expect(screen.getByText('ansonthedev')).toBeInTheDocument();
    */

    // getAllByText
    // it gives array of html elements
    // it support mulitple html element with same text but its an array of html elements. So we need to snapshot test on each element of the array of html element made by getAllByText by using forEach loop
    const elements = screen.getAllByText('ansonthedev');
    elements.forEach((element) => {
      return expect(element).toBeInTheDocument();
    });
  });
});

// Note: to execute the test====> npm run test
