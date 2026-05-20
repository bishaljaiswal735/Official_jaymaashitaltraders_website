// One-time seed script to migrate hardcoded data to Supabase.
// Run with: node scripts/seed.js
// Uses the SERVICE ROLE key (not anon key) to bypass RLS.
// Get service role key from: Supabase > Project Settings > API > service_role

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://fyaxxbkravuiktexkzon.supabase.co';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5YXh4YmtyYXZ1aWt0ZXhrem9uIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3ODMxMTc2NiwiZXhwIjoyMDkzODg3NzY2fQ.kBIbb7v7hRW4GO_ue0a6mEyx9u6nJbhSJaNCOZubSP4';

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

// ─── PRODUCTS ───────────────────────────────────────────────────────────────
// Replace each image_url with the actual Supabase Storage URL after uploading
// images to the 'product-images' bucket. URL format:
// https://YOUR_PROJECT_REF.supabase.co/storage/v1/object/public/product-images/FILENAME

const products = [
  { label: 'GI Nipple',       category: 'main',  image_url: 'https://fyaxxbkravuiktexkzon.supabase.co/storage/v1/object/public/product-images/ginipple.webp',       brand: 'Mainawati, Jagdamba, HIPCO', size_info: 'Diameter: 1/2inch to 8inch, Length starts from 2inch', display_order: 1 },
  { label: 'MS Flange',       category: 'main',  image_url: 'https://fyaxxbkravuiktexkzon.supabase.co/storage/v1/object/public/product-images/msflange.png',         brand: 'Jagdamba, Hulas',            size_info: '1/2inch to 8inch',                                     display_order: 2 },
  { label: 'GI Flange',       category: 'main',  image_url: 'https://fyaxxbkravuiktexkzon.supabase.co/storage/v1/object/public/product-images/giFlange.jpeg',        brand: 'All',                        size_info: '1/2inch to 8inch',                                     display_order: 3 },
  { label: 'Threading In Rod',category: 'main',  image_url: 'https://fyaxxbkravuiktexkzon.supabase.co/storage/v1/object/public/product-images/Threaded%20Rod.jpg',     brand: 'All',                        size_info: 'Threading in all mm rod',                              display_order: 4 },
  { label: 'MS Socket',       category: 'main',  image_url: 'https://fyaxxbkravuiktexkzon.supabase.co/storage/v1/object/public/product-images/msSocket.jpeg',        brand: 'MS',                         size_info: '1/2inch to 2inch',                                     display_order: 5 },
  { label: 'Gate Valve',      category: 'other', image_url: 'https://fyaxxbkravuiktexkzon.supabase.co/storage/v1/object/public/product-images/GateValve.jpg',        brand: 'Shree, Devi, Chinese',       size_info: 'All Sizes Available',                                  display_order: 1 },
  { label: 'GI Socket',       category: 'other', image_url: 'https://fyaxxbkravuiktexkzon.supabase.co/storage/v1/object/public/product-images/giSocket.jpeg',        brand: 'Kriti, Unik, Sun',           size_info: 'All Sizes Available',                                  display_order: 2 },
  { label: 'GI Elbow',        category: 'other', image_url: 'https://fyaxxbkravuiktexkzon.supabase.co/storage/v1/object/public/product-images/giElbow.jpeg',         brand: 'Kriti, Unik, Sun',           size_info: 'All Sizes Available',                                  display_order: 3 },
  { label: 'GI Tee',          category: 'other', image_url: 'https://fyaxxbkravuiktexkzon.supabase.co/storage/v1/object/public/product-images/giTee.jpeg',           brand: 'Kriti, Unik, Sun',           size_info: 'All Sizes Available',                                  display_order: 4 },
  { label: 'GI Union',        category: 'other', image_url: 'https://fyaxxbkravuiktexkzon.supabase.co/storage/v1/object/public/product-images/giUnion.jpeg',         brand: 'Kriti, Unik, Sun',           size_info: 'All Sizes Available',                                  display_order: 5 },
  { label: 'GI R.Socket',     category: 'other', image_url: 'https://fyaxxbkravuiktexkzon.supabase.co/storage/v1/object/public/product-images/giRSocket.jpeg',       brand: 'Kriti, Unik, Sun',           size_info: 'All Sizes Available',                                  display_order: 6 },
  { label: 'GI Crosstee',     category: 'other', image_url: 'https://fyaxxbkravuiktexkzon.supabase.co/storage/v1/object/public/product-images/giCrosstee.jpeg',      brand: 'Kriti, Unik, Sun',           size_info: 'All Sizes Available',                                  display_order: 7 },
  { label: 'Sluice Valve',    category: 'other', image_url: 'https://fyaxxbkravuiktexkzon.supabase.co/storage/v1/object/public/product-images/sluicevalve.jpeg',     brand: 'Indian, Chinese',            size_info: 'All Sizes Available',                                  display_order: 8 },
  { label: 'Saddle',          category: 'other', image_url: 'https://fyaxxbkravuiktexkzon.supabase.co/storage/v1/object/public/product-images/Saddle.jpg',           brand: 'Era',                        size_info: 'All Sizes Available',                                  display_order: 9 },
  { label: 'Water Meter',     category: 'other', image_url: 'https://fyaxxbkravuiktexkzon.supabase.co/storage/v1/object/public/product-images/WaterMeter.webp',      brand: 'Amit Water Meter',           size_info: 'All Sizes Available',                                  display_order: 10 },
  { label: 'Ferrule',         category: 'other', image_url: 'https://fyaxxbkravuiktexkzon.supabase.co/storage/v1/object/public/product-images/Ferrul.jpeg',          brand: 'Ankur',                      size_info: 'Heavy, Light',                                         display_order: 11 },
];

