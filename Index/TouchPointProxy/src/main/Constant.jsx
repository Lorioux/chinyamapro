import Five from "../Pages/Projects/TemplateFive"

export const PROXY_HOSTNAME = process.env.NODE_ENV === "production" ? process.env.REACT_APP_LOCAL_PROXY : process.env.REACT_APP_REMOTE_PROXY

export const ROUTES = {
    projects: {
        v5: () => <Five />
    }
}