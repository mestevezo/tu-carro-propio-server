const Modal = ({ children, visible, modalTitle }) => {
  return (
    <>
      {visible && (
        <div className="flex w-screen h-screen items-center justify-center  fixed inset-y-0 inset-x-0 z-49 p-40 bg-opacity-50 bg-gray-700">
          <div className="z-50">
            <div className="relative p-4 w-full h-full md:h-auto">
              <div className="relative bg-white rounded-lg shadow">
                <svg
                  aria-hidden="true"
                  className="mx-auto pt-4 mb-4 w-20 h-20 text-gray-400 dark:text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <h3 className="mb-5 px-6 text-lg font-normal text-gray-500 dark:text-gray-400">
                  {modalTitle}
                </h3>
                <div className="p-6 text-center">{children}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
