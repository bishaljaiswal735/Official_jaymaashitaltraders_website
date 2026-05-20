import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export function usePriceTableData(category) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { data: items, error } = await supabase
        .from('price_items')
        .select(`
          id,
          item_name,
          display_order,
          price_cells ( size_label, price )
        `)
        .eq('category', category)
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      if (!error) {
        const transformed = items.map(row => ({
          item: row.item_name,
          sizes: Object.fromEntries(
            row.price_cells.map(cell => [cell.size_label, cell.price])
          ),
        }));
        setData(transformed);
      }
      setLoading(false);
    }
    fetchData();
  }, [category]);

  return { data, loading };
}
