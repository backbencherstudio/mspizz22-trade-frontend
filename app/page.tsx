import Header from "@/components/Dashboard/Home/Header";
import TransactionFilter from "@/components/Dashboard/Home/TransactionFilter";
import Summary from "@/components/Dashboard/Home/Summary";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-130px)] pb-[45px]">
      <div className="max-container">
        <Header />
        <TransactionFilter />
        <Summary />
      </div>

      <div className="fixed bottom-0 left-0 h-10 w-full bg-green-500">
        Bottom Fixed Part is here
      </div>
    </div>
  );
}
