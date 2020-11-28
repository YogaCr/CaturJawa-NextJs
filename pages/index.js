import { IoGameControllerOutline } from "react-icons/io5";
import Layout from '../components/layout'
import Link from 'next/link'
export default function Index(){
    return <Layout classes={"d-flex align-items-center"}>
        <div className={"row"} style={{width:"100%"}}>
            <div className={"col-md-5"}>
                <h1 className={"text-right mr-md-2 mb-0 p-0"} style={{fontWeight:"bolder"}}>Catur Jawa</h1>
                <p className={"text-secondary text-right mr-md-2 mb-0 p-0"}>A tic-tac-toe like game</p>
                <p className={"text-secondary text-right mr-md-2 mb-0 p-0"} style={{fontSize:"0.6rem"}}>Created by <Link href="https://github.com/YogaCr">YogaCr</Link></p>
            </div>
            <div className={"col-md-1 d-none d-md-block"} style={{maxWidth:"3px",backgroundColor:"#34495e",padding:0}}></div>
            <div className={"col-md-6 d-flex flex-column justify-content-center"}>
                <Link href="/game"><button className={"btn btn-outline-success border-0 btn-lg btn-block"}><IoGameControllerOutline/> Play</button></Link>
            </div>
        </div>
        
    </Layout>
}