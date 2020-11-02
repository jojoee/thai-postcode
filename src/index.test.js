const thaiPostcode = require('./index')

jest.autoMockOff()

describe('get', () => {
  test('normal', () => {
    expect(thaiPostcode.get()).toEqual({})
  })
})

describe('isValid', () => {
  test('normal', () => {
    expect(thaiPostcode.isValid()).toBe(true)
  })
})

describe('random', () => {
  test('normal', () => {
    expect(thaiPostcode.random()).toEqual({})
  })
})
