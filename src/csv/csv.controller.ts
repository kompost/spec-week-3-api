import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { ApiOperation, ApiTags, ApiConsumes, ApiBody } from '@nestjs/swagger'
import type { Express } from 'express'
import { FileUploadDto } from './dto/file-upload.dto'
import { CsvFileValidationPipe } from './pipes/csv-file-validator.pipe'
import { CsvParserService } from './csv.service'

@ApiTags('upload csv file')
@Controller('upload')
export class FileUploadController {
    constructor(private readonly parser: CsvParserService) { }

    @Post()
    @ApiOperation({ summary: 'Upload a CSV file' })
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        description: 'CSV file',
        type: FileUploadDto,
    })
    @UseInterceptors(FileInterceptor('file'))
    async uploadCSV(
        @UploadedFile(new CsvFileValidationPipe()) file: Express.Multer.File
    ) {
        const content = file.buffer.toString('utf-8')
        // parse the content
        let result = await this.parser.parse(content)

        // remove the first element of the array
        if (Array.isArray(result) && result.length > 0) {
            result.shift()
            result = result.filter(item => item.name !== null)
        }
        // save the result to the database
        return this.parser.save(result)
    }
}

