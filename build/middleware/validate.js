"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const zod_1 = require("zod");
const validate = (schema) => {
    return (req, res, next) => {
        try {
            const validatedFields = schema.safeParse(req.body);
            if (!validatedFields.success) {
                const dataError = validatedFields.error.errors.map((result, i) => ({
                    fields: result.path[i],
                    message: result.message
                }));
                res.status(400).json(dataError);
            }
            else {
                next();
            }
        }
        catch (error) {
            if (error instanceof zod_1.z.ZodError)
                res.json({ message: error });
            res.json({ message: "Internal Server Error" });
        }
    };
};
exports.validate = validate;
//# sourceMappingURL=validate.js.map