// import { ProductController } from "../conttrollers/product.controller";
// import { ProductService } from "../services/product.service";
// import mock from '../mock/mock'


import { Products } from '../entities/product.entity';
import { TestConection } from '../data-access/test.connection';


// beforeAll( async () => {
//     await TestConection.initialize();
// })

// afterAll( async () => {
//     await TestConection.destroy();
// })

// afterEach( async () => {
//     const entities = TestConection.entityMetadatas;
//     for( const entity of entities){
//         const repository = TestConection.getRepository(entity.name);
//         await repository.clear;
//     }
// })

describe('Products entytes', () => {

    beforeAll( async () => {
        await TestConection.initialize();
    })

    it('get product', async () => {
        const productRepo = TestConection.getRepository(Products);
        const result = await productRepo.find({where: {
            id: 2,
        },
        })
        expect(result).toHaveLength(1);
        expect(result[0]).toEqual({
            id: 2,
            price: '20',
            name: 'ghj',
        });
    })
})








// const storageService = new ProductService();
// const produvtController = new ProductController(storageService);
// const req = mock.mockRequest();
// const res = mock.mockResponse();

// const product = {
//     id: 1,
//     name: 'fg',
//     price: 234,
// }

// test('dfgfdgdfg', async () => {
//     req.params.id='1';
//     jest.spyOn(storageService, 'findProductById');
//     await produvtController.getProduct(req, res, mock.mockNext);
//     expect(res.send).toBeCalledWith(product);
//     expect(res.status).toHaveBeenNthCalledWith(200)
// })