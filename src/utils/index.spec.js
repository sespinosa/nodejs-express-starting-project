import { expect } from 'chai'
import { suma } from './index'

describe('Testing Utils', () => {
  it('Should sum 2 numbers', () => {
    expect(suma(5, 6)).to.equal(11)
  })
})