import TOptions from "../../models/TOptions";

const Options = ({
  options,
  setOptions,
}: {
  options: TOptions;
  setOptions: (options: TOptions) => void;
}) => {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center bg-blue-500 w-56 rounded">
        <p className="text-white">Orientation</p>
        <div className="bg-white flex items-center justify-center h-24 gap-5 w-full p-2 rounded-b">
          <button
            className={`flex flex-col items-center justify-center w-24 p-2 rounded transition-all ${
              options.orientation === "portrait" && "bg-blue-300"
            }`}
            onClick={() => setOptions({ ...options, orientation: "portrait" })}
          >
            <img
              src="rounded-rectangle.png"
              alt="portrait"
              className="rotate-90 w-10"
            />
            <p className="text-sm">Portrait</p>
          </button>
          <button
            className={`flex flex-col items-center justify-center w-24 p-2 rounded transition-all ${
              options.orientation === "landscape" && "bg-blue-300"
            }`}
            onClick={() => setOptions({ ...options, orientation: "landscape" })}
          >
            <img src="rounded-rectangle.png" alt="landscape" className="w-10" />
            <p className="text-sm">Landscape</p>
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center bg-blue-500 w-56 rounded">
        <p className="text-white">Margin</p>
        <div className="bg-white flex items-center justify-center h-full gap-2 w-full p-4 rounded-b">
          {[
            {
              value: 0,
              label: "No Margin",
            },
            {
              value: 10,
              label: "Small Margin",
            },
            {
              value: 20,
              label: "Big Margin",
            },
          ].map((margin) => (
            <button
              className={`flex flex-col items-center justify-center p-2 rounded transition-all h-full w-1/3 ${
                options.margin === margin.value && "bg-blue-300"
              }`}
              onClick={() => setOptions({ ...options, margin: margin.value })}
            >
              <p className="text-sm">{margin.label}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Options;

{
  /* <a href="https://www.flaticon.com/free-icons/rounded-rectangle" title="rounded rectangle icons">Rounded rectangle icons created by Freepik - Flaticon</a> */
}
