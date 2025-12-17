import React, { FC, ReactNode } from 'react';
import { sizeConfig } from "@/config/size.config";

interface ITitle {
    children: ReactNode;
}

const Title: FC<ITitle> = ({children}) => {
    return (
        <h1
            className="text-xl font-semibold text-gray-900 dark:text-white mb-8"
            style={{ paddingTop: `calc(20px + ${sizeConfig.headerSize}px)` }}
        >
            {children}
        </h1>
    );
};

export default Title;