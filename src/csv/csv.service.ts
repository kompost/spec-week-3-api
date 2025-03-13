import { Injectable } from '@nestjs/common';
import { Cereal } from '@prisma/client';
import * as Papa from 'papaparse';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CsvParserService {
    constructor(private readonly prisma: PrismaService) { }

    async parse(fileContent = '', delimiter = ';') {
        const parsedData = Papa.parse(fileContent, {
            header: true,
            dynamicTyping: true, // Automatically convert types
            delimiter,
        });

        return parsedData.data as Cereal[];
    }

    async save(data: Cereal[]) {
        // Save the data to the database, skipping duplicates
        return this.prisma.cereal.createMany({
            data,
            skipDuplicates: true,
        });
    }
}
