const express = require('express');
const { MongoClient } = require('mongodb')
const app = express();
const cors = require('cors')
const { ObjectId } = require('mongodb')

app.use(cors())
app.use(express.json())

let uri = `mongodb://localhost:27017`;
let client;
let port = 5000;

async function initClient() {
    if (!client) {
        client = await MongoClient.connect(uri);
    }
    return client
}

/*--------------------------| Databases||Years and Collections||Classes |--------------------------*/

//Getting admin data and store it into an array for later use.
let adminData = [];
app.get('/admindets/:dbname/:cname', async (req,res) => {
    try {
        let { dbname, cname } = req.params;
        const client = await initClient();
        const db = await client.db(dbname);
        adminData = await db.collection(cname).find().toArray()
        return res.status(200).json({adminData});
} catch(err) {
    return res.status(500).json({Oops_GET_AdminDets:`${err.name}_${err.message}`})
}
})

//Getting all teachers Data
let teachersData = [];
app.get('/teachersdets/:dbname/:cname', async (req,res) => {
    try {
        let {dbname, cname} = req.params;
        const client = await initClient();
        const db =  await client.db(dbname);
        teachersData = await db.collection(cname).find().toArray();
        return res.status(200).json({teachersData});
    } catch (err) {
        return res.status(500).json({Oops_GET_TeachersDets:`${err.name}_${err.message}`})
    }
})
app.post('/pasteteachersdets/:dbname/:cname', async (req,res) => {
    try {
        const { dbname,cname} = req.params;
        const client = await initClient();
        const db = await client.db(dbname);
        const data = await db.collection(cname).insertMany(req.body)
        return res.status(200).json(data)
    } catch (err) {
        return res.status(500).json({Oops_PasteTeachersData: ` ${err.name}_${err.message}`})
    }
})


//Creating database, collections and its template terms
let terms = [
    {
        term: 1,
        stats:{
            bot: [],
            mot: [],
            eot: []
        }
    },
    {
        term: 2,
        stats:{
            bot: [],
            mot: [],
            eot: []
        }
    },
    {
        term: 3,
        stats:{
            bot: [],
            mot: [],
            eot: []
        }
    }
    
]
app.get('/createdbc/:dbname/:cname', async (req,res) => {
    try {
        let { dbname, cname } = req.params;
        const client = await initClient();
        const db = await client.db(dbname);
        const rslt = await db.collection(cname).insertMany(terms)
        return res.status(200).json(terms);
        
    } catch(err) {
        return res.status(500).json({Oops_GET_CreateC_andTerms: `${err.name}_${err.message}`});
    }
})
//Creating empyt classes/Collections to store Marks data
app.get('/createdbc6class/:dbname/:cname', async (req,res) => {
    try {
        let { dbname, cname } = req.params;
        const client = await initClient();
        const db = await client.db(dbname);
        let c = 0;
        let arrRslts = [];
        while (c < 6) {
            const rslt = await db.collection(`${cname}_${c+1}`).insertMany(terms)
            arrRslts.push(rslt)
            c++;
        }
        return res.status(200).json(terms)
        
    } catch(err) {
        return res.status(500).json({Oops_GET_CreateC_andTerms: `${err.name}_${err.message}`});
    }
})
//Creating empyt classes/Collections to store admin data
app.get('/createemptyc/:dbname/:cname', async (req,res) => {
    try {
        let { dbname, cname } = req.params;
        const client = await initClient();
        const db = await client.db(dbname);
        const rslt = await db.createCollection(cname)
        return res.status(200).json(rslt);
       
    } catch(err) {
        return res.status(500).json({Oops_GET_CreateEmpytC: `${err.name}_${err.message}`});
    } 
})
app.get('/createemptyc6class/:dbname/:cname/:n', async (req,res) => {
    try {
        let { dbname, cname, n } = req.params;
        const client = await initClient();
        const db = await client.db(dbname);
        let c = 0;
        let arrRslts = [];
        while (c < n) {
            const rslt = await db.createCollection(`${cname}_${c+1}`)
            arrRslts.push(rslt);
            c++;
        }
        return res.status(200).json(arrRslts);
    } catch(err) {
        return res.status(500).json({Oops_GET_Create6EmpytC: `${err.name}_${err.message}`});
    } 
})

