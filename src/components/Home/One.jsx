import './Style.css';
import { FaGreaterThan } from "react-icons/fa6";
import PropTypes from 'prop-types';

const One = ({allnews}) => {
    const national = allnews.filter(item => item.news_category === 'national');
    const allid = national.map(news => news.news_id);
    const idSorted = [...allid].sort((a, b) => b - a);
    const newsItems = idSorted.map(id => {
        return allnews.find(news => news.news_id === id);   
    });

    return (
        <div className='mt-5'>
            <hr className='line mb-1' />
            <div className='flex items-center gap-2'>
                <h1 className='text-4xl font-bold text-red-600'>National</h1>
                <div className='flex text-xl text-red-600'>
                    <FaGreaterThan />
                    <FaGreaterThan />
                </div>
            </div> 
            <hr className='line mt-1' />
            <div className='flex gap-4 mt-6'>
                <div className='flex gap-7'>
                    <div className="space-y-3 w-[50%] ">
                        <img className="w-full" src={newsItems[0].news_image} alt="" />
                        <h1 className="text-3xl w-fit hover:text-red-600 font-semibold ">{newsItems[0].news_title} </h1>
                        <p>{newsItems[0].news_details.slice(0,150)}<span className="text-xl font-semibold"> . . .</span></p>
                    </div>
                    <div>
                        {
                            [1,2,3,4].map((index)=>(
                                <div className="flex justify-between space-y-3 items-center gap-10" key={index}>
                                    <h1 className="text-xl w-fit hover:text-red-600 font-medium">{newsItems[index].news_title}</h1>
                                    <img className="w-52" src={newsItems[index].news_image} alt="" />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='space-y-5'>
                    <img src="https://i.ibb.co/h2skRGv/e6bc3f2cda90e5b6cb3df7f81c21aceb.png" alt="" />
                    <img src="https://i.ibb.co/h2skRGv/e6bc3f2cda90e5b6cb3df7f81c21aceb.png" alt="" />
                </div>
                
            </div>

            
        </div>
    );
};
One.propTypes = {
    allnews: PropTypes.string.isRequired
};

export default One;