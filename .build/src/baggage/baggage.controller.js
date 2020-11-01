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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const create_baggage_dto_1 = require("../dto/create-baggage.dto");
const baggage_service_1 = require("./baggage.service");
let BaggageController = class BaggageController {
    constructor(baggageService) {
        this.baggageService = baggageService;
    }
    findAll() {
        return this.baggageService.findAll();
    }
    tester() {
        return 'hey';
    }
    findOne(id) {
        return id;
    }
    create(createBaggageDto) {
        return this.baggageService.createOne(createBaggageDto);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BaggageController.prototype, "findAll", null);
__decorate([
    common_1.Get('hey'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BaggageController.prototype, "tester", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BaggageController.prototype, "findOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_baggage_dto_1.CreateBaggageDto]),
    __metadata("design:returntype", void 0)
], BaggageController.prototype, "create", null);
BaggageController = __decorate([
    common_1.Controller('baggage'),
    __metadata("design:paramtypes", [baggage_service_1.BaggageService])
], BaggageController);
exports.BaggageController = BaggageController;
//# sourceMappingURL=baggage.controller.js.map