import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listShowTimeMovieApi } from "app/redux/reducer/listShowTimeMovie";
import "./styles.css";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Menu = () => {
  // Router service
  const history = useHistory();
  // redux service
  const movies = useSelector((state) => state.listMovieReducer.data);
  const showTime = useSelector((state) => state.listShowTimeMovieReducer.data);
  const dispatch = useDispatch();

  //  state form submit
  const [info, setInfo] = useState({
    maPhim: "",
    maCumRap: "",
    date: "",
    time: "",
  });
  const [maLichChieu, setMaLichChieu] = useState(null);

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  // renderMenus
  const renderListFilm = (movieList) => {
    return movieList?.map((movie, index) => {
      return (
        <option className='menu-nav__item' key={index} value={movie.maPhim}>
          {movie.tenPhim}
        </option>
      );
    });
  };
  const renderListCinema = (showTime) => {
    return showTime?.heThongRapChieu.map((heThong) => {
      return heThong.cumRapChieu.map((cumRap, index) => {
        return (
          <option
            className='menu-nav__item'
            key={index}
            value={cumRap.maCumRap}
          >
            {cumRap.tenCumRap}
          </option>
        );
      });
    });
  };
  const renderListDate = (showTime) => {
    let dataDate = "";
    return showTime?.heThongRapChieu.map((heThong) => {
      return heThong.cumRapChieu.map((cumRap, index) => {
        if (cumRap.maCumRap === info.maCumRap) {
          return cumRap.lichChieuPhim.map((lichChieu, index) => {
            const date = new Date(
              lichChieu.ngayChieuGioChieu
            ).toLocaleDateString();
            if (dataDate !== date) {
              dataDate = date;
              return (
                <option className='menu-nav__item' key={index} value={dataDate}>
                  {dataDate}
                </option>
              );
            }
          });
        }
      });
    });
  };
  const renderListTime = (showTime) => {
    return showTime?.heThongRapChieu.map((heThong) => {
      return heThong.cumRapChieu.map((cumRap, index) => {
        if (cumRap.maCumRap === info.maCumRap) {
          return cumRap.lichChieuPhim.map((lichChieu, index) => {
            const date = new Date(
              lichChieu.ngayChieuGioChieu
            ).toLocaleDateString();
            if (date === info.date) {
              const time = new Date(
                lichChieu.ngayChieuGioChieu
              ).toLocaleTimeString();
              return (
                <option className='menu-nav__item' key={index} value={time}>
                  {time}
                </option>
              );
            }
          });
        }
      });
    });
  };

  // Submit Buy Ticket
  const handleSubmit = (event) => {
    event.preventDefault();
    if (maLichChieu !== null) history.push(`/ticket/${maLichChieu}`);
  };

  // useEffect
  useEffect(() => {
    dispatch(listShowTimeMovieApi(info.maPhim));
  }, [info.maPhim]);
  useEffect(() => {
    return showTime?.heThongRapChieu.map((cinema) => {
      return cinema.cumRapChieu.map((theater) => {
        if (theater.maCumRap === info.maCumRap) {
          return theater.lichChieuPhim.map((movie) => {
            if (
              info.date ===
                new Date(movie.ngayChieuGioChieu).toLocaleDateString() &&
              info.time ===
                new Date(movie.ngayChieuGioChieu).toLocaleTimeString()
            ) {
              setMaLichChieu(movie.maLichChieu);
            }
          });
        }
      });
    });
  }, [info.maPhim, info.maCumRap, info.date, info.time]);
  return (
    <div className='menu-nav'>
      <form className='menu-nav__content' type='submit' onSubmit={handleSubmit}>
        <div className='menu-nav__list--large'>
          <select
            defaultValue={"DEFAULT"}
            name='maPhim'
            onChange={handleChange}
          >
            <option value='DEFAULT' disabled hidden className='menu-nav__item'>
              Chọn Phim
            </option>
            {renderListFilm(movies)}
          </select>
        </div>
        <div className='menu-nav__list--small'>
          <select
            defaultValue={"DEFAULT"}
            name='maCumRap'
            onChange={handleChange}
          >
            <option value='DEFAULT' disabled hidden className='menu-nav__item'>
              Chọn Cụm Rạp
            </option>
            {renderListCinema(showTime)}
          </select>
        </div>
        <div className='menu-nav__list--small'>
          <select defaultValue={"DEFAULT"} name='date' onChange={handleChange}>
            <option value='DEFAULT' disabled hidden className='menu-nav__item'>
              Chọn ngày
            </option>
            {renderListDate(showTime)}
          </select>
        </div>
        <div className='menu-nav__list--small'>
          <select defaultValue={"DEFAULT"} name='time' onChange={handleChange}>
            <option value='DEFAULT' disabled hidden className='menu-nav__item'>
              Chọn giờ
            </option>
            {renderListTime(showTime)}
          </select>
        </div>
        <Button
          size='sm'
          type='submit'
          disabled={maLichChieu === null}
          onClick={handleSubmit}
          className='button-buy-ticket'
        >
          Đặt vé
        </Button>
      </form>
    </div>
  );
};

export default Menu;
