const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "aoluahadong",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected");

    const createDatabaseSql = "CREATE DATABASE mydb";
    const createTableSql  = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    const insertSql = "INSERT INTO customers (name, address) VALUE ('Company Inc', 'Highway 37')";
    const insertMultipleSql = "INSERT INTO customers (name, address) VALUE ?";
    const values = [
        ['John', 'Highway 71'],
        ['Peter', 'Lowstreet 4'],
        ['Amy', 'Apple st 652'],
        ['Hannah', 'Mountain 21'],
        ['Michael', 'Valley 345'],
        ['Sandy', 'Ocean blvd 2'],
        ['Betty', 'Green Grass 1'],
        ['Richard', 'Sky st 331'],
        ['Susan', 'One way 98'],
        ['Vicky', 'Yellow Garden 2'],
        ['Ben', 'Park Lane 38'],
        ['William', 'Central st 954'],
        ['Chuck', 'Main Road 989'],
        ['Viola', 'Sideway 1633']
    ];

    const selectSql = "SELECT * FROM customers";
    const anotherSelectSql = "SELECT name, address FROM customers";

    /* {
        fieldCount: 0,
        affectedRows: 14,
        insertId: 0,
        serverStatus: 2,
        warningCount: 0,
        message: '\'Records:14  Duplicated: 0  Warnings: 0',
        protocol41: true,
        changedRows: 0
    }*/


    const whereStmt = "SELECT * FROM customers WHERE address = 'Park Lane 38'";
    // wildcard characters
    const wildcardStmt = "SELECT * FROM customers WHERE address LIKE 'S%'";

    const orderByStmt = "SELECT * FROM customers ORDER BY name";
    const orderByDescStmt = "SELECT * FROM customers ORDER BY name DESC";

    const deleteStmt = "DELETE FROM customers WHERE address = 'Mountain 21'";
    
    const dropTableStmt = "DROP TABLE customers2";

    const createTable2Sql  = "CREATE TABLE customers2 (name VARCHAR(255), address VARCHAR(255))";

    const updateStmt = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";

    const limitStmt = "SELECT * FROM customers LIMIT 5";

    const limitOffsetStmt = "SELECT * FROM customers LIMIT 5 OFFSET 2";
    const shorLimitStmt = "SELECT * FROM customers LIMIT 2,5";

    con.query(shorLimitStmt, function(err, result) {
        if (err) throw err;

        console.log(result);
    });

    // con.query(createTable2Sql, function(err, result, fields) {
    //     if (err) throw err;

    //     console.log("Table created");
    //     con.query(dropTableStmt, function(err, result) {
    //         if (err) throw err;
    //         console.log("Table dropped");
    //     });
    // });

    //-------------------------------------
    const createUserTableStmt = "CREATE TABLE users (id int, name VARCHAR(255), favorite_product int)";
    // con.query(createUserTableStmt, function(err, result) {
    //     if (err) throw err;

    //     console.log("table users created");
    // });

    const createProductsTableStmt = "CREATE TABLE products (id int, name VARCHAR(255))";
    // con.query(createProductsTableStmt, function(err, result) {
    //     if (err) throw err;
    //     console.log("table products created");
    // });

    const insertUsersStmt = "INSERT INTO users (id, name, favorite_product) VALUES ?";
    const usersData = [
        [  1,  'John',  154],
        [  2,  'Peter',  154],
        [  3,  'Amy',  155],
        [  4,  'Hannah', 0],
        [  5,  'Michael', 0]
    ];
    const insertProductsStmt = "INSERT INTO products (id, name) VALUES ?";
    const productsData = [
        [154, 'Chocolate Heaven'],
        [155, 'Tasty Lemons'],
        [156, 'Vanilla Dreams']
    ]

    con.query(insertUsersStmt, [usersData], function(err, result) {
        if (err) throw err;

        con.query(insertProductsStmt, [productsData], function(err, result) {
            if (err) throw err;

            const joinStmt = "SELECT users.name as user, products.name as favorite FROM users \
                    JOIN products ON users.favorite_product = products.id";
                
            con.query(joinStmt, function(err, result) {
                if (err) throw err;

                console.log(result);
            });
        });
    });
    
    
})