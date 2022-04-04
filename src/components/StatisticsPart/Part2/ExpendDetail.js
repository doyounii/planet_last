import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './Category.css';
import { FaChevronLeft } from 'react-icons/fa';

const expendData = [
    {
        emoji: "🛒",
        exType: "마트",
        count: "120개",
        memo: "엽떡 사먹음",
        ecoList: [
            {
                eco: "G",
                ecoDetail: "다회용기 사용",
                etcMemo: null,
            },
            {
                eco: "G",
                ecoDetail: "중고거래/나눔/기부",
                etcMemo: null,
            },
        ],
    },
    {
        emoji: "🚗",
        exType: "교통",
        count: "80개",
        memo: "엽떡 사먹음",
        ecoList: [
            {
                eco: "G",
                ecoDetail: "다회용기 사용",
                etcMemo: null,
            },
            {
                eco: "G",
                ecoDetail: "중고거래/나눔/기부",
                etcMemo: null,
            },
        ],
    },
    {
        emoji: "🎬",
        exType: "문화생활",
        count: "50개",
        memo: "엽떡 사먹음",
        ecoList: [
            {
                eco: "G",
                ecoDetail: "다회용기 사용",
                etcMemo: null,
            },
            {
                eco: "G",
                ecoDetail: "중고거래/나눔/기부",
                etcMemo: null,
            },
        ],
    },
    {
        emoji: "💬",
        exType: "기타",
        count: "30개",
        memo: "엽떡 사먹음",
        ecoList: [
            {
                eco: "G",
                ecoDetail: "다회용기 사용",
                etcMemo: null,
            },
            {
                eco: "G",
                ecoDetail: "중고거래/나눔/기부",
                etcMemo: null,
            },
        ],
    },
    {
        emoji: "📚",
        exType: "교육",
        count: "10개",
        memo: "엽떡 사먹음",
        ecoList: [
            {
                eco: "G",
                ecoDetail: "다회용기 사용",
                etcMemo: null,
            },
            {
                eco: "G",
                ecoDetail: "중고거래/나눔/기부",
                etcMemo: null,
            },
        ],
    },
    {
        emoji: "💵",
        exType: "경조사/회비",
        count: "4개",
        memo: "엽떡 사먹음",
        ecoList: [
            {
                eco: "G",
                ecoDetail: "다회용기 사용",
                etcMemo: null,
            },
            {
                eco: "G",
                ecoDetail: "중고거래/나눔/기부",
                etcMemo: null,
            },
        ],
    },
    {
        emoji: "🏥",
        exType: "의료/건강",
        count: "3개",
        memo: "엽떡 사먹음",
        ecoList: [
            {
                eco: "G",
                ecoDetail: "다회용기 사용",
                etcMemo: null,
            },
            {
                eco: "G",
                ecoDetail: "중고거래/나눔/기부",
                etcMemo: null,
            },
        ],
    },
    {
        emoji: "🛏",
        exType: "가전",
        count: "2개",
        memo: "엽떡 사먹음",
        ecoList: [
            {
                eco: "G",
                ecoDetail: "다회용기 사용",
                etcMemo: null,
            },
            {
                eco: "G",
                ecoDetail: "중고거래/나눔/기부",
                etcMemo: null,
            },
        ],
    },
    {
        emoji: "📱",
        exType: "통신",
        count: "1개",
        memo: "엽떡 사먹음",
        ecoList: [
            {
                eco: "G",
                ecoDetail: "다회용기 사용",
                etcMemo: null,
            },
            {
                eco: "G",
                ecoDetail: "중고거래/나눔/기부",
                etcMemo: null,
            },
        ],
    },
    {
        emoji: "✏️",
        exType: "생필품",
        count: "0개",
        memo: "엽떡 사먹음",
        ecoList: [
            {
                eco: "G",
                ecoDetail: "다회용기 사용",
                etcMemo: null,
            },
            {
                eco: "G",
                ecoDetail: "중고거래/나눔/기부",
                etcMemo: null,
            },
        ],
    },
    {
        emoji: "🌭",
        exType: "식비",
        count: "0개",
        memo: "엽떡 사먹음",
        ecoList: [
            {
                eco: "G",
                ecoDetail: "다회용기 사용",
                etcMemo: null,
            },
            {
                eco: "G",
                ecoDetail: "중고거래/나눔/기부",
                etcMemo: null,
            },
        ],
    },
    {
        emoji: "🧾",
        exType: "공과금",
        count: "0개",
        memo: "엽떡 사먹음",
        ecoList: [
            {
                eco: "G",
                ecoDetail: "다회용기 사용",
                etcMemo: null,
            },
            {
                eco: "G",
                ecoDetail: "중고거래/나눔/기부",
                etcMemo: null,
            },
        ],
    },
];

function ExpendDetail() {
    const data = useLocation().state;
    const history = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let exType;
    if (data.exType === "마트") {
        exType = 0;
    } else if (data.exType === "교통") {
        exType = 1;
    } else if (data.exType === "문화생활") {
        exType = 2;
    } else if (data.exType === "기타") {
        exType = 3;
    } else if (data.exType === "교육") {
        exType = 4;
    } else if (data.exType === "경조사/회비") {
        exType = 5;
    } else if (data.exType === "의료/건강") {
        exType = 6;
    } else if (data.exType === "가전") {
        exType = 7;
    } else if (data.exType === "통신사") {
        exType = 8;
    } else if (data.exType === "생필품") {
        exType = 9;
    } else if (data.exType === "식비") {
        exType = 10;
    } else if (data.exType === "공과금") {
        exType = 11;
    }


    const renderEcoExpendList = () => {
        let renderEcoExpendList = [];

        if (data.ecodata === "eco") {
            for (let i = 0; i < expendData[exType].ecoList.length; i++) {
                renderEcoExpendList.push(
                    <div>
                        {expendData[exType].ecoList[i].ecoDetail}
                    </div>
                )

            }
        }
        return <div>{renderEcoExpendList}</div>;

    }
    if (data.ecodata === "eco") {
        return (
            <div className='container'>
                <div className='header'>
                    <FaChevronLeft
                        className="forwardArrow"
                        onClick={() => {
                            history(-1);
                        }}
                    />
                    <h1 className='cateGory'>친환경 지출 카테고리</h1>
                </div>
                <div className='detailType'>
                    {data.emoji} {' '} {data.exType}
                    <p>{data.count}</p>
                    <h1>총 지출 금액 원</h1>
                </div>
                <div className="line-box"></div>
                {data.exType}sss

                {renderEcoExpendList(data.ecodata)}
            </div>
        )
    } else {
        return (
            <div className='container'>
                <div className='header'>
                    <FaChevronLeft
                        className="forwardArrow"
                        onClick={() => {
                            history(-1);
                        }}
                    />
                    <h1 className='cateGory'>반환경 지출 카테고리</h1>
                </div>
                <div className='detailType'>
                    {data.emoji} {' '} {data.exType}
                    <p>{data.count}</p>
                    <h1>총 지출 금액 원</h1>
                </div>
                <div className="line-box"></div>
                {renderEcoExpendList(data.ecodata)}
            </div>
        )
    }
}

export default ExpendDetail