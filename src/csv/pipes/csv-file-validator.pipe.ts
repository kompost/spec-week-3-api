import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
// import type { Express } from 'express';

@Injectable()
export class CsvFileValidationPipe implements PipeTransform {
    transform(file: Express.Multer.File) {
        if (!file) {
            throw new BadRequestException('No file uploaded');
        }

        if (file.mimetype !== 'text/csv') {
            throw new BadRequestException(
                'Invalid file type. Only CSV files are allowed.',
            );
        }

        return file;
    }
}
