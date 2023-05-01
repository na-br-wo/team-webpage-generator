const Employee = require('../lib/employee')

describe('Employee', () => {
  it ('should get name using getName method', () => {
    const testName = 'John'
    const employee = new Employee(testName)
    expect(employee.getName()).toBe(testName)
  })
  
  it ('should get id using getId method', () => {
    const testId = '123'
    const employee = new Employee('John', testId)
    expect(employee.getId()).toBe(testId)
  })
  
  it ('should get email using getEmail method', () => {
    const testEmail = 'john@email.com'
    const employee = new Employee('John', 123, testEmail)
    expect(employee.getEmail()).toBe(testEmail)
  })
  
  it ('should get role using getRole method', () => {
    const testName = 'John'
    const employee = new Employee('John', 123, 'john@email.com')
    expect(employee.getRole()).toBe('Employee')
  })
})