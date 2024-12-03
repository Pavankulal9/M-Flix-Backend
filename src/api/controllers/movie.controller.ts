import { AsyncMiddlewareFunction } from "@/types/core.types";
import { AppError, AppResponse, AsyncMiddlewareHandler } from "@/utils";
import { StatusCodes } from "http-status-codes";
import { movieService  } from "@/api/services";
import { ErrorMessages } from "@/config";

interface IMovieController{
    getGenreList: AsyncMiddlewareFunction;
    getMovie: AsyncMiddlewareFunction;
    getMovieCategory: AsyncMiddlewareFunction;
    getGenre: AsyncMiddlewareFunction;
    getSearchedMovie: AsyncMiddlewareFunction;
}


class MovieController implements IMovieController{
    @AsyncMiddlewareHandler
    getMovie: AsyncMiddlewareFunction = async(req,res)=>{
        const {id} = req.params;

        if(!id){
            throw new AppError(
                StatusCodes.NOT_FOUND,
                `id ${ErrorMessages.GenericErrors.NOT_FOUND}`
            )
        }

        const {data,message} = await movieService.getMovie(
           id
        );

        res
        .status(StatusCodes.OK)
        .json(
            new AppResponse(
                StatusCodes.OK,
                message,
                data
            )
        );
    }

    @AsyncMiddlewareHandler
    getMovieCategory: AsyncMiddlewareFunction = async(req,res)=>{
        const {category} = req.params;
        const page = req.query.page ? Number(req.query.page) : 1;

        

        if(!category){
            throw new AppError(
                StatusCodes.NOT_FOUND,
                `category ${ErrorMessages.GenericErrors.NOT_FOUND}`
            )
        }


        const {data,message} = await movieService.getMovieCategory(
            category,page
        )

        res
        .status(StatusCodes.OK)
        .json(
            new AppResponse(
                StatusCodes.OK,
                message,
                data
            )
        )
    }

    @AsyncMiddlewareHandler
    getGenreList: AsyncMiddlewareFunction = async(req,res)=>{
    
        const {data,message} = await movieService.getGenreList();

        res
        .status(StatusCodes.OK)
        .json(
            new AppResponse(
                StatusCodes.OK,
                message,
                data
            )
        )
    }

    @AsyncMiddlewareHandler
    getGenre: AsyncMiddlewareFunction = async(req,res)=>{
        const {genreId} = req.params;
        const page = req.query.page ? Number(req.query.page) : 1;

          if(!genreId){
            throw new AppError(
                StatusCodes.NOT_FOUND,
                `Genre ${ErrorMessages.GenericErrors.NOT_FOUND}`
            )
        }

        const {data,message} = await movieService.getGenre(
            genreId,page
        );

        res
        .status(StatusCodes.OK)
        .json(
            new AppResponse(
                StatusCodes.OK,
                message,
                data
            )
        );
    }

    @AsyncMiddlewareHandler
    getSearchedMovie: AsyncMiddlewareFunction = async(req,res)=>{
        const {movieName} = req.params;
        const page = req.query.page ? Number(req.query.page) : 1;

          if(!movieName){
            throw new AppError(
                StatusCodes.NOT_FOUND,
                `Movie ${ErrorMessages.GenericErrors.NOT_FOUND}`
            )
        }

        const {data,message} = await movieService.getSearchedMovie(
            movieName.toString(),page
        );

        res
        .status(StatusCodes.OK)
        .json(
            new AppResponse(
                StatusCodes.OK,
                message,
                data
            )
        );
    }
}

export const movieController = new MovieController();