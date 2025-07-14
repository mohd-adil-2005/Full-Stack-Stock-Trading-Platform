const express = require('express')
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const {HoldingsModel} = require('./model/HoldingsModel');
const { PositionModel } = require('./model/PositionModel');
const {OrderModel}= require('./model/OrderModel');
const cors= require("cors");
const bodyParser= require("body-parser");
const { UserModel } = require('./model/UserModel');
const {verifyToken} = require("./middlewares/verifyToken");
const { UserSchema } = require('./schemas/UserSchema');
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute");


const PORT = process.env.PORT|| 3000;
const uri =process.env.MONGO_URI;

app.use(cors({ origin: [
  "http://localhost:5173",
  "http://localhost:5174"
],
  methods: ["GET", "POST", "PUT", "DELETE"], 
  credentials: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
  mongoose.connect(uri,{
   
  }).then((res)=>{
    console.log("connected db ")
  })
  .catch((err)=>{
    console.log(`the error is that ${err.message}`)
  })
  console.log("Db connected successfully")

app.use("/", authRoute);

  app.get("/allHoldings",verifyToken, async (req, res)=>{
    try{
     // Get user ID from the token
    if(!req.userId){
      console.log("User not authenticated here !!!  ");
      return res.json({message: "User not authenticated"});
      
    }
     console.log("User ID from token: " + req.userId);
     const user= new mongoose.Types.ObjectId(req.userId);
     console.log("User ID as ObjectId: " + user);
    const allHoldings= await HoldingsModel.find();
    console.log("111"+allHoldings);
    return res.json(allHoldings);
  }catch(err){
    console.error("Error fetching holdings:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
    
  })
app.get("/allPositions",async (req, res)=>{
    const allpositions = await PositionModel.find();
    res.json(allpositions);
  });

  app.post("/newOrder", async(req,res)=>{
    let newOrder= new OrderModel({
        name:req.body.name,
        qty:req.body.qty,
        price:req.body.price,
        mode:req.body.mode

    });

     await newOrder.save()
    
  })


app.get('/', (req, res) => {
  res.send('its zerodha clone backend start!')
});
// app.get("/data",verifyToken,async(req,res)=>{
//  const userId = new mongoose.Types.ObjectId(req.userId);
// const order = [
//   { UserOrder: userId, name: "TATAMOTORS", price: 985.50, qty: 10, mode: "BUY" },
//   { UserOrder: userId, name: "INFY",       price: 1568.40, qty:  5, mode: "BUY" },
//   { UserOrder: userId, name: "RELIANCE",   price: 2912.10, qty:  1, mode: "SELL" },
//   { UserOrder: userId, name: "SBIN",       price:  455.20, qty: 20, mode: "BUY" },
//   { UserOrder: userId, name: "HDFCBANK",   price: 1624.00, qty:  3, mode: "BUY" },
//   { UserOrder: userId, name: "ITC",        price:  428.35, qty: 30, mode: "BUY" },
//   { UserOrder: userId, name: "M&M",        price:  801.70, qty:  4, mode: "SELL" },
//   { UserOrder: userId, name: "WIPRO",      price:  584.25, qty:  8, mode: "BUY" },
//   { UserOrder: userId, name: "BHARTIARTL", price:  646.50, qty:  6, mode: "BUY" },
//   { UserOrder: userId, name: "TCS",        price: 3789.90, qty:  2, mode: "SELL" },
// ];

//  const docs = order.map(h => ({ ...h, UserOrder: userId }));
//  await OrderModel.insertMany(docs);
//  console.log("Holdings data added successfully for user:", userId);
   
// res.send("Data added successfully to the database");
        
// });



// app.get("/order", async(req,res)=>{



// ordertemp.forEach((item)=>{
//     const position= new PositionModel({
//     product: item.product,
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
//     isLoss: item.isLoss,
//     })
//     position.save();
// })
// res.send("data added successfully of the postion ");


// })


app.get("/allOrders", async(req,res)=>{
  try{
  const allOrders= await OrderModel.find();
  res.json(allOrders);
  }catch(err){
    console.error("Error fetching orders:", err);
    res.status(500).json({ message: "Internal server error" });
  }
})


app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`)
  
})
