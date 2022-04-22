function shortLongShort(string1, string2) {
  let length1 = string1.length;
  let length2 = string2.length;

  if (length1 < length2) {
    console.log(string1.concat(string2, string1));
  } else if (length1 > length2) {
    console.log(string2.concat(string1, string2));
  } else {
    console.log('Invalid input.');
  }
}






shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"