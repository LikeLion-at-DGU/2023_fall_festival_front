import styled from "styled-components";
import { NoticeWrappper } from "../style";

export const NoticeDetailWrap = styled(NoticeWrappper)``;
export const DetailWhiteBox = styled.div`
  width: 90%;
  /* min-height: 600px; */
  display: flex;
  flex-direction: column;
  padding: 30px 35px;

  border-radius: 35px;
  background: rgba(255, 255, 255, 0.97);
`;
export const DetailTxt = styled.div`
  color: #dd7481;
  font-family: DONGGUK UNIVERSITY;
  font-size: 14px;
  text-align: center;
`;
export const DetailTitle = styled.div`
  padding: 20px 0;
  color: #282828;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 600;
`;
export const DetailContent = styled.div`
  color: #553c2e;
  font-family: Noto Sans KR;
  font-size: 12px;
  padding-bottom: 30px;
`;
export const ImgWrapper = styled.div`
  height: 120px;
  margin-bottom: 40px;
  img {
    height: 120px;
    margin-right: 10px;
  }
`;
export const DeatilDate = styled.div`
  color: #8c847f;
  font-family: Noto Sans KR;
  font-size: 10px;
  margin-bottom: 60px;
`;