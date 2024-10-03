type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

const BASE_URL = 'http://localhost:8000/api';

function wait(delay: number) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

const getCookie = (name: string): string | undefined => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift();
  }
  return undefined;
};

export function request<T>(
  url: string,
  method: RequestMethod = 'GET',
  data: any = null,
): Promise<T> {
  const options: RequestInit = {
    method,
    credentials: 'include',
  };

  if (data) {
    options.body = JSON.stringify(data);
    console.log(options.body);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

  if (method === 'POST' || method === 'PATCH' || method === 'DELETE') {
    const csrftoken = getCookie('csrftoken');
    if (csrftoken) {
      (options.headers as Record<string, string>)['X-CSRFToken'] = csrftoken;
    }
  }

  console.log(JSON.stringify(options));

  return wait(0)
    .then(() => fetch(BASE_URL + url, options))
    .then(response => {
      if (!response.ok) {
        return response.json().then(errorData => {
          throw new Error(
            `Error ${response.status}: ${response.statusText} - ${JSON.stringify(errorData)}`,
          );
        });
      }
      return response.json().then(data => {
        if (data.token) {
          localStorage.setItem('authToken', data.token);
        }
        return data;
      });
    })
    .catch(error => {
      console.error('HTTP Request Error:', error.message);
      throw error;
    });
}

export const client = {
  get: <T>(url: string) => request<T>(url),
  post: <T>(url: string, data: any) => request<T>(url, 'POST', data),
  patch: <T>(url: string, data: any) => request<T>(url, 'PATCH', data),
  delete: (url: string) => request(url, 'DELETE'),
};

export default client;
