

fetch("http://localhost:3000/entries")
    .then(entries => entries.json())
    .then(parsedEntries => {
        parsedEntries.forEach(entry => {
            const entryAsHTML = makeJournalEntryComponent(entry)
            renderJournalEntries(entryAsHTML)
        })
    })

const makeJournalEntryComponent = (allEntries) => {
    return `
    <h1>${allEntries.concepts}</h1>
    <h2>Feeling ${allEntries.mood} on ${allEntries.date}</h2>
    <p>${allEntries.entry}</p> `
}

function renderJournalEntries(x){
    const containerEl = document.querySelector("#entryLog")
    containerEl.innerHTML += x };