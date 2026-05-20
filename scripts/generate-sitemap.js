import { createClient } from '@supabase/supabase-js';
import { writeFileSync, readFileSync } from 'fs';

// Read .env manually (no dotenv needed)
try {
  readFileSync('.env', 'utf-8').split('\n').forEach((line) => {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (match) process.env[match[1].trim()] = match[2].trim().replace(/^["']|["']$/g, '');
  });
} catch { /* .env not found, rely on existing process.env */ }

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY;
const BASE_URL = 'https://www.jmstraders.com.np';

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error('❌ Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in .env');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const toSlug = (label) =>
  label.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

async function generateSitemap() {
  const [{ data: products, error: pErr }, { data: categories, error: cErr }] =
    await Promise.all([
      supabase.from('products').select('label').eq('is_active', true),
      supabase.from('categories').select('name').neq('is_active', false),
    ]);

  if (pErr) console.warn('⚠️  Could not fetch products:', pErr.message);
  if (cErr) console.warn('⚠️  Could not fetch categories:', cErr.message);

  const today = new Date().toISOString().split('T')[0];

  const staticUrls = [
    { url: '/',         priority: '1.00', changefreq: 'weekly'  },
    { url: '/product',  priority: '0.90', changefreq: 'daily'   },
    { url: '/pricing',  priority: '0.70', changefreq: 'weekly'  },
    { url: '/contact',  priority: '0.60', changefreq: 'monthly' },
  ];

  const categoryUrls = (categories || []).map((cat) => ({
    url: `/product/category/${toSlug(cat.name)}`,
    priority: '0.80',
    changefreq: 'weekly',
  }));

  const productUrls = (products || []).map((p) => ({
    url: `/product/${toSlug(p.label)}`,
    priority: '0.70',
    changefreq: 'monthly',
  }));

  const allUrls = [...staticUrls, ...categoryUrls, ...productUrls];

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    allUrls
      .map(
        ({ url, priority, changefreq }) =>
          `  <url>\n` +
          `    <loc>${BASE_URL}${url}</loc>\n` +
          `    <lastmod>${today}</lastmod>\n` +
          `    <changefreq>${changefreq}</changefreq>\n` +
          `    <priority>${priority}</priority>\n` +
          `  </url>`
      )
      .join('\n') +
    `\n</urlset>`;

  writeFileSync('public/sitemap.xml', xml, 'utf-8');
  console.log(
    `✅ Sitemap generated — ${allUrls.length} URLs ` +
    `(${categoryUrls.length} categories, ${productUrls.length} products)`
  );
}

generateSitemap().catch((err) => {
  console.error('❌ Sitemap generation failed:', err.message);
  process.exit(1);
});
