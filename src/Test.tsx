
interface TestA {
 abc:string,
    xyz: number,
    yz?: boolean
}

interface Props {
    abc:string,
    xyz?: number,
    yz?: boolean
}

const Test:React.FC<Props>= ({abc, xyz, yz})=>{


    return (
        <h1>Test{abc}</h1>
    )
}

export default  Test