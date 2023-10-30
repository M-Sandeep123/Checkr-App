import { rest } from "msw";
import data from "../data/db.json";
export const handlers = [
  rest.get("https://ms-bc-95.bootcamp64.tk/candidates", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data.candidates));
  }),
  rest.get("https://ms-bc-95.bootcamp64.tk/adverseActions", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data.adverseActions));
  }),
];
