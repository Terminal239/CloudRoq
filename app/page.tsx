import Header from "@/components/Header";
import PortfolioChart from "@/components/PortfolioChart";
import Statistics from "@/components/Statistics";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-16">
        <PortfolioChart />
        <Statistics />
      </main>
    </>
  );
}
