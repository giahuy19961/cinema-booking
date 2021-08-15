import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import ChartContainer from "components/Chart";

const MovieChart = () => {
  const { data } = useSelector((state) => state.listMovieReducer);
  const [listYearDat, setListYearDat] = useState([]);
  const [total, setTotal] = useState(null);

  const getYearData = (data) => {
    let ListYear = [];
    data?.map((movie, id) => {
      if (ListYear.length !== 0) {
        let index = ListYear.findIndex(
          (year) => new Date(movie.ngayKhoiChieu).getFullYear() === year.year
        );
        if (index === -1) {
          ListYear.push({
            year: new Date(movie.ngayKhoiChieu).getFullYear(),
            count: 1,
          });
        } else {
          ListYear[index].count++;
        }
      } else {
        ListYear.push({
          year: new Date(movie.ngayKhoiChieu).getFullYear(),
          count: 1,
        });
      }
    });
    const SortArr = (list) => {
      return list?.sort((a, b) => {
        return a.year - b.year;
      });
    };
    const Count = (list) => {
      return list.reduce(function (total, currentValue) {
        return (total += currentValue.count);
      }, 0);
    };
    setListYearDat(SortArr(ListYear));
    setTotal(Count(ListYear));
  };

  const getX = (listYear) => {
    let labelsX = [];
    listYear?.map((item) => {
      labelsX.push(item.year);
    });
    return labelsX;
  };
  const getY = (listYear) => {
    let valuesY = [];
    listYear?.map((item) => {
      valuesY.push(item.count);
    });
    return valuesY;
  };
  let dataChart = {
    labels: getX(listYearDat),
    datasets: [
      {
        label: "Số lượng phim",
        data: getY(listYearDat),
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
    getYearData(data);
  }, []);

  return (
    <ChartContainer name='movie' url='/admin/movie' total={total}>
      <Pie
        data={dataChart}
        options={{
          maintainAspectRatio: true,
        }}
        height={300}
      />
    </ChartContainer>
  );
};

export default MovieChart;
