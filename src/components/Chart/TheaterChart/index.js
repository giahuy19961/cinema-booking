import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import ChartContainer from "components/Chart";
import { listCinemaById } from "app/redux/reducer/listCinema";

const TheaterChart = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.listTheatersReducer);
  const [heThong, setHeThong] = useState([]);
  const [total, setTotal] = useState(null);
  const getTheatersList = async () => {
    let updateTheatersList = [];
    data?.map((item, index) => {
      dispatch(listCinemaById(item.maHeThongRap))
        .then((res) => {
          updateTheatersList.push({
            maHT: item.tenHeThongRap,
            count: res.payload.length,
          });

          if (updateTheatersList.length === data.length) {
            setHeThong(updateTheatersList);
            setTotal(
              updateTheatersList.reduce((total, item) => {
                return (total += item.count);
              }, 0)
            );
          }
        })
        .catch((err) => console.log(err));
    });
  };

  const getX = (list) => {
    let labelsX = [];
    list?.map((item) => {
      labelsX.push(item.maHT);
    });
    return labelsX;
  };
  const getY = (list) => {
    let valuesY = [];
    list?.map((item) => {
      valuesY.push(item.count);
    });
    return valuesY;
  };
  let dataChart = {
    labels: getX(heThong),
    datasets: [
      {
        label: "Cinema",
        data: getY(heThong),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    getTheatersList(data);
  }, [data]);
  return (
    <ChartContainer name='Cinema' url='/dashboard' total={total}>
      <Bar
        data={dataChart}
        style={{ maxHeight: "232px" }}
        options={{
          maintainAspectRatio: true,
        }}
      />
    </ChartContainer>
  );
};

export default TheaterChart;
