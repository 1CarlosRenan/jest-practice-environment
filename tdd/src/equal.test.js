describe('equality', () => {
  it('basic usage - toEqual', () => {
    expect(1+1).toEqual(2)
    expect(1+1).not.toEqual(3)
    expect('developer').toEqual('developer')
    expect({name: 'developer'}).toEqual({name: 'developer'})
  })

  it('basic usage - toBe', () => {
    expect(1+1).toBe(2)
    expect('developer').toBe('developer')
    // expect({name: 'developer'}).toBe({name: 'developer'})
  })
})