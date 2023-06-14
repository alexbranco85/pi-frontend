const INSERT_DATA = 'INSERT_DATA';

const insertData = (data) => {
    return {
        type: INSERT_DATA,
        payload: data
    };
};

export { insertData, INSERT_DATA };