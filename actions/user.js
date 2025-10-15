"use server";
import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function updateUser(data) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });
  if (!user) throw new Error("User not found");
  try {
    // Transaction make sure that all the three conditions complets, if any of the three condition will fail the transaction will give us the error
    const result = await db.$transaction(
      async (tx) => {
        // we will find if the industry exists
        let industryInsight = await tx.industryInsight.findUnique({
          where: {
            industry: data.industry,
          },
        });
        //  if industry does not exist , create it with default and later we will fill it with ai values
        if (!industryInsight) {
          industryInsight = await tx.industryInsight.create({
            data: {
              industry: data.industry,
              salaryRanges: [], // Default empty array
              growthRate: 0, // Default value
              demandLevel: "MEDIUM", // Default value
              topSkills: [], // Default empty array
              marketOutlook: "NEUTRAL", // Default value
              keyTrends: [], // Default empty array
              recommendedSkills: [], // Default empty array
              nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
            },
          });
        }

        //update the user

        const updatedUser = await tx.user.update({
          where: {
            id: user.id,
          },
          data: {
            industry: data.industry,
            experience: data.experience,
            bio: data.bio,
            skills: data.skills,
          },
        });

        return { updatedUser, industryInsight };
      },
      {
        timeout: 10000,
      }
    );
    return {success : true , ...result};
  } catch (err) {
    console.error("Error updating user and industry ", err.message);
    throw new Error(`Failed to update Profile ${err.message}`);
  }
}


export  async function getuserOnBoardingStatus(){
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");
  
    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
    });
    if (!user) throw new Error("User not found");

    try{
        const user = await db.user.findUnique({
            where:{
                clerkUserId : userId,
            },
            select:{
                industry : true,
            }
        })
        return {isOnboarded: !!user?.industry};
    }catch(err){
        console.error("Error checking OnBoarding Status", err.message);
        throw new Error("Failed to check the onBoarded Status" , err.message);
    }
}