export abstract class IAppService {
    public abstract GetMode(): string;
}

export class AppService implements IAppService {
    GetMode(): string {
        return 'Production';
    }
}
