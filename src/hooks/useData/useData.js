import { useState } from "react";
import { apis, initialStates } from "../../utils/consts";
import axios from "axios";

function useData() {
    const [data, setData] = useState(initialStates.data);

    const fetchData = async () => {
        try {
            let res = await axios.get(apis.data);

            if (!res?.data?.success) {
                const { err = {} } = res.data;

                console.error(err);
            } else if (res?.data?.success) {
                const { data = {} } = res.data;

                setData(data);
            };
        } catch (err) {
            const errorMessage = err?.reponse ? err.response : err;

            console.error(errorMessage);
        };
    };

    return {
        data,
        fetchData
    };
};

export default useData;