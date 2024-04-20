import PropTypes from 'prop-types';
import { CiClock2 } from "react-icons/ci";
import { FaGreaterThan } from "react-icons/fa6";

const Three = ({allnews}) => {
    const national = allnews.filter(item => item.news_category === 'sports');
    const allid = national.map(news => news.news_id);
    const idSorted = [...allid].sort((a, b) => b - a);
    const newsItems = idSorted.map(id => {
        return allnews.find(news => news.news_id === id);   
    });
    
    return (
        <div className='mt-10'>
            <hr className='mb-1 line' />
            <div className='flex items-center gap-2'>
                <h1 className='text-4xl font-bold text-red-600'>Sports</h1>
                <div className='flex text-xl text-red-600'>
                    <FaGreaterThan />
                    <FaGreaterThan />
                </div>
            </div>
            <hr className='mt-1 line' />
            <div className='flex gap-5 mt-5'>
                <div>
                    <div className="space-y-2 w-[100%]">
                        <img className="w-full h-96" src={newsItems[0].news_image} alt="" />
                        <h1 className="text-2xl hover:text-red-600 font-semibold ">{newsItems[0].news_title} </h1>
                        <p>{newsItems[0].news_details.slice(0,150)}<span className="text-xl font-semibold"> . . .</span></p>
                        <div className='flex items-center gap-2'>
                            <CiClock2 />
                            <p className='font-extralight text-gray-400'>{newsItems[0].news_publish_time}</p>
                        </div>
                    </div>
                    <div className='mt-4'>
                        {
                            [1].map((index)=>(
                                <div className=""  key={index}>
                                    <div className="flex mb-1 items-center gap-5">
                                        <img className="w-40" src={newsItems[index].news_image} alt="" /> 
                                        <div>
                                            <h1 className="text-xl mb-1 w-fit hover:text-red-600 font-medium">{newsItems[index].news_title}</h1>
                                            <p>{newsItems[index].news_details.slice(0,50)}<span className="text-xl font-semibold"> . . .</span></p>
                                            <div className='flex items-center gap-2'>
                                                <CiClock2 />
                                                <p className='font-extralight text-gray-400'>{newsItems[index].news_publish_time}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            ))
                        }
                    </div>
                </div>
                <div className='w-[54%]'>
                    <hr className="vertical-hr absolute h-[56%]" />
                    {
                        [2,3,4].map((index)=>(
                            <div className="ml-2"  key={index}>
                                <div className="flex mb-1 items-center gap-5 py-2">
                                    <img className="w-40" src={newsItems[index].news_image} alt="" /> 
                                    <div>
                                        <h1 className="text-xl mb-1 w-fit hover:text-red-600 font-medium">{newsItems[index].news_title}</h1>
                                        <p>{newsItems[index].news_details.slice(0,50)}<span className="text-xl font-semibold"> . . .</span></p>
                                        {/* <div className='flex items-center gap-2'>
                                            <CiClock2 />
                                            <p className='font-extralight text-gray-400'>{newsItems[index].news_publish_date}</p>
                                        </div> */}
                                    </div>
                                </div>
                                {
                                    index==4 || <hr />
                                }
                            </div> 
                        ))
                    }
                </div>

            </div>
            
            
        </div>
    );
};
Three.propTypes = {
    allnews: PropTypes.string.isRequired
};

export default Three;