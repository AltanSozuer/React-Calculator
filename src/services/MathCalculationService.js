
import {OperatorASCII} from "../constants/OperatorASCII";
/**
 * 
 * @class MathCalculationService
 * 
 */

const { validateNumber } = require("../utils/parameter_validator");

class MathCalculationService{
    
    /**
     * 
     * @param {String} calculation - given calculation string EX =>  2 + 3 / 4
     * @throws {Error} - When given calculation is not string
     * @returns {Number} - result of given calculation
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
     * extract all numbers and operators
     * @param {String} calculation 
     * @returns {Object} - Object that contains array of numbers and array of operators that are in given calculation 
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

    /**
     * 
     * @param {Number} number
     * @throws {Error} - When incoming number is not number 
     * @returns {Number} - itself (if it is validated)
     */
    async negate(number){
        const parsedNum = validateNumber(number);
        return (parsedNum * -1);
    }

}

export default MathCalculationService;