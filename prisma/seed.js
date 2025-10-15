import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: "test@example.com",
      clerkUserId: "clerk_123",
      industryId: 1, // make sure IndustryInsight exists or remove for now
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
