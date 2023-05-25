const EventC: React.FC = () => {
  //The type of e was inferrable in <input> jsx, but not here. So we need to provide it ourselves.
  const onChange = (e: React.InputHTMLAttributes<HTMLInputElement>) => {
    console.log("AA", e);
  };
  const onDragStart = (e: React.InputHTMLAttributes<HTMLInputElement>) => {
    console.log("I'm being dragged: ", e);
  };
  return (
    <div>
      Events
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag Me!
      </div>
    </div>
  );
};

export default EventC;
