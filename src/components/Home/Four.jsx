import { FaGreaterThan } from "react-icons/fa6";
import PropTypes from 'prop-types';
import './Style.css';

const Four = ({allnews}) => {
    const national = allnews.filter(item => item.news_category === 'politics');
    const allid = national.map(news => news.news_id);
    const idSorted = [...allid].sort((a, b) => b - a);
    const newsItems = idSorted.map(id => {
        return allnews.find(news => news.news_id === id);   
    });
    
    return (
        <div className="flex gap-5 justify-between mt-10 mb-5">
            <div>
            <hr className='mb-1 line' />
            <div className='flex items-center gap-2'>
                <h1 className='text-4xl font-bold text-red-600'>Politics</h1>
                <div className='flex text-xl text-red-600'>
                    <FaGreaterThan />
                    <FaGreaterThan />
                </div>
            </div>
            <hr className='mt-1 line' />
                <div className="flex gap-3 mt-5">
                    <div className="w-[64%] ">
                            <img className="w-full" src={newsItems[0].news_image} alt="" />
                            <h1 className="text-2xl hover:text-red-600 font-semibold ">{newsItems[0].news_title} </h1>
                            <p>{newsItems[0].news_details.slice(0,150)}<span className="text-xl font-semibold"> . . .</span></p>
                    </div>
                    <div className="w-[36%]">
                        <hr className="vertical-hr absolute h-[51%]" />
                        {
                            [1,2,3,4].map((index)=>(
                                <div className="ml-2"  key={index}>
                                    <div className="flex justify-between mb-1 items-center gap-10 py-2">
                                        <h1 className="text-xl w-fit hover:text-red-600 font-medium">{newsItems[index].news_title}</h1>
                                        <img className="w-40" src={newsItems[index].news_image} alt="" /> 
                                    </div>
                                    <hr />
                                </div> 
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='space-y-5 mt-8'>
                <hr className="vertical-hr absolute h-[58%] " />
                <div className="ml-4">
                    <img className="h-64 mb-2" src="https://i.ibb.co/h2skRGv/e6bc3f2cda90e5b6cb3df7f81c21aceb.png" alt="" />
                    <img className="h-64" src="https://i.ibb.co/h2skRGv/e6bc3f2cda90e5b6cb3df7f81c21aceb.png" alt="" />
                </div>
            </div>
        </div>
    );
};
Four.propTypes = {
    allnews: PropTypes.string.isRequired
};

export default Four;