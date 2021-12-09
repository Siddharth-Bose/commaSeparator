function separateByComma(){
    listWithoutComma= [];
    listWithoutCommaFinal= [];
    choice1=';';
    listWithoutComma.push(document.querySelector('#original').value.split(choice1));
    for (var i=0;i<listWithoutComma[0].length;i++){
        listWithoutCommaFinal.push(listWithoutComma[0][i]);
        listWithoutCommaFinal=removeDuplicates(listWithoutCommaFinal);
        choice2=',';
        var text = listWithoutCommaFinal.join("'"+choice2+"'");
        document.querySelector('#commaSeparated').value=text;
        setTimeout(function() {document.querySelector('.fas').style="box-shadow:0 0 5px 5px grey;";},0);
        setTimeout(function() {document.querySelector('.fas').style="box-shadow:0 0 0 0 grey;";},100);
    }
}
function removeDuplicates(listWithoutCommaFinal){
    function removeIt(word){
        listWithoutCommaFinal= !listWithoutCommaFinal[i];
    }
    counts=[];
    duplicates=[];
    for (const word of listWithoutCommaFinal) {
        counts[word] = counts[word] ? counts[word] + 1 : 1;
      }
    for(var i=0;i<listWithoutCommaFinal.length;i++){
        if(counts[listWithoutCommaFinal[i]]>1){
            duplicates.push(listWithoutCommaFinal[i]);
            listWithoutCommaFinal.splice(i,1);
            i--;
            console.log('LIST WITHOUT DUPLICATES ' + listWithoutCommaFinal);
            console.log('DUPLICATES '+duplicates);
        }
    }
    length=duplicates.length;
    for(var i=0;i<length;i++){
        listWithoutCommaFinal.push(duplicates[i]);
        length--;
    }
    return listWithoutCommaFinal;
}