import { signUpUser, singInUser } from '@/lib/api/userApi';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  picture: string;
}

interface AuthState {
  isAuthenticated: boolean;
  userInfo: UserInfo | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  userInfo:
    typeof window !== 'undefined'
      ? (() => {
          const storedUserInfo = localStorage.getItem('userInfo');
          return storedUserInfo && storedUserInfo !== 'undefined'
            ? JSON.parse(storedUserInfo)
            : null;
        })()
      : null,
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue },
  ) => {
    try {
      const userData = await singInUser({ email, password });
      return userData;
    } catch (error: any) {
      console.error('Sign in error:', error);
      return rejectWithValue(
        error.response?.data || error.message || 'Unknown error',
      );
    }
  },
);

export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (
    {
      email,
      password,
      first_name,
      last_name,
    }: {
      email: string;
      password: string;
      first_name: string;
      last_name: string;
    },
    { rejectWithValue },
  ) => {
    try {
      const userData = await signUpUser({
        email,
        password,
        first_name,
        last_name,
      });
      return userData;
    } catch (error: any) {
      console.error('Sign up error:', error);
      return rejectWithValue(
        error.response?.data || error.message || 'Unknown error',
      );
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.userInfo = null;
      state.loading = false;
      state.error = null;
      localStorage.clear();
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        localStorage.removeItem('userInfo');
        state.isAuthenticated = false;
        state.loading = true;
        console.log('loading');
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.userInfo = {
          firstName: action.payload.first_name,
          lastName: action.payload.last_name,
          email: action.payload.email,
          picture: action.payload.profile_picture,
        };
        localStorage.setItem('userInfo', JSON.stringify(state.userInfo));
        console.log('User Info:', state.userInfo);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        console.log('Login error:', action.payload);
        state.error = action.payload as string;
      })

      .addCase(signupUser.pending, state => {
        localStorage.removeItem('userInfo');
        state.isAuthenticated = false;
        state.loading = true;
        console.log('loading');
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.userInfo = {
          firstName: action.payload.first_name,
          lastName: action.payload.last_name,
          email: action.payload.email,
          picture: action.payload.profile_picture,
        };
        localStorage.setItem('userInfo', JSON.stringify(state.userInfo));
        console.log('User Info:', state.userInfo);
        console.log('Login error:', state.error);
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        console.log('Login error:', action.payload);
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
