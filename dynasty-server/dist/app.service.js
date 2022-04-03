"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let AppService = class AppService {
    constructor(httpService) {
        this.httpService = httpService;
        this.ffBaseUrl = 'https://www.fleaflicker.com/api';
        this.espnBaseUrl = 'https://www.espn.com/espn';
    }
    getHello() {
        return 'Hello World!';
    }
    getActivity() {
        return this.httpService.get(`${this.ffBaseUrl}/FetchLeagueActivity?sport=NFL&league_id=309764`).pipe((0, rxjs_1.map)((axiosResponse) => {
            return axiosResponse.data;
        }));
    }
    getNewsFeed() {
        return this.httpService.get(`${this.espnBaseUrl}/rss/nfl/news`).pipe((0, rxjs_1.map)((axiosResponse) => {
            return axiosResponse.data;
        }));
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map