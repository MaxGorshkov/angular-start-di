import { AppComponent } from './app.component';
import { IAppService } from './app.service';
import { environment } from '../environments/environment';

export const appServiceFactory = () => {
    const env = environment;

    return new env.Services.IAppService();
};

export let AppServiceProvider = {
    provide: IAppService,
    useFactory: appServiceFactory,
    deps: []
};
