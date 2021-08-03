export const Validate = (values, passwordValid) => {
  let errors = {};
  console.log(values.hoTen, passwordValid);

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
  if (values.password !== undefined) {
    if (!values.password.trim()) {
      errors.password = "Password không được để trống";
    } else if (values.password.length < 6) {
      errors.password = "Password phải trên 6 ký tự";
    }
  }

  // confirmPassword
  if (values.confirmPassword !== undefined) {
    if (!values.confirmPassword.trim()) {
      errors.confirmPassword = "Mật khẩu nhập lại không được để trống";
    } else if (values.confirmPassword.length < 6) {
      errors.confirmPassword = "Mật khẩu nhập lại phải trên 6 ký tự";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Mật khẩu nhập lại không trùng khớp";
    }
  }

  // username
  if (values.username !== undefined) {
    if (!values.username.trim()) {
      errors.username = "Họ tên không được để trống";
    }
  }

  // So DT
  if (values.soDT !== undefined) {
    if (!values.soDT.trim()) {
      errors.soDT = "Số điện thoại không được để trống";
    }
  }
  console.log(errors);
  return errors;
};
