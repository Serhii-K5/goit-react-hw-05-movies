import { useTrendingList } from '../utils/hooks/useTrendingList';
import { TrendingList } from 'components/TrendingList/TrendingList';

const HomePage = () => {

  const { trendingMovies }  = useTrendingList();
  return (
    <div>
      <h2>Trending today</h2>
      <TrendingList movies={trendingMovies} />
    </div>
  );
}
export default HomePage;