// ─── FLANGE PRICES ──────────────────────────────────────────────────────────
const flangePrices = [
  { size: '1"',    ms_flange: 220,  gi_flange: 240,  ms_flange_iss_od: null, gi_flange_iss_od: null, ms_blind_flange: 500,  flange_set: 720,   display_order: 1  },
  { size: '11/4"', ms_flange: 250,  gi_flange: 290,  ms_flange_iss_od: null, gi_flange_iss_od: null, ms_blind_flange: 600,  flange_set: 870,   display_order: 2  },
  { size: '11/2"', ms_flange: 300,  gi_flange: 320,  ms_flange_iss_od: 590,  gi_flange_iss_od: 710,  ms_blind_flange: 650,  flange_set: 960,   display_order: 3  },
  { size: '2"',    ms_flange: 380,  gi_flange: 360,  ms_flange_iss_od: 620,  gi_flange_iss_od: 750,  ms_blind_flange: 1000, flange_set: 1500,  display_order: 4  },
  { size: '21/2"', ms_flange: 420,  gi_flange: 600,  ms_flange_iss_od: 840,  gi_flange_iss_od: 1110, ms_blind_flange: 1150, flange_set: 1800,  display_order: 5  },
  { size: '3"',    ms_flange: 640,  gi_flange: 900,  ms_flange_iss_od: 900,  gi_flange_iss_od: 1240, ms_blind_flange: 1350, flange_set: 2700,  display_order: 6  },
  { size: '4"',    ms_flange: 840,  gi_flange: 1160, ms_flange_iss_od: null, gi_flange_iss_od: null, ms_blind_flange: 1600, flange_set: 3480,  display_order: 7  },
  { size: '41/2"', ms_flange: 990,  gi_flange: 1300, ms_flange_iss_od: null, gi_flange_iss_od: null, ms_blind_flange: 1850, flange_set: 3990,  display_order: 8  },
  { size: '5"',    ms_flange: 1130, gi_flange: 1500, ms_flange_iss_od: null, gi_flange_iss_od: null, ms_blind_flange: 1900, flange_set: 4500,  display_order: 9  },
  { size: '6"',    ms_flange: 1340, gi_flange: 1660, ms_flange_iss_od: null, gi_flange_iss_od: null, ms_blind_flange: 2000, flange_set: 4980,  display_order: 10 },
  { size: '7"',    ms_flange: 1690, gi_flange: null, ms_flange_iss_od: null, gi_flange_iss_od: null, ms_blind_flange: 3500, flange_set: 6990,  display_order: 11 },
  { size: '8"',    ms_flange: 2040, gi_flange: 3000, ms_flange_iss_od: null, gi_flange_iss_od: null, ms_blind_flange: 3800, flange_set: 9000,  display_order: 12 },
  { size: '9"',    ms_flange: 2690, gi_flange: null, ms_flange_iss_od: null, gi_flange_iss_od: null, ms_blind_flange: 5000, flange_set: 10500, display_order: 13 },
  { size: '10"',   ms_flange: 3340, gi_flange: null, ms_flange_iss_od: null, gi_flange_iss_od: null, ms_blind_flange: null, flange_set: 12000, display_order: 14 },
  { size: '11"',   ms_flange: 4070, gi_flange: null, ms_flange_iss_od: null, gi_flange_iss_od: null, ms_blind_flange: null, flange_set: 14750, display_order: 15 },
  { size: '12"',   ms_flange: 4800, gi_flange: null, ms_flange_iss_od: null, gi_flange_iss_od: null, ms_blind_flange: 8250, flange_set: 17500, display_order: 16 },
];

