import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const aggregates = async () => {
  // find average age
  const avgAge = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });

  // find sum of age
  const sumAvg = await prisma.user.aggregate({
    _sum: {
      age: true,
    },
  });

  //   count of age
  const countAge = await prisma.user.aggregate({
    _count: {
      age: true,
    },
  });

  //   find number of record
  const countData = await prisma.user.count();

  //   find max age
  const maxAge = await prisma.user.aggregate({
    _max: {
      age: true,
    },
  });

  //   find minimum age
  const minimumAge = await prisma.user.aggregate({
    _min: {
      age: true,
    },
  });

  console.log("minimumAge", minimumAge);
};

aggregates();
