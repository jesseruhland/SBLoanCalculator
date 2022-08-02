
it('should calculate the monthly rate correctly', function () {
    expect(calculateMonthlyPayment({amount: 500000, years: 30, rate: 6.5})).toEqual('3160.34');
    expect(calculateMonthlyPayment({amount: 50000, years: 15, rate: 2.5})).toEqual('333.39');
    expect(calculateMonthlyPayment({amount: 0, years: 30, rate: 6.5})).toEqual('0.00');
    expect(calculateMonthlyPayment({amount: 500000, years: 30, rate: 0})).toEqual('1388.89');
});


it("should return a result with 2 decimal places", function() {
    expect(calculateMonthlyPayment({amount: 500000, years: 30, rate: 6.5})).not.toEqual('3160');
    expect(calculateMonthlyPayment({amount: 500000, years: 30, rate: 6.5})).not.toEqual('3160.3');
    expect(calculateMonthlyPayment({amount: 500000, years: 30, rate: 6.5})).not.toEqual('3160.340');
    expect(calculateMonthlyPayment({amount: 500000, years: 30, rate: 6.5})).not.toEqual('3160.34012');
    expect(calculateMonthlyPayment({amount: 0, years: 30, rate: 6.5})).not.toEqual('0');
    expect(calculateMonthlyPayment({amount: 500000, years: 30, rate: 0})).not.toEqual('1388.888888889');
});