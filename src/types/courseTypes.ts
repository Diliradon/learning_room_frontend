export type TeachersType = {
  first_name: string;
  last_name: string;
};

export type CourseType = {
  id: string | number;
  name: string;
  description: string;
  unique_key: string;
  teachers: TeachersType[];
  students: TeachersType[];
  number_of_classroom: string;
};

export type CourseFilter = 'studying' | 'teaching';
