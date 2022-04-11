const authMiddleware = async (params, next) => {    
    //BEFORE: Can manipulate params
    const result = await next(params);
    //AFTER: Can manipulate result
    return result;
}
export default authMiddleware;