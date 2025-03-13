import { Test, TestingModule } from '@nestjs/testing';
import { FileUploadController } from './csv.controller';

describe('CsvParserController', () => {
    let controller: FileUploadController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [FileUploadController],
        }).compile();

        controller = module.get<FileUploadController>(FileUploadController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
