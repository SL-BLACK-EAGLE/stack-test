import * as SQLite from "expo-sqlite";

// Initialize the SQLite database
const db = SQLite.openDatabase("stackstore.db");

interface Data {
    skuid: number;
    skunumber: string;
    skuprice: number;
    skuenabled: boolean;
    skuqtyonorder: number;
    skuavailableindays: number;
    skuimageurl: string;
    skuweight: number;
    skuavailableitems: number;
    skulastmodified: string;
    skucreated: string;
    skuretailprice: number;
    skufeatures: string;
    skuname_enGB: string;
    skushortdescription_enGB: string;
    skudescription_enGB: string;
    skunumbersonparts: string;
    skualtcode: string;
    skupath: string;
    oems: {
        name: string;
        partnumbers: string;
        keywords: string;
    }[];
    machineTypes: {
        name: string;
        description: string;
        model: string;
    }[];
    manufacturers: {
        name: string;
        partnumbers: string;
        keywords: string;
    }[];

}
// Create a table to store product data
const createTable = () => {
    db.transaction((tx) => {
        // tx.executeSql(`DROP TABLE IF EXISTS products;`);
        // tx.executeSql(`DROP TABLE IF EXISTS oems;`);
        // tx.executeSql(`DROP TABLE IF EXISTS machineTypes;`);
        // tx.executeSql(`DROP TABLE IF EXISTS manufacturers;`);
        tx.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='products';",
            [],
            (_, result) => {
                if (result.rows._array.length > 0) {
                    console.log("product Table already exists");
                    return;
                } else {
                    console.log("product Table does not exist");
                    tx.executeSql(
                        `create table if not exists products (
                        skuid INTEGER PRIMARY KEY, 
                        skunumber TEXT, 
                        skuprice REAL, 
                        skuenabled INTEGER, 
                        skuqtyonorder INTEGER, 
                        skuavailableindays INTEGER, 
                        skuimageurl TEXT, 
                        skuweight REAL, 
                        skuavailableitems INTEGER, 
                        skulastmodified TEXT, 
                        skucreated TEXT, 
                        skuretailprice REAL, 
                        skufeatures TEXT, 
                        skuname_enGB TEXT, 
                        skushortdescription_enGB TEXT, 
                        skudescription_enGB TEXT, 
                        skunumbersonparts TEXT, 
                        skualtcode TEXT, 
                        skupath TEXT
                        );`,
                        [],
                        (_, error) => {
                            if (error) {
                                console.error("Error creating product table:", error);
                            } else {
                                console.log("product Table created successfully");
                            }
                        }
                    );
                }
            }

        );

        tx.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='oems';",
            [],
            (_, result) => {
                if (result.rows._array.length > 0) {
                    console.log("oems Table already exists");
                    return;
                } else {
                    console.log("oems Table does not exist");
                    tx.executeSql(
                        `create table if not exists oems (
                          id integer primary key autoincrement, 
                          skuid integer, 
                          name text, 
                          partnumbers text, 
                          keywords text, 
                          foreign key (skuid) references products (skuid)
                        );`
                        ,
                        [],
                        (_, error) => {
                            if (error) {
                                console.error("Error creating oems table:", error);
                            } else {
                                console.log("oems Table created successfully");
                            }
                        }
                    );
                }
            }

        );



        tx.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='machineTypes';",
            [],
            (_, result) => {
                if (result.rows._array.length > 0) {
                    console.log("machineTypes Table already exists");

                    return;
                } else {
                    console.log("machineTypes Table does not exist");
                    tx.executeSql(
                        `create table if not exists machineTypes (
                          id integer primary key autoincrement, 
                          skuid integer, 
                          name text, 
                          description text, 
                          model text, 
                          foreign key (skuid) references products (skuid)
                        );`
                        ,
                        [],
                        (_, error) => {
                            if (error) {
                                console.error("Error creating machineTypes table:", error);
                            } else {
                                console.log("machineTypes Table created successfully");
                            }
                        }
                    );
                }
            }

        );

        tx.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='manufacturers';",
            [],
            (_, result) => {
                if (result.rows._array.length > 0) {
                    console.log("manufacturers Table already exists");

                    return;
                } else {
                    console.log("manufacturers Table does not exist");
                    tx.executeSql(
                        `create table if not exists manufacturers (
                          id integer primary key autoincrement, 
                          skuid integer, 
                          name text, 
                          partnumbers text, 
                          keywords text, 
                          foreign key (skuid) references products (skuid)
                        );`,
                        [],
                        (_, error) => {
                            if (error) {
                                console.error("Error creating manufacturers table:", error);
                            } else {
                                console.log("manufacturers Table created successfully");
                            }
                        }
                    );
                }
            }

        );





    });
};

