
//Long Word Game//

var longWords = ['rotavator','perfidiousness','subdermatoglyphic','sesquipedalian',
'Supercalifragilisticexpialidocius', 'floccinaucinihilipilification', 'pseudopseudohypoparathyroidism', 'parastratiosphecomyiastratiosphecomyioides','Aequeosalinocalcalinosetaceoaluminosocupreovitriolic','Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch']

//Possible Issue incoming - i.e. Some words not being able to fit the screen?

function gameLost() {
  alert("You loose!");
}
setTimeout('gameLost()', 60000);
