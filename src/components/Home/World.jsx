import { FaGreaterThan } from "react-icons/fa6";
import PropTypes from 'prop-types';
import './Style.css';

const World = ({allnews}) => {
    const national = allnews.filter(item => item.news_category === 'World');
    const allid = national.map(news => news.news_id);
    const idSorted = [...allid].sort((a, b) => b - a);
    const newsItems = idSorted.map(id => {
        return allnews.find(news => news.news_id === id);   
    });

    return (
        <div>
            <hr className='mb-1 line' />
            <div className='flex items-center gap-2'>
                <h1 className='text-4xl font-bold text-red-600'>Sports</h1>
                <div className='flex text-xl text-red-600'>
                    <FaGreaterThan />
                    <FaGreaterThan />
                </div>
            </div>
            <hr className='mt-1 line' />
            <div className="flex ">
                <div className="flex gap-4 mt-5">
                    <div className="w-[66%] ">
                        <img className="w-full" src={newsItems[0].news_image} alt="" />
                        <h1 className="text-2xl hover:text-red-600 font-semibold ">{newsItems[0].news_title} </h1>
                        <p>{newsItems[0].news_details.slice(0,150)}<span className="text-xl font-semibold"> . . .</span></p>
                    </div>
                    <div className="w-[31%]">
                        <hr className="vertical-hr absolute h-[51%]" />
                        {
                            [1,2].map((index)=>(
                                <div className="ml-4 mb-3" key={index}>
                                    <img className="w-80 h-48" src={newsItems[index].news_image} alt="" />
                                    <h1 className="text-xl w-fit hover:text-red-600 font-medium">{newsItems[index].news_title}</h1>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="mt-5 w-[39%]">
                    <hr className="vertical-hr absolute h-[51%]" />
                    {
                        [3,4,5,6].map((index)=>(
                            <div className="ml-3 mb-4 flex justify-between" key={index}>
                                <img className="w-48 h-28" src={newsItems[index].news_image} alt="" />
                                <h1 className="text-xl w-fit hover:text-red-600 font-medium">{newsItems[index].news_title}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
         
        </div>
    );
};
World.propTypes = {
    allnews: PropTypes.string.isRequired
};

export default World;