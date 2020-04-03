

const productdb = (dbname, table) => {
    
    const db = new Dexie(dbname);
    db.version(1).stores(table);
    db.open();

    // const db = new Dexie("myDb");
    // db.version(1).stores({
    //     friends: 'name, age'
    // })

    return db;
}

//insert function
const bulkcreate = (dbtable, data) => {
    let flag = empty(data);
    if (flag) {
        dbtable.bulkAdd([data]);
        console.log("data inserted successfully...!");
    } else {
        console.log("Please Provide Data...!")
    }

    return flag;
    
}

// check textbox validation
const empty = object => {
    let flag = false;

    for (const value in object) {
        if (object[value] != "" && object.hasOwnProperty(value)) {
            flag = true;
        } else {
            flag = false;
        }
    }
    return flag;
}

export default productdb;
export {
    bulkcreate
};