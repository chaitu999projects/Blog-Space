// app/api/blogs/route.js
import { DBConnection } from "@/app/utils/config/db"
import BlogModel from "@/app/utils/models/Blog"
import { NextResponse } from "next/server"

export async function GET() {
  await DBConnection()
  const blogs = await BlogModel.find({}).sort({ createdAt: -1 })
  return NextResponse.json(blogs)
}
