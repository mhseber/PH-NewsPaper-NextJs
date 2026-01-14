import BreakingNews from "./home/BreakingNews";
import FeaturedHeadlines from "./home/FeaturedHeadlines";
import Trending from "./home/Trending";




export default function Home() {
  return (
    <div className="bg-white"> 
     <Trending />
     <BreakingNews />
     <FeaturedHeadlines />
    </div>
  );
}
