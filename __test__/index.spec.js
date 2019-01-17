const isClass = require('../src/index')

describe('node-is-class', () => {
  it('check pure class', () => {
    expect(isClass(class {})).toBeTruthy()
  })

  it('check proxy class', () => {
    expect(isClass(new Proxy(class {}, {}))).toBeTruthy()
  })

  it('check function', () => {
    expect(isClass(function() {})).toBeFalsy()
  })

  it('check other type', () => {
    expect(isClass('string')).toBeFalsy()
  })
})