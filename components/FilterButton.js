export default function FilterButton({ name, handleSetTag, tagActive }) {
  return (
    <div
      className={`text-gray-100 font-semibold cursor-pointer hover:text-primary ${
        tagActive ? "text-primary" : null
      }`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </div>
  );
}