/*......................................| ADMIN DATA CRUD OPERATIONS |....................................*/
//Adding a student
app.post('/addadminstd/:dbname/:cname', async (req,res) => {
    try {
        let { dbname, cname} = req.params;
        const client = await initClient();
        const db = await client.db(dbname);
        const rslt = await db.collection(cname).insertOne(req.body)
        return res.status(200).json(rslt)
    } catch (err) {
        return res.status(500).json({Oops_POST_One_AdminStudent:`${err.name}_${err.message}`});
    } 
})
//Adding many students
app.post('/addadminstds/:dbname/:cname', async (req,res) => {
    try {
        let { dbname, cname} = req.params;
        const client = await initClient();
        const db = await client.db(dbname)
        const rslt = await db.collection(cname).insertMany(req.body)
        return res.status(200).json(rslt)
    } catch (err) {
        return res.status(500).json({Oops_POST_Many_AdminStudent:`${err.name}_${err.message}`});
    } 
})
//Reading admin students
app.get('/getalladminstds/:dbname/:cname', async (req,res) => {
    try {
        let { dbname, cname} = req.params;
        const client = await initClient();
        const db = await client.db(dbname);
        const rslt = await db.collection(cname).find().toArray()
        return res.status(200).json(rslt)
    } catch (err) {
        return res.status(500).json({Oops_GET_All_AdminStds:`${err.name}_${err.message}`});
    } 
})
//Updating admin student
app.patch('/updateadminstd/:dbname/:cname/:id', async (req,res) => {
    try {
        let { dbname, cname } = req.params;
        const client = await initClient();
        const db = await client.db(dbname);
        const rslt = await db.collection(cname).updateOne({$or:[{_id: new ObjectId(req.params.id)},{_id:req.params.id}]},{$set:req.body})
        return res.status(200).json(rslt)
    } catch (err) {
        return res.status(500).json({Oops_PATCH_ONE_AdminStd:`${err.name}_${err.message}`});
    } 
})
app.patch('/updateadminstdfees/:dbname/:cname/:id', async (req,res) => {
    try {
        let { dbname, cname } = req.params;
        const client = await initClient();
        const db = await client.db(dbname);
        const rslt = await db.collection(cname).updateOne({_id: new ObjectId(req.params.id)},{$set:{fees:req.body}})
        return res.status(200).json(rslt)
    } catch (err) {
        return res.status(500).json({Oops_PATCH_ONE_AdminStd:`${err.name}_${err.message}`});
    } 
})

//Update all adminSTudents
app.patch('/updateadminstdclass/:dbname/:cname/:clas', async (req,res) => {
    try {
        let { dbname, cname, clas } = req.params;
        const client = await initClient();
        const db = await client.db(dbname);
        const rslt = await db.collection(cname).updateMany({"dets.class":Number(clas)},{$set:req.body})
        return res.status(200).json(rslt)
    } catch (err) {
        return res.status(500).json({Oops_PATCH_ONE_AdminStd:`${err.name}_${err.message}`});
    } 
})
//Deleting admin student
app.delete('/deleteadminstd/:dbname/:cname/:id', async (req,res) => {
    try {
        let { dbname, cname } = req.params;
        const client = await initClient();
        const db = await client.db(dbname);
        const rslt = await db.collection(cname).deleteOne({$or:[{_id: new ObjectId(req.params.id)},{_id: req.params.id}]})
        return res.status(200).json(rslt)
    } catch (err) {
        return res.status(500).json({Oops_DELETE_ONE_AdminStd:`${err.name}_${err.message}`});
    }
})

