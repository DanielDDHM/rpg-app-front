import axios, { AxiosRequestConfig } from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:3001',
});

const request = async (config: AxiosRequestConfig) => {
  try {
    const resp = await service(config);

    return {
      status: resp.status,
      data: resp.data,
    };
  } catch (e: any) {
    console.error(`
      ----------------------------------------------------
      🚨 EXCEPTION ALERT 🚨
      An exception ocurred while trying to request API.
      Route: ${service.defaults.baseURL}${config.url}
      Exception: ${e}
      ----------------------------------------------------
    `);
    if (e.isAxiosError) {
      return {
        errors: e,
      };
    }
    throw new Error(e);
  }
};

export default request;
