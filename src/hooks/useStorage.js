import { useState, useEffect } from "react";
import { projectStorage, projectFirestorage, timestamp } from "../firebase/config";

const useStorage = (file) =>{
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() =>{
        //references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestorage.collection('images');

        storageRef.put(file).on('state_changed', (snap) =>{
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) =>{
            setError(err);
        }, async() =>{
            const url = await storageRef.getDownloadURL(); //Để link URL sau khi upload lưu vào collection ở database         
            const createdAt = timestamp();
            collectionRef.add({url : url, createdAt});
            setUrl(url);
        })
    }, [file]);
    return {progress, url, error}
}

export default useStorage;