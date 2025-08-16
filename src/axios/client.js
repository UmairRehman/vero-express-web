import axios from "axios";
import { store } from "../redux/store";
import { FinishLoading, TotalRequest } from "../redux/feature/loader";
import { notification } from "antd";

const Api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

Api.interceptors.request.use(
    async (config) => {
        await store?.dispatch(TotalRequest());
        config.headers["access-key"] = process.env.REACT_APP_ACCESS_KEY;
        config.headers["language"] = localStorage.getItem("i18nextLng") || "en";

        config.headers["authorization"] = localStorage.getItem("api_key");

        return config;
    },
    async (error) => {
        await store?.dispatch(FinishLoading());
        return Promise.reject(error);
    },
);

Api.interceptors.response.use(
    async (response) => {
        await store?.dispatch(FinishLoading());
        const { meta } = response.data;
        if (meta?.status == 201 || meta?.status == 200) {
            response.data.success = true;
        }
        return response;
    },
    async (error) => {
        const res = error?.response;
        const AUTH_DISABLED_NOTIFICATION_ENDPOINTS = ["me", "users/verify-hash"];
        await store?.dispatch(FinishLoading());
        let message =
            res?.data.message || res?.data?.meta?.message || res?.data?.error;

        if (Array.isArray(res?.data?.meta?.message)) {
            message = res?.data?.meta?.message[0];
        }
        if (
            !(
                window.location.href.includes("auth") &&
                AUTH_DISABLED_NOTIFICATION_ENDPOINTS.some((endpoint) =>
                    res.request.responseURL.includes(endpoint),
                )
            )
        ) {
            console.log(message);
        }
        res.data = { ...res?.data, success: false };
        console.log(res?.status, "Unauthorized access, redirecting to login");

        if (res?.status === 401 && !window.location.href.includes("auth")) {
            notification.destroy();
            notification["error"]({
                message: "error",
                description: "Please login to continue",
                duration: 6, // Notification will stay visible for 6 seconds
            });
            // window.location.href = "/";

            return res;
        } else if (res?.status === 410) {
            window.location.href = "/dashboard";
            return res;
        } else if (
            error?.response?.data?.error === "Your subscription has been expired."
        ) {
            if (window.location.pathname != "/user/my-account") {
                window.location.href = "/user/my-account";
            }
        }
        return res;
    },
);

export default Api;