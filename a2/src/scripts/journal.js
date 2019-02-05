
const entryButton = document.querySelector("#entryButton")

const get = fetch("http://localhost:3000/entries")
    .then(entries => entries.json())
    .then(parsedEntries => {
        parsedEntries.forEach(entry => {
            const entryAsHTML = makeJournalEntryComponent(entry)
            renderJournalEntries(entryAsHTML)
        })
    })



entryButton.addEventListener(
    "click",
    () => {
        const conceptIN = document.querySelector("#conceptIN").value
        const moodIN = document.querySelector("#moodIN").value
        const dateIN = document.querySelector("#dateIN").value
        const entryIN = document.querySelector("#entryIN").value
console.log(entryIN)
console.log(conceptIN)
        let newJournalEntry = {
            date: `${dateIN}`,
            concepts: `${conceptIN}`,
            entry: `${entryIN}`,
            mood: `${moodIN}`,
        }

        fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newJournalEntry)
        })
        .then(get)
    })



const makeJournalEntryComponent = (allEntries) => {
    return `
    <div class="entry">
    <h1>${allEntries.concepts}</h1>
    <h2>Feeling ${allEntries.mood} on ${allEntries.date}</h2>
    <p>${allEntries.entry}</p> 
    </div>`
}

function renderJournalEntries(x) {
    const containerEl = document.querySelector("#entryLog")
    containerEl.innerHTML += x
};


// function validateForm(inputValue) {
//     var x = document.forms["form1"][`${inputValue}`].value;
//     var regex = /^[a-zA-Z0-9@]+$/;
//     if (x == "") {
//       alert("all form entries must be filled out");
//       return false;
//     }
//     if (regex.test(x !== true)){
//         alert("no special characters or numbers may be used")
//     }
//   } 