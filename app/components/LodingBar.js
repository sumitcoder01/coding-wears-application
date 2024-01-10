"use client"
import { useEffect, useState } from 'react';
import LoadingBar from 'react-top-loading-bar'
import { usePathname } from 'next/navigation'
export default function LodingBar() {
    const [progress, setProgress] = useState(0);
    const pathname = usePathname();
    useEffect(()=>{
        setProgress(40);
        setTimeout(() => {
            setProgress(1000);
        }, 2000);
    },[pathname])
    return (
        <div>
            <LoadingBar
                color='#db2777'
                progress={progress}
                height={4}
                onLoaderFinished={() => setProgress(0)}
            />
        </div>
    )
}
