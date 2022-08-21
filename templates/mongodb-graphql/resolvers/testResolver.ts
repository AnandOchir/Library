import { Test } from "../schemas";

const addTest = async (_: any, params: any) => {
    const test = new Test(params);

    try {
        await test.save();
        return test;
    } catch (error) {
        return error;
    }
};

const getTests = async (_: any, params: any) => {
    const Tests = await Test.find(params);
    return Tests
};

export { addTest, getTests };
