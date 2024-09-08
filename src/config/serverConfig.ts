import { registerAs } from '@nestjs/config';

const serverConfig = () => ({
  host: process.env.serverHost || 'localhost',
  port: parseInt(process.env.port, 10) || 3001,
});

export default registerAs('serverConfig', serverConfig);
