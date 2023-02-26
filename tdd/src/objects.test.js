const users = {
  name: 'Aluizio',
  email: 'aluiziodeveloper@gmail.com'
}

describe('Match object', () => {
  it('basic usage', () => {
    expect(users.name).toBeDefined()
    expect(users.age).not.toBeDefined()
  })
})