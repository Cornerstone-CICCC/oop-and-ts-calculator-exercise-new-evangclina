class Calculator {
    constructor(result){
        this.result = result

        //binding DOM elements
        this.operation = document.getElementById("operation")
        this.num1 = document.getElementById("num1")
        this.num2 = document.getElementById("num2")
        this.calculate = document.getElementById("calculateBtn")


        this.calculate.addEventListener('click', () => this.calculate())
    }

    calculate(){
        const option = this.operation.value

        if(option === "+"){
            return this.num1 + this.num2
        }else if(option === "-"){
            return this.num1 - this.num2
        }else if(option === "/"){
            return this.num1 / this.num2
        }else if(option === "*"){
            return this.num1 * this.num2
        }
    }
}

