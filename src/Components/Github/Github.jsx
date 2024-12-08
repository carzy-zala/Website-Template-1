import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Github = () => {
  const [username, setUsername] = useState("");
  const [data, setData] = useState([]);
  const [isUser, setIsUser] = useState(false);
  const [user, setUser] = useState({
    desirename: "",
    id: "",
  });
  const navigate = useNavigate();

  const getUser = () => {
    fetch(`https://api.github.com/users/${username ? username : "carzy-zala"}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        data.login ? setIsUser(true) : console.log(data);
      });
  };

  const getPage = () => {
    navigate(
      `/user/${user.id ? user.id : 123}/${
        user.desirename ? user.desirename : "unknown"
      }`
    );
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    console.log(`${name}${value}`);
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="flex flex-col p-10 items-center">
        <div>
          <input
            value={username}
            className="pl-2 pr-6 border-2 border-gray-300 rounded-md py-2 w-72"
            onChange={(e) => {
              setIsUser(false);
              setUsername(e.target.value);
            }}
            type="text"
            placeholder="Enter your github username ....."
          />
          <button
            className="bg-red-500 px-6 py-2 outline-none text-white  rounded-md ml-2 border-none hover:bg-red-600 "
            onClick={getUser}
          >
            Get
          </button>
        </div>
        {isUser && (
          <div className="flex items-center gap-10 mt-10">
            <div>
              <img src={data.avatar_url} width="200" className="rounded-full" />
            </div>
            <div>
              <div className="flex ">
                <h1 className="text-3xl ">Your followers are : </h1>
                <h1 className="text-3xl ml-2 text-red-500">{data.followers}</h1>
              </div>
              <div className="flex ">
                <h1 className="text-3xl ">Your repos are : </h1>
                <h1 className="text-3xl ml-2 text-red-500">
                  {data.public_repos}
                </h1>
              </div>
            </div>
          </div>
        )}

        <div>
          <h1 className="mt-10 text-3xl ">Get your personal page</h1>
          <div className="flex mt-10  gap-2 flex-col">
            <input
              type="text"
              className="pl-2 pr-6 border-2 border-gray-300 rounded-md py-2 "
              placeholder="Enter your desired name ..."
              name="desirename"
              value={user.desirename}
              onChange={handleInput}
            />
            <input
              type="number"
              className="pl-2 pr-6 border-2 border-gray-300 rounded-md py-2 "
              placeholder="Enter your desired id ..."
              name="id"
              value={user.id}
              onChange={handleInput}
            />
            <button
              onClick={getPage}
              className="bg-red-500 px-6 py-2 outline-none text-white  rounded-md border-none hover:bg-red-600 "
            >
              Get User Page
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Github;
