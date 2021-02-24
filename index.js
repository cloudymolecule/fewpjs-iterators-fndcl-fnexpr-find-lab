
function superbowlWin(array) {
    let element = array.find(function(e){
        if (e.result === 'W'){
            return e
        }
    })
    if (element) {
        return element.year
    } 
}

