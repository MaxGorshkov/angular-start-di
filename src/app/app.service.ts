export interface IAppService {
    GetMode(): string;
}

export class AppService implements IAppService {
    GetMode(): string {
        return 'Production';
    }
}
