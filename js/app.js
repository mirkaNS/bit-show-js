
import * as data from './data.js'
import * as ui from './ui.js'

const init = () => {
    console.log("App initialized");
    data.fetchData(onSuccess);
}

const onSuccess = (listOfShows) => {

    const top50 = listOfShows.slice(0, 51);
    console.log(listOfShows);
    ui.displayTopMovies(top50);

}

export {
    init
}
