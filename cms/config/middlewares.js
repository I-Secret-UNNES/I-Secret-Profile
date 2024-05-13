module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://127.0.0.1:8000'],
      headers: ['Content-Type', 'Authorization', 'x-requested-with'], // Tambahkan 'x-requested-with' ke dalam daftar headers yang diizinkan
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
