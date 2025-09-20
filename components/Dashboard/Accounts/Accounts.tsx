import Header from "@/components/Dashboard/Accounts/Header";
import TransactionFilter from "@/components/Dashboard/Accounts/TransactionFilter";
import Summary from "@/components/Dashboard/Accounts/Summary";
import DetailsCard from "@/components/Dashboard/Accounts/DetailsCard";
import FixedTrade from "./FixedTrade";

export default function Accounts() {
  return (
    <div className="min-h-[calc(100vh-130px)] pb-[45px]">
      <div className="max-container">
        <Header />
        <TransactionFilter />
        <Summary />
        <DetailsCard />
      </div>

      <FixedTrade/>
    </div>
  );
}
