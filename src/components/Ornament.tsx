interface OrnamentProps {
  className: string;
}

const Ornament = ({ className }: OrnamentProps) => {
  return (
    <>
      <div className={`${className} ornament`}></div>
    </>
  );
};

export default Ornament;
