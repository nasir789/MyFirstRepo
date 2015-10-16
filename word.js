
//Long Word Game//

// var title = ['Orange', 'Apple', 'Mango', 'Airplane', 'Kiwi'];
//
// var i = 0;  // the index of the current item to show
//
// setInterval(function() {            // setInterval makes it run repeatedly
//     document
//         .getElementById('fruit')
//         .innerHTML = title[i++];    // get the item and increment
// }, 1000);

var wordBank = ['rotavator', 'perfidiousness', 'subdermatoglyphic', 'sesquipedalian', 'Supercalifragilisticexpialidocius', 'floccinaucinihilipilification', 'pseudopseudohypoparathyroidism', 'parastratiosphecomyiastratiosphecomyioides', 'Aequeosalinocalcalinosetaceoaluminosocupreovitriolic', 'Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch'];

var i = 0;

setInterval(function() {            // setInterval makes it run repeatedly
    document.getElementById('wordTest')
        .innerHTML = wordBank[i++];    // get the item and increment
    if (i == wordBank.length) i = 0;
      // reset to first element if you've reached the end
}, 12000);
function gameLost() {
  alert("You lose!");
}
setTimeout('gameLost()', 120000);

// var foo = prompt("Give me input");



// Possible Issue incoming - i.e. Some words not being able to fit the display?


// function gameLost() {
//   alert("You lose!");
// }
// setTimeout('gameLost()', 60000);
