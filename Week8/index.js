// this code runs sunchronously
function showData() {
    // lots of code
    console.log("showData functionrunning")
}

// this code runs asynchronously
async function getRandomFact() {
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
    // console.log(response)
    const data = await response.json()
    console.log(data.text,"\n")
    // console.log("getDataa finished")
}

// this code runs asynchronously
async function getTodayFact() {
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/today")
    // console.log(response)
    const data = await response.json()
    console.log(data.text,"\n")
    // console.log("getDataa finished")
}

getRandomFact()
getTodayFact()

// getData()
// showData()