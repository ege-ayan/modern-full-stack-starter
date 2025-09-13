import type { Request, Response } from "express";

export const messageService = {
  getMessage: (): { message: string } => {
    return { message: "Hello World" };
  },
};