// Adding marks for students
let objOfStats = {};
let arrayOfStats = [];
app.get('/addstats/:dbname/:cname/:trm/:exm', async (req,res) => {
    let rslt; 
    try {
        let { dbname, cname, trm, exm } = req.params;
        let tm = Number(trm);
        const client = await initClient();
        const db = await client.db(dbname);

        switch (exm) {
        case 'bot':
            adminData.forEach((student,i) => {
                objOfStats = {
                    "dets":{
                        "st_Id":student._id,
                        "stId":student.dets.stId,
                        "fname":student.dets.fname,
                        "mname":student.dets.mname,
                        "lname":student.dets.lname,
                        "class":student.dets.class,
                        "photo":student.dets.photo,
                        "gender":student.dets.gender,
                        "subjects":student.dets.subjects,
                    },
                    "marks":{
                        "phy1":98,"phy2":87,"chem1":45,"chem2":43,"maths1":94,"maths2":0,"bio1":89,"bio2":89,"geog1":87,"geog2":0,"his1":54,"his2":0,"ict1":65,"ict2":54,"ent1":96,"ent2":0,"agric1":54,"agric2":98,"eng1":50,"eng2":0,"lit1":0,"lit2":0,"td1":0,"td2":0,"cre1":54,"cre2":0,"ire1":65,"ire2":0,"pe1":74,"pe2":85,"art1":0,"art2":0,"kis1":0,"kis2":0,"lug1":0,"lug2":0
                    },
                    "filTotals":{
                    "phy":0,"chem":0,"maths":0,"bio":0,"geog":0,"his":0,"ict":0,"ent":0,"agric":0,"eng":0,"lit":0,"td":0,"cre":0,"ire":0,"pe":0,"art":0,"kis":0,"lug":0
                    } 
                }
                arrayOfStats.push(objOfStats)
            })
            rslt = await db.collection(cname).updateOne({term:tm},{$set:{"stats.bot":arrayOfStats}});
            arrayOfStats = [];
            break;
        case 'mot':
            adminData.forEach((student,i) => {
                objOfStats = {
                    "dets":{
                        "st_Id":student._id,
                        "stId":student.dets.stId,
                        "fname":student.dets.fname,
                        "mname":student.dets.mname,
                        "lname":student.dets.lname,
                        "class":student.dets.class,
                        "photo":student.dets.photo,
                        "gender":student.dets.gender,
                        "subjects":student.dets.subjects,
                    },
                    "marks":{
                        "phy1":98,"phy2":87,"chem1":45,"chem2":43,"maths1":94,"maths2":0,"bio1":89,"bio2":89,"geog1":87,"geog2":0,"his1":54,"his2":0,"ict1":65,"ict2":54,"ent1":96,"ent2":0,"agric1":54,"agric2":98,"eng1":50,"eng2":0,"lit1":0,"lit2":0,"td1":0,"td2":0,"cre1":54,"cre2":0,"ire1":65,"ire2":0,"pe1":74,"pe2":85,"art1":0,"art2":0,"kis1":0,"kis2":0,"lug1":0,"lug2":0
                    },
                    "filTotals":{
                    "phy":0,"chem":0,"maths":0,"bio":0,"geog":0,"his":0,"ict":0,"ent":0,"agric":0,"eng":0,"lit":0,"td":0,"cre":0,"ire":0,"pe":0,"art":0,"kis":0,"lug":0
                    } 
                }
                arrayOfStats.push(objOfStats)
            })
            rslt = await db.collection(cname).updateOne({term:tm},{$set:{"stats.mot":arrayOfStats}});
            arrayOfStats = [];
            break;
        case 'eot':
            adminData.forEach((student,i) => {
                objOfStats = {
                    "dets":{
                        "st_Id":student._id,
                        "stId":student.dets.stId,
                        "fname":student.dets.fname,
                        "mname":student.dets.mname,
                        "lname":student.dets.lname,
                        "class":student.dets.class,
                        "photo":student.dets.photo,
                        "gender":student.dets.gender,
                        "subjects":student.dets.subjects,
                    },
                    "marks":{
                        "phy1":98,"phy2":87,"chem1":45,"chem2":43,"maths1":94,"maths2":0,"bio1":89,"bio2":89,"geog1":87,"geog2":0,"his1":54,"his2":0,"ict1":65,"ict2":54,"ent1":96,"ent2":0,"agric1":54,"agric2":98,"eng1":50,"eng2":0,"lit1":0,"lit2":0,"td1":0,"td2":0,"cre1":54,"cre2":0,"ire1":65,"ire2":0,"pe1":74,"pe2":85,"art1":0,"art2":0,"kis1":0,"kis2":0,"lug1":0,"lug2":0
                    },
                    "filTotals":{
                    "phy":0,"chem":0,"maths":0,"bio":0,"geog":0,"his":0,"ict":0,"ent":0,"agric":0,"eng":0,"lit":0,"td":0,"cre":0,"ire":0,"pe":0,"art":0,"kis":0,"lug":0
                    } 
                }
                arrayOfStats.push(objOfStats)
            })
            rslt = await db.collection(cname).updateOne({term:tm},{$set:{"stats.eot":arrayOfStats}});
            arrayOfStats = [];
            break;
        }
        return res.status(200).json(rslt);
    } catch (err) {
        return res.status(500).json({Oops_POST_InsertData_Exams: `${err.name}_${err.message}`});
    } 
})

//COUNTING STUDENTS
app.get('/countalladminstds/:dbname/:cname', async (req,res) => {
    let {dbname,cname} = req.params;

    try {
        const client = await initClient();
        const db = client.db(dbname);
        const rslt = db.collection(cname).countDocuments();
        return res.status(200).json(rslt)
    } catch (err) {
        return res.status(500).json({Oops_GET_counting_STDS:`${err.name}_${err.message}`})
    }
})

