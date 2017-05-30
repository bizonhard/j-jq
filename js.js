var toll = 101;
var open = "Piękna pupa moniki jest na ";
var firstName = 'Ciasteczkowy';
var lastName = 'Wieczor';
document.write('<p>');
document.write(firstName+' '+lastName);
document.write('<p>');

var name = prompt('Jak masz na imię','');
document.write('<p>Witaj, '+ name +'</p>');


var authors = [
    
    'olek kwaśniewski',
    'matełusz mazur',
    'daniel kałuzny',
    'marcin ciacho'
];

document.write('<p>Pierwszy autor to <strong>');
document.write(authors[0] +'</strong></p>');
document.write('<p>Ostatni autor to <strong>');
document.write(authors[authors.length -1] +'</strong></p>');
authors.unshift('Krokodyl Dandi');
document.write('Prawie zapomniałem o autorze <strong>',' ');
document.write(authors[0]);
document.write('</strong>')