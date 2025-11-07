import {jest} from '@jest/globals'
export default {
    mockRequest: () => {
        const req = {} as any;
        req.body = jest.fn().mockReturnValue(req);
        req.params =  jest.fn().mockReturnValue(req);
        return req;
    },
    mockResponse: () => {
        const res = {} as any;
        res.send = jest.fn().mockReturnValue(res);
        res.status = jest.fn().mockReturnValue(res);
        res.json =  jest.fn().mockReturnValue(res);
        return res;
    },
    mockNext: () => jest.fn(),
};