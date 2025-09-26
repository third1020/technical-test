
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"


// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:
// * 1 <= strs.length <= 200
// * 0 <= strs[i].length <= 200
// * strs[i] consists of only lower-case English letters.



// หาคำที่เหมือนกัน function
function FindPrefix(stringArray: string[]): string {
  // ถ้าไม่มีคำเลย หรือมีแค่คำเดียว 
  if (stringArray.length === 0) return "";
  if (stringArray.length === 1) return stringArray[0];
  
  const firstString = stringArray[0];
  let result = "";
  
  // ดูทีละตัวอักษรในคำแรก 
  for (let position = 0; position < firstString.length; position++) {
    const currentCharacter = firstString[position];
    let CheckPrefixString = true;
    
    // ตรวจสอบคำอื่นๆ ว่ามีตัวอักษรเดียวกันในตำแหน่งเดียวกันไหม
    for (let stringIndex = 1; stringIndex < stringArray.length; stringIndex++) {
      const currentString = stringArray[stringIndex];
      
      // ถ้าคำสั้นเกินไป หรือตัวอักษรไม่เหมือนกัน 
      if (position >= currentString.length || currentString[position] !== currentCharacter) {
        CheckPrefixString = false;
        break;
      }
    }
    
    // ถ้าทุกคำมีตัวอักษรเหมือนกัน ก็เก็บตัวอักษรนี้ไว้ 
    if (CheckPrefixString) {
      result += currentCharacter;
    } else {
      // ถ้าไม่เหมือนกันแล้ว ก็หยุดดู 
      break;
    }
  }
  
  return result;
}

// input User
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

console.log('Enter strings separated by commas:');
console.log('Example: flower,flow,flight');

rl.question('Input: ', (input: any) => {
  const strings = input.split(',').map((s: any) => s.trim());
  const result = FindPrefix(strings);
  console.log(`Result: "${result}"`);
  rl.close();
});


//ใช้คำสั่งเพื่อ test 
// npx ts-node find-prefix.ts