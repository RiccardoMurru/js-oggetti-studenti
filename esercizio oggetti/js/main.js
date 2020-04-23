/**
* Creare un oggetto che descriva uno studente
* lo studente avrà  le seguenti proprietà: nome, cognome e età.
* Stampare attraverso il for..in tutte le proprietà (chiavi e valori).
* 
*/


var student = {
    name: 'Riccardo',
    surname: 'Murru',
    age: 34
};

for (var key in student) {
    console.log(key + ': ' + student[key]);

};
