import { Response } from "express";
import Update from "../models/Update";
import { AuthRequest } from "../middleware/auth";

export const createUpdate = async (req: AuthRequest, res: Response) => {   
    try{
        const {projectId, yesterday, today, blockers} = req.body;
        const update = await Update.create({
            userId: req.user.id,
            projectId,
            yesterday,
            today,  
            blockers
        });
        res.status(200).json({message: "Update created successfully", update});
    }catch(error){
        console.error("Error in createUpdate:", error);
        res.status(500).json({message: "Server error"});
    }
};  

// export const getUpdates = async (req: AuthRequest, res: Response) => {
//     try{
//         const updates = await Update.find({userId: req.user.id}).populate("userId","name email");                           
//         res.status(200).json({message: "Updates retrieved successfully", updates});
//     }catch(error){
//         console.error("Error in getUpdates:", error);
//         res.status(500).json({message: "Server error"});
//     }
// };  


export const getUpdates = async (req: AuthRequest, res: Response) => {
    try {
        const updates = await Update.find({ userId: req.user.id })
            .populate("userId", "name email")
        res.status(200).json({ message: "Updates retrieved successfully", updates });
    } catch (error) {
        console.error("Error in getUpdates:", error);
        res.status(500).json({ message: "Server error" });
    }
};