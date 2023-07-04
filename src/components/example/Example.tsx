const Example = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <>
      <div className="text-4xl text-green">{title}</div>
      <div className="text-2xl">{subtitle}</div>
    </>
  )
}

export default Example;
