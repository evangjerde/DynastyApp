import { HttpService } from '@nestjs/axios';
export declare class AppService {
    private httpService;
    private ffBaseUrl;
    constructor(httpService: HttpService);
    getHello(): string;
    getActivity(): any;
}
