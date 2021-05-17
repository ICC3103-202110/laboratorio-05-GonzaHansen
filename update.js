function calculate_tip(bill, tip){
    return bill*tip/100
}
function update(input1,input2){
    const newTip = calculate_tip(input1, input2)
    const newTotal = input1 + newTip
    return {
        BillAmount: input1,
        Tip1: input2,
        Tip2: newTip,
        Total: newTotal,
        input1 : input1,
        input2 : input2,
    }
}

module.exports = {
    update
}