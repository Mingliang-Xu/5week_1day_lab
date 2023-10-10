
function sizeSorter (string) {

    let sizeArray = string.trim().toLowerCase().split('');

    // console.log(sizeArray);

    let sizeS = sizeArray.filter(element=> element ==="s");
    let sizeM = sizeArray.filter(element=> element ==="m");
    let sizeL = sizeArray.filter(element=> element ==="l");


    let newSizeArray = [...sizeS,...sizeM,...sizeL];
    // console.log(newSizeArray)
    let = SortedString = newSizeArray.join('');
    console.log(SortedString);
}


sizeSorter('llssmmllllmMmslmm');


function tShirtSizeSorter(str) {
    let small = ""
    let medium = ""
    let large = ""
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "s") {
        small += "s"
      } else if (str[i] === "m") {
        medium += "m"
      } else {
        large += "l"
      }
    }
    return small + medium + large
  };

  const tShirtSorter = str => str.toLowerCase().split('').sort().reverse().join('');

  console.log(tShirtSizeSorter('llssmmllllmMmslmm'));
  console.log(tShirtSorter('llssmmllllmMmslmm'));

