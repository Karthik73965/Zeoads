import React from "react";

type Props = {
  image1: string | undefined;
  text1: string;
  image2: string | undefined;
  text2: string;
  image3: string | undefined;
  text3: string;
  image4: string | undefined;
  text4: string;
  image5: string | undefined;
  text5: string;
  image6: string | undefined;
  text6: string;
  image7: string | undefined;
  text7: string;
  image8: string | undefined;
  text8: string;
};

export default function PricingChild({
  image1,
  text1,
  image2,
  text2,
  image3,
  text3,
  image4,
  text4,
  image5,
  text5,
  image6,
  text6,
  image7,
  text7,
  image8,
  text8,
}: Props) {
  return (
    <main className="md:h-[1036px] px-2  mt-5 gap-x-[40px]">
      <div className="gap-[8px] md:gap-[24px] p-[24px] bg-white h-[80px]  text-center   w-[38vw] md:w-[37vw] xl:w-[548px]">
        {image1 && text1 ? (
          <div className="flex gap-x-5">
            <img className="h-[24px] w-[24px]" src={image1} alt="image1" />
            <h3 className="text-[#1F2933] -mt-2 text-[12px] md:text-[24px] font-medium text-center">
              {text1}
            </h3>
          </div>
        ) : (
          <div>{text1}</div>
        )}
      </div>
      {/* 2nd  */}
      <div className="gap-[8px] md:gap-[24px]  mt-5 p-[24px] bg-white h-[194px]    text-center    w-[38vw] md:w-[37vw] xl:w-[548px]">
        {image2 && text2 ? (
          <div className="flex gap-x-5 mt-14">
            <img className="h-[24px] w-[24px]" src={image2} alt="image1" />
            <h3 className="text-[#1F2933] -mt-2 text-[12px] md:text-[24px] font-medium text-center">
              {text2}
            </h3>
          </div>
        ) : (
          <div  className="text-[12px] md:text-[20px] "dangerouslySetInnerHTML={{ __html: text2 }} />
        )}
      </div>
      {/* 3nd  */}
      <div className="gap-[8px] md:gap-[24px] mt-5 p-[24px] bg-white h-[80px]   text-center   w-[38vw] md:w-[37vw] xl:w-[548px]">
        {image3 && text3 ? (
          <div className="flex gap-x-5">
            <img className="h-[24px] w-[24px]" src={image3} alt="image1" />
            <h3 className="text-[#1F2933] -mt-2 text-[12px] md:text-[24px] font-medium text-center">
              {text3}
            </h3>
          </div>
        ) : (
          <div  className="text-[12px] md:text-[20px] "dangerouslySetInnerHTML={{ __html: text3 }} />
        )}
      </div>
      {/* 4nd  */}
      <div className="gap-[8px] md:gap-[24px] mt-5 p-[24px] bg-white h-[176px]  text-center   w-[38vw] md:w-[37vw] xl:w-[548px]">
        {image4 && text4 ? (
          <div className="flex gap-x-5 mt-10">
            <img className="h-[24px] w-[24px]" src={image4} alt="image1" />
            <h3 className="text-[#1F2933] -mt-2 text-[12px] md:text-[24px] font-medium text-center">
              {text4}
            </h3>
          </div>
        ) : (
          <div  className="text-[12px] md:text-[20px] "dangerouslySetInnerHTML={{ __html: text4 }} />
        )}
      </div>
      {/* 5nd  */}
      <div className="gap-[8px] md:gap-[24px] mt-5 p-[24px] bg-white h-[80px]  text-center   w-[38vw] md:w-[37vw] xl:w-[548px]">
        {image5 && text5 ? (
          <div className="flex gap-x-5">
            <img className="h-[24px] w-[24px]" src={image5} alt="image1" />
            <h3 className="text-[#1F2933] -mt-2 text-[12px] md:text-[24px] font-medium text-center">
              {text5}
            </h3>
          </div>
        ) : (
          <div  className="text-[12px] md:text-[20px] "dangerouslySetInnerHTML={{ __html: text5 }} />
        )}
      </div>
      {/* 6nd  */}

      <div className="gap-[8px] md:gap-[24px] mt-5 p-[24px] bg-white h-[80px]  text-center   w-[38vw] md:w-[37vw] xl:w-[548px]">
        {image6 && text6 ? (
          <div className="flex gap-x-5">
            <img className="h-[24px] w-[24px]" src={image6} alt="image1" />
            <h3 className="text-[#1F2933] -mt-2 text-[12px] md:text-[24px] font-medium text-center">
              {text6}
            </h3>
          </div>
        ) : (
          <div  className="text-[12px] md:text-[20px] "dangerouslySetInnerHTML={{ __html: text6 }} />
        )}
      </div>
      {/* 7nd  */}

      <div className="gap-[8px] md:gap-[24px] mt-5 p-[24px] bg-white h-[112px]  text-center   w-[38vw] md:w-[37vw] xl:w-[548px]">
        {image7 && text7 ? (
          <div className="flex ga">
            <img className="h-[24px] w-[24px]" src={image7} alt="image1" />
            <h3
               className="text-[12px] md:text-[20px] "dangerouslySetInnerHTML={{ __html: text7 }}
            />
          </div>
        ) : (
          <div  className="text-[12px] md:text-[20px] "dangerouslySetInnerHTML={{ __html: text7 }} />
        )}
      </div>
      {/* 8nd  */}
      <div className="gap-[8px] md:gap-[24px] mt-5 p-[24px] bg-white h-[80px]  text-center   w-[38vw] md:w-[37vw] xl:w-[548px]">
        {image8 && text8 ? (
          <div className="flex gap-x-5">
            <img className="h-[24px] w-[24px]" src={image8} alt="image1" />
            <h3 className="text-[#1F2933] -mt-2 text-[12px] md:text-[24px] font-medium text-center">
              {text8}
            </h3>
          </div>
        ) : (
          <div  className="text-[12px] md:text-[20px] "dangerouslySetInnerHTML={{ __html: text8 }} />
        )}
      </div>
    </main>
  );
}
