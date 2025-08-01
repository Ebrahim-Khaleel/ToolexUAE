import { useState, useEffect, useCallback } from 'react';
import { client } from '../lib/sanity';

interface UseSanityQueryOptions {
  query: string;
  params?: Record<string, string | number | boolean>;
  enabled?: boolean;
}

interface UseSanityQueryResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useSanityQuery<T>({ 
  query, 
  params = {}, 
  enabled = true 
}: UseSanityQueryOptions): UseSanityQueryResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    if (!enabled) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const result = await client.fetch(query, params);
      setData(result);
    } catch (err) {
      console.error('Sanity query error:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  }, [query, params, enabled]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    refetch: fetchData
  };
}
