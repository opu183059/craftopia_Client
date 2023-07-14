/* eslint-disable react/no-unescaped-entities */
const Details = () => {
  return (
    <div>
      <div className="md:max-w-6xl max-w-5xl mx-auto pt-10 pb-12">
        <h1 className="mb-7 text-blue-600 dark:text-blue-400 font-semibold font-akaya text-3xl text-center">
          How to Process
        </h1>
        <div className="w-full flex relative">
          <div className="md:w-7/12 mx-auto md:mx-0 w-10/12 flex items-center gap-4 p-4 bg-gray-50 dark:bg-blue-950 border-2 border-blue-500 rounded-lg shadow-lg shadow-blue-200 dark:shadow-blue-700 hover:shadow-blue-300 z-20">
            <div className="left">
              <img
                src="https://www.thebestideasforkids.com/wp-content/uploads/2021/01/Crafts-for-Kids-Kits.jpg"
                alt=""
                className="md:w-40 md:h-40"
              />
            </div>
            <div className="right text-left">
              <h1 className="text-blue-600 dark:text-blue-400 font-semibold md:text-xl">
                Search the class
              </h1>
              <p className="text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                quam?
              </p>
            </div>
          </div>
          <div className="w-7/12 rounded-[80px] hidden md:block absolute right-60 -bottom-36 border-t-4 border-r-4 h-60 border-blue-400"></div>
        </div>
        <div className="w-full flex md:justify-end my-16 relative">
          <div className="md:w-7/12 w-10/12 flex items-center gap-4 p-4 bg-gray-50 dark:bg-blue-950 border-2 border-blue-500 rounded-lg shadow-lg shadow-blue-200 dark:shadow-blue-700 hover:shadow-blue-300 z-10 mx-auto md:mx-0">
            <div className="left">
              <img
                src="https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dw33e98ff0/images/Ideas/kids/main/ideas_main_five-cheap-and-easy-crafts-for-kids.jpg?sw=680&q=85"
                alt=""
                className="md:w-40 md:h-40"
              />
            </div>
            <div className="right text-left">
              <h1 className="text-blue-600 dark:text-blue-400 font-semibold md:text-xl">
                Select and pay
              </h1>
              <p className="text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officiis a
              </p>
            </div>
          </div>
          <div className="w-7/12 rounded-[80px] hidden md:block absolute right-60 -bottom-36 border-t-4 border-l-4 h-60 border-blue-400"></div>
        </div>
        <div className="w-full flex">
          <div className="md:w-7/12 w-10/12 flex items-center gap-4 p-4 bg-gray-50 dark:bg-blue-950 border-2 border-blue-500 rounded-lg shadow-lg shadow-blue-200 dark:shadow-blue-700 hover:shadow-blue-300 z-10 mx-auto md:mx-0">
            <div className="left">
              <img
                src="https://www.craftykitcompany.co.uk/cdn/shop/articles/Blog_posts_7_1024x768.png?v=1628687000"
                alt=""
                className="md:w-40 md:h-40"
              />
            </div>
            <div className="right text-left">
              <h1 className="text-blue-600 dark:text-blue-400 font-semibold md:text-xl">
                Enjoy it on Dashboard
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
