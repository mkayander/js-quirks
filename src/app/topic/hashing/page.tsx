import { HashCircleView } from "@/components/molecules/HashCircle/HashCircleView";
import { NextPage } from "next";

type TopicPageProps = {};

const HashingPage: NextPage<TopicPageProps> = () => {
  return (
    <div className="flex flex-col items-center px-6">
      <h1 className="mb-12 text-center text-5xl">Consistent Hashing</h1>

      <HashCircleView />
    </div>
  );
};

export default HashingPage;
