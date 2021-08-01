import { userInfoApi } from "app/redux/reducer/userInfo";
import Loading from "components/Loading";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContent, AuthWrap } from "../Auth/style";
import {
  AccountInfo,
  EditPassword,
  EditProfile,
  ModalEditInfo,
  TicketHistory,
} from "./content";
import {
  AccountContainer,
  AccountContent,
  AccountTab,
  AccountTabs,
} from "./style";

const AccountPage = () => {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const {
    data: { taiKhoan },
  } = useSelector((state) => state.userLoginReducer);
  const { loading } = useSelector((state) => state.userInfoReducer);
  const [type, setType] = useState("account");
  const renderContent = () => {
    if (loading) return <Loading />;

    switch (type) {
      case "password": {
        return <EditPassword />;
      }
      case "history": {
        return <TicketHistory />;
      }

      default: {
        return <AccountInfo setModalShow={setModalShow} />;
      }
    }
  };

  // getAccountInfoApi
  useEffect(() => {
    dispatch(userInfoApi({ taiKhoan }));
  }, []);

  return (
    <div>
      <AuthWrap>
        <AuthContent>
          <AccountContainer>
            <div className='container'>
              <div className='row'>
                <AccountTabs className='col-3'>
                  <AccountTab
                    active={type === "account" ? true : false}
                    onClick={() => setType("account")}
                  >
                    Thông tin người dùng
                  </AccountTab>
                  <AccountTab
                    active={type === "password" ? true : false}
                    onClick={() => setType("password")}
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
            </div>
          </AccountContainer>
        </AuthContent>
      </AuthWrap>
      <ModalEditInfo show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default AccountPage;
