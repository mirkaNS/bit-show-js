const requestUrl = 'http://api.tvmaze.com/shows';

const fetchData = (onSuccess) => {

    $.ajax(requestUrl)

        .done(function (listOfShows) {

            // console.log('Server response onDone: ', listOfShows);

            listOfShows.sort((current, next) => (
                next.rating.average - current.rating.average
            ));

            onSuccess(listOfShows);
        });
}




export {
    fetchData
}
