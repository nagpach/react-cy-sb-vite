import  '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { App } from './App'

import {expect, jest, test} from '@jest/globals';


it('renders hello message', () => {
  render(<App />)
  expect(screen.getByText('Hello Vite + React!')).toBeTruthy()
  expect(
    screen.getByRole('heading', { level: 1, name: 'Users' })
  ).toBeTruthy()
  /*
  expect(screen.getByRole('list')).toBeTruthy()
  expect(screen.getAllByRole('listitem')).toHaveLength(10)
  */
})