function concatStrings(str, separator) {

    let acc = str;

    if (isString(str, separator)) { 
        str = '';
        separator = '';
    }
    
    function innerF(val) {
      if (isValidType(val)) {   
        return acc;
      }else {
        acc += separator + val;
      }
      return innerF
    }
    
    return innerF;
  }

  function isString(string, separator) {
    return typeof string !== 'string' || typeof separator !== 'string';
  }

  function isValidType(val) {
    return val === undefined || val === null || typeof val !== 'string';
  }


class Calculator {
    constructor(firstNumber, secondNumber) {
      
      if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') throw new Error("firstNumber or secondNumber is not number");
        
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
        this.logSum = this.logSum.call(this);
        this.logDiv = this.logDiv.call(this);
        this.logMul = this.logMul.call(this);
        this.logSub = this.logSub.call(this);

        
    }

    setX(number) {
      if (!isValidNumber(number)) throw new Error("wrong type");
      this.firstNumber = number;
    }

    setY(number) {
      if (!isValidNumber(number)) throw new Error("wrong type");
        this.secondNumber = number;
    }

    logSum() {
       return () => {
         return console.log(this.firstNumber + this.secondNumber);
       }
    }

    logMul() {
     return () => {
       return console.log(this.firstNumber * this.secondNumber);
      }
    }

    logSub() {
      return () => {
        return console.log(this.firstNumber - this.secondNumber);
       }
    }
     
    logDiv() {
      return () => {
        
        const result = this.firstNumber / this.secondNumber;

        if (Math.abs(result) === Infinity) throw new Error("Division by zero is not possible");

        return console.log(result);
      }
   }

}

function isValidNumber(number) {
  return typeof number === 'number' && !isNaN(number) && isFinite(number);
}

