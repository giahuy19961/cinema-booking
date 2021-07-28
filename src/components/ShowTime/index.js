import CinemaCard from "components/Card/CinemaCard";
import { CardShow } from "components/Card/MovieShowCard/styles";
import { ListMoviesDetail } from "./styles";
import {
  Header,
  Logo,
  TheatersContainer,
  TheaterTime,
  TheaterTimeNav,
  TheaterWrap,
} from "components/Theaters/styles";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";

const ShowTime = () => {
  // router
  const history = useHistory();
  // Global redux state
  const { heThongRapChieu } = useSelector(
    (state) => state.listShowMovieReducer.data
  );

  // Local state
  const [theater, setTheater] = useState();
  const [cinema, setCinema] = useState();
  const [date, setDate] = useState("1/1/2019");
  const listNavDay = [
    "1/1",
    "2/1",
    "3/1",
    "4/1",
    "5/1",
    "6/1",
    "7/1",
    "8/1",
    "9/1",
    "10/1",
  ];

  // func logical
  const hanldeSetCinema = (cinema) => {
    setDate("1/1/2019");
    setCinema(cinema);
  };
  const setDefaultCinema = (theater) => {
    return heThongRapChieu?.map((heThongRap) => {
      if (heThongRap.maHeThongRap === theater) {
        setCinema(heThongRap.cumRapChieu[0].maCumRap);
      }
    });
  };
  // func render
  const renderTheater = () => {
    return heThongRapChieu?.map((heThongRap, index) => {
      return (
        <div className='col '>
          <Logo
            type='button'
            key={index}
            logo={heThongRap.logo}
            onClick={() => {
              setDate("1/1/2019");
              setTheater(heThongRap.maHeThongRap);
            }}
          />
        </div>
      );
    });
  };
  const renderCinema = () => {
    return heThongRapChieu?.map((heThongRap, index) => {
      if (heThongRap.maHeThongRap === theater) {
        return heThongRap.cumRapChieu.map((cumRap, index) => {
          return (
            <CinemaCard
              key={index}
              cinema={cumRap}
              setCinema={hanldeSetCinema}
            />
          );
        });
      }
    });
  };
  const renderTimeNav = () => {
    return listNavDay.map((day, index) => {
      return (
        <TheaterTime
          type='button'
          key={index}
          active={`${day}/2019` === date}
          onClick={() => {
            setDate(`${day}/2019`);
          }}
        >
          {day}
        </TheaterTime>
      );
    });
  };
  const renderListShow = () => {
    // let dataDate = "";
    return heThongRapChieu?.map((heThongRap) => {
      if (heThongRap.maHeThongRap === theater) {
        return heThongRap.cumRapChieu.map((cumRap) => {
          if (cumRap.maCumRap === cinema) {
            return cumRap.lichChieuPhim.map((lichChieu, index) => {
              const currentDay = new Date(
                lichChieu.ngayChieuGioChieu
              ).toLocaleDateString();
              if (currentDay === date) {
                // if (dataDate !== currentDay) {
                // dataDate = currentDay;
                const hour = new Date(lichChieu.ngayChieuGioChieu).getHours();
                const minute = new Date(
                  lichChieu.ngayChieuGioChieu
                ).getMinutes();

                return (
                  <CardShow
                    key={index}
                    as={Link}
                    to={`/ticket/${lichChieu.maLichChieu}`}
                  >
                    {hour}:{minute}
                  </CardShow>
                );
                // }
              }
            });
          }
        });
      }
    });
  };
  useEffect(() => {
    if (heThongRapChieu === undefined) {
      console.log(heThongRapChieu);
      return <Redirect to='/' />;
    } else {
      setTheater(heThongRapChieu[0].maHeThongRap);
    }
  }, [heThongRapChieu]);
  useEffect(() => {
    setDefaultCinema(theater);
  }, [theater]);
  return (
    <TheaterWrap>
      <Header className='mt-5' id='lich-chieu'>
        Chọn lịch chiếu
      </Header>
      <TheatersContainer>
        <div className='row'>{renderTheater()}</div>
        <div className='row'>
          <div className='col-4' style={{ borderLeft: "1px solid #ccc" }}>
            {renderCinema()}
          </div>
          <div className='col-8'>
            <TheaterTimeNav>{renderTimeNav()}</TheaterTimeNav>
            <ListMoviesDetail>{renderListShow()}</ListMoviesDetail>
          </div>
        </div>
      </TheatersContainer>
    </TheaterWrap>
  );
};

export default ShowTime;
