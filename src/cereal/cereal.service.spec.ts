import { Test, TestingModule } from '@nestjs/testing';
import { CerealService } from './cereal.service';

describe('ProductsService', () => {
    let service: CerealService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CerealService],
        }).compile();

        service = module.get<CerealService>(CerealService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
