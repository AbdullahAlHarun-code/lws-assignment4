import thumb_lg from "../assets/thumb_lg.png";
import thumb from "../assets/thumb.png";
import { useContext } from "react";
import { NewsContex } from "../context";
import { timeAgo } from "../utils/date-util";
import { shortenText } from "../utils/short-text";

export default function NewsPanel() {
  const { newsData } = useContext(NewsContex);
  return (
    <>
      <main className="my-10 lg:my-14">
        <div className="container mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
            <div className="col-span-12 grid grid-cols-12 gap-4">
              {newsData.slice(1, 2).map((news, index) => (
                <>
                  <div key={index} className="col-span-12 lg:col-span-4">
                    <a href="#">
                      <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                        {news.title}
                      </h3>
                    </a>
                    <p className="text-base text-[#5C5955]">
                      {shortenText(news.content, 150)}
                    </p>
                    <p className="mt-5 text-base text-[#5C5955]">
                      {timeAgo(news.publishedAt)}
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-8">
                    <img className="w-full" src={news.urlToImage} alt="thumb" />
                    <p className="mt-5 text-base text-[#5C5955]">
                      {news.source.name}: {news.author}
                    </p>
                  </div>
                </>
              ))}
            </div>

            <div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8">
              {newsData.slice(2, 3).map((news, index) => (
                <>
                  <div className="col-span-12 md:col-span-6">
                    <a href="">
                      <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                        {news.title}
                      </h3>
                    </a>
                    <p className="text-base text-[#292219]">
                      {news.description}
                    </p>
                    <p className="mt-5 text-base text-[#5C5955]">
                      {timeAgo(news.publishedAt)}
                    </p>
                  </div>

                  <div className="col-span-12 md:col-span-6">
                    <img className="w-full" src={news.urlToImage} alt="thumb" />
                  </div>
                </>
              ))}
            </div>
            {newsData.slice(4, newsData.length - 8).map((news, index) => (
              <>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <div className="col-span-12 md:col-span-4">
                    <a href="#">
                      <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                        {news.title}
                      </h3>
                    </a>
                    <p className="text-base text-[#292219]">
                      {shortenText(news.content, 150)}
                    </p>
                    <p className="mt-5 text-base text-[#94908C]">
                      {timeAgo(news.publishedAt)}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>

          <div className="col-span-12 self-start xl:col-span-4">
            <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
              {newsData
                .slice(newsData.length - 8, newsData.length - 7)
                .map((news, index) => (
                  <>
                    <div className="col-span-12 mb-6 md:col-span-8">
                      <img className="w-full" src={news.urlToImage} alt="thumb" />

                      <div className="col-span-12 mt-6 md:col-span-4">
                        <a href="#">
                          <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                            {news.title}
                          </h3>
                        </a>
                        <p className="text-base text-[#292219]">
                          {shortenText(news.content, 70)}
                        </p>
                        <p className="mt-5 text-base text-[#94908C]">
                          {timeAgo(news.publishedAt)}
                        </p>
                      </div>
                    </div>
                  </>
                ))}
              {newsData.slice(newsData.length-7).map((news, index) => (
              <>
              <div className="col-span-12 md:col-span-8">
                <div className="col-span-12 md:col-span-4">
                  <a href="#">
                    <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                      {news.title}
                    </h3>
                  </a>
                  <p className="text-base text-[#292219]">
                    {shortenText(news.content, 70)}
                  </p>
                  <p className="mt-5 text-base text-[#94908C]">{timeAgo(news.publishedAt)}</p>
                </div>
              </div>
              </>
               ))}
              
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
