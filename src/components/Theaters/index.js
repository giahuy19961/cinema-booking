import { listCinemaById } from "app/redux/reducer/listCinema";
import { listShowByTheaterApi } from "app/redux/reducer/listShowByTheater";
import CinemaCard from "components/Card/CinemaCard";
import MovieShowCard from "components/Card/MovieShowCard";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Header,
  TheatersContainer,
  MenuTheater,
  ListCinema,
  Logo,
  ListMovies,
  TheaterWrap,
} from "./styles";

const Theaters = () => {
  // get GlobalState ListTheaters
  const dispatch = useDispatch();
  const listTheaters = useSelector((state) => state.listTheatersReducer.data);
  const listShowByTheater = useSelector(
    (state) => state.listShowByTheaterReducer.data
  );

  //Local State
  const [theater, setTheater] = useState("");
  const [cinema, setCinema] = useState("");

  // Handle

  //render
  const renderListTheaters = () => {
    return listTheaters?.map((theater, index) => {
      return (
        <Logo
          type='button'
          key={index}
          logo={theater.logo}
          onClick={() => {
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
            onClick={() => setCinema(cinema.maCumRap)}
            key={index}
            cinema={cinema}
          />
        );
      });
    }
  };
  const renderListShowTime = () => {
    if (listShowByTheater !== null) {
      console.log(listShowByTheater);
      return listShowByTheater[0].lstCumRap.map((item, index) => {
        if (item.maCumRap === cinema) {
          return item.danhSachPhim.map((phim, index) => {
            console.log(phim, cinema);
          });
        }
      });
    }
  };
  useEffect(() => {
    if (listTheaters !== null) setTheater(listTheaters[0].maHeThongRap);
  }, [listTheaters]);

  useEffect(() => {
    if (listShowByTheater !== null)
      setCinema(listShowByTheater[0].lstCumRap[0].maCumRap);
  }, [listShowByTheater]);

  useEffect(() => {
    dispatch(listCinemaById(theater));
    dispatch(listShowByTheaterApi(theater));
  }, [theater]);
  return (
    <TheaterWrap>
      <Header>Hệ Thống Rạp</Header>
      <TheatersContainer>
        <div className='row'>
          <div className='col-lg-2 col-sm-2'>
            <MenuTheater>{renderListTheaters()}</MenuTheater>
          </div>
          <div className='col-lg-4 col-sm-5'>
            <ListCinema>{renderListCinema()}</ListCinema>
          </div>
          <div className='col-lg-6 col-sm-5'>
            <ListMovies>{renderListShowTime()}</ListMovies>
          </div>
        </div>
      </TheatersContainer>
    </TheaterWrap>
  );
};

export default Theaters;
