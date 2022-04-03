import { HttpService } from '@nestjs/axios';
export declare class AppService {
    private httpService;
    private ffBaseUrl;
    private espnBaseUrl;
    constructor(httpService: HttpService);
    getHello(): string;
    getActivity(): any;
    getNewsFeed(): any;
}
