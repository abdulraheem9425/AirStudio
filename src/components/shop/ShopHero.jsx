import React from 'react'

const ShopHero = () => {
  return (
        
<div className="grid grid-cols-12 gap-2 md:px-10 lg:px-20 py-12 bg-white sm:py-10">

<div className="col-span-2  h-[500px] hidden lg:block">
<img src="/assets/images/shop/lefts.png" className='ml-50  w-9 h-15 w-15   ' alt="" />

<img src="/assets/images/shop/leftx.png" className='relative bottom-7  '   alt="" />

</div>

<div className="col-span-12 lg:col-span-7  h-[500px] w-full">
<h1 className='text-center mt-15 text-amber-400 font-bold text-4xl font-sans'> Shop</h1>
<p className='text-center mt-10 lg:text-xl tracking-wide  text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting <br/>
industry. Lorem Ipsum has been the industry's standard dummy text eve<br/>
since the 1500s, </p>
<div className='sm:col-end-3 hidden lg:block absolute right-96  ' > 
<img src="/assets/images/shop/hand.png" className='relative bottom-25 left-17 h-15' alt="" />
</div>


</div>

<div className="col-span-3 h-[500px] hidden lg:block">

    <img src="/assets/images/shop/right.png" className='  relative bottom-15 ' alt="" />
</div>

</div>

  )
}

export default ShopHero
