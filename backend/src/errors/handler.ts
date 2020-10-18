import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError'

interface ValidationErrors {
    [key: string] : string[];
}

const errorHandler : ErrorRequestHandler = ( error, req, res, next ) => {
    console.error(error);
    
    if (error instanceof ValidationError) {
        let errors: ValidationErrors = {};

        error.inner.forEach(err => {
            errors[err.path] = err.errors;
        });

        return res.status(400).json({ message: "Validation fails", errors: errors});
    }

    if (error instanceof EntityNotFoundError) {
        return res.status(404).json({ message: 'Could not find any entity of type "Orphanage" matching: "6"' })
    }

    return res.status(500).json({ message: "Internal server error" })
}

export default errorHandler;