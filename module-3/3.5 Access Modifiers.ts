{
    //* Access Modifiers
    // 1. Public --> Accessable from anywhere
    // 2. Private ---> Accessable from inside the class
    // 3. Protected --> Accessable from inside the class and derived class

    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        public addDeposit (amount: number) {
            return this._balance += amount;
        }

        public getBalance () {
            return this._balance;
        }
    }

    class StudentAccount extends BankAccount {
        test(){
            return this._balance
        }
    }


    const goribManusherAccount = new BankAccount(101, 'Mr. Gorib', 20)
    // goribManusherAccount.balance = 10
    goribManusherAccount.addDeposit(30)
    
    const myBalance = goribManusherAccount.getBalance()
    console.log(myBalance);
    
    
}