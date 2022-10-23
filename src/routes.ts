import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

/** Routes */
export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: "NodeJS",
    duration: 10,
    educator: "Maycon"
  });

  return response.json(CreateCourseService)
}