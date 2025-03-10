import { Test, TestingModule } from '@nestjs/testing';
import { CsvParserService } from './csv-parser.service';

describe('CsvParserService', () => {
    let service: CsvParserService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CsvParserService],
        }).compile();

        service = module.get<CsvParserService>(CsvParserService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should parse CSV correctly', async () => {

        const result = await service.parse('Cereal')

        expect(result[0]).toEqual({
            name: 'String',
            mfr: 'Categorical',
            type: 'Categorical',
            calories: 'Int',
            protein: 'Int',
            fat: 'Int',
            sodium: 'Int',
            fiber: 'Float',
            carbo: 'Float',
            sugars: 'Int',
            potass: 'Int',
            vitamins: 'Int',
            shelf: 'Int',
            weight: 'Float',
            cups: 'Float',
            rating: 'Float'
        })
    });

});
