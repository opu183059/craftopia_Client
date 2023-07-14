/* eslint-disable react/no-unescaped-entities */
const Details = () => {
  return (
    <div>
      <div className="md:max-w-6xl max-w-5xl mx-auto pt-10">
        <h1 className="mb-5 text-blue-600 font-semibold text-xl">
          How to Process
        </h1>
        <div className="w-full flex relative">
          <div className="md:w-7/12 mx-auto md:mx-0 w-10/12 flex items-center gap-4 p-4 bg-gray-50 border-2 border-blue-500 rounded-lg shadow-lg shadow-blue-200 hover:shadow-blue-300 z-20">
            <div className="left">
              <img
                src="https://www.craftykitcompany.co.uk/cdn/shop/articles/Blog_posts_7_1024x768.png?v=1628687000"
                alt=""
                className="md:w-40 md:h-40"
              />
            </div>
            <div className="right text-left">
              <h1 className="text-blue-600 font-semibold md:text-xl">
                Submit Your Tutor Request
              </h1>
              <p className="text-sm">
                Fill out all the required fields and submit your request.
              </p>
            </div>
          </div>
          <div className="w-7/12 rounded-[80px] hidden md:block absolute right-60 -bottom-36 border-t-4 border-r-4 h-60 border-blue-400"></div>
        </div>
        <div className="w-full flex md:justify-end my-16 relative">
          <div className="md:w-7/12 w-10/12 flex items-center gap-4 p-4 bg-gray-50 border-2 border-blue-500 rounded-lg shadow-lg shadow-blue-200 hover:shadow-blue-300 z-10 mx-auto md:mx-0">
            <div className="left">
              <img
                src="https://www.craftykitcompany.co.uk/cdn/shop/articles/Blog_posts_7_1024x768.png?v=1628687000"
                alt=""
                className="md:w-40 md:h-40"
              />
            </div>
            <div className="right text-left">
              <h1 className="text-blue-600 font-semibold md:text-xl">
                Get the Maximum 5 Best Tutor CVs
              </h1>
              <p className="text-sm">
                Within 48 hours, you'll get up to 5 CVs of the best tutors who
                applied to your posted job.
              </p>
            </div>
          </div>
          <div className="w-7/12 rounded-[80px] hidden md:block absolute right-60 -bottom-36 border-t-4 border-l-4 h-60 border-blue-400"></div>
        </div>
        <div className="w-full flex">
          <div className="md:w-7/12 w-10/12 flex items-center gap-4 p-4 bg-gray-50 border-2 border-blue-500 rounded-lg shadow-lg shadow-blue-200 hover:shadow-blue-300 z-10 mx-auto md:mx-0">
            <div className="left">
              <img
                src="https://www.craftykitcompany.co.uk/cdn/shop/articles/Blog_posts_7_1024x768.png?v=1628687000"
                alt=""
                className="md:w-40 md:h-40"
              />
            </div>
            <div className="right text-left">
              <h1 className="text-blue-600 font-semibold md:text-xl">
                Select the Best One & Start Learning
              </h1>
              <p className="text-sm">
                Select a tutor from the shortlist and take trial classes to
                confirm your tutor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
