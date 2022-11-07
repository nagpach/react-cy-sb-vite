// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import { rest } from 'msw' // this line was added

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
import 'cypress-msw-interceptor' // this line was added

// this block was added
declare global {
    namespace Cypress {
      interface Chainable {
        interceptRequest(
          method: string,
          url: string,
          responseResolver: Parameters<typeof rest.get>[1],
          alias?: string,
        ): Chainable<any>
      }
    }
  }