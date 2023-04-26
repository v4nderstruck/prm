import { faker } from "@faker-js/faker";
import { Prisma } from "@prisma/client";
import { channelNamesList } from "../../types/data";
import { prisma } from "./global";

export function gimmeChannels(length: number): Prisma.ChannelCreateInput[] {
  let some: Prisma.ChannelCreateInput[] = [];
  let uniqueA = faker.helpers.uniqueArray(channelNamesList, length);
  for (const key of uniqueA) {
    switch (key) {
      case "email":
        some.push({ key, value: faker.internet.email() })
      case "mobile":
        some.push({ key, value: faker.phone.number() })
      case "discord":
        some.push({ key, value: faker.internet.userName() })
      case "other":
        some.push({ key, value: faker.internet.url() })
    }
  }
  return some;
}

export function gimmeLike(count: number): Prisma.LikeCreateInput[] {
  let some: Prisma.LikeCreateInput[] = [];
  for (let i = 0; i < count; i++) {
    some.push({ what: faker.animal.type(), why: faker.lorem.words(5) })
  }
  return some
}

export function gimmeDislike(count: number): Prisma.DislikeCreateInput[] {
  let some: Prisma.DislikeCreateInput[] = [];
  for (let i = 0; i < count; i++) {
    some.push({ what: `${faker.animal.type()} ${faker.internet.emoji()}`, why: faker.lorem.words(5) })
  }
  return some
}

export function gimmeActivities(count: number): Prisma.ActivityCreateInput[] {
  let some: Prisma.ActivityCreateInput[] = [];
  for (let i = 0; i < count; i++) {
    some.push({
      Note: {
        create: {
          title: faker.lorem.words(5),
          summary: faker.lorem.words(10),
          note: faker.lorem.words(100)
        }
      }
    })
  }
  return some
}

export function gimmeTasks(count: number, withReminder: boolean): Prisma.TaskCreateInput[] {
  let some: Prisma.TaskCreateInput[] = [];
  for (let i = 0; i < count; i++) {
    some.push({
      reminder: withReminder ? {
        create: {
          when: faker.date.future(),
        }
      } : undefined,
      Note: {
        create: {
          title: faker.lorem.words(5),
          summary: faker.lorem.words(10),
          note: faker.lorem.words(100)
        }
      }
    })
  }
  return some
}

const seedTags = async (count: number): Promise<string[]> => {
  let some: string[] = Array.from({ length: count }, () => faker.random.word())
  for(const tag of some) {
    await prisma.tag.create({
      data: {
        value: tag
      }
    })
  }
  return some
}

export { seedTags }

export function gimmeTags(length: number, tags: string[]): Prisma.TagCreateInput[] {
  let some: Prisma.TagCreateInput[] = [];
  let uniqueA = faker.helpers.uniqueArray(tags, length);
  for (const key of uniqueA) {
    some.push({ value: key })
  }
  return some;
}

export function gimmeReminders(count: number, withNote: boolean): Prisma.ReminderCreateInput[] {
  let some: Prisma.ReminderCreateInput[] = [];
  for (let i = 0; i < count; i++) {
    some.push({
      when: faker.date.future(),
      note: withNote ? {
        create: {
          title: faker.lorem.words(5),
          summary: faker.lorem.words(10),
          note: faker.lorem.words(100)
        }
      } : undefined

    })
  }
  return some
}

export function gimmeNotes(count: number): Prisma.NoteCreateInput[] {
  let some: Prisma.NoteCreateInput[] = [];
  for (let i = 0; i < count; i++) {
    some.push({
      title: faker.lorem.words(5),
      summary: faker.lorem.words(10),
      note: faker.lorem.words(100)
    })
  }
  return some

}

