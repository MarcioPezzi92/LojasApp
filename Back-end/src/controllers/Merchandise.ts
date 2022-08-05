import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Merchandise from '../models/Merchandise';

const createMerchandise = (req: Request, res: Response, next: NextFunction) => {
    const { description, price, store } = req.body;

    const merchandise = new Merchandise({
        description,
        price,
        store
    });

    return merchandise
        .save()
        .then((merchandise) => res.status(201).json({ merchandise }))
        .catch((error) => res.status(500).json({ error }));
};

const readMerchandise = (req: Request, res: Response, next: NextFunction) => {
    const merchandiseId = req.params.merchandiseId;

    return Merchandise.findById(merchandiseId)
        .populate('store')
        .select('-__v')
        .then((merchandise) => (merchandise ? res.status(200).json({ merchandise }) : res.status(404).json({ message: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));
};

const readAll = (req: Request, res: Response, next: NextFunction) => {
    return Merchandise.find()
        .populate('store')
        .select('-__v')
        .then((merchandises) => res.status(200).json({ merchandises }))
        .catch((error) => res.status(500).json({ error }));
};

const updateMerchandise = (req: Request, res: Response, next: NextFunction) => {
    const merchandiseId = req.params.merchandiseId;

    return Merchandise.findById(merchandiseId)
        .then((merchandise) => {
            if (merchandise) {
                merchandise.set(req.body);

                return merchandise
                    .save()
                    .then((merchandise) => res.status(201).json({ merchandise }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                res.status(404).json({ message: 'Not found' });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};

const deleteMerchandise = (req: Request, res: Response, next: NextFunction) => {
    const merchandiseId = req.params.merchandiseId;

    return Merchandise.findByIdAndDelete(merchandiseId)
        .then((merchandise) => (merchandise ? res.status(201).json({ message: 'deleted ' }) : res.status(404).json({ message: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));
};

export default { createMerchandise, readMerchandise, readAll, updateMerchandise, deleteMerchandise };
