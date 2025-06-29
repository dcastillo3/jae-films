import { useState } from "react";
import { apis, initialStates } from "../../utils/consts";
import axios from "axios";

function useVideos() {
    const [videos, setVideos] = useState(initialStates.videos);

    const fetchVideos = async () => {
        try {
            let res = await axios.get(apis.videos);

            if (!res?.data?.success) {
                const { err = {} } = res.data;

                console.error(err);
            } else if (res?.data?.success) {
                const { data = {} } = res.data;

                setVideos(data);
            };
        } catch (err) {
            const errorMessage = err?.reponse ? err.response : err;

            console.error(errorMessage);
        };
    };

    return {
        videos,
        fetchVideos
    };
};

export default useVideos;