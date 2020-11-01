"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lambdaWrapper_1 = require("./utils/lambdaWrapper");
const app_module_1 = require("./app.module");
exports.handler = lambdaWrapper_1.lambdaWrapper(app_module_1.AppModule);
//# sourceMappingURL=root2.js.map