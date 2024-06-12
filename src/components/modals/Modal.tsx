import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

type modalProps = {
  isOpen: boolean;
  handleCloseModal: () => void;
};

const ModalAbout = ({ isOpen, handleCloseModal }: modalProps) => {
  let timeOutId: number | undefined;

  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const checkIsClickOutside = (e: any) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleCloseModal();
      }
    };

    // to handle the useEffect running before the modal is opened
    if (isOpen) {
      timeOutId = setTimeout(() => {
        document.addEventListener('click', checkIsClickOutside);
      }, 0);
    }
    return () => {
      clearTimeout(timeOutId);
      document.removeEventListener('click', checkIsClickOutside);
    };
  }, [handleCloseModal]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div
            style={{ zIndex: 9999 }}
            id="defaultModal"
            tabIndex={-1}
            aria-hidden="true"
            className="fixed top-0 left-0 right-0  flex items-center justify-center md:h-screen p-10 sm:p-0 transition-all duration-300"
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
                <div className="w-full m-0 sm:w-2/3 mx-auto bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100">
                  <div className="wrapper-content" ref={modalRef}>
                    <div className="flex items-start justify-between p-4 rounded-t dark:border-gray-600">
                      <h3 className="text-2xl font-bold dark:text-slate-100">About Me</h3>
                      <button
                        type="button"
                        onClick={handleCloseModal}
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
                      <p className="text-sm leading-relaxed dark:text-slate-50">
                        I'm a tech enthusiast who loves bringing websites to life. As a{' '}
                        <b> Frontend Developer </b>, I take pride in crafting web experiences that
                        are not only functional but also visually appealing. I'm fluent in the
                        languages of the web - HTML, CSS, and JavaScript.
                        <br />
                        <br />
                        My job is to transform design ideas into interactive and user-friendly
                        websites. I'm all about making sure that visitors to these sites have a
                        smooth and enjoyable journey. I'm dedicated to staying on top of the
                        ever-changing landscape of web development. It's an exciting journey, and
                        I'm here to make it as seamless as possible for users. So, whether you're a
                        fellow developer or someone looking to enhance their online presence, feel
                        free to connect and let's create something amazing together!
                      </p>
                    </div>
                    <div className="flex items-center p-6 space-x-2 border-gray-200 rounded-b dark:border-gray-600">
                      {/* <button
                        onClick={handleCloseModal}
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        I accept
                      </button> */}
                      <button
                        onClick={handleCloseModal}
                        type="button"
                        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                      >
                        Close
                      </button>
                    </div>
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
