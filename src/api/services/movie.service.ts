import axios from "axios";
import { StatusCodes } from "http-status-codes";
import { ErrorMessages, SuccessMessages } from "@/config";
import { AppError } from "@/utils";
import GetURL from "@/utils/fetchUrl/FetchUrl";


interface IMovieService{
    getGenreList(): Promise<{data:[],message:string}>;
    getMovie(id:string): Promise<{data:[],message:string}>;
    getMovieCategory(category:string,page:number): Promise<{data:[],message:string}>;
    getGenre(genreId:string,page:number): Promise<{data:[],message:string}>;
    getSearchedMovie(movieName:string,page:number): Promise<{data:[],message:string}>;
}

class MovieService implements IMovieService{
    async getMovie(id: string){

        const {data} = await axios.get(GetURL.movieURL(id));

        console.log(data);

        if(!data){
           throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, ErrorMessages.DatabaseErrors.QUERY_FAILED);
        }

    
        return {
            data,
            message: SuccessMessages.DatabaseSuccess.QUERY_SUCCESS
        };
    }

   async getMovieCategory(category: string,page:number){

        const {data} = await axios.get(GetURL.movieCategoryURL(category,page));

        if(!data){
           throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, ErrorMessages.DatabaseErrors.QUERY_FAILED);
        }

        const movieData = data.results;

        return {
            data: movieData,
            message:SuccessMessages.DatabaseSuccess.QUERY_SUCCESS
        };
    }

    async getSearchedMovie(movieName:string,page:number){

        const {data} = await axios.get(GetURL.searchedMovieURL(movieName,page));

        if(!data){
           throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, ErrorMessages.DatabaseErrors.QUERY_FAILED);
        }

        const movieData = data.results;

        return {
            data: movieData,
            message:SuccessMessages.DatabaseSuccess.QUERY_SUCCESS
        };
    }

    async getGenreList(){
       
        console.log(await axios.get(GetURL.genreListURL()));
        
        const {data} = await axios.get(GetURL.genreListURL());

        
        if(!data){
             throw new AppError(
            StatusCodes.NOT_FOUND,
            `${ErrorMessages.GenericErrors.NOT_FOUND}`
        );
        }

        const movieData = data.genres;

        return {
            data: movieData,
            message:SuccessMessages.DatabaseSuccess.QUERY_SUCCESS
        };
    }

    async getGenre(genreId:string,page:number){

        const {data} = await axios.get(GetURL.genreMoviesURL(genreId,page));

        if(!data){
           throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, ErrorMessages.DatabaseErrors.QUERY_FAILED);
        }

        const movieData = data.results;

        return {
            data: movieData,
            message:SuccessMessages.DatabaseSuccess.QUERY_SUCCESS
        };
    }
}

export const movieService = new MovieService();