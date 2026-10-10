
 class GetURL{
    protected baseURL= "https://api.themoviedb.org/3";
    protected baseMovieURL = `${this.baseURL}/movie`

    movieURL(id:string){
        return `${this.baseMovieURL}/${id}?api_key=${process.env.API_KEY}`
    }

    movieCategoryURL(category:string,page:number){
        return `${this.baseMovieURL}/${category}?api_key=${process.env.API_KEY}&page=${page}`
    }

    searchedMovieURL(query:string,page:number){
         return `${this.baseURL}/search/movie?api_key=${process.env.API_KEY}&query=${query}&page=${page}`
    }

    genreListURL(){
        return `${this.baseURL}/genre/movie/list?api_key=${process.env.API_KEY}`
    }
    
    genreMoviesURL(genreId:string,page:number){
        return `${this.baseURL}/discover/movie?api_key=${process.env.API_KEY}&page=${page}&with_genres=${genreId}`
    }
}

const getURL = new GetURL();
export default getURL;
