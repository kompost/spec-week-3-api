import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchService {
    toPrismaWhere(search: Record<string, any>) {
        // Check if the value is a number
        const regex = /^\d+$/;
        let where = {
            AND: [] as any
        }

        for (const key in search) {
            let value;

            if (regex.test(search[key])) {
                value = Number(search[key])
            } else {
                value = search[key]
            }

            where.AND.push({
                [key]: value
            })
        }

        return where
    }
}
