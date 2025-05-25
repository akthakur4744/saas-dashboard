import useSWR from 'swr';

const fetcher = (url: string, token: string) =>
  fetch(url, { headers: { Authorization: `Bearer ${token}` } }).then((r) => r.json());

export function useProjects(token: string) {
  return useSWR(token ? ['/api/projects', token] : null, ([url, t]) => fetcher(url, t));
}

export function useUser(token: string) {
  return useSWR(token ? ['/api/auth/user', token] : null, ([url, t]) => fetcher(url, t));
}
