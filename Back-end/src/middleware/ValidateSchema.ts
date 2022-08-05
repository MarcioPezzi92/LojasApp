import Joi, { ObjectSchema, string } from 'joi';
import { NextFunction, Response, Request } from 'express';
import { IStore } from '../models/Store';
import { IMerchandise } from '../models/Merchandise';
import Logging from '../library/Logging';

export const ValidateSchema = (schema: ObjectSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.validateAsync(req.body);

            next();
        } catch (error) {
            Logging.error(error);
            return res.status(422).json({ error });
        }
    };
};

export const Schemas = {
    store: {
        create: Joi.object<IStore>({
            name: Joi.string().required(),
            address: Joi.string().required()
        }),
        update: Joi.object<IStore>({
            name: Joi.string().required(),
            address: Joi.string().required()
        })
    },
    merchandise: {
        create: Joi.object<IMerchandise>({
            description: Joi.string().required(),
            price: Joi.number().required(),
            store: Joi.string().regex(/^[0-9a-fA-F]{24}$/)
        }),
        update: Joi.object<IMerchandise>({
            description: Joi.string().required(),
            price: Joi.number().required(),
            store: Joi.string().regex(/^[0-9a-fA-F]{24}$/)
        })
    }
};
