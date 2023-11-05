function twoSums(nums, target){
  for(let i = 0; i < nums.length; i++){
    for(let j = i + 1; j < nums.length; j++){
      if(nums[i] + nums[j] === target){
        return true
      }
    }
  }
}

function twoSumMap(nums, target) {
  const numToIndex = new Map(); // Map to store number-index pairs

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numToIndex.has(complement)) {
      // Found a pair
      return [numToIndex.get(complement), i];
    }

    // Store the current number and its index
    numToIndex.set(nums[i], i);
  }

  // No pair found
  return null;
}

//ANAGRAM
function isAnagram(s, t) {
  // Check if the lengths of the strings are different
  if (s.length !== t.length) {
    return false;
  }

  // Create an object to store the frequencies of characters in the first string
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    // If the character is not in the object, add it with a frequency of 1
    if (obj[s[i]] == undefined) {
      obj[s[i]] = 1;
    } else {
      // If the character is already in the object, increment its frequency
      obj[s[i]]++;
    }
  }

  // Check the frequencies of characters in the second string
  for (let i = 0; i < t.length; i++) {
    // If the character is not in the object or its frequency is 0, the strings are not anagrams
    if (obj[t[i]] == undefined || obj[t[i]] == 0) {
      return false;
    } else {
      // If the character is in the object, decrement its frequency
      obj[t[i]]--;
    }
  }

  // If all characters have been accounted for, the strings are anagrams
  return true;
}


//

function name(arguments){

}
