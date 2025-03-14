import { Controller, Get, Delete, Param, Post, Body, Query } from '@nestjs/common';
import { CerealService } from './cereal.service';
import { ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
// import { SearchQueryParserService } from './search-query-parser.service';
import { CreateCerealDto } from './dto/create-cereal.dto';
import { Prisma } from '@prisma/client';
import { UpdateCerealDto } from './dto/update-cereal.dto';
import { Public } from '../auth/public.decorator';

@Controller('cereals')
export class CerealController {
    constructor(
        private readonly cereal: CerealService,
        // private readonly searchParser: SearchQueryParserService,
    ) { }

    @Get()
    @Public()
    @ApiOperation({ summary: 'Retrieve all cereal Cereal' })
    async getAll(
        @Query() search: Record<string, string>,
    ) {
        return await this.cereal.getAll(search);
    }

    @Get(':id')
    @Public()
    @ApiOperation({ summary: 'Retrieve single cereal by id' })
    async get(@Param('id') id: string) {
        return await this.cereal.getById(Number(id));
    }

    @Delete(':id')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Delete a cereal' })
    async delete(@Param('id') id: string) {
        return await this.cereal.delete(Number(id));
    }

    @Post()
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Create a new cereal' })
    async create(@Body() createProductDTO: CreateCerealDto) {
        return await this.cereal.create(
            createProductDTO as unknown as Prisma.CerealCreateInput,
        );
    }

    @Post(':id')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Update a cereal' })
    async update(
        @Param('id') id: string,
        @Body() updateProductDTO: UpdateCerealDto,
    ) {
        return await this.cereal.update(
            Number(id),
            updateProductDTO as unknown as Prisma.CerealUpdateInput,
        );
    }
}