// ─── GI FITTINGS, NIPPLES, SADDLE ───────────────────────────────────────────
const priceItemsData = [
  // GI Fittings
  { category: 'gi_fittings', display_order: 1,  item_name: 'GI ELBOW',       sizes: { '1/2"': 42,  '3/4"': 60,  '1"': 125, '11/4"': 162, '11/2"': 223, '2"': 344,  '21/2"': 653,  '3"': 880,  '4"': 1584, '5"': 6500,  '6"': 7800  } },
  { category: 'gi_fittings', display_order: 2,  item_name: 'GI TEE',         sizes: { '1/2"': 66,  '3/4"': 104, '1"': 142, '11/4"': 219, '11/2"': 282, '2"': 452,  '21/2"': 868,  '3"': 1187, '4"': 1953, '5"': 8600,  '6"': 10000 } },
  { category: 'gi_fittings', display_order: 3,  item_name: 'GI SOCKET',      sizes: { '1/2"': 38,  '3/4"': 57,  '1"': 75,  '11/4"': 119, '11/2"': 158, '2"': 213,  '21/2"': 366,  '3"': 511,  '4"': 888,  '5"': 3600,  '6"': 4000  } },
  { category: 'gi_fittings', display_order: 4,  item_name: 'GI UNION',       sizes: { '1/2"': 113, '3/4"': 153, '1"': 195, '11/4"': 269, '11/2"': 340, '2"': 511,  '21/2"': 933,  '3"': 1138, '4"': 1585, '5"': 8600,  '6"': 10400 } },
  { category: 'gi_fittings', display_order: 5,  item_name: 'GI CROSS TEE',   sizes: { '1/2"': 104, '3/4"': 150, '1"': 235, '11/4"': 394, '11/2"': 530, '2"': 835,  '21/2"': 1525, '3"': 2055, '4"': 4000                            } },
  { category: 'gi_fittings', display_order: 6,  item_name: 'GI R-ELBOW',     sizes: {                            '1"': 112, '11/4"': 174, '11/2"': 236, '2"': 368,  '21/2"': 697,  '3"': 948,  '4"': 1715, '5"': 9800,  '6"': 11000 } },
  { category: 'gi_fittings', display_order: 7,  item_name: 'GI R-TEE',       sizes: {                            '1"': 185, '11/4"': 223, '11/2"': 360, '2"': 582,  '21/2"': 1040, '3"': 1420, '4"': 2080, '5"': 9500,  '6"': 11100 } },
  { category: 'gi_fittings', display_order: 8,  item_name: 'GI R-SOCKET',    sizes: {                            '1"': 63,  '11/4"': 112, '11/2"': 180, '2"': 262,  '21/2"': 460,  '3"': 640,  '4"': 1043, '5"': 6300               } },
  { category: 'gi_fittings', display_order: 9,  item_name: 'GI HEX NIPPLE',  sizes: { '1/2"': 60,  '3/4"': 104, '1"': 149, '11/4"': 240, '11/2"': 350, '2"': 500,  '21/2"': 750,  '3"': 1250                                       } },
  { category: 'gi_fittings', display_order: 10, item_name: 'GI PLUG',        sizes: { '1/2"': 22,  '3/4"': 32,  '1"': 42,  '11/4"': 64,  '11/2"': 84,  '2"': 122,  '21/2"': 200,  '3"': 330                                        } },
  { category: 'gi_fittings', display_order: 11, item_name: 'GI CAP',         sizes: { '1/2"': 54,  '3/4"': 82,  '1"': 122, '11/4"': 158, '11/2"': 220, '2"': 330,  '21/2"': 500,  '3"': 880                                        } },
  { category: 'gi_fittings', display_order: 12, item_name: 'CI TANK NIPPLE', sizes: { '1/2"': 125, '3/4"': 165, '1"': 250, '11/4"': 350, '11/2"': 450, '2"': 650,  '21/2"': 1500, '3"': 2100, '4"': 2750                           } },
  // GI Nipples
  { category: 'gi_nipples',  display_order: 1,  item_name: '2" LONG',         sizes: { '1/2"': 22,  '3/4"': 30,  '1"': 42,  '11/4"': 54,  '11/2"': 68,  '2"': 85,  '21/2"': 140, '3"': 180                                                    } },
  { category: 'gi_nipples',  display_order: 2,  item_name: '3" LONG',         sizes: { '1/2"': 33,  '3/4"': 45,  '1"': 63,  '11/4"': 84,  '11/2"': 102, '2"': 129, '21/2"': 180, '3"': 240                                                    } },
  { category: 'gi_nipples',  display_order: 3,  item_name: '4" LONG',         sizes: { '1/2"': 44,  '3/4"': 60,  '1"': 83,  '11/4"': 108, '11/2"': 132, '2"': 172, '21/2"': 240, '3"': 280                                                    } },
  { category: 'gi_nipples',  display_order: 4,  item_name: '6" LONG',         sizes: { '1/2"': 66,  '3/4"': 90,  '1"': 126, '11/4"': 162, '11/2"': 204, '2"': 258, '21/2"': 360, '3"': 420, '4"': 750,  '5"': 1200, '6"': 1500               } },
  { category: 'gi_nipples',  display_order: 5,  item_name: '9" LONG',         sizes: { '1/2"': 99,  '3/4"': 135, '1"': 189, '11/4"': 248, '11/2"': 306, '2"': 387, '21/2"': 540, '3"': 630, '4"': 1125, '5"': 1800, '6"': 2250               } },
  { category: 'gi_nipples',  display_order: 6,  item_name: '12" LONG',        sizes: { '1/2"': 132, '3/4"': 180, '1"': 252, '11/4"': 324, '11/2"': 408, '2"': 516, '21/2"': 780, '3"': 840, '4"': 1500, '5"': 2400, '6"': 4000               } },
  { category: 'gi_nipples',  display_order: 7,  item_name: 'GI STRAINER 18"', sizes: { '1/2"': 450, '3/4"': 550, '1"': 700, '11/4"': 900, '11/2"': 1100,'2"': 1300,'21/2"': 1800,'3"': 2300,'4"': 3300, '5"': 5000, '6"': 5500               } },
  // Saddle
  { category: 'saddle',      display_order: 1,  item_name: 'HDPE SADDLE',         sizes: { '25MM': 115,  '32MM': 125,  '40MM': 150,  '50MM': 160,  '63MM': 175,  '75MM': 400,  '90MM': 475,  '110MM': 600,  '125MM': 950, '140MM': 1250, '160MM': 1600                                                                                    } },
  { category: 'saddle',      display_order: 2,  item_name: 'HDPE COUPLER',         sizes: {                                           '40MM': 700,  '50MM': 1000, '63MM': 1200, '75MM': 2400, '90MM': 3200, '110MM': 4700                                                                                                                   } },
  { category: 'saddle',      display_order: 3,  item_name: 'PVC G BOLT COUPLING',  sizes: {                                                                                     '75MM': 2000, '90MM': 2400, '110MM': 3200                                                                                                                   } },
  { category: 'saddle',      display_order: 4,  item_name: 'DI G BOLT COUPLING',   sizes: {                                                                                     '75MM': 4700, '90MM': 5600, '110MM': 7600, '125MM': 8500, '140MM': 9400, '160MM': 11300, '180MM': 13200, '200MM': 15000, '225MM': 17000, '250MM': 22600, '280MM': 24900, '315MM': 27200 } },
];

