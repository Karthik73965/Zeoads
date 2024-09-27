// app/api/cryptomus/payment/services/route.ts
'use server'
import { NextResponse } from "next/server";
  
const USER_ID = "b9ed-670c7f9479390419a965afa6ab9c7a91fa89"; // Your user ID
const API_KEY =
  "cFoZJpzkikYEELqbWfQsC6QEnX5byTLAi1LXMJgPT9C2FLC91YYhaveqrs12O3esLears8ulYU4K5JGm4pkXhtJuGX4g3V1yOJXYaDeoAPZ15ewgAPSfVWbnpEnZVbVJ"; // Your API key

// Simple JavaScript MD5 implementation (pure JS function)
function md5(input: string) {
  let md5 = function (str: string) {
    let rotateLeft = (lValue: number, shiftBits: number) =>
        (lValue << shiftBits) | (lValue >>> (32 - shiftBits)),
      addUnsigned = (lX: number, lY: number) => {
        let lX4: number, lY4: number, lX8: number, lY8: number, lResult: number;
        lX8 = lX & 0x80000000;
        lY8 = lY & 0x80000000;
        lX4 = lX & 0x40000000;
        lY4 = lY & 0x40000000;
        lResult = (lX & 0x3fffffff) + (lY & 0x3fffffff);
        if (lX4 & lY4) return lResult ^ 0x80000000 ^ lX8 ^ lY8;
        if (lX4 | lY4) {
          if (lResult & 0x40000000) return lResult ^ 0xc0000000 ^ lX8 ^ lY8;
          else return lResult ^ 0x40000000 ^ lX8 ^ lY8;
        } else return lResult ^ lX8 ^ lY8;
      },
      f = (x: number, y: number, z: number) => (x & y) | (~x & z),
      g = (x: number, y: number, z: number) => (x & z) | (y & ~z),
      h = (x: number, y: number, z: number) => x ^ y ^ z,
      i = (x: number, y: number, z: number) => y ^ (x | ~z),
      ff = (
        a: number,
        b: number,
        c: number,
        d: number,
        x: number,
        s: number,
        ac: number
      ) => {
        a = addUnsigned(a, addUnsigned(addUnsigned(f(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
      },
      gg = (
        a: number,
        b: number,
        c: number,
        d: number,
        x: number,
        s: number,
        ac: number
      ) => {
        a = addUnsigned(a, addUnsigned(addUnsigned(g(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
      },
      hh = (
        a: number,
        b: number,
        c: number,
        d: number,
        x: number,
        s: number,
        ac: number
      ) => {
        a = addUnsigned(a, addUnsigned(addUnsigned(h(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
      },
      ii = (
        a: number,
        b: number,
        c: number,
        d: number,
        x: number,
        s: number,
        ac: number
      ) => {
        a = addUnsigned(a, addUnsigned(addUnsigned(i(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
      },
      convertToWordArray = (str: string) => {
        let lWordCount: number;
        const lMessageLength = str.length;
        const lNumberOfWordsTemp1 = lMessageLength + 8;
        const lNumberOfWordsTemp2 =
          (lNumberOfWordsTemp1 - (lNumberOfWordsTemp1 % 64)) / 64;
        const lNumberOfWords = (lNumberOfWordsTemp2 + 1) * 16;
        const lWordArray = Array(lNumberOfWords - 1);
        let lBytePosition = 0;
        let lByteCount = 0;
        while (lByteCount < lMessageLength) {
          lWordCount = (lByteCount - (lByteCount % 4)) / 4;
          lBytePosition = (lByteCount % 4) * 8;
          lWordArray[lWordCount] =
            lWordArray[lWordCount] |
            (str.charCodeAt(lByteCount) << lBytePosition);
          lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] =
          lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
      },
      wordToHex = (lValue: number) => {
        let wordToHexValue = "",
          wordToHexValueTemp = "",
          lByte: number,
          lCount: number;
        for (lCount = 0; lCount <= 3; lCount++) {
          lByte = (lValue >>> (lCount * 8)) & 255;
          wordToHexValueTemp = "0" + lByte.toString(16);
          wordToHexValue =
            wordToHexValue +
            wordToHexValueTemp.substr(wordToHexValueTemp.length - 2, 2);
        }
        return wordToHexValue;
      },
      x = Array(),
      k: number,
      AA: number,
      BB: number,
      CC: number,
      DD: number,
      a: number,
      b: number,
      c: number,
      d: number,
      S11 = 7,
      S12 = 12,
      S13 = 17,
      S14 = 22,
      S21 = 5,
      S22 = 9,
      S23 = 14,
      S24 = 20,
      S31 = 4,
      S32 = 11,
      S33 = 16,
      S34 = 23,
      S41 = 6,
      S42 = 10,
      S43 = 15,
      S44 = 21;
    str = str.replace(/\r\n/g, "\n");
    const utftext = unescape(encodeURIComponent(str));
    x = convertToWordArray(utftext);
    a = 0x67452301;
    b = 0xefcdab89;
    c = 0x98badcfe;
    d = 0x10325476;
    for (k = 0; k < x.length; k += 16) {
      AA = a;
      BB = b;
      CC = c;
      DD = d;
      a = ff(a, b, c, d, x[k + 0], S11, 0xd76aa478);
      d = ff(d, a, b, c, x[k + 1], S12, 0xe8c7b756);
      c = ff(c, d, a, b, x[k + 2], S13, 0x242070db);
      b = ff(b, c, d, a, x[k + 3], S14, 0xc1bdceee);
    }
    return wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
  };
  return md5(input);
}

// Function to generate the `sign`
function generateSign(body: string) {
  const hash = md5(body);
  const sign = `${hash}`;
  return sign;
}

export async function POST(request: Request) {
  try {
    // Prepare the request body (you can modify it as needed)
    const requestBody = JSON.stringify({});

    // Generate the sign from the request body and API key
    const sign = generateSign(requestBody);

    const res = await fetch("https://api.cryptomus.com/v1/payment/services", {
      method: "POST",
      headers: {
        merchant: USER_ID,
        sign: sign,
        "Content-Type": "application/json",
      },
      body: requestBody,
    });



    const data = await res.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
