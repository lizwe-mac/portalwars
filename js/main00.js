function zero(val=0) {return Math.floor(eval(0+val))}
function one(val=0) {return Math.floor(eval(1+val))}
function two(val=0) {return Math.floor(eval(2+val))}
function three(val=0) {return Math.floor(eval(3+val))}
function four(val=0) {return Math.floor(eval(4+val))}
function five(val=0) {return Math.floor(eval(5+val))}
function six(val=0) {return Math.floor(eval(6+val))}
function seven(val=0) {return Math.floor(eval(7+val))}
function eight(val=0) {return Math.floor(eval(8+val))}
function nine(val=0) {return Math.floor(eval(9+val))}

function plus(val) {return '+'+val}
function minus(val) {return '-'+val}
function times(val) {return '*'+val}
function dividedBy(val) {return '/'+val}












// function order(words){
//     // ...
//     if(words==="" || words ===" "){
//         // return ""
//         console.log("Empty string")
//     }
//     else{
//       let new_words = [];
//       let arr_words = words.split(" ");
//       console.log(arr_words)

//       arr_words.forEach(word => {
//       for(let i=0; i<word.length; i++){
//         if(Number.isInteger(Number(word[i]))){
//           new_words[word[i]-1] = word;
//         }
        
//       }
//       })
//       console.log(new_words)

//       console.log(new_words.join(" "))
//       }
    
//   }
// function accum(s) {
// 	// your code
//   let s_new = [];
  
//   s_arr=s.split("");
//   s_arr.forEach((elem, index) => {
//       console.log(elem)
//       console.log(index)
//       let elems = "";
//     for(let i=0; i<index+1; i++){
     

//        elems += elem
//        console.log(elems)
//     }
//     console.log(elems)
//     s_new.push(elems)
//     console.log(s_new)
//   })
//    console.log(s_new.join("-"))
// }