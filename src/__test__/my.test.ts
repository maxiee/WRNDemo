const f = (...a: number[]) => 
    a.reduce((acc, val) => acc + val, 0);


test('f', () => {    
    expect(f(1, 2)).toBe(3)
})