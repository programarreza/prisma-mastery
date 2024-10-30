import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // const createUser = await prisma.user.create({
  //   data: {
  //     username: "user2",
  //     email: "user2@gmail.com",
  //     role: UserRole.user,
  //   },
  // });

  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "This is bio..",
  //     userId: 1,
  //   },
  // });

  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "software engineering",
  //   },
  // });

  // post create system-1
  // const createPost = await prisma.post.create({
  //   data: {
  //     title: "This is title",
  //     content: "This is content of the post",
  //     authorId: 1,
  //     postCategory: {
  //       create: {
  //         category: {
  //           connect: {
  //             id: 1
  //           }
  //         }
  //       }
  //     }
  //   },
  // });

  // post create system-2
  // const createPost = await prisma.post.create({
  //   data: {
  //     title: "This is title 3",
  //     content: "This is content 3",
  //     authorId: 3,
  //     postCategory: {
  //       create: {
  //         categoryId: 3,
  //       },
  //     },
  //   },
  //   // show post category data
  //   include: {
  //     postCategory: true,
  //   },
  // });

  // create post and add multiple category
  const createPost = await prisma.post.create({
    data: {
      title: "This is title 5",
      content: "This is content 5",
      authorId: 3,
      postCategory: {
        create: [{ categoryId: 1 }, { categoryId: 4 }, { categoryId: 3 }],
      },
    },
    // show post category data
    include: {
      postCategory: true,
    },
  });

  console.log( createPost );
};

// main();
