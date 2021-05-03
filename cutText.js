function suite(str, search,  rg) {
    var result = [];
    var match;
    search = new RegExp(search);
    while (match = search.exec(str)){
        result.push(match.index)
    };
    let finStr = str.substr(result[result.length-1]+1-rg,)//+- 15 pour plus de tolérance

    return finStr;
}
//(search, doc)
let txt = "";
do{
    txt = prompt("Paste or Enter the original and CLEANED (without break line) text HERE", "");
}while(txt.length == 0);

let part ;
do{
    part = prompt("/type your search with/ig", "");
}while(part.length == 0);

let range;
do{
    range = Number(prompt("Enter the range to go back for more tolerance, if you're note sure, put 5", ""));
}while(!range);
let look= new RegExp(part, "ig");
document.write(suite(txt, look, range));
