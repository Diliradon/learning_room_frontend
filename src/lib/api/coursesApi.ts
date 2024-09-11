import { CourseType } from "@/redux/features/coursesSlice";
import client from "../httpClient";

export const getCourses = async () => {
  console.log('getCourses called');
  try {
    const response = await client.get<CourseType[]>('/courses/studying-courses/');
    console.log('Courses:', response);

    return response;
  } catch (error) {
    console.error('Error during geting courses:', error);
    throw error;
  }
};

export const createCourse = async (data: Pick<CourseType, 'name' | 'description' | 'number_of_classroom'> ) => {
  console.log('createCourse called');
  try {
    const response = await client.post<CourseType>('/courses/teaching-courses/', data);
    console.log('New course:', response);

    return response;
  } catch (error) {
    console.error('Error while creating the course:', error);
    throw error;
  }
};

export const joinCourse = async (courseKey: string) => {
  console.log('joinCourse called');

  try {
    const response = await client.post('/courses/studying-courses/join-course/', { unique_key: courseKey });
    console.log('Joined to course:', response);
  } catch (error) {
    console.error('Error while joining the course:', error);
    throw error;
  }
}

