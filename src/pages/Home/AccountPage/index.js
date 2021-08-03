import { userInfoApi } from "app/redux/reducer/userInfo";
import Loading from "components/Loading";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContent, AuthWrap } from "../Auth/style";
import {
  AccountInfo,
  EditPassword,
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
  const [typeModal, setTypeModal] = useState("editInfo");
  const [currentTicket, setCurrentTicket] = useState(null);
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
        return (
          <TicketHistory
            setModalShow={setModalShow}
            setTypeModal={setTypeModal}
            setCurrentTicket={setCurrentTicket}
          />
        );
      }

      default: {
        return (
          <AccountInfo
            setModalShow={setModalShow}
            setTypeModal={setTypeModal}
          />
        );
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
                <AccountTabs className='col-xxl-3 col-xl-12'>
                  <AccountTab
                    active={type === "account" ? true : false}
                    onClick={() => setType("account")}
                  >
                    Thông tin cá nhân
                  </AccountTab>
                  <AccountTab
                    active={type === "password" ? true : false}
                    onClick={() => setType("password")}
                  >
                    Thay đổi mật khẩu
                  </AccountTab>
                  <AccountTab
                    active={type === "history" ? true : false}
                    onClick={() => setType("history")}
                  >
                    Lịch sử đặt vé
                  </AccountTab>
                </AccountTabs>
                <AccountContent className='col-xxl-9 col-xl-12  p-4'>
                  {renderContent()}
                </AccountContent>
              </div>
            </div>
          </AccountContainer>
        </AuthContent>
      </AuthWrap>
      <ModalEditInfo
        content={typeModal}
        ticket={currentTicket}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default AccountPage;
