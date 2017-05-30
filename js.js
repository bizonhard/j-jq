var toll = 101;
var kolor = 1;
var open = "Piękna pupa moniki jest na ";
var firstName = 'Ciasteczkowy';
var lastName = 'Wieczor';
document.write('<p>');
document.write(firstName+' '+lastName);
document.write('<p>');

//var name = prompt('Jak masz na imię','');
//document.write('<p>Witaj, '+ name +'</p>');
//document.body.style.background='#ff3366';


var authors = [
    
    'olek kwaśniewski',
    'matełusz mazur',
    'daniel kałuzny',
    'marcin ciacho'
];

document.write('<p>Pierwszy autor to <strong>');
document.write(authors[0] +'</strong></p>');
document.write('<h1>Ostatni autor to <strong>');
document.write(authors[authors.length -1] +'</strong></p>');
authors.unshift('<br>Krokodyl Dandi');
document.write('Prawie zapomniałem o autorze: <strong>',' ');
document.write(authors[0]);
document.write('</strong><br>')





//kolejny program sprawdzjący kolor w zmiennej

if (kolor == 'red') {
    
    alert('wygrałeś');
    
    document.body.style.background='#ff3366';
    document.body.style.color='#33cc00';
    
}else if (kolor == 12){
          
    alert('przegrałeś');
    authors.push('<br><h1>UWAGA PRZEGRAŁEŚ!</h1>');
    document.write(authors);
    
    
}else if (kolor == 1){

    document.write('100 lat 100lat niech żyje żyje nam');
}






// program do podpowiedzenia co możesz robić w wolnym czasie 
var day = prompt('Podaj dzień tygodnia', '');

if ( day == 'piatek'){

var fridayCash = prompt('możesz iść na ', ' ');
day = parseInt(day);
   

if (fridayCash >= 80){
    
    document.write('<p class="test">możesz iść do kina<p>');
    
}else if(fridayCash >= 40){
    
    document.write('<h1 class="test">możesz iść na mecz!<h1>');
}else{
    
    document.write('<p class="test">ok zostani w domu</p>');
  }
    
    //tu rozpoczyna się odpowieć druga na drugi warunek
}else{
    
    document.write('<br><p class="test">W tym dniu nie ma nic na mieście</p>');
}
//Program umożliwiający sprawdzenie liczby w kilku warunkach jednocześnie 

/*liczba = prompt('Wpisz liczbę', ' ');

if (liczba < 10 && liczba > 1){
    
    document.write('<br>Liczba jest mniejsza od 10 ale wieksz od 3');
} else{
    
    document.write('<br>liczba jest inna');
}
*/