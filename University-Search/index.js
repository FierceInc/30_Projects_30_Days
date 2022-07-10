
fetch("https://restcountries.com/v3.1/all")
.then(resp => resp.json())
.then(res => console.log(res))

