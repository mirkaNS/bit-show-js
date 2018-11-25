<<<<<<< HEAD
import Movie from './entities/movie.js';
=======
const requestUrl = 'http://api.tvmaze.com/shows';

>>>>>>> 7bf56a4433c75f326deb08441387d0c70c23371f
const fetchData = (onSuccess) => {

    $.ajax(requestUrl)
<<<<<<< HEAD
        .done((listOfShows) => {
            console.log('Server response onDone: ', listOfShows);
            
=======

        .done(function (listOfShows) {

            // console.log('Server response onDone: ', listOfShows);
>>>>>>> 7bf56a4433c75f326deb08441387d0c70c23371f

            listOfShows.sort((current, next) => (
                next.rating.average - current.rating.average
            ));

<<<<<<< HEAD
            const top50 = listOfShows.slice(0, 50);

            
            const newTop50Array = []
            for (let i = 0; i < top50.length; i++) {

                const movie = new Movie(top50[i].id,top50[i].name, top50[i].image, top50[i].rating,top50[i].summary);
                newTop50Array.push(movie);

            }
            console.log(newTop50Array);
            onSuccess(newTop50Array);
        })
}
const serchData=(onSuccess,param)=>{
    const requestUrl = 'http://api.tvmaze.com/search/shows?q='+param;

    $.ajax(requestUrl)
        .done((listOfShows)=>{
            const allMovies=[];
            console.log(listOfShows)
            for(let i=0;i<listOfShows.length;i++){
                console.log(listOfShows[i].show.name);
                const movies=new Movie(listOfShows[i].show.id,listOfShows[i].show.name, listOfShows[i].show.image, listOfShows[i].show.rating,listOfShows[i].show.summary)
                allMovies.push(movies);
            }
        console.log(allMovies);
                onSuccess(allMovies);

    });

}
const fetchDataPage=(onSuccess,movie)=>{
    const requestUrl="http://api.tvmaze.com/singlesearch/shows?q="+movie;
    $.ajax(requestUrl)
    .done((oneMovie)=>{
        console.log(oneMovie);
        const movie=new Movie(oneMovie.id,oneMovie.name,oneMovie.image,oneMovie.rating.average,oneMovie.summary)
       const seasonRequestUrl="http://api.tvmaze.com/shows/"+movie.id+"/seasons"
        $.ajax(seasonRequestUrl)
        .done((seasons)=>{
            movie.seasons=seasons;
        //    console.log(movie.seasons);
            onSuccess(movie);

        })


        
    });
}
=======
            onSuccess(listOfShows);
        });
}



>>>>>>> 7bf56a4433c75f326deb08441387d0c70c23371f

export {
    fetchData,
    serchData,
    fetchDataPage
}
