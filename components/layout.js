
export default function Layout({children,classes}){
    return <div className={`container ${classes}`} style={{minHeight:"100vh"}}>
         {children}
    </div>
}