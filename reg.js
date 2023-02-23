fetch('https://restcountries.com/v3.1/all')
.then(Response => Response.json())
.then(data => {
data.forEach(countries => {
   // console.log(countries);
   console.log(`country flag:${countries.flags.svg}`);
    console.log(`country name: ${countries.altSpellings[1]}`);
    console.log(`Region: ${countries.region}`);
   console.log(`Sub-region: ${countries.subregion}`);
    console.log(`population: ${countries.population}`);
    })
})
.catch(console.error())