import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import ChartContainer from "components/Chart";

const AccountChart = () => {
  const { data } = useSelector((state) => state.listUserReducer);
  const [dataUser, setDataUser] = useState([
    { maLoai: "Khách hàng", count: 0 },
    { maLoai: "Quản Trị", count: 0 },
  ]);
  const getAccountData = (data) => {
    let dataUpdate = [...dataUser];
    data?.map((item, index) => {
      if (item.maLoaiNguoiDung === "KhachHang") {
        dataUpdate[0].count++;
      } else {
        dataUpdate[1].count++;
      }
    });
    setDataUser(dataUpdate);
  };
  const getX = (data) => {
    let labelsX = [];
    data?.map((item) => {
      labelsX.push(item.maLoai);
    });
    return labelsX;
  };
  const getY = (data) => {
    let valuesY = [];
    data?.map((item) => {
      valuesY.push(item.count);
    });
    return valuesY;
  };

  let dataChart = {
    labels: getX(dataUser),
    datasets: [
      {
        data: getY(dataUser),
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
    getAccountData(data);
  }, []);
  return (
    <ChartContainer name='user' url='/admin/user' total={data?.length}>
      <Doughnut
        data={dataChart}
        options={{
          maintainAspectRatio: true,
        }}
        height={200}
      />
    </ChartContainer>
  );
};

export default AccountChart;
