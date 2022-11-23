import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";
import { Entry, IEntry } from "../../../models";

type Data =
  | {
      message: string;
    }
  | IEntry;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }
  switch (req.method) {
    case "GET":
      return getEntry(req, res);
    case "PUT":
      return updateEntry(req, res);
    case "DELETE":
      return deleteEntry(req, res);

    default:
      return res.status(400).json({ message: "Invalid enpoint" });
  }
}

const getEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;
  await db.connect();

  try {
    const entry = await Entry.findById(id);
    if (!entry) {
      await db.disconnect();
      return res.status(400).json({ message: "No entry with that ID" });
    }

    await db.disconnect();

    return res.status(200).json(entry!);
  } catch (error) {
    await db.disconnect();
    console.log(error);
    return res.status(400).json({ message: "Something went wrong" });
  }
};

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;
  await db.connect();
  const entryToUpdate = await Entry.findById(id);
  if (!entryToUpdate) {
    await db.disconnect();
    return res.status(400).json({ message: "No entry with that ID" });
  }

  const {
    description = entryToUpdate.description,
    status = entryToUpdate.status,
  } = req.body;

  try {
    const updatedEntry = await Entry.findByIdAndUpdate(
      id,
      {
        description,
        status,
      },
      { runValidators: true, new: true }
    );

    await db.disconnect();

    return res.status(200).json(updatedEntry!);
  } catch (error) {
    await db.disconnect();
    console.log(error);
    return res.status(400).json({ message: "Something went wrong" });
  }
};

const deleteEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;
  await db.connect();
  const entryToDelete = await Entry.findById(id);
  if (!entryToDelete) {
    await db.disconnect();
    return res.status(400).json({ message: "No entry with that ID" });
  }

  try {
    const deletedEntry = await Entry.findByIdAndDelete(id);

    await db.disconnect();

    return res.status(200).json(deletedEntry!);
  } catch (error) {
    await db.disconnect();
    console.log(error);
    return res.status(400).json({ message: "Something went wrong" });
  }
};
