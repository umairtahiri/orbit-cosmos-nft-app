"use client";

import Banner from "@/components/Banner/Banner";
import AuctionsList from "@/components/AuctionsList/AuctionsList";
import NFTValuesList from "@/components/NFTValuesList/NFTValuesList";
import CreatorsList from "@/components/CreatorsList/CreatorsList";
import { useNFTCatalogsQuery, useTopCreatorsQuery } from "../hooks/useMock";

export default function Home() {
  const { data: topCreators } = useTopCreatorsQuery({
    onError: () => console.error("Error ocurred"),
  });
  const { data: nfts } = useNFTCatalogsQuery({
    onError: () => console.error("Error ocurred"),
  });

  return (
    <main className="max-h-screen overflow-auto pb-28">
      <div className="grid gap-6 grid-cols-3 sm:grid-cols-1 md p-6">
        <section className="col-start-1 col-end-3">
          <Banner />
          <AuctionsList nfts={nfts} />
        </section>
        <section className="flex flex-col gap-y-6">
          <NFTValuesList />
          <CreatorsList topCreators={topCreators} />
        </section>
      </div>
    </main>
  );
}
