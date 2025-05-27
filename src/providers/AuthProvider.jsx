import AuthContext from "../contexts/AuthContext";
import useAuth from "../hooks/useAuth";

const AuthProvider = ({ children }) => {
	const authInfo = useAuth();
	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
