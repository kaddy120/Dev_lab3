/* eslint-env jest */
// const classList = require('../classList')

function sum (a, b) {
  return a + b
}
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 4)).toBe(3) // assertion
})
