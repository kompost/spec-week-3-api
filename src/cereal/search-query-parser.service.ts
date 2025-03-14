import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Cereal } from '@prisma/client';

// type CerealFilter = Omit<Cereal, 'id'>

@Injectable()
export class SearchQueryParserService {
    constructor() {}

    parseQuery(query: Record<string, any>) {
        let obj: any = {};
        for (let key in query) {
            console.log(key, query[key]);
            obj[key] = {
                equals: query[key],
            };
        }
        console.log(obj);
        return query;
    }
}
