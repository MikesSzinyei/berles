const ownerRadio = document.querySelector('#owner')
const renterRadio = document.querySelector('#renter')
const cusRenterRadio = document.querySelector('#cusRenter')
const subCusRenterRadio = document.querySelector('#subCusRenter')

ownerRadio.addEventListener('click',() => {
    console.log("Az eladó egy tulajdonos");
});

renterRadio.addEventListener('click',() => {
    console.log("Az eladó bérlő");
    subCusRenterRadio.checked = true
});


// cusRenterRadio.addEventListener('click',() => {
//     console.log("mukodik 3");
// });

// subCusRenterRadio.addEventListener('click',() => {
//     console.log("mukodik 4");
// });