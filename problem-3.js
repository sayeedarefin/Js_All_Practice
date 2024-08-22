function paperRequirements(book1, book2, book3){
    let book1Page=100*book1;
    let book2Page=200*book2;
    let book3Page=300*book3;

    let totalPage = book1Page+book2Page+book3Page;

    return totalPage;

}
let paper =paperRequirements(5,6,7) ;
console.log(paper);
