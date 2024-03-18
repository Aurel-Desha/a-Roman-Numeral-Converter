const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const numralObject = [
  {
    romanNumeral: 1000,
    arabicNumeral: 'M'
  },
  {
    romanNumeral: 900,
    arabicNumeral: 'CM'
  },
  {
    romanNumeral: 500,
    arabicNumeral: 'D'
  },

  {
    romanNumeral: 400,
    arabicNumeral: 'CD'
  },
  {
    romanNumeral: 100,
    arabicNumeral: 'C'
  },
  {
    romanNumeral: 90,
    arabicNumeral: 'XC'
  },
  {
    romanNumeral: 50,
    arabicNumeral: 'L'
  },
  {
    romanNumeral: 40,
    arabicNumeral: 'XL'
  },
  {
    romanNumeral: 10,
    arabicNumeral: 'X'
  },
   {
    romanNumeral: 9,
    arabicNumeral: 'IX'
  },
   {
    romanNumeral: 5,
    arabicNumeral: 'V'
  },
    {
    romanNumeral: 4,
    arabicNumeral: 'IV'
  },
   {
    romanNumeral: 1,
    arabicNumeral: 'I'
  },
]

convertBtn.addEventListener('click', ()=>{
  const inputValue = parseInt(number.value, 10)
  if(isNaN(inputValue)){
    output.textContent= "Please enter a valid number.";
  }else if(inputValue < 0){
    output.textContent= "Please enter a number greater than or equal to 1";
  }else if(inputValue >= 4000){
    output.textContent= "Please enter a number less than or equal to 3999";
  } else {
    const romanNumeral = convert(inputValue);
    output.textContent = `${romanNumeral}`;
  }
})

const convert = (num)=> {
  let roman = "";
  numralObject.forEach((obj)=>{
    while(num >= obj.romanNumeral) {
      roman +=  obj.arabicNumeral;    
      num -= obj.romanNumeral;
    } 
  })
  return roman;
}
