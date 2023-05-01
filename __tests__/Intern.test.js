const Intern = require('../lib/intern')

describe('Engineer', () => {
  it('should get school using getSchool method', () => {
    const testSchool = 'UofU'
    const intern = new Intern('John', 123, 'john@email.com', testSchool)
    expect(intern.getSchool()).toBe(testSchool)
  })

  it('should get role using getRole method', () => {
    const intern = new Intern('John', 123, 'john@email.com', 'UofU')
    expect(intern.getRole()).toBe('Intern')
  })
})