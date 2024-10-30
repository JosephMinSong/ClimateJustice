export default function Team() {
    return (
      <>
        <div className="mx-auto my-14 text-center md:max-w-xl lg:max-w-3xl">
          <h3 className="mb-6 text-3xl font-bold">The Team</h3>
        </div>
  
        <div className="grid text-center w-1/2 mx-auto md:grid-cols-3 lg:gap-1">
          <div className="mb-12 md:mb-0">
            <div className="mb-6 flex justify-center">
              <img
                src="/headshots/jeff.jpg"
                className="w-32 rounded-full shadow-lg dark:shadow-black/30"
                alt="Jeff Huang"
              />
            </div>
            <h5 className="mb-4 text-xl font-semibold">Jeff Huang</h5>
            <h6 className="mb-4 font-semibold text-primary dark:text-primary-400">Software Engineer</h6>
            <p className="mb-4 text-neutral-600 dark:text-neutral-300">
            </p>
          </div>
  
          <div className="mb-12 md:mb-0">
            <div className="mb-6 flex justify-center">
              <img
                src="/headshots/payal.jpg"
                className="w-32 rounded-full shadow-lg dark:shadow-black/30"
                alt="Payal Chavan"
              />
            </div>
            <h5 className="mb-4 text-xl font-semibold">Payal Chavan</h5>
            <h6 className="mb-4 font-semibold text-primary dark:text-primary-400">Data Scientist</h6>
            <p className="mb-4 text-neutral-600 dark:text-neutral-300">
            </p>
          </div>
  
          <div className="mb-0">
            <div className="mb-6 flex justify-center">
              <img
                src="/headshots/joseph.jpg"
                className="w-32 rounded-full shadow-lg dark:shadow-black/30"
                alt="Joseph Song"
              />
            </div>
            <h5 className="mb-4 text-xl font-semibold">Joseph Song</h5>
            <h6 className="mb-4 font-semibold text-primary dark:text-primary-400">Software Engineer</h6>
            <p className="mb-4 text-neutral-600 dark:text-neutral-300">
            </p>
          </div>
        </div>
      </>
    );
};