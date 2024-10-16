import { CourseFilter, CourseType } from "@/types/courseTypes";
import client from "../httpClient";

export const getCourses = async (filter: CourseFilter) => {
  console.log('GetCourses called');
  try {
    const response = await client.get<CourseType[]>(`/courses/${filter}-courses/`);
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
    console.log('New course while createCourse:', response);

    return response;
  } catch (error) {
    console.error('Error while creating the course:', error);
    throw error;
  }
};

export const editCourse = async (courseId: number, data: CourseType ) => {
  console.log('editCourse called');
  try {
    const response = await client.patch<CourseType>(`/courses/teaching-courses/${courseId}`, data);
    console.log('New course while createCourse:', response);

    return response;
  } catch (error) {
    console.error('Error while updating the course:', error);
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

