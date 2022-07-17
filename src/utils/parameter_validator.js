/**
 * @module parameter_validator
 */

/**
 * Validate that incoming parameter is number or not
 * @param {Number} number - This is a parameter that will be validated
 * @throws {Error} - When incoming parameter is not type of number 
 * @returns {Number} - itself
 */
const validateNumber = (number) => {
    if(typeof number !== "number" && Array.isArray(number)){
        throw new Error("This parameter is not a number");
    }
    return number;
}

/**
 * Validate that incoming array of elements are number or not
 * @param {Number[]} numbers - This is parameter that will be validated
 * @throws {Error} - When incoming parameter is not an array
 * @throws {Error} - When one of incoming array of elements is not type of number 
 * @returns {Number} - itself (if succesfully pass the validation process without giving error)
 */
const validateNumberArray = (numbers) => {
    if(!Array.isArray(numbers)){
        throw new Error("This parameter is not an array", numbers);
    }
    if(!numbers.every( num => typeof num === "number")){
        throw new Error("This array contains at least one of them is not number",numbers)
    }
    return numbers;
}
