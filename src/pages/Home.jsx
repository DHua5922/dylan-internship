import React, { useEffect } from "react";
import BrowseByCategory from "../components/home/BrowseByCategory";
import HotCollections from "../components/home/HotCollections";
import Landing from "../components/home/Landing";
import LandingIntro from "../components/home/LandingIntro";
import NewItems from "../components/home/NewItems";
import TopSellers from "../components/home/TopSellers";
import { useHotCollections } from "../hooks/collection";
import { useNewItems } from "../hooks/item";
import { useTopSellers } from "../hooks/seller";

const Home = () => {
  const { hotCollections, isLoading: isHotCollectionsLoading } = useHotCollections(); 
  const { newItems, isLoading: isNewItemsLoading } = useNewItems();
  const { topSellers, isLoading: isTopSellersLoading } = useTopSellers();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <Landing />
        <LandingIntro />
        <HotCollections list={hotCollections} isLoading={isHotCollectionsLoading} />
        <NewItems list={newItems} isLoading={isNewItemsLoading} />
        <TopSellers list={topSellers} isLoading={isTopSellersLoading} />
        <BrowseByCategory />
      </div>
    </div>
  );
};

export default Home;