//Creating the FEES stats databases and collections with data
app.get('/addFeesStats/:dbname/:cname/:trm', async (req,res) => {
    //????? Questioned
    let rslt; 
    try {
        let { dbname, cname, trm} = req.params;
        let tm = Number(trm);
        const client = await initClient();
        const db = await client.db(dbname);
        adminData.forEach((student,i) => {
                objFeesStats = {
                    "dets":{
                        "st_Id":student._id,
                        "stId":student.dets.stId,
                        "fname":student.dets.fname,
                        "mname":student.dets.mname,
                        "lname":student.dets.lname,
                        "class":student.dets.class,
                        "photo":student.dets.photo,
                        "gender":student.dets.gender,
                        "busary":student.dets.bursary,
                        "parentName":student.dets.parent.name,
                        "parentNumber":student.dets.parent.number,
                        "parentEmail":student.dets.parent.email,
                    },
                    "fees":{"principle":150000, "amountPaid":130000,"blc":20000,"status":"pending","percentPaid":70,"percentblc":30,"payDate":"2025-08-23"}
                }
                arrFeesStats.push(objFeesStats)
        })
        rslt = await db.collection(cname).updateOne({term:tm},{$set:{"feesStats":arrFeesStats}});
        arrFeesStats = [];
        return res.status(200).json(rslt);
    } catch (err) {
        return res.status(500).json({Oops_POST_InsertData_Exams: `${err.name}_${err.message}`});
    } 
})
let objFeesStats = {};
let arrFeesStats = [];

//Reading admin students Fees Collections
app.get('/getalladminstdsfees/:dbname/:cname/:trm', async (req,res) => {
    //????? Questioned
    try {
        let { dbname, cname,trm} = req.params;
        const client = await initClient();
        const db = await client.db(dbname);
        const rslt = await db.collection(cname).find({term:Number(trm)}).toArray()
        return res.status(200).json(rslt)
    } catch (err) {
        return res.status(500).json({Oops_GET_All_AdminStdsFeesCollections:`${err.name}_${err.message}`});
    } 
})

//Dropping Databases
app.get('/dropdatabase/:dbname', async (req,res) => {
    try {
        let { dbname } = req.params;
        const client = await initClient();
        const db = await client.db(dbname);
        const rslt = await db.dropDatabase();
        res.status(200).json(rslt);
    } catch (err) {
        res.status(500).json({Oops_GET_DroppingDB:`${err.name}_${err.message}`});
    }
})
//Dropping a class/Collection
app.delete('/dropclass/:dbname/:cname', async (req,res) => {
    try {
        let { dbname, cname } = req.params;
        const client = await initClient();
        const db = await client.db(dbname);
        const rslt = await db.dropCollection(cname)
        res.status(200).json(rslt)
    } catch (err) {
        res.status(500).json({Oops_DELETE_dropClass:`${err.name}_${err.message}`});
    } 
})

//Copying collections from previous year admin database into next year admin database
//Coppying
let classData = [];
app.get('/copyclass/:dbname/:cname', async (req,res) => {
    try {
        let { dbname, cname } = req.params;
        const client = await initClient();
        const db = await client.db(dbname)
        classData = await db.collection(cname).find().toArray();
        
        return res.status(200).json(classData);
        } catch(err) {
            return res.status(500).json({Oops_GET_CoppyClass: `${err.name}_${err.message}`})
        }
})
//Pasting
app.post('/pasteclass/:dbname/:cname', async (req,res) => {
    try {
        let { dbname, cname } = req.params;
        const client = await initClient();
        const db = await client.db(dbname);
        classData.forEach(student => {
            student.dets.class = Number(student.dets.class) + 1;
            student.fees.one.amountPaid = 0;
            student.fees.one.blc = student.fees.one.principle;
            student.fees.one.status = 'not Cleared';
            student.fees.one.percentPaid = 0;
            student.fees.one.percentblc = 100;
            student.fees.one.payDate = '' ;
            student.fees.one.payAcc = 0;
            student.fees.two.amountPaid = 0;
            student.fees.two.blc = student.fees.two.principle;
            student.fees.two.status = 'not Cleared';
            student.fees.two.percentPaid = 0;
            student.fees.two.percentblc = 100;
            student.fees.two.payDate = '';
            student.fees.two.payAcc = 0 ;
            student.fees.three.amountPaid = 0;
            student.fees.three.blc = student.fees.three.principle;
            student.fees.three.status = 'not Cleared';
            student.fees.three.percentPaid = 0;
            student.fees.three.percentblc = 100;
            student.fees.three.payDate = '';
            student.fees.three.payAcc = 0;
        })
        const rslt = await db.collection(cname)
        .insertMany(classData)
        return res.status(200).json(rslt)
    } catch (err) {
        return res.status(500).json({Oops_GET_CoppyClass: `${err.name}_${err.message}`})
    }
})

