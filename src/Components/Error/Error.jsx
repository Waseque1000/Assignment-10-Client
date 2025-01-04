import img from "../../assets/404-error-with-portals-concept-illustration_114360-7870.avif";

const Error = () => {
  return (
    <div
      className="h-screen bg-no-repeat  bg-center flex flex-col justify-end"
      style={{ backgroundImage: `url(${img})` }}
    ></div>
  );
};

export default Error;
