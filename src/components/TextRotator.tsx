interface ITextRotator {
  sequences: string[];
}
export default function TextRotator({ sequences }: ITextRotator) {
  return (
    <p className="textRotator">
      <span className="textRotator__pre">I am</span>
      <div className="textRotator__inner">
        <span>
          {sequences.map((item, key) => {
            return (
              <>
                {item}
                <br />
              </>
            );
          })}
        </span>
      </div>
    </p>
  );
}
