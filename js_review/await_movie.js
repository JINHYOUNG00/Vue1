let listUrl = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20240604';
let infoUrl = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=';

// 콜백지옥
// fetch(listUrl)
//     .then(resolve => resolve.json())
//     .then(result => {
//         let movieCd = result.boxOfficeResult.dailyBoxOfficeList[0].movieCd;
        
//         fetch(infoUrl+movieCd)
//             .then(resolve => resolve.json())
//             .then(result => console.log(result.movieInfoResult.movieInfo.directors[0].peopleNm))
//     })

(async function movieInfo(){
    let movieList = await fetch(listUrl)
        .then(resolve => resolve.json())
    let movieCd = movieList.boxOfficeResult.dailyBoxOfficeList[0].movieCd;

    let a = await fetch(infoUrl+movieCd)
        .then(resolve => resolve.json())
        
    console.log(a.movieInfoResult.movieInfo.directors[0].peopleNm)
})();
