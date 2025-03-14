import { Controller, Get, Delete, Param, Post, Body } from '@nestjs/common';
import { CerealService } from './cereal.service';
import { ApiOperation } from '@nestjs/swagger';
// import { SearchQueryParserService } from './search-query-parser.service';
import { CreateCerealDto } from './dto/create-cereal.dto';
import { Prisma } from '@prisma/client';
import { UpdateCerealDto } from './dto/update-cereal.dto';

@Controller('cereal')
export class CerealController {
    constructor(
        private readonly cereal: CerealService,
        // private readonly searchParser: SearchQueryParserService,
    ) {}

    @Get()
    @ApiOperation({ summary: 'Retrieve all cereal Cereal' })
    async getCereal() {
        return await this.cereal.getAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Retrieve single cereal by id' })
    async getProduct(@Param('id') id: string) {
        return await this.cereal.getById(Number(id));
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a cereal' })
    async deleteProduct(@Param('id') id: string) {
        return await this.cereal.delete(Number(id));
    }

    @Post()
    @ApiOperation({ summary: 'Create a new cereal' })
    async create(@Body() createProductDTO: CreateCerealDto) {
        return await this.cereal.create(
            createProductDTO as unknown as Prisma.CerealCreateInput,
        );
    }

    @Post(':id')
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
