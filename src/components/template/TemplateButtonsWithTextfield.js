import React, { useState } from "react";
import '../../index.css'
import AtomTextField from "../atomics/AtomTextField"
import AtomGrid from "../atomics/AtomGrid";
import MoleculButtonsWithGrid from "../molecules/MoleculButtonWithGrid";

import MathCalculationService from "../../services/MathCalculationService";

export default function TemplateButtonsWithTextfield(){
    
   const mathService = new MathCalculationService();
   const [calculation , setCalculation] = useState("0"); 

   const operator = ['+','-','*','/','%','+/-']
   
   const calcHandler = (calc) => {

      let parsedCalc = calc.trim();
      if(calculation === "0" && !operator.includes(parsedCalc)){
         setCalculation(parsedCalc)
      }
      else if(calc === '+/-'){
         if(calculation === "0") setCalculation(calculation)
         else if(calculation[0] === '-'){
            setCalculation(calculation.slice(1))
         }
         else{
            setCalculation("-" + calculation)
         }
      }
      else if(operator.includes(parsedCalc) && operator.find( ope => calculation.endsWith(ope))){
         let lastVersion = calculation.slice(0,calculation.length-1);
         lastVersion += calc;
         setCalculation(lastVersion);
      }

      else{
         setCalculation(calculation + calc)
      }

   }

    return (
        <div >
            <AtomTextField 
                margin = "normal"
                variant = {"standard"}
                size = {"medium"}
                color = {"info"}
                value = {calculation}
                disabled = {true}
                sx = {{
                    pt: 3,
                    fontFamily: 'Monospace', 
                    fontSize: 26,
                    width: 280,
                    direction: "ltr",
                    bgcolor: 'white',
                    boxShadow: 20,
                }}
            />
            
            <AtomGrid 
            className={"grid-container"} 
                
               item = {
                <>
                     <MoleculButtonsWithGrid 
                        gridClassName = {"grid-item"}
                        button_variant = {"contained"}
                        button_size = "large"
                        button_color = "success"
                        button_text = "AC"
                        button_onClick = {() => setCalculation("0")} 
                     />
                     <MoleculButtonsWithGrid 
                        gridClassName = {"grid-item"}
                        button_variant = {"contained"}
                        button_size = "large"
                        button_color = "success"
                        button_text = "+/-"
                        button_onClick = {() => calcHandler('+/-')} 
                     />
                     <MoleculButtonsWithGrid 
                        gridClassName = {"grid-item"}
                        button_variant = {"contained"}
                        button_size = "large"
                        button_color = "success"
                        button_text = "%"
                        button_onClick = {() => calcHandler(' % ')} 
                     />
                     <MoleculButtonsWithGrid 
                        gridClassName = {"grid-item"}
                        button_variant = {"contained"}
                        button_size = "large"
                        button_color = "secondary"
                        button_text = "/"
                        button_onClick = {() => calcHandler(' / ')} 
                     />
                     <MoleculButtonsWithGrid 
                        gridClassName = {"grid-item"}
                        button_variant = {"contained"}
                        button_size = "large"
                        button_color = "success"
                        button_text = "7"
                        button_onClick = {() => calcHandler('7')} 
                     />
                     <MoleculButtonsWithGrid 
                        gridClassName = {"grid-item"}
                        button_variant = {"contained"}
                        button_size = "large"
                        button_color = "success"
                        button_text = "8"
                        button_onClick = {() => calcHandler('8')} 
                     />
                     <MoleculButtonsWithGrid 
                        gridClassName = {"grid-item"}
                        button_variant = {"contained"}
                        button_size = "large"
                        button_color = "success"
                        button_text = "9"
                        button_onClick = {() => calcHandler('9')} 
                     />
                     <MoleculButtonsWithGrid 
                        gridClassName = {"grid-item"}
                        button_variant = {"contained"}
                        button_size = "large"
                        button_color = "secondary"
                        button_text = "x"
                        button_onClick = {() => calcHandler(' * ')} 
                     />
                     <MoleculButtonsWithGrid 
                        gridClassName = {"grid-item"}
                        button_variant = {"contained"}
                        button_size = "large"
                        button_color = "success"
                        button_text = "4"
                        button_onClick = {() => calcHandler('4')} 
                     />
                     <MoleculButtonsWithGrid 
                        gridClassName = {"grid-item"}
                        button_variant = {"contained"}
                        button_size = "large"
                        button_color = "success"
                        button_text = "5"
                        button_onClick = {() => calcHandler('5')} 
                     />
                     <MoleculButtonsWithGrid 
                        gridClassName = {"grid-item"}
                        button_variant = {"contained"}
                        button_size = "large"
                        button_color = "success"
                        button_text = "6"
                        button_onClick = {() => calcHandler('6')} 
                     />
                     <MoleculButtonsWithGrid 
                        gridClassName = {"grid-item"}
                        button_variant = {"contained"}
                        button_size = "large"
                        button_color = "secondary"
                        button_text = "-"
                        button_onClick = {() => calcHandler(' - ')} 
                     />
                     <MoleculButtonsWithGrid 
                        gridClassName = {"grid-item"}
                        button_variant = {"contained"}
                        button_size = "large"
                        button_color = "success"
                        button_text = "1"
                        button_onClick = {() => calcHandler('1')} 
                     />
                     <MoleculButtonsWithGrid 
                        gridClassName = {"grid-item"}
                        button_variant = {"contained"}
                        button_size = "large"
                        button_color = "success"
                        button_text = "2"
                        button_onClick = {() => calcHandler('2')} 
                     />
                     <MoleculButtonsWithGrid 
                        gridClassName = {"grid-item"}
                        button_variant = {"contained"}
                        button_size = "large"
                        button_color = "success"
                        button_text = "3"
                        button_onClick = {() => calcHandler('3')} 
                     />
                     <MoleculButtonsWithGrid 
                        gridClassName = {"grid-item"}
                        button_variant = {"contained"}
                        button_size = "large"
                        button_color = "secondary"
                        button_text = "+"
                        button_onClick = { () => calcHandler(' + ')} 
                     />
                     <MoleculButtonsWithGrid 
                        gridClassName = {"grid-item"}
                        button_variant = {"contained"}
                        button_size = "large"
                        button_color = "success"
                        button_text = "0"
                        button_onClick = {() => calcHandler('0')} 
                     />
                    <MoleculButtonsWithGrid 
                        gridClassName = {"grid-item"}
                        button_variant = {"contained"}
                        button_size = "large"
                        button_color = "success"
                        button_text = "."
                        button_onClick = {() => calcHandler('.')} 
                     />
                    <MoleculButtonsWithGrid 
                        gridClassName = {"grid-item"}
                        button_variant = {"contained"}
                        button_size = "large"
                        button_color = "success"
                        button_text = ","
                        button_onClick = {() => calcHandler(',')} 
                     />
                     <MoleculButtonsWithGrid 
                        gridClassName = {"grid-item"}
                        button_variant = {"contained"}
                        button_size = "large"
                        button_color = "secondary"
                        button_text = "="
                        button_onClick = { async () => {
                           const result = await mathService.stack(calculation).then( rslt => rslt)
                           setCalculation(result.toString());
                        }} 
                     />
                    
                
            
                </>
               } >
            </AtomGrid>
        </div>
    )
}