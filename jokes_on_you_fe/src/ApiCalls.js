
function getData(){
fetch('')
.then(res => res.json)
.then(data => console.log(data))
.catch(error => console(error))
}