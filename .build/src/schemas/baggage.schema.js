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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var Baggage_1;
const mongoose_1 = require("@nestjs/mongoose");
let Baggage = Baggage_1 = class Baggage {
    static of(params) {
        const baggage = new Baggage_1();
        Object.assign(baggage, params);
        return baggage;
    }
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Baggage.prototype, "weight", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Baggage.prototype, "flight", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Baggage.prototype, "passenger", void 0);
Baggage = Baggage_1 = __decorate([
    mongoose_1.Schema()
], Baggage);
exports.Baggage = Baggage;
class BaggageRepositoryFake {
    constructor() { }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            return 'hello';
        });
    }
    remove() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    findOne() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.BaggageRepositoryFake = BaggageRepositoryFake;
exports.BaggageSchema = mongoose_1.SchemaFactory.createForClass(Baggage);
//# sourceMappingURL=baggage.schema.js.map