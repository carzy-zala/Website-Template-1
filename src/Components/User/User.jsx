import { useNavigate, useParams } from "react-router-dom";

const User = () => {
  const { id, name } = useParams();
  const navigate = useNavigate();

  const handleGit = ()=>{navigate("/github")}
  const handleHome = ()=>{navigate("/")}

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="bg-green-400 p-10 rounded-lg text-3xl text-center mt-10">
          <h1 className="leading-10 ">{`Welcome ${name.toUpperCase()}`}</h1>
          <h1 className="leading-10 ">{`Your user Id is : ${id}`}</h1>
        </div>

        <div>
          <button
           onClick={handleHome}
            className="bg-red-500 hover:bg-red-600 m-3 px-6 py-2 text-white rounded-md"
          >
            Go Back To Home
          </button>
          <button
            onClick={handleGit}
            className="bg-red-500 hover:bg-red-600 m-3 px-6 py-2 text-white rounded-md"
          >
            Go Back To Github
          </button>
        </div>
      </div>
    </>
  );
};

export default User;
