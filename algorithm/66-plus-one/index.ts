// 66. 加一
function plusOne(digits: number[]): number[] {

    const n = digits.length

    for(let i = n-1 ; i>=0; i--){
        digits[i]++
        digits[i] %= 10
        if(digits[i]!==0){
            return digits
        }
    }

    digits = Array(n+1).fill(0)
    digits[0] = 1
    return digits
};
