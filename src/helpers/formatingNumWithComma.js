export const formatNumberWithComma = num => {
//   const arr = String(num).split('');
//   arr.splice(1, 0, ',');
//   const result = arr.join('');
    //   return result;
    
    const formattedNumber = num.toLocaleString('en-US');
    console.log(formattedNumber)
};
