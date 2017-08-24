import { IAppService } from './app.service';

export class AppServiceMock implements IAppService {
    GetMode(): string {
        return 'Test';
    }
}
