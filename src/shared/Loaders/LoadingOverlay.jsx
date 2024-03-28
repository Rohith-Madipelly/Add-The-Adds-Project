const LoadingOverlay = ({ isLoading }) => {
  return (
    <div>
      {isLoading && (
        <>
          <div className="absolute top-[50%] left-[50%] w-16 h-16 border-8 border-dashed rounded-full animate-spin border-orange-500 z-50"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-30"></div>
        </>
      )}
    </div>
  );
};

export default LoadingOverlay;