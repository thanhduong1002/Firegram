import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";
const ProgressBar = ({file, setFile}) =>{
    const {url, progress} = useStorage(file);
    console.log(url,progress);//In ra quá trình load file chạy từ 0-100, load được 100 thì ra link ảnh
    useEffect(()=>{
        if(url){
            setFile(null);
        }
    }, [url,setFile])
    return (
        <motion.div className="progress">
            initial={{opacity: 0}}
            animate={{width: progress + '%'}}
        </motion.div>
    )
}

export default ProgressBar;