function displaydata(data){
result.value+=data
}
function allclear(){

result.value=""

}

function add(){
    result.value=eval(result.value)
}
function clearr(){
    // data=result.value
    result.value=result.value.slice(0,-1)
}
