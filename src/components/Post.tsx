import 'react-alice-carousel/lib/alice-carousel.css';
import styled from "styled-components";
import AliceCarousel from 'react-alice-carousel';


import {AiOutlineEye} from 'react-icons/ai';
import {FiHeart} from 'react-icons/fi';
import {HiOutlineDotsVertical} from 'react-icons/hi';
import {IoArrowRedoOutline} from 'react-icons/io5';
import {TbMessageCircle2} from 'react-icons/tb';

const imagess = [
    <img src="https://klike.net/uploads/posts/2019-05/1556708032_1.jpg" role="presentation" />,
    <img src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg"  role="presentation" />,
    <img src="https://st.depositphotos.com/2547675/3009/i/450/depositphotos_30094505-stock-photo-time-clock.jpg"  role="presentation" />,
    <img src="https://klike.net/uploads/posts/2019-05/1556708032_1.jpg" role="presentation" />,
    <img src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg"  role="presentation" />,
    <img src="https://st.depositphotos.com/2547675/3009/i/450/depositphotos_30094505-stock-photo-time-clock.jpg"  role="presentation" />,
    <img src="https://klike.net/uploads/posts/2019-05/1556708032_1.jpg" role="presentation" />,
    <img src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg"  role="presentation" />,
    <img src="https://st.depositphotos.com/2547675/3009/i/450/depositphotos_30094505-stock-photo-time-clock.jpg"  role="presentation" />
];

export const Post = () => {
    return (
        <>
            <SOptions>
                <SAuthor>
                    <SAvatar/>
                    <SName>Elizabet</SName>
                </SAuthor>
                <SDots/>
            </SOptions>
            <SWrapper>
                <AliceCarousel mouseTracking items={imagess} />
            </SWrapper>
            <SOptionds>
                <SMain>
                    <SLike/>
                    <SComment/>
                    <SRepost/>
                </SMain>
                <SEye/>
            </SOptionds>
        </>
    )
}



const SWrapper = styled.div`
  .alice-carousel__wrapper {
    height: 350px;
  }
    
  img {
    height: 100%;
  }
  
  .alice-carousel__next-btn, .alice-carousel__prev-btn {
    display: none;
  }
  
  .alice-carousel__dots {
    margin: 10px 0 0 0;
  }
  
  .alice-carousel__dots-item:not(.__custom):not(:last-child) {
    margin-right: 6px;
  }

  .alice-carousel__dots-item{
    background: #d5d5d5;
    
    .__active {
      background: blue;
    }
  }
`;

const SAuthor = styled.div`
display: flex;
  gap: 10px;
  align-items: center;
`;

const SOptions = styled.div`
display: flex;
  justify-content: space-between;
  padding: 10px 15px;
`;

const SOptionds = styled.div`
display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  margin-top: -32px;
`;

const SMain = styled.div`
  display: flex;
gap:10px;
`;

const SLike= styled(FiHeart)`
font-size: 24px;
`;

const SComment= styled(TbMessageCircle2)`
font-size: 24px;
`;

const SRepost = styled(IoArrowRedoOutline)`
font-size: 24px;
`;

const SEye= styled(AiOutlineEye)`
font-size: 24px;
`;

const SDots = styled(HiOutlineDotsVertical)`
font-size: 24px;
`;

const SAvatar = styled.div`
    height: 25px;
  width: 25px;
  border-radius: 50%;
  background: red;
`;

const SName = styled.span`
  font-size: 13px;
  font-weight: bolder;
  color: #111111;
`;

const STime = styled.span`
font-size: 12px;
  color: grey;
`;

const SDesk = styled.div`
  height: 350px;
  width: 100%;
  background: red;
`