import { faker } from "@faker-js/faker";
import { prisma } from "./seed_script/global";
import { gimmeActivities, gimmeChannels, gimmeDislike, gimmeLike, gimmeNotes, gimmeReminders, gimmeTags, gimmeTasks, seedTags } from "./seed_script/seedHelpers";

const totalContacts = 100;

async function main() {
  const tags = await seedTags(20);
  for (let i = 0; i < totalContacts; i++) {
    await prisma.contact.create({
      data: {
        name: faker.name.fullName(),
        birthday: faker.date.past(),
        occupation: faker.name.jobTitle(),
        lastContacted: faker.date.past(),
        lastActivityTogether: faker.date.past(),
        firstMet: faker.lorem.words(5),
        firstMetDate: faker.date.past(),
        avatar: Math.random() >= 0.6 ? faker.image.avatar() : undefined,

        channels: {
          create: gimmeChannels(Math.floor(Math.random() * 3))
        },
        likes: {
          create: gimmeLike(Math.floor(Math.random() * 5))
        },
        dislikes: {
          create: gimmeDislike(Math.floor(Math.random() * 5))
        },
        // avatar, 
        // pictures,
        portrait: {
          create: gimmeNotes(1)[0]
        },
        notes: {
          create: gimmeNotes(Math.floor(Math.random() * 8))
        },
        reminders: {
          create: gimmeReminders(Math.floor(Math.random() * 2), true).concat(gimmeReminders(Math.floor(Math.random() * 5), false))
        },
        tasks: {
          create: gimmeTasks(Math.floor(Math.random() * 2), true).concat(gimmeTasks(Math.floor(Math.random() * 5), false))
        },
        activities: {
          create: gimmeActivities(Math.floor(Math.random() * 15))
        },
        tags: {
          connect: gimmeTags(Math.floor(Math.random() * 4), tags)
        }
      }

    })
  }
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })


