{
    //* Getter and Setter
    // Getter   --> to get something
    // setter   --> to set something
    //? Getter and Setter no need to call. They act like a property


    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        // public addDeposit (amount: number) {
        //     return this._balance += amount;
        // }

        //? Setter
        set deposit(amount: number){
            this._balance += amount;
        }

        // public getBalance () {
        //     return this._balance;
        // }

        //? Getter
        get balance(){
            return this._balance;
        }
    }

    class StudentAccount extends BankAccount {
        test(){
            return this._balance
        }
    }


    const goribManusherAccount = new BankAccount(101, 'Mr. Gorib', 20)

    // goribManusherAccount.addDeposit(30)
    goribManusherAccount.deposit = 50;
    
    // const myBalance = goribManusherAccount.getBalance()
    const myBalance = goribManusherAccount.balance
    console.log(myBalance);
    
    
}