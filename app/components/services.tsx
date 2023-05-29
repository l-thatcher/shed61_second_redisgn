//services component that shows a centered title "what we do" then underneath four colums with a circle and some text underneath

export default function Services() {
    return (
        <div className='bg-[#272B4A] py-20'>
            <div className='container mx-auto'>                     
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-5xl text-white py-10'>what we do</h1>
                    <div className='flex flex-row justify-around w-full px-20'>
                        <div className='flex flex-col items-center justify-center w-1/4 h-2/3'>
                            <div className='w-20 h-20 my-10 rounded-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600'></div>
                            <p className='text-white text-xl'>code free web design</p>
                            <p className='text-white text-md text-center p-5'> Platforms like WordPress, Wix, and Shopify offer affordable and user-friendly 
                            solutions for creating stylish websites. With intuitive interfaces, customizable design options, seamless hosting, and ongoing support, 
                            managing and maintaining your website becomes hassle-free.</p>
                        </div>
                        <div className='flex flex-col items-center justify-center w-1/4 h-2/3'>
                            <div className='w-20 h-20 rounded-full my-10 bg-gradient-to-t from-orange-400 to-sky-400'></div>
                            <p className='text-white text-xl'>app development</p>
                            <p className='text-white text-md text-center p-5'> Flutter is a powerful cross-platform development framework for creating versatile mobile 
                            applications. With its user-friendly interface, and seamless compatibility with iOS and Android platforms, 
                            Flutter offers an efficient and affordable solution for building high-quality apps.</p>
                        </div>
                        <div className='flex flex-col items-center justify-center w-1/4 h-2/3'>
                            <div className='w-20 h-20 rounded-full my-10 bg-gradient-to-tl from-orange-500 viq-yellow-300 to-sky-200'></div>
                            <p className='text-white text-xl'>bespoke coded sites</p>
                            <p className='text-white text-md text-center p-5'> We will work together to develop a list of requirements for your site. Then work through a plan, 
                            prototype and then finally produce the site you want. This provides the most customisation and will allow us to create the exact site that you want.
                             However, this is the most time consuming approach.</p>
                        </div>
                        <div className='flex flex-col items-center justify-center w-1/4 h-2/3'>
                            <div className='w-20 h-20 rounded-full my-10 bg-gradient-to-r from-orange-400 to-rose-400'></div>
                            <p className='text-white text-xl'>AI assisted workflows</p>
                            <p className='text-white text-md text-center p-5'> With new AI tools appearing constantly they can be used for anything from copyrite, to image creation. 
                            wether you need a new logo, blog posts, new images for your website, or an entirly new website, there are AI assisted tools that can help us make it faster and better.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