// ─── SEED FUNCTIONS ──────────────────────────────────────────────────────────

async function seedProducts() {
  const { error } = await supabase.from('products').insert(products);
  if (error) console.error('❌ Products error:', error.message);
  else console.log(`✅ Products seeded (${products.length} rows)`);
}

async function seedFlangePrices() {
  const { error } = await supabase.from('flange_prices').insert(flangePrices);
  if (error) console.error('❌ Flange prices error:', error.message);
  else console.log(`✅ Flange prices seeded (${flangePrices.length} rows)`);
}

async function seedPriceItems() {
  let totalItems = 0;
  let totalCells = 0;

  for (const item of priceItemsData) {
    const { sizes, ...itemRow } = item;

    const { data, error } = await supabase
      .from('price_items')
      .insert(itemRow)
      .select('id')
      .single();

    if (error) {
      console.error(`❌ price_items error for "${item.item_name}":`, error.message);
      continue;
    }

    const cells = Object.entries(sizes).map(([size_label, price]) => ({
      price_item_id: data.id,
      size_label,
      price,
    }));

    const { error: cellError } = await supabase.from('price_cells').insert(cells);
    if (cellError) {
      console.error(`❌ price_cells error for "${item.item_name}":`, cellError.message);
    } else {
      totalItems++;
      totalCells += cells.length;
    }
  }

  console.log(`✅ Price items seeded (${totalItems} items, ${totalCells} price cells)`);
}

async function main() {
  console.log('Starting seed...\n');
  await seedProducts();
  await seedFlangePrices();
  await seedPriceItems();
  console.log('\nSeed complete.');
}

main();
