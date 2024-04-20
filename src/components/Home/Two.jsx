import './Style.css';
import { FaGreaterThan } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import PropTypes from 'prop-types';

const Two = ({allnews}) => {
    const national = allnews.filter(item => item.news_category === 'Country');
    const allid = national.map(news => news.news_id);
    const idSorted = [...allid].sort((a, b) => b - a);
    const newsItems = idSorted.map(id => {
        return allnews.find(news => news.news_id === id);   
    });

    return (
        <div>
            <hr className='mb-1 line' />
            <div className='flex items-center gap-2'>
                <h1 className='text-4xl font-bold text-red-600'>Country</h1>
                <div className='flex text-xl text-red-600'>
                    <FaGreaterThan />
                    <FaGreaterThan />
                </div>
            </div>
            <hr className='mt-1 line' />
            <div>
                <div className='flex gap-3'>
                    <div className='w-[26%]'>
                        {
                            [1,2,3,4].map((index)=>(
                                <div className="ml-2"  key={index}>
                                    <div className="flex justify-between mb-1 items-center gap-5 py-2">
                                        <img className="w-40" src={newsItems[index].news_image} alt="" /> 
                                        <h1 className="text-xl w-fit hover:text-red-600 font-medium">{newsItems[index].news_title}</h1>
                                    </div>
                                    {
                                        index==4 || <hr />
                                    }
                                </div> 
                            ))
                        }
                    </div>
                    <div className="space-y-3 w-[40%] mr-2 ">
                        <hr className="vertical-hr absolute h-[56%]" />
                        <img className="w-full h-96 ml-3 mr-3" src={newsItems[0].news_image} alt="" />
                        <h1 className="text-3xl ml-3 mr-3 hover:text-red-600 font-semibold ">{newsItems[0].news_title} </h1>
                        <p className='ml-3 mr-3'>{newsItems[0].news_details.slice(0,150)}<span className="text-xl font-semibold"> . . .</span></p>
                        <div className='flex items-center ml-2 gap-2'>
                            <CiClock2 />
                            <p className='font-extralight text-gray-400'>{newsItems[0].news_publish_date}</p>
                        </div>
                    </div>
                    <div>
                        <hr className="vertical-hr absolute h-[56%]" />
                        {
                            [5,6,7,8].map((index)=>(
                                <div className="ml-2"  key={index}>
                                    <div className="flex justify-between mb-1 items-center gap-10 py-2">
                                        <img className="w-40" src={newsItems[index].news_image} alt="" /> 
                                        <div>
                                            <h1 className="text-xl mb-1 w-fit hover:text-red-600 font-medium">{newsItems[index].news_title}</h1>
                                            <div className='flex items-center gap-2'>
                                                <CiClock2 />
                                                <p className='font-extralight text-gray-400'>{newsItems[index].news_publish_date}</p>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        index==8 || <hr />
                                    }
                                </div> 
                            ))
                        }

                    </div>
                </div>
            </div>
            
        </div>
    );
};
Two.propTypes = {
    allnews: PropTypes.string.isRequired
};

export default Two;