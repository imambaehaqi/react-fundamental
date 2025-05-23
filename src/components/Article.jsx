{
  /* Pembuatan Komponen */
}

function Article() {
  const name = "Hello, everybody";
  const titles = ["React.js", "Next.js", "Node.js"];

  return (
    <>
      <div>{name}</div>
      <div>
        {/* Return untuk pemanggilan satu */}
        {titles.map((title) => {
          <div>{title}</div>;
        })}
        {/* Return untuk pemanggilan banyak */}
        {titles.map((title) => {
          return (
            <>
              <div>{title}</div>
              <div>{title}</div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Article;
