import { useState } from "react";
import { apis, initialStates } from "../../utils/consts";
import axios from "axios";

function useCopy() {
    const [copy, setCopy] = useState(initialStates.copy);

    const fetchCopy = async () => {
        try {
            let res = await axios.get(apis.copy);

            if (!res?.data?.success) {
                const { err = {} } = res.data;

                console.error(err);
            } else if (res?.data?.success) {
                const { data = {} } = res.data;

                setCopy(data);
            };
        } catch (err) {
            const errorMessage = err?.reponse ? err.response : err;

            console.error(errorMessage);
        };
    };

    return {
        copy,
        fetchCopy
    };
};

export default useCopy;