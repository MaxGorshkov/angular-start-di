import { IAppService } from './app.component.service';

export class AppServiceMock implements IAppService {
    GetMode(): string {
        return 'Test';
    }
}
