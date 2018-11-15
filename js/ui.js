const $show50 = $('.top50');

const displayTopMovies = (show) => {

    class Movie {

        constructor(id, name, image, rating) {

            this.id = id;
            this.image = image;
            this.rating = rating;
            this.name = name;
        }
    }
    const newTop50Array = [];

    for (let i = 0; i < show.length; i++) {

        const movie = new Movie(show[i].id, show[i].name, show[i].image, show[i].rating);
        newTop50Array.push(movie);
        const $divTop50 = $('.top50');

        const $divCard = $('<div class="card">');
        const $image = $('<img class="card-img-top">');
        $image.attr('id', movie.id);
        $image.attr('src', movie.image.medium);
        const $divBodyCard = $('<div class="card-body">')
        const $p = $('<p>');
        $p.text(movie.name);
        $divBodyCard.append($p);
        $divCard.append($image);
        $divCard.append($divBodyCard);








        $divTop50.append($divCard);
    }

    console.log(newTop50Array);

}

export {
    displayTopMovies
}