
import CardComponent from '../../Components/Card/CardComponent';
import './Catering.css'

const Catering = ({cateringData}) => {
    
    
    return (
        <>
        <div className='px-5 mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 py-10 sm:mb-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
      {/* {cateringData.map((card, index) => (
        <CardComponent key={index} {...card} />
      ))} */}
    </div>
            {/* <div class="px-5 mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 py-10 sm:mb-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <div className='relative'>
                    <div className='absolute  cardalign'>
                        <img src={catering1} alt="Image of card" class="w-80 h-48 object-cover rounded-2xl" />

                    </div>
                    <div class="max-w-xs rounded-2xl overflow-hidden shadow-lg relative pt-48">

                        <div class="px-6 py-4 group ">
                            <div class="flex justify-between items-center">
                                <h2 class="font-bold text-xl mb-2 leading-6 text-grey group-hover:text-green">Catering</h2>
                                <button class="bg-green hover:shadow-lg text-white font-bold py-2 px-4 rounded">$500</button>
                            </div>
                            <p class="mt-5 text-sm leading-6 text-gray-600 text-left">Discover the perfect solution for successful meetings with Everoo. From planning to implementation, we offer tailor-made concepts and professional support. Smooth and effective meeting experience for your participants.</p>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <div className='absolute  cardalign'>
                        <img src={catering1} alt="Image of card" class="w-80 h-48 object-cover rounded-2xl" />

                    </div>
                    <div class="max-w-xs rounded-2xl overflow-hidden shadow-lg relative pt-48">

                        <div class="px-6 py-4 group ">
                            <div class="flex justify-between items-center">
                                <h2 class="font-bold text-xl mb-2 leading-6 text-grey group-hover:text-green">Catering</h2>
                                <button class="bg-green hover:shadow-lg text-white font-bold py-2 px-4 rounded">$500</button>
                            </div>
                            <p class="mt-5 text-sm leading-6 text-gray-600 text-left">Discover the perfect solution for successful meetings with Everoo. From planning to implementation, we offer tailor-made concepts and professional support. Smooth and effective meeting experience for your participants.</p>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <div className='absolute  cardalign'>
                        <img src={catering1} alt="Image of card" class="w-80 h-48 object-cover rounded-2xl" />

                    </div>
                    <div class="max-w-xs rounded-2xl overflow-hidden shadow-lg relative pt-48">

                        <div class="px-6 py-4 group ">
                            <div class="flex justify-between items-center">
                                <h2 class="font-bold text-xl mb-2 leading-6 text-grey group-hover:text-green">Catering</h2>
                                <button class="bg-green hover:shadow-lg text-white font-bold py-2 px-4 rounded">$500</button>
                            </div>
                            <p class="mt-5 text-sm leading-6 text-gray-600 text-left">Discover the perfect solution for successful meetings with Everoo. From planning to implementation, we offer tailor-made concepts and professional support. Smooth and effective meeting experience for your participants.</p>
                        </div>
                    </div>
                </div>


            </div> */}
        </>
    );
}

export default Catering;