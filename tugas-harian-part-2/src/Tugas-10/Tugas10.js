import React, {useState, useEffect} from 'react'

const TimeCountDown = () => {
    let [tanggal, setTanggal] = useState(new Date())
    let [hitung, setHitung] = useState(100)

    useEffect(() => {
        let hitungDetik = setInterval(() => {
            setHitung(hitung - 1)
        }, 1000)

        let tanggalDetik = setInterval(() => {
            setTanggal(new Date())
        }, 1000)

        return () => clearInterval(hitungDetik)
    }, [hitung, setHitung], [tanggal, setTanggal])

    return(
        hitung > 0 ? 
        <div className="countDown">
            <h1 className="formath">
                Now at : {tanggal.toLocaleTimeString()}
            </h1>
            <h3 className="formath">
                Countdown : {hitung}
            </h3>
        </div> : null
    )
}

export default TimeCountDown