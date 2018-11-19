const $top50=$(".top50");

const dispayMovies=(movies)=>{

    for(let i=0;i<movies.length;i++){

        const $card=$("<div class='card col-12 col-sm-6 col-md-4'>");
        const $img=$("<img class='card-img-top'>")
        const $cardBody=$("<div class='card-body cardText'>");
        const $p=$("<p class='card-text'>")

        $img.attr("src",movies[i].image.medium);
        $card.append($img);
        $p.text(movies[i].name);
        $cardBody.append($p);
        $card.append($cardBody);
        $top50.append($card);
        

    }
    console.log(movies[0].image);




}

const $dropdown=$(".dropdown-menu");
const findMovie=(movies)=>{
    $dropdown.html("");
    if(movies.length==0){
        $dropdown.css("display","none");
    }else{
        $dropdown.css("display","block");
    }
    for(let i=0;i<movies.length;i++){

        const $a=$("<a class='dropdown-item'>");
        $a.attr('movie', movies[i].name); 
        $a.text(movies[i].name);
        $dropdown.append($a);
        $a.click(() => {
            window.location = "showInfoPage.html?movie="+ movies[i].name;
        })

    }
}

const infoMovie=(movie)=>{
    
    const $title=$(".h3");
    $title.text(movie.name);
    console.log(movie);
    const $img=$(".img");
    $img.attr("src",movie.image.medium)
    const $p=$(".p");
    $p.html(movie.summary);
    const $p2=$(".rating");
    $p2.html(movie.rating);
    const $ul=$(".season");
    
    for(let i=0;i<movie.seasons.length;i++){
    const $li=$("<li>");
    $li.text(movie.seasons[i].number);
    $ul.append($li);
    }
}
export {
    dispayMovies,
  infoMovie,
  findMovie
}