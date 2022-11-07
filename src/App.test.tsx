import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import {
  render,
  screen,
  waitForElementToBeRemoved, // this line was added
} from '@testing-library/react'

import {expect, jest, test} from '@jest/globals';
import { App } from './App'

it('renders hello message', async () => { // this line was updated
  render(<App />)
  expect(screen.getByText('Hello Vite + React!')).toBeTruthy()
  expect(
    screen.getByRole('heading', { level: 1, name: 'Users' })
  ).toBeTruthy()
  const loading = screen.getByText('Loading...') // this line was added
  await waitForElementToBeRemoved(loading) // this line was added
  expect(screen.getByRole('list')).toBeTruthy()
  expect(screen.getAllByRole('listitem')).toHaveLength(10)
})
