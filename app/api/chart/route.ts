import { chart } from "@/public/data.json";

export async function GET(request: Request) {
  return Response.json(chart);
}
