import { Status } from "../interfaces";

interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: "Est tempor nulla id ipsum adipisicing do ea duis nostrud.",
      status: Status.PENDING,
      createdAt: Date.now(),
    },
    {
      description: "Est tempor nulla id ipsum adipisicing do ea duis nostrud2.",
      status: Status.IN_PROGRESS,
      createdAt: Date.now() - 1000000,
    },
    {
      description: "Est tempor nulla id ipsum adipisicing do ea duis nostrud3.",
      status: Status.FINISHED,
      createdAt: Date.now() - 100000,
    },
  ],
};
