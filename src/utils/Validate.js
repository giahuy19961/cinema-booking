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

  return errors;
};
