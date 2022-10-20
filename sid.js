const separateByComma=()=>{

    console.log("clcicked");
    listWithoutComma= [];
    listWithoutCommaFinal= [];
    choice1='\n';
    listWithoutComma.push(document.querySelector('#original').value.split(choice1));
    finalList=removeDuplicates(listWithoutComma);
    finalList.join(',');
    document.querySelector('#commaSeparated').value=finalList;
}
{
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
