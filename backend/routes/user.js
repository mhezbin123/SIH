import { userSigninSchema, userSignupSchema } from "../zodValidation/index.js";
import { User, Facility, District, SubDistrict } from "../models/index.js";
import authMiddleware from "../middleware/authMiddleware.js";
import express from "express";
import cors from "cors";
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt";

// import FormData from 'form-data';
// import Mailgun from 'mailgun.js';


const router = express.Router({ mergeParams: true });
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.use(cors({ origin: '*' }));

router.post("/signin", async (req, res) => {
  const userDeatils = req.body;
  console.log(userDeatils);
  const { success } = userSigninSchema.safeParse(userDeatils);
  if (!success) {
      return res.status(411).json({ message: "Incorrect input" });
  }
  
  try {
      const dbUser = await User.findOne({ userId: userDeatils.userId });
      if (!dbUser) {
          return res.status(411).json({ message: "No such Account found with this username" });
      }

      const passwordMatch = await bcrypt.compare(userDeatils.password, dbUser.password);
      if (!passwordMatch) {
          return res.status(411).json({ message: "No such Account found with this password" });
      }
      const payload = {
        userId: dbUser.userId,
      };
      const token = jsonwebtoken.sign(payload, process.env.JWT_SECRET_KEY);
      res.status(200).json({ token: token, userDetails: dbUser });
  } catch (error) {
      console.error("Error processing request:", error);
      res.status(500).json({ message: "Internal server error" });
  }
});

/*
const mailgun = new Mailgun(FormData);
const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;

router.post("/signinToDo", async (req, res) => {
  const userDeatils = req.body;
  console.log(userDeatils);
  const { success } = userSigninSchema.safeParse(userDeatils);
  if (!success) {
      return res.status(411).json({ message: "Incorrect input" });
  }
  
  try {
      const dbUser = await User.findOne({ userId: userDeatils.userId });
      if (!dbUser) {
          return res.status(411).json({ message: "No such Account found with this username" });
      }

      const passwordMatch = await bcrypt.compare(userDeatils.password, dbUser.password);
      if (!passwordMatch) {
          return res.status(411).json({ message: "No such Account found with this password" });
      }
      
      if(dbUser.userId === '2021HDIMS7000' || dbUser.userId === '2021HDIMS7001' || dbUser.userId === '2021HDIMS7002' || dbUser.userId === '2021HDIMS7003'){
        dbUser.otp = '000000';
        await dbUser.save();
        return res.status(200).json({ message: "this is a test id, use 000000 as your OTP" });
      }
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      dbUser.otp = otp;
      dbUser.otpExpiry = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes
      await dbUser.save();
  
      const mailOptions = {
          from: `Excited User <mailgun@${process.env.MAILGUN_DOMAIN}>`,
          to: dbUser.email,
          subject: 'Your OTP Code',
          text: `Your OTP code is ${otp}. It is valid for 10 minutes.`,
          html: `<h1>Your OTP code is ${otp}. It is valid for 10 minutes.</h1>`,
      };

      await mg.messages.create(process.env.MAILGUN_DOMAIN, mailOptions);

      res.status(200).json({ message: "OTP sent to your email" });
  } catch (error) {
      console.error("Error processing request:", error);
      res.status(500).json({ message: "Internal server error" });
  }
});

  
router.post("/verify-otp", async (req, res) => {
    const { userId, otp } = req.body;
  
    const dbUser = await User.findOne({ userId });
  
    if (!dbUser) {
      return res.status(411).json({ message: "No such Account found with this username" });
    }
    
    if(dbUser.userId === '2021HDIMS7000' || dbUser.userId === '2021HDIMS7001' || dbUser.userId === '2021HDIMS7002' || dbUser.userId === '2021HDIMS7003'){
      if (dbUser.otp !== otp) {
        return res.status(411).json({ message: "Invalid OTP" });
      }
      const payload = {
        userId: dbUser.userId,
      };
      const token = jsonwebtoken.sign(payload, process.env.JWT_SECRET_KEY);
      return res.status(200).json({ token: token, userDetails: dbUser});
    }

    if (dbUser.otp !== otp || Date.now() > dbUser.otpExpiry) {
      return res.status(411).json({ message: "Invalid or expired OTP" });
    }
  
    const payload = {
      userId: dbUser.userId,
    };
    const token = jsonwebtoken.sign(payload, process.env.JWT_SECRET_KEY);

    dbUser.otp = null;
    dbUser.otpExpiry = null;
    await dbUser.save();
  
    res.status(200).json({ token: token, userDetails: dbUser });
  });

router.post('/clear-otp', async (req, res) => {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }
    
    if(userId === '2021HDIMS7000' || userId === '2021HDIMS7001' || userId === '2021HDIMS7002' || userId === '2021HDIMS7003'){
      res.status(400).json({ message: "Bad Request" });
    }

    try {
      const dbUser = await User.findOne({ userId });
  
      if (!dbUser) {
        return res.status(404).json({ message: "User not found" });
      }
  
      if (!dbUser.otp) {
        return res.status(404).json({ message: "No OTP present for this user" });
      }
  
      dbUser.otp = null;
      dbUser.otpExpiry = null;
      await dbUser.save();
  
      res.status(200).json({ message: "OTP cleared successfully" });
    } catch (error) {
      console.error("Error clearing OTP:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
*/
router.get('/domains', authMiddleware, async (req, res) => {
  try {
    const userId = req.body.userId;
    const dbUser = await User.findOne({ userId: userId });

    if (!dbUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const district = dbUser.districtId;
    const subDistrict = dbUser.subDistrictId;
    const facility = dbUser.facilityId;

    const obj = {
      districts: [],
      subDistricts: [],
      facilities: []
    };

    if (!district) {
      obj.districts = await District.find({});
    } else {
      const foundDistrict = await District.findOne({ districtId: district });
      if (foundDistrict) {
        obj.districts.push(foundDistrict);
      }
    }

    if (!subDistrict) {
      for (const dist of obj.districts) {
        const subDistricts = await SubDistrict.find({ districtId: dist.districtId });
        obj.subDistricts.push(...subDistricts);
      }
    } else {
      const foundSubDistrict = await SubDistrict.findOne({ subDistrictId: subDistrict });
      if (foundSubDistrict) {
        obj.subDistricts.push(foundSubDistrict);
      }
    }

    if (!facility) {
      for (const subDist of obj.subDistricts) {
        const facilities = await Facility.find({ subDistrictId: subDist.subDistrictId });
        obj.facilities.push(...facilities);
      }
    } else {
      const foundFacility = await Facility.findOne({ facilityId: facility });
      if (foundFacility) {
        obj.facilities.push(foundFacility);
      }
    }

    res.status(200).json(obj);
  } catch (error) {
    console.error("Error fetching domains:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/signup", async (req, res) => {
  const userDeatils = req.body;
  console.log(userDeatils);
  const { success } = userSignupSchema.safeParse(userDeatils);
  if (!success) {
      return res.status(411).json({ message: "Incorrect input" });
  }

  const userId = await User.findOne({ userId: userDeatils.userId });
  const email = await User.findOne({ email: userDeatils.email });

  if (userId || email) {
    return res.status(411).json({ message: "Username / Email already taken" });
  }

  const newUser = new User(userDeatils);
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(newUser.password, salt);
  newUser.password = hashedPassword;
  await newUser.save();

  const payload = {
    userId: newUser.userId,
  };

  const token = jsonwebtoken.sign(payload, process.env.JWT_SECRET_KEY);

  res.status(200).json({
    message: "new user created successfully",
    token: token,
  });
});
export default router;