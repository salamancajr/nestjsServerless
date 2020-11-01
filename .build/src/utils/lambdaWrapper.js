"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_serverless_express_1 = require("aws-serverless-express");
const express = require("express");
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
exports.lambdaWrapper = AppModule => {
    function createApp(expressApp) {
        return __awaiter(this, void 0, void 0, function* () {
            const app = yield core_1.NestFactory.create(AppModule, new platform_express_1.ExpressAdapter(expressApp));
            return app;
        });
    }
    let cachedServer;
    function bootstrap() {
        return __awaiter(this, void 0, void 0, function* () {
            const expressApp = express();
            const app = yield createApp(expressApp);
            yield app.init();
            return aws_serverless_express_1.createServer(expressApp);
        });
    }
    function handler(event, context) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!cachedServer) {
                const server = yield bootstrap();
                cachedServer = server;
            }
            return aws_serverless_express_1.proxy(cachedServer, event, context, 'PROMISE').promise;
        });
    }
    return handler;
};
//# sourceMappingURL=lambdaWrapper.js.map