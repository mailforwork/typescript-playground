function calculateTax(income: number): number{
    // return income * 0.25;

    if(income > 10000)
        return income * 0.25;
    else
        return income * 0.15;
}
