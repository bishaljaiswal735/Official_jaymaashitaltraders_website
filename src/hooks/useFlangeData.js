import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export function useFlangeData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFlangeData() {
      const { data, error } = await supabase
        .from('flange_prices')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      if (!error) setData(data);
      setLoading(false);
    }
    fetchFlangeData();
  }, []);

  return { data, loading };
}
