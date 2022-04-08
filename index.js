// Code your solution here
function findMatching(dNames, drivers){
    const results = dNames.filter(nameTest => nameTest == drivers);
    return results;
}

function fuzzyMatch(dNames, drivers){
    let dr = drivers.split();
        let results = dNames.filter(nameTest => nameTest.slice(0,2) == dr.slice(0,2));
        return results
    
}

function matchName(dObj, drivers){
    const results = dObj.filter(nameTest => nameTest.name === drivers);
    return results;
}