// BankAccount constructor function
function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true; // Set account to active by default
  }
  
  // Methods added to BankAccount prototype
  BankAccount.prototype.deposit = function(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited ${amount} into account ${this.accountNumber}.`);
    } else {
      console.log('Invalid deposit amount.');
    }
  };
  
  BankAccount.prototype.withdraw = function(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn ${amount} from account ${this.accountNumber}.`);
    } else {
      console.log('Invalid withdrawal amount or insufficient balance.');
    }
  };
  
  BankAccount.prototype.checkBalance = function() {
    console.log(`Account ${this.accountNumber} balance: ${this.balance}`);
  };
  
  BankAccount.prototype.isActive = function() {
    return this.active;
  };
  
  // Function to calculate total balance of all active accounts
  function getTotalBalance(accounts) {
    let totalBalance = 0;
    for (const account of accounts) {
      if (account.isActive()) {
        totalBalance += account.balance;
      }
    }
    return totalBalance;
  }
  
  // Create multiple BankAccount objects
  const account1 = new BankAccount(1, 'John Doe', 'Savings', 1000);
  const account2 = new BankAccount(2, 'Jane Doe', 'Checking', 500);
  const account3 = new BankAccount(3, 'Bob Smith', 'Savings', 1500);
  
  // Perform operations on accounts
  account1.deposit(200);
  account2.withdraw(100);
  account3.deposit(300);
  
  // Display account balances
  account1.checkBalance();
  account2.checkBalance();
  account3.checkBalance();
  
  // Test isActive method
  console.log(`Account 1 is active: ${account1.isActive()}`);
  console.log(`Account 2 is active: ${account2.isActive()}`);
  console.log(`Account 3 is active: ${account3.isActive()}`);
  
  // Test getTotalBalance function
  const accounts = [account1, account2, account3];
  const totalBalance = getTotalBalance(accounts);
  console.log(`Total balance of all active accounts: ${totalBalance}`);
  