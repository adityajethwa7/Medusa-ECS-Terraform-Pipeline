const plugins = [
  `medusa-fulfillment-manual`,
  `medusa-payment-manual`,
  {
    resolve: `@medusajs/file-local`,
    options: {
      upload_dir: "uploads",
    },
  },
  {
    resolve: "@medusajs/admin",
    options: {
      autoRebuild: true,
    },
  },
];

const modules = {};

const projectConfig = {
  jwtSecret: process.env.JWT_SECRET || "supersecret",
  cookieSecret: process.env.COOKIE_SECRET || "supersecret",
  store_cors: process.env.STORE_CORS || "http://localhost:8000",
  database_url: process.env.DATABASE_URL || "postgres://localhost/medusa-store",
  admin_cors: process.env.ADMIN_CORS || "http://localhost:7000,http://localhost:7001",
  redis_url: process.env.REDIS_URL,
  database_logging: false,
  database_extra: process.env.NODE_ENV !== "development" 
    ? { ssl: { rejectUnauthorized: false } } 
    : {},
};

module.exports = {
  projectConfig,
  plugins,
  modules,
};