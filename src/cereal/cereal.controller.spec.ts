import { Test, TestingModule } from '@nestjs/testing';
import { CerealController } from './cereal.controller';

describe('ProductsController', () => {
    let controller: CerealController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [CerealController],
        }).compile();

        controller = module.get<CerealController>(CerealController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
