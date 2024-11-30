"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_alias_1 = __importDefault(require("module-alias"));
const path_1 = __importDefault(require("path"));
// Register alias
module_alias_1.default.addAlias("@", path_1.default.resolve(__dirname));
//# sourceMappingURL=setup-alias.js.map