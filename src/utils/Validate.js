export const Validate = (values, passwordValid) => {
  let errors = {};

  // hoTen
  if (values.hoTen !== undefined) {
    if (!values.hoTen.trim()) {
      errors.hoTen = "Họ tên không được để trống";
    }
  }

  // email
  if (values.email !== undefined) {
    if (!values.email.trim()) {
      errors.email = "Email không được để trống";
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
    ) {
      errors.email = "Email không hợp lệ";
    }
  }
  // currentPassword
  if (values.currentPassword !== undefined) {
    if (!values.currentPassword.trim()) {
      errors.currentPassword = "Mật khẩu cũ không được để trống";
    } else if (values.currentPassword !== passwordValid) {
      errors.currentPassword = "Mật khẩu cũ chưa chính xác";
    }
  }

  // password
  if (values.matKhau !== undefined) {
    if (!values.matKhau.trim()) {
      errors.matKhau = "Mật khẩu không được để trống";
    } else if (values.matKhau.length < 6) {
      errors.matKhau = "Mật khẩu phải trên 6 ký tự";
    }
  }

  // confirmPassword
  if (values.confirmPassword !== undefined) {
    if (!values.confirmPassword.trim()) {
      errors.confirmPassword = "Mật khẩu nhập lại không được để trống";
    } else if (values.confirmPassword.length < 6) {
      errors.confirmPassword = "Mật khẩu nhập lại phải trên 6 ký tự";
    } else if (values.confirmPassword !== values.matKhau) {
      errors.confirmPassword = "Mật khẩu nhập lại không trùng khớp";
    }
  }

  // username
  if (values.taiKhoan !== undefined) {
    if (!values.taiKhoan.trim()) {
      errors.taiKhoan = "Tên tài khoản không được để trống";
    }
  }

  // So DT
  if (values.soDt !== undefined) {
    if (!values.soDt.trim()) {
      errors.soDt = "Số điện thoại không được để trống";
    }
  }
  // maPhim,
  // tenPhim,
  // biDanh,
  // trailer,
  // hinhAnh,
  // moTa,
  // ngayKhoiChieu,
  //maPhim
  if (values.maPhim !== undefined) {
    if (!values.maPhim.trim()) {
      errors.maPhim = "Mã phim không được để trống";
    } else if (Number(values.maPhim) < 1) {
      errors.maPhim = "Mã phim không hợp lệ";
    }
  }
  //tenPhim
  if (values.tenPhim !== undefined) {
    if (!values.tenPhim.trim()) {
      errors.tenPhim = "Tên phim không được để trống";
    }
  }
  //biDanh
  if (values.biDanh !== undefined) {
    if (!values.biDanh.trim()) {
      errors.biDanh = "Bí danh không được để trống";
    }
  }
  //trailer
  if (values.trailer !== undefined) {
    if (!values.trailer.trim()) {
      errors.trailer = "Trailer không được để trống";
    }
  }
  //hinhAnh
  if (values.hinhAnh !== undefined) {
    if (!values.hinhAnh.trim()) {
      errors.hinhAnh = "Hình ảnh không được để trống";
    }
  }
  // ngayKhoiChieu
  if (values.ngayKhoiChieu !== undefined) {
    if (!values.ngayKhoiChieu.trim()) {
      errors.ngayKhoiChieu = "Số điện thoại không được để trống";
    }
  }
  // moTa
  if (values.moTa !== undefined) {
    if (!values.moTa.trim()) {
      errors.moTa = "Mô tả không được để trống";
    }
  }
  // maRap
  if (values.maRap !== undefined) {
    if (!values.maRap.trim()) {
      errors.maRap = "Rạp không được để trống";
    }
  }
  // maCumRap
  if (values.maCumRap !== undefined) {
    if (!values.maCumRap.trim()) {
      errors.maCumRap = "Cụm rạp không được để trống";
    }
  }
  // maHeThongRap
  if (values.maHeThongRap !== undefined) {
    if (!values.maHeThongRap.trim()) {
      errors.maHeThongRap = "Hệ thống rạp không được để trống";
    }
  }
  // ngayChieuGioChieu
  if (values.ngayChieuGioChieu !== undefined) {
    if (!values.ngayChieuGioChieu.trim()) {
      errors.ngayChieuGioChieu = "Ngày giờ  không được để trống";
    }
  }
  //giaVe
  if (values.giaVe !== undefined) {
    if (!values.giaVe.trim()) {
      errors.giaVe = "Giá vé không được để trống";
    }
  }
  return errors;
};
