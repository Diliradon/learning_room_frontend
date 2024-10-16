export type TeachersType = {
  first_name: string;
  last_name: string;
};

type ColorKeys = 'secondary-100' | 'secondary-200' | 'secondary-300' | 'secondary-400' | 'primary-100';

export type CourseType = {
  id: string | number;
  name: string;
  description: string;
  unique_key: string;
  teachers: TeachersType[];
  students: TeachersType[];
  number_of_classroom: string;
  color: ColorKeys;
}
// } & {
//   [key: string]: string;
// };

export type CourseFilter = 'studying' | 'teaching';
