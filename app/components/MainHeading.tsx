const MainHeading = ({ title }: { title: string }) => {
  return (
    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-5">
      {title}
    </h2>
  );
};

export default MainHeading;
