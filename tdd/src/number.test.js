describe('Compare numbers', () => {
  it('basic usage', () => {
    expect(1+1).toBeGreaterThan(1)
    expect(1+1).toBeGreaterThanOrEqual(2)

    expect(1+1).toBeLessThan(3)
    expect(1+1).toBeLessThanOrEqual(2)
  })
})