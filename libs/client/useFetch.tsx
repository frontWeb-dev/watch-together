import { useState } from "react";

interface UseFetchState<T> {
  loading: boolean;
  data?: T;
  error?: {
    errorCode: string;
    message: string;
  };
}

type useFetchResult<T> = [(data: any) => void, UseFetchState<T>];

export default function useFetch<T = any>(url: string): useFetchResult<T> {
  const [state, setState] = useState({ loading: false, data: undefined, error: undefined });

  function fetchAPI(data: any) {
    setState((prev) => ({ ...prev, loading: true }));

    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => setState((prev) => ({ ...prev, data })))
      .catch((error) => setState((prev) => ({ ...prev, error })))
      .finally(() => setState((prev) => ({ ...prev, loading: false })));
  }

  return [fetchAPI, { ...state }];
}
