const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const numralObject = [
  {
    romanNumeral: 1,
    arabicNumeral: 'I'
  },
   {
    romanNumeral: 4,
    arabicNumeral: 'IV'
  },
   {
    romanNumeral: 5,
    arabicNumeral: 'V'
  },
   {
    romanNumeral: 9,
    arabicNumeral: 'IX'
  },
   {
    romanNumeral: 10,
    arabicNumeral: 'X'
  },
   {
    romanNumeral: 40,
    arabicNumeral: 'XL'
  },
   {
    romanNumeral: 50,
    arabicNumeral: 'L'
  },
   {
    romanNumeral: 90,
    arabicNumeral: 'XC'
  },
   {
    romanNumeral: 100,
    arabicNumeral: 'C'
  },
   {
    romanNumeral: 400,
    arabicNumeral: 'CD'
  },
   {
    romanNumeral: 500,
    arabicNumeral: 'D'
  },
  {
    romanNumeral: 900,
    arabicNumeral: 'CM'
  },
  {
    romanNumeral: 1000,
    arabicNumeral: 'M'
  },
]

convertBtn.addEventListener('click', ()=>{
  if(number.value === ""){
    output.textContent= "Please enter a valid number.";
  }else if(number.value < 0){
    output.textContent= "Please enter a number greater than or equal to 1";
  }else if(number.value >= 4000){
    output.textContent= "Please enter a number less than or equal to 3999";
  } else {
    convert();
  }
})

const convert = ()=> {
  numralObject.forEach((obj)=>{
    if(number.value === obj.romanNumeral) {
      output.textContent = obj.arabicNumeral;
    }
  })
}