import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

//  to install package =====>npm i -D @testing-library/jest-dom
import '@testing-library/jest-dom/vitest';

afterEach(() => {
  cleanup();
});

// after this we need to set the test script in package.json file ===> "test" : "vitest"
