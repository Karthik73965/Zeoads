import { SignJWT, jwtVerify } from 'jose';
import { User } from '@prisma/client';

const jwtSecret = process.env.JWT_SECRET || "";

const secretKey = new TextEncoder().encode(jwtSecret);

export async function generateToken(id: User): Promise<string> {
  const payload = { id };

  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' }) // HS256 algorithm for signing
    .setIssuedAt() // Set issued at time (optional)
    .setIssuer('YOUR_ISSUER') // Set issuer (optional)
    .setAudience('YOUR_AUDIENCE') // Set audience (optional)
    .setExpirationTime('24h') // 1 hour expiration
    .sign(secretKey);
  return token;
}


export const generateRoleToken = async (role: string) => {
  try {
    const payload = { role };
    const token = await new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' }) // HS256 algorithm for signing
      .setIssuedAt() // Set issued at time (optional)
      .setIssuer('YOUR_ISSUER') // Set issuer (optional)
      .setAudience('YOUR_AUDIENCE') // Set audience (optional)
      .setExpirationTime('24h') // 1 hour expiration
      .sign(secretKey);
    return token;
  } catch (error) {
    return "null"
  }
}

export async function getIdAcessToken(token: string): Promise<string | null> {
  try {
    const { payload } = await jwtVerify(token, secretKey, {
      algorithms: ["HS256"],
    });
    //@ts-ignore
    return payload.id;
  } catch (error) {
    console.error('Invalid JWT:', error);
    return null;
  }
}
