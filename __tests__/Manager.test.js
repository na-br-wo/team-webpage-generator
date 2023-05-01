const Manager = require('../lib/manager')

describe('Manager', () => {
  it('should get office number using getOfficeNum method', () => {
    const testOfficeNum = '303'
    const manager = new Manager('John', 123, 'john@email.com', testOfficeNum)
    expect(manager.getOfficeNum()).toBe(testOfficeNum)
  })

  it('should get role using getRole method', () => {
    const manager = new Manager('John', 123, 'john@email.com', 303)
    expect(manager.getRole()).toBe('Manager')
  })
})