import { useLoaderData } from "react-router-dom";
import One from "./One";
import World from "./World";
import Four from "./Four";
import Two from "./Two";
import Three from "./Three";
import Shortlist from "./Shortlist";


const Home = () => {
    const allnews = useLoaderData();
    const allid = allnews.map(news => news.news_id);
    const idSorted = [...allid].sort((a, b) => b - a);
    const newsItems = idSorted.map(id => {
        return allnews.find(news => news.news_id === id);   
    });
    const Tech = allnews.filter(item => item.news_category === 'Tech');
    const Education = allnews.filter(item => item.news_category === 'Education');
    const Agriculture = allnews.filter(item => item.news_category === 'Agriculture');
    const Science = allnews.filter(item => item.news_category === 'Science');
    

    

    return (
        <div className="container mx-auto mt-5">
            <div className="flex gap-4">
                <div className="grid grid-cols-2 grid-rows-3 mt-5 gap-6">
                    <div className="row-span-2 space-y-3 ">
                        <img className="w-fit" src={newsItems[0].news_image} alt="" />
                        <h1 className="text-3xl text-red-600 hover:text-red-900 font-bold ">{newsItems[0].news_title} </h1>
                        <p>{newsItems[0].news_details.slice(0,250)}<span className="text-xl font-semibold"> . . .</span></p>
                    </div>
                    <div className="row-span-2">
                        {[1,2,3].map((index) => (
                            <div className="flex mb-5 gap-3 justify-between" key={index}>
                                <div>
                                    <h1 className="text-xl hover:text-red-600  font-semibold">{newsItems[index].news_title}</h1>
                                    <p>{newsItems[index].news_details.slice(0,87)}<span className="text-xl font-semibold"> . . .</span></p>
                                </div>
                                <img className="w-40 h-28" src={newsItems[index].news_image} alt="" />
                            </div>
                        ))}
                    </div>
                    <div className="col-span-2 flex gap-16 h-fit mt-6">
                        {[4,5].map((index)=>(
                            <div className="flex w-[50%] items-center gap-10" key={index}>
                                <img className="w-52 h-32" src={newsItems[index].news_image} alt="" />
                                <h1 className="text-xl hover:text-red-600 font-medium">{newsItems[index].news_title}</h1>
                            </div>
                        ))}
                    </div>          
                </div>
                <div className=" h-full mt-5 w-[35%]">
                    <div className=""><img className="w-[100%]" src='https://i.ibb.co/HGgt0P0/7.png' alt="" /></div>
                    <div role="tablist" className="tabs tabs-lifted">
                        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" />
                        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 1</div>

                        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2" checked />
                        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2</div>
                    </div>
                </div>
            </div>
            <One allnews={allnews}></One>
            <World allnews={allnews}></World>
            <Four allnews={allnews}></Four>
            <Two allnews={allnews}></Two>
            <div className="flex gap-5">
                <Three allnews={allnews}></Three>
                <Shortlist allnews={Science}></Shortlist>
            </div>
            <div className="flex gap-6 mt-10">
                <Shortlist allnews={Tech}></Shortlist>
                <Shortlist allnews={Education}></Shortlist>
                <Shortlist allnews={Agriculture}></Shortlist>
            </div>
            
        </div>
    );
};

export default Home;

