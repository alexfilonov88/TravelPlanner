const textNote = document.querySelector("#note");
const close = document.querySelector("#hide");
const add = document.querySelector("#add");
const form = document.querySelector(".inner-modal");

const cardColors = ['red', 'rgba(234, 34, 100, 0.75)', 'lightblue', 'green'];
const angles = ['rotate(25deg)', 'rotate(-15deg)', 'rotate(-5deg)', 'rotate(5deg)','rotate(15deg)']

close.addEventListener('click', function () {
    document.querySelector('.modal').style.display = "none";
});

add.addEventListener('click', function () {
    document.querySelector('.modal').style.display = "flex";
    textNote.select();
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const info = {
        from: e.target.from.value,
        to: e.target.to.value,
        budget: e.target.budget.value,
        dateFrom: e.target.date_from.value,
        dateTo: e.target.date_to.value,
        note: e.target.note.value
    }
    CreateTavelCard(info);
    form.reset();
    document.querySelector('.modal').style.display = "none";

})

// textNote.addEventListener('keydown', function (e) {
//     console.log(e);
//     if(e.key === 'Enter'){
//         const info = textNote.value;
//         CreateTavelCard(info);
//         textNote.value = '';
//         document.querySelector('.modal').style.display = "none";
//     };
// });

function CreateTavelCard(info) {
const note = document.createElement('div');
const noteDetails = document.createElement('h1');
note.className = 'card';
noteDetails.className = 'details';
noteDetails.innerHTML = `<h2> ${info.from} - ${info.to}</h2>`;
noteDetails.innerHTML += `<h3> Budget: ${info.budget}</h3>`;
noteDetails.innerHTML += `<h4> ${info.dateFrom} - ${info.dateTo}</h4>`;
noteDetails.innerHTML += `<h4> ${info.note}</h4>`;

note.style.backgroundColor = cardColors[Math.floor(Math.random()*cardColors.length)];
note.style.transform = angles[Math.floor(Math.random()*angles.length)];
note.addEventListener('dblclick', function () {
    note.remove();
})
note.appendChild(noteDetails);
document.querySelector("#all_notes").appendChild(note);

}