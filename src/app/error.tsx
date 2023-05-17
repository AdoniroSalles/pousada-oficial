'use client';

import Error from "next/error";

const error = ({error} : {error: Error}) =>{
    return (
        <div>
            Página não encontrada
        </div>

    )
}

export default error;