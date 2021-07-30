import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AuthContent, AuthWrap } from "../Auth/style";
import {
  AccountContainer,
  AccountContent,
  AccountTab,
  AccountTabs,
} from "./style";

const AccountPage = () => {
  const {
    data: { taiKhoan, hoTen, email, soDT, maLoaiNguoiDung },
  } = useSelector((state) => state.userLoginReducer);
  const [type, setType] = useState("account");
  const renderContent = () => {
    const account = (
      <>
        <h1 className='heading'>Thông tin cá nhân</h1>
        <div className='row'>
          <div className='col-4 text-left'> Họ Tên :</div>
          <div className='col-8'> {hoTen}</div>
        </div>
        <div className='row'>
          <div className='col-4 text-left'> Email :</div>
          <div className='col-8 '> {email}</div>
        </div>
        <div className='row'>
          <div className='col-4 text-left'> Số điện thoại :</div>
          <div className='col-8'> {soDT}</div>
        </div>
        <div className='row'>
          <div className='col-4 text-left'> Role :</div>
          <div className='col-8'> {maLoaiNguoiDung}</div>
        </div>
      </>
    );
    switch (type) {
      case "edit": {
        return <>Edit</>;
      }
      case "history": {
        return <>history</>;
      }

      default: {
        return account;
      }
    }
  };

  return (
    <div>
      <AuthWrap>
        <AuthContent>
          <AccountContainer>
            <div className='row'>
              <AccountTabs className='col-3'>
                <AccountTab
                  active={type === "account" ? true : false}
                  onClick={() => setType("account")}
                >
                  Thông tin người dùng
                </AccountTab>
                <AccountTab
                  active={type === "edit" ? true : false}
                  onClick={() => setType("edit")}
                >
                  Chỉnh sửa thông tin
                </AccountTab>
                <AccountTab
                  active={type === "history" ? true : false}
                  onClick={() => setType("history")}
                >
                  Lịch sử đặt vé
                </AccountTab>
              </AccountTabs>
              <AccountContent className='col-9'>
                {renderContent()}
              </AccountContent>
            </div>
          </AccountContainer>
        </AuthContent>
      </AuthWrap>
    </div>
  );
};

export default AccountPage;
