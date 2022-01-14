//change this 
const input = 230
// quick test too see how non-eng characters interact
// capped at 999


// hiragana from 0-9
// never actually uses 0(?) but helps with zero indexing
let nums = ["れい",
            "いち",
            "に",
            "さん",
            "よん",
            "ご",
            "ろく",
            "なな",
            "はち",
            "きゅう"]

let inputArr = (""+input).split("").map(Number)
let digits = inputArr.length
if(digits > 3){
    console.log("There was an unexpected input value")
    return
}

let str1 = ""
let str2 = ""
let str3 = ""

if(digits == 3){
    let hundVal = inputArr[0]
    if(hundVal == 1){
        str1 = "ひゃく"
    }else{
        str1 = nums[hundVal] + "ひゃく"
    }

    let tenVal = inputArr[1]
    if(tenVal == 0){
        // do nothing
    }else if(tenVal == 1){
        str2 = "じゅう" 
    }else{
        str2 = nums[tenVal] + "じゅう" 
    }
}


if(digits == 2){
    let tenVal = inputArr[0]
    if(tenVal == 1){
        str2 = "じゅう" 
    }else{
        str2 = nums[inputArr[0]] + "じゅう" 
    }
}

if(inputArr[digits-1] != 0 || digits == 1){
    str3 = nums[inputArr[digits-1]]
}

console.log(str1 + str2 + str3)