/*----------------------------------------| TERMS |----------------------------------------*/
//Creating a single term 
app.post('/createterm/:dbname/:cname/:trm', async (req,res) => {
    try {
        let { dbname, cname, trm } = req.params;
        let tm = Number(trm);
        let dat = {
            term:tm,
            stats: {bot:[],mot:[],eot:[]},
        }

        const client = await initClient();
        const db = await client.db(dbname);
        const rslt = await db.collection(cname).insertOne(dat)
        return res.status(200).json(rslt);
        } catch (err) {
            return res.status(500).json({Oops_POST_CreateTerm:`${err.name}_${err.message}`});
        } 
})

//Delete Term/DOC by term number
app.delete('/droptermno/:dbname/:cname/:trm', async (req,res) => {
    //????? Questioned
    try {
        let { dbname, cname, trm} = req.params;
        let tm = Number(trm);
        const client = await initClient();
        const db = await client.db(dbname);
        const rslt = await db.collection(cname).deleteOne({term:tm})
        return res.status(200).json(rslt);
    } catch(err) {
           return res.status(500).json({Oops_DELETE_dropTerm:`${err.name}_${err.message}`});
    } 
})
//Drop Term/DOC by Id
app.delete('/droptermid/:dbname/:cname/:id', async (req,res) => {
    //????? Questioned
    try {
        
        let { dbname, cname, trm, id} = req.params;
        let tm = Number(trm);
        const client = await initClient();
        const db = await client.db(dbname);
        const rslt = await db.collection(cname).deleteOne({_id: new ObjectId(id)})
        return res.status(200).json(rslt);
    } catch (err) {
        return res.status(500).json({Oops_DELETE_dropTerm:`${err.name}_${err.message}`});
    } 
} )
 
/*----------------------------------------| CRUDE on DATA |----------------------------------------*/

//Reading all the exams
app.get('/getdata/:dbname/:cname/:trm/:exm', async (req,res) => {
    let tm;
    let data;
    try {
        let { dbname, cname, trm, exm} = req.params;
        tm = Number(trm);
        const client = await initClient();
        const db = await client.db(dbname);
        const rslt = await db.collection(cname).find({term:tm}).toArray();
        switch (exm) {
                case 'bot':
                    data = [];
                    data = await rslt[0].stats.bot;
                    break;
                case 'mot':
                    data = [];
                    data = await rslt[0].stats.mot;
                    break;
                case 'eot':
                    data = [];
                    data = await rslt[0].stats.eot;
                    break;
        }
        return res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({Oops_GET_stData_Trm:`${err.name}_${err.message}`});
    } 
})
//Reading all the exams by responging with the all term
app.get('/getdataterm/:dbname/:cname/:trm', async (req,res) => {
    let tm;
    let data;
    try {
        let { dbname, cname, trm} = req.params;
        tm = Number(trm);
        const client = await initClient();
        const db = await client.db(dbname);
        const rslt = await db.collection(cname).find({term:tm}).toArray();
        data = await rslt[0].stats;
        return res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({Oops_GET_stData_Trm:`${err.name}_${err.message}`});
    } 
})

//Updating exams
app.patch('/updatedata/:dbname/:cname/:trm/:exm', async (req,res) => {
    let rslt;
    try {
        let { dbname, cname, trm, exm} = req.params;
        tm = Number(trm);
        const client = await initClient();
        const db = await client.db(dbname);
        switch (exm) {
            case 'bot':
                rslt = await db.collection(cname).updateOne({term:tm},{$set:{"stats.bot":req.body}})
            case 'mot':
                rslt = await db.collection(cname).updateOne({term:tm},{$set:{"stats.mot":req.body}})
                break;
            case 'eot':
                rslt = await db.collection(cname).updateOne({term:tm},{$set:{"stats.eot":req.body}})
                break;
        }
        return res.status(200).json(rslt);
    } catch (err) {
        return res.status(500).json({Oops_GET_stData_Trm:`${err.name}_${err.message}`});
    } 
})

