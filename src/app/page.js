import BreakingNews from "./home/BreakingNews";
import FeaturedHeadlines from "./home/FeaturedHeadlines";
import LatestNewsFeed from "./home/LatestNewsFeed";
import Trending from "./home/Trending";




export default function Home() {
  return (
    <div className="bg-white"> 
     <Trending />
     <BreakingNews />
     <FeaturedHeadlines />
     <LatestNewsFeed />
    </div>
  );
}
