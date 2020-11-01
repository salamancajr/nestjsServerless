"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const tickets_module_1 = require("./tickets/tickets.module");
const schedule_module_1 = require("./schedule/schedule.module");
const baggage_module_1 = require("./baggage/baggage.module");
const lambdaWrapper_1 = require("./utils/lambdaWrapper");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            tickets_module_1.TicketsModule,
            schedule_module_1.ScheduleModule,
            baggage_module_1.BaggageModule,
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forRoot('mongodb+srv://salamancajr:v2i4C5ntXhrmG*D@cluster0.lhppp.mongodb.net/flights?retryWrites=true&w=majority'),
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
function handler() {
    return __awaiter(this, void 0, void 0, function* () {
        return lambdaWrapper_1.lambdaWrapper(AppModule);
    });
}
exports.handler = handler;
//# sourceMappingURL=app.module.js.map