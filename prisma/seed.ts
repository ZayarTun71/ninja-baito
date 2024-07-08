import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const nowDate = new Date();

  const regions = [
    { region_name_en: 'Hokkaido', region_name_jp: '北海道' },
    { region_name_en: 'Tohoku', region_name_jp: '東北' },
    { region_name_en: 'Kanto', region_name_jp: '関東' },
    { region_name_en: 'Chubu', region_name_jp: '中部' },
    { region_name_en: 'Kansai', region_name_jp: '関西' },
    { region_name_en: 'Chugoku', region_name_jp: '中国' },
    { region_name_en: 'Shikoku', region_name_jp: '四国' },
    { region_name_en: 'Kyushu', region_name_jp: '九州' },
  ];

  const hokkaido = [
    { city_name_en: 'Hokkaido', city_name_jp: '北海道', region_id: 1 },
  ];

  const tohoku = [
    { city_name_en: 'Aomori', city_name_jp: '青森', region_id: 2 },
    { city_name_en: 'Iwate', city_name_jp: '岩手', region_id: 2 },
    { city_name_en: 'Miyagi', city_name_jp: '宮城', region_id: 2 },
    { city_name_en: 'Akita', city_name_jp: '秋田', region_id: 2 },
    { city_name_en: 'Yamagata', city_name_jp: '山形', region_id: 2 },
    { city_name_en: 'Fukushima', city_name_jp: '福島', region_id: 2 },
  ];

  const kanto = [
    { city_name_en: 'Tokyo', city_name_jp: '東京', region_id: 3 },
    { city_name_en: 'Chiba', city_name_jp: '千葉', region_id: 3 },
    { city_name_en: 'Saitama', city_name_jp: 'さいたま', region_id: 3 },
    { city_name_en: 'Kanagawa', city_name_jp: '神奈川', region_id: 3 },
    { city_name_en: 'Niigata', city_name_jp: '新潟', region_id: 3 },
    { city_name_en: 'Gunma', city_name_jp: '群馬', region_id: 3 },
    { city_name_en: 'Tochigi', city_name_jp: '栃木', region_id: 3 },
  ];

  const chubu = [
    { city_name_en: 'Niigata', city_name_jp: '新潟', region_id: 4 },
    { city_name_en: 'Toyama', city_name_jp: '富山', region_id: 4 },
    { city_name_en: 'Ishikawa', city_name_jp: '福井', region_id: 4 },
    { city_name_en: 'Fukui', city_name_jp: '岐阜', region_id: 4 },
    { city_name_en: 'Yamanashi', city_name_jp: '山梨', region_id: 4 },
    { city_name_en: 'Nagano', city_name_jp: '長野', region_id: 4 },
    { city_name_en: 'Aichi', city_name_jp: '愛知', region_id: 4 },
    { city_name_en: 'Shizuoka', city_name_jp: '静岡', region_id: 4 },
    { city_name_en: 'Gifu', city_name_jp: '岐阜', region_id: 4 },
  ];

  const kansai = [
    { city_name_en: 'Osaka', city_name_jp: '大阪', region_id: 5 },
    { city_name_en: 'Kyoto', city_name_jp: '京都', region_id: 5 },
    { city_name_en: 'Hyogo', city_name_jp: '兵庫', region_id: 5 },
    { city_name_en: 'Shiga', city_name_jp: '滋賀', region_id: 5 },
    { city_name_en: 'Nara', city_name_jp: '奈良', region_id: 5 },
    { city_name_en: 'Wakayama', city_name_jp: '和歌山', region_id: 5 },
    { city_name_en: 'Mei', city_name_jp: '三重', region_id: 5 },
  ];

  const chugoku = [
    { city_name_en: 'Hiroshima', city_name_jp: '広島', region_id: 6 },
    { city_name_en: 'Okayama', city_name_jp: '岡山', region_id: 6 },
    { city_name_en: 'Shimane', city_name_jp: '島根', region_id: 6 },
    { city_name_en: 'Tottori', city_name_jp: '鳥取', region_id: 6 },
    { city_name_en: 'Yamaguchi', city_name_jp: '山口', region_id: 6 },
  ];

  const shikoku = [
    { city_name_en: 'Ehime', city_name_jp: '愛媛', region_id: 7 },
    { city_name_en: 'Kagawa', city_name_jp: '香川', region_id: 7 },
    { city_name_en: 'Kochi', city_name_jp: '高知', region_id: 7 },
    { city_name_en: 'Tokushima', city_name_jp: '徳島', region_id: 7 },
  ];

  const kyushu = [
    { city_name_en: 'Fukuoka', city_name_jp: '福岡', region_id: 8 },
    { city_name_en: 'Saga', city_name_jp: '佐賀', region_id: 8 },
    { city_name_en: 'Nagasaki', city_name_jp: '長崎', region_id: 8 },
    { city_name_en: 'Kumamoto', city_name_jp: '熊本', region_id: 8 },
    { city_name_en: 'Oita', city_name_jp: '大分', region_id: 8 },
    { city_name_en: 'Miyazaki', city_name_jp: '宮崎', region_id: 8 },
    { city_name_en: 'Kagoshima', city_name_jp: '鹿児島', region_id: 8 },
    { city_name_en: 'Okinawa', city_name_jp: '沖縄', region_id: 8 },
  ];

  const cities = [
    ...hokkaido,
    ...tohoku,
    ...kanto,
    ...chubu,
    ...kansai,
    ...chugoku,
    ...shikoku,
    ...kyushu,
  ];

  const jobTypes = [
    {job_type_name:"Packing/Sorting"},
    {job_type_name:"Teaching"},
    {job_type_name:"Cleaning"},
    {job_type_name:"Delivery"},
    {job_type_name:"Convenience Stores"},
    {job_type_name:"Restaurants and Cafes"},
    {job_type_name:"Store Staff"},
    {job_type_name:"Receptionist"},
    {job_type_name:"Call Center Agent"}
  ]

  const tbl_region = await prisma.tbl_region.createMany({
    data: regions.map((region) => ({
      ...region,
      created_at: nowDate,
    })),
    skipDuplicates: true, // Optional: skip creating duplicates
  });

  const tbl_city = await prisma.tbl_city.createMany({
    data: cities.map((city) => ({
      ...city,
      created_at: nowDate,
    })),
    skipDuplicates: true, // Optional: skip creating duplicates
  });

  const tbl_job_type = await prisma.tbl_job_type.createMany({
    data: jobTypes.map((jobType) => ({
      ...jobType,
      created_at: nowDate,
    })),
    skipDuplicates: true, // Optional: skip creating duplicates
  });

  console.log({ tbl_region, tbl_city, tbl_job_type });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
