"use client";
import { useEffect, useState, useContext } from "react";
import { FunDialogsContext } from "../../../context/funDialog";
import axios from "axios";
import AudioComp from "./AudioComp";

const FunDialogSpace = () => {
  const { current, setCurrent } = useContext(FunDialogsContext);
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/games/con-game/${current}`;
  const [completed, setCompleted] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        const responseData = response.data;

        // Exclude the 'class' attribute from the response
        const { class: _class, ...filteredData } = responseData;
        console.log(filteredData);
        setData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [current]);

  return (
    <div>
      <div id="questions">
        {data?.data.map((q, i) => {
          if (i <= completed) {
            return (
              <div key={i}>
                <p>{q.question}</p>
                <AudioComp url={apiUrl} current={i + 1} />
              </div>
            );
          }
        })}
      </div>

      <div id="answers">
        {data?.data[completed]?.answers?.map((answer, i) => {
          return (
            <button key={i}
              onClick={() => {
                if (answer == data.data[completed].correct) {
                  if (completed < data.data.length - 1) {
                    setCompleted(completed + 1);
                  } else {
                    setCompleted(0);
                    setCurrent(current + 1);
                  }
                }
              }}
            >
              {answer}
            </button>
          );
        })}
      </div>

      <div>Judjement Section</div>
    </div>
  );
};

export default FunDialogSpace;
