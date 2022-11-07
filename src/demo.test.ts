import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import {render, screen} from '@testing-library/react' // (or /dom, /vue, ...)

import {expect, jest, test} from '@jest/globals';

test('demo', () => {
  expect(true).toBe(true)
})
