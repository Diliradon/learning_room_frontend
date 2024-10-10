import { createCourse, getCourses, joinCourse } from '@/lib/api/coursesApi';
import client from '@/lib/httpClient';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TableRowsSplitIcon } from 'lucide-react';

type TeachersType = {
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

interface CoursesState {
  studyingCourses: CourseType[];
  teachingCourses: CourseType[];
  loading: boolean;
  error: string | null;
}

export type CourseFilter = 'studying' | 'teaching';

const initialState: CoursesState = {
  studyingCourses:
    typeof window !== 'undefined'
      ? (() => {
          const courses = localStorage.getItem('studyingCourses');
          return courses && courses !== 'undefined' ? JSON.parse(courses) : [];
        })()
      : ([] as CourseType[]),
  teachingCourses:
    typeof window !== 'undefined'
      ? (() => {
          const courses = localStorage.getItem('teachingCourses');
          return courses && courses !== 'undefined' ? JSON.parse(courses) : [];
        })()
      : ([] as CourseType[]),
  loading: false,
  error: null,
};

export const loadCourses = createAsyncThunk(
  'courses/fetch',
  async (filter: CourseFilter, { rejectWithValue }) => {
    try {
      const courses = await getCourses(filter);
      return courses;
    } catch (error: any) {
      console.error('Fetch courses:', error);
      return rejectWithValue(
        error.response?.data || error.message || 'Unknown error',
      );
    }
  },
);

export const createNewCourse = createAsyncThunk(
  'courses/create',
  async (
    {
      name,
      description,
      number_of_classroom,
    }: { name: string; description: string; number_of_classroom: string },
    { rejectWithValue },
  ) => {
    try {
      const newCourse = await createCourse({
        name,
        description,
        number_of_classroom,
      });
      return newCourse as CourseType;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || error.message || 'Unknown error',
      );
    }
  },
);

export const joinCourseAction = createAsyncThunk(
  'courses/join',
  async (courseKey: string, { rejectWithValue }) => {
    try {
      const joinedCourse = joinCourse(courseKey);
      return joinedCourse;
    } catch (error: any) {
      console.error('Joined error:', error);
      return rejectWithValue(
        error.response?.data || error.message || 'Unknown error',
      );
    }
  },
);

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setCourses(state, action: PayloadAction<CourseType[]>) {
      state.studyingCourses = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loadCourses.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadCourses.fulfilled, (state, action) => {
        state.loading = false;
        if (action.meta.arg === 'studying') {
          state.studyingCourses = action.payload as CourseType[];
        } else if (action.meta.arg === 'teaching') {
          state.teachingCourses = action.payload as CourseType[];
        }
      })
      .addCase(loadCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(createNewCourse.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNewCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.teachingCourses.push(action.payload);
      })
      .addCase(createNewCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(joinCourseAction.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(joinCourseAction.fulfilled, (state, action) => {
        state.loading = false;
        // state.studyingCourses.push(action.payload);
      })
      .addCase(joinCourseAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setCourses, setError } = coursesSlice.actions;
export default coursesSlice.reducer;
