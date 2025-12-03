import { onBoardUser } from "@/modules/auth/actions";
import { UserButton } from "@clerk/nextjs";

const Home = async () => {
  await onBoardUser();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <UserButton />
    </div>
  );
};

export default Home;
