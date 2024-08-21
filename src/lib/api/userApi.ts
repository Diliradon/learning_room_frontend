import client from '../httpClient';

export const singInUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const response = await client.post('/user/login/', { email, password });

    const userDataResponse = await client.get('/user/me/');
    console.log('User data:', userDataResponse);

    return userDataResponse;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

export const signUpUser = async ({
  email,
  password,
  first_name,
  last_name,
}: {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}) => {
  try {
    const response = await client.post('/user/register/', {
      email,
      password,
      first_name,
      last_name,
    });

    const userDataResponse = await client.get('/user/me/');
    console.log('User data:', userDataResponse);

    return userDataResponse;
  } catch (error) {
    console.error('Error during sign up:', error);
    throw error;
  }
};
