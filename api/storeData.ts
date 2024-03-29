import { createTable, insertOemsData, insertProductData, insertMachineTypesData, readData, insertManufacturersData, insertData } from "../lib/database";
import { Data, MachineTypes, Manufacturers, Oems, Products,  } from "../types";

// Function to storeinDB fetched data into the Api
export const storeDataToDB = (data: Data[]) => {
    createTable(); // Create the table if it doesn't exist

    // Insert each data into the database
    insertData(data);

    // Function to fetch data from the database
    // return readData();
};


export const storeProductDataToDB = (data: Products[]) => {
    console.log(data);
    console.log("called");
    // createTable(); // Create the table if it doesn't exist

    // Insert each product into the database
    insertProductData(data);

    // Function to fetch data from the database
    // return readData();
};

export const storeOemsDataToDB = (data: Oems[]) => {
    // createTable(); // Create the table if it doesn't exist

    // Insert each product into the database
    insertOemsData(data);

    // Function to fetch data from the database
    // return readData();
};


export const storeMachineTypeDataToDB = (data: MachineTypes[]) => {
    // createTable(); // Create the table if it doesn't exist

    // Insert each product into the database
    insertMachineTypesData(data);

    // Function to fetch data from the database
    // return readData();
};

export const storeManufacturersDataToDB = (data: Manufacturers[]) => {
    // createTable(); // Create the table if it doesn't exist

    // Insert each product into the database
    insertManufacturersData(data);

    // Function to fetch data from the database
    // return readData();
};