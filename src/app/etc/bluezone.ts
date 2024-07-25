import useSWR from 'swr';
import axios, { AxiosRequestConfig } from 'axios';
import { mapping } from '../mapping';

const NODE_SERVER = 'https://api.test.bluezone.fund';

// use in function
export const BzApi = (link: keyof typeof mapping) => {
    const apiUrl = `${NODE_SERVER}/${link}` as keyof typeof mapping;
    return useSWR(mapping[apiUrl]);
}

export const BzFetch = (link: keyof typeof mapping, data: any) => {
    const mappingLink:any = mapping[link];
    if (typeof mappingLink === 'object' && mappingLink.hasOwnProperty('url') && mappingLink.hasOwnProperty('method')) {
        const apiUrl = `${NODE_SERVER}${mappingLink.url}`;
        const method = mappingLink.method.toLowerCase();

        // Prepare the config for axios request
        const config: AxiosRequestConfig = {
            url: apiUrl,
            method: method,
        };

        // Optionally, you can add support for body and headers if your API needs them
        if (data) {
            config.data = data;
        }
        if (mappingLink.headers) {
            config.headers = mappingLink.headers;
        }

        // Dynamically call axios based on the method
        return axios(config);
    } else {
        throw new Error(`Invalid mapping for link: ${link}`);
    }
}

export const BzFetchHelper = {
    setToken: (token: string) => {
        localStorage.setItem('token', token);
    },
    handleResponse: (resp: any, { success, failed, ctx }: { success: any, failed: any, ctx: any }) => {
        if (resp.data.status === 'success') {
            success && success(resp);
        } else {
            const title = resp.data.status ? resp.data.status.replace(/_/g, ' ') : 'Error';
            ctx.setOpenModal({
                message: resp.data.message,
                title: title.toUpperCase(),
            });
            failed && failed(resp);
        }
    }
}