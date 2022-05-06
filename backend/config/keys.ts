export const DB_URI = "mongodb://localhost:27017/wesportease";
export const JWT_CONFIG = {
  secret: process.env.JWT_SECRET!,
  expiresIn: process.env.JWT_EXPIRES_IN!,
};
export const CLOUDINARY = {
  cloud_name: process.env.CLOUD_NAME!,
  api_key: process.env.CLOUD_API_KEY!,
  secret: process.env.CLOUD_API_SECRET!,
};
