import { useEffect, useState } from "react";
import { projectFirestorage } from "../firebase/config";

const Firestore = (collection) =>{
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = projectFirestorage.collection(collection)
            .onSnapshot((snap)=> {
                let documents = [];
                snap.forEach(doc =>{
                    documents.push({...doc.data(), id: doc.id})
                });
                setDocs(documents);
            });
        return () => unsub();
    }, [collection]);
    return {docs};
}
export default Firestore;