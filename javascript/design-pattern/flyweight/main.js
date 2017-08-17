/**
 * Optimizing code that is repeatitive, slow and inefficiently shares data.
 * It aims to minimize the use of memory in an application by sharing as
 * much data as possible with related objects (e.g application configuration,
 * state and so on).
 * - Flyweight
 * - Concrete Flyweight
 * - Flyweight Factory
 */
Function.prototype.implementFor = function(parentClassOrObject) {
    if (parentClassOrObject.constructor == Function) {
        // Normal Inheritance
        this.prototype = new parentClassOrObject();
        this.prototype.constructor = this;
        this.prototype.parent = parentClassOrObject.prototype;
    } else {
        // Pure Virtual Inheritance
        this.prototype = parentClassOrObject;
        this.prototype.constructor = this;
        this.prototype.parent = parentClassOrObject;
    }
    return this;
}

/**
 * Flyweight
 */
var CoffeeOrder = {
    serverCoffee: function(context) {},
    getFlavor: function() {}
}
/**
 * Concrete Flyweight
 * @param {*} newFlavor 
 */
function CoffeeFlavor(newFlavor) {
    var flavor = newFlavor;
    if (typeof this.getFlavor == 'function') {
        this.getFlavor = function() {
            return flavor;
        }
    }
    if (typeof this.serverCoffee == 'function') {
        this.serverCoffee = function(context) {
            console.log("Serving Coffee flavor " 
                + flavor
                + " to table number "
                + context.getTable());
        }
    }
}

CoffeeFlavor.implementFor(CoffeeOrder);
/**
 * Helper
 * @param {*} tableNumber 
 */
function CoffeeOrderContext(tableNumber) {
    return {
        getTable: function() {
            return tableNumber;
        }
    }
}
/**
 * Flyweight Factory
 */
function CoffeFlavorFactory() {
    var flavors = {},
        length = 0;
    return {
        getCoffeeFlavor: function(flavorName) {
            var flavor = flavors[flavorName];
            if (typeof flavor == 'undefined') {
                flavor = new CoffeeFlavor(flavorName);
                flavors[flavorName] = flavor;
                length++;
            }
            return flavor;
        }
    }
}

function testFlyweight() {
    var flavors = [];
    var tables = [];
    var ordersMade = 0;
    var flavorFactory = new CoffeeFlavorFactory();
    function takeOrders(flavorIn, table) {
        flavors.push(flavorFactory.getCoffeeFlavor(flavorIn));
        tables.push(new CoffeeOrderContext(table));
        ordersMade++;
    }
   takeOrders("Cappuccino", 2);
   takeOrders("Frappe", 1);
   takeOrders("Frappe", 1);
   takeOrders("Xpresso", 1);
   takeOrders("Frappe", 897);
   takeOrders("Cappuccino", 97);
   takeOrders("Cappuccino", 97);
   takeOrders("Frappe", 3);
   takeOrders("Xpresso", 3);
   takeOrders("Cappuccino", 3);
   takeOrders("Xpresso", 96);
   takeOrders("Frappe", 552);
   takeOrders("Cappuccino", 121);
   takeOrders("Xpresso", 121);
 
   for (var i = 0; i < ordersMade; ++i) {
       flavors[i].serveCoffee(tables[i]);
   }
   console.log(" ");
   console.log("total CoffeeFlavor objects made: " + flavorFactory.getTotalCoffeeFlavorsMade());

}

var Book = function(id, title, author, genre, pageCount, publisherId, 
                ISBN, checkoutDate, checkoutMember, dueReturnDate, availability){
    this.id = id;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pageCount = pageCount;
    this.publisherId = publisherId;
    this.ISBN = ISBN;
    this.checkoutDate = checkoutDate;
    this.checkoutMember = checkoutMember;
    this.dueReturnDate = dueReturnDate;
    this.availability = availability;
}
Book.prototype = {
    getTitle: function() {
        return this.title;
    },
    getAuthor: function() {
        return this.author;
    },
    getISBN: function() {
        return this.ISBN;
    },
    updateCheckoutStatus: function(bookID, newStatus, checkoutDate, checkoutMember, newReturnDate) {
        this.id = bookID;
        this.availability = newStatus;
        this.checkoutDate = checkoutDate;
        this.checkoutMember = checkoutMember;
        this.dueReturnDate = newReturnDate;
    },
    extendCheckoutPeriod: function(bookID, newReturnDate) {
        this.id = bookID;
        this.dueReturnDate = newReturnDate;
    },
    isPastDue: function(bookID) {
        var currentDate = new Date();
        return currentDate.getTime() > Date.parse(this.dueReturnDate);
    }
}

var BookFactory = (function() {
    var existingBooks = {}, existingBook;
    return {
        createBook: function(title, author, genre, pageCount, publisherId, ISBN) {
            existingBook = existingBooks[ISBN];
            if (!!existingBook) { //  forces a boolean to  be returnd
                return existingBook;
            } else {
                var book = new Book(title, author, genre, pageCount, publisherId, ISBN);
                existingBooks[ISBN] = book;
                return book;
            }
        }
    }
})();

var BookRecordManager = (function() {
    var bookRecordDatabase = {};
    return {
        addBookRecord: function(id, title, author, genre, pageCount, publisherID, ISBN, 
            checkoutDate, checkoutMember, dueReturnDate, availability) {
                var book = BookFactory.createBook(title, author, genre, pageCount, publisherID, ISBN);
                bookRecordDatabase[id] = {
                    checkoutMember: checkoutMember,
                    checkoutDate: checkoutDate,
                    dueReturnDate: dueReturnDate,
                    availability: availability,
                    book: book
                }
            },
        updateCheckoutStatus: function(bookID, newStatus, checkoutDate, checkoutMember, newReturnDate) {
            var record = bookRecordDatabase[bookId];
            record.availability = newStatus;
            record.checkoutDate = checkoutDate;
            record.checkoutMember = checkoutMember;
            record.dueReturnDate = newReturnDate;
        },
        extendCheckoutPeriod: function(bookId, newReturnDate) {
            bookRecordDatabase[bookId].dueReturnDate = newReturnDate;
        },
        isPastDue: function(bookID) {
            var currentDate = new Date();
            return currentDate.getTime() > Date.parse(bookRecordDatabase[bookID].dueReturnDate);
        }
    }
})();