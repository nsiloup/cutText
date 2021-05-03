
let txt = "";
do{
    txt = prompt("Paste or Enter the original and CLEANED (without break line) text HERE", "");
}while(txt.length == 0);

let part = "";
do{
    part = prompt("type your search ", "");
}while(part.length == 0);
let look= new RegExp(part, "ig");

let range = -1;
do{
    range = Number(prompt("Enter the range to go back for more tolerance, if you're note sure, put 0", ""));
}while(range < 0);

let portion = -1;
do{
    portion = Number(prompt("Enter the length of the next text please", "")) ;
}while(portion == -1);

function suite(str, search,  rg, next) {
    var result = [];
    var match;
    search = new RegExp(search);
    while (match = search.exec(str)){
        result.push(match.index);
    };

    let finStr = str.substr(result-rg, next)

    return finStr ;
}

document.write(suite(txt, look, range, portion));
