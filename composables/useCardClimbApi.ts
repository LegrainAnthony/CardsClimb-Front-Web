import type { UseFetchOptions } from '#app';

export const AUTHENTICATION_LOGIN_API_URL = '/authentication/sign-in';
export const AUTHENTICATION_LOGOUT_API_URL = '/authentication/sign-out';
export const AUTHENTICATION_CURRENT_API_URL = '/authentication/current';
export const AUTHENTICATION_REFRESH_API_URL = '/authentication/refresh-tokens';

export function useCardClimbApi<T>(
  url: string | ComputedRef<string>,
  options: UseFetchOptions<T> = {},
  mounted: boolean = false
) {
  const defaultOptions: UseFetchOptions<T> = {
    headers: {
      'Content-Type': 'application/json',
    },
    onRequest: ({ options }) => {
      const headers = new Headers(options.headers);

      const token = localStorage.getItem('accessToken');
      if (!token) return;

      headers.set('Authorization', `Bearer ${token}`);
      headers.set(
        'RefreshToken',
        `Bearer ${localStorage.getItem('refreshToken')}`
      );

      options.headers = headers;
    },
  };

  return useFetch(url, { ...options, ...defaultOptions });
}
