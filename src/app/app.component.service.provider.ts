import { AppComponent } from './app.component';
import { AppService } from './app.component.service';
import { AppServiceMock } from './app.component.service.mock';
import { environment } from '.././environments/environment';

export const appServiceFactory = () => {
    const env = environment;

    if (env.useMock) {
        return new AppServiceMock();
    } else {
        return new AppService();
    }
};

export let AppServiceProvider = {
    provide: AppService,
    useFactory: appServiceFactory,
    deps: []
};
