import { NextPage } from "next";

type TopicPageProps = {
  params: { topicSlug: string };
};

const TopicPage: NextPage<TopicPageProps> = ({ params }) => {
  const { topicSlug } = params;

  return (
    <div className="flex flex-col px-6">
      <h1 className="text-5xl">Topic Page for {topicSlug}</h1>
    </div>
  );
};

export default TopicPage;
