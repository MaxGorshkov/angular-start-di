import { AppServiceMock } from '../app/app.service.mock';

export const environment = {
    production: false,
    Services: {
      IAppService: AppServiceMock,
    }
  };