// Function to insert data into the database
const insertData = (data: Data[]) => {
    db.transaction(tx => {
        data.forEach(item => {
            tx.executeSql(
                `insert into products (
            skuid, skunumber, skuprice, skuenabled, skuqtyonorder, skuavailableindays, 
            skuimageurl, skuweight, skuavailableitems, skulastmodified, 
            skucreated, skuretailprice, skufeatures, skuname_enGB, 
            skushortdescription_enGB, skudescription_enGB, 
            skunumbersonparts, skualtcode, skupath
          ) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    item.skuid, item.skunumber, item.skuprice, item.skuenabled ? 1 : 0, item.skuqtyonorder,
                    item.skuavailableindays, item.skuimageurl, item.skuweight,
                    item.skuavailableitems, item.skulastmodified, item.skucreated, item.skuretailprice,
                    item.skufeatures, item.skuname_enGB, item.skushortdescription_enGB,
                    item.skudescription_enGB, item.skunumbersonparts, item.skualtcode, item.skupath
                ]
            );

            item.oems.forEach(oem => {
                tx.executeSql(
                    `insert into oems (skuid, name, partnumbers, keywords) values (?, ?, ?, ?)`,
                    [item.skuid, oem.name, oem.partnumbers, oem.keywords],
                    (_, result) => {
                        console.log("oems inserted successfully");
                    },
                    (_, error) => {
                        console.error("Error inserting oems:", error);
                    }
                );
            });

            item.machineTypes.forEach(machineType => {
                tx.executeSql(
                    `insert into machineTypes (skuid, name, description, model) values (?, ?, ?, ?)`,
                    [item.skuid, machineType.name, machineType.description, machineType.model],
                    (_, result) => {
                        console.log("machineType inserted successfully");
                    },
                    (_, error) => {
                        console.error("Error inserting machineType:", error);
                    }
                );
            });

            item.manufacturers.forEach(manufacturer => {
                tx.executeSql(
                    `insert into manufacturers (skuid, name, partnumbers, keywords) values (?, ?, ?, ?)`,
                    [item.skuid, manufacturer.name, manufacturer.partnumbers, manufacturer.keywords],
                    (_, result) => {
                        console.log("manufacturer inserted successfully");
                    },
                    (_, error) => {
                        console.error("Error inserting manufacturer:", error);
                    }
                );
            });
        });
    });
}

const readData = () => {
    db.transaction(tx => {
        tx.executeSql(
            `select * from products`,
            [],
            (_, result) => {
                console.log("products:", result.rows._array);
            },
            (_, error) => {
                console.error("Error reading products:", error);
            }
        );

        tx.executeSql(
            `select * from oems`,
            [],
            (_, result) => {
                console.log("oems:", result.rows._array);
            },
            (_, error) => {
                console.error("Error reading oems:", error);
            }
        );

        tx.executeSql(
            `select * from machineTypes`,
            [],
            (_, result) => {
                console.log("machineTypes:", result.rows._array);
            },
            (_, error) => {
                console.error("Error reading machineTypes:", error);
            }
        );

        tx.executeSql(
            `select * from manufacturers`,
            [],
            (_, result) => {
                console.log("manufacturers:", result.rows._array);
            },
            (_, error) => {
                console.error("Error reading manufacturers:", error);
            }
        );
    });
}

// Function to store fetched data into the database
export const storeDataToDB = (data: Data[]) => {
    createTable(); // Create the table if it doesn't exist

    // Insert each product into the database
    insertData(data);
    readData();
};

