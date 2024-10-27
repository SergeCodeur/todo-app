const SkeletonTaskItem = () => {
  return (
    <li className="w-full flex items-center gap-2 animate-pulse">
      <div className="w-full p-5 flex flex-1 items-center justify-start gap-3 border border-violet-200 rounded-[10px] bg-gray-200">
        <span className="bg-gray-300 w-5 h-5 rounded-sm"></span>
        <div className="h-4 bg-gray-300 rounded-md w-3/4"></div>
      </div>
      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
    </li>
  );
};

export default SkeletonTaskItem;
