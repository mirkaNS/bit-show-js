
const fetchData = (onSuccess) => {

    const requestUrl = 'http://api.tvmaze.com/shows';

    $.ajax(requestUrl)
        .done((listOfShows) => {
            console.log('Server response onDone: ', listOfShows);
            onSuccess(listOfShows);

            listOfShows.sort((current, next) => (
                next.rating.average - current.rating.average
            ));

            const top50 = listOfShows.slice(0, 50);

            class Movie {

                constructor(id, image, rating) {

                    this.id = id;
                    this.image = image;
                    this.rating = rating;
                }
            }
            const newTop50Array = []
            for (let i = 0; i < top50.length; i++) {

                const movie = new Movie(top50[i].id, top50[i].image, top50[i].rating);
                newTop50Array.push(movie);

            }
            console.log(newTop50Array);

        })
}

export {
    fetchData
}
