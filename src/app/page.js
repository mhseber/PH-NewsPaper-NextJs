import BreakingNews from "./home/BreakingNews";
import Trending from "./home/Trending";




export default function Home() {
  return (
    <div className="bg-gray-200"> 
     <Trending />
     <BreakingNews />
    </div>
  );
}
