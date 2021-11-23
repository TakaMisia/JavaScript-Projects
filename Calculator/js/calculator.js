//create an object to keep track the values
const Calculator = {
//display 0 on the screen
Display_Value: '0',
// this will hold the first operand for anyexpression we set it to null for now
First_Operand: null,
//thos check whether or not the second operand has been input
Wait_Second_Operand: false,
//this will hold the operator, we set it to null for now
operator: null,
};


//this modifies values each time a button is clicked
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    //WE ARE CHCKING TO SEE if wait_second_operand is true and set
    //display_vallue to the key that was clicked
    if (Wait_Second_Operand === true) {
    Calculator.Display_Value = digit ; 
        Calculator.Wait_Second_Operand = false;
    } else {
        // this overwrttes displayed-value if the current value is 0
        //otherwise it adds onto it 
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit; 
    }
}
//this section handles decimal pointss
function Input_Decimal(dot) {
    //this enssure that accidental clicking of the decimal point
    //doesn't cause bugs in your operation 
    if (Calculator.Wait_Second_Operand === true) return;
    if(!Calculator.Display_Value.includes(dot)) {
        //we are saying that if the display_value does not contain a decimal point 
        //we want to add a decimal point
        Calculator.Display_Value += dot;
    }
}

//this section handles operators
function Handles_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator
    //when an operatoe key is pressed we convert the current number 
    //displayed in the screen to a number and then store the result in 
    //Calculator.Firstt_Operand if it doesnt already exist
    const Value_of_Input = parseFloat(Display_Value) ;
    //checks if an operator already exist and Wait_Second_Operand is tru,
    //then updates the operator and exist from the function
    if(operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {//checks if an operator already exisst
    const Value_Now = First_Operand || 0;
    //if operator exist property lookup is performed for the opertors 
    //in  the perform_calculation object and thw function that matches the
    //operator is executed
    let result = Perform_Calculation[operator] ( Value_Now, Value_of_Input)
    //here we ad a fixed amoount of numbers after decimal 
    result = Number(result).toFixed(9)
    //this will removee any trailing 0's
    result = (result * 1).toString()
    Calculator.Display_Value = parseFloat(result) ; 
    Calculator.First_Operand = parseFloat(result) ; 

    } 
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator; 
    }
const Perform_Calculation = {
    '/':(First_Operand, Second_Opeand) => First_Operand / Second_Opeand,
    '*':(First_Operand, Second_Opeand) => First_Operand * Second_Opeand,
    '+':(First_Operand, Second_Opeand) => First_Operand + Second_Opeand,
    '-':(First_Operand, Second_Opeand) => First_Operand - Second_Opeand,
    '=':(First_Operand, Second_Opeand) =>  Second_Opeand
};
function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}
//this function updates the screen with the contents od dispalu_value
function Update_Display() {
    const display = document.querySelector('.calculator_keys') ;
    display.value = Calculator.Display_Value ; 
}
Update_Display() ;
//this section monitors button clicks 
const keys = document.querySelector('.calculator_keys');
     keys.addEventListener('click', (event) => {
         //the target vairiable is an represent the element
         // that was clicked
         const { target } = event;
         // if the element tht was cliicked on thi button, exit the functon 
         if(!target.matches('button')) {
             return;
         }
         if (target.classList.contains ('operator')) {
             Handles_Operator(target.value) ; 
             Update_Display() ;
             return;
            }
            if (target.classList.contains('decimal')) {
                Input_Decimal (target.value) ; 
                Update_Display() ; 
                return;
            }
//ensures that AC clear the numbers from calcullator
                if(target.classList.contains('all-clear')) {
                    Calculator_Reset();
                    Update_Display() ;
                    return;
                }

                Input_Digit(target.value) ; 
                Update_Display();
     })
