const Engineer = require('../lib/engineer')

describe('Engineer', () => {
  it('should get github username using getGithub method', () => {
    const testGithubUsr = 'John-38'
    const engineer = new Engineer('John', 123, 'john@email.com', testGithubUsr)
    expect(engineer.getGithub()).toBe(testGithubUsr)
  })

  it('should get role using getRole method', () => {
    const engineer = new Engineer('John', 123, 'john@email.com', 'John-38')
    expect(engineer.getRole()).toBe('Engineer')
  })
})