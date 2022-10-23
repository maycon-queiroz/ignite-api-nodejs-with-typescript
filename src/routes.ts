import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

/** Routes */
export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute("NodeJS", 10, "Maycon");
  return response.json(CreateCourseService)
}