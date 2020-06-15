
 // must be listed before other Firebase SDKs
 var firebase = require("firebase/app");

 // Add the Firebase products that you want to use
 require("firebase/auth");
 require("firebase/firestore");

 let firestore = firebase.firestore()
 
 //*********************************************
 //การถอน
  const Withdraws = async(req, res) => {  
 try {

        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let autoId = '';
        for (let i = 0; i < 8; i++) {
        autoId += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        //////////////

        const sid = req.body.sid;                         
        const money = parseInt(req.body.money);           
        const fname= req.body.fname;                      
        const lname = req.body.lname;                   
        const primary = req.body.primary;                 
        const generation = req.body.generation;           
        const prefix = req.body.prefix;  
        const tid = req.body.tid; 
        const RafID = autoId; 
        const count = req.body.count; 

        await WithdrawById(sid,prefix,fname,lname,primary,money,generation,RafID,count);
        await Update_w_MoneyById(sid,money);
        await Update_w_Money(money,generation);
        await Update_withdraw(money,sid);
        await Withdraw_Amount(sid);
        await SumMoneyWithdraw(generation,money);
        console.log("Withdraw-success");

      }
      
      catch (error) {
          console.log(error);
          return res.status(500).send(error);
      }

}


//*********************************************************************************************
//บันทึกรายการถอนแต่ละครั้ง รายคน
const WithdrawById = function  (sid,prefix,fname,lname,primary,money,generation,RafID,count) {
    let time = new Date();  //วันที่
    //วว-ดด-ปปปป
    let time2 = time.toISOString().
    replace(/T/, ' ').     
    replace(/\..+/, '') 
    let time3 = time2.split(' ');
    let time4 = time3[0];
    // month
    let xxx = time.toString();
    let mmm = xxx.split(' ');
    let month = mmm[1]

    //วันที่
    let t = time.toString();
    let t2 = t.split('G');
    let t3 = t2[0];
    let W_time_date = t3;

    

    let key = count.toString();

    const document11 = firestore.collection("withdraw").doc(generation).collection(sid).doc(key);   
        try {

            document11.set({
                    W_sid : sid,
                    W_prefix : prefix,
                    W_fname : fname,
                    W_lname : lname,
                    W_primary: primary,
                    W_withdraw: money,
                    W_date: W_time_date,
                    date: time4,
                    month: month,
                    W_generation: generation,
                    W_RafID : RafID,
                    W_amount_withdraw : count,
                  });

        }
        catch (error) {
            console.log(error);
        }
  }
 //********************************************************************************************* 
  //อัปเดต ยอดเงินรายคน
  const Update_w_MoneyById = function  (sid,moneysss) {
    
    const Ref11 = firestore.collection("student").doc(sid);
    
    return firestore.runTransaction(function(transaction) {
    
        return transaction.get(Ref11).then(function(testDoc1) {
            let newmoney1 = testDoc1.data().money - moneysss;  
            transaction.update(Ref11, { money: newmoney1 });
        });
    
    
    }).then(function() {
        console.log("อัปเดต ยอดเงินรายคน Transaction successfully committed!");
    }).catch(function(error) {
        console.log("Transaction failed: ", error);
    });
} 


//*************************************************************************************************
  //อัปเดต ยอดเงินรวม แต่ละห้อง(ถอน)
  const Update_w_Money = function  (money,generation) {
    const Ref22 = firestore.collection("Total_Money").doc(generation);

    return firestore.runTransaction(function(transaction) {
    
        return transaction.get(Ref22).then(function(testDoc2) {
            let newmoney2 = testDoc2.data().total_money - money;   
            transaction.update(Ref22, { total_money: newmoney2}); //
        });

    }).then(function() {
        console.log("อัปเดต ยอดเงินรวม แต่ละห้อง(ถอน) Transaction successfully committed!");
    }).catch(function(error) {
        console.log("Transaction failed: ", error);
    });
}


//*************************************************************************************************
  //รวมยอดที่ถอนรายคน
  const Update_withdraw  = function  (money,sid) {
    const Ref33 = firestore.collection("student").doc(sid);

    return firestore.runTransaction(function(transaction) {
    
        return transaction.get(Ref33).then(function(testDoc3) {
            let newmoney3 = testDoc3.data().withdraw + money;   
            transaction.update(Ref33, { withdraw: newmoney3});
        });

    }).then(function() {
        console.log("รวมยอดที่ถอนรายคน Transaction successfully committed!");
    }).catch(function(error) {
        console.log("Transaction failed: ", error);
    });
}




 //********************************************************************************************* 
  //อัปเดต นับจำนวนการถอน
  const Withdraw_Amount = function  (sid) {
    
    const RefW = firestore.collection("student").doc(sid);
    
    return firestore.runTransaction(function(transaction) {
    
        return transaction.get(RefW).then(function(testDoc4) {
            let newwithdraw_amount = testDoc4.data().withdraw_amount+1;   
            transaction.update(RefW, { withdraw_amount: newwithdraw_amount });
        });
    
    
    }).then(function() {
        console.log("อัปเดต นับจำนวนการถอน Transaction successfully committed!");
    }).catch(function(error) {
        console.log("Transaction failed: ", error);
    });
} 







const SumMoneyWithdraw = function  (generation,money) {

    const Refsummoney2 = firestore.collection("Total_Money").doc(generation);
    
    return firestore.runTransaction(function(transaction) {
    
        return transaction.get(Refsummoney2).then(function(Doc4321) {
            let newSumMoneyWithdraw = Doc4321.data().SumMoneyWithdraw + money;   
            transaction.update(Refsummoney2, { SumMoneyWithdraw: newSumMoneyWithdraw });
        });
    
    
    }).then(function() {
        console.log("รวมยอดเงินถอน รายห้อง Transaction successfully committed!");
    }).catch(function(error) {
        console.log("Transaction failed: ", error);
    });


}





























 module.exports = {
    Withdraws,
  
 }
 
 
 

















































