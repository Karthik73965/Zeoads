import { NextRequest, NextResponse } from 'next/server';
import { getIdAcessToken } from '@/utils/jwt';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation'


export async function middleware(req: NextRequest) {
  const access_token = cookies().get("access_token")?.value;
  const role_token = cookies().get("role_token")?.value



  if (access_token) {
    if(role_token){
      return NextResponse.redirect(new URL("/onboarding", req.url), {
        status: 303,
      });
    }
    const id = await getIdAcessToken(access_token);
    if (id) {
      console.log(id)
      return NextResponse.redirect(new URL("/", req.url), {
        status: 303,
      });
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: ["/signup" ],
};
