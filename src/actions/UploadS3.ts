"use server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { v4 as uuidv4 } from "uuid";

const s3Client = new S3Client({
  region: "eu-north-1",
  credentials: {
    accessKeyId: "AKIA5CBDRJ2SW2ZYK7EF",
    secretAccessKey: "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",
  },
});

export const uploadImageToS3 = async (imageFile: File) => {
  const filename = uuidv4();

  try {
    const putObjectCommand = new PutObjectCommand({
      Bucket: "zeoads",
      Key: filename,
      Body: imageFile,
    });

    const url = await getSignedUrl(s3Client, putObjectCommand, {
      expiresIn: 60,
    });

    return url;
  } catch (error) {
    console.error("Error uploading image to S3 and database:", error);
    throw error;
  }
};

export const uploadVideoToS3 = async (video: File) => {
  console.log("logged in upload s3");
  try {
    const params = {
      Bucket: "zeoads",
      Key: video.name,
      Body: video,
      ContentType: video.type,
    };

    const uploadResult = await s3Client.send(new PutObjectCommand(params));
    console.log(uploadResult);
    //@ts-ignore
    return { url: uploadResult?.Location };
  } catch (error) {
    console.error("Error uploading video:", error);
    return null;
  }
};
