import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

export const Allnews = createContext();
const Contex = ({children}) => { 
    const [news, setNews] = useState([]);
    useEffect(() =>{
        fetch('record.json')
        .then(res=>res.json())
        .then(data =>setNews(data))
    },[])
    const national = news.filter(item => item.news_category === 'national');
    const international = news.filter(item => item.news_category === 'international');
    const politics = news.filter(item => item.news_category === 'politics');
    const sports = news.filter(item => item.news_category === 'sports');
    const Country = news.filter(item => item.news_category === 'Country');
    const entertainment = news.filter(item => item.news_category === 'entertainment');
    const Business = news.filter(item => item.news_category === 'Business');
    const World = news.filter(item => item.news_category === 'World');
    const Science = news.filter(item => item.news_category === 'Science');
    const Tech = news.filter(item => item.news_category === 'Tech');
    const Education = news.filter(item => item.news_category === 'Education');
    const Agriculture = news.filter(item => item.news_category === 'Agriculture');
    
    const allnew_obj ={
        national,
        international,
        politics,
        sports,
        Country,
        entertainment,
        Business,
        World,
        Science,
        Tech,
        Education,
        Agriculture
    }

    return (
        <Allnews.Provider value={allnew_obj}>
            {children}
        </Allnews.Provider>
    );
};
Contex.propTypes = {
    children: PropTypes.string.isRequired
};

export default Contex;