import Dropdown from './dropdown';

const search = () => {
  return (
    <div className="container absolute bottom-[-10px] w-full">
      <section className="">
        <div className="bg-red-600 p-10">
          <div className="grid grid-cols-4 gap-5">
            <Dropdown />
            <Dropdown />
            <Dropdown />
            <Dropdown />
            <Dropdown />
            <Dropdown />
            <Dropdown />
          </div>
        </div>
      </section>
    </div>
  );
};

export default search;
