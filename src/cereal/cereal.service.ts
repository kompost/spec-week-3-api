import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { SearchService } from './search-query-parser.service';

@Injectable()
export class CerealService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly searchParser: SearchService,
    ) { }

    async getAll(search: Record<string, string>) {
        const where = this.searchParser.toPrismaWhere(search);
        return this.prisma.cereal
            .findMany({ where })
            .catch((err) => {
                throw new HttpException(
                    'Probably malformed search query',
                    HttpStatus.I_AM_A_TEAPOT,
                );
            });
    }

    async getById(id: number) {
        return this.prisma.cereal
            .findUniqueOrThrow({
                where: { id },
            })
            .catch((err) => {
                if (err.code === 'P2025')
                    throw new HttpException(
                        'Cereal not found',
                        HttpStatus.NOT_FOUND,
                    );
                throw new HttpException(
                    'Internal server error',
                    HttpStatus.INTERNAL_SERVER_ERROR,
                );
            });
    }

    async delete(id: number) {
        return this.prisma.cereal
            .delete({
                where: { id },
            })
            .catch((err) => {
                if (err.code === 'P2025')
                    throw new HttpException(
                        'Cereal not found',
                        HttpStatus.NOT_FOUND,
                    );
                throw new HttpException(
                    'Internal server error',
                    HttpStatus.INTERNAL_SERVER_ERROR,
                );
            });
    }

    async update(id: number, data: Prisma.CerealUpdateInput) {
        return this.prisma.cereal
            .update({
                where: { id },
                data,
            })
            .catch((err) => {
                if (err.code === 'P2025')
                    throw new HttpException(
                        'Cereal not found',
                        HttpStatus.NOT_FOUND,
                    );
                throw new HttpException(
                    'Internal server error',
                    HttpStatus.INTERNAL_SERVER_ERROR,
                );
            });
    }

    async create(data: Prisma.CerealCreateInput) {
        return this.prisma.cereal
            .create({
                data,
            })
            .catch((err) => {
                if (err.code === 'P2002')
                    throw new HttpException(
                        'Cereal with that name already exists',
                        HttpStatus.CONFLICT,
                    );
                console.log(err);
                throw new HttpException(
                    'Internal server error',
                    HttpStatus.INTERNAL_SERVER_ERROR,
                );
            });
    }
}
