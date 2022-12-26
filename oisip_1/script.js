// let result = document.getElementById("inputtext");

// let display=(number)=>{
//   result.value+=number;
// }

// let Result=()=>{
//   try{
//     result.value=eval(result.value)
//   }
//   catch(err){
//     alert("Enter the Valid Input");
//   }
// }

// function del(){
//   result.value=result.value.slice(0,-1);
// }

// function clr(){
//   result.value="  ";
// }

let display = document.getElementById('screen');

const clr = () => {
    display.value = ' ';
}

const show = (n) => {
    display.value += n;
}


const calculate = () => {
      try{
        display.value=eval(display.value)
      }
      catch(err){
        alert("Enter the Valid Input");
      }
    }

const del=()=>{
    display.value=display.value.slice(0,-1);
  }