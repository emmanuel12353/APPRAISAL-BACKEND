const mongoose = require('mongoose');
const connectDB = require('../Data/config');
// const validator = require('validator')

const directSchema = new mongoose.Schema(
  {
    S_N: {
         type: String,
         trim: true
    },
    Name: {
        type: String,
        required: true,
        min: 2,
        max: 30,
        trim: true
      },
      Mis_Code: {
        type: String,
      },
      Mis_Code_2: {
        type: String,
      },
      Gender: {
        type: String,
        required: true,
        max: 50,
        unique: true,
        lowercase: true,
   
      },
      Sol_Id:{
        type: Number,
        required: true,
       
        trim: true
    
      },
      BranchName: {
        type: String,
        required: true,
        max: 50,
        unique: true,
        lowercase: true,
   
      },
      Vendor: {
        type: String,
        required: true,
        max: 50,
        unique: true,
        lowercase: true,
   
      },
      Classification: {
        type: String,

      },
      Date_Of_Resumption: {
        type: Date,
        required: true,
   
      },
      Area: {
        type: String,
        required: true,
        max: 50,
        unique: true,
        lowercase: true,
   
      },
      Region: {
        type: String,
        required: true,
        max: 50,
        unique: true,
        lowercase: true,
   
      },
      Grade: {
        type: String,
        required: true,
        max: 50,
        unique: true,
        lowercase: true,
   
      },
      Comment: {
        type: String,
   
      },
      Deposit_Volume: {
        type: String,
        required: true,
        trim: true // This option removes leading and trailing whitespace
      },
        Deposi_Target: {
          type: String,
          required: true,
     
        },
        Deposit_Achieved: {
          type: String,
          required: true,
     
        },
        Deposit_Weighted_score: {
          type: String,
          required: true,
     
        },
        Total_Account_Funding: {
          type: String,
          required: true,
     
        },
        Account_Funding_Achieved: {
          type: String,
          required: true,
     
        },
        Account_Funding_Weighted_score: {
          type: String,
          required: true,
     
        },
        Total_Account_Opening: {
          type: String,
          required: true,
     
        },
        Account_Opening_Target: {
          type: String,
          required: true,
     
        },
        Account_Opening_Achieved: {
          type: String,
          required: true,
     
        },
        Account_Opening_Weighted_score: {
          type: String,
          required: true,
     
        },
        Total_Loan: {
          type: String,
          required: true,
     
        },
        Loan_Target: {
          type: String,
          required: true,
     
        },
        Loan_Achieved: {
          type: String,
          required: true,
     
        },
        Loan_Weighted_score: {
          type: String,
          required: true,
     
        },
        Total_Debit_Cards_Sold: {
          type: String,
          required: true,
     
        },
        Debit_Cards_Sold_Target: {
          type: String,
          required: true,
     
        },
        Debit_Cards_Sold_Achieved: {
          type: String,
          required: true,
     
        },
        Debit_Cards_Sold_Weighted_score: {
          type: String,
          required: true,
     
        },
        verall_WeightedS_core: {
          type: String,
     
        },
        Overall_Score: {
          type: String,
          required: true,
     
        },
        Ranking: {
          type: String,
          required: true,
     
        },

    },
  { timestamps: true }
);

module.exports = mongoose.model("Direct", directSchema)