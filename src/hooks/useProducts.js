import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

// categoryId = undefined → skip fetch (waiting for resolution)
// categoryId = null     → fetch all products
// categoryId = number   → fetch only that category
export function useProducts(categoryId = null) {
  const [mainProducts, setMainProducts] = useState([]);
  const [otherProducts, setOtherProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (categoryId === undefined) return;

    let cancelled = false;
    setLoading(true);

    async function fetchProducts() {
      let query = supabase
        .from('products')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      if (categoryId != null) {
        query = query.eq('category_name', String(categoryId));
      }

      const { data, error } = await query;

      if (!cancelled) {
        if (error) {
          setError(error);
        } else {
          setProducts(data);
          setMainProducts(data.filter(p => p.category === 'main'));
          setOtherProducts(data.filter(p => p.category === 'other'));
        }
        setLoading(false);
      }
    }

    fetchProducts();
    return () => { cancelled = true; };
  }, [categoryId]);

  return { products, mainProducts, otherProducts, loading, error };
}
