/* Create a Bank Account object with the following properties and methods:

    A name property is set to “Alex”.
    A balance property is set to 0.
    A credit() method adding the (positive or negative) value passed as an argument to the account balance.
    A describe() method returning the account description.
*/

var account = {
    name: "Alex",
    balance: 0,

    credit(balance) {
        this.balance += balance;
        return this.balance;
    },
    describe() {
        return `${this.name} has ${this.balance} of balance`;
    },
};

console.log(account.credit(10));
console.log(account.describe());
console.log(account.credit(1980));
console.log(account.describe());
