const users = ['Aluizio', 'Developer']

describe('Match arrays', () => {
  it('verify array elements', () => {
    expect(users).toContainEqual('Aluizio')
    expect(users).toContain(users[0])
  })
})