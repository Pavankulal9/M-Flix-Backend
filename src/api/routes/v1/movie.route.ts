import { Router } from "express";
import { movieController } from "@/api/controllers";
import { ExpressRouter } from "@/types/utility.types";

const router:ExpressRouter = Router();

router.get(`/category/:category`, movieController.getMovieCategory);
router.get(`/:id`, movieController.getMovie);
router.get(`/genre/list`, movieController.getGenreList);
router.get(`/discover/:genreId`, movieController.getGenre);
router.get(`/search/:movieName`, movieController.getSearchedMovie);

export default router;