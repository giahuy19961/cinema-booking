import { listCinemaById } from "app/redux/reducer/listCinema";
import { listShowByTheaterApi } from "app/redux/reducer/listShowByTheater";
import { listTheatersApi } from "app/redux/reducer/listTheaters";
import CinemaCard from "components/Card/CinemaCard";
import MovieShowCard from "components/Card/MovieShowCard";
import Footer from "components/Footer";
import {
  ListDetailCinema,
  ListDetailTheater,
  ListMoviesDetail,
} from "components/ShowTime/styles";

import {
  Header,
  ListCinema,
  ListMovies,
  Logo,
  MenuTheater,
  TheatersContainer,
  TheaterTime,
  TheaterTimeNav,
  TheaterWrap,
} from "components/Theaters/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TheaterMobileCinema,
  TheaterMobileWrap,
  TheatersMobileContainer,
} from "./style";

const TheaterPage = () => {
  const dispatch = useDispatch();
  const listTheaters = useSelector((state) => state.listTheatersReducer.data);
  const listShowByTheater = useSelector(
    (state) => state.listShowByTheaterReducer.data
  );

  //Local State
  const [theater, setTheater] = useState("");
  const [cinema, setCinema] = useState("");
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
  // Handle
  const hanldeSetCinema = (cinema) => {
    setDate("1/1/2019");
    setCinema(cinema);
  };
  //render
  const renderListTheaters = () => {
    return listTheaters?.map((theater, index) => {
      return (
        <Logo
          type='button'
          key={index}
          logo={theater.logo}
          onClick={() => {
            setDate("1/1/2019");
            setTheater(theater.maHeThongRap);
          }}
        />
      );
    });
  };
  const renderListCinema = () => {
    if (listShowByTheater !== null) {
      return listShowByTheater[0].lstCumRap.map((cinema, index) => {
        return (
          <CinemaCard
            type='button'
            setCinema={hanldeSetCinema}
            key={index}
            cinema={cinema}
          />
        );
      });
    }
  };
  const renderListShowTime = () => {
    let dataDate = "";
    if (listShowByTheater !== null) {
      return listShowByTheater[0].lstCumRap.map((item, index) => {
        if (item.maCumRap === cinema) {
          return item.danhSachPhim.map((phim, index) => {
            return phim.lstLichChieuTheoPhim.map((lich, index) => {
              const currentDay = new Date(
                lich.ngayChieuGioChieu
              ).toLocaleDateString();
              if (currentDay === date) {
                if (dataDate !== currentDay) {
                  dataDate = currentDay;
                  return <MovieShowCard key={index} phim={phim} date={date} />;
                }
              }
            });
          });
        }
      });
    }
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

  // Effect
  useEffect(() => {
    if (listTheaters !== null) setTheater(listTheaters[0].maHeThongRap);
  }, [listTheaters]);

  useEffect(() => {
    if (listShowByTheater !== null) {
      setCinema(listShowByTheater[0].lstCumRap[0].maCumRap);
    }
  }, [listShowByTheater]);

  useEffect(() => {
    dispatch(listCinemaById(theater));
    dispatch(listShowByTheaterApi(theater));
  }, [theater]);

  useEffect(() => {
    dispatch(listTheatersApi());
  }, []);
  return (
    <TheaterMobileWrap>
      <Header className='mt-5' id='lich-chieu'>
        Chọn lịch chiếu
      </Header>
      <TheatersMobileContainer>
        <ListDetailTheater className='row'>
          {renderListTheaters()}
        </ListDetailTheater>
        <div className='container mt-3 mb-5 '>
          <TheaterMobileCinema>{renderListCinema()}</TheaterMobileCinema>
        </div>

        <TheaterTimeNav className='row' style={{ gap: "30px" }}>
          {renderTimeNav()}
        </TheaterTimeNav>

        <div className='row'>
          <div className='col-12'>
            <ListMoviesDetail>{renderListShowTime()}</ListMoviesDetail>
          </div>
        </div>
      </TheatersMobileContainer>
    </TheaterMobileWrap>
  );
};

export default TheaterPage;
