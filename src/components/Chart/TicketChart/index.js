import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import ChartContainer from "components/Chart";
import { listShowByTheaterApi } from "app/redux/reducer/listShowByTheater";

const TicketChart = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.listTheatersReducer);
  const [heThong, setHeThong] = useState([]);
  const [total, setTotal] = useState(null);
  const getTheatersList = async () => {
    let updateTheatersList = [];
    data?.map((item, index) => {
      dispatch(listShowByTheaterApi(item.maHeThongRap))
        .then((res) => {
          const total = res.payload[0].lstCumRap.reduce(
            (totalCumRap, cumRap) => {
              return (totalCumRap += cumRap.danhSachPhim.reduce(
                (totalPhim, phim) => {
                  return (totalPhim += phim.lstLichChieuTheoPhim.length);
                },
                0
              ));
            },
            0
          );
          updateTheatersList.push({
            maHT: item.tenHeThongRap,
            count: total,
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
        label: "Lịch chiếu",
        data: getY(heThong),
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)",
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
    <ChartContainer name='show id' url='/dashboard' total={total}>
      <Line
        data={dataChart}
        style={{ maxHeight: "232px" }}
        options={{
          maintainAspectRatio: true,
        }}
      />
    </ChartContainer>
  );
};

export default TicketChart;
