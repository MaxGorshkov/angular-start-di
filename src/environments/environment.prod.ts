import { AppService } from '../app/app.service';

export const environment = {
  production: true,
  Services: {
    IAppService: AppService,
  }
};
