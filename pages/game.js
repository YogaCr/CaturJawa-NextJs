import Head from 'next/head'
import Layout from '../components/layout'
import Field from '../components/field'
import { useState } from 'react'




export default function Game() {
    const [board, setBoard] = useState([['#', '#', '#'], ['#', '#', '#'], ['#', '#', '#']])
    const [canbeSelected, setCanBeSelected] = useState([[false, false, false], [false, false, false], [false, false, false]])
    const [isPlayer1, setIsPlayer1] = useState(false)
    const [placeRemaining, setPlaceRemaining] = useState([3, 3])
    const [clicked, isClicked] = useState(false)
    const [prevIndex, setPrevIndex] = useState([-1, -1])
    const [winner, setWinner] = useState('#')
    const [play, setPlay] = useState(true)
    const handleClick = (index1, index2) => {
        let boardHere = [...board]
        if (placeRemaining[isPlayer1 ? 0 : 1] > 0) {
            boardHere[index1][index2] = isPlayer1 ? "X" : "O"
            let placeRemainingHere = [...placeRemaining]
            placeRemainingHere[isPlayer1 ? 0 : 1] = placeRemainingHere[isPlayer1 ? 0 : 1] - 1
            setPlaceRemaining(placeRemainingHere)
            setIsPlayer1(!isPlayer1)
            setBoard(boardHere)
        } else {
            if (isPlayer1) {
                if (clicked) {
                    if (boardHere[index1][index2] == "#") {
                        boardHere[index1][index2] = "X"
                        boardHere[prevIndex[0]][prevIndex[1]] = "#"
                        let canBeSelectedArr = [[false, false, false], [false, false, false], [false, false, false]]
                        setCanBeSelected(canBeSelectedArr)
                        isClicked(false)
                        setPrevIndex([-1, -1])
                        setIsPlayer1(!isPlayer1)
                        setBoard(boardHere)
                    }
                } else {
                    if (boardHere[index1][index2] == "X") {
                        let canBeSelectedArr = [[false, false, false], [false, false, false], [false, false, false]]
                        for (let i = 0; i < 3; i++) {
                            for (let j = 0; j < 3; j++) {
                                if ((Math.abs(index1 - i) >= 0 && Math.abs(index1 - i) <= 1) && (Math.abs(index2 - j) >= 0 && Math.abs(index2 - j) <= 1)) {
                                    if (boardHere[i][j] == "#") {
                                        canBeSelectedArr[i][j] = true
                                    }
                                }
                            }
                        }
                        setCanBeSelected(canBeSelectedArr)
                        isClicked(true)
                        setPrevIndex([index1, index2])
                    }
                }
            } else {
                if (clicked) {
                    if (boardHere[index1][index2] == "#") {
                        boardHere[index1][index2] = "O"
                        boardHere[prevIndex[0]][prevIndex[1]] = "#"
                        let canBeSelectedArr = [[false, false, false], [false, false, false], [false, false, false]]
                        setCanBeSelected(canBeSelectedArr)
                        isClicked(false)
                        setPrevIndex([-1, -1])
                        setIsPlayer1(!isPlayer1)
                        setBoard(boardHere)
                    }
                } else {
                    if (boardHere[index1][index2] == "O") {
                        let canBeSelectedArr = [[false, false, false], [false, false, false], [false, false, false]]
                        for (let i = 0; i < 3; i++) {
                            for (let j = 0; j < 3; j++) {
                                if ((Math.abs(index1 - i) >= 0 && Math.abs(index1 - i) <= 1) && (Math.abs(index2 - j) >= 0 && Math.abs(index2 - j) <= 1)) {
                                    if (boardHere[i][j] == "#") {
                                        canBeSelectedArr[i][j] = true
                                    }
                                }
                            }
                        }
                        setCanBeSelected(canBeSelectedArr)
                        isClicked(true)
                        setPrevIndex([index1, index2])
                    }
                }
            }
        }
    }

    const checkFinished = () => {
        if (play) {
            if (
                (board[0][0] == board[0][1] && board[0][0] == board[0][2]) ||
                (board[0][0] == board[1][0] && board[0][0] == board[2][0]) ||
                (board[0][0] == board[1][1] && board[1][1] == board[2][2])
            ) {
                if (board[0][0] != "#") {
                    setWinner(board[0][0])
                    alert(`${board[0][0]} menang`)
                    setPlay(false)
                }
            }
            else if (
                    (board[1][0] == board[1][1] && board[1][0] == board[1][2]) || 
                    (board[0][1] == board[1][1] && board[0][1] == board[2][1])
            ) {
                if (board[1][1] != "#") {
                    setWinner(board[1][1])
                    alert(`${board[1][1]} menang`)
                    setPlay(false)
                }
            }
            else if (
                    (board[0][2] == board[1][1] && board[0][2] == board[2][0]) || 
                    (board[0][2] == board[1][2] && board[0][2] == board[2][2])
            ) {
                if (board[0][2] != "#") {
                    setWinner(board[0][2])
                    alert(`${board[0][2]} menang`)
                    setPlay(false)
                }
            }
            else if (
                    (board[2][0] == board[2][1] && board[2][0] == board[2][2])
            ) {
                if (board[2][0] != "#") {
                    setWinner(board[2][0])
                    alert(`${board[2][0]} menang`)
                    setPlay(false)
                }
            }
        }
    }
    checkFinished()
    return <Layout>
        <Head>
            <title>Catur Jawa</title>
        </Head>
        <h1 style={{fontWeight:"bold"}} className={"text-center"}>Catur Jawa</h1>
        <div className={"d-flex flex-row justify-content-center"}>
            <Field handleClick={() => { handleClick(0, 0) }} pion={board[0][0] != "#" ? board[0][0] : ""} willSelect={canbeSelected[0][0]} />
            <Field handleClick={() => { handleClick(0, 1) }} pion={board[0][1] != "#" ? board[0][1] : ""} willSelect={canbeSelected[0][1]} />
            <Field handleClick={() => { handleClick(0, 2) }} pion={board[0][2] != "#" ? board[0][2] : ""} willSelect={canbeSelected[0][2]} />
        </div>
        <div className={"d-flex flex-row justify-content-center"}>
            <Field handleClick={() => { handleClick(1, 0) }} pion={board[1][0] != "#" ? board[1][0] : ""} willSelect={canbeSelected[1][0]} />
            <Field handleClick={() => { handleClick(1, 1) }} pion={board[1][1] != "#" ? board[1][1] : ""} willSelect={canbeSelected[1][1]} />
            <Field handleClick={() => { handleClick(1, 2) }} pion={board[1][2] != "#" ? board[1][2] : ""} willSelect={canbeSelected[1][2]} />
        </div>
        <div className={"d-flex flex-row justify-content-center"}>
            <Field handleClick={() => { handleClick(2, 0) }} pion={board[2][0] != "#" ? board[2][0] : ""} willSelect={canbeSelected[2][0]} />
            <Field handleClick={() => { handleClick(2, 1) }} pion={board[2][1] != "#" ? board[2][1] : ""} willSelect={canbeSelected[2][1]} />
            <Field handleClick={() => { handleClick(2, 2) }} pion={board[2][2] != "#" ? board[2][2] : ""} willSelect={canbeSelected[2][2]} />
        </div>
    </Layout>
}