// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    const arr = str.split('');
    arr.reverse();
    return arr.join('');
}

module.exports = reverse;

// Step 1. Use the split() method to return a new array
 // ["h", "e", "l", "l", "o"]

  // Step 2. Use the reverse() method to reverse the new created array
  // ["o", "l", "l", "e", "h"]

  // Step 3. Use the join() method to join all elements of the array into a string
   // "olleh"