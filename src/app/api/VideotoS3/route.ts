// app/api/upload-video/route.ts (API Route)
"use server";

import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { NextRequest, NextResponse } from "next/server";
import { Buffer } from "buffer";

// Initialize S3 Client (Use environment variables for security)
const s3Client = new S3Client({
  region: process.env.AWS_BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function POST(req: NextRequest) {
  try {
    // Parse request JSON to get the base64 video string
    const { videoBase64, fileName, contentType } = await req.json();

    if (!videoBase64 || !fileName || !contentType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Convert base64 video string to Buffer
    const videoBuffer = Buffer.from(videoBase64, "base64");

    // Prepare S3 upload parameters
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME!,
      Key: fileName, // Use a unique key if necessary
      Body: videoBuffer,
      ContentType: contentType,
    };

    // Upload the video to S3
    const uploadResult = await s3Client.send(new PutObjectCommand(params));

    // Return the uploaded video's URL
    const videoUrl = `https://zeoads.s3.eu-north-1.amazonaws.com/${fileName}`;

    return NextResponse.json({ url: videoUrl });
  } catch (error) {
    console.error("Error uploading video:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
