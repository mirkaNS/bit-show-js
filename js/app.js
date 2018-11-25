<<<<<<< HEAD
import * as ui from './ui.js'
=======

>>>>>>> 7bf56a4433c75f326deb08441387d0c70c23371f
import * as data from './data.js'
import * as ui from './ui.js'

const init = () => {
    console.log("App initialized");
<<<<<<< HEAD
    const response = (data) => {
        ui.dispayMovies(data);
    }
    data.fetchData(response);
    const $search=$(".search");

   const showSerchResult=(data)=>{
       ui.findMovie(data);
   }
    console.log($search);  ///change kada hocu da neko zavrsi sa kucanjem
    $search.keyup(()=>{
        console.log($search.val());


        data.serchData(showSerchResult, $search.val());//zameni funkciju response
    });

}

const initDetails = () => {
    console.log("details page initialized");
    const movie = window.location.search.split("=");
    console.log(movie[1]);
    const result=(movie)=>{
        ui.infoMovie(movie);
        console.log(movie);
    }
    data.fetchDataPage(result,movie[1]);
  

    // pozovi funkciju iz data.js i prosledi onSuccess function i movie name (movie[1])
    // kreiraj tu funkciju u data.js ima dva parametra
    // nadji api url dodaj movie name
    // ajax poziv na taj url pokupis podatke stavis u movie objekat sve sto ti treba
    // vratis u onSuccess function u app.js
    // gde zoves ui function za prikaz tih podataka

=======
    data.fetchData(onSuccess);
}

const onSuccess = (listOfShows) => {

    const top50 = listOfShows.slice(0, 51);
    console.log(listOfShows);
    ui.displayTopMovies(top50);
>>>>>>> 7bf56a4433c75f326deb08441387d0c70c23371f

}

export {
    init,
    initDetails
}
