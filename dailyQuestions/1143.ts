// function longestCommonSubsequence(text1: string, text2: string): number {
//     let text3: string[] = text1.split('').length <= text2.split('').length ? text1.split('') : text2.split('') 
//     let text4: string[] = text1.split('').length <= text2.split('').length ? text2.split('') : text1.split('')
//     let len: number = 0, k: number = 0;
//     for (let i = 0; i < text3.length; i++) {
//         for (let j = k; j < text4.length; j++) {
//             if (text3[i] === text4[j]) {
//                 len++
//                 k = j + 1
//                 break
//             }
//         }
//     }
//     return len
// };
let dp = Array.from(new Array(4),() => new Array(4).fill(0));
console.log(dp)
// console.log(longestCommonSubsequence("pmjghexybyrgzczy","hafcdqbgncrcbihkd"))