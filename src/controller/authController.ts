const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


exports.register = async (req, res) => {
    const {name , email, password } = req.body;
    
    try {
        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
        where: { email },
        });
    
        if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
        }
    
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
    
        // Create new user
        const newUser = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
        });
    
        res.status(201).json({ message: "User registered successfully", userId: newUser.id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
    }