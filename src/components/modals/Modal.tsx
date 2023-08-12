import { AnimatePresence, motion } from 'framer-motion';

type modalProps = {
  isOpen: boolean;
  setIsOpen: () => void;
};

const ModalAbout = ({ isOpen, setIsOpen }: modalProps) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div
            style={{ zIndex: 9999 }}
            id="defaultModal"
            tabIndex={-1}
            aria-hidden="true"
            className="fixed top-0 left-0 right-0  flex items-center justify-center h-screen p-10 sm:p-0 transition-all duration-300"
          >
            <div style={{ zIndex: 9998 }} className="overlay"></div>
            <div style={{ zIndex: 9999 }} className="transform transition-all duration-300">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.75,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    ease: 'easeOut',
                    duration: 0.15,
                  },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.75,
                  transition: {
                    ease: 'easeIn',
                    duration: 0.15,
                  },
                }}
              >
                <div className="w-full sm:w-2/3 mx-auto bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100">
                  <div className="flex items-start justify-between p-4 rounded-t dark:border-gray-600">
                    <h3 className="text-2xl font-bold">About Me</h3>
                    <button
                      type="button"
                      onClick={() => setIsOpen()}
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                      data-modal-hide="defaultModal"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  <div className="p-6 space-y-6">
                    <p className="text-sm leading-relaxed dark:text-gray-400">
                      With less than a month to go before the European Union enacts new consumer
                      privacy laws for its citizens, companies around the world are updating their
                      terms of service agreements to comply.
                    </p>
                    <p className="text-sm leading-relaxed dark:text-gray-400">
                      The European Union’s General Data Protection Regulation (G.D.P.R.) goes into
                      effect on May 25 and is meant to ensure a common set of data rights in the
                      European Union. It requires organizations to notify users as soon as possible
                      of high-risk data breaches that could personally affect them.
                    </p>
                  </div>
                  <div className="flex items-center p-6 space-x-2 border-gray-200 rounded-b dark:border-gray-600">
                    <button
                      onClick={() => setIsOpen()}
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      I accept
                    </button>
                    <button
                      onClick={() => setIsOpen()}
                      type="button"
                      className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                    >
                      Decline
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalAbout;
