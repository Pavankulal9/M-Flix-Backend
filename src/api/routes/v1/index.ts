import { ExpressRouter } from "@/types/utility.types";
import { Router } from "express";
import movieRouter from '@/api/routes/v1/movie.route';

const router:ExpressRouter = Router();

router.use('/movie',movieRouter);

export default router;