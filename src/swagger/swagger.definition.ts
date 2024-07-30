import { version } from '../../package.json';
import config from '../config/config';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'cocb-boilerplate API documentation',
    version,
    license: {
      name: 'MIT',
      url: '',
    },
  },
  servers: [
    {
      url: `http://localhost:${config.port}/v1`,
    },
  ],
};

export default swaggerDefinition;
