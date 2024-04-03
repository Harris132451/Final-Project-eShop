function Promotion(props) {
  return (
    <>
      <div className="bg-red-400">
        <div>Temperature: {props.temperature}°C</div>
        <div>Reference location: {props.location}</div>
        <div>Updated at: {props.updateTime}</div>
      </div>
    </>
  );
}

export default Promotion;
