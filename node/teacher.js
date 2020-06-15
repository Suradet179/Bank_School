
 // must be listed before other Firebase SDKs
 var firebase = require("firebase/app");

 // Add the Firebase products that you want to use
 require("firebase/auth");
 require("firebase/firestore");

 let firestore = firebase.firestore()
 

//*************************************************************************************************

 const add_Teacher = async(req, res) => {  
    try {
          const tid = req.body.tid;
          const prefix = req.body.prefix;
          const fname = req.body.fname;
          const lname = req.body.lname;
          const primary = req.body.primary;
          const email = req.body.email;
          const password = req.body.password;
 
        await addTeacher(tid,prefix,fname,lname,primary,email,password);
        await create_auth(email,password);

        // console.log(prefix);
        // console.log(fname);
        // console.log(lname);
        // console.log(primary);
        // console.log(email);
        // console.log(password);
         }
         
         catch (error) {
             console.log(error);
             return res.status(500).send(error);
         }
   
   }




//*************************************************************************************************
 //addTeacher
 const addTeacher = function(tid,prefix,fname,lname,primary,email,password){

             firestore.collection("teacher").doc(tid).set({ 
                 tid : tid,
                 prefix: prefix,
                 fname: fname,
                 lname: lname,
                 primary: primary,
                 email: email,
                 password: password,
                
             })
 
 }

//*************************************************************************************************
//create_auth
 const create_auth = function(email,password){
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
 }
 



//*************************************************************************************************
//get all teacher

const getTeacher = (req, res) => {

 let person = [];
 let citiesRef = firestore.collection("teacher");
 let allCities = citiesRef.get()
 
   .then(snapshot => {
     snapshot.forEach(doc => { person.push({
      "TeacherData" : doc.data()
     });
 
 
     });
     //console.log(person);
     res.json(person);
   })
   .catch(err => {
     console.log('Error getting documents', err);
   });
   














 }








 module.exports = {
  add_Teacher,
  getTeacher
 }
 
 
 