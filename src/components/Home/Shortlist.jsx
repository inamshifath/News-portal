import { FaGreaterThan } from "react-icons/fa6";
import PropTypes from 'prop-types';
import './Style.css';

const Shortlist = ({allnews}) => {
    const allid = allnews.map(news => news.news_id);
    const idSorted = [...allid].sort((a, b) => b - a);
    const newsItems = idSorted.map(id => {
        return allnews.find(news => news.news_id === id);   
    });
    
    return (
        <div className="w-[30%]">
            <div className='flex mb-1 items-center gap-2'>
                <h1 className='text-4xl font-bold text-red-600'>{newsItems[0].news_category}</h1>
                <div className='flex text-xl text-red-600'>
                    <FaGreaterThan />
                    <FaGreaterThan />
                </div>
            </div>
            <hr className="mb-1 line" />
            <hr className="line" />
            <div className="relative h-72 flex items-end mt-3 mb-5 bg-cover bg-center"  style={{ backgroundImage: `url(${newsItems[0].news_image})` }}>
                <h1 className="text-xl text-yellow-50 font-semibold z-10 liner">{newsItems[0].news_title}</h1>
            </div>
            {
                [1,2,3,4].map((index)=>(
                    <div className="ml-3 mb-4 flex items-center" key={index}>
                        <img className="w-28 mr-3 h-16" src={newsItems[index].news_image} alt="" /> 
                        <h1 className="text-xl w-fit hover:text-red-600 font-medium">{newsItems[index].news_title}</h1>
                    </div>
                ))
            }
        </div>
    );
};
Shortlist.propTypes = {
    allnews: PropTypes.string.isRequired
};

export default Shortlist;