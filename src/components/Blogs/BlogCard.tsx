import React from 'react'

type Props = {
    main:boolean
}

export default function BlogCard({main}: Props) {
  return (
    <section className={`border-[1px] rounded-[8px] w-[384px] shadow-md h-[453px] ${main ? "border-[#4779E8]":"border-[#E4E7EC]"} p-[24px] gap-[16px]`}>
        <img src="https://s3-alpha-sig.figma.com/img/b947/d830/8766810fe6d8f09aa1cfdd7cefe4d5e0?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sql1e1CryXBXG46q5cnjBx1Bi9WTXsE7Z10e0eLtL8CjwBHqhp-ylK~fSMUUN6V1O4cPtUMyKeXAM1ZNNmbzzJa6B8fN24vt4KceyNumRg34F1RyQh2h-Sn9xbBK2iG7FngF8v5YCYAiTEfeKxLj8NxYCs7ySE8akXXSQ2tQLo-Wm8xl~6TtimJGGkfD9otg0jyy9xlAkQSpsw9TPEn7T7NpfJoEVOYgddBGxyyV-sSHGaJGLJHjU1RIg4aEOnXN4CVRBH3dFJoV8BPxUl-k~ach6i1sZ2WkrUw~gY4MpWpaVwqvh8M-w~QEN2DgDnMkTLIfSfhdTwuvI6E3vsIMJg__" className="w-[336px] h-[192px] rounded-[8px]" alt="something" />
        <div className='mt-5 w-[336px] text-[#727F8F] text-[14px]h-[21px] flex justify-between'>
            <div>Metaverse</div>
            <div>9 May 2024</div>
        </div>
            <div className='w-[336px] h-[164px] gap-[16px] mt-5'>
                <div className=' text-[24px] leading[36px]  text-[#1F2933]'>
                Step-By-Step Guide: Meta Conversions API Implementation
                </div>
                <div className='mt-5 primary-text font-medium'> Read Blog  {"-->"}</div>
            </div>
    </section>
  )
}