//Setting and Managing Principle Fees
app.post('/createfees/:dbname/:cname', async (req,res) => {
    let {dbname,cname} = req.params;
    let data = req.body; 
    try {
        const client = await initClient();
        const db =  await client.db(dbname)
        const rslt = await db.collection(cname).insertOne(data);
        return res.status(200).json(rslt)
    } catch (err) {
        return res.status(500).json({Oops_POST_PrincioleFees:`${err.name}_${err.message}`})
    }
})
app.patch('/updatefees/:dbname/:cname/:yr', async (req,res) => {
    let {dbname,cname,yr} = req.params;
    try {
        let data = req.body; 
        const client = await initClient();
        const db =  await client.db(dbname)
        const rslt = await db.collection(cname).updateOne({year:yr},{$set:req.body});
        return res.status(200).json(rslt)
    } catch (err) {
        return res.status(500).json({Oops_POST_PrincioleFees:`${err.name}_${err.message}`})
    }
})
app.get('/getfees/:dbname/:cname/:yr', async (req,res) => {
    let {dbname,cname,yr} = req.params;
    try {
        const client = await initClient();
        const db =  await client.db(dbname)
        const rslt = await db.collection(cname).find({year:yr}).toArray();
        return res.status(200).json(rslt)
    } catch (err) {
        return res.status(500).json({Oops_Get_PrincioleFees:`${err.name}_${err.message}`})
    }
})
//Reading School Settings
app.get('/getschsettings/:dbname/:cname', async (req,res) => {
    try {
        let { dbname, cname} = req.params;
        const client = await initClient();
        const db = await client.db(dbname);
        const rslt = await db.collection(cname).find().toArray()
        return res.status(200).json(rslt)
    } catch (err) {
        return res.status(500).json({Oops_GET_All_Sch_Settings_:`${err.name}_${err.message}`});
    }
})
app.patch('/updateschsetings/:dbname/:cname/:id', async (req,res) => {
    let {dbname, cname,id} = req.params;
    try {
        const client = await initClient();
        const db = await client.db(dbname);
        const rslt = db.collection(cname).updateOne({_id:new ObjectId(id)},{$set:req.body})
        return res.status(200).json(rslt);
    } catch (err) {
        return res.status(500).json({Oops_PATCH_Updatin_All_Sch_Settings_:`${err.name}_${err.message}`});
    }
})
app.delete('/deleteschsettings/:dbname/:cname/:year', async (req,res) => {
    let {dbname,cname,year} = req.params;
    try {
        const client = await initClient();
        const db = await client.db(dbname);
        const rslt = await db.collection(cname).deleteOne({year:year});
        return res.status(200).json(rslt);
    } catch (err) {
        return res.status(500).json({Oops_DELETE_SchSettings:`${err.name}_${err.message}`});
    }
})

/*
    >>>>>>> Teachers Potal <<<<<<<<<<<<<<<
*/
//Check Login Credentials
app.get('/techercheck/:dbname/:cname/:userpname/:userid', async (req,res) => {
    let {dbname,cname,userpname,userid} = req.params;
    try {
        const client = await initClient();
        const db = await client.db(dbname);
        const rslt = await db.collection(cname).find({"dets.tId":userid,"dets.email":userpname}).toArray()
        return res.status(200).json(rslt)
    } catch (err) {
        return res.status(500).json({Oops_GET_CheckingTeachersCred:`${err.name}_${err.message}`})
    }
})

// COMMUNICATION
app.get('/getallevents/:dbname/:cname', async(req,res) => {
    let {dbname,cname} = req.params;
    try {
        const client = await initClient();
        const db = await client.db(dbname);
        const rslt = await db.collection(cname).find().toArray();
        return res.status(200).json(rslt);
    } catch (err) {
        return res.status(500).json({Oops_GET_AllEvents:`${err.name}_${err.message}`})
    }
})
app.delete('/deletevent/:dbname/:cname/:id', async(req,res) => {
    let {dbname,cname,id} = req.params;
    try {
        const client = await initClient();
        const db = await client.db(dbname)
        const rslt = await db.collection(cname).deleteOne({_id: new ObjectId(id)})
        return res.status(200).json(rslt);
    } catch (err) {
        return res.status(500).json({Oops_DELETE_Event:`${err.name}_${err.message}`})
    }
})

/////////////////////////////--- Starting The Server ---////////////////////////////////
app.listen(port, () => console.log(`Test :: Server started and running on port ${port}`))
