
const OperatorASCII = {
    '+': 43,
    '-': 45,
    '*': 42,
    '/': 47,
    '%': 37,
    '.': 46,
    ',': 44
}

/**
 * 
 * @class MathCalculationService
 * 
 */

const { validateNumber } = require("../utils/parameter_validator");

class MathCalculationService{
    
    /**
     * 
     * @param {*} calculation
     * @returns {Number} - result of given calculation
     * @static
     * @async
     */
    async stack(calculation = "0"){
        if(typeof calculation !== "string"){
            throw new Error("Given calculation is not string");
        }
        const options = {
            "+": (a,b) => a + b,
            "-": (a,b) => a - b,
            "*": (a,b) => a * b,
            "/": (a,b) => b ? a/b : 0,
            "%": (a,b) => a % b
        }
        const {numArr , operators} = await new MathCalculationService().splitNumbersAndOperators(calculation);
        let result;
        operators.forEach( oper => {
            result = options[oper]( numArr.splice(0,1)[0] , numArr.splice(0,1)[0] )
            numArr.unshift(result);
        })
        return numArr[0];
    }

    /**
     * 
     * @param {String} calculation 
     * @returns
     * @async 
     * @private
     */
    async splitNumbersAndOperators(calculation){
        const numArr = [];
        const operators = [];
        let temp = "";
        const splitAllEle = calculation.trim().split("");
        splitAllEle.forEach( cal => {

            if(cal.charCodeAt(0) === OperatorASCII[cal]){
                numArr.push(parseInt(temp));
                temp = "";
                operators.push(cal);    
            }
            else if(cal.charCodeAt(0) >= 48 && cal.charCodeAt(0) <= 57){
                temp += cal;             
            }
        })
        if(temp.trim()){
            numArr.push(parseInt(temp));
        }
        return {numArr , operators};
    }

    async negate(number){
        const parsedNum = validateNumber(number);
        return (parsedNum * -1);
    }

}

export default MathCalculationService;